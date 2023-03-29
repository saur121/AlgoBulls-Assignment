import { SmileOutlined } from "@ant-design/icons";
import {
	ColumnsState,
	ProColumns,
	ProFormInstance,
	BasicLayout,
	PageContainer,
} from "@ant-design/pro-components";
import { EditableProTable, ProFormRadio } from "@ant-design/pro-components";
import React, { useState, useRef } from "react";
import { Button, Tag, Card } from "antd";
import "@ant-design/pro-components/dist/components.css";
import dataSourceEdit, { DataSourceType } from "../data/dataSourceEdit";

const waitTime = (time: number = 100) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, time);
	});
};

//Color code for common Tags
const colorCode: Record<string, string> = {
	Regular: "blue",
	New: "green",
	HP: "volcano",
	Urgent: "red",
	Deprecated: "",
};

//using imported sample data
const defaultData: DataSourceType[] = [...dataSourceEdit];

function EditableTable() {
	const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
	const [dataSource, setDataSource] = useState<DataSourceType[]>([]);
	const [position, setPosition] = useState<"top" | "bottom" | "hidden">(
		"bottom"
	);

	const columns: ProColumns<DataSourceType>[] = [
		{
			dataIndex: "index",
			valueType: "indexBorder",
			width: 48,
		},
		{
			title: "Title",
			dataIndex: "title",
			width: 180,
			copyable: true,
			ellipsis: true,
			editable: () => true,

			//implementing sorting for string valued fields
			sorter: (a, b) => {
				let str2: string = "";
				let str1: string = "";
				if (typeof a.title === "string") str1 = a.title;
				if (typeof b.title === "string") str2 = b.title;
				return str2.localeCompare(str1);
			},

			formItemProps: {
				rules: [
					{
						//validation for mandatory field
						required: true,
						message: "This item is required",
					},
					{
						//validation for max length
						max: 100,
						message: "This item cannot exceed 100 characters",
					},
				],
			},
		},
		{
			title: "Description",
			dataIndex: "description",
			ellipsis: true,
			tip: "The description will automatically shrink if it is too long",
			editable: () => true,
			//sorting for string valued fields
			sorter: (a, b) => {
				let str2: string = "";
				let str1: string = "";
				if (typeof a.description === "string") str1 = a.description;
				if (typeof b.description === "string") str2 = b.description;
				return str2.localeCompare(str1);
			},
			formItemProps: {
				rules: [
					{
						//validation for mandatory field
						required: true,
						message: "This item is required",
					},
					{
						//validation for max length

						max: 1000,
						message: "This item cannot exceed 1000 characters",
					},
				],
			},
		},

		{
			title: "Status",
			dataIndex: "status",
			initialValue: "Open",
			width: 120,
			filters: true,
			onFilter: true,
			valueType: "select",
			editable: () => true,
			valueEnum: {
				//Default value is OPEN
				online: { text: "Open", status: "Default" },
				running: { text: "Working", status: "Processing" },
				close: { text: "Done", status: "Success" },
				error: { text: "OverDue", status: "Error" },
			},
			formItemProps: {
				rules: [
					{
						required: true,
						message: "This item is required",
					},
				],
			},
		},

		{
			title: "Tags",
			dataIndex: "tags",
			editable: () => true,
			//using multiple valued tag
			render: (_, record) => {
				if (typeof record.tags === "object") {
					return record.tags.map((item) => (
						<Tag color={colorCode[item]}>{item}</Tag>
					));
				} else if (typeof record.tags === "string") {
					//when a field is edited, it returns a string, so we need to split it and then use it.
					let newTags: string = record.tags;
					return newTags
						.split(",")
						.map((item: string) => (
							<Tag color={colorCode[item]}>{item}</Tag>
						));
				}
			},
		},

		{
			title: "Timestamp",
			key: "since",
			dataIndex: "createdAt",
			valueType: "dateTime",
			search: false,
			//Can't be edited by users.
			readonly: true,
			render: (_, record) => {
				let dd: number = Date.now() - Math.floor(Math.random() * 2000);
				if (typeof record.dueDate === "number" && record.dueDate)
					dd = record.dueDate;
				let date: Date = new Date(dd);
				return ` ${date.getFullYear()}-${
					(date.getMonth() + 1).toString().length === 2 ? "" : "0"
				}${date.getMonth() + 1}-${
					date.getDate().toString().length === 2 ? "" : "0"
				}${date.getDate()} ${
					date.getHours().toString().length === 2 ? "" : "0"
				}${date.getHours()}:${
					date.getMinutes().toString().length === 2 ? "" : "0"
				}${date.getMinutes()}:${
					date.getSeconds().toString().length === 2 ? "" : "0"
				}${date.getSeconds()}`;
			},

			sorter: (a, b) => {
				let x: number = 0;
				let y: number = 0;
				if (typeof a.createdAt === "number") x = a.createdAt;
				if (typeof b.createdAt === "number") y = b.createdAt;
				return x - y;
			},
		},

		{
			title: "Due Date",
			dataIndex: "dueDate",
			valueType: "date",
			sorter: (a, b) => {
				let x: number = 0;
				let y: number = 0;
				if (typeof a.dueDate === "number") x = a.dueDate;
				if (typeof b.dueDate === "number") y = b.dueDate;
				return x - y;
			},
			formItemProps: {
				rules: [
					{
						validator: async (_, record) => {
							if (record.dueDate < record.createdAt) {
								throw new Error(
									"‘Due Date’ field value cannot be before ‘Timestamp created’ field value"
								);
							}
						},
					},
				],
			},
		},
		{
			title: "Operation",
			valueType: "option",
			width: 200,
			render: (text, record, _, action) => [
				<Button
					key="editable"
					onClick={(e) => {
						e.preventDefault();
						action?.startEditable?.(record.id);
					}}
				>
					Edit
				</Button>,
				<Button
					key="delete"
					onClick={(e) => {
						e.preventDefault();
						if (
							window.confirm(
								"Are you sure you want to delete this item?"
							)
						)
							setDataSource(
								dataSource.filter(
									(item) => item.id !== record.id
								)
							);
					}}
				>
					Delete
				</Button>,
			],
		},
	];
	const [columnsStateMap, setColumnsStateMap] = useState<
		Record<string, ColumnsState>
	>({
		name: {
			show: false,
			order: 2,
		},
	});
	const ref = useRef<ProFormInstance>();
	const [collapsed, setCollapsed] = useState<boolean>(false);
	return (
		<BasicLayout
			fixSiderbar
			navTheme="light"
			breakpoint={false}
			defaultCollapsed
			pageTitleRender={false}
			menuDataRender={() => [
				{
					path: "/one",
					icon: <SmileOutlined />,
					name: "Route A",
					routes: [
						{
							path: "two",
							name: "Route B",
						},
					],
				},
			]}
			layout="mix"
			location={{
				pathname: "/one/two",
			}}
		>
			<PageContainer title="AlgoBulls : To Do Application">
				<Card>
					<>
						<EditableProTable<DataSourceType>
							rowKey="id"
							headerTitle="To Do Application"
							maxLength={35}
							scroll={{
								x: 960,
								y: 300,
							}}
							//Add a new Entry
							recordCreatorProps={
								position !== "hidden"
									? {
											position: position as "top",
											record: () => ({
												id: (
													Math.random() * 1000000
												).toFixed(0),
											}),
									  }
									: false
							}
							loading={false}
							columnsState={{
								value: columnsStateMap,
								onChange: setColumnsStateMap,
							}}
							dateFormatter="string"
							cardBordered
							search={{
								collapsed,
								onCollapse: setCollapsed,
							}}
							formRef={ref}
							toolBarRender={() => [
								<ProFormRadio.Group
									key="render"
									fieldProps={{
										value: position,
										onChange: (e) =>
											setPosition(e.target.value),
									}}
									options={[
										{
											label: "Add to Top",
											value: "top",
										},
										{
											label: "Add to Bottom",
											value: "bottom",
										},
										{
											label: "Hidden",
											value: "hidden",
										},
									]}
								/>,
							]}
							columns={columns}
							pagination={{
								pageSize: 10,
								onChange: (page) => console.log(page),
								showSizeChanger: true,
							}}
							request={async () => ({
								data: defaultData,
								total: defaultData.length,
								success: true,
							})}
							value={dataSource}
							onChange={setDataSource}
							editable={{
								type: "multiple",
								editableKeys,
								onSave: async (rowKey, data, row) => {
									console.log(rowKey, data, row);
									await waitTime(2000);
								},
								onChange: setEditableRowKeys,
							}}
						/>
					</>
				</Card>
			</PageContainer>
		</BasicLayout>
	);
}
export default EditableTable;

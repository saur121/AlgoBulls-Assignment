import { v4 as uuid } from "uuid";

const valueEnum: Record<number, string> = {
	0: "close",
	1: "running",
	2: "online",
	3: "error",
};

const tagMap: Record<number, string> = {
	0: "Regular",
	1: "New",
	2: "HP",
	3: "Urgent",
	4: "Deprecated",
};

export type DataSourceType = {
	id: React.Key;
	title?: string;
	children?: DataSourceType[];
	key?: string;
	name?: string;
	status?: string;
	dueDate?: number;
	createdAt?: number;
	description?: string;
	tags?: string[];
};
const defaultData: DataSourceType[] = [
	{
		id: 624748504,
		title: `lorem 1 ipsum dolor`,
		key: uuid(),
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		name: `TradeCode 1`,
		status: valueEnum[Math.floor(Math.random() * 10) % 4],
		dueDate: Date.now() - Math.floor(Math.random() * 1000),
		createdAt: Date.now() - Math.floor(Math.random() * 2000),
		tags: [
			tagMap[Math.floor(Math.random() * 10) % 3],
			tagMap[(Math.floor(Math.random() * 10) % 2) + 3],
		],
	},
	{
		id: 624691999,
		title: `lorem 2 ipsum dolor`,
		key: uuid(),
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		name: `TradeCode 2`,
		status: valueEnum[Math.floor(Math.random() * 10) % 4],
		dueDate: Date.now() - Math.floor(Math.random() * 1000),
		createdAt: Date.now() - Math.floor(Math.random() * 2000),
		tags: [
			tagMap[Math.floor(Math.random() * 10) % 3],
			tagMap[(Math.floor(Math.random() * 10) % 2) + 3],
		],
	},
	{
		id: 624692000,
		title: `lorem 3 ipsum dolor`,
		key: uuid(),
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		name: `TradeCode 3`,
		status: valueEnum[Math.floor(Math.random() * 10) % 4],
		dueDate: Date.now() - Math.floor(Math.random() * 1000),
		createdAt: Date.now() - Math.floor(Math.random() * 2000),
		tags: [
			tagMap[Math.floor(Math.random() * 10) % 3],
			tagMap[(Math.floor(Math.random() * 10) % 2) + 3],
		],
	},
	{
		id: 624692001,
		title: `lorem 4 ipsum dolor`,
		key: uuid(),
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		name: `TradeCode 4`,
		status: valueEnum[Math.floor(Math.random() * 10) % 4],
		dueDate: Date.now() - Math.floor(Math.random() * 1000),
		createdAt: Date.now() - Math.floor(Math.random() * 2000),
		tags: [
			tagMap[Math.floor(Math.random() * 10) % 3],
			tagMap[(Math.floor(Math.random() * 10) % 2) + 3],
		],
	},
	{
		id: 624691233,

		key: uuid(),
		title: `lorem 5 ipsum dolor`,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		name: `TradeCode 5`,
		status: valueEnum[Math.floor(Math.random() * 10) % 4],
		dueDate: Date.now() - Math.floor(Math.random() * 1000),
		createdAt: Date.now() - Math.floor(Math.random() * 2000),

		tags: [
			tagMap[Math.floor(Math.random() * 10) % 3],
			tagMap[(Math.floor(Math.random() * 10) % 2) + 3],
		],
	},
	{
		id: 624691234,

		key: uuid(),
		title: `lorem 6 ipsum dolor`,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		name: `TradeCode 6`,
		status: valueEnum[Math.floor(Math.random() * 10) % 4],
		dueDate: Date.now() - Math.floor(Math.random() * 1000),
		createdAt: Date.now() - Math.floor(Math.random() * 2000),

		tags: [
			tagMap[Math.floor(Math.random() * 10) % 3],
			tagMap[(Math.floor(Math.random() * 10) % 2) + 3],
		],
	},
	{
		id: 624691235,

		key: uuid(),
		title: `lorem 7 ipsum dolor`,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		name: `TradeCode 7`,
		status: valueEnum[Math.floor(Math.random() * 10) % 4],
		dueDate: Date.now() - Math.floor(Math.random() * 1000),
		createdAt: Date.now() - Math.floor(Math.random() * 2000),

		tags: [
			tagMap[Math.floor(Math.random() * 10) % 3],
			tagMap[(Math.floor(Math.random() * 10) % 2) + 3],
		],
	},
	{
		id: 624691236,

		key: uuid(),
		title: `lorem 8 ipsum dolor`,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		name: `TradeCode 8`,
		status: valueEnum[Math.floor(Math.random() * 10) % 4],
		dueDate: Date.now() - Math.floor(Math.random() * 1000),
		createdAt: Date.now() - Math.floor(Math.random() * 2000),

		tags: [
			tagMap[Math.floor(Math.random() * 10) % 3],
			tagMap[(Math.floor(Math.random() * 10) % 2) + 3],
		],
	},
	{
		id: 624691237,

		key: uuid(),
		title: `lorem 9 ipsum dolor`,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		name: `TradeCode 9`,
		status: valueEnum[Math.floor(Math.random() * 10) % 4],
		dueDate: Date.now() - Math.floor(Math.random() * 1000),
		createdAt: Date.now() - Math.floor(Math.random() * 2000),

		tags: [
			tagMap[Math.floor(Math.random() * 10) % 3],
			tagMap[(Math.floor(Math.random() * 10) % 2) + 3],
		],
	},
	{
		id: 624691238,

		key: uuid(),
		title: `lorem 10 ipsum dolor`,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		name: `TradeCode 10`,
		status: valueEnum[Math.floor(Math.random() * 10) % 4],
		dueDate: Date.now() - Math.floor(Math.random() * 1000),
		createdAt: Date.now() - Math.floor(Math.random() * 2000),

		tags: [
			tagMap[Math.floor(Math.random() * 10) % 3],
			tagMap[(Math.floor(Math.random() * 10) % 2) + 3],
		],
	},

	{
		id: 624691239,

		key: uuid(),
		title: `lorem 11 ipsum dolor`,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		name: `TradeCode 11`,
		status: valueEnum[Math.floor(Math.random() * 10) % 4],
		dueDate: Date.now() - Math.floor(Math.random() * 1000),
		createdAt: Date.now() - Math.floor(Math.random() * 2000),

		tags: [
			tagMap[Math.floor(Math.random() * 10) % 3],
			tagMap[(Math.floor(Math.random() * 10) % 2) + 3],
		],
	},
	{
		id: 624691240,

		key: uuid(),
		title: `lorem 12 ipsum dolor`,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		name: `TradeCode 12`,
		status: valueEnum[Math.floor(Math.random() * 10) % 4],
		dueDate: Date.now() - Math.floor(Math.random() * 1000),
		createdAt: Date.now() - Math.floor(Math.random() * 2000),

		tags: [
			tagMap[Math.floor(Math.random() * 10) % 3],
			tagMap[(Math.floor(Math.random() * 10) % 2) + 3],
		],
	},
	{
		id: 624691241,

		key: uuid(),
		title: `lorem 13 ipsum dolor`,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		name: `TradeCode 13`,
		status: valueEnum[Math.floor(Math.random() * 10) % 4],
		dueDate: Date.now() - Math.floor(Math.random() * 1000),
		createdAt: Date.now() - Math.floor(Math.random() * 2000),

		tags: [
			tagMap[Math.floor(Math.random() * 10) % 3],
			tagMap[(Math.floor(Math.random() * 10) % 2) + 3],
		],
	},
	{
		id: 624691242,

		key: uuid(),
		title: `lorem 14 ipsum dolor`,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		name: `TradeCode 14`,
		status: valueEnum[Math.floor(Math.random() * 10) % 4],
		dueDate: Date.now() - Math.floor(Math.random() * 1000),
		createdAt: Date.now() - Math.floor(Math.random() * 2000),

		tags: [
			tagMap[Math.floor(Math.random() * 10) % 3],
			tagMap[(Math.floor(Math.random() * 10) % 2) + 3],
		],
	},
	{
		id: 624691243,

		key: uuid(),
		title: `lorem 15 ipsum dolor`,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		name: `TradeCode 15`,
		status: valueEnum[Math.floor(Math.random() * 10) % 4],
		dueDate: Date.now() - Math.floor(Math.random() * 1000),
		createdAt: Date.now() - Math.floor(Math.random() * 2000),

		tags: [
			tagMap[Math.floor(Math.random() * 10) % 3],
			tagMap[(Math.floor(Math.random() * 10) % 2) + 3],
		],
	},
	{
		id: 624691244,

		key: uuid(),
		title: `lorem 16 ipsum dolor`,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		name: `TradeCode 16`,
		status: valueEnum[Math.floor(Math.random() * 10) % 4],
		dueDate: Date.now() - Math.floor(Math.random() * 1000),
		createdAt: Date.now() - Math.floor(Math.random() * 2000),

		tags: [
			tagMap[Math.floor(Math.random() * 10) % 3],
			tagMap[(Math.floor(Math.random() * 10) % 2) + 3],
		],
	},
	{
		id: 624691245,

		key: uuid(),
		title: `lorem 17 ipsum dolor`,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		name: `TradeCode 17`,
		status: valueEnum[Math.floor(Math.random() * 10) % 4],
		dueDate: Date.now() - Math.floor(Math.random() * 1000),
		createdAt: Date.now() - Math.floor(Math.random() * 2000),

		tags: [
			tagMap[Math.floor(Math.random() * 10) % 3],
			tagMap[(Math.floor(Math.random() * 10) % 2) + 3],
		],
	},
	{
		id: 624691246,

		key: uuid(),
		title: `lorem 18 ipsum dolor`,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		name: `TradeCode 18`,
		status: valueEnum[Math.floor(Math.random() * 10) % 4],
		dueDate: Date.now() - Math.floor(Math.random() * 1000),
		createdAt: Date.now() - Math.floor(Math.random() * 2000),

		tags: [
			tagMap[Math.floor(Math.random() * 10) % 3],
			tagMap[(Math.floor(Math.random() * 10) % 2) + 3],
		],
	},
	{
		id: 624691247,

		key: uuid(),
		title: `lorem 19 ipsum dolor`,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		name: `TradeCode 19`,
		status: valueEnum[Math.floor(Math.random() * 10) % 4],
		dueDate: Date.now() - Math.floor(Math.random() * 1000),
		createdAt: Date.now() - Math.floor(Math.random() * 2000),

		tags: [
			tagMap[Math.floor(Math.random() * 10) % 3],
			tagMap[(Math.floor(Math.random() * 10) % 2) + 3],
		],
	},
	{
		id: 624691248,

		key: uuid(),
		title: `lorem 20 ipsum dolor`,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		name: `TradeCode 20`,
		status: valueEnum[Math.floor(Math.random() * 10) % 4],
		dueDate: Date.now() - Math.floor(Math.random() * 1000),
		createdAt: Date.now() - Math.floor(Math.random() * 2000),

		tags: [
			tagMap[Math.floor(Math.random() * 10) % 3],
			tagMap[(Math.floor(Math.random() * 10) % 2) + 3],
		],
	},
	{
		id: 624691249,

		key: uuid(),
		title: `lorem 21 ipsum dolor`,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		name: `TradeCode 21`,
		status: valueEnum[Math.floor(Math.random() * 10) % 4],
		dueDate: Date.now() - Math.floor(Math.random() * 1000),
		createdAt: Date.now() - Math.floor(Math.random() * 2000),

		tags: [
			tagMap[Math.floor(Math.random() * 10) % 3],
			tagMap[(Math.floor(Math.random() * 10) % 2) + 3],
		],
	},
];

export default defaultData;

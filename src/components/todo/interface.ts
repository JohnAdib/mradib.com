export interface ITodo {
	item: string;
	completed?: boolean;
	id: string;
}

export interface IChecklistGroup {
	id: string;
	title: string;
	href?: string;
	items: ITodo[];
}

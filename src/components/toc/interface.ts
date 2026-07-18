export interface ITocSection {
	id: string;
	title: string;
}

export interface ITocProgress {
	done: number;
	total: number;
}

export interface IArticleTocProps {
	sections: ITocSection[];
	variant: "sidebar" | "inline";
	storageKey?: string;
	checklistIdsBySection?: Record<string, string[]>;
}

export interface IGridColumns {
	className: string;
	/** Columns at the widest breakpoint, so reveals stagger within one row. */
	columns: number;
}

/** Overview grid by step count, so every row fills at the widest breakpoint. */
export function overviewColumns(count: number): IGridColumns {
	if (count === 12) {
		return {
			className: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
			columns: 4,
		};
	}
	if (count === 10) {
		return { className: "sm:grid-cols-2 xl:grid-cols-5", columns: 5 };
	}
	return { className: "sm:grid-cols-2 lg:grid-cols-3", columns: 3 };
}

/** Rule cards: three across for three rules, two by two for four. */
export function rulesColumns(count: number): string {
	return count % 3 === 0 ? "sm:grid-cols-3" : "sm:grid-cols-2";
}

import type { GuideFrame } from "@/data/guides/guide-bundle";

export interface IGridColumns {
	className: string;
	/** Columns at the widest breakpoint, so reveals stagger within one row. */
	columns: number;
}

/**
 * Overview tiles by count and shape. Every row fills at the widest breakpoint,
 * and the grid's width is capped so a tile never grows past a thumbnail.
 */
export function overviewColumns(
	count: number,
	frame: GuideFrame,
): IGridColumns {
	if (frame === "page") {
		return { className: "max-w-2xl grid-cols-3", columns: 3 };
	}
	if (count === 12) {
		return {
			className: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
			columns: 4,
		};
	}
	if (count === 10) {
		return {
			className: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
			columns: 5,
		};
	}
	return { className: "grid-cols-2 sm:grid-cols-3 lg:max-w-4xl", columns: 3 };
}

/** Rule cards: three across for three rules, two by two for four. */
export function rulesColumns(count: number): string {
	return count % 3 === 0 ? "sm:grid-cols-3" : "sm:grid-cols-2";
}

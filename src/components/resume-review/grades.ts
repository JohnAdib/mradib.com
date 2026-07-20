/** Grade codes: 0 good (default), 1 needs work, 2 problem, 3 great, 4 N/A. */
export const PICKER_CODES = [3, 0, 1, 2, 4];

export function isIssue(code: number): boolean {
	return code === 1 || code === 2;
}

export function isStrength(code: number): boolean {
	return code === 3;
}

export interface IGradeStyle {
	row: string;
	icon: string;
	text: string;
	chip: string;
}

/** One place mapping a grade code to row / icon / chip classes. */
export function gradeStyle(code: number): IGradeStyle {
	if (code === 3) {
		return {
			row: "bg-emerald-500/10 ring-emerald-500/30",
			icon: "text-emerald-500",
			text: "text-emerald-600 dark:text-emerald-400",
			chip: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
		};
	}
	if (code === 1) {
		return {
			row: "bg-amber-500/10 ring-amber-500/30",
			icon: "text-amber-500",
			text: "text-amber-600 dark:text-amber-400",
			chip: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
		};
	}
	if (code === 2) {
		return {
			row: "bg-rose-500/10 ring-rose-500/40",
			icon: "text-rose-500",
			text: "text-rose-600 dark:text-rose-400",
			chip: "bg-rose-500/15 text-rose-700 dark:text-rose-300",
		};
	}
	if (code === 4) {
		return {
			row: "bg-zinc-100/60 ring-zinc-900/5 dark:bg-zinc-800/20 dark:ring-zinc-800",
			icon: "text-zinc-400",
			text: "text-zinc-500 dark:text-zinc-400",
			chip: "bg-zinc-500/15 text-zinc-600 dark:text-zinc-300",
		};
	}
	return {
		row: "bg-surface ring-zinc-900/5 hover:bg-zinc-50 dark:bg-zinc-800/30 dark:ring-zinc-800 dark:hover:bg-zinc-800/50",
		icon: "text-emerald-500",
		text: "text-emerald-600 dark:text-emerald-400",
		chip: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
	};
}

import type { IScorecardCopy } from "./scorecard-copy";

export function gradeLabel(code: number, copy: IScorecardCopy): string {
	if (code === 3) {
		return copy.gradeGreat;
	}
	if (code === 1) {
		return copy.gradeNeedsWork;
	}
	if (code === 2) {
		return copy.gradeProblem;
	}
	if (code === 4) {
		return copy.gradeNa;
	}
	return copy.gradeGood;
}

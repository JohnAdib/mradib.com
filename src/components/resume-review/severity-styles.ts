export interface ISeverityStyle {
	/** Row surface + ring. */
	row: string;
	/** Icon colour. */
	icon: string;
	/** Small count chip. */
	chip: string;
	/** Emphasis text (score number, group score). */
	text: string;
}

/** One place mapping a severity (0 good, 1 some issue, 2 problem) to classes. */
export function severityStyle(severity: number): ISeverityStyle {
	if (severity >= 2) {
		return {
			row: "bg-rose-500/10 ring-rose-500/40",
			icon: "text-rose-500",
			chip: "bg-rose-500/10 text-rose-700 dark:text-rose-300",
			text: "text-rose-600 dark:text-rose-400",
		};
	}
	if (severity === 1) {
		return {
			row: "bg-amber-500/10 ring-amber-500/30",
			icon: "text-amber-500",
			chip: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
			text: "text-amber-600 dark:text-amber-400",
		};
	}
	return {
		row: "bg-surface ring-zinc-900/5 hover:-translate-y-0.5 hover:shadow-sm hover:shadow-zinc-900/5 dark:bg-zinc-800/30 dark:ring-zinc-800 dark:hover:bg-zinc-800/50",
		icon: "text-emerald-500",
		chip: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
		text: "text-emerald-600 dark:text-emerald-400",
	};
}

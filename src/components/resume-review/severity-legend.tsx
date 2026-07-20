import clsx from "clsx";
import type { IScorecardCopy } from "./scorecard-copy";

/** The good / some issue / problem key shown above the builder's checklist. */
export function SeverityLegend({ copy }: { copy: IScorecardCopy }) {
	const dots = [
		{ label: copy.legendGood, color: "bg-emerald-500" },
		{ label: copy.legendSome, color: "bg-amber-500" },
		{ label: copy.legendProblem, color: "bg-rose-500" },
	];
	return (
		<div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400">
			{dots.map((dot) => (
				<span key={dot.label} className="inline-flex items-center gap-1.5">
					<span className={clsx("h-2.5 w-2.5 rounded-full", dot.color)} />
					{dot.label}
				</span>
			))}
		</div>
	);
}

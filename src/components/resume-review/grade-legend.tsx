import { gradeEmoji } from "./grade-emoji";
import { gradeLabel, LEGEND_CODES } from "./grades";
import type { IScorecardCopy } from "./scorecard-copy";

/** The grade key shown above the builder's checklist. */
export function GradeLegend({ copy }: { copy: IScorecardCopy }) {
	return (
		<div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400">
			{LEGEND_CODES.map((code) => (
				<span key={code} className="inline-flex items-center gap-1">
					<span aria-hidden="true" className="text-sm leading-none">
						{gradeEmoji(code)}
					</span>
					{gradeLabel(code, copy)}
				</span>
			))}
		</div>
	);
}

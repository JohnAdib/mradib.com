import clsx from "clsx";
import { GradeIcon } from "./grade-icon";
import { gradeLabel, gradeStyle, PICKER_CODES } from "./grades";
import type { IScorecardCopy } from "./scorecard-copy";

/** The grade key shown above the builder's checklist. */
export function GradeLegend({ copy }: { copy: IScorecardCopy }) {
	return (
		<div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400">
			{PICKER_CODES.map((code) => (
				<span key={code} className="inline-flex items-center gap-1">
					<GradeIcon
						code={code}
						className={clsx("h-3.5 w-3.5", gradeStyle(code).icon)}
					/>
					{gradeLabel(code, copy)}
				</span>
			))}
		</div>
	);
}

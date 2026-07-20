"use client";

import clsx from "clsx";
import type { IResolvedItem } from "@/data/resume-checklist";
import { GradeIcon } from "./grade-icon";
import { gradeLabel, gradeStyle, NA_CODE, SEGMENT_CODES } from "./grades";
import { ItemHeader } from "./item-header";
import type { IScorecardCopy } from "./scorecard-copy";

/**
 * A reviewer row: the item's title and one-line description, with an always
 * visible three-way segmented control (good / needs work / problem) and a small
 * N/A toggle. One tap sets the grade, no expand step. The active segment lifts
 * and carries the grade's colour so a mostly-good list stays calm.
 */
export function GradeRow({
	item,
	grade,
	onPick,
	copy,
}: {
	item: IResolvedItem;
	grade: number;
	onPick: (code: number) => void;
	copy: IScorecardCopy;
}) {
	const isNa = grade === NA_CODE;
	return (
		<div className="rounded-xl bg-surface px-3 py-2.5 ring-1 ring-zinc-900/5 dark:bg-zinc-800/30 dark:ring-zinc-800">
			<div className="flex items-start gap-2.5">
				<ItemHeader
					icon={
						<GradeIcon
							code={grade}
							className={clsx(
								"mt-0.5 h-5 w-5 shrink-0",
								gradeStyle(grade).icon,
							)}
						/>
					}
					title={item.title}
					description={item.problem}
				/>
			</div>
			<div className="mt-2.5 flex items-center gap-1.5">
				<div className="flex flex-1 gap-1 rounded-lg bg-zinc-900/5 p-1 dark:bg-zinc-800/60">
					{SEGMENT_CODES.map((code) => (
						<button
							key={code}
							type="button"
							onClick={() => onPick(code)}
							aria-pressed={grade === code}
							className={clsx(
								"flex flex-1 items-center justify-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium transition",
								grade === code
									? clsx(
											"bg-surface shadow-sm dark:bg-zinc-700",
											gradeStyle(code).text,
										)
									: "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100",
							)}
						>
							<GradeIcon code={code} className="h-3.5 w-3.5" />
							{gradeLabel(code, copy)}
						</button>
					))}
				</div>
				<button
					type="button"
					onClick={() => onPick(isNa ? 0 : NA_CODE)}
					aria-pressed={isNa}
					className={clsx(
						"shrink-0 rounded-lg px-2.5 py-1.5 text-xs font-medium transition",
						isNa
							? gradeStyle(NA_CODE).chip
							: "text-zinc-400 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-200",
					)}
				>
					{copy.gradeNa}
				</button>
			</div>
		</div>
	);
}

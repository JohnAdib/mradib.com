"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import type { IResolvedItem } from "@/data/resume-checklist";
import { GradeIcon } from "./grade-icon";
import { gradeLabel, gradeStyle, PICKER_CODES } from "./grades";
import type { IScorecardCopy } from "./scorecard-copy";

/**
 * A compact builder row. The lead icon shows the item's current grade; tapping
 * opens an inline picker so the reviewer sets great / good / needs work / problem
 * / N/A. Most items stay good, so only graded rows get touched.
 */
export function GradeRow({
	item,
	grade,
	isOpen,
	onToggle,
	onPick,
	copy,
}: {
	item: IResolvedItem;
	grade: number;
	isOpen: boolean;
	onToggle: () => void;
	onPick: (code: number) => void;
	copy: IScorecardCopy;
}) {
	const style = gradeStyle(grade);
	return (
		<div className={clsx("rounded-xl ring-1 transition", style.row)}>
			<button
				type="button"
				onClick={onToggle}
				className="flex w-full items-center gap-2.5 px-3 py-2.5 text-start"
			>
				<GradeIcon
					code={grade}
					className={clsx("h-5 w-5 shrink-0", style.icon)}
				/>
				<span className="min-w-0 flex-1 text-sm font-medium text-zinc-800 dark:text-zinc-100">
					{item.title}
				</span>
				<ChevronDownIcon
					className={clsx(
						"h-4 w-4 shrink-0 text-zinc-400 transition",
						isOpen && "rotate-180",
					)}
				/>
			</button>
			{isOpen && (
				<div className="flex flex-wrap gap-1.5 border-t border-zinc-900/5 px-2.5 pt-2 pb-2.5 dark:border-zinc-700/50">
					{PICKER_CODES.map((code) => {
						const optionStyle = gradeStyle(code);
						return (
							<button
								key={code}
								type="button"
								onClick={() => onPick(code)}
								className={clsx(
									"inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition",
									grade === code
										? optionStyle.chip
										: "text-zinc-600 hover:bg-zinc-900/5 dark:text-zinc-300 dark:hover:bg-zinc-800/60",
								)}
							>
								<GradeIcon
									code={code}
									className={clsx("h-4 w-4", optionStyle.icon)}
								/>
								{gradeLabel(code, copy)}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
}

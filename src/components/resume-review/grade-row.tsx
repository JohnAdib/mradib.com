"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import type { IResolvedItem } from "@/data/resume-checklist";
import { gradeEmoji } from "./grade-emoji";
import { gradeLabel } from "./grades";
import { ItemHeader } from "./item-header";
import type { IScorecardCopy } from "./scorecard-copy";

/**
 * A compact reviewer row. One tappable emoji shows the item's grade and cycles
 * through unset, good, needs work, problem on each tap. The title and one-line
 * description read the same as the candidate's result, and a trailing link opens
 * the guide section for that item.
 */
export function GradeRow({
	item,
	grade,
	guideHref,
	onCycle,
	copy,
}: {
	item: IResolvedItem;
	grade: number;
	guideHref: string;
	onCycle: () => void;
	copy: IScorecardCopy;
}) {
	return (
		<div className="flex items-start gap-2.5 rounded-xl bg-surface px-3 py-2.5 ring-1 ring-zinc-900/5 dark:bg-zinc-800/30 dark:ring-zinc-800">
			<ItemHeader
				icon={
					<button
						type="button"
						onClick={onCycle}
						aria-label={`${item.title}: ${gradeLabel(grade, copy)}`}
						className="-m-1 shrink-0 rounded-lg p-1 text-xl leading-none transition hover:scale-110 active:scale-95"
					>
						{gradeEmoji(grade)}
					</button>
				}
				title={item.title}
				description={item.problem}
			/>
			<Link
				href={guideHref}
				aria-label={copy.guideCta}
				className="mt-0.5 shrink-0 text-zinc-300 transition hover:text-accent-600 dark:text-zinc-600 dark:hover:text-accent-400"
			>
				<ArrowUpRightIcon className="h-4 w-4" />
			</Link>
		</div>
	);
}

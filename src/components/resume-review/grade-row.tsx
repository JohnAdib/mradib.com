"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import type { IResolvedItem } from "@/data/resume-checklist";
import { gradeEmoji } from "./grade-emoji";
import { gradeLabel } from "./grades";
import { ItemHeader } from "./item-header";
import type { IScorecardCopy } from "./scorecard-copy";

/**
 * A compact reviewer row. Tapping anywhere on the card cycles the grade emoji
 * through unset, good, needs work, problem. The title and one-line description
 * read the same as the candidate's result, and a separate trailing link opens
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
		<div className="flex items-stretch overflow-hidden rounded-xl bg-surface ring-1 ring-zinc-900/5 dark:bg-zinc-800/30 dark:ring-zinc-800">
			<button
				type="button"
				onClick={onCycle}
				aria-label={`${item.title}: ${gradeLabel(grade, copy)}`}
				className="flex flex-1 items-start gap-2.5 px-3 py-2.5 text-start transition hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60"
			>
				<ItemHeader
					icon={
						<span
							aria-hidden="true"
							className="mt-px shrink-0 text-xl leading-none"
						>
							{gradeEmoji(grade)}
						</span>
					}
					title={item.title}
					description={item.problem}
				/>
			</button>
			<Link
				href={guideHref}
				aria-label={copy.guideCta}
				className="flex shrink-0 items-start px-3 py-2.5 text-zinc-300 transition hover:bg-zinc-100/70 hover:text-accent-600 dark:text-zinc-600 dark:hover:bg-zinc-800/60 dark:hover:text-accent-400"
			>
				<ArrowUpRightIcon className="mt-px h-4 w-4" />
			</Link>
		</div>
	);
}

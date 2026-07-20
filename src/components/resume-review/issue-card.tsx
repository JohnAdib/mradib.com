"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ArrowUpRightIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import type { IResolvedItem } from "@/data/resume-checklist";
import type { IScorecardCopy } from "./scorecard-copy";

/** One flagged issue: tap to expand the fix, mark it done to lift the score. */
export function IssueCard({
	item,
	guideHref,
	resolved,
	onToggle,
	copy,
}: {
	item: IResolvedItem;
	guideHref: string;
	resolved: boolean;
	onToggle: () => void;
	copy: IScorecardCopy;
}) {
	return (
		<details
			className={clsx(
				"group rounded-2xl ring-1 transition",
				resolved
					? "bg-zinc-100/60 ring-zinc-900/5 dark:bg-zinc-800/20 dark:ring-zinc-800"
					: "bg-surface ring-zinc-900/10 dark:bg-zinc-800/40 dark:ring-zinc-700/50",
			)}
		>
			<summary className="flex cursor-pointer list-none items-start gap-3 p-4 [&::-webkit-details-marker]:hidden">
				<CheckCircleIcon
					className={clsx(
						"mt-0.5 h-5 w-5 shrink-0",
						resolved ? "text-accent-500" : "text-zinc-300 dark:text-zinc-600",
					)}
				/>
				<span className="min-w-0 flex-1">
					<span
						className={clsx(
							"block text-sm font-semibold",
							resolved
								? "text-zinc-400 line-through dark:text-zinc-500"
								: "text-zinc-800 dark:text-zinc-100",
						)}
					>
						{item.title}
					</span>
					{!resolved && (
						<span className="mt-1 block text-sm text-zinc-600 dark:text-zinc-400">
							{item.problem}
						</span>
					)}
				</span>
				<ChevronDownIcon className="mt-0.5 h-5 w-5 shrink-0 text-zinc-400 transition group-open:rotate-180" />
			</summary>
			<div className="pb-4 pe-4 ps-12">
				<p className="text-sm text-zinc-700 dark:text-zinc-300">{item.fix}</p>
				<div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
					<button
						type="button"
						onClick={onToggle}
						className={clsx(
							"inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition",
							resolved
								? "bg-zinc-900/5 text-zinc-600 hover:bg-zinc-100 dark:bg-zinc-800/60 dark:text-zinc-300"
								: "bg-accent-500/10 text-accent-700 hover:bg-accent-500/20 dark:text-accent-300",
						)}
					>
						<CheckCircleIcon className="h-4 w-4" />
						{resolved ? copy.fixed : copy.markFixed}
					</button>
					<Link
						href={guideHref}
						className="inline-flex items-center gap-1 text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
					>
						{copy.guideCta}
						<ArrowUpRightIcon className="h-3.5 w-3.5" />
					</Link>
				</div>
			</div>
		</details>
	);
}

"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ArrowUpRightIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import type { IResolvedItem } from "@/data/resume-checklist";
import { gradeEmoji } from "./grade-emoji";
import { ItemHeader } from "./item-header";
import type { IScorecardCopy } from "./scorecard-copy";

function LeadIcon({
	severity,
	resolved,
}: {
	severity: number;
	resolved: boolean;
}) {
	return (
		<span className="mt-0.5 shrink-0 text-lg leading-none" aria-hidden="true">
			{resolved ? "✅" : gradeEmoji(severity)}
		</span>
	);
}

/** One flagged issue: tap to expand the fix, mark it done to lift the score. */
export function IssueCard({
	item,
	severity,
	guideHref,
	resolved,
	onToggle,
	copy,
}: {
	item: IResolvedItem;
	severity: number;
	guideHref: string;
	resolved: boolean;
	onToggle: () => void;
	copy: IScorecardCopy;
}) {
	return (
		<details
			className={clsx(
				"group rounded-xl ring-1 transition duration-200",
				resolved
					? "bg-zinc-100/60 ring-zinc-900/5 dark:bg-zinc-800/20 dark:ring-zinc-800"
					: "bg-surface shadow-sm shadow-zinc-900/5 ring-zinc-900/10 hover:shadow-md hover:shadow-zinc-900/[0.07] dark:bg-zinc-800/40 dark:shadow-none dark:ring-zinc-700/50",
			)}
		>
			<summary className="flex cursor-pointer list-none items-start gap-2.5 px-3 py-2.5 [&::-webkit-details-marker]:hidden">
				<ItemHeader
					icon={<LeadIcon severity={severity} resolved={resolved} />}
					title={item.title}
					description={item.problem}
					muted={resolved}
				/>
				<ChevronDownIcon className="mt-0.5 h-5 w-5 shrink-0 text-zinc-400 transition group-open:rotate-180" />
			</summary>
			<div className="pb-3 pe-3 ps-10">
				<p className="text-sm text-zinc-700 dark:text-zinc-300">{item.fix}</p>
				<div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
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

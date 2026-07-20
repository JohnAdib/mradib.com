"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
	ArrowUpRightIcon,
	CheckCircleIcon,
	ExclamationCircleIcon,
	ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import type { IResolvedItem } from "@/data/resume-checklist";
import type { IScorecardCopy } from "./scorecard-copy";

function LeadIcon({
	severity,
	resolved,
}: {
	severity: number;
	resolved: boolean;
}) {
	const className = "mt-0.5 h-5 w-5 shrink-0";
	if (resolved) {
		return <CheckCircleIcon className={clsx(className, "text-accent-500")} />;
	}
	if (severity >= 2) {
		return (
			<ExclamationTriangleIcon className={clsx(className, "text-rose-500")} />
		);
	}
	return (
		<ExclamationCircleIcon className={clsx(className, "text-amber-500")} />
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
				<LeadIcon severity={severity} resolved={resolved} />
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
						<span className="mt-0.5 block text-xs text-zinc-600 dark:text-zinc-400">
							{item.problem}
						</span>
					)}
				</span>
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

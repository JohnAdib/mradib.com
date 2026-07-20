"use client";

import { FlagIcon as FlagOutline } from "@heroicons/react/24/outline";
import { FlagIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import type { IResolvedItem } from "@/data/resume-checklist";

/** A builder row: tap to flag this topic as a problem in the CV under review. */
export function FlagRow({
	item,
	flagged,
	onToggle,
}: {
	item: IResolvedItem;
	flagged: boolean;
	onToggle: () => void;
}) {
	return (
		<button
			type="button"
			onClick={onToggle}
			aria-pressed={flagged}
			className={clsx(
				"flex w-full items-start gap-3 rounded-2xl p-4 text-start ring-1 transition",
				flagged
					? "bg-amber-500/10 ring-amber-500/30"
					: "bg-surface ring-zinc-900/5 hover:-translate-y-0.5 hover:shadow-sm hover:shadow-zinc-900/5 dark:bg-zinc-800/30 dark:ring-zinc-800 dark:hover:bg-zinc-800/50",
			)}
		>
			{flagged ? (
				<FlagIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
			) : (
				<FlagOutline className="mt-0.5 h-5 w-5 shrink-0 text-zinc-400" />
			)}
			<span className="min-w-0 flex-1">
				<span
					className={clsx(
						"block text-sm font-semibold",
						flagged
							? "text-zinc-900 dark:text-zinc-100"
							: "text-zinc-800 dark:text-zinc-100",
					)}
				>
					{item.title}
				</span>
				<span className="mt-1 block text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
					{item.question}
				</span>
			</span>
		</button>
	);
}

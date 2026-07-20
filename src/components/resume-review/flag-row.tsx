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
				"flex w-full items-start gap-3 rounded-xl p-3 text-start transition",
				flagged
					? "bg-amber-500/10 ring-1 ring-amber-500/30"
					: "hover:bg-zinc-900/5 dark:hover:bg-zinc-800/60",
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
						"block text-sm font-medium",
						flagged
							? "text-zinc-900 dark:text-zinc-100"
							: "text-zinc-700 dark:text-zinc-300",
					)}
				>
					{item.title}
				</span>
				<span className="mt-0.5 block text-xs text-zinc-500 dark:text-zinc-400">
					{item.question}
				</span>
			</span>
		</button>
	);
}

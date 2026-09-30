import clsx from "clsx";
import Link from "next/link";
import type { IKitEntry } from "@/data/guides/fundraising-kit";
import { StageFrame } from "../presenter/stage-frame";

interface IKitCardProps {
	number: string;
	entry: IKitEntry;
	current: boolean;
	hereLabel: string;
}

/** One guide in the kit: its artifact as a tile, then its name and one line. */
export function KitCard({ number, entry, current, hereLabel }: IKitCardProps) {
	return (
		<Link
			href={entry.article.pagePath}
			aria-current={current ? "page" : undefined}
			className="group block h-full rounded-2xl transition hover:-translate-y-1 motion-reduce:transition-none"
		>
			<StageFrame
				frame={entry.frame}
				size="tile"
				className={clsx(
					"aspect-[4/3]! transition group-hover:shadow-lg group-hover:shadow-accent-500/20 motion-reduce:transition-none",
					current
						? "ring-2 ring-accent-500/70 dark:ring-accent-400/70"
						: "group-hover:ring-accent-400/60",
				)}
			>
				<div className="flex h-full flex-col justify-between gap-2">
					<span className="font-display text-2xl font-semibold leading-none tabular-nums text-white/30 sm:text-3xl">
						{number}
					</span>
					<span className="text-sm font-semibold leading-tight text-balance text-white sm:text-base">
						{entry.name}
					</span>
				</div>
			</StageFrame>
			<span className="mt-3 flex flex-wrap items-center gap-2">
				<span className="text-sm text-zinc-600 dark:text-zinc-400">
					{entry.short}
				</span>
				{current ? (
					<span className="rounded-full bg-accent-700/10 px-2 py-0.5 text-xs font-medium text-accent-700 dark:bg-accent-400/10 dark:text-accent-400">
						{hereLabel}
					</span>
				) : null}
			</span>
		</Link>
	);
}

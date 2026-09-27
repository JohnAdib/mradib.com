import clsx from "clsx";
import Link from "next/link";
import type { IKitEntry } from "@/data/guides/fundraising-kit";

interface IKitCardProps {
	number: string;
	entry: IKitEntry;
	current: boolean;
	hereLabel: string;
}

/** One guide in the kit: its number, name, one line, and where you are. */
export function KitCard({ number, entry, current, hereLabel }: IKitCardProps) {
	return (
		<Link
			href={entry.article.pagePath}
			aria-current={current ? "page" : undefined}
			className={clsx(
				"group flex h-full min-w-0 items-center gap-4 rounded-2xl bg-surface p-4 ring-1 transition",
				"hover:-translate-y-0.5 hover:shadow-lg hover:shadow-zinc-900/5 motion-reduce:transition-none",
				"sm:min-h-40 sm:flex-col sm:items-start sm:justify-between sm:rounded-3xl sm:p-5",
				"dark:bg-zinc-800/40 dark:hover:bg-zinc-800/70",
				current
					? "ring-accent-700/40 dark:ring-accent-400/40"
					: "ring-zinc-900/10 dark:ring-zinc-700/50",
			)}
		>
			<span
				aria-hidden="true"
				className="font-display text-3xl font-semibold leading-none tabular-nums text-zinc-300 sm:text-4xl dark:text-zinc-600"
			>
				{number}
			</span>
			<span className="min-w-0">
				<span className="flex flex-wrap items-center gap-2">
					<span className="text-base font-semibold text-zinc-800 transition-colors group-hover:text-accent-700 dark:text-zinc-100 dark:group-hover:text-accent-400">
						{entry.name}
					</span>
					{current ? (
						<span className="rounded-full bg-accent-700/10 px-2 py-0.5 text-xs font-medium text-accent-700 dark:bg-accent-400/10 dark:text-accent-400">
							{hereLabel}
						</span>
					) : null}
				</span>
				<span className="mt-0.5 block text-sm text-zinc-600 dark:text-zinc-400">
					{entry.short}
				</span>
			</span>
		</Link>
	);
}

import clsx from "clsx";
import type { IPitchSlide } from "@/data/pitch-deck";

interface IOverviewItemProps {
	number: string;
	slide: IPitchSlide;
}

/** One slide in the overview: a row on phones, a mini slide from sm up. */
export function OverviewItem({ number, slide }: IOverviewItemProps) {
	return (
		<a
			href={`#${slide.id}`}
			className={clsx(
				"group flex h-full min-w-0 items-center gap-4 rounded-2xl bg-surface p-4 ring-1 ring-zinc-900/10 transition",
				"hover:-translate-y-0.5 hover:shadow-lg hover:shadow-zinc-900/5 motion-reduce:transition-none",
				"sm:min-h-44 sm:flex-col sm:items-start sm:justify-between sm:rounded-3xl sm:p-5",
				"dark:bg-zinc-800/40 dark:ring-zinc-700/50 dark:hover:bg-zinc-800/70",
			)}
		>
			<span
				aria-hidden="true"
				className="font-display text-3xl font-semibold leading-none tabular-nums text-zinc-300 sm:text-4xl dark:text-zinc-600"
			>
				{number}
			</span>
			<span className="min-w-0">
				<span className="block text-base font-semibold text-zinc-800 transition-colors group-hover:text-accent-700 dark:text-zinc-100 dark:group-hover:text-accent-400">
					{slide.title}
				</span>
				<span className="mt-0.5 block text-sm text-zinc-600 dark:text-zinc-400">
					{slide.question}
				</span>
			</span>
		</a>
	);
}

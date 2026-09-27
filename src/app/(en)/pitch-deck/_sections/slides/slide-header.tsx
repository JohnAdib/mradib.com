import type { ISlideLabels } from "@/data/pitch-deck";

interface ISlideHeaderProps {
	id: string;
	number: string;
	total: number;
	title: string;
	question: string;
	labels: ISlideLabels;
}

/** The numeral, the position, the self-linking title, and the investor question. */
export function SlideHeader({
	id,
	number,
	total,
	title,
	question,
	labels,
}: ISlideHeaderProps) {
	return (
		<div className="grid grid-cols-[auto_1fr] items-start gap-x-4 sm:gap-x-6">
			<span
				aria-hidden="true"
				className="font-display text-5xl font-semibold leading-none tabular-nums text-zinc-300 sm:text-7xl dark:text-zinc-700"
			>
				{number}
			</span>
			<div className="min-w-0 pt-1">
				<p className="text-xs font-semibold tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
					{labels.slide} {number} {labels.of} {total}
				</p>
				<h3 className="mt-1 font-display text-2xl font-semibold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
					<a href={`#${id}`} className="hover:underline">
						{title}
					</a>
				</h3>
				<p className="mt-2 text-lg font-medium text-accent-700 dark:text-accent-400">
					{question}
				</p>
			</div>
		</div>
	);
}

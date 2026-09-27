import type { IDeckHeading } from "@/data/pitch-deck";

interface IDeckSectionHeadingProps {
	/** The section id, so the heading links to itself. */
	id: string;
	heading: IDeckHeading;
}

/** Eyebrow, self-linking h2, and an optional intro line for one page part. */
export function DeckSectionHeading({ id, heading }: IDeckSectionHeadingProps) {
	return (
		<div className="max-w-2xl">
			<p className="text-sm font-semibold tracking-wider text-accent-700 uppercase dark:text-accent-400">
				{heading.eyebrow}
			</p>
			<h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
				<a href={`#${id}`} className="hover:underline">
					{heading.title}
				</a>
			</h2>
			{heading.intro ? (
				<p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
					{heading.intro}
				</p>
			) : null}
		</div>
	);
}

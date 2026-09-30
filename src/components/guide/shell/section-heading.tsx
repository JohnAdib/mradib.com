import type { IGuideHeading } from "@/data/guides/guide-interface";

interface IGuideSectionHeadingProps {
	/** The section id, so the heading links to itself. */
	id: string;
	heading: IGuideHeading;
}

/** Eyebrow, self-linking h2, and an optional intro line for one page part. */
export function GuideSectionHeading({
	id,
	heading,
}: IGuideSectionHeadingProps) {
	return (
		<div className="max-w-2xl">
			<p className="text-sm font-semibold tracking-wider text-accent-700 uppercase dark:text-accent-400">
				{heading.eyebrow}
			</p>
			<h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance text-zinc-800 sm:text-4xl dark:text-zinc-100">
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

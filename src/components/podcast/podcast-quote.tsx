import type { PodcastChapter } from "@/data/podcast/chapter";
import { podcastTimestamp } from "./podcast-timestamp";

export function PodcastQuote({
	quote,
}: {
	quote: NonNullable<PodcastChapter["quote"]>;
}) {
	return (
		<figure className="relative mt-8 overflow-hidden rounded-3xl bg-accent-500/5 p-7 ring-1 ring-accent-700/15 sm:p-9 dark:bg-accent-500/10 dark:ring-accent-400/15">
			<span
				aria-hidden="true"
				className="block text-5xl leading-none font-semibold text-accent-700 dark:text-accent-400"
			>
				“
			</span>
			<blockquote className="mt-2 font-display text-2xl leading-snug font-semibold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
				{quote.text}
			</blockquote>
			<figcaption className="mt-6 flex flex-wrap justify-between gap-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
				<span>John Adib{quote.edited ? " · Edited for clarity" : ""}</span>
				<span>At {podcastTimestamp(quote.seconds)} in the episode</span>
			</figcaption>
		</figure>
	);
}

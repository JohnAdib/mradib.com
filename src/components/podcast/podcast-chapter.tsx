import type { PodcastChapter as Chapter } from "@/data/podcast/chapter";
import { InterviewChart } from "./interview-chart";
import { PodcastQuote } from "./podcast-quote";
import { podcastTimestamp } from "./podcast-timestamp";

export function PodcastChapter({
	chapter,
	index,
}: {
	chapter: Chapter;
	index: number;
}) {
	return (
		<section
			id={chapter.id}
			aria-labelledby={`heading-${chapter.id}`}
			className="scroll-mt-24 border-b border-zinc-900/10 pb-12 last:border-0 dark:border-zinc-700/50"
		>
			<div className="flex flex-wrap justify-between gap-3 text-xs">
				<span className="font-medium tracking-wider text-accent-700 uppercase dark:text-accent-400">
					Topic {String(index + 1).padStart(2, "0")}
				</span>
				<span className="text-zinc-500 dark:text-zinc-400">
					Discussed from {podcastTimestamp(chapter.seconds)}
				</span>
			</div>
			<h2
				id={`heading-${chapter.id}`}
				className="mt-5 font-display text-3xl leading-tight font-semibold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100"
			>
				{chapter.title}
			</h2>
			<div className="mt-6 space-y-5 text-base leading-8 text-zinc-600 dark:text-zinc-400">
				{chapter.paragraphs.map((paragraph) => (
					<p key={paragraph}>{paragraph}</p>
				))}
			</div>
			{chapter.quote && <PodcastQuote quote={chapter.quote} />}
			{chapter.id === "interviews" && <InterviewChart />}
		</section>
	);
}

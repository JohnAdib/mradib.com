import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import type { IPodcastAppearance } from "@/data/talks/talk-interface";

export function TalksPodcast({ podcast }: { podcast?: IPodcastAppearance }) {
	if (!podcast) {
		return null;
	}

	return (
		<section>
			<h2 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
				Podcast
			</h2>
			<Link
				href={podcast.path ?? podcast.url}
				className="group mt-6 flex flex-col gap-5 rounded-3xl bg-surface p-6 ring-1 ring-zinc-900/10 transition hover:bg-accent-500/5 hover:ring-accent-700/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700 sm:flex-row sm:items-center dark:bg-zinc-800/40 dark:ring-zinc-700/50 dark:hover:bg-accent-500/10 dark:hover:ring-accent-400/40 dark:focus-visible:outline-accent-400"
			>
				<span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-accent-500/10 text-accent-700 dark:bg-accent-500/15 dark:text-accent-400">
					<MusicalNoteIcon aria-hidden="true" className="h-6 w-6" />
				</span>
				<div className="min-w-0 flex-1">
					<div className="flex flex-wrap items-center gap-x-3 gap-y-1">
						<p className="font-display text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
							{podcast.show}
						</p>
						<span className="rounded-full bg-zinc-900/5 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-white/10 dark:text-zinc-300">
							{podcast.duration}
						</span>
					</div>
					<p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
						{podcast.title}
					</p>
				</div>
				<span className="inline-flex flex-none items-center justify-center rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-zinc-100 transition group-hover:bg-zinc-700 dark:bg-zinc-700 dark:group-hover:bg-zinc-600">
					{podcast.path ? "Explore the conversation" : "Listen on Spotify"}
				</span>
			</Link>
		</section>
	);
}

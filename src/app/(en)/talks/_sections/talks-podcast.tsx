import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/button";
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
			<div className="mt-6 flex flex-col gap-5 rounded-3xl bg-surface p-6 ring-1 ring-zinc-900/10 sm:flex-row sm:items-center dark:bg-zinc-800/40 dark:ring-zinc-700/50">
				<span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-accent-500/10 text-accent-700 dark:bg-accent-500/15 dark:text-accent-400">
					<MusicalNoteIcon className="h-6 w-6" />
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
				<Button href={podcast.url} className="flex-none">
					Listen on Spotify
				</Button>
			</div>
		</section>
	);
}

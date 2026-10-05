import { ArrowLeftIcon, PlayIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { Button } from "@/components/button";
import { podcastEpisode as episode } from "@/data/podcast/episode";
import { formatDateTime } from "@/lib/datetime/format-date-time";

export function PodcastHero() {
	return (
		<header className="reveal-rise max-w-3xl">
			<Link
				href="/talks"
				className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-accent-700 dark:text-zinc-400 dark:hover:text-accent-400"
			>
				<ArrowLeftIcon className="size-4" />
				Back to talks
			</Link>
			<p className="mt-10 text-xs font-medium tracking-widest text-accent-700 uppercase dark:text-accent-400">
				In conversation · {episode.show}
			</p>
			<h1 className="mt-5 font-display text-4xl leading-tight font-semibold tracking-tight text-zinc-800 sm:text-6xl dark:text-zinc-100">
				{episode.title}
			</h1>
			<p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
				{episode.intro}
			</p>
			<div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-zinc-500 dark:text-zinc-400">
				<time dateTime={episode.date}>
					{formatDateTime({ datetime: episode.date })}
				</time>
				<span>
					{episode.duration} with {episode.host}
				</span>
			</div>
			<div className="mt-8 flex flex-wrap gap-4">
				<Button href={episode.url}>
					<PlayIcon className="size-4" />
					Listen on Spotify
				</Button>
				<Button href="#conversation" variant="secondary">
					Explore the ten topics
				</Button>
			</div>
			<p className="mt-10 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
				{episode.bio}
			</p>
		</header>
	);
}

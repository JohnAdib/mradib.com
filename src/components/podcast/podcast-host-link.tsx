import { podcastEpisode } from "@/data/podcast/episode";

export function PodcastHostLink() {
	return (
		<a
			href={podcastEpisode.hostUrl}
			className="underline decoration-accent-500/40 underline-offset-4 transition hover:text-accent-700 dark:hover:text-accent-400"
		>
			{podcastEpisode.host}
		</a>
	);
}

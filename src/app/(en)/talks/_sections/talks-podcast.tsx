import { Card } from "@/components/card";
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
			<div className="mt-6">
				<Card as="article">
					<Card.Eyebrow>
						{podcast.show} · Spotify · {podcast.duration}
					</Card.Eyebrow>
					<Card.Title href={podcast.url}>{podcast.title}</Card.Title>
					<Card.Description>{podcast.summary}</Card.Description>
					<Card.Cta>Listen on Spotify</Card.Cta>
				</Card>
			</div>
		</section>
	);
}

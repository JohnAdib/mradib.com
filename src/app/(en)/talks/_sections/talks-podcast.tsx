import { Card } from "@/components/card";
import type { IPodcastAppearance } from "@/data/talks/talk-interface";

export function TalksPodcast({ podcast }: { podcast?: IPodcastAppearance }) {
	if (!podcast) {
		return null;
	}

	return (
		<section className="mt-20 max-w-3xl">
			<h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
				Podcast
			</h2>
			<div className="mt-8">
				<Card as="article">
					<Card.Eyebrow decorate>
						{podcast.show} · Spotify · {podcast.duration}
					</Card.Eyebrow>
					<Card.Title href={podcast.url}>{podcast.title}</Card.Title>
					<Card.Description>
						{podcast.summary} My first podcast in English. Small, honest, and a
						lot of fun to record.
					</Card.Description>
					<Card.Cta>Listen on Spotify</Card.Cta>
				</Card>
			</div>
		</section>
	);
}

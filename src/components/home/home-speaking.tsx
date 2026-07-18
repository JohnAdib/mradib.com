import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { podcastAppearances, talks } from "@/data/talks/talks";
import { SectionHeader } from "./section-header";

export function HomeSpeaking() {
	const [podcast] = podcastAppearances;

	return (
		<Container className="mt-20 sm:mt-28">
			<SectionHeader
				title="Speaking"
				href="/talks"
				linkText="Talks & podcast"
			/>
			<div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
				{talks.map((talk) => (
					<Card as="article" key={talk.slug}>
						<Card.Eyebrow decorate>
							{talk.event} · {talk.date.slice(0, 4)}
						</Card.Eyebrow>
						<Card.Title href={talk.articlePath}>{talk.title}</Card.Title>
						<Card.Description>{talk.summary}</Card.Description>
						<Card.Cta>Slides & story</Card.Cta>
					</Card>
				))}
				{podcast && (
					<Card as="article">
						<Card.Eyebrow decorate>Podcast · {podcast.show}</Card.Eyebrow>
						<Card.Title href={podcast.url}>{podcast.title}</Card.Title>
						<Card.Description>{podcast.summary}</Card.Description>
						<Card.Cta>Listen on Spotify ({podcast.duration})</Card.Cta>
					</Card>
				)}
			</div>
		</Container>
	);
}

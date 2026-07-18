import Link from "next/link";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { getAward } from "@/data/awards";
import { getTalk } from "@/data/talks/get-talk";
import { podcastAppearances } from "@/data/talks/talks";
import { SectionHeader } from "./section-header";

const award = getAward("worlds-most-influential-mentor");
const talk = getTalk("ai-first-architecture");
const [podcast] = podcastAppearances;

const hubLinks = [
	{ label: "All awards", href: "/awards" },
	{ label: "All talks", href: "/talks" },
	{ label: "All articles", href: "/articles" },
];

export function HomeHighlights() {
	return (
		<Container className="mt-20 sm:mt-28">
			<SectionHeader title="Selected highlights" />
			<div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
				<Card as="article">
					<Card.Eyebrow decorate>ADPList · 2024 and 2026</Card.Eyebrow>
					<Card.Title href={`/awards/${award.slug}`}>{award.name}</Card.Title>
					<Card.Description>
						Selected from 32,000+ mentors across 140+ countries, and listed
						again in 2026.
					</Card.Description>
					<Card.Cta>The story</Card.Cta>
				</Card>
				<Card as="article">
					<Card.Eyebrow decorate>AI Coding Summit · 2025</Card.Eyebrow>
					<Card.Title href={talk.articlePath}>{talk.title}</Card.Title>
					<Card.Description>{talk.summary}</Card.Description>
					<Card.Cta>Slides and story</Card.Cta>
				</Card>
				{podcast && (
					<Card as="article">
						<Card.Eyebrow decorate>Podcast · {podcast.show}</Card.Eyebrow>
						<Card.Title href={podcast.url}>{podcast.title}</Card.Title>
						<Card.Description>{podcast.summary}</Card.Description>
						<Card.Cta>Listen on Spotify ({podcast.duration})</Card.Cta>
					</Card>
				)}
			</div>
			<p className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm">
				{hubLinks.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className="font-medium text-accent-700 transition hover:text-accent-600 dark:text-accent-400"
					>
						{link.label} →
					</Link>
				))}
			</p>
		</Container>
	);
}

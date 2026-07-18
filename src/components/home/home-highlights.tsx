import {
	MicrophoneIcon,
	MusicalNoteIcon,
	TrophyIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Container } from "@/components/container";
import { getAward } from "@/data/awards";
import { getTalk } from "@/data/talks/get-talk";
import { podcastAppearances } from "@/data/talks/talks";
import { HighlightCard, type IHighlight } from "./highlight-card";
import { SectionHeader } from "./section-header";

const award = getAward("worlds-most-influential-mentor");
const talk = getTalk("ai-first-architecture");
const [podcast] = podcastAppearances;

const highlights: IHighlight[] = [
	{
		icon: TrophyIcon,
		eyebrow: "ADPList · 2024 and 2026",
		title: award.name,
		href: `/awards/${award.slug}`,
		description:
			"Selected from 32,000+ mentors across 140+ countries, and listed again in 2026.",
		cta: "The story",
	},
	{
		icon: MicrophoneIcon,
		eyebrow: "AI Coding Summit · 2025",
		title: talk.title,
		href: talk.articlePath ?? "/talks",
		description: talk.summary,
		cta: "Slides and story",
	},
	{
		icon: MusicalNoteIcon,
		eyebrow: `Podcast · ${podcast?.show ?? ""}`,
		title: podcast?.title ?? "",
		href: podcast?.url ?? "/talks",
		description: podcast?.summary ?? "",
		cta: `Listen on Spotify (${podcast?.duration ?? ""})`,
		external: true,
	},
];

const hubLinks = [
	{ label: "All awards", href: "/awards" },
	{ label: "All talks", href: "/talks" },
	{ label: "All articles", href: "/articles" },
];

export function HomeHighlights() {
	return (
		<Container className="mt-20 sm:mt-28">
			<SectionHeader title="Selected highlights" />
			<div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{highlights.map((highlight) => (
					<HighlightCard key={highlight.title} highlight={highlight} />
				))}
			</div>
			<p className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
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

import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CopyButton } from "@/components/copy-button";
import Faq from "@/components/faq/faq";
import { ItemListJsonLd } from "@/components/json-ld/item-list-json-ld";
import { Reveal } from "@/components/reveal/reveal";
import { TalkTimeline } from "@/components/talk/talk-timeline";
import { UpcomingTalks } from "@/components/talk/upcoming-talks";
import { podcastAppearances, talks } from "@/data/talks/talks";
import { homepageUrl } from "@/lib/constants/url";
import { ogMetadata } from "@/lib/og-metadata";
import { buildPreviousTalksText } from "@/lib/talks/build-previous-talks-text";
import { TalksClosing } from "./_sections/talks-closing";
import { talksFaq } from "./_sections/talks-faq-data";
import { TalksHero } from "./_sections/talks-hero";
import { TalksPodcast } from "./_sections/talks-podcast";
import { TalksTopics } from "./_sections/talks-topics";

export const metadata: Metadata = {
	title: "Talks & Speaking",
	description:
		"John Adib speaks on AI-first development and engineering leadership: AI Coding Summit (800+ engineers), React Advanced at Figma, JavaScript London.",
	...ogMetadata("/talks"),
};

export default function TalksPage() {
	const previous = talks.filter((talk) => talk.status !== "upcoming");
	const upcoming = talks.filter((talk) => talk.status === "upcoming");
	return (
		<>
			{/* No-JS and pre-hydration fallback so scroll-revealed content is always visible. */}
			<noscript>
				<style>{".reveal-on-scroll{opacity:1;transform:none;}"}</style>
			</noscript>
			<Container className="mt-16 sm:mt-32">
				<ItemListJsonLd
					name="Talks by John Adib"
					items={talks.map((talk) => ({
						name: talk.event ? `${talk.title} (${talk.event})` : talk.title,
						url: talk.path
							? `${homepageUrl}${talk.path}`
							: `${homepageUrl}/talks`,
					}))}
				/>

				<TalksHero />
				<section id="topics" className="scroll-mt-24">
					<TalksTopics />
				</section>

				<UpcomingTalks talks={upcoming} />

				<section id="talks" className="mt-16 max-w-3xl scroll-mt-24 sm:mt-20">
					<div className="flex items-center justify-between gap-3">
						<h2 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
							Previous talks
						</h2>
						<CopyButton
							iconOnly
							text={buildPreviousTalksText(previous)}
							label="Copy previous talks"
							copiedLabel="Copied"
						/>
					</div>
					<Reveal className="mt-8">
						<TalkTimeline talks={previous} />
					</Reveal>
					<div id="podcast" className="mt-12 scroll-mt-24">
						<TalksPodcast podcast={podcastAppearances[0]} />
					</div>
				</section>

				<section id="faq" className="scroll-mt-24">
					<Faq list={talksFaq} />
				</section>

				<TalksClosing />
			</Container>
		</>
	);
}

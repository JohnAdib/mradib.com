import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CopyButton } from "@/components/copy-button";
import Faq from "@/components/faq/faq";
import { ItemListJsonLd } from "@/components/json-ld/item-list-json-ld";
import { Reveal } from "@/components/reveal/reveal";
import { TalkTimeline } from "@/components/talk/talk-timeline";
import { podcastAppearances, talks } from "@/data/talks/talks";
import { homepageUrl } from "@/lib/constants/url";
import { buildPreviousTalksText } from "@/lib/talks/build-previous-talks-text";
import { TalksClosing } from "./_sections/talks-closing";
import { talksFaq } from "./_sections/talks-faq-data";
import { TalksHero } from "./_sections/talks-hero";
import { TalksPodcast } from "./_sections/talks-podcast";
import { TalksTopics } from "./_sections/talks-topics";

export const metadata: Metadata = {
	title: "Talks & Speaking",
	description:
		"John Adib speaks on founding companies, AI-first development, and engineering leadership, at conferences and meetups including JavaScript London, AI Coding Summit (GitNation), React Advanced London, and LNUG. Slides are free to download.",
};

export default function TalksPage() {
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
						name: `${talk.title} (${talk.event})`,
						url: talk.path
							? `${homepageUrl}${talk.path}`
							: `${homepageUrl}/talks`,
					}))}
				/>

				<TalksHero />
				<TalksTopics />

				<div className="mt-16 max-w-3xl sm:mt-20">
					<div className="flex items-center justify-between gap-3">
						<h2 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
							Previous talks
						</h2>
						<CopyButton
							iconOnly
							text={buildPreviousTalksText(talks)}
							label="Copy previous talks"
							copiedLabel="Copied"
						/>
					</div>
					<Reveal className="mt-8">
						<TalkTimeline talks={talks} />
					</Reveal>
					<div className="mt-12">
						<TalksPodcast podcast={podcastAppearances[0]} />
					</div>
				</div>

				<Faq list={talksFaq} />

				<TalksClosing />
			</Container>
		</>
	);
}

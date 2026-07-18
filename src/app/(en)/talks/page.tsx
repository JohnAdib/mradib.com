import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CopyButton } from "@/components/copy-button";
import { ItemListJsonLd } from "@/components/json-ld/item-list-json-ld";
import { TalkTimeline } from "@/components/talk/talk-timeline";
import { podcastAppearances, talks } from "@/data/talks/talks";
import { homepageUrl } from "@/lib/constants/url";
import { buildPreviousTalksText } from "@/lib/talks/build-previous-talks-text";
import { TalksInvite } from "./_sections/talks-invite";
import { TalksPodcast } from "./_sections/talks-podcast";

export const metadata: Metadata = {
	title: "Talks & Speaking",
	description:
		"John Adib speaks and runs workshops on AI-first development, design systems, and engineering leadership, at conferences and meetups including JavaScript London, AI Coding Summit (GitNation), React Advanced London, and LNUG. Slides for every talk are free to download.",
};

export default function TalksPage() {
	return (
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
			<div className="lg:grid lg:grid-cols-3 lg:items-start lg:gap-10">
				<header className="max-w-2xl lg:col-span-2">
					<h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
						Talks & Speaking
					</h1>
					<p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
						I talk and run workshops about building software with AI in the
						loop: AI-first development, design systems, and engineering
						leadership. Every deck is free to download.
					</p>
				</header>
				<aside className="mt-8 lg:col-start-3 lg:mt-0">
					<TalksInvite />
				</aside>
			</div>

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
				<div className="mt-8">
					<TalkTimeline talks={talks} />
				</div>
				<div className="mt-12">
					<TalksPodcast podcast={podcastAppearances[0]} />
				</div>
			</div>
		</Container>
	);
}

import type { Metadata } from "next";
import { CopyButton } from "@/components/copy-button";
import { ItemListJsonLd } from "@/components/json-ld/item-list-json-ld";
import { SimpleLayout } from "@/components/simple-layout";
import { TalkList } from "@/components/talk/talk-list";
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
		<SimpleLayout
			title="Talks & Speaking"
			intro="I speak and run workshops on AI-first development, design systems, and engineering leadership, at conferences and meetups across London and beyond. Slides for every talk are free to download."
		>
			<ItemListJsonLd
				name="Talks by John Adib"
				items={talks.map((talk) => ({
					name: `${talk.title} (${talk.event})`,
					url: `${homepageUrl}${talk.path}`,
				}))}
			/>
			<TalksInvite />
			<section className="mt-16 max-w-3xl">
				<div className="flex flex-wrap items-center justify-between gap-3">
					<h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
						Previous talks
					</h2>
					<CopyButton
						text={buildPreviousTalksText(talks)}
						label="Copy previous talks"
						copiedLabel="Copied to clipboard"
					/>
				</div>
				<div className="mt-8">
					<TalkList talks={talks} />
				</div>
			</section>
			<TalksPodcast podcast={podcastAppearances[0]} />
		</SimpleLayout>
	);
}

import type { Metadata } from "next";
import { ItemListJsonLd } from "@/components/json-ld/item-list-json-ld";
import { SimpleLayout } from "@/components/simple-layout";
import { TalkCard } from "@/components/talk/talk-card";
import { urlGitNation } from "@/data/profile";
import { podcastAppearances, talks } from "@/data/talks/talks";
import { homepageUrl } from "@/lib/constants/url";
import { TalksInvite } from "./_sections/talks-invite";
import { TalksPodcast } from "./_sections/talks-podcast";

export const metadata: Metadata = {
	title: "Talks & Speaking",
	description:
		"John Adib speaks about AI-first development, design systems, and engineering leadership. In 2025 he spoke at AI Coding Summit (GitNation), React Advanced London at Figma's office, and LNUG in London.",
};

export default function TalksPage() {
	return (
		<SimpleLayout
			title="Talks & Speaking"
			intro="I speak about AI-first development, design systems, and engineering leadership. In 2025 that meant AI Coding Summit, React Advanced London at Figma's office, and LNUG, the London Node User Group. Slides for every talk are free to download."
		>
			<ItemListJsonLd
				name="Talks by John Adib"
				items={talks.map((talk) => ({
					name: `${talk.title} (${talk.event})`,
					url: `${homepageUrl}${talk.articlePath ?? "/talks"}`,
				}))}
			/>
			<div className="flex max-w-3xl flex-col space-y-16">
				{talks.map((talk) => (
					<TalkCard key={talk.slug} talk={talk} />
				))}
			</div>
			<TalksPodcast podcast={podcastAppearances[0]} />
			<TalksInvite gitNationUrl={urlGitNation} />
		</SimpleLayout>
	);
}

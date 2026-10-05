import type { Metadata } from "next";
import { PodcastPage } from "@/components/podcast/podcast-page";
import { podcastEpisode } from "@/data/podcast/episode";
import { ogMetadata } from "@/lib/og-metadata";

export const metadata: Metadata = {
	title: `${podcastEpisode.title} | ${podcastEpisode.show}`,
	description: podcastEpisode.summary,
	alternates: { canonical: podcastEpisode.path },
	...ogMetadata(podcastEpisode.path),
};

export default PodcastPage;

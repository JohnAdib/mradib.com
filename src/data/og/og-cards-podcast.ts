import { podcastEpisode } from "@/data/podcast/episode";
import type { IOgCard } from "./og-card-interface";

export const ogCardsPodcast: IOgCard[] = [
	{
		slug: "podcast-ai-ownership",
		route: podcastEpisode.path,
		lang: "en",
		eyebrow: podcastEpisode.show,
		headline: podcastEpisode.title,
		proof: `John Adib in conversation with ${podcastEpisode.host}. ${podcastEpisode.duration}.`,
	},
];

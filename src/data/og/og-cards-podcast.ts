import { conversationPage } from "@/data/conversations";
import { podcastEpisode } from "@/data/podcast/episode";
import type { IOgCard } from "./og-card-interface";

export const ogCardsPodcast: IOgCard[] = [
	{
		slug: "hosted-conversations",
		route: conversationPage.path,
		lang: "en",
		eyebrow: "John Adib · Tech Immigrants",
		headline: conversationPage.title,
		proof: "Three conversations. Recruiters, hiring and careers in tech.",
	},
	{
		slug: "podcast-ai-ownership",
		route: podcastEpisode.path,
		lang: "en",
		eyebrow: podcastEpisode.show,
		headline: podcastEpisode.title,
		proof: `John Adib in conversation with ${podcastEpisode.host}. ${podcastEpisode.duration}.`,
	},
];

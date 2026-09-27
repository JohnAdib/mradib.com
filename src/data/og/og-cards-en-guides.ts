import type { IOgCard } from "./og-card-interface";

// Social cards for the fundraising kit: the hub and its guides.
export const ogCardsEnGuides: IOgCard[] = [
	{
		slug: "fundraising",
		route: "/fundraising",
		lang: "en",
		eyebrow: "Free Guides",
		headline: "Six guides. One story.",
		proof:
			"The pitch deck, one-pager, demo, founder video, financial model and application answers. From a 2x founder who raised $1M.",
	},
	{
		slug: "pitch-deck",
		route: "/pitch-deck",
		lang: "en",
		eyebrow: "Free Guide",
		headline: "Twelve slides. Twelve questions.",
		proof: "The pitch deck, slide by slide. From a 2x founder who raised $1M.",
	},
];

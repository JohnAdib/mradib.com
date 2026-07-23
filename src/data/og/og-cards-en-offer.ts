import type { IOgCard } from "./og-card-interface";

const portrait = { src: "/img/john-adib-hero.jpg", fit: "cover" } as const;

// Social cards for the offer pages. Never name the employer here.
export const ogCardsEnOffer: IOgCard[] = [
	{
		slug: "audit",
		route: "/audit",
		lang: "en",
		eyebrow: "AI Engineering Readiness Audit",
		headline: "AI agents write your code. Who checks the cost?",
		proof:
			"Two weeks, 7 scored dimensions, a 90-day roadmap. Fixed price, fully remote, for CTOs.",
		artwork: portrait,
	},
];

import type { IOgCard } from "./og-card-interface";
import { ogCardsEn } from "./og-cards-en";
import { ogCardsEnDetail } from "./og-cards-en-detail";
import { ogCardsFa } from "./og-cards-fa";
import { ogCardsTalks } from "./og-cards-talks";

export type { IOgArtwork, IOgCard } from "./og-card-interface";

/** Every social card on the site. Drives npm run og:build and page metadata. */
export const ogCards: IOgCard[] = [
	...ogCardsEn,
	...ogCardsEnDetail,
	...ogCardsTalks,
	...ogCardsFa,
];

/** Root relative URL of a card's generated image under public/og. */
export const ogImagePath = (slug: string): string => `/og/${slug}.jpg`;

/** Metadata image entry for a card, shared by the root fallback and pages. */
export function ogCardImage(card: IOgCard) {
	const name = card.lang === "fa" ? "جان ادیب" : "John Adib";
	return {
		url: ogImagePath(card.slug),
		width: 1200,
		height: 630,
		alt: `${name}: ${card.headline}`,
	};
}

const cardsByRoute = new Map(ogCards.map((card) => [card.route, card]));

/** The card for a route. Throws at build time so no page ships without one. */
export function getOgCard(route: string): IOgCard {
	const card = cardsByRoute.get(route);
	if (!card) throw new Error(`No OG card defined for route ${route}`);
	return card;
}

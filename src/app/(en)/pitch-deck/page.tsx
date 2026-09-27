import type { Metadata } from "next";
import { articlePitchDeck as article } from "@/data/articles/pitch-deck";
import { ogMetadata } from "@/lib/og-metadata";
import { DeckAiPrompt } from "./_sections/ai/deck-ai-prompt";
import { DeckClosing } from "./_sections/closing/deck-closing";
import { DeckFaq } from "./_sections/faq/deck-faq";
import { DeckHero } from "./_sections/hero/deck-hero";
import { DeckOrder } from "./_sections/order/deck-order";
import { DeckOverview } from "./_sections/overview/deck-overview";
import { DeckReferences } from "./_sections/references/deck-references";
import { DeckJsonLd } from "./_sections/seo/deck-json-ld";
import { DeckSlides } from "./_sections/slides/deck-slides";
import { RevealFallback } from "./_shared/reveal-fallback";

export const metadata: Metadata = {
	title: article.pageTitle,
	description: article.pageDesc,
	...ogMetadata(article.pagePath, { publishedTime: article.datePublished }),
};

// Composition only. Each part owns its id, data, copy, and reveal, so the
// page reads in order: move a line to reorder, delete a line to drop a part.
export default function Page() {
	return (
		<>
			<RevealFallback />
			<DeckJsonLd />
			<DeckHero />
			<DeckOverview />
			<DeckSlides />
			<DeckOrder />
			<DeckAiPrompt />
			<DeckReferences />
			<DeckFaq />
			<DeckClosing />
		</>
	);
}

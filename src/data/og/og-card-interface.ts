/** Optional artwork on the right half of a card. */
export interface IOgArtwork {
	/** Root relative path under public/, e.g. /img/john-adib-hero.jpg */
	src: string;
	/** cover fills the frame (photos); contain floats on a white panel (logos) */
	fit: "cover" | "contain";
}

/**
 * One 1200x630 social sharing card. Drives both the generated image in
 * public/og (npm run og:build) and the page's og:title/og:description via
 * src/lib/og-metadata.ts, so the card and its metadata never drift apart.
 */
export interface IOgCard {
	/** File name under public/og, without extension */
	slug: string;
	/** Site route whose metadata uses this card, e.g. /about */
	route: string;
	lang: "en" | "fa";
	/** Small kicker above the headline, rendered uppercase in English */
	eyebrow: string;
	/** The social headline, also og:title. Bold, short, no hedging. */
	headline: string;
	/** One proof line, also og:description. A superlative plus a number. */
	proof: string;
	artwork?: IOgArtwork;
}

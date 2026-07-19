import type { ITalk } from "@/data/talks/talk-interface";
import { talks } from "@/data/talks/talks";
import type { IOgCard } from "./og-card-interface";

function monthYear(date: string): string {
	return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
		month: "long",
		year: "numeric",
		timeZone: "UTC",
	});
}

function talkProof(talk: ITalk): string {
	const where = talk.host
		? `hosted by ${talk.host}`
		: talk.city === "Online"
			? "online"
			: `in ${talk.city}`;
	const facts = talk.audience ? `${talk.audience}, ${where}` : where;
	const sentence = `${facts}. ${monthYear(talk.date)}.`;
	return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

// Always the event logo, never the cover slide: slides carry their own text
// and crop badly at 400x486, while logo panels stay consistent across talks.
function talkArtwork(talk: ITalk): IOgCard["artwork"] {
	if (talk.logo) return { src: talk.logo, fit: "contain" };
	return undefined;
}

// One card per talk page, derived from the talks data so facts stay single-sourced.
export const ogCardsTalks: IOgCard[] = talks
	.filter((talk): talk is ITalk & { path: string } => Boolean(talk.path))
	.map((talk) => ({
		slug: `talk-${talk.slug}`,
		route: talk.path,
		lang: "en",
		eyebrow: talk.event,
		headline: talk.title,
		proof: talkProof(talk),
		artwork: talkArtwork(talk),
	}));

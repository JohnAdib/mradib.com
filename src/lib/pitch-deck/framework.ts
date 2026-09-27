import {
	type IPitchSlide,
	optionalSlides,
	pitchSlides,
	reorderRules,
} from "@/data/pitch-deck";
import { homepageUrl } from "@/lib/constants/url";
import { slideNumber } from "./slide-number";

// The single source for the AI-facing pitch deck framework. Both llms.txt and
// the portable skill render from here, so the advice is never stated twice:
// it all traces back to src/data/pitch-deck.

export interface IFrameworkSlide {
	number: string;
	title: string;
	question: string;
	definition: string;
	include: string[];
	avoid: string[];
	test: string;
	example?: string;
	/** The reorder rule that applies to this slide, when one does. */
	note?: string;
	url: string;
}

export const pitchDeckGuideUrl = `${homepageUrl}/pitch-deck`;

function noteFor(slide: IPitchSlide): string | undefined {
	const rule = reorderRules.find((entry) => entry.slideId === slide.id);
	return rule ? `${rule.when} ${rule.move}` : undefined;
}

/** The framework as ordered, numbered slides. */
export function pitchDeckFramework(): IFrameworkSlide[] {
	return pitchSlides.map((slide, index) => ({
		number: slideNumber(index),
		title: slide.title,
		question: slide.question,
		definition: slide.definition,
		include: slide.include,
		avoid: slide.avoid,
		test: slide.test,
		example: slide.example,
		note: noteFor(slide),
		url: `${pitchDeckGuideUrl}#${slide.id}`,
	}));
}

export { optionalSlides, reorderRules };

import { articlePitchDeck } from "@/data/articles/pitch-deck";
import type { IGuide } from "@/data/guides/guide-bundle";
import { guideAnchorDefaults } from "@/data/guides/guide-labels";
import { deckAi, deckAiText } from "./copy-ai";
import { deckClosing } from "./copy-closing";
import {
	deckFrame,
	deckHeadings,
	deckHero,
	deckHowTo,
	deckName,
	deckOptionalTitle,
} from "./copy-hero";
import { presenterLabels, slideLabels } from "./copy-labels";
import { deckFaqTitle, pitchDeckFaq } from "./faq";
import { optionalSlides } from "./optional";
import { pitchReferences } from "./references";
import { reorderRules } from "./rules";
import { slidesClose } from "./slides-close";
import { slidesProof } from "./slides-proof";
import { slidesStory } from "./slides-story";

/** The twelve slides, in the standard order. Numbering derives from position. */
export const pitchSlides = [...slidesStory, ...slidesProof, ...slidesClose];

/** Everything the /pitch-deck page and its AI files render from. */
export const pitchDeckGuide: IGuide = {
	name: deckName,
	frame: deckFrame,
	article: articlePitchDeck,
	anchors: { ...guideAnchorDefaults, steps: "slides", rules: "order" },
	hero: deckHero,
	headings: deckHeadings,
	optionalTitle: deckOptionalTitle,
	stepLabels: slideLabels,
	presenterLabels,
	steps: pitchSlides,
	rules: reorderRules,
	optional: optionalSlides,
	ai: deckAi,
	aiText: deckAiText,
	faqTitle: deckFaqTitle,
	faq: pitchDeckFaq,
	references: pitchReferences,
	howTo: deckHowTo,
	closing: deckClosing,
};

export type { PitchSlideId } from "./slide-id";

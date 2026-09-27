import type { IPitchSlide, PitchSlideId } from "./slide-interface";
import { slidesClose } from "./slides-close";
import { slidesProof } from "./slides-proof";
import { slidesStory } from "./slides-story";

/** The twelve slides, in the standard order. Numbering derives from position. */
export const pitchSlides: IPitchSlide[] = [
	...slidesStory,
	...slidesProof,
	...slidesClose,
];

/** The anchors in slide order, for scroll spy and deep links. */
export const pitchSlideIds: PitchSlideId[] = pitchSlides.map(
	(slide) => slide.id,
);

export { deckAi } from "./copy-ai";
export {
	deckHeadings,
	deckHero,
	deckHowTo,
	deckOptionalTitle,
} from "./copy-hero";
export {
	type IPresenterLabels,
	type ISlideLabels,
	presenterLabels,
	slideLabels,
} from "./copy-labels";
export { deckFaqTitle, pitchDeckFaq } from "./faq";
export { optionalSlides } from "./optional-slides";
export { pitchReferences } from "./references";
export { reorderRules } from "./reorder-rules";
export type {
	IDeckAiFile,
	IDeckHeading,
	IOptionalSlide,
	IPitchReference,
	IPitchSlide,
	IReorderRule,
	PitchSlideId,
} from "./slide-interface";

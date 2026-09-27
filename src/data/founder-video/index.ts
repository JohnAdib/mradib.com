import { articleFounderVideo } from "@/data/articles/founder-video";
import type { IGuide } from "@/data/guides/guide-bundle";
import { guideAnchorDefaults } from "@/data/guides/guide-labels";
import { beatsClose } from "./beats-close";
import { beatsOpen } from "./beats-open";
import { founderVideoAi, founderVideoAiText } from "./copy-ai";
import { founderVideoClosing } from "./copy-closing";
import {
	founderVideoHeadings,
	founderVideoHero,
	founderVideoHowTo,
	founderVideoName,
	founderVideoOptionalTitle,
} from "./copy-hero";
import {
	founderVideoPresenterLabels,
	founderVideoStepLabels,
} from "./copy-labels";
import { founderVideoFaq, founderVideoFaqTitle } from "./faq";
import { founderVideoReferences } from "./references";
import { founderVideoOptional, founderVideoRules } from "./rules";

/** The six beats, in speaking order. Numbering derives from position. */
export const founderVideoBeats = [...beatsOpen, ...beatsClose];

/** Everything the /founder-video page and its AI files render from. */
export const founderVideoGuide: IGuide = {
	name: founderVideoName,
	frame: "video",
	article: articleFounderVideo,
	anchors: { ...guideAnchorDefaults, steps: "beats", rules: "cases" },
	hero: founderVideoHero,
	headings: founderVideoHeadings,
	optionalTitle: founderVideoOptionalTitle,
	stepLabels: founderVideoStepLabels,
	presenterLabels: founderVideoPresenterLabels,
	steps: founderVideoBeats,
	rules: founderVideoRules,
	optional: founderVideoOptional,
	ai: founderVideoAi,
	aiText: founderVideoAiText,
	faqTitle: founderVideoFaqTitle,
	faq: founderVideoFaq,
	references: founderVideoReferences,
	howTo: founderVideoHowTo,
	closing: founderVideoClosing,
};

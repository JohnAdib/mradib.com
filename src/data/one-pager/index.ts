import { articleOnePager } from "@/data/articles/one-pager";
import type { IGuide } from "@/data/guides/guide-bundle";
import { guideAnchorDefaults } from "@/data/guides/guide-labels";
import { blocksCase } from "./blocks-case";
import { blocksClose } from "./blocks-close";
import { blocksOpen } from "./blocks-open";
import { onePagerAi, onePagerAiText } from "./copy-ai";
import { onePagerClosing } from "./copy-closing";
import {
	onePagerFrame,
	onePagerHeadings,
	onePagerHero,
	onePagerHowTo,
	onePagerName,
	onePagerOptionalTitle,
} from "./copy-hero";
import { onePagerPresenterLabels, onePagerStepLabels } from "./copy-labels";
import { onePagerFaq, onePagerFaqTitle } from "./faq";
import { onePagerReferences } from "./references";
import { onePagerOptional, onePagerRules } from "./rules";

/** The nine blocks, in reading order. Numbering derives from position. */
export const onePagerBlocks = [...blocksOpen, ...blocksCase, ...blocksClose];

/** Everything the /one-pager page and its AI files render from. */
export const onePagerGuide: IGuide = {
	name: onePagerName,
	frame: onePagerFrame,
	article: articleOnePager,
	anchors: { ...guideAnchorDefaults, steps: "blocks", rules: "format" },
	hero: onePagerHero,
	headings: onePagerHeadings,
	optionalTitle: onePagerOptionalTitle,
	stepLabels: onePagerStepLabels,
	presenterLabels: onePagerPresenterLabels,
	steps: onePagerBlocks,
	rules: onePagerRules,
	optional: onePagerOptional,
	ai: onePagerAi,
	aiText: onePagerAiText,
	faqTitle: onePagerFaqTitle,
	faq: onePagerFaq,
	references: onePagerReferences,
	howTo: onePagerHowTo,
	closing: onePagerClosing,
};

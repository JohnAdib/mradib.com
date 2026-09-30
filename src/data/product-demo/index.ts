import { articleProductDemo } from "@/data/articles/product-demo";
import type { IGuide } from "@/data/guides/guide-bundle";
import { guideAnchorDefaults } from "@/data/guides/guide-labels";
import { beatsClose } from "./beats-close";
import { beatsOpen } from "./beats-open";
import { productDemoAi, productDemoAiText } from "./copy-ai";
import { productDemoClosing } from "./copy-closing";
import {
	productDemoFrame,
	productDemoHeadings,
	productDemoHero,
	productDemoHowTo,
	productDemoName,
	productDemoOptionalTitle,
} from "./copy-hero";
import {
	productDemoPresenterLabels,
	productDemoStepLabels,
} from "./copy-labels";
import { productDemoFaq, productDemoFaqTitle } from "./faq";
import { productDemoReferences } from "./references";
import { productDemoOptional, productDemoRules } from "./rules";

/** The six beats, in running order. Numbering derives from position. */
export const productDemoBeats = [...beatsOpen, ...beatsClose];

/** Everything the /product-demo page and its AI files render from. */
export const productDemoGuide: IGuide = {
	name: productDemoName,
	frame: productDemoFrame,
	article: articleProductDemo,
	anchors: { ...guideAnchorDefaults, steps: "beats", rules: "formats" },
	hero: productDemoHero,
	headings: productDemoHeadings,
	optionalTitle: productDemoOptionalTitle,
	stepLabels: productDemoStepLabels,
	presenterLabels: productDemoPresenterLabels,
	steps: productDemoBeats,
	rules: productDemoRules,
	optional: productDemoOptional,
	ai: productDemoAi,
	aiText: productDemoAiText,
	faqTitle: productDemoFaqTitle,
	faq: productDemoFaq,
	references: productDemoReferences,
	howTo: productDemoHowTo,
	closing: productDemoClosing,
};

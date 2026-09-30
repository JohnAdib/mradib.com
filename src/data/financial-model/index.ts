import { articleFinancialModel } from "@/data/articles/financial-model";
import type { IGuide } from "@/data/guides/guide-bundle";
import { guideAnchorDefaults } from "@/data/guides/guide-labels";
import { financialModelAi, financialModelAiText } from "./copy-ai";
import { financialModelClosing } from "./copy-closing";
import {
	financialModelFrame,
	financialModelHeadings,
	financialModelHero,
	financialModelHowTo,
	financialModelName,
	financialModelOptionalTitle,
} from "./copy-hero";
import {
	financialModelPresenterLabels,
	financialModelStepLabels,
} from "./copy-labels";
import { financialModelFaq, financialModelFaqTitle } from "./faq";
import { financialModelReferences } from "./references";
import { financialModelOptional, financialModelRules } from "./rules";
import { sheetsCosts } from "./sheets-costs";
import { sheetsDrivers } from "./sheets-drivers";
import { sheetsOutcome } from "./sheets-outcome";

/** The nine sheets, in build order. Numbering derives from position. */
export const financialModelSheets = [
	...sheetsDrivers,
	...sheetsCosts,
	...sheetsOutcome,
];

/** Everything the /financial-model page and its AI files render from. */
export const financialModelGuide: IGuide = {
	name: financialModelName,
	frame: financialModelFrame,
	article: articleFinancialModel,
	anchors: { ...guideAnchorDefaults, steps: "sheets", rules: "cases" },
	hero: financialModelHero,
	headings: financialModelHeadings,
	optionalTitle: financialModelOptionalTitle,
	stepLabels: financialModelStepLabels,
	presenterLabels: financialModelPresenterLabels,
	steps: financialModelSheets,
	rules: financialModelRules,
	optional: financialModelOptional,
	ai: financialModelAi,
	aiText: financialModelAiText,
	faqTitle: financialModelFaqTitle,
	faq: financialModelFaq,
	references: financialModelReferences,
	howTo: financialModelHowTo,
	closing: financialModelClosing,
};

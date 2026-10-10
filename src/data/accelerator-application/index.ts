import { articleAcceleratorApplication } from "@/data/articles/accelerator-application";
import type { IGuide } from "@/data/guides/guide-bundle";
import { guideAnchorDefaults } from "@/data/guides/guide-labels";
import { answersIdea } from "./answers-idea";
import { answersProof } from "./answers-proof";
import { answersTeam } from "./answers-team";
import {
	acceleratorApplicationAi,
	acceleratorApplicationAiText,
} from "./copy-ai";
import { acceleratorApplicationClosing } from "./copy-closing";
import {
	acceleratorApplicationFrame,
	acceleratorApplicationHeadings,
	acceleratorApplicationHero,
	acceleratorApplicationHowTo,
	acceleratorApplicationName,
	acceleratorApplicationOptionalTitle,
} from "./copy-hero";
import {
	acceleratorApplicationPresenterLabels,
	acceleratorApplicationStepLabels,
} from "./copy-labels";
import {
	acceleratorApplicationFaq,
	acceleratorApplicationFaqTitle,
} from "./faq";
import { acceleratorApplicationReferences } from "./references";
import {
	acceleratorApplicationOptional,
	acceleratorApplicationRules,
} from "./rules";

/** The ten answers, in the order forms tend to ask. Numbering derives from position. */
export const acceleratorAnswers = [
	...answersIdea,
	...answersProof,
	...answersTeam,
];

/** Everything the accelerator application page and its AI files render from. */
export const acceleratorApplicationGuide: IGuide = {
	name: acceleratorApplicationName,
	frame: acceleratorApplicationFrame,
	article: articleAcceleratorApplication,
	anchors: { ...guideAnchorDefaults, steps: "answers", rules: "cases" },
	hero: acceleratorApplicationHero,
	headings: acceleratorApplicationHeadings,
	optionalTitle: acceleratorApplicationOptionalTitle,
	stepLabels: acceleratorApplicationStepLabels,
	presenterLabels: acceleratorApplicationPresenterLabels,
	steps: acceleratorAnswers,
	rules: acceleratorApplicationRules,
	optional: acceleratorApplicationOptional,
	ai: acceleratorApplicationAi,
	aiText: acceleratorApplicationAiText,
	faqTitle: acceleratorApplicationFaqTitle,
	faq: acceleratorApplicationFaq,
	references: acceleratorApplicationReferences,
	howTo: acceleratorApplicationHowTo,
	closing: acceleratorApplicationClosing,
};

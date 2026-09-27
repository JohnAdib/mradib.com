import { articleApplicationAnswers } from "@/data/articles/application-answers";
import type { IGuide } from "@/data/guides/guide-bundle";
import { guideAnchorDefaults } from "@/data/guides/guide-labels";
import { answersIdea } from "./answers-idea";
import { answersProof } from "./answers-proof";
import { answersTeam } from "./answers-team";
import { applicationAnswersAi, applicationAnswersAiText } from "./copy-ai";
import { applicationAnswersClosing } from "./copy-closing";
import {
	applicationAnswersHeadings,
	applicationAnswersHero,
	applicationAnswersHowTo,
	applicationAnswersName,
	applicationAnswersOptionalTitle,
} from "./copy-hero";
import {
	applicationAnswersPresenterLabels,
	applicationAnswersStepLabels,
} from "./copy-labels";
import { applicationAnswersFaq, applicationAnswersFaqTitle } from "./faq";
import { applicationAnswersReferences } from "./references";
import { applicationAnswersOptional, applicationAnswersRules } from "./rules";

/** The ten answers, in the order forms tend to ask. Numbering derives from position. */
export const applicationAnswers = [
	...answersIdea,
	...answersProof,
	...answersTeam,
];

/** Everything the /application-answers page and its AI files render from. */
export const applicationAnswersGuide: IGuide = {
	name: applicationAnswersName,
	frame: "form",
	article: articleApplicationAnswers,
	anchors: { ...guideAnchorDefaults, steps: "answers", rules: "cases" },
	hero: applicationAnswersHero,
	headings: applicationAnswersHeadings,
	optionalTitle: applicationAnswersOptionalTitle,
	stepLabels: applicationAnswersStepLabels,
	presenterLabels: applicationAnswersPresenterLabels,
	steps: applicationAnswers,
	rules: applicationAnswersRules,
	optional: applicationAnswersOptional,
	ai: applicationAnswersAi,
	aiText: applicationAnswersAiText,
	faqTitle: applicationAnswersFaqTitle,
	faq: applicationAnswersFaq,
	references: applicationAnswersReferences,
	howTo: applicationAnswersHowTo,
	closing: applicationAnswersClosing,
};

import type { IGuide } from "@/data/guides/guide-bundle";
import type { IGuideStep } from "@/data/guides/guide-interface";
import { homepageUrl } from "@/lib/constants/url";
import { stepNumber } from "./step-number";

// The single source for a guide's AI-facing framework. Both llms.txt and the
// portable skill render from here, so the advice is never stated twice: it
// all traces back to the guide's src/data folder.

export interface IFrameworkStep {
	number: string;
	title: string;
	question: string;
	definition: string;
	include: string[];
	avoid: string[];
	test: string;
	example?: string;
	tags?: string[];
	/** The rule that bends this step, when one does. */
	note?: string;
	url: string;
}

/** The absolute URL of the human guide. */
export function guideUrl(guide: IGuide): string {
	return `${homepageUrl}${guide.article.pagePath}`;
}

function noteFor(guide: IGuide, step: IGuideStep): string | undefined {
	const rule = guide.rules.find((entry) => entry.stepId === step.id);
	return rule ? `${rule.when} ${rule.action}` : undefined;
}

/** The framework as ordered, numbered steps. */
export function guideFramework(guide: IGuide): IFrameworkStep[] {
	const url = guideUrl(guide);
	return guide.steps.map((step, index) => ({
		number: stepNumber(index),
		title: step.title,
		question: step.question,
		definition: step.definition,
		include: step.include,
		avoid: step.avoid,
		test: step.test,
		example: step.example,
		tags: step.tags,
		note: noteFor(guide, step),
		url: `${url}#${step.id}`,
	}));
}

import type { IGuide } from "@/data/guides/guide-bundle";
import type { IGuideStepLabels } from "@/data/guides/guide-interface";
import { guideAiLabels } from "@/data/guides/guide-labels";
import type { IFrameworkStep } from "./framework";

/** One step as text lines, shared by llms.txt and the portable skill. */
export function formatStep(
	step: IFrameworkStep,
	heading: "##" | "###",
	labels: IGuideStepLabels,
): string {
	const lines = [
		`${heading} ${step.number}. ${step.title}`,
		`${guideAiLabels.question}: ${step.question}`,
		`${guideAiLabels.definition}: ${step.definition}`,
		`${labels.include}:`,
		...step.include.map((item) => `- ${item}`),
		`${labels.avoid}:`,
		...step.avoid.map((item) => `- ${item}`),
		`${labels.test}: ${step.test}`,
	];
	if (step.example) {
		lines.push(`${labels.example}: ${step.example}`);
	}
	if (step.tags?.length) {
		lines.push(`${labels.tags}: ${step.tags.join(", ")}`);
	}
	if (step.note) {
		lines.push(`${labels.note}: ${step.note}`);
	}
	return lines.join("\n");
}

/** The rules that bend the default, one line each. */
export function ruleLines(guide: IGuide): string[] {
	const { when, action } = guide.stepLabels;
	return guide.rules.map(
		(rule) =>
			`- ${rule.title}. ${when}: ${rule.when} ${action}: ${rule.action}`,
	);
}

/** The optional extras, one line each. */
export function optionalLines(guide: IGuide): string[] {
	return guide.optional.map((item) => `- ${item.title}: ${item.when}`);
}

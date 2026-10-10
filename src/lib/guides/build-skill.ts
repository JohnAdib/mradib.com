import type { IGuide } from "@/data/guides/guide-bundle";
import { guideAiLabels } from "@/data/guides/guide-labels";
import { formatStep, optionalLines, ruleLines } from "./format-step";
import { guideFramework, guideUrl } from "./framework";

/** The guide's framework as a portable SKILL.md for AI tools. */
export function buildGuideSkill(guide: IGuide): string {
	const { aiText } = guide;
	const front = [
		"---",
		`name: ${aiText.skillName}`,
		`description: ${aiText.skillDescription}`,
		"---",
	];
	const steps = guideFramework(guide)
		.map((step) => formatStep(step, "###", guide.stepLabels))
		.join("\n\n");
	const body = [
		`# ${aiText.skillTitle}`,
		"",
		aiText.role,
		"",
		`## ${guideAiLabels.workflow}`,
		...aiText.workflow,
		"",
		`## ${guide.stepLabels.plural}`,
		"",
		steps,
		"",
		`## ${guide.headings.rules.title}`,
		...ruleLines(guide),
		"",
		`## ${guide.optionalTitle}`,
		...optionalLines(guide),
		"",
		`${guideAiLabels.source}: ${guideUrl(guide)}`,
	];
	return `${[...front, "", ...body].join("\n")}\n`;
}

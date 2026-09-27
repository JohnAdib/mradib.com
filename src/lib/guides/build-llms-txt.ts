import type { IGuide } from "@/data/guides/guide-bundle";
import { guideAiLabels } from "@/data/guides/guide-labels";
import { formatStep, optionalLines, ruleLines } from "./format-step";
import { guideFramework, guideUrl } from "./framework";

/** The guide's framework as a machine-readable text file. */
export function buildGuideLlmsTxt(guide: IGuide): string {
	const url = guideUrl(guide);
	const header = [
		`# ${guide.aiText.title}`,
		"",
		`> ${guide.aiText.summary}`,
		"",
		`${guideAiLabels.humanGuide}: ${url}`,
		`${guideAiLabels.skillFile}: ${url}/skill.md`,
		"",
		`## ${guideAiLabels.how}`,
		"",
		...guide.aiText.how,
	].join("\n");
	const steps = guideFramework(guide).map((step) =>
		formatStep(step, "##", guide.stepLabels),
	);
	const rules = [
		`## ${guide.headings.rules.title}`,
		"",
		...ruleLines(guide),
	].join("\n");
	const optional = [
		`## ${guide.optionalTitle}`,
		"",
		...optionalLines(guide),
	].join("\n");
	return `${[header, ...steps, rules, optional].join("\n\n")}\n`;
}

import { formatSlide } from "./format-slide";
import {
	optionalSlides,
	pitchDeckFramework,
	pitchDeckGuideUrl,
	reorderRules,
} from "./framework";

const title = "The 12-slide pitch deck: the MrAdib framework";
const summary =
	"A machine-readable pitch deck framework by John Adib (MrAdib), a two-time founder who raised $1M as a CEO. Twelve slides, each answering one investor question. Use it to draft, rewrite or review any early-stage deck.";
const how = [
	"- Keep the twelve slides in this order unless a reorder rule below applies.",
	"- Every slide answers its question with one idea. Put on it what the list says, leave off what the list says.",
	"- Check each slide against its pass test before moving on.",
	"- Never invent numbers. Mark hypotheses as hypotheses.",
];

export function buildPitchDeckLlmsTxt(): string {
	const header = [
		`# ${title}`,
		"",
		`> ${summary}`,
		"",
		`Human guide: ${pitchDeckGuideUrl}`,
		`Portable skill for AI tools: ${pitchDeckGuideUrl}/skill.md`,
		"",
		"## How to use this",
		"",
		...how,
	].join("\n");
	const slides = pitchDeckFramework().map((slide) => formatSlide(slide, "##"));
	const order = [
		"## When to change the order",
		"",
		...reorderRules.map(
			(rule) => `- ${rule.title}. When: ${rule.when} Move: ${rule.move}`,
		),
	].join("\n");
	const optional = [
		"## Optional slides",
		"",
		...optionalSlides.map((slide) => `- ${slide.title}: ${slide.when}`),
	].join("\n");
	return `${[header, ...slides, order, optional].join("\n\n")}\n`;
}

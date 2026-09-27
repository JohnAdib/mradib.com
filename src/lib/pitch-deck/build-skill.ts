import { formatSlide } from "./format-slide";
import {
	optionalSlides,
	pitchDeckFramework,
	pitchDeckGuideUrl,
	reorderRules,
} from "./framework";

const front = [
	"---",
	"name: pitch-deck-builder",
	"description: Draft, rewrite or review a startup pitch deck with the MrAdib 12-slide framework by John Adib. Use when building an investor deck, tightening one slide, or preparing a seed or pre-seed raise.",
	"---",
];
const role =
	"You help a founder build a pitch deck that answers the twelve questions investors ask, one per slide. Follow the framework below.";
const workflow = [
	"1. Ask for the facts: company, product, customers, market, competition, traction, business model, team, and the amount being raised. Never invent any of them.",
	"2. Draft one slide at a time, in order: the slide title, one headline sentence, at most four bullets, and speaker notes.",
	"3. Check every slide against its pass test and rewrite until it passes.",
	"4. Apply a reorder rule only when its condition is true.",
	"5. Finish with the weakest slides and the evidence that would strengthen each.",
];

export function buildPitchDeckSkill(): string {
	const slides = pitchDeckFramework()
		.map((slide) => formatSlide(slide, "###"))
		.join("\n\n");
	const body = [
		"# Pitch Deck Builder (the MrAdib framework)",
		"",
		role,
		"",
		"## Workflow",
		...workflow,
		"",
		"## Slides",
		"",
		slides,
		"",
		"## When to change the order",
		...reorderRules.map(
			(rule) => `- ${rule.title}. When: ${rule.when} Move: ${rule.move}`,
		),
		"",
		"## Optional slides",
		...optionalSlides.map((slide) => `- ${slide.title}: ${slide.when}`),
		"",
		`Source and full guide: ${pitchDeckGuideUrl}`,
	];
	return `${[...front, "", ...body].join("\n")}\n`;
}

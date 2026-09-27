import { articlePitchDeck } from "@/data/articles/pitch-deck";
import type { IGuideAi, IGuideAiText } from "@/data/guides/guide-bundle";
import { homepageUrl } from "@/lib/constants/url";

// The short prompt points the AI at the machine-readable framework, which is
// generated from the slide data by src/lib/guides, so the advice is never
// stated twice.
export const deckAi: IGuideAi = {
	fileNotes: {
		llms: "The framework as machine-readable rules, one block per slide, ready for any AI that can read a link.",
		skill:
			"A ready-made skill you can hand to Claude or drop into your own AI tool.",
	},
	promptIntro:
		"Or paste this prompt into your AI and add what you know about your company:",
	prompt:
		`Act as a startup pitch coach and follow the MrAdib pitch deck framework at ${homepageUrl}${articlePitchDeck.pagePath}/llms.txt. ` +
		"Ask me for the facts you need, then draft my 12-slide deck one slide at a time: the slide title, one headline sentence, at most four bullets, speaker notes, and the evidence still missing. " +
		"One idea per slide, no buzzwords, no invented numbers.",
};

// The prose of the two AI files. The slides themselves render from the data.
export const deckAiText: IGuideAiText = {
	title: "The 12-slide pitch deck: the MrAdib framework",
	summary:
		"A machine-readable pitch deck framework by John Adib (MrAdib), a two-time founder who raised $1M as a CEO. Twelve slides, each answering one investor question. Use it to draft, rewrite or review any early-stage deck.",
	how: [
		"- Keep the twelve slides in this order unless a reorder rule below applies.",
		"- Every slide answers its question with one idea. Put on it what the list says, leave off what the list says.",
		"- Check each slide against its pass test before moving on.",
		"- Never invent numbers. Mark hypotheses as hypotheses.",
	],
	skillName: "pitch-deck-builder",
	skillDescription:
		"Draft, rewrite or review a startup pitch deck with the MrAdib 12-slide framework by John Adib. Use when building an investor deck, tightening one slide, or preparing a seed or pre-seed raise.",
	skillTitle: "Pitch Deck Builder (the MrAdib framework)",
	role: "You help a founder build a pitch deck that answers the twelve questions investors ask, one per slide. Follow the framework below.",
	workflow: [
		"1. Ask for the facts: company, product, customers, market, competition, traction, business model, team, and the amount being raised. Never invent any of them.",
		"2. Draft one slide at a time, in order: the slide title, one headline sentence, at most four bullets, and speaker notes.",
		"3. Check every slide against its pass test and rewrite until it passes.",
		"4. Apply a reorder rule only when its condition is true.",
		"5. Finish with the weakest slides and the evidence that would strengthen each.",
	],
};

import { homepageUrl } from "@/lib/constants/url";
import type { IDeckAiFile } from "./slide-interface";

const guidePath = "/pitch-deck";

// The short prompt points the AI at the machine-readable framework, which is
// generated from the slide data by src/lib/pitch-deck, so the advice is never
// stated twice.
export const deckAi = {
	files: [
		{
			path: `${guidePath}/llms.txt`,
			description:
				"The framework as machine-readable rules, one block per slide, ready for any AI that can read a link.",
		},
		{
			path: `${guidePath}/skill.md`,
			description:
				"A ready-made skill you can hand to Claude or drop into your own AI tool.",
		},
	] satisfies IDeckAiFile[],
	promptIntro:
		"Or paste this prompt into your AI and add what you know about your company:",
	prompt:
		`Act as a startup pitch coach and follow the MrAdib pitch deck framework at ${homepageUrl}${guidePath}/llms.txt. ` +
		"Ask me for the facts you need, then draft my 12-slide deck one slide at a time: the slide title, one headline sentence, at most four bullets, speaker notes, and the evidence still missing. " +
		"One idea per slide, no buzzwords, no invented numbers.",
	copyLabel: "Copy the prompt",
	copiedLabel: "Copied",
};

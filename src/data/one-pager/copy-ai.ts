import { articleOnePager } from "@/data/articles/one-pager";
import type { IGuideAi, IGuideAiText } from "@/data/guides/guide-bundle";
import { homepageUrl } from "@/lib/constants/url";

// The short prompt points the AI at the machine-readable framework, which is
// generated from the block data by src/lib/guides, so the advice is never
// stated twice.
export const onePagerAi: IGuideAi = {
	fileNotes: {
		llms: "The framework as machine-readable rules, one section per block, ready for any AI that can read a link.",
		skill:
			"A ready-made skill you can hand to Claude or drop into your own AI tool.",
	},
	promptIntro:
		"Or paste this prompt into your AI, then paste your deck or your notes:",
	prompt:
		`Act as a startup fundraising coach and follow the MrAdib one-pager framework at ${homepageUrl}${articleOnePager.pagePath}/llms.txt. ` +
		"Take my deck or my notes, then draft my one-pager block by block: a heading and at most three lines per block, the same facts as the deck, every number with its date. " +
		"One side of one page, no adjectives doing the work of numbers, no invented figures.",
};

// The prose of the two AI files. The blocks themselves render from the data.
export const onePagerAiText: IGuideAiText = {
	title: "The startup one-pager: the MrAdib framework",
	summary:
		"A machine-readable one-pager framework by John Adib (MrAdib), a two-time founder who raised $1M as a CEO. Nine blocks on one page, each answering one investor question. Use it to cut a deck down to a page that reads in sixty seconds.",
	how: [
		"- Keep the nine blocks in this order unless a layout rule below applies.",
		"- Every block answers its question in three lines at most. Put in what the list says, leave out what the list says.",
		"- Use the same facts as the deck. Every number carries a date.",
		"- Check each block against its pass test, then check the page reads in sixty seconds.",
	],
	skillName: "one-pager-writer",
	skillDescription:
		"Write, cut down or review a startup one-pager with the MrAdib nine-block framework by John Adib. Use when a founder needs a one-page summary for investors, an intro email, or a follow-up after a meeting.",
	skillTitle: "One-Pager Writer (the MrAdib framework)",
	role: "You help a founder write a one-page investor summary that answers nine questions in sixty seconds of reading. Follow the framework below.",
	workflow: [
		"1. Ask for the deck or the facts: what the company does, the problem, customers, market, competition, traction with dates, business model, team, and the ask. Never invent any of them.",
		"2. Draft one block at a time, in order: a two-word heading and at most three lines.",
		"3. Check every block against its pass test and rewrite until it passes.",
		"4. Apply a layout rule only when its condition is true.",
		"5. Finish with a word count and the three weakest lines, each with the fact that would fix it.",
	],
};

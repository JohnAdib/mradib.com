import { articleFounderVideo } from "@/data/articles/founder-video";
import type { IGuideAi, IGuideAiText } from "@/data/guides/guide-bundle";
import { homepageUrl } from "@/lib/constants/url";

// The short prompt points the AI at the machine-readable framework, which is
// generated from the beat data by src/lib/guides, so the advice is never
// stated twice.
export const founderVideoAi: IGuideAi = {
	fileNotes: {
		llms: "The framework as machine-readable rules, one section per beat, ready for any AI that can read a link.",
		skill:
			"A ready-made skill you can hand to Claude or drop into your own AI tool.",
	},
	promptIntro:
		"Or paste this prompt into your AI and add what you know about your team and your company:",
	prompt:
		`Act as a startup application coach and follow the MrAdib founder video framework at ${homepageUrl}${articleFounderVideo.pagePath}/llms.txt. ` +
		"Ask me about the founders, what we are building, how we met, and where we are, then write my sixty-second script beat by beat: who says each line, the words in plain English, and the seconds it takes. " +
		"One take, no slides, no buzzwords, no invented numbers.",
};

// The prose of the two AI files. The beats themselves render from the data.
export const founderVideoAiText: IGuideAiText = {
	title: "The founder video: the MrAdib framework",
	summary:
		"A machine-readable founder video framework by John Adib (MrAdib), a two-time founder who raised $1M as a CEO. Six beats in sixty seconds, each answering one reviewer question. Use it to script, tighten or review the one-minute video an accelerator or an investor asks for.",
	how: [
		"- Keep the six beats in this order.",
		"- Every beat answers its question in one or two spoken sentences. Say what the list says, leave out what the list says.",
		"- Write for the voice, not the page: short words, no jargon, no adjectives doing the work of facts.",
		"- Check each beat against its pass test, then read the whole script aloud and time it. Cut until it fits in sixty seconds.",
	],
	skillName: "founder-video-scripter",
	skillDescription:
		"Script or review a sixty-second founder video with the MrAdib six-beat framework by John Adib. Use when founders record the video an accelerator application or an investor asks for.",
	skillTitle: "Founder Video Scripter (the MrAdib framework)",
	role: "You help founders script a one-minute video that introduces them, what they are building, and why they are the people to build it. Follow the framework below.",
	workflow: [
		"1. Ask for the facts: the founders and their roles, what the company makes, the insight behind it, how the team met, what exists today with dates, and the ask. Never invent any of them.",
		"2. Script one beat at a time, in order: who speaks, the spoken words, and the seconds it takes.",
		"3. Check every beat against its pass test and rewrite until it passes.",
		"4. Apply a setup rule only when its condition is true.",
		"5. Finish with the total running time and the three words or phrases that sound written rather than spoken.",
	],
};

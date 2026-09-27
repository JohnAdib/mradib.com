import { articleProductDemo } from "@/data/articles/product-demo";
import type { IGuideAi, IGuideAiText } from "@/data/guides/guide-bundle";
import { homepageUrl } from "@/lib/constants/url";

// The short prompt points the AI at the machine-readable framework, which is
// generated from the beat data by src/lib/guides, so the advice is never
// stated twice.
export const productDemoAi: IGuideAi = {
	fileNotes: {
		llms: "The framework as machine-readable rules, one section per beat, ready for any AI that can read a link.",
		skill:
			"A ready-made skill you can hand to Claude or drop into your own AI tool.",
	},
	promptIntro:
		"Or paste this prompt into your AI and describe your product and its user:",
	prompt:
		`Act as a startup pitch coach and follow the MrAdib product demo framework at ${homepageUrl}${articleProductDemo.pagePath}/llms.txt. ` +
		"Ask me who the user is, the one job the product does for them, and what I can show today, then script my demo beat by beat: what is on screen, what I say, and the seconds it takes. " +
		"One flow, under three minutes, real data, no feature tour, no invented numbers.",
};

// The prose of the two AI files. The beats themselves render from the data.
export const productDemoAiText: IGuideAiText = {
	title: "The startup product demo: the MrAdib framework",
	summary:
		"A machine-readable product demo framework by John Adib (MrAdib), a two-time founder who raised $1M as a CEO. Six beats in under three minutes, each answering one question the viewer has. Use it to script, tighten or review a demo video or a live demo.",
	how: [
		"- Keep the six beats in this order.",
		"- Every beat answers its question with one thing on screen. Show what the list says, skip what the list says.",
		"- One user, one job, one flow. Real product and real data only.",
		"- Check each beat against its pass test, then check the whole script runs under three minutes.",
	],
	skillName: "product-demo-scripter",
	skillDescription:
		"Script, tighten or review a startup product demo with the MrAdib six-beat framework by John Adib. Use when a founder records a demo video for an application, prepares a live demo, or has two minutes on a demo day stage.",
	skillTitle: "Product Demo Scripter (the MrAdib framework)",
	role: "You help a founder script a product demo that shows one real user doing one real job in under three minutes. Follow the framework below.",
	workflow: [
		"1. Ask for the facts: who the user is, the job, the flow as it exists today, what is built and what is not, and the usage numbers with dates. Never invent any of them.",
		"2. Script one beat at a time, in order: what is on screen, the narration, and the seconds it takes.",
		"3. Check every beat against its pass test and rewrite until it passes.",
		"4. Apply a format rule only when its condition is true.",
		"5. Finish with the total running time and the one cut that would make it shorter.",
	],
};

import { articleApplicationAnswers } from "@/data/articles/application-answers";
import type { IGuideAi, IGuideAiText } from "@/data/guides/guide-bundle";
import { homepageUrl } from "@/lib/constants/url";

// The short prompt points the AI at the machine-readable framework, which is
// generated from the answer data by src/lib/guides, so the advice is never
// stated twice.
export const applicationAnswersAi: IGuideAi = {
	fileNotes: {
		llms: "The framework as machine-readable rules, one section per answer, ready for any AI that can read a link.",
		skill:
			"A ready-made skill you can hand to Claude or drop into your own AI tool.",
	},
	promptIntro:
		"Or paste this prompt into your AI, then paste the form's questions and your facts:",
	prompt:
		`Act as a startup application coach and follow the MrAdib application framework at ${homepageUrl}${articleApplicationAnswers.pagePath}/llms.txt. ` +
		"Ask me the facts behind each of the ten answers, then draft every answer in plain prose: three to five sentences, the first one answering the question asked, every number with its date. " +
		"Specifics over adjectives, the same facts in every box, no invented numbers.",
};

// The prose of the two AI files. The answers themselves render from the data.
export const applicationAnswersAiText: IGuideAiText = {
	title: "Accelerator and investor application answers: the MrAdib framework",
	summary:
		"A machine-readable application framework by John Adib (MrAdib), a two-time founder who raised $1M as a CEO. Ten answers to the questions Y Combinator, Antler, Techstars and most programmes ask. Use it to draft, tighten or review an application.",
	how: [
		"- Map each box on the form to one of the ten answers below. Forms change their wording; the questions behind them do not.",
		"- Every answer meets its question in the first sentence. Say what the list says, leave out what the list says.",
		"- Specifics over adjectives: names, numbers, dates. The same facts as the deck and the one-pager.",
		"- Check each answer against its pass test. Never invent a number, a customer or a credential.",
	],
	skillName: "application-answer-writer",
	skillDescription:
		"Draft, tighten or review startup accelerator and investor application answers with the MrAdib ten-answer framework by John Adib. Use when a founder applies to Y Combinator, Antler, Techstars or any programme with a written form.",
	skillTitle: "Application Answer Writer (the MrAdib framework)",
	role: "You help a founder answer an application form so every box says something specific, true and consistent with the rest. Follow the framework below.",
	workflow: [
		"1. Ask for the form's questions and the facts: what the company makes, the insight, customers and evidence, progress with dates, competitors, the model, the founders and how they met, commitment, and the video links. Never invent any of them.",
		"2. Draft one answer at a time, in order: three to five sentences, the first answering the question asked.",
		"3. Check every answer against its pass test and rewrite until it passes.",
		"4. Apply a case rule only when its condition is true.",
		"5. Finish with a consistency check: every number, name and date appears the same way in every answer, the deck and the one-pager.",
	],
};

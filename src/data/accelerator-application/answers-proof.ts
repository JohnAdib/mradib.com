import type { IGuideStep } from "@/data/guides/guide-interface";
import type { ApplicationAnswerId } from "./step-id";

// Answers 4 to 6: who needs it, how far you are, and who else is there.
export const answersProof: IGuideStep<ApplicationAnswerId>[] = [
	{
		id: "users",
		title: "Who needs it",
		question: "Who needs it, and how do you know?",
		definition:
			"Your first customer, described so precisely the reviewer could find ten of them, and the evidence that they want what you make.",
		include: [
			"The first customer: role, company size, situation",
			"How many you have spoken to, and what they said",
			"Who pays and who uses, when they differ",
			"The evidence: interviews, pilots, waitlist, usage",
		],
		avoid: [
			"Everyone, or SMEs",
			"Demographics with no job to be done",
			"Survey percentages with no sample size",
		],
		test: "You can name ten real people or companies that fit.",
		tags: ["Y Combinator", "Techstars"],
	},
	{
		id: "progress",
		title: "How far along",
		question: "How far along are you?",
		definition:
			"What exists, who uses it, and how long you have worked on it, all with dates. Reviewers weigh speed: how much you did in the time you had.",
		include: [
			"What is built and live, with the launch date",
			"Users, customers, revenue, with the date",
			"How long you have worked on it, and how much of that full-time",
			"What changed since you last applied, if you did",
		],
		avoid: [
			"Projections",
			"Rounded-up numbers",
			"Traction words with no number: momentum, interest, buzz",
		],
		test: "Every claim carries a number or a date.",
		example:
			"Live since March. 140 restaurants, 31 paying, £4.2K MRR at 20 September. Two of us full-time since January.",
		tags: ["Y Combinator", "Techstars"],
	},
	{
		id: "competitors",
		title: "Who else",
		question: "Who else does this, and why will you win?",
		definition:
			"The alternatives your customer has today, including doing nothing, and what you understand about the business that they do not.",
		include: [
			"Direct competitors, named",
			"The indirect alternative: the spreadsheet, the agency, doing nothing",
			"What you understand that they do not",
			"Who you fear most, and why",
		],
		avoid: [
			"We have no competitors",
			"Trashing the competition",
			"A feature comparison table",
		],
		test: "The reviewer can say why a customer would switch.",
		tags: ["Y Combinator", "Techstars"],
	},
];

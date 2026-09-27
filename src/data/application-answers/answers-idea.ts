import type { IGuideStep } from "@/data/guides/guide-interface";
import type { ApplicationAnswerId } from "./step-id";

// Answers 1 to 3: the line, the product, and the insight behind it.
export const answersIdea: IGuideStep<ApplicationAnswerId>[] = [
	{
		id: "tagline",
		title: "One line",
		question: "What do you do, in one line?",
		definition:
			"The shortest answer on the form and the one read most. Y Combinator gives you fifty characters. Say what you make and for whom, in the words a customer would use.",
		include: [
			"What you make, for whom, in plain nouns",
			"Under fifty characters, so it fits every form",
			"The same line as your deck cover and your one-pager",
		],
		avoid: [
			"Category words: platform, ecosystem, solution, AI-powered",
			"A slogan",
			"Two ideas in one line",
		],
		test: "A stranger reads it and can guess what your product looks like.",
		example: "Payroll for restaurants with hourly staff.",
		tags: ["Y Combinator", "Techstars"],
	},
	{
		id: "product",
		title: "What you make",
		question: "What are you making?",
		definition:
			"The product as it exists or will exist, described so the reviewer can picture using it. What the user does, what they get, and what is built today.",
		include: [
			"What the user does with it, in three lines",
			"What they get at the end",
			"What exists today, and what is next",
			"A link to the product or the demo",
		],
		avoid: [
			"The vision before the product",
			"Features nobody asked about",
			"Adjectives: seamless, powerful, intuitive",
		],
		test: "The reviewer could sketch the main screen from your description.",
		tags: ["Y Combinator", "Antler", "Techstars"],
	},
	{
		id: "insight",
		title: "Why this idea",
		question: "Why this idea, and what do you know that others miss?",
		definition:
			"The reason you, of all people, are building this. Time spent in the problem, a pain you had, a system you built before. Then the one thing you understand that competitors do not.",
		include: [
			"How you found the problem: the job, the pain, the moment",
			"The insight in one sentence",
			"Domain experience, with years and roles",
			"How you know people need it: interviews, waitlists, usage",
		],
		avoid: [
			"We are passionate about",
			"Market size as the reason",
			"An insight anyone could have read in a report",
		],
		test: "The reviewer learns something about the market they did not know.",
		tags: ["Y Combinator", "Antler"],
	},
];

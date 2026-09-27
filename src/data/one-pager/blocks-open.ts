import type { IGuideStep } from "@/data/guides/guide-interface";
import type { OnePagerBlockId } from "./step-id";

// Blocks 1 to 3: who you are, what hurts, what you do about it.
export const blocksOpen: IGuideStep<OnePagerBlockId>[] = [
	{
		id: "header",
		title: "Header",
		question: "What is this, and who sent it?",
		definition:
			"The top strip. Company name, what you do in one plain sentence, the stage and the round, and how to reach you. An investor should place you in five seconds without reading further.",
		include: [
			"Company name and logo",
			"One sentence: what you do, for whom, in words a stranger would use",
			"Stage and round: pre-seed, raising £500K",
			"Founder name, email, website, and the date",
		],
		avoid: [
			"A slogan that fits any company",
			"A paragraph where a sentence would do",
			"Three logos and two taglines",
		],
		test: "Cover the rest of the page. The header alone says what you do and what you want.",
	},
	{
		id: "problem",
		title: "Problem",
		question: "What hurts, and who feels it?",
		definition:
			"The pain in two or three lines, before any product appears. Name who has it, how often, and what it costs them today.",
		include: [
			"The core problem in one sentence",
			"Who has it, described so you could find them tomorrow",
			"What it costs them: time, money or risk, with a number",
			"How they cope today, and where that breaks",
		],
		avoid: [
			"Introducing the product early",
			"A problem nobody pays to solve",
			"Ten problems in three lines. Pick one.",
		],
		test: "The reader nods before they see a single screen.",
	},
	{
		id: "solution",
		title: "Solution",
		question: "What do you do about it?",
		definition:
			"The product in two lines and how it works in one more. Say what changes for the customer, then what makes it possible today: a new capability, a rule change, a shift in behaviour.",
		include: [
			"The solution in one sentence, mapped to the problem",
			"How it works, in three steps at most",
			"What becomes dramatically easier, cheaper, faster or better",
			"Why now, in one line, when timing is part of the story",
		],
		avoid: [
			"A feature list",
			"The technology before the outcome",
			"A screenshot with no caption",
		],
		test: "Each line of the solution answers a line of the problem.",
	},
];

import type { IGuideStep } from "@/data/guides/guide-interface";
import type { FounderVideoBeatId } from "./step-id";

// Beats 1 to 3: who you are, what you make, and why you.
export const beatsOpen: IGuideStep<FounderVideoBeatId>[] = [
	{
		id: "who",
		title: "Who",
		question: "Who are you?",
		definition:
			"Ten seconds. Names, roles, and where you are. Every founder speaks their own name, looking at the lens. The reviewer is matching faces to the application.",
		include: [
			"Each founder: first name, surname, role, one clause of background",
			"Where the company is based",
			"All founders in frame from the first second",
		],
		avoid: [
			"A cold open with a logo or a slogan",
			"Job titles from a previous life",
			"Reading names off a screen",
		],
		test: "The reviewer can name every founder and their role without pausing.",
	},
	{
		id: "what",
		title: "What",
		question: "What are you building?",
		definition:
			"One sentence a stranger could repeat: for whom, which problem, what you make. The same sentence as the top of your application and your one-pager.",
		include: [
			"One sentence: who, problem, product",
			"The words your customers use",
			"The same line as the application form",
		],
		avoid: [
			"The vision before the product",
			"Two sentences where one would do",
			"Category words: platform, ecosystem, solution",
		],
		test: "A stranger can tell a friend what you make after hearing it once.",
	},
	{
		id: "insight",
		title: "Insight",
		question: "Why this, and why you?",
		definition:
			"The thing you know that others miss, and how you came to know it. Time spent in the problem, a customer you lived beside, a system you built before. This beat separates a founder from an applicant.",
		include: [
			"The insight in one line: what is true that others miss",
			"How you learned it: years in the industry, a pain you had yourself, a thing you built",
			"One specific detail a tourist would not know",
		],
		avoid: [
			"Market size",
			"The word passionate",
			"A story that starts in childhood",
		],
		test: "The reviewer believes you know something they do not.",
	},
];

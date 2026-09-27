import type { IGuideStep } from "@/data/guides/guide-interface";
import type { FounderVideoBeatId } from "./step-id";

// Beats 4 to 6: why this team, how far you are, and what you want.
export const beatsClose: IGuideStep<FounderVideoBeatId>[] = [
	{
		id: "team",
		title: "Team",
		question: "Why this team?",
		definition:
			"How you met, how long you have worked together, and who does what. Reviewers bet on the team holding together; show them the seams are strong.",
		include: [
			"How you met, and how long you have worked together",
			"Who builds, who sells, who runs the rest",
			"One thing you have shipped together before",
		],
		avoid: [
			"Every job each founder ever had",
			"Advisors and mentors",
			"Claiming skills nobody on camera has",
		],
		test: "The reviewer can say who builds the product and who sells it.",
	},
	{
		id: "progress",
		title: "Progress",
		question: "How far along are you?",
		definition:
			"What exists today and who uses it, in numbers with dates. Before users, what you shipped and when. Before shipping, what you learned from whom.",
		include: [
			"What is built and live",
			"Users, customers or revenue, with the date",
			"How long you have worked on it, and how much of that full-time",
		],
		avoid: [
			"Projections",
			"Rounding up",
			"Vague words: traction, momentum, interest",
		],
		test: "Every claim has a number or a date.",
	},
	{
		id: "close",
		title: "Close",
		question: "What do you want?",
		definition:
			"Five seconds. Say what you are asking for, then stop. No thank-you speech, no recap, no music.",
		include: [
			"The ask in one line: the programme, the round, the meeting",
			"A plain ending: your names, or nothing",
		],
		avoid: [
			"A thank-you speech",
			"A recap of the minute",
			"An outro card or music",
		],
		test: "The video ends within sixty seconds, on a full stop.",
		example:
			"We are raising £600K to launch in two more cities this year. I am Sara, this is Dan.",
	},
];

import type { IGuideStep } from "@/data/guides/guide-interface";
import type { ApplicationAnswerId } from "./step-id";

// Answers 7 to 10: the money, the founders, the commitment, and the video.
export const answersTeam: IGuideStep<ApplicationAnswerId>[] = [
	{
		id: "money",
		title: "How you earn",
		question: "How do you make money, and how big can it get?",
		definition:
			"Who pays, what they pay, and the bottom-up maths of how large that gets: customers times price. Hypotheses labelled as hypotheses.",
		include: [
			"Who pays and what they pay for",
			"Pricing and the model, with the current price",
			"Bottom-up size: customers you could reach times price per year",
			"What is proven and what is still a guess",
		],
		avoid: [
			"Three revenue models",
			"A share of a market-size number",
			"Hiding that pricing is untested",
		],
		test: "The reviewer can compute your revenue from one customer and from a thousand.",
		tags: ["Y Combinator", "Techstars"],
	},
	{
		id: "founders",
		title: "Why you",
		question: "Who are you, and how did you meet?",
		definition:
			"Each founder in two lines: the thing they built or achieved that matters here, and their role. Then how you met and how long you have worked together.",
		include: [
			"Each founder: role, and the most impressive thing they built or did",
			"How you met, and how long you have worked together",
			"Who writes the code, or does the technical work",
			"What each of you owns: product, engineering, sales",
		],
		avoid: [
			"Full CVs",
			"Titles with no achievement behind them",
			"Claiming a technical founder you do not have",
		],
		test: "The reviewer can say who builds and who sells, and one impressive thing about each.",
		tags: ["Y Combinator", "Antler", "Techstars"],
	},
	{
		id: "commitment",
		title: "How committed",
		question: "How committed are you?",
		definition:
			"Full-time or not, where you live and where the company will be, how equity is split, and whether you will relocate for the programme. Straight answers; hedges here end applications.",
		include: [
			"Who is full-time, since when, and when the rest will be",
			"Where you are based, and where the company will be",
			"The equity split, and whether it is agreed",
			"Whether you will relocate or attend in person, if asked",
		],
		avoid: [
			"Full-time once we are funded, with no date",
			"Skipping the equity question",
			"Different answers in different boxes",
		],
		test: "Every founder would give the same answer in an interview.",
		tags: ["Y Combinator", "Antler", "Techstars"],
	},
	{
		id: "video",
		title: "The video",
		question: "Where is the video?",
		definition:
			"Most programmes ask for a short founder video, and some accept a product demo too. Y Combinator asks for one minute of the founders and up to three minutes of demo. Link them here, unlisted, and make sure they match every answer above.",
		include: [
			"An unlisted link that plays without a login",
			"The founder video: sixty seconds, every founder on camera",
			"The demo video: under three minutes, one flow",
			"The same facts and numbers as the written answers",
		],
		avoid: [
			"A private link the reviewer cannot open",
			"Slides read aloud",
			"A five-minute video where one minute was asked",
		],
		test: "Both links open on a phone and say nothing the form does not.",
		tags: ["Y Combinator", "Techstars"],
	},
];

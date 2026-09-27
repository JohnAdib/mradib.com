import type { IPitchSlide } from "./slide-interface";

// Slides 5 to 8: the solution, the market, and how you win it.
export const slidesProof: IPitchSlide[] = [
	{
		id: "solution",
		title: "Solution and why now",
		question: "What are we building, and why now?",
		definition:
			"How the product removes the pain from slide 3, and the change in the world that makes it possible today. Why now lives here, so the solution and its timing are one story.",
		include: [
			"The solution in one sentence",
			"How it works, in three steps at most",
			"What becomes dramatically easier, cheaper, faster or better",
			"A screenshot or mockup",
			"Why now: the technology, behaviour, regulation or market shift that makes this possible today. For AI-native companies, the capability that did not exist before.",
		],
		avoid: [
			"A feature list",
			"The technology before the outcome",
			"A why now that was just as true five years ago",
		],
		test: "Maps line by line to the problem, and the why now names a specific change.",
	},
	{
		id: "market",
		title: "Market",
		question: "How big can this get?",
		definition:
			"Proof that solving the problem supports a large business. Build the number from the bottom up: customers times what they pay.",
		include: [
			"TAM, SAM, and the beachhead you start in",
			"A bottom-up calculation: number of customers times price per year",
			"Growth, and the trends driving it",
			"Where you expand once the beachhead is won",
		],
		avoid: [
			"One giant number from an industry report",
			"“1% of a $50B market”",
			"A market that is big but out of your reach",
		],
		test: "The bottom-up number and the top-down number roughly agree.",
	},
	{
		id: "competition",
		title: "Competition",
		question: "Who else solves this, and why do we win?",
		definition:
			"The alternatives a customer has today, including doing nothing, and the two or three dimensions where you are different and hard to copy.",
		include: [
			"Direct competitors",
			"Indirect alternatives: a spreadsheet, an agency, doing nothing",
			"Two or three dimensions where you differ",
			"Your structural advantage or defensibility",
		],
		avoid: [
			"“We have no competitors”",
			"A 2x2 where you sit alone in the top right",
			"Trashing the competition",
		],
		test: "You can say what a customer does today without you, and why they would switch.",
	},
	{
		id: "distribution",
		title: "Go-to-market",
		question: "How will we reach customers?",
		definition:
			"How you get the first customers, then scale distribution. At an early stage this is a credible hypothesis, not a proven engine.",
		include: [
			"The first channel, and why it fits this customer",
			"The launch plan",
			"Partnerships, the sales motion if B2B, community and referrals",
			"The rollout by segment or geography, and how it evolves as you grow",
		],
		avoid: [
			"Every channel on one slide",
			"“Viral growth” as the plan",
			"Hiding the cost of acquisition when you know it",
		],
		test: "The first 10 customers by name, the next 100 by channel.",
	},
];

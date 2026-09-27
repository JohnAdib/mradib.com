import type { IGuideStep } from "@/data/guides/guide-interface";
import type { OnePagerBlockId } from "./step-id";

// Blocks 7 to 9: the economics, the people, and the ask.
export const blocksClose: IGuideStep<OnePagerBlockId>[] = [
	{
		id: "model",
		title: "Business model",
		question: "How do you make money?",
		definition:
			"Who pays, what they pay for, and how it repeats. Add how you reach them: the first channel, and what it costs to win a customer when you know.",
		include: [
			"Who pays, and what they pay for",
			"Pricing and the model: subscription, commission, transaction",
			"The first channel, and why it fits this customer",
			"Unit economics, only when they are real",
		],
		avoid: [
			"Three revenue models at once",
			"Projections with no assumptions",
			"Hiding that pricing is still a hypothesis",
		],
		test: "The reader can work out the revenue from one customer.",
	},
	{
		id: "team",
		title: "Team",
		question: "Who is doing this?",
		definition:
			"One line per founder: what they built or did that matters for this problem. Not a CV, and not the whole team.",
		include: [
			"Each founder: name, role, one relevant achievement",
			"The domain edge: what you know that others do not",
			"Who covers product, technology and sales",
			"Advisors, only when they are genuinely involved",
		],
		avoid: [
			"Full CVs",
			"Logos with no link to the problem",
			"Advisors who took one call",
		],
		test: "Each line answers: why this person, for this problem.",
	},
	{
		id: "ask",
		title: "The ask",
		question: "What do you need, and what does it buy?",
		definition:
			"The amount, the runway it buys, and the milestones it reaches before the next round. Investors care more about the milestones than the number.",
		include: [
			"The amount you are raising, and the round",
			"Runway in months, usually 12 to 18",
			"The three milestones the money reaches",
			"What is already committed, when there is something",
		],
		avoid: [
			"A range instead of a number",
			"A pie chart of percentages with no milestone",
			"An ask that stops short of the next fundable milestone",
		],
		test: "The reader can see exactly what their money buys.",
		example:
			"Raising £600K pre-seed. 18 months of runway. Launch in two cities, 200 paying teams, £30K MRR.",
	},
];

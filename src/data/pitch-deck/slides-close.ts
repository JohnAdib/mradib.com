import type { IPitchSlide } from "./slide-interface";

// Slides 9 to 12: the evidence, the economics, the people, and the ask.
export const slidesClose: IPitchSlide[] = [
	{
		id: "traction",
		title: "Traction",
		question: "What proof do we have that this works?",
		definition:
			"The strongest evidence you actually have. At pre-seed, traction does not have to mean revenue. Pilots, a waitlist, customer interviews and shipped product all count.",
		include: [
			"Users, revenue or growth, when you have them",
			"Waitlist, pilots, letters of intent, partnerships",
			"Retention and engagement",
			"Customer interviews, MVP progress, experiments and their results",
			"One chart or three numbers, each with a date",
		],
		avoid: [
			"Vanity metrics: sign-ups with no usage",
			"Weak metrics manufactured to fill the slide",
			"Cumulative charts that hide flat growth",
		],
		test: "Every number has a date and a definition.",
	},
	{
		id: "model",
		title: "Business model",
		question: "How does the company make money?",
		definition:
			"The economic engine, simply: who pays, what they pay for, and how it repeats. Early on, parts of this are hypotheses. Say which.",
		include: [
			"Who pays",
			"What they pay for",
			"Pricing, and the model: subscription, commission, transaction",
			"The recurring revenue you expect",
			"Unit economics, when they are real and meaningful",
		],
		avoid: [
			"Three revenue models at once",
			"Projections with no assumptions behind them",
			"Hiding that the pricing is still a hypothesis",
		],
		test: "An investor can work out the revenue from one customer using this slide alone.",
	},
	{
		id: "team",
		title: "Team",
		question: "Why is this the team to build it?",
		definition:
			"Founder-market fit and the ability to execute. Not a CV for each person, but why this particular group has an edge on this particular problem.",
		include: [
			"Founders and key people, with the experience that matters here",
			"Domain expertise: what you know or have done that others have not",
			"Technical, product and commercial strengths, and who covers each",
			"Achievements directly relevant to this company",
			"Advisors who are genuinely involved",
		],
		avoid: [
			"Full CVs",
			"Logos with no link to the problem",
			"Advisors who took one call",
		],
		test: "Each founder's line answers: why this person, for this problem.",
	},
	{
		id: "ask",
		title: "The Ask",
		question: "How much are we raising, and what does it achieve?",
		definition:
			"The amount, and what it buys. The number matters less than the milestones it reaches before the next round.",
		include: [
			"The amount you are raising",
			"Broad use of funds",
			"Expected runway, usually 12 to 18 months",
			"The milestones this round is meant to reach",
			"Where the company stands before the next financing",
		],
		avoid: [
			"A range instead of a number",
			"A pie chart of percentages with no milestone attached",
			"An ask that stops short of the next fundable milestone",
		],
		test: "The investor can see exactly what their money buys.",
		example:
			"Raising £750K. 18 months of runway. Launch, first 10,000 customers, £X ARR, then a second market.",
	},
];

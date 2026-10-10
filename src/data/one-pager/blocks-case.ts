import type { IGuideStep } from "@/data/guides/guide-interface";
import type { OnePagerBlockId } from "./step-id";

// Blocks 4 to 6: how big it gets, why you win, and the proof so far.
export const blocksCase: IGuideStep<OnePagerBlockId>[] = [
	{
		id: "market",
		title: "Market",
		question: "How big can this get?",
		definition:
			"One number an investor can check, built from the bottom up: customers times what they pay a year. Name the beachhead you start in and where you go next.",
		include: [
			"The bottom-up number: customers times price per year",
			"The beachhead: who you win first",
			"The expansion path: the next segment or market",
			"One trend that makes the market grow",
		],
		avoid: [
			"One giant figure from an industry report",
			"1% of a $50B market",
			"A market so broad it says nothing about your customer",
		],
		test: "The reader can redo your maths from the page.",
	},
	{
		id: "edge",
		title: "Why you win",
		question: "Why you, and not the others?",
		definition:
			"The alternatives a customer has today, including doing nothing, and the one or two things that make you different and hard to copy.",
		include: [
			"The two or three alternatives, named",
			"Your edge in one line: what you do that they cannot",
			"What makes it hard to copy: data, distribution, cost or regulation",
			"Where the market is heading, and why it favours your approach",
		],
		avoid: [
			"We have no competitors",
			"A 2x2 with you alone in the corner",
			"Naming a rival you have never met in a deal",
		],
		test: "The reader can say why a customer would switch to you.",
	},
	{
		id: "traction",
		title: "Traction",
		question: "What have you proven so far?",
		definition:
			"Your strongest evidence, in numbers with dates. Before revenue, pilots, a waitlist, interviews and shipped product all count. This is the block investors read twice.",
		include: [
			"Three numbers, each with a date and a definition",
			"Growth month on month, when you have it",
			"Pilots, letters of intent, paying customers, partners",
			"What you shipped, and when",
		],
		avoid: [
			"Vanity metrics: sign-ups with no usage",
			"Cumulative charts that hide flat growth",
			"Numbers without dates",
		],
		test: "Every number has a date, a unit and a definition.",
		example:
			"£8K MRR in September, up from £3K in June. 40 paying teams. Pilot signed with a national retailer.",
	},
];

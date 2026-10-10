import type { IGuideOptional, IGuideRule } from "@/data/guides/guide-interface";
import type { ApplicationAnswerId } from "./step-id";

// The default answers fit a small team with a product and early users. Four cases change the rules.
export const acceleratorApplicationRules: IGuideRule<ApplicationAnswerId>[] = [
	{
		stepId: "progress",
		icon: "flag",
		title: "Pre-product",
		when: "Nothing is live yet.",
		action:
			"Answer progress with evidence of demand and speed: interviews with dates, a waitlist with numbers, a prototype with a link, and what you shipped each week since you started.",
	},
	{
		stepId: "founders",
		icon: "user",
		title: "Solo founder",
		when: "You are applying alone.",
		action:
			"Say so in the founders answer, then cover it: why you can build and sell this alone for now, and what you are doing about a co-founder. Antler exists to match co-founders; Y Combinator funds solo founders and asks anyway.",
	},
	{
		icon: "refresh",
		title: "Reapplying or pivoted",
		when: "You applied before, or the idea changed.",
		action:
			"Say what changed, with dates and numbers, in the first line of the progress answer. Reviewers see your previous application; pretending it did not exist costs more than the pivot.",
	},
	{
		icon: "map",
		title: "A themed programme",
		when: "The programme has a location, an industry or a stage in its name.",
		action:
			"Answer why this programme in one specific line: the city you will move to, the vertical you sell into, the stage you are at. Never paste the same answer into a different programme.",
	},
];

// Boxes that appear on some forms and earn an answer only when they do.
export const acceleratorApplicationOptional: IGuideOptional[] = [
	{
		title: "The hack story",
		when: "The form asks for a time you hacked a system to your advantage. Tell a true story with a result, in four lines.",
	},
	{
		title: "Other ideas you considered",
		when: "The form asks. One line each, and why you did not pick them.",
	},
	{
		title: "How you heard about them",
		when: "Name the person or the event. A referral from an alum carries weight.",
	},
	{
		title: "Anything else",
		when: "There is a fact the boxes did not ask for that changes the picture. Otherwise leave it empty.",
	},
];

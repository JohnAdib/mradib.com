import type { IGuideOptional, IGuideRule } from "@/data/guides/guide-interface";
import type { OnePagerBlockId } from "./step-id";

// The default order is the standard. These three cases earn a change.
export const onePagerRules: IGuideRule<OnePagerBlockId>[] = [
	{
		stepId: "traction",
		icon: "trend",
		title: "Traction leads",
		when: "Your numbers are the strongest card you hold.",
		action:
			"Put Traction directly under the header, before the problem. Let the numbers earn the read.",
	},
	{
		stepId: "team",
		icon: "team",
		title: "Team leads",
		when: "There is no product yet and the bet is on the founders.",
		action:
			"Put Team directly under the header. At the idea stage, investors back people first.",
	},
	{
		icon: "mail",
		title: "The email version",
		when: "The one-pager rides inside a cold email, not as an attachment.",
		action:
			"Cut it to five blocks in the body: header, problem, solution, traction, ask. Attach the full page as a PDF.",
	},
];

// Blocks that earn a place only when the business calls for them.
export const onePagerOptional: IGuideOptional[] = [
	{
		title: "Why now",
		when: "Timing is the story and one line inside the solution is not enough.",
	},
	{
		title: "Product shot",
		when: "One screen says more than a paragraph. Caption it.",
	},
	{
		title: "Advisors and investors",
		when: "Names an investor would recognise are already committed.",
	},
	{
		title: "Milestones",
		when: "You have dated milestones for the next 18 months.",
	},
	{
		title: "Press",
		when: "A named outlet covered you, and the quote is short.",
	},
];

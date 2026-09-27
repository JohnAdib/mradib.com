import type { IReorderRule } from "./slide-interface";

// The default order is the standard. These three cases earn a change.
// Each rule is stated once here; the order section lists them all and the
// affected slide shows its own.
export const reorderRules: IReorderRule[] = [
	{
		slideId: "traction",
		title: "Traction moves up",
		when: "Your numbers are the strongest card you hold.",
		move: "Put Traction right after Solution, so the evidence lands before the market maths.",
	},
	{
		slideId: "team",
		title: "Team moves up",
		when: "There is no product yet and the bet is on the founders.",
		move: "Put Team right after Solution. At pre-seed, investors back people first.",
	},
	{
		slideId: "solution",
		title: "Why now gets its own slide",
		when: "Timing is the story, whether a new capability, a rule change, or a shift in behaviour.",
		move: "Split why now out of Solution into its own slide, directly after it.",
	},
];

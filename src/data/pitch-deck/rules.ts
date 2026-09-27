import type { IGuideRule } from "@/data/guides/guide-interface";
import type { PitchSlideId } from "./slide-id";

// The default order is the standard. These three cases earn a change.
// Each rule is stated once here; the order section lists them all and the
// affected slide shows its own.
export const reorderRules: IGuideRule<PitchSlideId>[] = [
	{
		stepId: "traction",
		icon: "trend",
		title: "Traction moves up",
		when: "Your numbers are the strongest card you hold.",
		action:
			"Put Traction right after Solution, so the evidence lands before the market maths.",
	},
	{
		stepId: "team",
		icon: "team",
		title: "Team moves up",
		when: "There is no product yet and the bet is on the founders.",
		action:
			"Put Team right after Solution. At pre-seed, investors back people first.",
	},
	{
		stepId: "solution",
		icon: "clock",
		title: "Why now gets its own slide",
		when: "Timing is the story, whether a new capability, a rule change, or a shift in behaviour.",
		action:
			"Split why now out of Solution into its own slide, directly after it.",
	},
];

import type { IGuideOptional, IGuideRule } from "@/data/guides/guide-interface";
import type { FounderVideoBeatId } from "./step-id";

// The default is every founder in one frame, talking to the lens. Three cases change the rules.
export const founderVideoRules: IGuideRule<FounderVideoBeatId>[] = [
	{
		stepId: "team",
		icon: "user",
		title: "Solo founder",
		when: "You are the only founder.",
		action:
			"Say so in the first beat, then spend the team beat on how you cover what you cannot do alone: the first hire, a contractor, a technical partner. Never hide it.",
	},
	{
		stepId: "who",
		icon: "globe",
		title: "Co-founders in two places",
		when: "The founders cannot be in one room.",
		action:
			"Record one video call, both cameras on, no editing between speakers. Say where each of you is and how you work together.",
	},
	{
		icon: "chat",
		title: "Camera shy",
		when: "Talking to a lens makes you stiff.",
		action:
			"Put a friend behind the camera and talk to them. Record five takes and keep the most natural, not the most polished. Notes on a card are fine; reading is not.",
	},
];

// Beats that earn a place only when they add something the words cannot.
export const founderVideoOptional: IGuideOptional[] = [
	{
		title: "A product glimpse",
		when: "Five seconds of the product on screen say more than a sentence, and the demo video is separate.",
	},
	{
		title: "Name captions",
		when: "The reviewer may watch on mute. Add names and roles as text, nothing else.",
	},
	{
		title: "A customer line",
		when: "A customer said one sentence you can quote, with their name.",
	},
	{
		title: "The demo link",
		when: "The programme allows a second video. Point to it in the close.",
	},
];

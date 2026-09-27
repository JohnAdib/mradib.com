import type { IGuideStep } from "@/data/guides/guide-interface";
import type { ProductDemoBeatId } from "./step-id";

// Beats 1 to 3: who it is for, where they start, what they do.
export const beatsOpen: IGuideStep<ProductDemoBeatId>[] = [
	{
		id: "hook",
		title: "Hook",
		question: "Who is this for, and what do they get?",
		definition:
			"The first ten seconds. One sentence: who the user is, the job they need done, and what your product gives them. Then the product is on screen. No logo animation, no company history.",
		include: [
			"One sentence: for whom, which job, what result",
			"Your name and the product's name, once",
			"The product on screen by second ten",
		],
		avoid: [
			"A title card, a logo reveal, music",
			"The founding story",
			"Describing the industry",
		],
		test: "By second ten a stranger knows who this is for and the product is visible.",
	},
	{
		id: "context",
		title: "Context",
		question: "Where does the user start?",
		definition:
			"The real situation just before your product. The trigger, the mess they are in today, and the one thing they want. Use a real account with real data, never placeholder text.",
		include: [
			"A real user scenario with a name and a task",
			"The state before: the spreadsheet, the inbox, the manual step",
			"Real data, with anything sensitive replaced",
		],
		avoid: [
			"Login, sign-up and onboarding screens",
			"Empty states and test data",
			"Explaining every menu",
		],
		test: "The viewer wants the problem solved before you touch a button.",
	},
	{
		id: "flow",
		title: "Flow",
		question: "What does the user do?",
		definition:
			"The core action, start to finish, at the speed a real user works. One path, no detours. Narrate why the user does each step, not what the button is called.",
		include: [
			"One path from trigger to result",
			"Narration on the why: the decision at each step",
			"The two or three details that show craft",
			"Cursor movements a viewer can follow",
		],
		avoid: [
			"Every feature you built",
			"Settings, admin and edge cases",
			"Silence, or reading the interface aloud",
		],
		test: "A viewer could repeat the flow from memory.",
	},
];

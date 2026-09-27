import type { IGuideOptional, IGuideRule } from "@/data/guides/guide-interface";

// The default is a screen recording with your voice. Three formats change the rules.
export const productDemoRules: IGuideRule[] = [
	{
		icon: "video",
		title: "Recorded video",
		when: "An application or an investor asks for a link.",
		action:
			"Screen recording with your voice, one take if you can, under three minutes. Y Combinator caps it at three; aim for two. Unlisted link, no password.",
	},
	{
		icon: "users",
		title: "Live in the room",
		when: "You demo in a meeting or on a call.",
		action:
			"A staged account loaded with real-looking data, one path rehearsed ten times, and a recording as backup. Never build or fix anything live.",
	},
	{
		icon: "stage",
		title: "On the demo day stage",
		when: "A pitch competition or a demo day gives you two minutes.",
		action:
			"Bigger type, slower cursor, the magic moment first. Cut context to one sentence and skip proof: the deck carries it.",
	},
];

// Beats that earn a place only when the product calls for them.
export const productDemoOptional: IGuideOptional[] = [
	{
		title: "A second flow",
		when: "One flow undersells the product and you still land under three minutes.",
	},
	{
		title: "Captions",
		when: "The video will be watched on mute, as most application videos are.",
	},
	{
		title: "Before and after",
		when: "The old way is so painful that seeing it makes the magic moment land harder.",
	},
	{
		title: "A sandbox login",
		when: "Reviewers can try it themselves and the product survives a stranger's clicks.",
	},
	{
		title: "Mobile view",
		when: "The product lives on a phone, or the buyer will judge it there.",
	},
];

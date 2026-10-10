import type { IFaqQA } from "@/components/faq/faq-interface";

export const deckFaqTitle = "Questions founders ask";

export const pitchDeckFaq: IFaqQA[] = [
	{
		id: "count",
		q: "How many slides should a pitch deck have?",
		a: "Twelve is enough for a full story: one investor question per slide. Ten to fifteen is the normal range. If a slide does not answer a question, cut it.",
	},
	{
		id: "revenue",
		q: "Do I need revenue to raise a pre-seed round?",
		a: "No. At pre-seed the bet is on the founders, the problem, and the early evidence. Pilots, a waitlist, customer interviews and a working product all count as traction.",
	},
	{
		id: "send",
		q: "Should I send the deck before the meeting?",
		a: "Yes, a version that reads on its own. Investors skim a deck in minutes, so every slide must make its point without you in the room. Keep the detail for the conversation.",
	},
	{
		id: "length",
		q: "How much should go on one slide?",
		a: "One idea, one question answered. Big type, few words, one visual. If a slide takes more than a minute to explain, it is two slides or an appendix.",
	},
];

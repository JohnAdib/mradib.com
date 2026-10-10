import type { IFaqQA } from "@/components/faq/faq-interface";

export const acceleratorApplicationFaqTitle = "Questions founders ask";

export const acceleratorApplicationFaq: IFaqQA[] = [
	{
		id: "length",
		q: "How long should each answer be?",
		a: "As short as the whole truth allows. Three to five sentences for most boxes, one line for the tagline. Reviewers skim; the first sentence must carry the answer.",
	},
	{
		id: "deck",
		q: "Can I paste text from my deck?",
		a: "Paste the facts, not the slides. Deck lines are headlines; application boxes want full sentences that answer the question asked. Same numbers, same names, plain prose.",
	},
	{
		id: "traction",
		q: "What if we have no traction?",
		a: "Say so, then show speed and evidence: how much you built in how many weeks, how many customers you spoke to, what they said. Programmes fund trajectories, not snapshots.",
	},
	{
		id: "ai",
		q: "Can AI write the answers?",
		a: "It can draft them if you give it the facts and this framework. It cannot invent your insight or your numbers, and reviewers recognise generic text instantly. Edit every line until it sounds like you.",
	},
];

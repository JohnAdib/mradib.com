import type { IFaqQA } from "@/components/faq/faq-interface";

export const onePagerFaqTitle = "Questions founders ask";

export const onePagerFaq: IFaqQA[] = [
	{
		id: "deck",
		q: "Do I need a one-pager if I have a deck?",
		a: "Yes. The deck needs you in the room or ten minutes of attention. The one-pager needs one minute and a phone screen. Investors forward one-pagers; they rarely forward decks.",
	},
	{
		id: "length",
		q: "How many words fit on a one-pager?",
		a: "About 300 to 400, with white space. One side of A4 or Letter, in type no smaller than 10 point. If it needs a second page, it is a deck.",
	},
	{
		id: "design",
		q: "Should it be designed or plain text?",
		a: "Clean beats designed. Clear headings, one product shot at most, your logo, and plenty of space. A well-set text document wins over a busy poster.",
	},
	{
		id: "when",
		q: "When do I send it?",
		a: "Before the first meeting, in the intro email, and after the meeting as the summary. Update the traction block every time you send it, with the date.",
	},
];

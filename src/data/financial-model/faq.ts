import type { IFaqQA } from "@/components/faq/faq-interface";

export const financialModelFaqTitle = "Questions founders ask";

export const financialModelFaq: IFaqQA[] = [
	{
		id: "horizon",
		q: "How far ahead should the model go?",
		a: "Monthly for 24 months, then yearly to year three or five if the round needs it. Nobody believes month 47. The monthly view for the runway of this round is what gets checked.",
	},
	{
		id: "prerevenue",
		q: "Do I need a model before revenue?",
		a: "Yes, a small one. It shows how you think about cost, hiring and runway, which is what pre-seed investors are buying. Two sheets done honestly beat nine done for show.",
	},
	{
		id: "tool",
		q: "Excel, Google Sheets, or a modelling tool?",
		a: "Sheets or Excel. Investors want to click into cells and see formulas. Send a copy they can edit, not a PDF, and keep a version you never share.",
	},
	{
		id: "precision",
		q: "How precise does it need to be?",
		a: "Precise about the logic, rough about the future. Every number should trace to an input you can defend; the inputs themselves are estimates. Round to the nearest thousand and say so.",
	},
];

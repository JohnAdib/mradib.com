import type { IGuideStep } from "@/data/guides/guide-interface";
import type { FinancialModelSheetId } from "./step-id";

// Sheets 4 to 6: what each sale costs, who you hire, and what else you spend.
export const sheetsCosts: IGuideStep<FinancialModelSheetId>[] = [
	{
		id: "costs",
		title: "Cost of sales",
		question: "What does each sale cost you?",
		definition:
			"The costs that grow with every customer: hosting, payment fees, support, delivery, third-party licences. Gross margin comes out of this sheet, and investors compare it to your category.",
		include: [
			"Every cost that scales with customers or revenue",
			"Per-unit costs from assumptions, times volume",
			"Gross margin by month and by product",
			"Payment and platform fees as percentages",
		],
		avoid: [
			"Salaries in cost of sales, unless the people deliver the product",
			"A margin copied from a public company",
			"Forgetting that the free tier costs money",
		],
		test: "Gross margin lands in the range your category expects, or you can explain why not.",
	},
	{
		id: "hiring",
		title: "Hiring plan",
		question: "Who do you hire, and when?",
		definition:
			"One row per role: title, start month, fully loaded cost. People are the largest cost of most early companies, so the hiring plan is where the model gets honest.",
		include: [
			"Every role, with its start month",
			"Fully loaded cost: salary plus tax, benefits and equipment",
			"Founder salaries, stated plainly",
			"The trigger for each hire: a milestone or a customer count",
		],
		avoid: [
			"A headcount number with no roles behind it",
			"Hiring everyone in month one",
			"Salaries below what the market pays",
		],
		test: "You can say who starts in month nine, and why then.",
	},
	{
		id: "opex",
		title: "Operating costs",
		question: "What else do you spend?",
		definition:
			"The costs that do not scale with customers: tools, rent, legal, accounting, insurance, travel, marketing programmes. Small lines that add up to a real number.",
		include: [
			"Software and tools, one line each above a threshold",
			"Legal, accounting, insurance and compliance",
			"Office or coworking, travel, events",
			"Marketing spend, if it is not already in the customer sheet",
		],
		avoid: [
			"A single miscellaneous line",
			"Costs that appear only after the raise closes",
			"Forgetting the tax bill",
		],
		test: "Every line is a real supplier or a real category you could invoice.",
	},
];

import type { IGuideStep } from "@/data/guides/guide-interface";
import type { FinancialModelSheetId } from "./step-id";

// Sheets 1 to 3: the inputs, the customers, and the revenue they bring.
export const sheetsDrivers: IGuideStep<FinancialModelSheetId>[] = [
	{
		id: "assumptions",
		title: "Assumptions",
		question: "What drives this business?",
		definition:
			"Every input in one place: prices, conversion rates, churn, salaries, start dates, the raise. Each with a source or a reason. Every other sheet reads from here and hard-codes nothing.",
		include: [
			"Every driver, one row each, in its own colour",
			"The source or the reasoning beside each number",
			"Start month, raise amount and opening cash",
			"A date on the sheet, and a version number",
		],
		avoid: [
			"Numbers typed into formulas elsewhere",
			"Assumptions copied from a template you cannot explain",
			"Precision you do not have: 3.7% when you mean about 4%",
		],
		test: "Change one input here and every sheet moves; nothing else needs touching.",
	},
	{
		id: "customers",
		title: "Customers",
		question: "Where do customers come from, and what does each one cost?",
		definition:
			"The acquisition build: how many people you reach each month, how many convert, how many stay. Channel by channel, with the cost of each, so acquisition cost and payback fall out of the sheet.",
		include: [
			"Each channel: reach, conversion, new customers per month",
			"Spend per channel and cost per customer",
			"Churn or retention, so the customer count is a stock, not a running total",
			"Payback period, from the cost above and the revenue below",
		],
		avoid: [
			"Growth as a percentage per month with nothing behind it",
			"One blended acquisition cost with no channel",
			"Customers that never leave",
		],
		test: "You can say where next month's customers come from and what each one costs.",
	},
	{
		id: "revenue",
		title: "Revenue",
		question: "How does money come in?",
		definition:
			"Customers times price, product by product, with the timing of cash: monthly, annual upfront, or on delivery. Built up from the customer sheet, never typed in.",
		include: [
			"Customers by plan or product, from the sheet above",
			"Price per plan, from assumptions",
			"Timing: when cash arrives versus when revenue is earned",
			"Discounts, free tiers and trials as their own lines",
		],
		avoid: [
			"A revenue line typed straight into the summary",
			"Top-down: a share of a market size",
			"Price rises you have not tested",
		],
		test: "Revenue in any month equals customers times price in that month, and you can point at both.",
	},
];

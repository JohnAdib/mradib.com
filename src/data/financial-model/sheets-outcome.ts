import type { IGuideStep } from "@/data/guides/guide-interface";
import type { FinancialModelSheetId } from "./step-id";

// Sheets 7 to 9: the cash, the what-ifs, and the one page investors read.
export const sheetsOutcome: IGuideStep<FinancialModelSheetId>[] = [
	{
		id: "cash",
		title: "Cash and runway",
		question: "How long does the money last?",
		definition:
			"Opening cash, plus the raise, plus receipts, minus everything above. The month the number crosses zero is your zero-cash date, and runway is the count of months until then. This is the sheet investors open first.",
		include: [
			"Opening cash and the raise, by month received",
			"Monthly burn and cumulative cash",
			"Runway in months and the zero-cash date",
			"The milestone reached before cash runs out",
		],
		avoid: [
			"Revenue counted before it is collected",
			"A raise assumed on day one",
			"A model that never runs out of money",
		],
		test: "You can name the month you run out of cash without a raise, and the milestone you hit before it.",
		example:
			"Opening cash £40K. Raise £600K in month 1. Burn £35K a month rising to £55K. Zero-cash month 19. Milestone before it: £30K MRR in month 15.",
	},
	{
		id: "scenarios",
		title: "Scenarios",
		question: "What if you are wrong?",
		definition:
			"Three versions of the same model: base, slower, faster. Change only two or three inputs, and show what happens to runway. Investors want to see you know which assumptions matter.",
		include: [
			"Base, downside and upside as switches on the assumptions sheet",
			"The two or three inputs each scenario changes",
			"Runway and zero-cash date under each",
			"What you would cut, and when, in the downside",
		],
		avoid: [
			"Ten scenarios",
			"A downside that is still a hockey stick",
			"Changing every input at once",
		],
		test: "You can name the one assumption that, if wrong, shortens runway the most.",
	},
	{
		id: "summary",
		title: "Summary",
		question: "Does it add up on one page?",
		definition:
			"The sheet investors read: revenue, gross margin, operating costs, burn and cash by month, with the three or four metrics your category lives by. Built from the sheets above, never typed. Put it first in the file.",
		include: [
			"Monthly revenue, gross margin, costs, burn and cash, from the sheets above",
			"The metrics that matter for your model: MRR, customers, payback, gross margin",
			"Charts of revenue and cash, one each",
			"Assumptions version and date",
		],
		avoid: [
			"Annual totals that hide the monthly shape",
			"Metrics you cannot recompute from the model",
			"Colour, arrows and commentary",
		],
		test: "An investor reads this sheet alone and can ask a precise question about any number.",
	},
];

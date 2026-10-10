import type { IGuideOptional, IGuideRule } from "@/data/guides/guide-interface";
import type { FinancialModelSheetId } from "./step-id";

// The default fits a software company around first revenue. Four cases change the rules.
export const financialModelRules: IGuideRule<FinancialModelSheetId>[] = [
	{
		stepId: "revenue",
		icon: "flag",
		title: "Pre-revenue",
		when: "You have no revenue yet and few real data points.",
		action:
			"Spend the effort on drivers, hiring and runway, not on the revenue curve. Show the first customers as named pilots, and mark every price and conversion rate as a hypothesis.",
	},
	{
		stepId: "customers",
		icon: "cloud",
		title: "SaaS",
		when: "You sell subscriptions.",
		action:
			"Build customers as cohorts with monthly churn, add net revenue retention, and report MRR, payback and gross margin. Annual plans arrive as cash upfront and revenue over twelve months.",
	},
	{
		icon: "shop",
		title: "Marketplace",
		when: "You match two sides and take a cut.",
		action:
			"Model both sides: supply and demand, each with its own acquisition sheet. Revenue is transaction volume times take rate; report volume and take rate separately, never a blended line.",
	},
	{
		stepId: "costs",
		icon: "cube",
		title: "Hardware",
		when: "You make a physical product.",
		action:
			"Add inventory and cost of goods with their timing: you pay suppliers months before customers pay you. Model the deposit, the production run and the cash gap explicitly.",
	},
];

// Sheets that earn a place only when the round or the business calls for them.
export const financialModelOptional: IGuideOptional[] = [
	{
		title: "Cap table",
		when: "You have taken money before, or the round has a SAFE or a convertible in it.",
	},
	{
		title: "Use of funds",
		when: "An investor asks where the raise goes: the same numbers as the hiring and spend sheets, grouped.",
	},
	{
		title: "Cohort table",
		when: "You have six months of customers and can show retention by month of joining.",
	},
	{
		title: "Sensitivity table",
		when: "One input dominates and a grid of its values against runway says it faster than three scenarios.",
	},
	{
		title: "Fundraising plan",
		when: "This round is one of several: show the next raise, its trigger, and the milestones before it.",
	},
];

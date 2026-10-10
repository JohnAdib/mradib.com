import { articleFinancialModel } from "@/data/articles/financial-model";
import type { IGuideAi, IGuideAiText } from "@/data/guides/guide-bundle";
import { homepageUrl } from "@/lib/constants/url";

// The short prompt points the AI at the machine-readable framework, which is
// generated from the sheet data by src/lib/guides, so the advice is never
// stated twice.
export const financialModelAi: IGuideAi = {
	fileNotes: {
		llms: "The framework as machine-readable rules, one section per sheet, ready for any AI that can read a link.",
		skill:
			"A ready-made skill you can hand to Claude or drop into your own AI tool.",
	},
	promptIntro:
		"Or paste this prompt into your AI and add your prices, costs and plans:",
	prompt:
		`Act as a startup finance coach and follow the MrAdib financial model framework at ${homepageUrl}${articleFinancialModel.pagePath}/llms.txt. ` +
		"Ask me for my prices, channels, conversion and churn, team plan, costs, opening cash and the raise, then build my model sheet by sheet: the rows, the formulas in words, and the assumptions each one reads. " +
		"Bottom-up only, every number traced to an input, runway in months, no invented figures.",
};

// The prose of the two AI files. The sheets themselves render from the data.
export const financialModelAiText: IGuideAiText = {
	title: "The startup financial model: the MrAdib framework",
	summary:
		"A machine-readable financial model framework by John Adib (MrAdib), a two-time founder who raised $1M as a CEO. Nine sheets, each answering one investor question, built bottom-up from one assumptions sheet. Use it to build, tidy or review an early-stage model.",
	how: [
		"- Build the nine sheets in this order. Every sheet reads its inputs from the assumptions sheet and hard-codes nothing.",
		"- Every sheet answers its question. Build in what the list says, leave out what the list says.",
		"- Bottom-up only: customers times price, roles times cost. Never a share of a market size.",
		"- Check each sheet against its pass test. Mark every estimate as an estimate, and never invent a number the founder did not give.",
	],
	skillName: "financial-model-builder",
	skillDescription:
		"Build, tidy or review an early-stage startup financial model with the MrAdib nine-sheet framework by John Adib. Use when a founder needs a model for a pre-seed or seed round, a runway check, or a diligence request.",
	skillTitle: "Financial Model Builder (the MrAdib framework)",
	role: "You help a founder build a bottom-up financial model that an investor can open, click into and question. Follow the framework below.",
	workflow: [
		"1. Ask for the inputs: prices and plans, channels with reach and conversion, churn, the hiring plan with salaries and start months, operating costs, cost of sales, opening cash and the raise. Never invent any of them.",
		"2. Build one sheet at a time, in order: the rows, the formula for each in words, and the assumption it reads.",
		"3. Check every sheet against its pass test and fix it before moving on.",
		"4. Apply a model rule only when its condition is true.",
		"5. Finish with the runway in months, the zero-cash date, and the one assumption that moves runway the most.",
	],
};

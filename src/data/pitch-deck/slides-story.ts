import type { IGuideStep } from "@/data/guides/guide-interface";
import type { PitchSlideId } from "./slide-id";

// Slides 1 to 4: what the company is, and the problem it exists for.
export const slidesStory: IGuideStep<PitchSlideId>[] = [
	{
		id: "cover",
		title: "Cover",
		question: "What is this company?",
		definition:
			"The first thing an investor reads. Within seconds they should know the company name and what it does, in words a stranger would use.",
		include: [
			"Company name and logo",
			"One plain sentence: what you do, and for whom",
			"A product visual, if you have one",
			"Founder name and contact details",
		],
		avoid: [
			"A slogan that fits any company",
			"An agenda slide",
			"A wall of logos or a paragraph of text",
		],
		test: "A stranger reads only this slide and can tell a friend what you do.",
	},
	{
		id: "vision",
		title: "Vision",
		question: "What does this become if it works?",
		definition:
			"The ambition one level above the first product. It tells an investor the opportunity is bigger than what ships this year. Sequoia opens its outline the same way: the company in one declarative sentence.",
		include: [
			"One strong vision sentence",
			"The future state you want to create",
			"One image or line that makes that future tangible",
		],
		avoid: [
			"A list of features",
			"Three vision statements",
			"Buzzwords with no picture behind them",
		],
		test: "Bigger than the solution on slide 5, and still believable.",
	},
	{
		id: "problem",
		title: "Problem",
		question: "What painful problem exists today?",
		definition:
			"The pain you are solving, on its own, before any product appears. If the investor does not feel the problem, nothing after this slide lands.",
		include: [
			"The core problem in one sentence",
			"How severe it is, and how often it happens",
			"How people cope today, and where that breaks",
			"Evidence: data, quotes, or what you saw yourself",
		],
		avoid: [
			"Introducing the product early",
			"A problem nobody pays to solve",
			"Ten problems on one slide. Pick one.",
		],
		test: "The investor nods before they see a single screen.",
	},
	{
		id: "customers",
		title: "Customers",
		question: "Who has this problem?",
		definition:
			"Exactly who you serve, and who pays. Marketplaces and B2B2C products have more than one group, so name each one before the solution appears.",
		include: [
			"The primary customer, described so you could find them tomorrow",
			"Other groups: the buyer and the user, both sides of a marketplace",
			"Who pays and who uses, when they differ",
			"The one need that matters most to each group",
		],
		avoid: [
			"“Everyone” or “SMEs”",
			"Demographics with no job to be done",
			"Mixing the first customer with the long-term market",
		],
		test: "You can name ten real people or companies that match the description.",
	},
];

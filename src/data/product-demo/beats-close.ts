import type { IGuideStep } from "@/data/guides/guide-interface";
import type { ProductDemoBeatId } from "./step-id";

// Beats 4 to 6: the payoff, the proof it is real, and what happens next.
export const beatsClose: IGuideStep<ProductDemoBeatId>[] = [
	{
		id: "magic",
		title: "Magic moment",
		question: "Where does the product prove itself?",
		definition:
			"The result. The report generated, the deal matched, the hours saved, on screen and quantified. Slow down here. This is the moment the viewer remembers and the reason the flow existed.",
		include: [
			"The output, on screen, in full",
			"The number: how much faster, cheaper or better than the state before",
			"A beat of silence for the viewer to see it",
		],
		avoid: [
			"Cutting away before the result appears",
			"Explaining the result instead of showing it",
			"A second flow before the first has landed",
		],
		test: "Pause the video here and the screen alone makes the case.",
	},
	{
		id: "proof",
		title: "Proof",
		question: "Is this real, and is it used?",
		definition:
			"Evidence that this is a working product with real users, not a prototype. A live URL, usage numbers, a customer name, all dated.",
		include: [
			"The live URL or the app store listing, on screen",
			"Usage in one line: customers, weekly actives or revenue, with the date",
			"What is built versus what is coming, said plainly",
		],
		avoid: [
			"Mockups presented as product",
			"Numbers without dates",
			"Roadmap slides",
		],
		test: "The viewer knows what exists today and what does not.",
	},
	{
		id: "close",
		title: "Close",
		question: "What is next, and how do I try it?",
		definition:
			"Ten seconds. What ships next, and where the viewer can try it themselves. End on the product, not on a slide.",
		include: [
			"The next milestone, dated",
			"Where to try it: the URL, an invite, a sandbox",
			"Your name and contact, spoken once",
		],
		avoid: [
			"A thank-you slide",
			"A recap of everything you showed",
			"Music or an outro animation",
		],
		test: "The viewer can open the product the moment the video ends.",
		example:
			"Try it at app.example.com with the code DEMO. The mobile app ships next month. I am Sara, sara@example.com.",
	},
];

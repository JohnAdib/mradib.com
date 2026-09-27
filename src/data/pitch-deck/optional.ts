import type { IGuideOptional } from "@/data/guides/guide-interface";

// Slides that earn a place only when the business calls for them.
export const optionalSlides: IGuideOptional[] = [
	{
		title: "Product demo",
		when: "The product is visual and one screen says more than a paragraph.",
	},
	{
		title: "Why now",
		when: "Timing is the story. See the reorder rules.",
	},
	{
		title: "Financial plan",
		when: "You have revenue and a model an investor can check.",
	},
	{
		title: "Roadmap",
		when: "The next 18 months have clear, dated milestones.",
	},
	{
		title: "Appendix",
		when: "Detail an investor may ask for: unit economics, pipeline, architecture.",
	},
];

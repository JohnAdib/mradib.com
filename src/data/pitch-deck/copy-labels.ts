import type {
	IGuidePresenterLabels,
	IGuideStepLabels,
} from "@/data/guides/guide-interface";

// Labels shared by every slide, the rule cards, and the AI files.
export const slideLabels: IGuideStepLabels = {
	unit: "Slide",
	plural: "Slides",
	of: "of",
	include: "Put on it",
	avoid: "Leave off",
	test: "Pass test",
	example: "Example",
	note: "Reorder rule",
	when: "When",
	action: "Move",
	tags: "Asked by",
};

// Labels for the presenter (stage and bar).
export const presenterLabels: IGuidePresenterLabels = {
	unit: "Slide",
	of: "of",
	previous: "Previous slide",
	next: "Next slide",
	all: "All 12 slides",
};

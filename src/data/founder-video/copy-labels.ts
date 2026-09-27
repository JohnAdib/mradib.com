import type {
	IGuidePresenterLabels,
	IGuideStepLabels,
} from "@/data/guides/guide-interface";

// Labels shared by every beat, the rule cards, and the AI files.
export const founderVideoStepLabels: IGuideStepLabels = {
	unit: "Beat",
	plural: "Beats",
	of: "of",
	include: "Say",
	avoid: "Leave out",
	test: "Pass test",
	example: "Example",
	note: "Setup rule",
	when: "When",
	action: "Change",
	tags: "Asked by",
};

// Labels for the presenter (stage and bar).
export const founderVideoPresenterLabels: IGuidePresenterLabels = {
	unit: "Beat",
	of: "of",
	previous: "Previous beat",
	next: "Next beat",
	all: "All 6 beats",
};

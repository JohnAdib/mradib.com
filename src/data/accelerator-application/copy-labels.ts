import type {
	IGuidePresenterLabels,
	IGuideStepLabels,
} from "@/data/guides/guide-interface";

// Labels shared by every answer, the rule cards, and the AI files.
export const acceleratorApplicationStepLabels: IGuideStepLabels = {
	unit: "Answer",
	plural: "Answers",
	of: "of",
	include: "Say",
	avoid: "Leave out",
	test: "Pass test",
	example: "Example",
	note: "Case rule",
	when: "When",
	action: "Change",
	tags: "Asked by",
};

// Labels for the presenter (stage and bar).
export const acceleratorApplicationPresenterLabels: IGuidePresenterLabels = {
	unit: "Answer",
	of: "of",
	previous: "Previous answer",
	next: "Next answer",
	all: "All 10 answers",
};

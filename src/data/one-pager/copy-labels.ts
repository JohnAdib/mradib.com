import type {
	IGuidePresenterLabels,
	IGuideStepLabels,
} from "@/data/guides/guide-interface";

// Labels shared by every block, the rule cards, and the AI files.
export const onePagerStepLabels: IGuideStepLabels = {
	unit: "Block",
	plural: "Blocks",
	of: "of",
	include: "Put in it",
	avoid: "Leave out",
	test: "Pass test",
	example: "Example",
	note: "Layout rule",
	when: "When",
	action: "Change",
	tags: "Asked by",
};

// Labels for the presenter (stage and bar).
export const onePagerPresenterLabels: IGuidePresenterLabels = {
	unit: "Block",
	of: "of",
	previous: "Previous block",
	next: "Next block",
	all: "All 9 blocks",
};

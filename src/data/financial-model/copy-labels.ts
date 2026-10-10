import type {
	IGuidePresenterLabels,
	IGuideStepLabels,
} from "@/data/guides/guide-interface";

// Labels shared by every sheet, the rule cards, and the AI files.
export const financialModelStepLabels: IGuideStepLabels = {
	unit: "Sheet",
	plural: "Sheets",
	of: "of",
	include: "Build in",
	avoid: "Leave out",
	test: "Pass test",
	example: "Example",
	note: "Model rule",
	when: "When",
	action: "Change",
	tags: "Asked by",
};

// Labels for the presenter (stage and bar).
export const financialModelPresenterLabels: IGuidePresenterLabels = {
	unit: "Sheet",
	of: "of",
	previous: "Previous sheet",
	next: "Next sheet",
	all: "All 9 sheets",
};

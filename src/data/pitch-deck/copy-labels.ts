// Labels shared by every slide and by the presenter (stage and bar).
export const slideLabels = {
	slide: "Slide",
	of: "of",
	include: "Put on it",
	avoid: "Leave off",
	test: "Pass test",
	example: "Example",
	note: "Reorder rule",
};

export type ISlideLabels = typeof slideLabels;

export const presenterLabels = {
	slide: "Slide",
	of: "of",
	previous: "Previous slide",
	next: "Next slide",
	all: "All 12 slides",
};

export type IPresenterLabels = typeof presenterLabels;

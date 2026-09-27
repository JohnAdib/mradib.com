import type { IGuideHeading } from "./guide-interface";

// The kit as every guide page shows it: the hero position line and the
// section near the end that lists all six.
export const kitCopy = {
	name: "Fundraising kit",
	/** "Fundraising kit, guide 2 of 6" */
	guide: "guide",
	of: "of",
	/** The closing panel's second button when a guide has a next one. */
	next: "Next guide",
	heading: {
		eyebrow: "The fundraising kit",
		title: "Six guides, one set of facts",
		intro:
			"The whole kit, in the order you build it. Every piece draws on the same facts, so none of them contradicts another.",
	} satisfies IGuideHeading,
};

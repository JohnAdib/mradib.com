import type { IPageClosing } from "@/data/page-closings";

// The closing panel. Rendered by CtaOnDarkPanel. Max two CTAs, always.
export const deckClosing: IPageClosing = {
	title: "The deck opens the door.",
	desc: "Twelve answers get you the meeting. The story you tell in the room does the rest. Questions about your deck? Say hello.",
	linkPrimaryText: "Get in touch",
	linkPrimaryLink: "/contact",
	linkSecondaryText: "Build a resume that gets read",
	linkSecondaryLink: "/resume",
};

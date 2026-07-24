import { BOOKING_URL } from "@/data/audit";

export interface IPageClosing {
	title: string;
	desc: string;
	linkPrimaryText: string;
	linkPrimaryLink: string;
	linkSecondaryText?: string;
	linkSecondaryLink?: string;
}

// One closing panel per page so every page ends with a path deeper.
// Rendered by CtaOnDarkPanel. Max two CTAs, always.
export const pageClosings: Record<string, IPageClosing> = {
	about: {
		title: "The story continues.",
		desc: "If any part of this story sounds like a conversation you want to have, say hello.",
		linkPrimaryText: "Get in touch",
		linkPrimaryLink: "/contact",
	},
	awards: {
		title: "The awards are the footnotes.",
		desc: "The story is the product: a keyboard in a hardware shop, two companies, a restart in London, and the world's stage. Read it end to end.",
		linkPrimaryText: "Read the story",
		linkPrimaryLink: "/about",
		linkSecondaryText: "See the talks",
		linkSecondaryLink: "/talks",
	},
	talks: {
		title: "Bring these talks to your event.",
		desc: "Founding companies, AI-first development, and the leadership that holds a team together. London based, happy to travel.",
		linkPrimaryText: "Invite me to speak",
		linkPrimaryLink: "/contact",
		linkSecondaryText: "Book a mentorship session",
		linkSecondaryLink: "/mentor",
	},
	audit: {
		title: "Find out where you stand.",
		desc: "A 20-minute call. Bring your questions, leave knowing whether the audit fits.",
		linkPrimaryText: "Book a 20-minute intro call",
		linkPrimaryLink: BOOKING_URL,
	},
	articles: {
		title: "The thinking continues on stage.",
		desc: "Two articles down, more on the way. Six talks and a podcast carry the rest of the thinking.",
		linkPrimaryText: "See the talks",
		linkPrimaryLink: "/talks",
		linkSecondaryText: "Get in touch",
		linkSecondaryLink: "/contact",
	},
};

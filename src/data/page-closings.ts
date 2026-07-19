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
		desc: "None of the chapters were planned, and the next one is already in motion. If any part of this story sounds like a conversation you want to have, say hello.",
		linkPrimaryText: "Get in touch",
		linkPrimaryLink: "/contact",
	},
	awards: {
		title: "See the work behind the awards.",
		desc: "Awards are the paper trail. The real work is in the sessions and the talks. Book time with me, or see what I have been speaking about.",
		linkPrimaryText: "Book a mentorship session",
		linkPrimaryLink: "/mentor",
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
	articles: {
		title: "The thinking continues on stage.",
		desc: "Two articles down, more on the way. Six talks and a podcast carry the rest of the thinking.",
		linkPrimaryText: "See the talks",
		linkPrimaryLink: "/talks",
		linkSecondaryText: "Get in touch",
		linkSecondaryLink: "/contact",
	},
};

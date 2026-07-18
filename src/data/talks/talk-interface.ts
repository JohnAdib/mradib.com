export type TalkFormat = "talk" | "workshop" | "panel";

export type TalkResourceKind =
	| "slides"
	| "event"
	| "recording"
	| "youtube"
	| "website"
	| "provider";

/** A single external link shown on a talk page. */
export interface ITalkResource {
	kind: TalkResourceKind;
	label: string;
	url: string;
}

export interface ITalk {
	/** Short id, used for React keys and getTalk. Not the URL. */
	slug: string;
	/** Root URL of this talk's own page. Omit for an entry with no page, e.g. a panel. */
	path?: string;
	title: string;
	/** Defaults to a talk when unset. */
	format?: TalkFormat;
	/** Event or series name, e.g. "AI Coding Summit 2025". */
	event: string;
	/** Community or company that ran it. Drives the logo, e.g. "GitNation". */
	organizer: string;
	/** Company that hosted the venue, e.g. "NewDay", "Figma". */
	host?: string;
	venue?: string;
	city: string;
	/** ISO date (YYYY-MM-DD) the talk was given. */
	date: string;
	audience?: string;
	summary: string;
	/** Organizer logo under /talks/logos. Falls back to a monogram when unset. */
	logo?: string;
	/** Representative cover photo, e.g. the deck's first slide. Path under /talks/covers. */
	image?: string;
	/** Ambient background video behind the hero header. Always muted and looped. Path under /talks. */
	video?: string;
	slidesPdf?: string;
	/** The specific event page. */
	eventUrl?: string;
	/** The provider's reference for the talk, e.g. a GitNation profile. */
	providerUrl?: string;
	/** The talk's own website. */
	websiteUrl?: string;
	recordingUrl?: string;
	youtubeUrl?: string;
	keywords: string[];
}

export interface IPodcastAppearance {
	show: string;
	title: string;
	url: string;
	duration: string;
	summary: string;
}

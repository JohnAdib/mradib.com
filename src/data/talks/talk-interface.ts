export interface ITalk {
	slug: string;
	title: string;
	event: string;
	venue?: string;
	city: string;
	/** ISO date (YYYY-MM-DD) the talk was given */
	date: string;
	audience?: string;
	summary: string;
	slidesPdf?: string;
	recordingUrl?: string;
	/** Companion article on this site */
	articlePath?: string;
	keywords: string[];
}

export interface IPodcastAppearance {
	show: string;
	title: string;
	url: string;
	duration: string;
	summary: string;
}

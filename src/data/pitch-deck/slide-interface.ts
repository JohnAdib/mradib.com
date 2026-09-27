// Types for the pitch deck guide (/pitch-deck). Every string the page renders
// lives in src/data/pitch-deck; components stay presentational and import
// from the barrel.

/** One-word anchors, the same ids on the page, in llms.txt, and in the skill. */
export type PitchSlideId =
	| "cover"
	| "vision"
	| "problem"
	| "customers"
	| "solution"
	| "market"
	| "competition"
	| "distribution"
	| "traction"
	| "model"
	| "team"
	| "ask";

export interface IPitchSlide {
	id: PitchSlideId;
	title: string;
	/** The one investor question this slide must answer. */
	question: string;
	/** What we mean by this slide, in plain words. */
	definition: string;
	/** Put on it. */
	include: string[];
	/** Leave off. */
	avoid: string[];
	/** One sentence a founder can check the finished slide against. */
	test: string;
	/** One concrete line, when an example says it faster than a rule. */
	example?: string;
}

export interface IReorderRule {
	slideId: PitchSlideId;
	title: string;
	when: string;
	move: string;
}

export interface IOptionalSlide {
	title: string;
	when: string;
}

export interface IPitchReference {
	title: string;
	source: string;
	url: string;
}

export interface IDeckHeading {
	eyebrow: string;
	title: string;
	intro?: string;
}

export interface IDeckAiFile {
	path: string;
	description: string;
}

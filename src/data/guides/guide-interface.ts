// Shared types for the guides in the fundraising kit. A guide is an ordered
// list of steps (slides, blocks, beats, sheets, answers), each answering one
// question, plus the rules that bend the default and the optional extras.
// Every string a guide renders lives in its src/data folder; components stay
// presentational and receive the guide.

/** The icon a rule card shows. Mapped to heroicons in rule-icon.tsx. */
export type GuideRuleIcon =
	| "trend"
	| "team"
	| "clock"
	| "mail"
	| "video"
	| "users"
	| "stage"
	| "user"
	| "globe"
	| "chat"
	| "flag"
	| "cloud"
	| "shop"
	| "cube"
	| "refresh"
	| "map";

export interface IGuideStep<TId extends string = string> {
	/** One-word anchor, unique on the page, the same id in llms.txt and the skill. */
	id: TId;
	title: string;
	/** The one question this step must answer. */
	question: string;
	/** What we mean by this step, in plain words. */
	definition: string;
	include: string[];
	avoid: string[];
	/** One sentence a founder can check the finished step against. */
	test: string;
	/** One concrete line, when an example says it faster than a rule. */
	example?: string;
	/** Who asks this question, rendered as chips under it. */
	tags?: string[];
}

/** The part of a step the presenter needs: never the full text. */
export type IGuideStepRef = Pick<IGuideStep, "id" | "title" | "question">;

export interface IGuideRule<TId extends string = string> {
	/** The step this rule bends, when it is about one step. */
	stepId?: TId;
	icon: GuideRuleIcon;
	title: string;
	when: string;
	action: string;
}

export interface IGuideOptional {
	title: string;
	when: string;
	/** A guide of its own, when one exists. */
	href?: string;
}

export interface IGuideReference {
	title: string;
	source: string;
	url: string;
}

export interface IGuideHeading {
	eyebrow: string;
	title: string;
	intro?: string;
}

/** Labels shared by every step, the rule cards and the AI files. */
export interface IGuideStepLabels {
	unit: string;
	plural: string;
	of: string;
	include: string;
	avoid: string;
	test: string;
	example: string;
	note: string;
	when: string;
	action: string;
	tags: string;
}

export interface IGuidePresenterLabels {
	unit: string;
	of: string;
	previous: string;
	next: string;
	all: string;
}

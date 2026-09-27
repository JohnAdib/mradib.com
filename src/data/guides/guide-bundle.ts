import type { IFaqQA } from "@/components/faq/faq-interface";
import type { IArticle } from "@/data/articles/article-interface";
import type { IPageClosing } from "@/data/page-closings";
import type {
	IGuideHeading,
	IGuideOptional,
	IGuidePresenterLabels,
	IGuideReference,
	IGuideRule,
	IGuideStep,
	IGuideStepLabels,
} from "./guide-interface";

/** The shape of the presenter stage: the artifact the guide is about. */
export type GuideFrame =
	| "slide"
	| "page"
	| "screen"
	| "video"
	| "sheet"
	| "form";

/** One-word section anchors. Steps and rules get a word per guide. */
export interface IGuideAnchors {
	overview: string;
	steps: string;
	rules: string;
	ai: string;
	references: string;
	faq: string;
	kit: string;
}

export interface IGuideHero {
	eyebrow: string;
	titleLead: string;
	/** Set in italic accent, followed by a full stop. */
	titleAccent: string;
	thesis: string;
	rules: string[];
	ctaLabel: string;
	ctaAnchor: keyof IGuideAnchors;
}

export type IGuideHeadings = Record<
	"overview" | "steps" | "rules" | "ai" | "references",
	IGuideHeading
>;

export interface IGuideAi {
	/** What each AI file is, on its card. The paths derive from the article path. */
	fileNotes: { llms: string; skill: string };
	promptIntro: string;
	prompt: string;
}

/** The prose of the AI files: llms.txt and the portable skill. */
export interface IGuideAiText {
	title: string;
	summary: string;
	how: string[];
	skillName: string;
	skillDescription: string;
	skillTitle: string;
	role: string;
	workflow: string[];
}

/** Everything one guide page renders, assembled in its data folder's index. */
export interface IGuide {
	/** Short name for breadcrumbs and the kit: "Pitch deck". */
	name: string;
	frame: GuideFrame;
	article: IArticle;
	anchors: IGuideAnchors;
	hero: IGuideHero;
	headings: IGuideHeadings;
	optionalTitle: string;
	stepLabels: IGuideStepLabels;
	presenterLabels: IGuidePresenterLabels;
	steps: IGuideStep[];
	rules: IGuideRule[];
	optional: IGuideOptional[];
	ai: IGuideAi;
	aiText: IGuideAiText;
	faqTitle: string;
	faq: IFaqQA[];
	references: IGuideReference[];
	howTo: { name: string; description: string };
	closing: IPageClosing;
}

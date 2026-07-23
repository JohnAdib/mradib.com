// Types for the AI Engineering Readiness Audit landing page (/audit).
// Every string the page renders lives in src/data/audit; components stay
// presentational and import from the barrel.

export interface IAuditSectionHeading {
	eyebrow: string;
	title: string;
	intro?: string;
}

export interface IAuditHero {
	headline: string;
	headlineAccent: string;
	subhead: string;
	ctaPrimaryLabel: string;
	ctaSecondaryLabel: string;
	ctaSecondaryHref: string;
}

export interface IAuditProblem {
	eyebrow: string;
	pains: string[];
	closer: string;
	closerAccent: string;
}

export interface IAuditDeliverable {
	slug: "scorecard" | "report" | "roadmap" | "readout";
	title: string;
	description: string;
}

export interface IAuditDimension {
	name: string;
	blurb: string;
}

export interface IAuditStep {
	title: string;
	detail: string;
}

export interface IAuditWeek {
	label: string;
	title: string;
	steps: IAuditStep[];
}

export interface IAuditFact {
	slug: "time" | "repo";
	title: string;
	description: string;
}

export interface IAuditStatSpec {
	slug: "years" | "sessions" | "europe" | "businesses";
	value?: string;
	label: string;
}

export interface IAuditProduct {
	name: string;
	url?: string;
	description: string;
}

export interface IAuditProof {
	heading: IAuditSectionHeading;
	playbookLine: string;
	stats: IAuditStatSpec[];
	talksTitle: string;
	talkSlugs: string[];
	productsTitle: string;
	products: IAuditProduct[];
}

export interface IAuditFitList {
	title: string;
	items: string[];
}

export interface IAuditPricing {
	foundingPriceGBP: number;
	foundingPriceDisplay: string;
	standardPriceGBP: number;
	standardPriceDisplay: string;
	slotsTotal: number;
	slotsRemaining: number;
	foundingCopy: string;
	slotsLine: string;
}

export interface IAuditPrice {
	gbp: number;
	display: string;
	founding: boolean;
}

export interface IAuditOffer {
	name: string;
	priceNote: string;
	buyer: string;
	teamSize: string;
	included: string[];
	guarantee: string;
	paperworkLine: string;
	addOnsLine: string;
}

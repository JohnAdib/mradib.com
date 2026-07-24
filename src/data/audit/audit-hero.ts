import type { IAuditHero, IAuditProblem } from "./audit-interface";

export const auditHero: IAuditHero = {
	headline: "AI agents are writing your code.",
	headlineAccent: "Do you know what it's costing you?",
	// Alternate headlines, kept for later testing:
	// B: "Adopt AI coding agents without the quality collapse."
	// C: "Find out if your engineering org is AI-ready. In two weeks."
	subhead:
		"A fixed-price, two-week audit for CTOs and VPs of Engineering. You get a scored readiness assessment, the evidence behind it, and a 90-day roadmap. Fully remote. No repo access required.",
	ctaPrimaryLabel: "Book a 20-minute intro call",
	ctaSecondaryLabel: "See what's in the audit",
	ctaSecondaryHref: "#whats-inside",
};

export const auditProblem: IAuditProblem = {
	eyebrow: "The problem",
	pains: [
		"Velocity is up, but comprehension is down.",
		"Reviews are rubber-stamping AI-generated code.",
		"Nobody truly owns the modules AI wrote.",
		"Incidents take longer because nobody understands the code that broke.",
	],
	closer: "You don't have a tooling problem.",
	closerAccent: "You have a guardrails problem.",
};

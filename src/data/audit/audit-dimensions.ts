import type { IAuditDimension, IAuditSectionHeading } from "./audit-interface";

export const auditDimensionsHeading: IAuditSectionHeading = {
	eyebrow: "The scorecard",
	title: "The seven dimensions I score.",
	intro:
		"Every score comes from evidence: your pull requests, your CI, your incidents, and your team's own answers.",
};

// Order matters. The page renders these as numerals 01 to 07.
export const auditDimensions: IAuditDimension[] = [
	{
		name: "Guardrails and policy",
		blurb:
			"The constraints that decide what AI agents may touch, and what stops them when they push past it.",
	},
	{
		name: "Quality gates and CI",
		blurb:
			"What your pipeline actually blocks, and what sails through on green.",
	},
	{
		name: "Review and comprehension",
		blurb:
			"Whether reviews still transfer understanding, or just approve diffs.",
	},
	{
		name: "Testing and verification",
		blurb:
			"How much of the AI-written code is proven to work, rather than assumed to.",
	},
	{
		name: "Ownership and accountability",
		blurb: "Who answers for a module when no human wrote it.",
	},
	{
		name: "Incident recovery",
		blurb:
			"How fast your team recovers when the code that broke was generated.",
	},
	{
		name: "Measurement",
		blurb: "Whether you can see any of this in numbers, or only in vibes.",
	},
];

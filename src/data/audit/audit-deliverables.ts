import type {
	IAuditDeliverable,
	IAuditSectionHeading,
} from "./audit-interface";

export const auditDeliverablesHeading: IAuditSectionHeading = {
	eyebrow: "The audit",
	title: "What you get.",
	intro: "Everything is written down, scored, and yours to keep.",
};

export const auditDeliverables: IAuditDeliverable[] = [
	{
		slug: "scorecard",
		title: "The readiness scorecard",
		description:
			"Where you stand across all 7 dimensions, scored from the evidence we collect together.",
	},
	{
		slug: "report",
		title: "The written report",
		description:
			"Findings with the evidence behind each score. What we found, why it matters, nothing padded.",
	},
	{
		slug: "roadmap",
		title: "The 90-day roadmap",
		description:
			"A prioritised plan: what to fix first, what to fix next, and what to leave alone.",
	},
	{
		slug: "readout",
		title: "The executive readout",
		description:
			"60 minutes with your leadership team, remote and recorded, walking through the findings and the plan.",
	},
];

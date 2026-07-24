import type { IAuditProof } from "./audit-interface";

export const auditProof: IAuditProof = {
	heading: {
		eyebrow: "The method",
		title: "Scored by someone who runs this, not someone who read about it.",
		intro:
			"Every dimension in the scorecard is drawn from agent-heavy engineering in production: the guardrails that hold, the quality gates that catch things, and the review habits that keep code understood. The talks below set out the thinking.",
	},
	playbookLine:
		"This playbook runs in production every day, not only inside the report.",
	// Values for years and sessions are resolved from src/data at render time.
	stats: [
		{ slug: "years", label: "years in engineering" },
		{ slug: "sessions", label: "mentoring sessions on ADPList" },
		{ slug: "europe", value: "#1", label: "mentor in Europe, 2024" },
		{
			slug: "businesses",
			value: "1,200+",
			label: "businesses on Jibres, the platform I co-founded",
		},
	],
	talksTitle: "The thinking behind the audit",
	talkSlugs: ["compound-effect-guardrails", "ai-first-architecture"],
};

/*
Social proof slot, intentionally empty until the first cohort completes.
When named case studies exist, render them here between the playbook line
and the talk cards: either one short excerpt with name and role, or a
mosaic of short verbatim fragments with collective attribution, per
docs/advisor/voice.md. No logos, no colleague photos, no invented quotes.
*/

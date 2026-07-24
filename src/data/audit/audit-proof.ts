import type { IAuditProof } from "./audit-interface";

export const auditProof: IAuditProof = {
	heading: {
		eyebrow: "Why me",
		title: "Audited by someone who runs it, not someone who read about it.",
		intro:
			"I'm John Adib, an Engineering Manager in London. I run an agent-heavy engineering team at a London scale-up, and I ship my own products on weekends with the same AI-assisted workflows.",
	},
	playbookLine:
		"I run this playbook every day, at my day job and on my own products.",
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
	talksTitle: "The talks behind the method",
	talkSlugs: ["compound-effect-guardrails", "ai-first-architecture"],
	productsTitle: "Built with the workflows I audit",
	products: [
		{
			name: "CoolMate",
			url: "https://yocoolmate.com",
			description:
				"A live language-learning app, built and shipped on weekends with AI-assisted workflows.",
		},
		{
			name: "Florin",
			description: "A local-first point of sale, built the same way.",
		},
	],
};

/*
Social proof slot, intentionally empty until the first cohort completes.
When named case studies exist, render them here between the playbook line
and the talk cards: either one short excerpt with name and role, or a
mosaic of short verbatim fragments with collective attribution, per
docs/advisor/voice.md. No logos, no colleague photos, no invented quotes.
*/

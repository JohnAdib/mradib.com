import type { IFaqQA } from "@/components/faq/faq-interface";

export const auditFaqTitle = "Questions, answered";

export const auditFaq: IFaqQA[] = [
	{
		id: "repo-access",
		q: "Do you need access to our codebase?",
		a: "No. By default your engineers drive every screen-share session and I never touch the repository. If you prefer, read-only access can be arranged under NDA.",
	},
	{
		id: "remote",
		q: "How does it work remotely?",
		a: "Everything runs over video calls plus one short async survey. Week 1 is interviews and screen shares, week 2 is scoring, the report, and the readout. The readout is recorded so your whole leadership team can watch it.",
	},
	{
		id: "who-conducts",
		q: "Who conducts the audit?",
		a: "I do, personally. Every interview, every screen share, every score. I run an agent-heavy engineering team at a London scale-up, so the audit is run by someone who does this daily, not a junior with a checklist.",
	},
	{
		id: "team-time",
		q: "How much of my team's time does it take?",
		a: "About 10 hours in total across the two weeks. That covers 5 to 8 one-hour interviews, a short survey, and 2 to 3 screen-share sessions.",
	},
	{
		id: "paperwork",
		q: "What paperwork is involved?",
		a: "A mutual NDA and a one-page SOW, both e-signed. Payment is 50% on booking and 50% on delivery.",
	},
	{
		id: "after",
		q: "What happens after the audit?",
		a: "You have the scorecard, the report, and a prioritised 90-day roadmap, so your team can execute without me. If you want help executing it, that's a conversation for the readout.",
	},
	{
		id: "booking",
		q: "How do I book it?",
		a: "Start with the intro call. If we're a fit, you'll receive a mutual NDA and a one-page SOW to e-sign, then an invoice for 50% to reserve your start date. The remaining 50% is due on delivery of the report.",
	},
	{
		id: "guarantee",
		q: "What if it isn't useful?",
		a: "Then you shouldn't pay for it. Tell me within 7 days of the readout and I'll refund the fee in full, no questions. You keep the report.",
	},
];

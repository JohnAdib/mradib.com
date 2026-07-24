import type {
	IAuditFact,
	IAuditSectionHeading,
	IAuditWeek,
} from "./audit-interface";

export const auditProcessHeading: IAuditSectionHeading = {
	eyebrow: "How it works",
	title: "Two weeks, start to readout.",
};

export const auditWeeks: IAuditWeek[] = [
	{
		label: "Week 1",
		title: "Evidence",
		steps: [
			{
				title: "Kickoff call",
				detail:
					"We agree scope, schedule the sessions, and send the survey out.",
			},
			{
				title: "3 to 5 working sessions",
				detail:
					"One hour each with you, your EMs, and your senior ICs. Two to three of them are screen shares where your engineers drive: recent AI-assisted PRs, CI configuration, review practice, and the last incident.",
			},
			{
				title: "Team survey",
				detail:
					"A short async survey to the wider engineering team. Minutes to answer, not hours.",
			},
		],
	},
	{
		label: "Week 2",
		title: "Judgement",
		steps: [
			{
				title: "Synthesis and scoring",
				detail: "I turn the evidence into scores across the 7 dimensions.",
			},
			{
				title: "Report writing",
				detail:
					"Findings, evidence, and the 90-day roadmap, written for your leadership team.",
			},
			{
				title: "Executive readout",
				detail:
					"60 minutes, remote and recorded. You leave knowing where you stand and what to do next.",
			},
		],
	},
];

export const auditFacts: IAuditFact[] = [
	{
		slug: "time",
		title: "About 6 hours of your team's time",
		description:
			"The total cost across both weeks, spread over the kickoff, the working sessions, and a short survey.",
	},
	{
		slug: "repo",
		title: "No repo access required",
		description:
			"Your engineers drive every screen share. Read-only access is optional under NDA if you prefer it.",
	},
];

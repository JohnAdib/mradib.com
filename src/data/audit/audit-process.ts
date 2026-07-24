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
				title: "5 to 8 interviews",
				detail: "One hour each with you, your EMs, and your senior ICs.",
			},
			{
				title: "Team survey",
				detail:
					"A short async survey to the wider engineering team. Minutes to answer, not hours.",
			},
			{
				title: "2 to 3 screen-share sessions",
				detail:
					"Your engineers drive: recent AI-assisted PRs, CI configuration, review practice, and the last incident.",
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
		title: "About 10 hours of your team's time",
		description:
			"The total cost across both weeks, spread over the interviews, the survey, and the screen shares.",
	},
	{
		slug: "repo",
		title: "No repo access required",
		description:
			"Your engineers drive every screen share. Read-only access is optional under NDA if you prefer it.",
	},
];

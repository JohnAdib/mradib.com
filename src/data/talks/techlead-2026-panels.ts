import type { ITalk } from "./talk-interface";

const event = {
	format: "panel",
	status: "upcoming",
	event: "TechLead Conf London 2026",
	organizer: "TechLead Conf",
	logo: "/talks/logos/techlead-conf.avif",
	venue: "The Brewery",
	city: "London",
	date: "2026-10-23",
	eventUrl: "https://techleadconf.com/schedule-offline",
} satisfies Partial<ITalk>;

export const techlead2026Panels: ITalk[] = [
	{
		...event,
		slug: "techlead-2026-ai-native-juniors",
		title: "Skipping the Struggle: Can AI-Native Juniors Become Seniors?",
		role: "moderator-panelist",
		summary:
			"John Adib moderates and joins a panel on how AI-native junior engineers develop the experience needed to become seniors.",
		keywords: ["AI", "Engineering careers", "Mentoring"],
	},
	{
		...event,
		slug: "techlead-2026-ai-era-hiring",
		title: "AI-Era Hiring: What Skills Last?",
		role: "panelist",
		summary:
			"John Adib joins a panel on the engineering skills that endure as AI changes hiring.",
		keywords: ["AI", "Hiring", "Engineering leadership"],
	},
	{
		...event,
		slug: "techlead-2026-agent-impact",
		title: "Measuring AI/Agent Impact: KPIs, ROI, Real Productivity",
		role: "panelist",
		summary:
			"John Adib joins a panel on measuring AI and agent impact, from KPIs and ROI to real engineering productivity.",
		keywords: ["AI agents", "Productivity", "Engineering leadership"],
	},
];

import type { ITalk } from "./talk-interface";
import { techlead2026Panels } from "./techlead-2026-panels";

const event = techlead2026Panels[0];
export const techlead2026Talk: ITalk = {
	...event,
	slug: "techlead-conf-london-2026",
	path: "/techlead-conf-london-2026",
	title: "Hands-on Engineering Leadership in the AI Era",
	subtitle: "Three panels at TechLead Conf London 2026",
	role: "moderator-panelist",
	summary:
		"John Adib returns to TechLead Conf London on 23 October 2026 for three panels on AI-era hiring, junior engineers and measuring AI impact.",
	description: [
		"I’m returning to TechLead Conf for the second time, this year as a panelist across three discussions and moderator of the panel on AI-native junior engineers.",
		"The 2026 edition centres on hands-on AI adoption across the software development lifecycle, from discovery to production. My three panels focus on the people and decisions behind that transition: how engineers develop experience, which skills matter when hiring, and how teams measure the impact of AI.",
	],
	keywords: [
		"AI adoption",
		"Engineering leadership",
		"Hiring",
		"Engineering careers",
		"AI productivity",
	],
};

export const techlead2026Panelists: Record<string, string[]> = {
	"techlead-2026-ai-native-juniors": [
		"Bogdana-Elena Avadanei",
		"Dmitry Kmita",
		"Semih Sezer",
	],
	"techlead-2026-ai-era-hiring": [
		"Bogdana-Elena Avadanei",
		"Valerii Iatsko",
		"Nihan Bircan",
		"David Saidon",
		"Rahul Kumar",
		"Drishti Agarwal",
		"Muhammad Shuaib Anjum",
		"Tom Kadwill",
	],
	"techlead-2026-agent-impact": [
		"Kseniia Korostelova",
		"Valerii Iatsko",
		"Dmitry Kmita",
		"Tom Kadwill",
		"Gergana Ivanova",
	],
};

export interface ICareerEntry {
	org: string;
	role: string;
	/** Human readable span, always "start to end" (or "to present"). */
	period: string;
	facts: string[];
	/** True for the current employer; the renderer links it via profile.company. */
	current?: boolean;
}

// Verified from docs/profile/experience.md. Numbers are load bearing: keep
// $1M, one million users first month, 1,200+ businesses, 500k+ students,
// 2,000+ students. Never add a fact that is not already published, and never
// name a country or city here.
export const career: ICareerEntry[] = [
	{
		org: "Zapp",
		role: "Engineering Manager",
		period: "December 2024 to present",
		current: true,
		facts: [
			"Joined as Senior Software Engineer in December 2024, Engineering Manager since April 2026.",
			"AI-first leadership: AI reviewers on every pull request, AI agents and skills woven through the workflow, app releases accelerated from monthly to weekly.",
		],
	},
	{
		org: "Sarshomar",
		role: "Co-Founder and CEO",
		period: "2015 to 2017",
		facts: ["Raised $1M and reached one million users in its first month."],
	},
	{
		org: "Jibres",
		role: "Co-Founder and CTO",
		period: "2019 to 2022",
		facts: ["An e-commerce platform serving 1,200+ businesses."],
	},
	{
		org: "Ermile",
		role: "Head of Engineering",
		period: "2018 to 2019",
		facts: ["An education platform serving 500k+ students."],
	},
	{
		org: "Universities and colleges",
		role: "IT lecturer",
		period: "2006 to 2017",
		facts: [
			"Lectured IT at one of the country's biggest universities.",
			"Taught 2,000+ students across 4 universities.",
		],
	},
	{
		org: "Khadija Society",
		role: "Volunteer CTO",
		period: "2017 to 2022",
		facts: ["Volunteer CTO of the Khadija Society charity."],
	},
];

import type { IAward } from "./award-interface";

export const awards: IAward[] = [
	{
		slug: "uk-global-talent",
		name: "UK Global Talent Visa (Tech Nation Endorsement)",
		issuer: "Tech Nation",
		date: "2024-09",
		category: "flagship",
		group: "national",
		summary:
			"Endorsed as an exceptional talent in technology under the UK Global Talent visa route in September 2024.",
		externalUrl: "https://www.gov.uk/global-talent",
	},
	{
		slug: "worlds-most-influential-mentor",
		name: "The World's Most Influential Mentor",
		issuer: "ADPList",
		date: "2025-02",
		category: "flagship",
		group: "mentorship",
		summary:
			"Named in the 2026 ADPList100 for 2025 contributions, a list of 100 mentors selected from 32,000+ across 140+ countries. First recognized in the inaugural 2024 list too.",
		badgeImages: [
			"/awards/worlds-most-influential-mentor-badge.jpg",
			"/awards/worlds-most-influential-mentor-badge-2.jpg",
		],
		externalUrl: "https://adplist.org/adplist100/2026/mentor/john-adib",
		references: [
			{ label: "2024 ADPList100", url: "https://adplist.org/adplist100/2024" },
		],
	},
	{
		slug: "number-1-mentor-in-europe",
		name: "#1 Mentor in Europe",
		issuer: "ADPList",
		date: "2024-12",
		category: "flagship",
		group: "mentorship",
		summary:
			"Ranked first among ADPList's top mentors in Europe in the 2024 ADPList Wrapped.",
		badgeImages: ["/awards/number-1-mentor-in-europe-badge.jpg"],
		externalUrl:
			"https://blog.adplist.org/post/2024-adplist-wrapped-top-mentors-trends-and-topics",
	},
	{
		slug: "worldskills",
		name: "WorldSkills National Medalist",
		issuer: "WorldSkills",
		date: "2010-09",
		category: "flagship",
		group: "competition",
		summary:
			"Silver Medal in IT Software Solutions for Business (2010), Medallion for Excellence (2007), and two national team camps for WorldSkills Calgary 2009 and London 2011. He later trained medal winning competitors from 2010 to 2015.",
	},
	{
		name: "Recognized as a National Elite",
		issuer: "National Elites Foundation",
		date: "2013-01",
		category: "badge",
		group: "national",
		summary:
			"Recognized as a national elite for outstanding achievement in technology (2013).",
	},
	{
		name: "The Best Site Builder and Application Builder Service",
		issuer: "14th Iran Web Festival",
		date: "2022-03",
		category: "badge",
		group: "product",
		summary:
			"National award won by Jibres, the e-commerce platform John co-founded as CTO, at the 14th Iran Web Festival (2022).",
	},
	{
		name: "The Best Corporate & Tourism Website",
		issuer: "5th Iran Web Festival",
		date: "2013-02",
		category: "badge",
		group: "product",
		summary: "National web award at the 5th Iran Web Festival (2013).",
	},
	{
		name: "Judge, 2025 CODiE Awards",
		issuer: "CODiE Awards",
		date: "2025-01",
		category: "badge",
		group: "service",
		summary:
			"Served as a judge for the 2025 CODiE Awards, evaluating top global software products.",
	},
	{
		name: "Startup Mentor, MassChallenge Switzerland & UK",
		issuer: "MassChallenge",
		date: "2025-06",
		category: "badge",
		group: "service",
		summary:
			"Mentoring startup founders through the MassChallenge accelerator across Switzerland and the UK since June 2025.",
	},
];

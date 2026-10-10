export const conversationPage = {
	path: "/conversations",
	title: "Hosted conversations",
	intro:
		"I host live conversations with recruiters and industry specialists about hiring, engineering careers and the realities of working in tech. Guest perspectives, practical questions and a live community Q&A.",
	description:
		"John Adib hosts Tech Immigrants conversations with recruiters about tech hiring, UK startups and engineering careers. Watch recordings and join live sessions.",
};

export const conversations = [
	{
		id: "getting-hired-in-tech",
		title: "Can you still get hired in tech?",
		guest: "Joe Bignell",
		guestRole: "Recruitment and international hiring specialist",
		date: "2026-10-02",
		status: "recorded",
		youtube: "https://www.youtube.com/watch?v=zHnhGOTUwyQ",
		luma: "https://luma.com/f1hpgc87",
		summary:
			"A recruiter and a hiring manager bring two perspectives to today's tech job market.",
		topics: [
			"What recruiters and hiring managers look for",
			"How AI is reshaping hiring",
			"How candidates can stand out",
		],
	},
	{
		id: "uk-startup-hiring",
		title: "How to get hired by a UK startup?",
		guest: "Sam Baldwin",
		guestRole: "JavaScript recruiter for UK startups and scale-ups",
		date: "2026-10-16",
		status: "upcoming",
		youtube: "https://www.youtube.com/watch?v=9tEpHryZLE8",
		luma: "https://luma.com/pgzxv1x5",
		summary:
			"Strong technical skills are only part of the story. What else do startup teams look for?",
		topics: [
			"Product mindset and culture fit",
			"Communicating your experience in interviews",
			"Senior engineering and management hiring",
		],
	},
	{
		id: "engineering-rejections",
		title: "Why do good engineers get rejected?",
		guest: "Sam Barcia",
		guestRole:
			"Managing Consultant at Wave Talent and JavaScript London co-organiser",
		date: "2026-10-21",
		status: "upcoming",
		youtube: "https://www.youtube.com/watch?v=GnZ_dYrQ2NU",
		luma: "https://luma.com/199d35ca",
		summary:
			"A look at the recruiter's side of an application and why strong engineers can still miss out.",
		topics: [
			"What makes candidates stand out",
			"Common application mistakes",
			"The UK engineering job market",
		],
	},
] as const;

export type HostedConversation = (typeof conversations)[number];
export const conversationDate = (date: string) =>
	new Intl.DateTimeFormat("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
		timeZone: "Europe/London",
	}).format(new Date(`${date}T12:00:00Z`));

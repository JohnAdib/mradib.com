const techImmigrants = {
	name: "Tech Immigrants",
	youtube: "https://www.youtube.com/@TechImmigrants",
	website: "https://techimmigrants.com/",
};

export const conversations = [
	{
		community: techImmigrants,
		id: "getting-hired-in-tech",
		title: "Can you still get hired in tech?",
		guest: "Joe Bignell",
		guestLinkedin: "https://www.linkedin.com/in/joebignell/",
		guestRole: "Recruitment and international hiring specialist",
		date: "2026-10-02",
		status: "recorded",
		youtube: "https://www.youtube.com/watch?v=zHnhGOTUwyQ",
		summary:
			"A recruiter and a hiring manager bring two perspectives to today's tech job market.",
	},
	{
		community: techImmigrants,
		id: "uk-startup-hiring",
		title: "How to get hired by a UK startup?",
		guest: "Sam Baldwin",
		guestLinkedin: "https://www.linkedin.com/in/sambaldwin000/",
		guestRole: "JavaScript recruiter for UK startups and scale-ups",
		date: "2026-10-16",
		status: "upcoming",
		youtube: "https://www.youtube.com/watch?v=9tEpHryZLE8",
		summary:
			"Strong technical skills are only part of the story. What else do startup teams look for?",
	},
	{
		community: techImmigrants,
		id: "engineering-rejections",
		title: "Why do good engineers get rejected?",
		guest: "Sam Barcia",
		guestLinkedin: "https://www.linkedin.com/in/sam-barcia-wave/",
		guestRole:
			"Managing Consultant at Wave Talent and JavaScript London co-organiser",
		date: "2026-10-21",
		status: "upcoming",
		youtube: "https://www.youtube.com/watch?v=GnZ_dYrQ2NU",
		summary:
			"A look at the recruiter's side of an application and why strong engineers can still miss out.",
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

export const orderedConversations = [...conversations].sort((a, b) => {
	if (a.status !== b.status) return a.status === "upcoming" ? -1 : 1;
	return a.status === "upcoming"
		? a.date.localeCompare(b.date)
		: b.date.localeCompare(a.date);
});

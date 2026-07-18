export interface ITalkTopic {
	slug: string;
	title: string;
	description: string;
}

// Order matches how these are introduced on the talks page.
export const talkTopics: ITalkTopic[] = [
	{
		slug: "co-founding",
		title: "Co-founding",
		description:
			"Building two companies from zero, once as CEO and once as CTO.",
	},
	{
		slug: "engineering",
		title: "Engineering",
		description:
			"Architecture, guardrails, and the infrastructure decisions that keep systems fast to change.",
	},
	{
		slug: "ai",
		title: "AI",
		description: "How AI changes system design, not just individual tasks.",
	},
	{
		slug: "leadership",
		title: "Leadership and management",
		description:
			"Leading engineering teams through change, from technical debt to team culture.",
	},
];

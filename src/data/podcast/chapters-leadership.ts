import type { PodcastChapter } from "./chapter";

export const leadershipChapters: PodcastChapter[] = [
	{
		id: "management",
		title: "The evolving role of engineering managers",
		seconds: 351,
		paragraphs: [
			"As engineers take on more product responsibility, the engineering manager's role changes with them. The familiar structure of a manager overseeing a group of software engineers does not answer every question about how to lead a team of product engineers. We are bringing responsibilities together that were often treated separately.",
			"I see this as a learning process for managers, engineers, and the wider business. We have to understand where people need support, how decisions will be made, and what ownership means in practice. I spoke about this as a transition we are working through, rather than a finished model with every answer already in place.",
		],
	},
	{
		id: "hands-on",
		title: "Staying hands-on as an engineering leader",
		seconds: 776,
		paragraphs: [
			"Reading announcements and following other people's experiences only gets me so far. I need to use the tools myself. Building something reveals how to work with an agent, what context it needs, and where the process could be more efficient.",
			"I spend a lot of my weekends experimenting and building things for myself. That gives me a much clearer view of what is possible when I am making decisions as a manager. It also opens up ideas beyond engineering: ways technology could help other people in a business with the work they do every day.",
		],
		quote: {
			text: "As an engineering manager, you should understand what is going on. Reading posts or updates is not enough.",
			seconds: 776,
			edited: true,
		},
	},
	{
		id: "workflows",
		title: "AI across the development process",
		seconds: 847,
		paragraphs: [
			"I described using Claude Code for development, Codex for reviews and other tasks, and Cursor as part of the coding environment. The more interesting part for me is how those tools fit into a process. An agent can investigate a bug, create a ticket, write the change, and respond to review comments before bringing the result back for someone to assess.",
			"Review becomes a problem when the amount of code being produced grows faster than people can read it. A queue of dozens of pull requests can turn thoughtful review into a quick skim and an approval. I spoke about experimenting with multiple AI reviewers to address that pressure and continuing to evaluate which tools worked best.",
			"The human questions I care about are architectural and contextual. Is this change doing the right thing? Does the approach make sense in the wider system? Those questions need an understanding of what we are trying to achieve.",
			"Quality standards also need to be part of the instructions we give our tools. When bringing new code into an existing codebase, I want the agent to work with its conventions and constraints. The workflow needs to carry those expectations through implementation and review.",
		],
		quote: {
			text: "Is this code doing the right things?",
			seconds: 971.42,
		},
	},
];

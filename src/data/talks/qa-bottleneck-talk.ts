import type { ITalk } from "./talk-interface";

export const qaBottleneckTalk: ITalk = {
	slug: "beyond-the-qa-bottleneck",
	path: "/beyond-the-qa-bottleneck-talk",
	title: "Beyond the QA Bottleneck",
	subtitle: "Building confidence in React Native with AI",
	status: "upcoming",
	shareSlideCover: true,
	event: null,
	organizer: null,
	venue: null,
	city: null,
	date: null,
	pageUpdated: "2026-10-05",
	summary:
		"Regressions with every release. Days spent verifying the app. Projects waiting for confidence. John Adib shares the story of an engineering manager adopting AI in React Native development, bringing testing, CI, device verification, AI review, production feedback and delivery into one continuous loop.",
	image: "/talks/covers/beyond-the-qa-bottleneck.jpg",
	slidesPdf: "/talks/beyond-the-qa-bottleneck.pdf",
	keywords: [
		"React Native",
		"AI adoption",
		"QA",
		"CI",
		"Engineering leadership",
	],
};

export const qaBottleneckDetails = {
	metaDescription:
		"John Adib’s story of building confidence in React Native with AI: reusable skills, tests, CI, AI reviewers and faster delivery. Upcoming talk, details TBC.",
	status:
		"Upcoming talk. Event, venue and date to be confirmed. Slides are a work in progress.",
	topics: [
		"Eight reusable AI skills, with engineering standards written into the workflow.",
		"Tests that grow with the product, CI that blocks failures, and recorded device checks.",
		"AI reviewers and a feedback loop that evaluates comments and verifies fixes.",
		"Sentry feedback, canary builds, nightly betas and feature flags that separate shipping from activation.",
	],
	articlePath: "/beyond-the-qa-bottleneck",
	articleLabel: "Read the full story",
};

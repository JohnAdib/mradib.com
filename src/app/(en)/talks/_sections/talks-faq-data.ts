import type { IFaqQA } from "@/components/faq/faq-interface";

// Facts trace to src/data/talks: talk-topics.ts, talks.ts (formats, audiences,
// slide PDFs), and podcastAppearances. Keep answers to one or two sentences.
export const talksFaq: IFaqQA[] = [
	{
		id: "topics",
		q: "What do you speak about?",
		a: "Four things, all drawn from what I actually do: co-founding companies, once as CEO and once as CTO; engineering and architecture; how AI reshapes system design; and leading teams through change.",
	},
	{
		id: "formats",
		q: "What formats do you do?",
		a: "Conference talks, hands-on workshops, and panels. In person I have spoken to rooms of 200+ people, up to 300, and online to audiences of more than 5,000.",
	},
	{
		id: "location",
		q: "Where are you based, and will you travel?",
		a: "I am based in London, where I speak regularly. I am happy to travel for the right event.",
	},
	{
		id: "slides",
		q: "Are your slides available?",
		a: "Yes, and they are free. Every talk page on this site carries its slide deck as a PDF, and I am open to bringing any of those talks to your stage.",
	},
	{
		id: "podcasts",
		q: "Do you do podcasts?",
		a: "Yes. I enjoy podcast conversations about AI, engineering leadership, and founding companies. Invite me the same way you would for a talk.",
	},
];

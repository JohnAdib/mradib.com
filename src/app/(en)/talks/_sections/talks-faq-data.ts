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
		a: "Conference talks, hands-on workshops, and panels. I have spoken to rooms of 25 and to audiences of more than 5,000.",
	},
	{
		id: "location",
		q: "Where are you based, and will you travel?",
		a: "I am based in London, where I speak regularly. I am happy to travel for the right event.",
	},
	{
		id: "slides",
		q: "Are your slides available?",
		a: "Yes, and they are free. The slide decks live on the talk pages, ready to download as PDFs.",
	},
	{
		id: "podcasts",
		q: "Do you do podcasts?",
		a: "Yes. I joined Joe's Room for a 41-minute conversation on AI, ownership, and the future of engineering, streaming on Spotify.",
	},
];

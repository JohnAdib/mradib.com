import { articleAiAdoption } from "@/data/articles/ai-adoption";
import { getTalk } from "@/data/talks/get-talk";

interface IAiEvidence {
	kind: string;
	title: string;
	summary: string;
	date: string;
	path: string;
	recordingUrl?: string;
}

function publishedTalk(slug: string): IAiEvidence {
	const talk = getTalk(slug);
	if (!talk.path || !talk.date || talk.status === "upcoming") {
		throw new Error(`AI evidence needs a published talk: ${slug}`);
	}
	return {
		kind: talk.event ? `Talk · ${talk.event}` : "Talk",
		title: talk.title,
		summary: talk.summary,
		date: talk.date,
		path: talk.path,
		recordingUrl: talk.recordingUrl,
	};
}

// Titles, dates and URLs come from the published sources, not a second ledger.
export const aiEvidence: IAiEvidence[] = [
	{
		kind: "Case study",
		title: articleAiAdoption.title,
		summary: articleAiAdoption.description,
		date: articleAiAdoption.publishDate,
		path: articleAiAdoption.pagePath,
	},
	publishedTalk("compound-effect-guardrails"),
	publishedTalk("ai-first-architecture"),
];

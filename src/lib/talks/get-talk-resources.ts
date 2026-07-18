import type { ITalk, ITalkResource } from "@/data/talks/talk-interface";

/**
 * Ordered external links for a talk, built from whichever fields are set.
 * Single source for the talk page and any list affordance.
 */
export function getTalkResources(talk: ITalk): ITalkResource[] {
	const resources: ITalkResource[] = [];

	if (talk.slidesPdf) {
		resources.push({
			kind: "slides",
			label: "Slides (PDF)",
			url: talk.slidesPdf,
		});
	}
	if (talk.eventUrl) {
		resources.push({ kind: "event", label: "Event page", url: talk.eventUrl });
	}
	if (talk.recordingUrl) {
		resources.push({
			kind: "recording",
			label: "Watch the recording",
			url: talk.recordingUrl,
		});
	}
	if (talk.youtubeUrl) {
		resources.push({
			kind: "youtube",
			label: "Watch on YouTube",
			url: talk.youtubeUrl,
		});
	}
	if (talk.websiteUrl) {
		resources.push({
			kind: "website",
			label: "Talk website",
			url: talk.websiteUrl,
		});
	}
	if (talk.providerUrl) {
		resources.push({
			kind: "provider",
			label: `${talk.organizer} profile`,
			url: talk.providerUrl,
		});
	}

	return resources;
}

import type { HostedConversation } from "@/data/conversations";

export function conversationStatus(
	session: HostedConversation,
	now: number | null,
) {
	if (now !== null && now < Date.parse(session.endsAt)) return "Upcoming";
	if (session.recordingAvailable) return "Recording";
	return now === null ? null : "Past session";
}

export function orderConversations(
	sessions: readonly HostedConversation[],
	now: number | null,
) {
	return [...sessions].sort((a, b) => {
		const aUpcoming = conversationStatus(a, now) === "Upcoming";
		const bUpcoming = conversationStatus(b, now) === "Upcoming";
		if (aUpcoming !== bUpcoming) return aUpcoming ? -1 : 1;
		return aUpcoming
			? a.endsAt.localeCompare(b.endsAt)
			: b.endsAt.localeCompare(a.endsAt);
	});
}

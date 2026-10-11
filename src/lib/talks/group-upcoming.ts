import type { ITalk } from "@/data/talks/talk-interface";

/** Group panels at the same event while preserving independent talk cards. */
export function groupUpcomingTalks(talks: ITalk[]): ITalk[][] {
	const groups = new Map<string, ITalk[]>();
	for (const talk of [...talks].sort((a, b) =>
		(a.date ?? "9999").localeCompare(b.date ?? "9999"),
	)) {
		const key =
			talk.format === "panel" && !talk.path
				? `${talk.event}:${talk.date}`
				: talk.slug;
		const group = groups.get(key) ?? [];
		group.push(talk);
		groups.set(key, group);
	}
	return [...groups.values()];
}

export function talkDateLabel(date: string | null) {
	return date
		? new Intl.DateTimeFormat("en-GB", {
				day: "numeric",
				month: "long",
				year: "numeric",
				timeZone: "Europe/London",
			}).format(new Date(`${date}T12:00:00Z`))
		: "Event details TBC";
}

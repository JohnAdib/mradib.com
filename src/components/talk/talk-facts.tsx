import { FactRow } from "@/components/fact-row";
import type { ITalk } from "@/data/talks/talk-interface";
import { formatDateTime } from "@/lib/datetime/format-date-time";

export function TalkFacts({ talk }: { talk: ITalk }) {
	const location = [talk.venue, talk.city].filter(Boolean).join(", ");

	return (
		<dl className="grid gap-3 rounded-2xl bg-zinc-900/5 p-5 dark:bg-zinc-800/40">
			<FactRow label="When" value={formatDateTime({ datetime: talk.date })} />
			<FactRow label="Where" value={location} />
			<FactRow label="Organizer" value={talk.organizer} />
			<FactRow label="Host" value={talk.host} />
			<FactRow label="Audience" value={talk.audience} />
		</dl>
	);
}

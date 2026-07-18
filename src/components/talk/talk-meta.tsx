import { TalkEventJsonLd } from "@/components/json-ld/talk-event-json-ld";
import type { ITalk } from "@/data/talks/talk-interface";
import { formatDateTime } from "@/lib/datetime/format-date-time";

export function TalkMeta({ talk }: { talk: ITalk }) {
	const where = talk.venue ? `${talk.event}, at ${talk.venue}` : talk.event;

	return (
		<>
			<TalkEventJsonLd talk={talk} />
			<p className="rounded-xl bg-zinc-50 px-4 py-3 text-sm text-zinc-600 dark:bg-zinc-800/50 dark:text-zinc-400">
				🎤 Presented at <strong>{where}</strong> on{" "}
				{formatDateTime({ datetime: talk.date })}
				{talk.audience ? `, ${talk.audience}` : ""}.
			</p>
		</>
	);
}

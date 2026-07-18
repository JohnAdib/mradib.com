import type { ITalk } from "@/data/talks/talk-interface";
import { formatDateTime } from "@/lib/datetime/format-date-time";

function Fact({ label, value }: { label: string; value?: string }) {
	if (!value) {
		return null;
	}
	return (
		<div className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
			<dt className="w-24 flex-none text-xs font-medium tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
				{label}
			</dt>
			<dd className="text-sm text-zinc-700 dark:text-zinc-300">{value}</dd>
		</div>
	);
}

export function TalkFacts({ talk }: { talk: ITalk }) {
	const location = [talk.venue, talk.city].filter(Boolean).join(", ");

	return (
		<dl className="grid gap-3 rounded-2xl bg-zinc-50 p-5 dark:bg-zinc-800/40">
			<Fact label="When" value={formatDateTime({ datetime: talk.date })} />
			<Fact label="Where" value={location} />
			<Fact label="Organizer" value={talk.organizer} />
			<Fact label="Host" value={talk.host} />
			<Fact label="Audience" value={talk.audience} />
		</dl>
	);
}

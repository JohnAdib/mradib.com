import Link from "next/link";
import type { ITalk } from "@/data/talks/talk-interface";
import { TalkLogo } from "./talk-logo";

function shortDate(iso: string): string {
	return new Date(iso).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric",
		timeZone: "UTC",
	});
}

export function TalkTimelineItem({
	talk,
	last,
}: {
	talk: ITalk;
	last: boolean;
}) {
	const event = talk.host ? `${talk.event} (${talk.host})` : talk.event;

	return (
		<Link href={talk.path} className="group flex gap-4">
			<div className="flex flex-col items-center">
				<TalkLogo talk={talk} className="h-10 w-10" />
				{!last && (
					<span className="my-1 w-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
				)}
			</div>
			<div className={last ? "min-w-0 flex-1" : "min-w-0 flex-1 pb-8"}>
				<time
					dateTime={talk.date}
					className="text-xs font-medium text-zinc-400 dark:text-zinc-500"
				>
					{shortDate(talk.date)}
				</time>
				<h3 className="mt-0.5 text-[15px] font-semibold text-zinc-800 transition group-hover:text-accent-700 dark:text-zinc-100 dark:group-hover:text-accent-400">
					{talk.title}
				</h3>
				<p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
					📍 {talk.city} · 🎙️ {event}
				</p>
			</div>
		</Link>
	);
}

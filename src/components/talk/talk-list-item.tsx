import Link from "next/link";
import type { ITalk } from "@/data/talks/talk-interface";
import { formatDateTime } from "@/lib/datetime/format-date-time";
import { TalkLogo } from "./talk-logo";

export function TalkListItem({ talk }: { talk: ITalk }) {
	const isWorkshop = talk.format === "workshop";
	const where = [talk.event, talk.host, talk.city].filter(Boolean).join(" · ");

	return (
		<Link
			href={talk.path}
			className="group flex gap-5 rounded-3xl bg-white p-5 ring-1 ring-zinc-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/5 sm:p-6 dark:bg-zinc-800/40 dark:ring-zinc-700/50 dark:hover:bg-zinc-800/70"
		>
			<TalkLogo talk={talk} className="h-14 w-14 sm:h-16 sm:w-16" />
			<div className="min-w-0 flex-1">
				<div className="flex items-center gap-3">
					<time
						dateTime={talk.date}
						className="text-xs font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400"
					>
						{formatDateTime({ datetime: talk.date })}
					</time>
					<span className="rounded-full bg-accent-50 px-2 py-0.5 text-[11px] font-medium text-accent-700 dark:bg-accent-400/10 dark:text-accent-400">
						{isWorkshop ? "Workshop" : "Talk"}
					</span>
				</div>
				<h3 className="mt-2 text-base font-semibold tracking-tight text-zinc-800 sm:text-lg dark:text-zinc-100">
					{talk.title}
				</h3>
				<p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{where}</p>
				<p className="mt-4 text-sm font-medium text-accent-700 transition group-hover:text-accent-600 dark:text-accent-400">
					View talk →
				</p>
			</div>
		</Link>
	);
}

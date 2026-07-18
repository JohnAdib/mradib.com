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

/** Where in the city, unless the venue just restates the host company. */
function placeOf(talk: ITalk): string {
	if (talk.venue && (!talk.host || !talk.venue.includes(talk.host))) {
		return talk.venue;
	}
	return talk.city;
}

export function TalkTimelineItem({
	talk,
	last,
}: {
	talk: ITalk;
	last: boolean;
}) {
	const content = (
		<>
			<TalkLogo talk={talk} className="relative z-10 h-12 w-12" />
			<div className={last ? "min-w-0 flex-1" : "min-w-0 flex-1 pb-8"}>
				<div className="flex items-baseline justify-between gap-3">
					<p className="truncate text-xs font-medium text-zinc-500 dark:text-zinc-400">
						{talk.event}
					</p>
					<time
						dateTime={talk.date}
						className="flex-none text-xs text-zinc-400 dark:text-zinc-500"
					>
						{shortDate(talk.date)}
					</time>
				</div>
				<h3 className="mt-1 text-[15px] font-semibold text-zinc-800 transition group-hover:text-accent-700 dark:text-zinc-100 dark:group-hover:text-accent-400">
					{talk.title}
				</h3>
				<p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-0.5 text-xs text-zinc-500 dark:text-zinc-400">
					<span>📍 {placeOf(talk)}</span>
					{talk.host ? <span>🏢 {talk.host}</span> : null}
					{talk.audience ? <span>👥 {talk.audience}</span> : null}
					{talk.format === "panel" ? <span>Panel</span> : null}
					{talk.format === "workshop" ? <span>Workshop</span> : null}
				</p>
			</div>
		</>
	);

	const rail = !last && (
		<span
			aria-hidden="true"
			className="absolute inset-y-0 left-6 w-px -translate-x-1/2 bg-zinc-200 dark:bg-zinc-800"
		/>
	);

	if (!talk.path) {
		return (
			<div className="relative flex items-start gap-4">
				{rail}
				{content}
			</div>
		);
	}

	return (
		<Link href={talk.path} className="group relative flex items-start gap-4">
			{rail}
			{content}
		</Link>
	);
}

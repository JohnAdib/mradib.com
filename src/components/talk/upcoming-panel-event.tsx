import type { ITalk } from "@/data/talks/talk-interface";
import { talkDateLabel } from "@/lib/talks/group-upcoming";

export function UpcomingPanelEvent({ panels }: { panels: ITalk[] }) {
	const event = panels[0];
	return (
		<article className="rounded-2xl bg-surface p-4 ring-1 ring-zinc-200 sm:p-5 dark:bg-zinc-800/40 dark:ring-zinc-700/50">
			<p className="text-xs text-zinc-500 dark:text-zinc-400">
				<time dateTime={event.date ?? undefined}>
					{talkDateLabel(event.date)}
				</time>
				{event.city && ` · ${event.city}`}
				{event.venue && ` · ${event.venue}`}
			</p>
			<h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
				{event.event}
			</h3>
			<ul className="mt-4 space-y-4">
				{panels.map((panel) => (
					<li key={panel.slug}>
						<p className="text-xs font-medium text-accent-700 dark:text-accent-400">
							{panel.role === "moderator-panelist"
								? "Moderator and panelist"
								: "Panelist"}
						</p>
						<h4 className="mt-1 text-sm font-medium leading-5 text-zinc-800 sm:text-base dark:text-zinc-100">
							{panel.title}
						</h4>
					</li>
				))}
			</ul>
			{event.eventUrl && (
				<a
					href={event.eventUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-zinc-700 underline-offset-4 transition-colors hover:text-accent-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-500 dark:text-zinc-300 dark:hover:text-accent-400"
				>
					Conference programme
				</a>
			)}
		</article>
	);
}

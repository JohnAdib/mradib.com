import { PlayIcon } from "@heroicons/react/24/solid";
import type { HostedConversation } from "@/data/conversations";
import { conversationStatus } from "@/lib/conversations/session-status";

export function ConversationCard({
	session,
	now,
}: {
	session: HostedConversation;
	now: number | null;
}) {
	const status = conversationStatus(session, now);
	const date = new Date(`${session.date}T12:00:00Z`).toLocaleDateString(
		"en-GB",
		{
			day: "numeric",
			month: "short",
			year: "numeric",
			timeZone: "Europe/London",
		},
	);
	return (
		<article>
			<a
				href={session.youtube}
				target="_blank"
				rel="noopener noreferrer"
				className="group flex items-start gap-4 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700"
			>
				<span
					aria-hidden="true"
					className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-500 transition-colors group-hover:text-accent-700 dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:text-accent-400"
				>
					<PlayIcon className="h-5 w-5" />
				</span>
				<div className="min-w-0 flex-1">
					<div className="flex items-baseline justify-between gap-3 text-xs">
						<p className="truncate font-medium text-zinc-500 dark:text-zinc-400">
							{session.community.name}
						</p>
						<time
							dateTime={session.date}
							className="flex-none text-zinc-400 dark:text-zinc-500"
						>
							{date}
						</time>
					</div>
					<h3 className="mt-1 text-[15px] font-semibold text-zinc-800 transition-colors group-hover:text-accent-700 dark:text-zinc-100 dark:group-hover:text-accent-400">
						{session.title}
					</h3>
					<p className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-zinc-500 dark:text-zinc-400">
						<span>With {session.guest}</span>
						{status && (
							<span className="text-accent-700 dark:text-accent-400">
								{status}
							</span>
						)}
					</p>
					<span className="sr-only">Watch on YouTube (opens in a new tab)</span>
				</div>
			</a>
		</article>
	);
}

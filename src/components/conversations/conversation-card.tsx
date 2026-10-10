import {
	conversationDate,
	type HostedConversation,
} from "@/data/conversations";

const externalLink =
	"rounded-md py-2 underline-offset-4 transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700";

export function ConversationCard({ session }: { session: HostedConversation }) {
	return (
		<article className="rounded-3xl bg-surface p-6 ring-1 ring-zinc-900/10 sm:p-7 dark:bg-zinc-800/40 dark:ring-white/10">
			<div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-zinc-500 dark:text-zinc-400">
				<time dateTime={session.date}>{conversationDate(session.date)}</time>
				<span className="rounded-full bg-accent-500/10 px-2.5 py-1 font-medium text-accent-700 dark:text-accent-400">
					{session.status === "recorded" ? "Recording" : "Upcoming"}
				</span>
				<span>Host: John Adib</span>
			</div>
			<h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
				<a
					href={session.youtube}
					target="_blank"
					rel="noopener noreferrer"
					className={externalLink}
				>
					{session.title}
				</a>
			</h3>
			<p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
				With{" "}
				<a
					href={session.guestLinkedin}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`${session.guest} on LinkedIn (opens in a new tab)`}
					className={`${externalLink} font-semibold text-zinc-800 dark:text-zinc-100`}
				>
					{session.guest}
				</a>
			</p>
			<p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
				{session.summary}
			</p>
			<div className="mt-5 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
				<div>
					<p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
						{session.community.name}
					</p>
					<div className="mt-1 flex gap-4 text-xs text-zinc-600 dark:text-zinc-400">
						<a
							href={session.community.youtube}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${session.community.name} YouTube channel (opens in a new tab)`}
							className={externalLink}
						>
							Channel
						</a>
						<a
							href={session.community.website}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${session.community.name} website (opens in a new tab)`}
							className={externalLink}
						>
							Website
						</a>
					</div>
				</div>
				<a
					href={session.youtube}
					target="_blank"
					rel="noopener noreferrer"
					className={`${externalLink} ml-auto text-sm font-semibold text-accent-700 dark:text-accent-400`}
				>
					View on YouTube<span className="sr-only"> (opens in a new tab)</span>
				</a>
			</div>
		</article>
	);
}

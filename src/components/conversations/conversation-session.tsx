import { YouTubeEmbed } from "@/components/video/youtube-embed";
import type { HostedConversation } from "@/data/conversations";
import { conversationDate } from "@/data/conversations";

export function ConversationSession({
	session,
}: {
	session: HostedConversation;
}) {
	const recorded = session.status === "recorded";
	return (
		<article
			id={session.id}
			className="scroll-mt-24 rounded-3xl bg-surface p-6 ring-1 ring-zinc-900/10 sm:p-8 dark:bg-zinc-800/40 dark:ring-white/10"
		>
			<div className="flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
				<time dateTime={session.date}>{conversationDate(session.date)}</time>
				<span className="rounded-full bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-700 dark:text-accent-400">
					{recorded ? "Recording" : "Upcoming live"}
				</span>
			</div>
			<h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
				{session.title}
			</h2>
			<p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
				Guest:{" "}
				<strong className="font-semibold text-zinc-800 dark:text-zinc-100">
					{session.guest}
				</strong>
				. {session.guestRole}.
			</p>
			<p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
				Hosted by John Adib · Tech Immigrants
			</p>
			<p className="mt-5 text-base text-zinc-600 dark:text-zinc-400">
				{session.summary}
			</p>
			{recorded && (
				<YouTubeEmbed
					url={session.youtube}
					title={session.title}
					className="mt-6"
				/>
			)}
			<h3 className="mt-6 text-sm font-semibold text-zinc-800 dark:text-zinc-100">
				{recorded ? "Session topics" : "What we'll explore"}
			</h3>
			<ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
				{session.topics.map((topic) => (
					<li key={topic} className="flex gap-3">
						<span
							aria-hidden="true"
							className="text-accent-700 dark:text-accent-400"
						>
							•
						</span>
						{topic}
					</li>
				))}
			</ul>
			<div className="mt-6 flex flex-wrap items-center gap-5">
				<a
					href={session.youtube}
					className="rounded-md bg-zinc-800 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
				>
					{recorded ? "Watch on YouTube" : "Watch live on YouTube"}
				</a>
				<a
					href={session.luma}
					className="rounded-md py-3 text-sm font-medium text-accent-700 underline-offset-4 transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700 dark:text-accent-400"
				>
					{recorded ? "Event details on Luma" : "Register on Luma"}
				</a>
			</div>
		</article>
	);
}

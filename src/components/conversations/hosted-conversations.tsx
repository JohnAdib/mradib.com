import Link from "next/link";
import {
	conversationDate,
	conversationPage,
	conversations,
} from "@/data/conversations";

export function HostedConversations() {
	return (
		<section id="conversations" className="mt-12 scroll-mt-24">
			<h2 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
				{conversationPage.title}
			</h2>
			<p className="mt-3 max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
				Live conversations with Tech Immigrants. I host the discussion and
				community Q&A.
			</p>
			<div className="mt-6 divide-y divide-zinc-900/10 overflow-hidden rounded-3xl bg-surface ring-1 ring-zinc-900/10 dark:divide-white/10 dark:bg-zinc-800/40 dark:ring-white/10">
				{conversations.map((session) => (
					<Link
						key={session.id}
						href={`${conversationPage.path}#${session.id}`}
						className="block p-6 transition-colors hover:bg-accent-500/5 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent-700 dark:hover:bg-accent-500/10"
					>
						<div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400">
							<time dateTime={session.date}>
								{conversationDate(session.date)}
							</time>
							<span>
								{session.status === "recorded"
									? "Recording available"
									: "Upcoming"}
							</span>
							<span>Host</span>
						</div>
						<h3 className="mt-2 font-display text-xl font-semibold text-zinc-800 dark:text-zinc-100">
							{session.title}
						</h3>
						<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
							With {session.guest}
						</p>
					</Link>
				))}
			</div>
			<Link
				href={conversationPage.path}
				className="mt-5 inline-block rounded-md py-2 text-sm font-semibold text-accent-700 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700 dark:text-accent-400"
			>
				Explore the conversations
			</Link>
		</section>
	);
}

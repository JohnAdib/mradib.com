import Image from "next/image";
import {
	conversationDate,
	type HostedConversation,
} from "@/data/conversations";

export function ConversationCard({ session }: { session: HostedConversation }) {
	return (
		<article className="overflow-hidden rounded-3xl bg-surface ring-1 ring-zinc-900/10 sm:grid sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] dark:bg-zinc-800/40 dark:ring-white/10">
			<a
				href={session.youtube}
				aria-label={`Watch ${session.title} on YouTube`}
				className="block self-start rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent-700"
			>
				<Image
					src={session.banner}
					alt={`Tech Immigrants video banner: ${session.title}`}
					width={960}
					height={540}
					sizes="(min-width: 640px) 340px, (max-width: 430px) 100vw, 600px"
					className="aspect-video w-full object-cover"
				/>
			</a>
			<div className="p-5 sm:p-6">
				<div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400">
					<time dateTime={session.date}>{conversationDate(session.date)}</time>
					<span className="text-accent-700 dark:text-accent-400">
						{session.status === "recorded" ? "Recording" : "Upcoming live"}
					</span>
					<span>Host: John Adib</span>
				</div>
				<h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
					<a
						href={session.youtube}
						className="rounded-md transition-colors hover:text-accent-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700 dark:hover:text-accent-400"
					>
						{session.title}
					</a>
				</h3>
				<p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
					With{" "}
					<a
						href={session.guestLinkedin}
						aria-label={`${session.guest} on LinkedIn`}
						className="rounded-md font-semibold text-zinc-800 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700 dark:text-zinc-100"
					>
						{session.guest}
					</a>
				</p>
				<p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
					{session.summary}
				</p>
				<a
					href={session.youtube}
					className="mt-4 inline-block rounded-md py-2 text-sm font-semibold text-accent-700 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700 dark:text-accent-400"
				>
					{session.status === "recorded"
						? "Watch on YouTube"
						: "Watch live on YouTube"}
				</a>
			</div>
		</article>
	);
}

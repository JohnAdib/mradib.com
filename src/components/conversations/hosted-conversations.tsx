import { conversationCommunity, conversations } from "@/data/conversations";
import { ConversationCard } from "./conversation-card";

export function HostedConversations() {
	return (
		<section id="conversations" className="mt-12 scroll-mt-24">
			<h2 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
				Hosted conversations
			</h2>
			<p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
				I host live conversations and community Q&A with{" "}
				{conversationCommunity.name}, bringing recruiters and industry
				specialists into the discussion.
			</p>
			<div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-accent-700 dark:text-accent-400">
				<a
					href={conversationCommunity.youtube}
					className="rounded-md py-2 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700"
				>
					Tech Immigrants on YouTube
				</a>
				<a
					href={conversationCommunity.website}
					className="rounded-md py-2 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700"
				>
					Visit Tech Immigrants
				</a>
			</div>
			<div className="mt-6 space-y-6">
				{conversations.map((session) => (
					<ConversationCard key={session.id} session={session} />
				))}
			</div>
		</section>
	);
}

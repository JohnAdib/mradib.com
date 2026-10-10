import { orderedConversations } from "@/data/conversations";
import { ConversationCard } from "./conversation-card";

export function HostedConversations() {
	return (
		<section id="conversations" className="mt-12 scroll-mt-24">
			<h2 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
				Hosted conversations
			</h2>
			<p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
				I host conversations with recruiters and industry specialists, bringing
				their perspectives and questions from the community into the discussion.
			</p>
			<div className="mt-6 space-y-5">
				{orderedConversations.map((session) => (
					<ConversationCard key={session.id} session={session} />
				))}
			</div>
		</section>
	);
}

"use client";

import { useEffect, useState } from "react";
import { conversations } from "@/data/conversations";
import { orderConversations } from "@/lib/conversations/session-status";
import { ConversationCard } from "./conversation-card";

export function HostedConversations() {
	const [now, setNow] = useState<number | null>(null);
	useEffect(() => {
		const refresh = () => setNow(Date.now());
		refresh();
		const interval = window.setInterval(refresh, 60_000);
		document.addEventListener("visibilitychange", refresh);
		return () => {
			window.clearInterval(interval);
			document.removeEventListener("visibilitychange", refresh);
		};
	}, []);
	const orderedConversations = orderConversations(conversations, now);
	return (
		<section id="conversations" className="mt-12 scroll-mt-24">
			<h2 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
				Hosted conversations
			</h2>
			<p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
				I host conversations with recruiters and industry specialists, bringing
				their perspectives and questions from the community into the discussion.
			</p>
			<div className="mt-5 space-y-6">
				{orderedConversations.map((session) => (
					<ConversationCard key={session.id} session={session} now={now} />
				))}
			</div>
		</section>
	);
}

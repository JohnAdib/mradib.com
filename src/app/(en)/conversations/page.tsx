import type { Metadata } from "next";
import Link from "next/link";
import { ConversationSession } from "@/components/conversations/conversation-session";
import { ItemListJsonLd } from "@/components/json-ld/item-list-json-ld";
import { SimpleLayout } from "@/components/simple-layout";
import { conversationPage, conversations } from "@/data/conversations";
import { homepageUrl } from "@/lib/constants/url";
import { ogMetadata } from "@/lib/og-metadata";

export const metadata: Metadata = {
	title: "Hosted Conversations",
	description: conversationPage.description,
	alternates: { canonical: conversationPage.path },
	...ogMetadata(conversationPage.path),
};

export default function ConversationsPage() {
	return (
		<SimpleLayout title={conversationPage.title} intro={conversationPage.intro}>
			<ItemListJsonLd
				name="Conversations hosted by John Adib"
				items={conversations.map((session) => ({
					name: session.title,
					url: `${homepageUrl}${conversationPage.path}#${session.id}`,
				}))}
			/>
			<div className="max-w-3xl space-y-10">
				{conversations.map((session) => (
					<ConversationSession key={session.id} session={session} />
				))}
			</div>
			<Link
				href="/talks"
				className="mt-10 inline-block rounded-md py-3 text-sm font-semibold text-accent-700 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700 dark:text-accent-400"
			>
				Back to talks and speaking
			</Link>
		</SimpleLayout>
	);
}

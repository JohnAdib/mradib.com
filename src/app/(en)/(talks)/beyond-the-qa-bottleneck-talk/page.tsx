import type { Metadata } from "next";
import Link from "next/link";
import { TalkLayout } from "@/components/talk/talk-layout";
import {
	qaBottleneckDetails as details,
	qaBottleneckTalk as talk,
} from "@/data/talks/qa-bottleneck-talk";
import { ogMetadata } from "@/lib/og-metadata";

export const metadata: Metadata = {
	title: talk.title,
	description: details.metaDescription,
	...ogMetadata(talk.path ?? ""),
};

export default function Page() {
	return (
		<TalkLayout talk={talk}>
			<p className="mt-6 rounded-2xl bg-accent-50 p-4 text-sm leading-relaxed text-accent-900 dark:bg-accent-400/10 dark:text-accent-200">
				{details.status}
			</p>
			<section className="mt-8" aria-labelledby="inside-the-talk">
				<h2
					id="inside-the-talk"
					className="text-xl font-bold text-zinc-800 dark:text-zinc-100"
				>
					Inside the talk
				</h2>
				<ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
					{details.topics.map((topic) => (
						<li key={topic}>{topic}</li>
					))}
				</ul>
				<Link
					href={details.articlePath}
					className="mt-5 inline-block text-sm font-semibold text-accent-700 dark:text-accent-400"
				>
					{details.articleLabel} &rarr;
				</Link>
			</section>
		</TalkLayout>
	);
}

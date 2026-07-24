import Link from "next/link";
import { TalkMedia } from "@/components/talk/talk-media";
import type { ITalk } from "@/data/talks/talk-interface";

export function AuditProofTalkCard({ talk }: { talk: ITalk }) {
	const meta = talk.audience ? `${talk.event}, ${talk.audience}` : talk.event;
	return (
		<div className="rounded-3xl bg-surface p-6 ring-1 ring-zinc-900/10 dark:bg-zinc-800/40 dark:ring-zinc-700/50">
			<p className="text-sm text-zinc-500 dark:text-zinc-400">{meta}</p>
			<h4 className="mt-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
				{talk.path ? (
					<Link
						href={talk.path}
						className="transition hover:text-accent-700 dark:hover:text-accent-400"
					>
						{talk.title}
					</Link>
				) : (
					talk.title
				)}
			</h4>
			<div className="mt-4">
				<TalkMedia talk={talk} />
			</div>
		</div>
	);
}

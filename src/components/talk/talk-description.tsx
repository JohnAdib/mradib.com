import type { ITalk } from "@/data/talks/talk-interface";

export function TalkDescription({ talk }: { talk: ITalk }) {
	return (
		<div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
			{(talk.description?.length ? talk.description : [talk.summary]).map(
				(paragraph) => (
					<p key={paragraph}>{paragraph}</p>
				),
			)}
		</div>
	);
}

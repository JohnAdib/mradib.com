import type { ITalk } from "@/data/talks/talk-interface";
import { TalkListItem } from "./talk-list-item";

function groupByYear(talks: ITalk[]): [string, ITalk[]][] {
	const groups = new Map<string, ITalk[]>();
	for (const talk of talks) {
		const year = talk.date.slice(0, 4);
		groups.set(year, [...(groups.get(year) ?? []), talk]);
	}
	return [...groups.entries()];
}

export function TalkList({ talks }: { talks: ITalk[] }) {
	const delays = new Map(
		talks.map((talk, index) => [talk.slug, Math.min(index, 5) * 0.06]),
	);

	return (
		<div className="space-y-12">
			{groupByYear(talks).map(([year, yearTalks]) => (
				<section key={year}>
					<h2 className="text-sm font-semibold tracking-wide text-zinc-400 dark:text-zinc-500">
						{year}
					</h2>
					<div className="mt-4 space-y-4">
						{yearTalks.map((talk) => (
							<div
								key={talk.slug}
								className="reveal-up"
								style={{ animationDelay: `${delays.get(talk.slug)}s` }}
							>
								<TalkListItem talk={talk} />
							</div>
						))}
					</div>
				</section>
			))}
		</div>
	);
}

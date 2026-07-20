"use client";

import type { IResolvedGroup } from "@/data/resume-checklist";
import { IssueCard } from "./issue-card";
import type { IScorecardCopy } from "./scorecard-copy";

/** The flagged issues, grouped by section, each with an anchor to jump to. */
export function IssueGroups({
	groups,
	review,
	isResolved,
	onToggle,
	copy,
}: {
	groups: IResolvedGroup[];
	review: Record<string, number>;
	isResolved: (slug: string) => boolean;
	onToggle: (slug: string) => void;
	copy: IScorecardCopy;
}) {
	return (
		<div className="space-y-5">
			{groups.map((group) => (
				<section
					key={group.id}
					id={`group-${group.id}`}
					className="scroll-mt-16"
				>
					<h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
						{group.title}
					</h3>
					<div className="space-y-2">
						{group.items.map((item) => (
							<IssueCard
								key={item.slug}
								item={item}
								severity={review[item.slug] ?? 0}
								guideHref={group.guideHref}
								resolved={isResolved(item.slug)}
								onToggle={() => onToggle(item.slug)}
								copy={copy}
							/>
						))}
					</div>
				</section>
			))}
		</div>
	);
}

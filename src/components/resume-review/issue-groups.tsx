"use client";

import type { IResolvedGroup } from "@/data/resume-checklist";
import { IssueCard } from "./issue-card";
import type { IScorecardCopy } from "./scorecard-copy";

/** The flagged issues, grouped by section, each with an anchor to jump to. */
export function IssueGroups({
	groups,
	isResolved,
	onToggle,
	copy,
}: {
	groups: IResolvedGroup[];
	isResolved: (slug: string) => boolean;
	onToggle: (slug: string) => void;
	copy: IScorecardCopy;
}) {
	return (
		<div className="space-y-8">
			{groups.map((group) => (
				<section
					key={group.id}
					id={`group-${group.id}`}
					className="scroll-mt-20"
				>
					<h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
						{group.title}
					</h3>
					<div className="space-y-3">
						{group.items.map((item) => (
							<IssueCard
								key={item.slug}
								item={item}
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

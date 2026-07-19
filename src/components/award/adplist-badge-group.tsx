import { AdplistBadgeChip } from "@/components/award/adplist-badge-chip";
import { Reveal } from "@/components/reveal/reveal";
import type { AdplistBadgeKind, IAdplistBadge } from "@/data/awards";

const kindLabel: Record<AdplistBadgeKind, string> = {
	top1: "Top 1% Engineering Mentor",
	superMentor: "Super Mentor",
	top10Frontend: "Top 10 Front-End",
};

export function AdplistBadgeGroup({
	kind,
	badges,
}: {
	kind: AdplistBadgeKind;
	badges: IAdplistBadge[];
}) {
	if (badges.length === 0) {
		return null;
	}

	const wide = kind !== "top1";

	return (
		<Reveal>
			<p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase dark:text-zinc-500">
				{kindLabel[kind]} · {badges.length}
			</p>
			<div
				className={
					wide
						? "mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
						: "mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5"
				}
			>
				{badges.map((badge) => (
					<AdplistBadgeChip
						key={`${badge.kind}-${badge.date}`}
						badge={badge}
						wide={wide}
					/>
				))}
			</div>
		</Reveal>
	);
}

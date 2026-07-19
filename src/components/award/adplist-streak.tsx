import { AdplistBadgeChip } from "@/components/award/adplist-badge-chip";
import { LightboxProvider } from "@/components/image-lightbox";
import { adplistBadges } from "@/data/awards";
import { awardMonthLabel } from "@/lib/awards/award-date";
import { groupBadgesByKind } from "@/lib/awards/group-badges-by-kind";

// Rarest first (Super Mentor, Top 10, then the Top 1% run), newest within each.
const badges = groupBadgesByKind(adplistBadges).flatMap(
	(group) => group.badges,
);
const earliest = [...adplistBadges].sort((a, b) =>
	a.date.localeCompare(b.date),
)[0];

export function AdplistStreak() {
	return (
		<LightboxProvider>
			<section className="mt-16">
				<h2 className="font-display text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
					ADPList recognition, month after month
				</h2>
				<div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
					<span className="font-display text-4xl font-semibold tracking-tight text-zinc-800 tabular-nums sm:text-5xl dark:text-zinc-100">
						{adplistBadges.length}
					</span>
					<span className="max-w-md text-sm text-zinc-600 dark:text-zinc-400">
						badges since {awardMonthLabel(earliest.date)}, across Top 1%
						Engineering Mentor, Super Mentor, and Top 10 in Front-End. The kind
						of recognition I value most: showing up, every month.
					</span>
				</div>
				<div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
					{badges.map((badge) => (
						<div
							key={`${badge.kind}-${badge.date}`}
							className="w-[84px] sm:w-24"
						>
							<AdplistBadgeChip badge={badge} />
						</div>
					))}
				</div>
			</section>
		</LightboxProvider>
	);
}

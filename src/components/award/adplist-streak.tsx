import { AdplistBadgeGroup } from "@/components/award/adplist-badge-group";
import { LightboxProvider } from "@/components/image-lightbox";
import { adplistBadges } from "@/data/awards";
import { buildBadgeGallery } from "@/lib/awards/adplist-badge-gallery";
import { awardMonthLabel } from "@/lib/awards/award-date";
import { groupBadgesByKind } from "@/lib/awards/group-badges-by-kind";

const groups = groupBadgesByKind(adplistBadges);
const { gallery, galleryIndexOf } = buildBadgeGallery(
	groups.flatMap((group) => group.badges),
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
				<div className="mt-8 space-y-10">
					{groups.map((group) => (
						<AdplistBadgeGroup
							key={group.kind}
							kind={group.kind}
							badges={group.badges}
							gallery={gallery}
							galleryIndexOf={galleryIndexOf}
						/>
					))}
				</div>
			</section>
		</LightboxProvider>
	);
}

import { AdplistBadgeGroup } from "@/components/award/adplist-badge-group";
import { LightboxProvider } from "@/components/image-lightbox";
import { adplistBadges } from "@/data/awards";
import { awardMonthLabel } from "@/lib/awards/award-date";
import { groupBadgesByKind } from "@/lib/awards/group-badges-by-kind";

export function AdplistStreak() {
	const groups = groupBadgesByKind(adplistBadges);
	const earliest = [...adplistBadges].sort((a, b) =>
		a.date.localeCompare(b.date),
	)[0];

	return (
		<LightboxProvider>
			<section className="mt-16">
				<h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
					ADPList recognition, month after month
				</h2>
				<p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
					Beyond the headline awards, the recognition I value most is the boring
					kind: showing up, every month. {adplistBadges.length} badges since{" "}
					{awardMonthLabel(earliest.date)}.
				</p>
				<div className="mt-8 space-y-10">
					{groups.map((group) => (
						<AdplistBadgeGroup
							key={group.kind}
							kind={group.kind}
							badges={group.badges}
						/>
					))}
				</div>
			</section>
		</LightboxProvider>
	);
}

import { groupTitles } from "@/components/award/award-group-list";
import { FactRow } from "@/components/fact-row";
import type { IAward } from "@/data/awards";
import { awardMonthLabel } from "@/lib/awards/award-date";

export function AwardFacts({ award }: { award: IAward }) {
	return (
		<dl className="grid gap-3 rounded-2xl bg-zinc-50 p-5 dark:bg-zinc-800/40">
			<FactRow label="Issuer" value={award.issuer} />
			<FactRow label="Date" value={awardMonthLabel(award.date)} />
			<FactRow label="Category" value={groupTitles[award.group]} />
		</dl>
	);
}

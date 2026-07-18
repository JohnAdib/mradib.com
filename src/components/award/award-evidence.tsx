import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { type ILinkChip, LinkChipGrid } from "@/components/link-chip-grid";
import type { IAward } from "@/data/awards";

/** The certificate images render inline via AwardBadge, this only covers a downloadable PDF. */
export function AwardEvidence({ award }: { award: IAward }) {
	const chips: ILinkChip[] = [];

	if (award.evidencePdf) {
		chips.push({
			icon: ArrowDownTrayIcon,
			label: "Download the evidence (PDF)",
			url: award.evidencePdf,
		});
	}

	return <LinkChipGrid chips={chips} />;
}

import { Container } from "@/components/container";
import { CtaOnDarkPanel } from "@/components/cta-on-dark-panel/cta-on-dark-panel";
import type { IGuide } from "@/data/guides/guide-bundle";
import { kitCopy } from "@/data/guides/kit-copy";
import { kitPosition } from "@/lib/guides/kit";

/**
 * The closing panel: one path deeper, at most two CTAs. When the closing
 * names no second link and the kit has a next guide, the second link is it.
 */
export function GuideClosing({ guide }: { guide: IGuide }) {
	const { closing } = guide;
	const { next } = kitPosition(guide);
	const panel =
		!closing.linkSecondaryLink && next
			? {
					...closing,
					linkSecondaryText: `${kitCopy.next}: ${next.name}`,
					linkSecondaryLink: next.article.pagePath,
				}
			: closing;
	return (
		<Container>
			<CtaOnDarkPanel {...panel} />
		</Container>
	);
}

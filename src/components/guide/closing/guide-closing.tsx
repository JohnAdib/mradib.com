import { Container } from "@/components/container";
import { CtaOnDarkPanel } from "@/components/cta-on-dark-panel/cta-on-dark-panel";
import type { IGuide } from "@/data/guides/guide-bundle";

/** The closing panel: one path deeper, at most two CTAs. */
export function GuideClosing({ guide }: { guide: IGuide }) {
	return (
		<Container>
			<CtaOnDarkPanel {...guide.closing} />
		</Container>
	);
}

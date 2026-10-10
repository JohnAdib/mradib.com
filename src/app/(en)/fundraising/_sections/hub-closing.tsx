import { Container } from "@/components/container";
import { CtaOnDarkPanel } from "@/components/cta-on-dark-panel/cta-on-dark-panel";
import { hubCopy } from "@/data/guides/hub-copy";

/** The closing panel: into the first guide, or a conversation. */
export function HubClosing() {
	return (
		<Container>
			<CtaOnDarkPanel {...hubCopy.closing} />
		</Container>
	);
}

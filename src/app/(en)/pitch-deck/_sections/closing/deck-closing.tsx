import { Container } from "@/components/container";
import { CtaOnDarkPanel } from "@/components/cta-on-dark-panel/cta-on-dark-panel";
import { pageClosings } from "@/data/page-closings";

export function DeckClosing() {
	return (
		<Container>
			<CtaOnDarkPanel {...pageClosings.pitchDeck} />
		</Container>
	);
}

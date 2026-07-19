import { CtaOnDarkPanel } from "@/components/cta-on-dark-panel/cta-on-dark-panel";
import { pageClosings } from "@/data/page-closings";

export function TalksClosing() {
	return (
		<section id="invite">
			<CtaOnDarkPanel {...pageClosings.talks} />
		</section>
	);
}

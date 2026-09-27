import { Accordion } from "@/components/accordion/accordion";
import { FaqJsonLD } from "@/components/faq/faq-json-ld";
import { deckFaqTitle, pitchDeckFaq } from "@/data/pitch-deck";
import { SectionShell } from "../../_shared/section-shell";

export function DeckFaq() {
	return (
		<SectionShell id="faq">
			<h2 className="font-display text-2xl font-semibold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
				<a href="#faq" className="hover:underline">
					{deckFaqTitle}
				</a>
			</h2>
			<div className="mt-8 max-w-3xl space-y-4">
				{pitchDeckFaq.map((qa) => (
					<Accordion key={qa.id} title={qa.q}>
						<p>{qa.a}</p>
					</Accordion>
				))}
			</div>
			<FaqJsonLD faqData={pitchDeckFaq} title={deckFaqTitle} />
		</SectionShell>
	);
}

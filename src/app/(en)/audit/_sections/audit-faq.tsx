import { Accordion } from "@/components/accordion/accordion";
import { Container } from "@/components/container";
import { FaqJsonLD } from "@/components/faq/faq-json-ld";
import { auditFaq, auditFaqTitle } from "@/data/audit";

export function AuditFaq() {
	return (
		<Container className="mt-16 sm:mt-24">
			<h2 className="font-display text-2xl font-semibold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
				{auditFaqTitle}
			</h2>
			<div className="mt-8 max-w-3xl space-y-4">
				{auditFaq.map((qa) => (
					<Accordion key={qa.id} title={qa.q}>
						<p>{qa.a}</p>
					</Accordion>
				))}
			</div>
			<FaqJsonLD faqData={auditFaq} title={auditFaqTitle} />
		</Container>
	);
}

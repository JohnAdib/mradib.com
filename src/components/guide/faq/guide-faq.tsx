import { Accordion } from "@/components/accordion/accordion";
import { FaqJsonLD } from "@/components/faq/faq-json-ld";
import type { IGuide } from "@/data/guides/guide-bundle";
import { SectionShell } from "../shell/section-shell";

/** The questions founders ask, as native accordions plus FAQ structured data. */
export function GuideFaq({ guide }: { guide: IGuide }) {
	const id = guide.anchors.faq;
	return (
		<SectionShell id={id}>
			<h2 className="font-display text-2xl font-semibold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
				<a href={`#${id}`} className="hover:underline">
					{guide.faqTitle}
				</a>
			</h2>
			<div className="mt-8 max-w-3xl space-y-4">
				{guide.faq.map((qa) => (
					<Accordion key={qa.id} title={qa.q}>
						<p>{qa.a}</p>
					</Accordion>
				))}
			</div>
			<FaqJsonLD faqData={guide.faq} title={guide.faqTitle} />
		</SectionShell>
	);
}

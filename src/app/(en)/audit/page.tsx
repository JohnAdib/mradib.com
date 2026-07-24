import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/json-ld/service-json-ld";
import { Reveal } from "@/components/reveal/reveal";
import { ogMetadata } from "@/lib/og-metadata";
import { AuditClosing } from "./_sections/audit-closing";
import { AuditDeliverables } from "./_sections/audit-deliverables";
import { AuditDimensionIndex } from "./_sections/audit-dimension-index";
import { AuditFaq } from "./_sections/audit-faq";
import { AuditFit } from "./_sections/audit-fit";
import { AuditHero } from "./_sections/audit-hero";
import { AuditPricing } from "./_sections/audit-pricing";
import { AuditProblem } from "./_sections/audit-problem";
import { AuditProcess } from "./_sections/audit-process";
import { AuditProof } from "./_sections/audit-proof";

export const metadata: Metadata = {
	title: "AI Engineering Readiness Audit",
	description:
		"A fixed-price, two-week audit for CTOs and VPs of Engineering. A scored readiness assessment across 7 dimensions, the evidence behind it, and a 90-day roadmap.",
	...ogMetadata("/audit"),
};

export default function Page() {
	return (
		<>
			{/* No-JS and pre-hydration fallback so scroll-revealed content is always visible. */}
			<noscript>
				<style>{".reveal-on-scroll{opacity:1;transform:none;}"}</style>
			</noscript>
			<ServiceJsonLd />
			<AuditHero />
			<section id="problem" className="scroll-mt-24">
				<Reveal>
					<AuditProblem />
				</Reveal>
			</section>
			<section id="whats-inside" className="scroll-mt-24">
				<Reveal>
					<AuditDeliverables />
				</Reveal>
				<Reveal>
					<AuditDimensionIndex />
				</Reveal>
			</section>
			<section id="how-it-works" className="scroll-mt-24">
				<Reveal>
					<AuditProcess />
				</Reveal>
			</section>
			<section id="why-me" className="scroll-mt-24">
				<Reveal>
					<AuditProof />
				</Reveal>
			</section>
			<section id="fit" className="scroll-mt-24">
				<Reveal>
					<AuditFit />
				</Reveal>
			</section>
			<section id="pricing" className="scroll-mt-24">
				<Reveal>
					<AuditPricing />
				</Reveal>
			</section>
			<section id="faq" className="scroll-mt-24">
				<Reveal>
					<AuditFaq />
				</Reveal>
			</section>
			<section id="book" className="scroll-mt-24">
				<AuditClosing />
			</section>
		</>
	);
}

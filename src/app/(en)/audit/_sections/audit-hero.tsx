import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { auditHero, auditOffer } from "@/data/audit";
import { AuditCtaButton } from "./audit-cta-button";

export function AuditHero() {
	return (
		<Container className="mt-16 sm:mt-24">
			<div className="max-w-2xl">
				<p className="reveal-rise text-sm font-medium tracking-wide text-accent-700 uppercase dark:text-accent-400">
					{auditOffer.name}
				</p>
				<h1 className="reveal-rise reveal-delay-1 mt-4 font-display text-4xl font-semibold tracking-tight text-zinc-800 sm:text-6xl dark:text-zinc-100">
					{auditHero.headline}{" "}
					<span className="italic text-accent-700 dark:text-accent-400">
						{auditHero.headlineAccent}
					</span>
				</h1>
				<p className="reveal-rise reveal-delay-2 mt-6 text-lg text-zinc-600 dark:text-zinc-400">
					{auditHero.subhead}
				</p>
				<div className="reveal-up reveal-delay-3 mt-8 flex flex-wrap items-center gap-4">
					<AuditCtaButton location="hero">
						{auditHero.ctaPrimaryLabel}
					</AuditCtaButton>
					<Button href={auditHero.ctaSecondaryHref} variant="secondary">
						{auditHero.ctaSecondaryLabel}
					</Button>
				</div>
			</div>
		</Container>
	);
}

import { Container } from "@/components/container";
import { PricingCard } from "@/components/pricing/pricing-card";
import {
	auditHero,
	auditOffer,
	auditPricing,
	auditPricingHeading,
	currentAuditPrice,
} from "@/data/audit";
import { AuditCtaButton } from "./audit-cta-button";

export function AuditPricing() {
	const price = currentAuditPrice();
	return (
		<Container className="mt-16 sm:mt-24">
			<p className="text-sm font-semibold tracking-wider text-accent-700 uppercase dark:text-accent-400">
				{auditPricingHeading.eyebrow}
			</p>
			<h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
				{auditPricingHeading.title}
			</h2>
			<div className="mt-10 max-w-2xl">
				<PricingCard
					name={auditOffer.name}
					priceDisplay={price.display}
					priceNote={auditOffer.priceNote}
					foundingCopy={price.founding ? auditPricing.foundingCopy : undefined}
					slotsLine={price.founding ? auditPricing.slotsLine : undefined}
					included={auditOffer.included}
					guarantee={auditOffer.guarantee}
					paperworkLine={auditOffer.paperworkLine}
					addOnsLine={auditOffer.addOnsLine}
				>
					<AuditCtaButton location="pricing">
						{auditHero.ctaPrimaryLabel}
					</AuditCtaButton>
				</PricingCard>
			</div>
		</Container>
	);
}

import type { JSX } from "react";
import type { Service, WithContext } from "schema-dts";
import { personId } from "@/components/json-ld/person-json-ld";
import {
	auditDeliverables,
	auditHero,
	auditOffer,
	currentAuditPrice,
} from "@/data/audit";
import { homepageUrl } from "@/lib/constants/url";

export function ServiceJsonLd(): JSX.Element {
	const jsonLd: WithContext<Service> = {
		"@context": "https://schema.org",
		"@type": "Service",
		"@id": `${homepageUrl}/audit#service`,
		name: auditOffer.name,
		serviceType: "AI engineering readiness audit",
		description: auditHero.subhead,
		url: `${homepageUrl}/audit`,
		provider: { "@id": personId },
		areaServed: "Remote",
		audience: { "@type": "Audience", audienceType: auditOffer.buyer },
		offers: {
			"@type": "Offer",
			price: currentAuditPrice().gbp,
			priceCurrency: "GBP",
			url: `${homepageUrl}/audit`,
		},
		serviceOutput: auditDeliverables.map((d) => ({
			"@type": "Thing" as const,
			name: d.title,
		})),
	};

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: static, build-time JSON-LD
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}

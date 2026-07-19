import type { JSX } from "react";
import type { ContactPage, WithContext } from "schema-dts";
import { personId } from "@/components/json-ld/person-json-ld";
import { profile } from "@/data/profile";
import { homepageUrl } from "@/lib/constants/url";

export function ContactPageJsonLd(): JSX.Element {
	const jsonLd: WithContext<ContactPage> = {
		"@context": "https://schema.org",
		"@type": "ContactPage",
		name: `Contact ${profile.name}`,
		url: `${homepageUrl}/contact`,
		mainEntity: { "@id": personId },
	};

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: static, build-time JSON-LD
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}

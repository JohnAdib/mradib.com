import type { JSX } from "react";
import type { WebSite, WithContext } from "schema-dts";
import { personId } from "@/components/json-ld/person-json-ld";
import { profile } from "@/data/profile";
import { homepageUrl } from "@/lib/constants/url";

export function WebSiteJsonLd(): JSX.Element {
	const jsonLd: WithContext<WebSite> = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${homepageUrl}/#website`,
		name: profile.brand,
		alternateName: profile.name,
		url: homepageUrl,
		publisher: { "@id": personId },
		inLanguage: ["en-GB", "fa"],
		// No SearchAction on purpose: the site has no search and Google
		// retired the sitelinks search box.
	};

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: static, build-time JSON-LD
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}

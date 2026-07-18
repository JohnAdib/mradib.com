import type { JSX } from "react";
import type { ProfilePage, WithContext } from "schema-dts";
import { personId } from "@/components/json-ld/person-json-ld";
import { profile } from "@/data/profile";
import { homepageUrl } from "@/lib/constants/url";

export function ProfilePageJsonLd(): JSX.Element {
	const jsonLd: WithContext<ProfilePage> = {
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		name: `About ${profile.name}`,
		url: `${homepageUrl}/about`,
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

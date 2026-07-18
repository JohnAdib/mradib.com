import type { Person, WithContext } from "schema-dts";
import { awardNames } from "@/data/awards";
import { profile } from "@/data/profile";
import { homepageUrl } from "@/lib/constants/url";

export const personId = `${homepageUrl}/#person`;

export function PersonJsonLd(): JSX.Element {
	const jsonLd: WithContext<Person> = {
		"@context": "https://schema.org",
		"@type": "Person",
		"@id": personId,
		name: profile.name,
		alternateName: profile.alternateNames,
		jobTitle: profile.jobTitle,
		description: profile.shortBio,
		url: homepageUrl,
		image: `${homepageUrl}/img/john-adib.jpg`,
		worksFor: {
			"@type": "Organization",
			name: profile.company.name,
			url: profile.company.url,
		},
		alumniOf: {
			"@type": "CollegeOrUniversity",
			name: profile.education.school,
		},
		address: {
			"@type": "PostalAddress",
			addressLocality: profile.location.city,
			addressCountry: profile.location.countryCode,
		},
		award: awardNames,
		knowsAbout: profile.knowsAbout,
		sameAs: profile.sameAs,
	};

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: static, build-time JSON-LD
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}

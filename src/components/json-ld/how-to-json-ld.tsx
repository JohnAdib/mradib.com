import type { JSX } from "react";
import type { HowTo, WithContext } from "schema-dts";

interface IHowToStep {
	name: string;
	text: string;
	url?: string;
}

interface IHowToJsonLd {
	name: string;
	description: string;
	steps: IHowToStep[];
}

/** HowTo structured data derived from the resume checklist, one step per fix. */
export function HowToJsonLd({
	name,
	description,
	steps,
}: IHowToJsonLd): JSX.Element {
	const jsonLd: WithContext<HowTo> = {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name,
		description,
		step: steps.map((step, index) => ({
			"@type": "HowToStep",
			position: index + 1,
			name: step.name,
			text: step.text,
			...(step.url ? { url: step.url } : {}),
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

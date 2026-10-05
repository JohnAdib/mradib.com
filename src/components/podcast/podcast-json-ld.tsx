import type { PodcastEpisode, WithContext } from "schema-dts";
import { personId } from "@/components/json-ld/person-json-ld";
import { podcastEpisode as episode } from "@/data/podcast/episode";
import { homepageUrl } from "@/lib/constants/url";

export function PodcastJsonLd() {
	const jsonLd: WithContext<PodcastEpisode> = {
		"@context": "https://schema.org",
		"@type": "PodcastEpisode",
		name: episode.title,
		description: episode.summary,
		datePublished: episode.date,
		duration: episode.durationISO,
		url: `${homepageUrl}${episode.path}`,
		sameAs: episode.url,
		isPartOf: { "@type": "PodcastSeries", name: episode.show },
		contributor: { "@id": personId },
		inLanguage: "en",
	};
	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: static podcast data
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}

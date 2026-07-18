import type { Event, WithContext } from "schema-dts";
import { personId } from "@/components/json-ld/person-json-ld";
import { profile } from "@/data/profile";
import type { ITalk } from "@/data/talks/talk-interface";
import { homepageUrl } from "@/lib/constants/url";

export function TalkEventJsonLd({ talk }: { talk: ITalk }): JSX.Element {
	const isOnline = talk.city === "Online";

	const jsonLd: WithContext<Event> = {
		"@context": "https://schema.org",
		"@type": "Event",
		name: `${talk.title} — ${talk.event}`,
		description: talk.summary,
		startDate: talk.date,
		eventAttendanceMode: isOnline
			? "https://schema.org/OnlineEventAttendanceMode"
			: "https://schema.org/OfflineEventAttendanceMode",
		location: isOnline
			? { "@type": "VirtualLocation", url: homepageUrl }
			: {
					"@type": "Place",
					name: talk.venue ?? talk.event,
					address: talk.city,
				},
		performer: { "@type": "Person", "@id": personId, name: profile.name },
		...(talk.slidesPdf && {
			workFeatured: {
				"@type": "CreativeWork",
				name: `${talk.title} — slides (PDF)`,
				url: `${homepageUrl}${talk.slidesPdf}`,
			},
		}),
	};

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: static, build-time JSON-LD
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}

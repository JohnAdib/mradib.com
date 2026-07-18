import { profile } from "@/data/profile";
import type { ITalk } from "@/data/talks/talk-interface";
import { homepageUrl } from "@/lib/constants/url";
import { formatDateTime } from "@/lib/datetime/format-date-time";

function whereLine(talk: ITalk): string {
	const host = talk.host ? ` (hosted by ${talk.host})` : "";
	return `${talk.event}${host}, ${talk.city}`;
}

/**
 * Formatted plain text of every talk, ready to paste into a CFP or speaker
 * application "previous talks" box. Pure, so it is easy to test.
 */
export function buildPreviousTalksText(talks: ITalk[]): string {
	const blocks = talks.map((talk) => {
		const audience = talk.audience ? ` · ${talk.audience}` : "";
		const lines = [
			talk.title,
			whereLine(talk),
			`${formatDateTime({ datetime: talk.date })}${audience}`,
		];
		if (talk.slidesPdf) {
			lines.push(`Slides: ${homepageUrl}${talk.slidesPdf}`);
		}
		return lines.join("\n");
	});

	return [`Previous talks, ${profile.name}`, "", blocks.join("\n\n")].join(
		"\n",
	);
}

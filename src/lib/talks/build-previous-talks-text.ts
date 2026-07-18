import { profile } from "@/data/profile";
import type { ITalk } from "@/data/talks/talk-interface";
import { homepageUrl } from "@/lib/constants/url";
import { formatDateTime } from "@/lib/datetime/format-date-time";

function whereLine(talk: ITalk): string {
	const host = talk.host ? ` (hosted by ${talk.host})` : "";
	return `${talk.event}${host}, ${talk.city}`;
}

function formatLabel(talk: ITalk): string {
	if (talk.format === "workshop") return " (Workshop)";
	if (talk.format === "panel") return " (Panel)";
	return "";
}

/**
 * Formatted plain text of every talk, ready to paste into a CFP or speaker
 * application "previous talks" box. Every line except the title carries an
 * emoji so the block reads as an indented list. Pure, so it is easy to test.
 */
export function buildPreviousTalksText(talks: ITalk[]): string {
	const blocks = talks.map((talk) => {
		const lines = [`${talk.title}${formatLabel(talk)}`];
		lines.push(`🎙️ ${whereLine(talk)}`);
		const attendees = talk.audience ? ` 👥 ${talk.audience}` : "";
		lines.push(`📅 ${formatDateTime({ datetime: talk.date })}${attendees}`);
		if (talk.path) {
			lines.push(`🔗 ${homepageUrl}${talk.path}`);
		}
		return lines.join("\n");
	});

	return [`Previous talks, ${profile.name}`, "", blocks.join("\n\n"), ""].join(
		"\n",
	);
}

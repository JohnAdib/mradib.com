import {
	PlayCircleIcon,
	PresentationChartBarIcon,
} from "@heroicons/react/24/outline";
import { LinkChipGrid } from "@/components/link-chip-grid";
import { YouTubeEmbed } from "@/components/video/youtube-embed";
import type { ITalk } from "@/data/talks/talk-interface";

// Embeds the recording when a talk has one. Otherwise it points at the talk
// page, which carries the slides, rather than deep linking to a file.
export function TalkMedia({ talk }: { talk: ITalk }) {
	if (talk.youtubeUrl) {
		return <YouTubeEmbed url={talk.youtubeUrl} title={talk.title} />;
	}

	if (!talk.path) {
		return null;
	}

	return (
		<LinkChipGrid
			chips={[
				{
					icon: talk.slidesPdf ? PresentationChartBarIcon : PlayCircleIcon,
					label: talk.slidesPdf ? "Slides" : "About the talk",
					url: talk.path,
				},
			]}
		/>
	);
}

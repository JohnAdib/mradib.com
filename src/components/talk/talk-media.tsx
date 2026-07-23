import {
	ArrowDownTrayIcon,
	PlayCircleIcon,
	VideoCameraIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType } from "react";
import { LinkChipGrid } from "@/components/link-chip-grid";
import { YouTubeEmbed } from "@/components/video/youtube-embed";
import type { ITalk, TalkResourceKind } from "@/data/talks/talk-interface";
import { getTalkResources } from "@/lib/talks/get-talk-resources";

// Only the resource kinds worth showing beside a proof card, not the full set.
const inlineIcons: Partial<
	Record<TalkResourceKind, ComponentType<{ className?: string }>>
> = {
	recording: VideoCameraIcon,
	youtube: PlayCircleIcon,
	slides: ArrowDownTrayIcon,
};

export function TalkMedia({ talk }: { talk: ITalk }) {
	if (talk.youtubeUrl) {
		return <YouTubeEmbed url={talk.youtubeUrl} title={talk.title} />;
	}

	const chips = getTalkResources(talk).flatMap((resource) => {
		const icon = inlineIcons[resource.kind];
		return icon ? [{ icon, label: resource.label, url: resource.url }] : [];
	});

	if (chips.length === 0) {
		return null;
	}

	return <LinkChipGrid chips={chips} />;
}

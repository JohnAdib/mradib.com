import {
	ArrowDownTrayIcon,
	CalendarDaysIcon,
	GlobeAltIcon,
	IdentificationIcon,
	LanguageIcon,
	PlayCircleIcon,
	VideoCameraIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType } from "react";
import { LinkChipGrid } from "@/components/link-chip-grid";
import type {
	ITalkResource,
	TalkResourceKind,
} from "@/data/talks/talk-interface";

const icons: Record<TalkResourceKind, ComponentType<{ className?: string }>> = {
	slides: ArrowDownTrayIcon,
	event: CalendarDaysIcon,
	recording: VideoCameraIcon,
	translation: LanguageIcon,
	youtube: PlayCircleIcon,
	website: GlobeAltIcon,
	provider: IdentificationIcon,
};

export function TalkResources({ resources }: { resources: ITalkResource[] }) {
	const chips = resources.map((resource) => ({
		icon: icons[resource.kind],
		label: resource.label,
		url: resource.url,
	}));

	return <LinkChipGrid chips={chips} />;
}

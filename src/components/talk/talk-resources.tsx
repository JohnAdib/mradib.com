import {
	ArrowDownTrayIcon,
	CalendarDaysIcon,
	GlobeAltIcon,
	IdentificationIcon,
	PlayCircleIcon,
	VideoCameraIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType } from "react";
import type {
	ITalkResource,
	TalkResourceKind,
} from "@/data/talks/talk-interface";

const icons: Record<TalkResourceKind, ComponentType<{ className?: string }>> = {
	slides: ArrowDownTrayIcon,
	event: CalendarDaysIcon,
	recording: VideoCameraIcon,
	youtube: PlayCircleIcon,
	website: GlobeAltIcon,
	provider: IdentificationIcon,
};

export function TalkResources({ resources }: { resources: ITalkResource[] }) {
	if (resources.length === 0) {
		return null;
	}

	return (
		<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
			{resources.map((resource) => {
				const Icon = icons[resource.kind];
				return (
					<a
						key={resource.kind}
						href={resource.url}
						target="_blank"
						rel="noopener noreferrer"
						className="group flex items-center gap-3 rounded-xl bg-white px-4 py-3 ring-1 ring-zinc-100 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-zinc-900/5 dark:bg-zinc-800/40 dark:ring-zinc-700/50 dark:hover:bg-zinc-800/70"
					>
						<span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-accent-50 ring-1 ring-accent-100 dark:bg-accent-400/10 dark:ring-accent-400/20">
							<Icon className="h-5 w-5 text-accent-700 dark:text-accent-400" />
						</span>
						<span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
							{resource.label}
						</span>
					</a>
				);
			})}
		</div>
	);
}

import type { ITalk } from "@/data/talks/talk-interface";
import { TalkTimeline } from "./talk-timeline";

export function UpcomingTalks({ talks }: { talks: ITalk[] }) {
	if (!talks.length) return null;
	const ordered = [...talks].sort((a, b) =>
		(a.date ?? "9999").localeCompare(b.date ?? "9999"),
	);
	return (
		<section
			aria-labelledby="upcoming-talks"
			className="mt-16 max-w-3xl sm:mt-20"
		>
			<h2
				id="upcoming-talks"
				className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
			>
				Upcoming talks
			</h2>
			<div className="mt-6">
				<TalkTimeline talks={ordered} />
			</div>
		</section>
	);
}

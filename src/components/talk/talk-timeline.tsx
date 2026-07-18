import type { ITalk } from "@/data/talks/talk-interface";
import { TalkTimelineItem } from "./talk-timeline-item";

export function TalkTimeline({ talks }: { talks: ITalk[] }) {
	return (
		<div>
			{talks.map((talk, index) => (
				<TalkTimelineItem
					key={talk.slug}
					talk={talk}
					last={index === talks.length - 1}
				/>
			))}
		</div>
	);
}

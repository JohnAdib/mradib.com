import { Card } from "@/components/card";
import type { ITalk } from "@/data/talks/talk-interface";
import { formatDateTime } from "@/lib/datetime/format-date-time";

export function TalkCard({ talk }: { talk: ITalk }) {
	const where = talk.venue
		? `${talk.event}, at ${talk.venue}`
		: `${talk.event} · ${talk.city}`;

	return (
		<article className="md:grid md:grid-cols-4 md:items-baseline">
			<Card className="md:col-span-3">
				<Card.Eyebrow className="md:hidden">
					{formatDateTime({ datetime: talk.date })}
				</Card.Eyebrow>
				<Card.Title href={talk.articlePath}>{talk.title}</Card.Title>
				<Card.Description>
					{where}
					{talk.audience ? `, ${talk.audience}.` : "."} {talk.summary}
				</Card.Description>
				<Card.Cta>
					{talk.slidesPdf ? "Story & slides (PDF)" : "Read the story"}
				</Card.Cta>
			</Card>
			<Card.Eyebrow
				as="time"
				dateTime={talk.date}
				className="mt-1 hidden md:block"
			>
				{formatDateTime({ datetime: talk.date })}
			</Card.Eyebrow>
		</article>
	);
}

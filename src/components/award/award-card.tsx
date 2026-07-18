import { Card } from "@/components/card";
import type { IAward } from "@/data/awards";

function awardYear(award: IAward): string {
	return award.date.slice(0, 4);
}

export function AwardCard({ award }: { award: IAward }) {
	const href = award.slug ? `/awards/${award.slug}` : undefined;

	return (
		<Card as="article">
			<Card.Eyebrow>
				{award.issuer} · {awardYear(award)}
			</Card.Eyebrow>
			<Card.Title href={href}>{award.name}</Card.Title>
			<Card.Description>{award.summary}</Card.Description>
			{href && <Card.Cta>Read the story</Card.Cta>}
		</Card>
	);
}

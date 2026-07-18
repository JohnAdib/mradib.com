import { Card } from "@/components/card";
import type { IAward } from "@/data/awards";
import { awardYear } from "@/lib/awards/award-date";

export function AwardCard({ award }: { award: IAward }) {
	const href = award.slug ? `/awards/${award.slug}` : undefined;
	const evidenceUrl = award.evidencePdf ?? award.badgeImages?.[0];

	return (
		<Card as="article">
			<Card.Eyebrow>
				{award.issuer} · {awardYear(award.date)}
			</Card.Eyebrow>
			<Card.Title href={href}>{award.name}</Card.Title>
			<Card.Description>{award.summary}</Card.Description>
			{href && <Card.Cta>Read the story</Card.Cta>}
			{!href && evidenceUrl && (
				<a
					href={evidenceUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="relative z-10 mt-4 text-sm font-medium text-accent-700 dark:text-accent-400"
				>
					View evidence →
				</a>
			)}
		</Card>
	);
}

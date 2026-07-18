import Link from "next/link";
import { AwardEvidence } from "@/components/award/award-evidence";
import { AwardFacts } from "@/components/award/award-facts";
import { Button } from "@/components/button";
import { Prose } from "@/components/prose";
import type { IAward } from "@/data/awards";
import { awardYear } from "@/lib/awards/award-date";

const footerLinkClass =
	"font-medium text-accent-700 transition hover:text-accent-600 dark:text-accent-400";

export function AwardContent({
	award,
	children,
}: {
	award: IAward;
	children: React.ReactNode;
}) {
	return (
		<>
			<header>
				<p className="text-sm font-medium text-accent-700 dark:text-accent-400">
					{award.issuer} · {awardYear(award.date)}
				</p>
				<h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
					{award.name}
				</h1>
			</header>
			<Prose className="mt-8">{children}</Prose>
			{award.evidencePdf && (
				<div className="mt-8">
					<AwardEvidence award={award} />
				</div>
			)}
			{award.externalUrl && (
				<div className="mt-8">
					<Button
						href={award.externalUrl}
						variant="secondary"
						target="_blank"
						rel="noopener noreferrer"
					>
						Verify with {award.issuer} ↗
					</Button>
				</div>
			)}
			<div className="mt-10">
				<AwardFacts award={award} />
			</div>
			<footer className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-zinc-100 pt-6 text-sm dark:border-zinc-700/40">
				<Link href="/talks" className={footerLinkClass}>
					See the talks →
				</Link>
				<Link href="/mentor" className={footerLinkClass}>
					Book a mentorship session →
				</Link>
			</footer>
		</>
	);
}

import Link from "next/link";
import type { AwardGroup, IAward } from "@/data/awards";
import { awardYear } from "@/lib/awards/award-date";

export const groupTitles: Record<AwardGroup, string> = {
	mentorship: "Mentorship",
	national: "National recognition & immigration",
	competition: "Competition",
	product: "Product & web",
	service: "Service & judging",
};

const groupOrder: AwardGroup[] = [
	"mentorship",
	"national",
	"competition",
	"product",
	"service",
];

const nameBase =
	"font-display text-lg text-zinc-800 sm:text-xl dark:text-zinc-100";
const nameLink = `${nameBase} transition-colors hover:text-accent-700 dark:hover:text-accent-400`;

function AwardName({ award }: { award: IAward }) {
	if (award.slug) {
		return (
			<Link href={`/awards/${award.slug}`} className={nameLink}>
				{award.name}
			</Link>
		);
	}
	const evidenceUrl = award.evidencePdf ?? award.badgeImages?.[0];
	if (evidenceUrl) {
		return (
			<a
				href={evidenceUrl}
				target="_blank"
				rel="noopener noreferrer"
				className={nameLink}
			>
				{award.name}
			</a>
		);
	}
	return <span className={nameBase}>{award.name}</span>;
}

function AwardRow({ award }: { award: IAward }) {
	return (
		<div className="grid grid-cols-[3.25rem_1fr] items-baseline gap-x-4 gap-y-0.5 px-3 py-4 transition-colors hover:bg-zinc-900/5 sm:grid-cols-[4rem_1fr_auto] dark:hover:bg-white/5">
			<span className="text-sm text-zinc-500 tabular-nums dark:text-zinc-400">
				{awardYear(award.date)}
			</span>
			<AwardName award={award} />
			<span className="col-start-2 text-sm text-zinc-500 sm:col-start-3 sm:text-right dark:text-zinc-400">
				{award.issuer}
			</span>
		</div>
	);
}

export function AwardGroupList({ awards }: { awards: IAward[] }) {
	return (
		<div className="mt-16 space-y-14">
			{groupOrder.map((group) => {
				const groupAwards = awards.filter((award) => award.group === group);
				if (groupAwards.length === 0) {
					return null;
				}
				return (
					<section key={group}>
						<h2 className="font-display text-xl font-semibold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
							{groupTitles[group]}
						</h2>
						<div className="mt-5 divide-y divide-zinc-900/10 border-y border-zinc-900/10 dark:divide-zinc-700/40 dark:border-zinc-700/40">
							{groupAwards.map((award) => (
								<AwardRow key={award.name} award={award} />
							))}
						</div>
					</section>
				);
			})}
		</div>
	);
}

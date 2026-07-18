import type { Metadata } from "next";
import { AdplistStreak } from "@/components/award/adplist-streak";
import { AwardFlagshipShowcase } from "@/components/award/award-flagship-showcase";
import { AwardGroupList } from "@/components/award/award-group-list";
import { CtaOnDarkPanel } from "@/components/cta-on-dark-panel/cta-on-dark-panel";
import { ItemListJsonLd } from "@/components/json-ld/item-list-json-ld";
import { SimpleLayout } from "@/components/simple-layout";
import { StatBand } from "@/components/stat-band";
import { awards, flagshipAwards, top1MonthsLabel } from "@/data/awards";
import { mentoringStats } from "@/data/mentoring-stats";
import { homepageUrl } from "@/lib/constants/url";

export const metadata: Metadata = {
	title: "Awards & Recognition",
	description:
		"John Adib has been named ADPList's World's Most Influential Mentor (2024), #1 Mentor in Europe (2024), endorsed as a UK Global Talent by Tech Nation (2024), and is a WorldSkills national medalist. Every award, with evidence.",
};

const stats = [
	{
		value: "#1",
		label: "mentor in Europe, 2024",
		href: "/awards/number-1-mentor-in-europe",
	},
	{
		value: "1 of 100",
		label: "ADPList100, worldwide",
		href: "/awards/worlds-most-influential-mentor",
	},
	{ value: top1MonthsLabel, label: "Top 1% months since 2024" },
	{
		value: `${mentoringStats.sessions}+`,
		label: "mentorship sessions",
		href: mentoringStats.profileUrl,
	},
];

const badgeAwards = awards.filter((award) => award.category === "badge");

export default function AwardsPage() {
	return (
		<SimpleLayout
			title="Awards & Recognition"
			intro="I've been named ADPList's World's Most Influential Mentor (2024), ranked #1 Mentor in Europe (2024), endorsed as a UK Global Talent by Tech Nation (2024), and medalled in national WorldSkills competitions. Here is all of it, with evidence and the stories behind it."
		>
			<ItemListJsonLd
				name="Awards and recognition of John Adib"
				items={flagshipAwards.map((award) => ({
					name: award.name,
					url: `${homepageUrl}/awards/${award.slug}`,
				}))}
			/>
			<StatBand stats={stats} />
			<AwardFlagshipShowcase awards={flagshipAwards} />
			<AdplistStreak />
			<AwardGroupList awards={badgeAwards} />
			<div className="mt-16">
				<CtaOnDarkPanel
					title="See the work behind the awards"
					desc="Awards are the paper trail. The real work is in the sessions and the talks. Book time with me, or see what I've been speaking about."
					linkPrimaryText="Book a mentorship session"
					linkPrimaryLink="/mentor"
					linkSecondaryText="See the talks"
					linkSecondaryLink="/talks"
				/>
			</div>
			<p className="mt-16 max-w-2xl border-t border-zinc-100 pt-8 text-base text-zinc-600 italic dark:border-zinc-700/40 dark:text-zinc-400">
				Awards are lagging indicators. The leading ones are the sessions, the
				students, and the shipped work. That is the part I actually control.
			</p>
		</SimpleLayout>
	);
}

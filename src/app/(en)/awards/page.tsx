import type { Metadata } from "next";
import { AwardGroupList } from "@/components/award/award-group-list";
import { ItemListJsonLd } from "@/components/json-ld/item-list-json-ld";
import { SimpleLayout } from "@/components/simple-layout";
import { adplistBadgeTimeline, awards, flagshipAwards } from "@/data/awards";
import { homepageUrl } from "@/lib/constants/url";

export const metadata: Metadata = {
	title: "Awards & Recognition",
	description:
		"John Adib has been named ADPList's World's Most Influential Mentor (2024), #1 Mentor in Europe (2024), endorsed as a UK Global Talent by Tech Nation (2024), and is a WorldSkills national medalist. Every award, with evidence.",
};

function AdplistTimeline() {
	return (
		<section className="mt-16">
			<h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
				ADPList recognition, month after month
			</h2>
			<p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
				Beyond the headline awards, the recognition I value most is the boring
				kind — showing up every month:
			</p>
			<ul className="mt-6 max-w-2xl list-inside list-[square] space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
				{adplistBadgeTimeline.map((line) => (
					<li key={line}>{line}</li>
				))}
			</ul>
		</section>
	);
}

export default function AwardsPage() {
	return (
		<SimpleLayout
			title="Awards & Recognition"
			intro="I've been named ADPList's World's Most Influential Mentor (2024), ranked #1 Mentor in Europe (2024), endorsed as a UK Global Talent by Tech Nation (2024), and medalled in national WorldSkills competitions. Here is all of it — with evidence, and with the stories behind it."
		>
			<ItemListJsonLd
				name="Awards and recognition of John Adib"
				items={flagshipAwards.map((award) => ({
					name: award.name,
					url: `${homepageUrl}/awards/${award.slug}`,
				}))}
			/>
			<AwardGroupList awards={awards} />
			<AdplistTimeline />
			<p className="mt-16 max-w-2xl border-t border-zinc-100 pt-8 text-base text-zinc-600 italic dark:border-zinc-700/40 dark:text-zinc-400">
				Awards are lagging indicators. The leading ones are the sessions, the
				students, and the shipped work — that's the part I actually control.
			</p>
		</SimpleLayout>
	);
}

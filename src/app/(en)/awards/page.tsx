import type { Metadata } from "next";
import { AdplistStreak } from "@/components/award/adplist-streak";
import { AwardFlagshipShowcase } from "@/components/award/award-flagship-showcase";
import { AwardGroupList } from "@/components/award/award-group-list";
import { Container } from "@/components/container";
import { CtaOnDarkPanel } from "@/components/cta-on-dark-panel/cta-on-dark-panel";
import { ItemListJsonLd } from "@/components/json-ld/item-list-json-ld";
import { awards, flagshipAwards } from "@/data/awards";
import { pageClosings } from "@/data/page-closings";
import { homepageUrl } from "@/lib/constants/url";
import { AwardsHero } from "./_sections/awards-hero";

export const metadata: Metadata = {
	title: "Awards & Recognition",
	description:
		"John Adib has been named ADPList's World's Most Influential Mentor (2024), #1 Mentor in Europe (2024), endorsed as a UK Global Talent by Tech Nation (2024), and is a WorldSkills national medalist. Every award, with evidence.",
};

const badgeAwards = awards.filter((award) => award.category === "badge");

export default function AwardsPage() {
	return (
		<>
			<AwardsHero />
			<Container className="mt-16 sm:mt-20">
				<ItemListJsonLd
					name="Awards and recognition of John Adib"
					items={flagshipAwards.map((award) => ({
						name: award.name,
						url: `${homepageUrl}/awards/${award.slug}`,
					}))}
				/>
				<section id="flagship" className="scroll-mt-24">
					<AwardFlagshipShowcase awards={flagshipAwards} />
				</section>
				<section id="badges" className="scroll-mt-24">
					<AdplistStreak />
				</section>
				<section id="ledger" className="scroll-mt-24">
					<AwardGroupList awards={badgeAwards} />
				</section>
				<CtaOnDarkPanel {...pageClosings.awards} />
			</Container>
		</>
	);
}

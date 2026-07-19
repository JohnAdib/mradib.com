import type { Metadata } from "next";
import { AdplistStreak } from "@/components/award/adplist-streak";
import { AwardFlagshipShowcase } from "@/components/award/award-flagship-showcase";
import { AwardGroupList } from "@/components/award/award-group-list";
import { Container } from "@/components/container";
import { CtaOnDarkPanel } from "@/components/cta-on-dark-panel/cta-on-dark-panel";
import { ItemListJsonLd } from "@/components/json-ld/item-list-json-ld";
import { Reveal } from "@/components/reveal/reveal";
import { awards, flagshipAwards } from "@/data/awards";
import { pageClosings } from "@/data/page-closings";
import { homepageUrl } from "@/lib/constants/url";
import { ogMetadata } from "@/lib/og-metadata";
import { AwardsHero } from "./_sections/awards-hero";

export const metadata: Metadata = {
	title: "Awards & Recognition",
	description:
		"World's Most Influential Mentor. #1 Mentor in Europe. UK Global Talent. WorldSkills national medalist. Every award John Adib holds, with the evidence.",
	...ogMetadata("/awards"),
};

const badgeAwards = awards.filter((award) => award.category === "badge");

export default function AwardsPage() {
	return (
		<>
			{/* No-JS and pre-hydration fallback so scroll-revealed content is always visible. */}
			<noscript>
				<style>{".reveal-on-scroll{opacity:1;transform:none;}"}</style>
			</noscript>
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
					<Reveal>
						<AwardFlagshipShowcase awards={flagshipAwards} />
					</Reveal>
				</section>
				<section id="badges" className="scroll-mt-24">
					<Reveal>
						<AdplistStreak />
					</Reveal>
				</section>
				<section id="ledger" className="scroll-mt-24">
					<Reveal>
						<AwardGroupList awards={badgeAwards} />
					</Reveal>
				</section>
				<CtaOnDarkPanel {...pageClosings.awards} />
			</Container>
		</>
	);
}

import type { Metadata } from "next";
import { HomeHero } from "@/components/home/home-hero";
import { HomeInvitation } from "@/components/home/home-invitation";
import { HomeNow } from "@/components/home/home-now";
import { HomeRecognition } from "@/components/home/home-recognition";
import { HomeRise } from "@/components/home/home-rise";
import { profile } from "@/data/profile";
import { pageAlternates } from "@/lib/i18n/page-alternates";

export const metadata: Metadata = {
	title: { absolute: profile.titleTag },
	description: profile.shortBio,
	alternates: pageAlternates("/"),
};

export default function Home() {
	return (
		<>
			{/* No-JS and pre-hydration fallback so scroll-revealed content is always visible. */}
			<noscript>
				<style>{".reveal-on-scroll{opacity:1;transform:none;}"}</style>
			</noscript>
			<HomeHero />
			<section id="rise" className="scroll-mt-24">
				<HomeRise />
			</section>
			<section id="recognition" className="scroll-mt-24">
				<HomeRecognition />
			</section>
			<section id="now" className="scroll-mt-24">
				<HomeNow />
			</section>
			<section id="invitation" className="scroll-mt-24">
				<HomeInvitation />
			</section>
		</>
	);
}

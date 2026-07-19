import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ProfilePageJsonLd } from "@/components/json-ld/profile-page-json-ld";
import { AboutAiFirst } from "./_sections/about-ai-first";
import { AboutChildhood } from "./_sections/about-childhood";
import { AboutClosing } from "./_sections/about-closing";
import { AboutFounder } from "./_sections/about-founder";
import { AboutGlobalTalent } from "./_sections/about-global-talent";
import { AboutHardwareStore } from "./_sections/about-hardware-store";
import { AboutHero } from "./_sections/about-hero";
import { AboutHuman } from "./_sections/about-human";
import { AboutIcdl } from "./_sections/about-icdl";
import { AboutJibres } from "./_sections/about-jibres";
import { AboutLondon } from "./_sections/about-london";
import { AboutMasters } from "./_sections/about-masters";
import { AboutMentorship } from "./_sections/about-mentorship";
import { AboutSpark } from "./_sections/about-spark";
import { AboutTeaching } from "./_sections/about-teaching";
import { AboutWindows } from "./_sections/about-windows";

export const metadata: Metadata = {
	title: "About John Adib",
	description:
		"The story of John Adib: from a childhood spent building his first computer to a 2× startup co-founder and one of the world's most influential engineering mentors, now building AI-first in London.",
};

export default function About() {
	return (
		<>
			{/* No-JS and pre-hydration fallback so scroll-revealed content is always visible. */}
			<noscript>
				<style>{".reveal-on-scroll{opacity:1;transform:none;}"}</style>
			</noscript>
			<ProfilePageJsonLd />
			<Container className="mt-16 sm:mt-28">
				<AboutHero />
			</Container>
			<Container className="mt-24 sm:mt-32">
				<div className="mx-auto max-w-2xl lg:max-w-3xl">
					<AboutChildhood />
					<AboutWindows />
					<AboutHardwareStore />
					<AboutIcdl />
					<AboutSpark />
					<AboutTeaching />
					<AboutFounder />
					<AboutJibres />
					<AboutMasters />
					<AboutLondon />
					<AboutGlobalTalent />
					<AboutAiFirst />
					<AboutMentorship />
					<AboutHuman />
					<AboutClosing />
				</div>
			</Container>
		</>
	);
}

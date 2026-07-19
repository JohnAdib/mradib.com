import type { Metadata } from "next";
import { HomeAiFirst } from "@/components/home/home-ai-first";
import { HomeClosing } from "@/components/home/home-closing";
import { HomeHero } from "@/components/home/home-hero";
import { HomeHighlights } from "@/components/home/home-highlights";
import { HomePersonal } from "@/components/home/home-personal";
import { HomeStats } from "@/components/home/home-stats";
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
			<HomeHero />
			<HomeStats />
			<HomeAiFirst />
			<HomeHighlights />
			<HomePersonal />
			<HomeClosing />
		</>
	);
}

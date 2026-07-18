import { HomeAiFirst } from "@/components/home/home-ai-first";
import { HomeClosing } from "@/components/home/home-closing";
import { HomeHero } from "@/components/home/home-hero";
import { HomeHighlights } from "@/components/home/home-highlights";
import { HomePersonal } from "@/components/home/home-personal";
import { HomeStats } from "@/components/home/home-stats";

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

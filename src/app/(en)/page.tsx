import { HomeAiFirst } from "@/components/home/home-ai-first";
import { HomeHero } from "@/components/home/home-hero";
import { HomeHighlights } from "@/components/home/home-highlights";
import { HomePersonal } from "@/components/home/home-personal";
import { HomeStats } from "@/components/home/home-stats";
import { BookMentorshipSession } from "@/components/sections/book-mentorship-session";

export default function Home() {
	return (
		<>
			<HomeHero />
			<HomeStats />
			<HomeAiFirst />
			<HomeHighlights />
			<HomePersonal />
			<BookMentorshipSession
				subTitle="Free, always"
				title="Book a Mentorship Session"
				linkText="Register on ADPList"
				linkDesc="and pick a slot, bring a real problem."
			/>
		</>
	);
}

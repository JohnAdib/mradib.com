import { HomeAiFirst } from "@/components/home/home-ai-first";
import { HomeAwards } from "@/components/home/home-awards";
import { HomeHero } from "@/components/home/home-hero";
import { HomePersonal } from "@/components/home/home-personal";
import { HomeSpeaking } from "@/components/home/home-speaking";
import { HomeStats } from "@/components/home/home-stats";
import { HomeWriting } from "@/components/home/home-writing";
import { BookMentorshipSession } from "@/components/sections/book-mentorship-session";

export default function Home() {
	return (
		<>
			<HomeHero />
			<HomeStats />
			<HomeAwards />
			<HomeAiFirst />
			<HomeSpeaking />
			<HomeWriting />
			<HomePersonal />
			<BookMentorshipSession
				subTitle="Free, always"
				title="Book a Mentorship Session"
				linkText="Register on ADPList"
				linkDesc="and pick a slot — bring a real problem."
			/>
		</>
	);
}

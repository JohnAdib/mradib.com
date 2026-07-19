import type { Metadata } from "next";
import { Container } from "@/components/container";
import Faq from "@/components/faq/faq";
import { BookMentorshipSession } from "@/components/sections/book-mentorship-session";
import { pageAlternates } from "@/lib/i18n/page-alternates";
import { mentorFaq } from "./_sections/mentor-faq-data";
import { MentorHero } from "./_sections/mentor-hero";
import { MentorRecognition } from "./_sections/mentor-recognition";
import { MentorStats } from "./_sections/mentor-stats";
import { MentorTopics } from "./_sections/mentor-topics";

export const metadata: Metadata = {
	title: "Mentorship",
	description:
		"John Adib has run 600+ mentorship sessions on ADPList, where he was named the World's Most Influential Mentor of 2024 and #1 Mentor in Europe. Book a 1:1 on engineering careers, resume reviews, or tech immigration.",
	alternates: pageAlternates("/mentor"),
};

export default function Page() {
	return (
		<>
			<MentorHero />
			<MentorTopics />
			<MentorStats />
			<MentorRecognition />

			<section id="faq">
				<Container>
					<Faq list={mentorFaq} />
				</Container>
			</section>

			<section id="book">
				<BookMentorshipSession
					subTitle="Ready when you are."
					title="Book a Mentorship Session"
					linkText="Register on ADPList"
					linkDesc="and book a 1:1 session with me today!"
				/>
			</section>
		</>
	);
}

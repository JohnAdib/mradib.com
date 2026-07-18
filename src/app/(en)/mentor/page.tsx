import {
	CommandLineIcon,
	DocumentCheckIcon,
	GlobeEuropeAfricaIcon,
} from "@heroicons/react/20/solid";
import type { Metadata } from "next";
import type { ComponentType } from "react";
import { Container } from "@/components/container";
import Faq from "@/components/faq/faq";
import { BookMentorshipSession } from "@/components/sections/book-mentorship-session";
import { FeatureWithFullWidthImage } from "@/components/sections/feature-with-full-width-image";
import imgMradibMentoring from "./_img/mradib-mentoring.png";
import { mentorFaq } from "./_sections/mentor-faq-data";
import { MentorRecognition } from "./_sections/mentor-recognition";
import { MentorStats } from "./_sections/mentor-stats";

type IconType = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

interface ISectionFeature {
	name: string;
	description: string;
	icon: IconType;
}

export const metadata: Metadata = {
	title: "Mentorship",
	description:
		"John Adib has run 600+ mentorship sessions on ADPList, where he was named the World's Most Influential Mentor of 2024 and #1 Mentor in Europe. Book a 1:1 on engineering careers, resume reviews, or tech immigration.",
};

export default function Page() {
	const featuresList: ISectionFeature[] = [
		{
			name: "Software Engineering",
			description:
				"Get guidance on best practices, coding techniques, and career growth in software engineering.",
			icon: CommandLineIcon as IconType,
		},
		{
			name: "Resume Review",
			description:
				"Receive personalized feedback to improve your resume and stand out to employers.",
			icon: DocumentCheckIcon as IconType,
		},
		{
			name: "Tech Immigration Success",
			description:
				"Navigate the complexities of tech immigration with tips and advice based on my own experience.",
			icon: GlobeEuropeAfricaIcon as IconType,
		},
	];

	return (
		<>
			<FeatureWithFullWidthImage
				subTitle="Wanna level up your tech career?"
				title="Mentorship with MrAdib"
				image={imgMradibMentoring}
				features={featuresList}
			>
				Hello! I'm John Adib, an Engineering Manager and 2× startup co-founder
				with a passion for helping others succeed. Whether you're looking to
				enhance your coding skills, polish your resume, conquer job interviews,
				or navigate tech immigration, I'm here to help. I keep a limited number
				of free slots open.
			</FeatureWithFullWidthImage>

			<MentorStats />
			<MentorRecognition />

			<Container>
				<Faq list={mentorFaq} />
			</Container>

			<BookMentorshipSession
				subTitle="Ready to take the next step?"
				title="Book a Mentorship Session"
				linkText="Register on ADPList"
				linkDesc="and book a 1:1 session with me today!"
			/>
		</>
	);
}

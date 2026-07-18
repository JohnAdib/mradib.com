import type { Metadata } from "next";
import { Card } from "@/components/card";
import { SimpleLayout } from "@/components/simple-layout";
import { mentoringStats } from "@/data/mentoring-stats";
import { urlSocial } from "@/lib/constants/url-social";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Contact John Adib. Book a free mentorship session on ADPList, invite him to speak, or reach out on LinkedIn.",
};

export default function Page() {
	return (
		<SimpleLayout
			title="Contact"
			intro="The right door depends on what you need. All of them are open."
		>
			<div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-3">
				<Card as="article">
					<Card.Title href={mentoringStats.profileUrl}>Mentorship</Card.Title>
					<Card.Description>
						Free 1:1 sessions on engineering careers, resumes, interviews, and
						tech immigration, booked through ADPList.
					</Card.Description>
					<Card.Cta>Book on ADPList</Card.Cta>
				</Card>
				<Card as="article">
					<Card.Title href="/talks#invite">Speaking & podcasts</Card.Title>
					<Card.Description>
						Conference talks, meetups, podcasts, or an internal session for your
						team: AI-first development, design systems, leadership.
					</Card.Description>
					<Card.Cta>Invite me to speak</Card.Cta>
				</Card>
				<Card as="article">
					<Card.Title href={urlSocial.linkedin}>Everything else</Card.Title>
					<Card.Description>
						Say hello on LinkedIn, or email Mr.JohnAdib@Gmail.com. I read
						everything.
					</Card.Description>
					<Card.Cta>Find me on LinkedIn</Card.Cta>
				</Card>
			</div>
		</SimpleLayout>
	);
}

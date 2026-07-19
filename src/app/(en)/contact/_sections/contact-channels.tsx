import {
	AcademicCapIcon,
	ChatBubbleLeftRightIcon,
	DocumentTextIcon,
	MicrophoneIcon,
} from "@heroicons/react/24/outline";
import { Container } from "@/components/container";
import { mentoringStats } from "@/data/mentoring-stats";
import { urlSocial } from "@/lib/constants/url-social";
import { ChannelTile, type IChannel } from "./contact-channel-tile";

const channels: IChannel[] = [
	{
		icon: AcademicCapIcon,
		title: "Mentorship",
		description: `${mentoringStats.sessions}+ sessions and counting. Grab a free slot and book a 1:1 right there.`,
		cta: "Explore mentorship",
		href: "/mentor",
	},
	{
		id: "speak",
		icon: MicrophoneIcon,
		title: "Speaking invitations",
		description:
			"Bringing me to your stage? Send the event, date, audience, and topic.",
		cta: "Send an invitation",
		emailTag: "talk",
		emailSubject: "Speaking invitation",
	},
	{
		icon: DocumentTextIcon,
		title: "My CV",
		description:
			"The formal version of the story, hand-coded in HTML and CSS. It even exports itself to PDF.",
		cta: "View my CV",
		href: urlSocial.resume,
		external: true,
	},
	{
		icon: ChatBubbleLeftRightIcon,
		title: "Everything else",
		description: "A question, an idea, or a plain hello. Say it on LinkedIn.",
		cta: "Say hello on LinkedIn",
		href: urlSocial.linkedin,
		external: true,
	},
];

export function ContactChannels() {
	return (
		<Container className="mt-16 sm:mt-20">
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
				{channels.map((channel) => (
					<ChannelTile key={channel.title} channel={channel} />
				))}
			</div>
		</Container>
	);
}

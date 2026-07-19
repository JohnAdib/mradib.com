import {
	AcademicCapIcon,
	ChatBubbleLeftRightIcon,
	MicrophoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import type { ComponentType } from "react";
import { Container } from "@/components/container";
import { mentoringStats } from "@/data/mentoring-stats";
import { profile } from "@/data/profile";
import { urlSocial } from "@/lib/constants/url-social";

interface IChannel {
	id?: string;
	icon: ComponentType<{ className?: string }>;
	title: string;
	description: string;
	cta: string;
	href: string;
	external?: boolean;
}

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
		href: `mailto:${profile.email}?subject=Speaking%20invitation`,
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

const tileClass =
	"group flex min-w-0 scroll-mt-24 flex-col rounded-3xl bg-surface p-7 ring-1 ring-zinc-900/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/5 dark:bg-zinc-800/40 dark:ring-zinc-700/50 dark:hover:bg-zinc-800/70";

function ChannelTile({ channel }: { channel: IChannel }) {
	const Icon = channel.icon;
	return (
		<Link
			id={channel.id}
			href={channel.href}
			target={channel.external ? "_blank" : undefined}
			rel={channel.external ? "noopener noreferrer" : undefined}
			className={tileClass}
		>
			<span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 ring-1 ring-accent-100 dark:bg-accent-400/10 dark:ring-accent-400/20">
				<Icon className="h-5 w-5 text-accent-700 dark:text-accent-400" />
			</span>
			<h2 className="mt-5 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
				{channel.title}
			</h2>
			<p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
				{channel.description}
			</p>
			<p className="mt-5 text-sm font-medium text-accent-700 transition group-hover:text-accent-600 dark:text-accent-400">
				{channel.cta} →
			</p>
		</Link>
	);
}

export function ContactChannels() {
	return (
		<Container className="mt-16 sm:mt-20">
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{channels.map((channel) => (
					<ChannelTile key={channel.title} channel={channel} />
				))}
			</div>
		</Container>
	);
}

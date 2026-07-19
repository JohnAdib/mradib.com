import Link from "next/link";
import type { ComponentType } from "react";
import type { EmailTag } from "@/components/email/email-address";
import { EmailLink } from "@/components/email/email-link";

export interface IChannel {
	id?: string;
	icon: ComponentType<{ className?: string }>;
	title: string;
	description: string;
	cta: string;
	href?: string;
	external?: boolean;
	emailTag?: EmailTag;
	emailSubject?: string;
}

const tileClass =
	"group flex min-w-0 scroll-mt-24 flex-col rounded-3xl bg-surface p-7 ring-1 ring-zinc-900/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/5 dark:bg-zinc-800/40 dark:ring-zinc-700/50 dark:hover:bg-zinc-800/70";

function TileContent({ channel }: { channel: IChannel }) {
	const Icon = channel.icon;
	return (
		<>
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
		</>
	);
}

export function ChannelTile({ channel }: { channel: IChannel }) {
	if (channel.emailTag) {
		return (
			<EmailLink
				id={channel.id}
				tag={channel.emailTag}
				subject={channel.emailSubject}
				className={tileClass}
			>
				<TileContent channel={channel} />
			</EmailLink>
		);
	}
	return (
		<Link
			id={channel.id}
			href={channel.href ?? "/contact"}
			target={channel.external ? "_blank" : undefined}
			rel={channel.external ? "noopener noreferrer" : undefined}
			className={tileClass}
		>
			<TileContent channel={channel} />
		</Link>
	);
}

import { Button } from "@/components/button";

export function TalksInvite() {
	return (
		<section
			id="invite"
			className="max-w-3xl scroll-mt-24 rounded-3xl bg-accent-50/60 p-8 ring-1 ring-accent-100 sm:p-10 dark:bg-accent-400/5 dark:ring-accent-400/15"
		>
			<h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
				Invite me to speak
			</h2>
			<p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
				I love sharing what actually works, and what didn't. Topics: AI-first
				development and architecture, design systems at scale, engineering
				leadership, and developer productivity. Formats: conference talks,
				meetups, workshops, podcasts, and internal team sessions.
			</p>
			<p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
				Based in London, happy to travel, and always up for a good developer
				community.
			</p>
			<Button
				href="mailto:Mr.JohnAdib@Gmail.com"
				variant="primary"
				className="mt-6"
			>
				Mr.JohnAdib@Gmail.com
			</Button>
		</section>
	);
}

export function TalksInvite({ gitNationUrl }: { gitNationUrl: string }) {
	const linkClass =
		"font-medium text-accent-700 transition hover:text-accent-600 dark:text-accent-400";

	return (
		<section id="invite" className="mt-20 max-w-3xl scroll-mt-24">
			<h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
				Invite me to speak
			</h2>
			<p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
				I love sharing what actually works, and what didn't. Topics I cover:
				AI-first development and architecture, design systems at scale,
				engineering leadership, and developer productivity. Formats: conference
				talks, meetups, podcasts, and internal team sessions.
			</p>
			<p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
				The fastest way to reach me is email,{" "}
				<a href="mailto:Mr.JohnAdib@Gmail.com" className={linkClass}>
					Mr.JohnAdib@Gmail.com
				</a>
				, or find me on{" "}
				<a
					href={gitNationUrl}
					target="_blank"
					rel="noopener noreferrer"
					className={linkClass}
				>
					GitNation
				</a>
				. Based in London, happy to travel, and always up for a good developer
				community.
			</p>
		</section>
	);
}

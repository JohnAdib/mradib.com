import Image from "next/image";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { SocialMediaLinks } from "@/components/social-media-links";
import { mentoringStats } from "@/data/mentoring-stats";
import { experienceYears } from "@/data/profile";

export function HomeHero() {
	return (
		<Container className="mt-10 sm:mt-16">
			<div className="grid grid-cols-1 gap-y-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-x-16">
				<div className="max-w-2xl">
					<h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
						<span className="reveal-up block">Engineering leader.</span>
						<span className="reveal-up reveal-delay-1 block">
							2× startup co-founder.
						</span>
						<span className="reveal-up reveal-delay-2 mt-3 block text-2xl text-accent-700 sm:text-3xl dark:text-accent-400">
							Mentor to hundreds of engineers.
						</span>
					</h1>
					<p className="reveal-up reveal-delay-3 mt-6 text-base text-zinc-600 dark:text-zinc-400">
						I'm John Adib, an engineering leader in London. Over{" "}
						{experienceYears}+ years I've co-founded two startups, taught 2,000+
						students, and run {mentoringStats.sessions}+ mentorship sessions on
						ADPList, where I was named the World's Most Influential Mentor of
						2024. These days I'm focused on AI-first development: changing how
						teams work, not just how fast they ship.
					</p>
					<div className="reveal-up reveal-delay-4 mt-8 flex flex-wrap items-center gap-4">
						<Button href="/mentor">Explore mentorship</Button>
						<Button href="/contact" variant="secondary">
							Invite me to speak
						</Button>
					</div>
					<div className="reveal-up reveal-delay-4 mt-8">
						<SocialMediaLinks />
					</div>
				</div>
				<div className="reveal-up reveal-delay-2 hidden lg:block lg:pt-2">
					<Image
						src="/img/john-adib-hero.jpg"
						alt="John Adib, Engineering Manager in London"
						width={952}
						height={952}
						priority
						className="aspect-square w-72 rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
					/>
				</div>
			</div>
		</Container>
	);
}

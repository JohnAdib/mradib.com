import Image from "next/image";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { HomeIntro } from "@/components/home/home-intro";
import { SocialMediaLinks } from "@/components/social-media-links";

export function HomeHero() {
	return (
		<Container className="mt-10 sm:mt-16">
			<div className="grid grid-cols-1 gap-y-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-x-16">
				<div className="max-w-2xl">
					<h1 className="font-display text-4xl font-semibold tracking-tight text-balance text-zinc-800 sm:text-5xl dark:text-zinc-100">
						<span className="reveal-rise block">
							I build. I teach. I mentor.
						</span>
						<span className="reveal-rise reveal-delay-1 mt-3 block text-2xl text-accent-700 sm:text-3xl dark:text-accent-400">
							It started with a keyboard and no computer.
						</span>
					</h1>
					<div className="reveal-rise reveal-delay-2 mt-5">
						<HomeIntro />
					</div>
					<div className="reveal-up reveal-delay-3 mt-8 flex flex-wrap items-center gap-4">
						<Button href="/about">Read the story</Button>
						<Button href="/contact" variant="secondary">
							Get in touch
						</Button>
					</div>
					<div className="reveal-up reveal-delay-4 mt-8">
						<SocialMediaLinks />
					</div>
				</div>
				<div className="reveal-up reveal-delay-2 hidden lg:block lg:pt-2">
					{/* Lazy images with no layout box are not fetched, so phones skip the download. */}
					<Image
						src="/img/john-adib-hero-576.jpg"
						alt="John Adib, engineering leader in London"
						width={576}
						height={576}
						loading="lazy"
						className="aspect-square w-72 rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
					/>
				</div>
			</div>
		</Container>
	);
}

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { HomeIntro } from "@/components/home/home-intro";
import { SocialMediaLinks } from "@/components/social-media-links";
import { TiltCard } from "@/components/tilt-card/tilt-card";

export function HomeHero() {
	return (
		<Container className="mt-6 sm:mt-16">
			<div className="grid grid-cols-1 gap-y-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-x-16 xl:grid-cols-[minmax(0,1fr)_17rem]">
				<div className="max-w-2xl">
					<h1 className="font-display text-5xl font-semibold tracking-tight text-balance text-zinc-800 sm:text-6xl dark:text-zinc-100">
						<span className="reveal-rise block">John Adib</span>
						<span className="reveal-rise reveal-delay-1 mt-2 block text-2xl text-accent-700 sm:mt-3 sm:text-3xl dark:text-accent-400">
							Still building, every single day.
						</span>
					</h1>
					<div className="reveal-rise reveal-delay-2 mt-4 sm:mt-5">
						<HomeIntro />
					</div>
					<div className="reveal-up reveal-delay-3 mt-6 flex flex-wrap items-center gap-4 sm:mt-8">
						<Button href="/about">Read the story</Button>
						<Button href="/contact" variant="secondary">
							Get in touch
						</Button>
					</div>
					<div className="reveal-up reveal-delay-4 mt-5 sm:mt-8">
						<SocialMediaLinks />
					</div>
					<div className="reveal-up reveal-delay-4 mt-6 sm:mt-10 lg:hidden">
						<picture className="block">
							{/* Keep the mobile landscape out of the desktop download path. */}
							<source
								media="(min-width: 1024px)"
								srcSet="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
							/>
							<source
								type="image/avif"
								srcSet="/img/john-adib-london-landscape-768.avif 768w, /img/john-adib-london-landscape-1152.avif 1152w"
								sizes="(max-width: 639px) calc(100vw - 2rem), 42rem"
							/>
							<img
								src="/img/john-adib-london-landscape-768.jpg"
								srcSet="/img/john-adib-london-landscape-768.jpg 768w, /img/john-adib-london-landscape-1152.jpg 1152w"
								sizes="(max-width: 639px) calc(100vw - 2rem), 42rem"
								alt="John Adib outdoors in London"
								width={1152}
								height={768}
								loading="eager"
								decoding="async"
								fetchPriority="high"
								className="h-auto w-full rounded-2xl bg-zinc-100 shadow-sm shadow-zinc-900/10 dark:bg-zinc-800"
							/>
						</picture>
					</div>
				</div>
				<div className="reveal-up reveal-delay-2 hidden lg:block lg:pt-2">
					<TiltCard maxTilt={5} restingRotate={2} tracking="viewport">
						<picture className="block">
							{/* The transparent mobile source prevents this desktop-only LCP image from downloading below lg. */}
							<source
								media="(max-width: 1023px)"
								srcSet="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
							/>
							<source
								type="image/avif"
								srcSet="/img/john-adib-london-portrait-720.avif"
							/>
							<img
								src="/img/john-adib-london-portrait-720.jpg"
								alt="John Adib seated outdoors in London"
								width={720}
								height={1561}
								decoding="async"
								fetchPriority="high"
								className="h-auto w-full rounded-2xl bg-zinc-100 shadow-sm shadow-zinc-900/10 dark:bg-zinc-800"
							/>
						</picture>
					</TiltCard>
				</div>
			</div>
		</Container>
	);
}

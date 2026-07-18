import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { ProfilePageJsonLd } from "@/components/json-ld/profile-page-json-ld";
import { SocialMediaLinks } from "@/components/social-media-links";
import portraitImage from "@/images/portrait.jpg";
import { urlSocial } from "@/lib/constants/url-social";
import { AboutStory } from "./_sections/about-story";

export const metadata: Metadata = {
	title: "About John Adib",
	description:
		"John Adib is an Engineering Manager at Zapp in London, a 2× startup co-founder, award-winning mentor, speaker, and open-source contributor pioneering AI-first development.",
};

export default function About() {
	return (
		<Container className="mt-16 sm:mt-32">
			<ProfilePageJsonLd />
			<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
				<div className="lg:pl-20 select-none">
					<div className="max-w-xs px-2.5 lg:max-w-none">
						<Image
							src={portraitImage}
							alt="John Adib, Engineering Manager in London"
							sizes="(min-width: 1024px) 32rem, 20rem"
							className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
						/>
					</div>
				</div>
				<div className="lg:order-first lg:row-span-2">
					<h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
						Hi, I'm John Adib
					</h1>
					<AboutStory />
				</div>
				<div className="lg:px-20">
					<SocialMediaLinks forAboutPage={true} />
				</div>
			</div>
			<p className="mt-16 max-w-2xl text-sm text-zinc-500 dark:text-zinc-500">
				Want the formal version?{" "}
				<Link
					href={urlSocial.resume}
					target="_blank"
					className="font-medium text-accent-700 transition hover:text-accent-600 dark:text-accent-400"
				>
					My resume
				</Link>{" "}
				is hand-coded in HTML and CSS — and yes, it exports itself to PDF with a
				pure-JavaScript trick.
			</p>
		</Container>
	);
}

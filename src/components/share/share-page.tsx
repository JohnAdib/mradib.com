import type { Metadata } from "next";
import Image from "next/image";
import { EmailLink } from "@/components/email/email-link";
import {
	GitHubIcon,
	InstagramIcon,
	LinkedInIcon,
	XIcon,
} from "@/components/icon/social-icons";
import { ShareActions } from "@/components/share/share-actions";
import { shareProfile } from "@/data/share";
import { ogMetadata } from "@/lib/og-metadata";

export const shareMetadata: Metadata = {
	title: "Links & contact",
	description:
		"John Adib's social profiles, email, talks and website, all in one place.",
	alternates: { canonical: "/@" },
	...ogMetadata("/@"),
};
const icons = {
	linkedin: LinkedInIcon,
	github: GitHubIcon,
	instagram: InstagramIcon,
	x: XIcon,
};

export default function SharePage() {
	return (
		<main className="share-page">
			<ShareActions />
			<div className="share-card">
				<header className="share-identity">
					<Image
						src={shareProfile.portrait}
						alt="John Adib"
						width={112}
						height={112}
						priority
						className="share-portrait"
					/>
					<h1>{shareProfile.name}</h1>
				</header>
				<div className="share-links">
					<nav className="share-socials" aria-label="Social profiles">
						{shareProfile.socials.map(({ label, href, icon }) => {
							const Icon = icons[icon];
							return (
								<a
									key={label}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="share-social"
								>
									<Icon className="size-5 fill-current" />
									<span>{label}</span>

									<span className="sr-only"> (opens in a new tab)</span>
								</a>
							);
						})}
					</nav>
					<nav className="share-pages" aria-label="Explore the website">
						{shareProfile.pages.map(({ label, href }) => (
							<a key={label} href={href}>
								{label}
							</a>
						))}
					</nav>
					<footer className="share-contact">
						<EmailLink tag="site" className="share-email" />
					</footer>
				</div>
			</div>
		</main>
	);
}

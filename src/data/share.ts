import { urlSocial } from "@/lib/constants/url-social";

export const shareProfile = {
	name: "John Adib",
	url: "https://mradib.com/@",
	portrait: "/img/john-adib-hero-576.jpg",
	qr: "/share/qr.svg",
	socials: [
		{ label: "LinkedIn", href: urlSocial.linkedin, icon: "linkedin" },
		{ label: "GitHub", href: urlSocial.github, icon: "github" },
		{ label: "Instagram", href: urlSocial.instagram, icon: "instagram" },
		{ label: "X", href: urlSocial.twitter, icon: "x" },
	],
	pages: [
		{ label: "About", href: "/about" },
		{ label: "Talks", href: "/talks" },
		{ label: "Website", href: "/" },
	],
} as const;

import { urlSocial } from "@/lib/constants/url-social";

export interface INavItem {
	label: string;
	href: string;
	lang?: string;
	dir?: "ltr" | "rtl";
	external?: boolean;
}

// Order matters, rendered left to right in the header
export const mainNav: INavItem[] = [
	{ label: "About", href: "/about" },
	{ label: "Awards", href: "/awards" },
	{ label: "Talks", href: "/talks" },
	{ label: "Contact", href: "/contact" },
];

export const footerNav: INavItem[] = [
	{ label: "About", href: "/about" },
	{ label: "Awards", href: "/awards" },
	{ label: "Talks", href: "/talks" },
	{ label: "Articles", href: "/articles" },
	{ label: "Mentorship", href: "/mentor" },
	{ label: "CV", href: urlSocial.resume, external: true },
	{ label: "Contact", href: "/contact" },
];

// The only crossover into the Persian tree, rendered in the footer
export const faNav: INavItem = {
	label: "فارسی",
	href: "/fa",
	lang: "fa",
	dir: "rtl",
};

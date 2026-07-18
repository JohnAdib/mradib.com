export interface INavItem {
	label: string;
	href: string;
	lang?: string;
	dir?: "ltr" | "rtl";
}

// Order matters — rendered left-to-right in the header
export const mainNav: INavItem[] = [
	{ label: "About", href: "/about" },
	{ label: "Awards", href: "/awards" },
	{ label: "Articles", href: "/articles" },
	{ label: "Mentorship", href: "/mentor" },
	{ label: "فارسی", href: "/fa", lang: "fa", dir: "rtl" },
];

export const footerNav: INavItem[] = [
	{ label: "Homepage", href: "/" },
	...mainNav,
	{ label: "Gallery", href: "/gallery" },
	{ label: "Contact", href: "/contact" },
	{ label: "Resume", href: "https://resume.mradib.com" },
];

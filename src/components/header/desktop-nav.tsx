"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/navigation";

function NavItem({
	href,
	lang,
	dir,
	children,
}: {
	href: string;
	lang?: string;
	dir?: "ltr" | "rtl";
	children: React.ReactNode;
}) {
	const isActive = usePathname() === href;

	return (
		<li>
			<Link
				href={href}
				lang={lang}
				dir={dir}
				className={clsx(
					"relative block px-3 py-2 transition",
					isActive
						? "text-accent-700 dark:text-accent-400"
						: "hover:text-accent-600 dark:hover:text-accent-400",
				)}
			>
				{children}
				{isActive && (
					<span className="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-accent-500/0 via-accent-500/40 to-accent-500/0 dark:from-accent-400/0 dark:via-accent-400/40 dark:to-accent-400/0" />
				)}
			</Link>
		</li>
	);
}

export function DesktopNavigation(
	props: React.ComponentPropsWithoutRef<"nav">,
) {
	return (
		<nav {...props}>
			<ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
				{mainNav.map((item) => (
					<NavItem
						key={item.href}
						href={item.href}
						lang={item.lang}
						dir={item.dir}
					>
						{item.label}
					</NavItem>
				))}
			</ul>
		</nav>
	);
}

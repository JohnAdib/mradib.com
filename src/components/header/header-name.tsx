"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/* The homepage H1 is the name itself, so the header stays quiet there. */
export function HeaderName() {
	const pathname = usePathname();
	if (pathname === "/") {
		return null;
	}
	return (
		<Link
			href="/"
			className="pointer-events-auto text-sm font-semibold whitespace-nowrap text-zinc-800 dark:text-zinc-100"
		>
			John Adib
		</Link>
	);
}

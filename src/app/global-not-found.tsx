import clsx from "clsx";
import type { Metadata } from "next";
import { fontDisplay, fontEn } from "@/app/fonts";
import { NotFoundView } from "@/components/page-404/not-found-view";
import { RootShell } from "@/components/root-shell";
import { rootViewport } from "@/lib/root-viewport";
import "@/styles/tailwind.css";

/**
 * Unmatched URLs resolve outside both root layouts (en and fa), so this
 * file owns the whole document for the static 404.html.
 */
export const metadata: Metadata = {
	title: "Page not found | John Adib",
	robots: { index: false, follow: true },
};

export const viewport = rootViewport;

export default function GlobalNotFound() {
	return (
		<html
			prefix="og:http://ogp.me/ns#"
			dir="ltr"
			lang="en"
			suppressHydrationWarning
			className={clsx(fontEn.variable, fontDisplay.variable)}
		>
			<RootShell>
				<NotFoundView />
			</RootShell>
		</html>
	);
}

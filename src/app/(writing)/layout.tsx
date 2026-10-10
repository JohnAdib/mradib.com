import clsx from "clsx";
import { fontDisplay, fontEn } from "@/app/fonts";
import { Layout } from "@/components/layout";
import { RootShell } from "@/components/root-shell";
import { profile } from "@/data/profile";
import { rootMetadata } from "@/lib/root-metadata";
import { rootViewport } from "@/lib/root-viewport";
import "@/styles/tailwind.css";

export const metadata = {
	...rootMetadata,
	description: profile.oneLiner,
};
export const viewport = rootViewport;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			prefix="og:http://ogp.me/ns#"
			dir="ltr"
			lang="en"
			suppressHydrationWarning
			className={clsx(fontEn.variable, fontDisplay.variable)}
		>
			<RootShell neutralAuthor>
				<div className="flex w-full">
					<Layout>{children}</Layout>
				</div>
			</RootShell>
		</html>
	);
}

import clsx from "clsx";
import { fontDisplay, fontEn } from "@/app/fonts";
import { Layout } from "@/components/layout";
import { RootShell } from "@/components/root-shell";
import { rootMetadata } from "@/lib/root-metadata";
import { rootViewport } from "@/lib/root-viewport";
import "@/styles/tailwind.css";

export const metadata = rootMetadata;
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
			<RootShell>
				<div className="flex w-full">
					<Layout>{children}</Layout>
				</div>
			</RootShell>
		</html>
	);
}

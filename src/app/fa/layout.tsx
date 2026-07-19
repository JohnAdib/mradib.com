import { Layout } from "@/components/layout";
import { RootShell } from "@/components/root-shell";
import { rootMetadataFa } from "@/lib/root-metadata-fa";
import { rootViewport } from "@/lib/root-viewport";
import "@/styles/tailwind.css";
import { fontFa } from "./fonts";

export const metadata = rootMetadataFa;
export const viewport = rootViewport;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			prefix="og:http://ogp.me/ns#"
			dir="rtl"
			lang="fa"
			suppressHydrationWarning
		>
			<RootShell className={fontFa.variable}>
				<div className="flex w-full">
					<Layout>{children}</Layout>
				</div>
			</RootShell>
		</html>
	);
}

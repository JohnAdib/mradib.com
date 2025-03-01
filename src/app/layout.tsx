import { rootMetadata } from "@/lib/root-metadata";
import { rootViewport } from "@/lib/root-viewport";
import "@/styles/tailwind.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import clsx from "clsx";
import { fontEn, fontFa } from "./fonts";
import { Providers } from "./providers";

export const metadata = rootMetadata;
export const viewport = rootViewport;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		/* eslint-disable react/no-unknown-property */
		<html
			prefix="og:http://ogp.me/ns#"
			dir="ltr"
			lang="en"
			suppressHydrationWarning
		>
			<body className={clsx(fontEn.variable, fontFa.variable)}>
				<Providers>{children}</Providers>
				<GoogleAnalytics gaId="G-0T9SVDBER6" />
			</body>
		</html>
	);
}

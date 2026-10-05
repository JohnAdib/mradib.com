import clsx from "clsx";
import { fontDisplay, fontEn } from "@/app/fonts";
import { RootShell } from "@/components/root-shell";
import { rootMetadata } from "@/lib/root-metadata";
import { rootViewport } from "@/lib/root-viewport";
import "@/styles/tailwind.css";
import "@/styles/share.css";

export const metadata = rootMetadata;
export const viewport = rootViewport;

export default function ShareLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			dir="ltr"
			suppressHydrationWarning
			className={clsx(fontEn.variable, fontDisplay.variable)}
		>
			<RootShell>{children}</RootShell>
		</html>
	);
}

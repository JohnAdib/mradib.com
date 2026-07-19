import clsx from "clsx";
import { fontDisplay, fontEn } from "@/app/fonts";
import { Providers } from "@/app/providers";
import { Analytics } from "@/components/analytics";
import { PersonJsonLd } from "@/components/json-ld/person-json-ld";
import { WebSiteJsonLd } from "@/components/json-ld/web-site-json-ld";

/**
 * The shared body interior for both root layouts. The en and fa trees each
 * own their html element (lang and dir differ), everything inside it is
 * identical and lives here exactly once. The fa tree passes its own Vazirmatn
 * variable via className so en pages never preload the Persian font.
 */
export function RootShell({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<body className={clsx(fontEn.variable, fontDisplay.variable, className)}>
			<Providers>{children}</Providers>
			<PersonJsonLd />
			<WebSiteJsonLd />
			<Analytics />
		</body>
	);
}

import { GoogleAnalytics } from "@next/third-parties/google";
import clsx from "clsx";
import { fontDisplay, fontEn, fontFa } from "@/app/fonts";
import { Providers } from "@/app/providers";
import { PersonJsonLd } from "@/components/json-ld/person-json-ld";

/**
 * The shared body interior for both root layouts. The en and fa trees each
 * own their html element (lang and dir differ), everything inside it is
 * identical and lives here exactly once.
 */
export function RootShell({ children }: { children: React.ReactNode }) {
	return (
		<body
			className={clsx(fontEn.variable, fontFa.variable, fontDisplay.variable)}
		>
			<Providers>{children}</Providers>
			<PersonJsonLd />
			<GoogleAnalytics gaId="G-0T9SVDBER6" />
		</body>
	);
}

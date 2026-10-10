import type { Metadata } from "next";
import { GuideKit } from "@/components/guide/kit/guide-kit";
import { RevealFallback } from "@/components/guide/shell/reveal-fallback";
import { hubCopy } from "@/data/guides/hub-copy";
import { hubRoute } from "@/data/guides/hub-route";
import { ogMetadata } from "@/lib/og-metadata";
import { HubAi } from "./_sections/hub-ai";
import { HubClosing } from "./_sections/hub-closing";
import { HubHero } from "./_sections/hub-hero";
import { HubHow } from "./_sections/hub-how";
import { HubJsonLd } from "./_sections/hub-json-ld";

export const metadata: Metadata = {
	title: hubCopy.pageTitle,
	description: hubCopy.pageDesc,
	...ogMetadata(hubRoute),
};

// Composition only: the hub introduces the kit and hands the reader to the
// first guide. Move a line to reorder a part, delete a line to drop it.
export default function Page() {
	return (
		<>
			<RevealFallback />
			<HubJsonLd />
			<HubHero />
			<GuideKit id={hubCopy.anchors.guides} heading={hubCopy.headings.guides} />
			<HubHow />
			<HubAi />
			<HubClosing />
		</>
	);
}

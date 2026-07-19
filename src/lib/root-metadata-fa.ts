import type { Metadata } from "next";
import { getOgCard, ogCardImage } from "@/data/og";
import { defaultDescriptionFa, defaultTitleFa, myNameFa } from "./constants/fa";
import { rootMetadata } from "./root-metadata";

/**
 * The fa tree has its own root layout, so nothing is inherited from the en
 * root. Spreading rootMetadata keeps metadataBase, canonical, twitter, and
 * formatDetection identical; only language facing fields are overridden.
 */
export const rootMetadataFa: Metadata = {
	...rootMetadata,
	title: {
		template: `%s | ${myNameFa}`,
		default: defaultTitleFa,
	},
	description: defaultDescriptionFa,
	openGraph: {
		...rootMetadata.openGraph,
		locale: "fa_IR",
		// Persian fallback card; pages with their own card override via ogMetadata.
		images: [ogCardImage(getOgCard("/fa"))],
	},
};

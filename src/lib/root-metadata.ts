import type { Metadata } from "next";
import { getOgCard, ogCardImage } from "@/data/og";
import {
	defaultDescription,
	defaultTitle,
	myName,
	myTitle,
} from "./constants/en";
import { homepageUrl, siteUrl } from "./constants/url";

export const rootMetadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		template: `%s | ${myName}`,
		default: defaultTitle,
	},
	alternates: {
		canonical: "./",
		types: {
			"application/rss+xml": "/feed.xml",
		},
	},
	description: defaultDescription,
	generator: myTitle,
	category: "technology",
	applicationName: myTitle,
	authors: [
		{
			name: myName,
			url: homepageUrl,
		},
	],
	creator: myName,
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: "website",
		siteName: `${myName} (${myTitle})`,
		locale: "en_GB",
		url: "./",
		// Sitewide fallback card; pages with their own card override via ogMetadata.
		images: [ogCardImage(getOgCard("/"))],
	},
	twitter: {
		card: "summary_large_image",
		creator: "@MrAdib",
		site: "@MrAdib",
	},
	appLinks: {
		web: {
			url: homepageUrl,
			should_fallback: true,
		},
	},
};

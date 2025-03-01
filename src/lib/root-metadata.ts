import type { Metadata } from "next";
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
		// template: '%s | ' + myName,
		template: "%s",
		default: defaultTitle,
	},
	alternates: {
		canonical: "./",
	},
	description: defaultDescription,
	// TODO: Add manifest.json
	//   manifest: siteUrl + '/manifest.json',
	generator: myTitle,
	category: "blog",
	applicationName: myTitle + " Blog",
	authors: [
		{
			name: myName,
			url: homepageUrl,
		},
	],
	creator: myTitle,
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	twitter: {
		creator: "@MrAdib",
	},
	//   verification: {
	//     google: 'google-site-verification',
	//   },
	appLinks: {
		web: {
			url: homepageUrl,
			should_fallback: true,
		},
	},
};

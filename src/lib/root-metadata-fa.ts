import type { Metadata } from "next";
import { defaultDescriptionFa, defaultTitleFa, myNameFa } from "./constants/fa";

export const rootMetadataFa: Metadata = {
	title: {
		template: `%s | ${myNameFa}`,
		default: defaultTitleFa,
	},
	description: defaultDescriptionFa,
	openGraph: {
		locale: "fa_IR",
	},
};

import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: `${profile.name} (${profile.brand})`,
		short_name: profile.brand,
		description: profile.shortBio,
		start_url: "/",
		display: "browser",
		background_color: "#fafafa",
		theme_color: "#fafafa",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "48x48",
				type: "image/x-icon",
			},
		],
	};
}

import type { Metadata } from "next";
import { PixelStory } from "./pixel-story";

export const metadata: Metadata = {
	title: "One move at a time | Pixel story experiment",
	description: "An interactive 8-bit inspired London story experiment.",
	robots: { index: false, follow: false },
};

export default function Page() {
	return <PixelStory />;
}

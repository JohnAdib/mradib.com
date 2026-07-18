import type { Metadata } from "next";
import { TalkLayout } from "@/components/talk/talk-layout";
import { getTalk } from "@/data/talks/get-talk";
import imgCover from "./opengraph-image.png";

const talk = getTalk("ai-first-architecture");

export const metadata: Metadata = {
	title: talk.title,
	description: talk.summary,
};

export default function Page() {
	return <TalkLayout talk={talk} coverImage={imgCover} />;
}

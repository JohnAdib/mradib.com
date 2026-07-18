import type { Metadata } from "next";
import { TalkLayout } from "@/components/talk/talk-layout";
import { getTalk } from "@/data/talks/get-talk";
import imgCover from "./_img/cover.webp";

const talk = getTalk("design-systems-ai-separation-of-concern");

export const metadata: Metadata = {
	title: talk.title,
	description: talk.summary,
};

export default function Page() {
	return <TalkLayout talk={talk} coverImage={imgCover} />;
}

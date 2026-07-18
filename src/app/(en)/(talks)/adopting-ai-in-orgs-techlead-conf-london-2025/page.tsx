import type { Metadata } from "next";
import { TalkLayout } from "@/components/talk/talk-layout";
import { getTalk } from "@/data/talks/get-talk";

const talk = getTalk("techlead-conf-adopting-ai");

export const metadata: Metadata = {
	title: talk.title,
	description: talk.summary,
};

export default function Page() {
	return <TalkLayout talk={talk} />;
}

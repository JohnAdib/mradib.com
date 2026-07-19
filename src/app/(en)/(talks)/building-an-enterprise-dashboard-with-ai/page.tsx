import type { Metadata } from "next";
import { TalkLayout } from "@/components/talk/talk-layout";
import { getTalk } from "@/data/talks/get-talk";
import { ogMetadata } from "@/lib/og-metadata";

const talk = getTalk("hack-united-enterprise-dashboard-ai");

export const metadata: Metadata = {
	title: talk.title,
	description: talk.summary,
	...ogMetadata(talk.path ?? ""),
};

export default function Page() {
	return <TalkLayout talk={talk} />;
}

import type { Metadata } from "next";
import { TalkLayout } from "@/components/talk/talk-layout";
import { Techlead2026Panels } from "@/components/talk/techlead-2026-panels";
import { techlead2026Talk } from "@/data/talks/techlead-2026-talk";
import { ogMetadata } from "@/lib/og-metadata";

export const metadata: Metadata = {
	title: `${techlead2026Talk.title} | TechLead Conf London 2026`,
	description: techlead2026Talk.summary,
	...ogMetadata(techlead2026Talk.path ?? ""),
};

export default function Page() {
	return (
		<TalkLayout talk={techlead2026Talk}>
			<Techlead2026Panels />
		</TalkLayout>
	);
}

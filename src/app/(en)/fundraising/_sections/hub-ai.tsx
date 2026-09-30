import { AiFileCard } from "@/components/guide/ai/ai-file-card";
import { GuideSectionHeading } from "@/components/guide/shell/section-heading";
import { SectionShell } from "@/components/guide/shell/section-shell";
import { fundraisingKit } from "@/data/guides/fundraising-kit";
import { hubCopy } from "@/data/guides/hub-copy";
import { hubRoute } from "@/data/guides/hub-route";
import { HubAiRow } from "./hub-ai-row";

/** The kit index for AI, then every guide's framework and skill. */
export function HubAi() {
	const id = hubCopy.anchors.ai;
	return (
		<SectionShell id={id}>
			<GuideSectionHeading id={id} heading={hubCopy.headings.ai} />
			<div className="mt-8 max-w-2xl">
				<AiFileCard
					file={{
						path: `${hubRoute}/llms.txt`,
						description: hubCopy.ai.indexNote,
					}}
				/>
			</div>
			<ul className="mt-6 grid max-w-2xl list-none gap-3">
				{fundraisingKit.map((entry) => (
					<HubAiRow
						key={entry.article.pagePath}
						entry={entry}
						labels={hubCopy.ai}
					/>
				))}
			</ul>
		</SectionShell>
	);
}

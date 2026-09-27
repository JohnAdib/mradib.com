import type { IGuide } from "@/data/guides/guide-bundle";
import { guideUiLabels } from "@/data/guides/guide-labels";
import { guideAiFiles } from "@/lib/guides/ai-files";
import { GuideSectionHeading } from "../shell/section-heading";
import { SectionShell } from "../shell/section-shell";
import { AiFileCard } from "./ai-file-card";
import { PromptPanel } from "./prompt-panel";

/** The two AI files and a copy-ready prompt that points at them. */
export function GuideAiPrompt({ guide }: { guide: IGuide }) {
	const id = guide.anchors.ai;
	return (
		<SectionShell id={id}>
			<GuideSectionHeading id={id} heading={guide.headings.ai} />
			<div className="mt-8 grid gap-4 sm:grid-cols-2">
				{guideAiFiles(guide).map((file) => (
					<AiFileCard key={file.path} file={file} />
				))}
			</div>
			<p className="mt-8 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
				{guide.ai.promptIntro}
			</p>
			<PromptPanel
				prompt={guide.ai.prompt}
				copyLabel={guideUiLabels.copyPrompt}
				copiedLabel={guideUiLabels.copied}
			/>
		</SectionShell>
	);
}

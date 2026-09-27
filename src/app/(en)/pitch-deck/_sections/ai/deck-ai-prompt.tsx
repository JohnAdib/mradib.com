import { deckAi, deckHeadings } from "@/data/pitch-deck";
import { DeckSectionHeading } from "../../_shared/section-heading";
import { SectionShell } from "../../_shared/section-shell";
import { AiFileCard } from "./ai-file-card";
import { PromptPanel } from "./prompt-panel";

export function DeckAiPrompt() {
	return (
		<SectionShell id="ai">
			<DeckSectionHeading id="ai" heading={deckHeadings.ai} />
			<div className="mt-8 grid gap-4 sm:grid-cols-2">
				{deckAi.files.map((file) => (
					<AiFileCard key={file.path} file={file} />
				))}
			</div>
			<p className="mt-8 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
				{deckAi.promptIntro}
			</p>
			<PromptPanel
				prompt={deckAi.prompt}
				copyLabel={deckAi.copyLabel}
				copiedLabel={deckAi.copiedLabel}
			/>
		</SectionShell>
	);
}

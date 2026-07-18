import type { JSX } from "react";
import { SectionHeading } from "@/components/heading/section-heading";
import { SectionChecklist } from "@/components/todo/section-checklist";
import {
	checklistItemsBySection,
	resumeChecklistStorageKey,
} from "../../resume-checklist-data";
import { SummaryDefinition } from "./summary-definition";
import { SummaryIntro } from "./summary-intro";
import { SummaryObjective } from "./summary-objective";

export function SectionSummary(): JSX.Element {
	return (
		<section id="summary" className="scroll-mt-24">
			<SectionHeading anchor="summary">
				The summary section on a resume
			</SectionHeading>
			{SummaryIntro()}
			{SummaryDefinition()}
			{SummaryObjective()}
			<SectionChecklist
				storageKey={resumeChecklistStorageKey}
				items={checklistItemsBySection("summary")}
				title="This section's checklist"
				locale="en-US"
			/>
		</section>
	);
}

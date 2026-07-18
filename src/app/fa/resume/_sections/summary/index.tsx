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
			<SectionHeading anchor="summary">بخش خلاصه در رزومه</SectionHeading>
			{SummaryIntro()}
			{SummaryDefinition()}
			{SummaryObjective()}
			<SectionChecklist
				storageKey={resumeChecklistStorageKey}
				items={checklistItemsBySection("summary")}
			/>
		</section>
	);
}

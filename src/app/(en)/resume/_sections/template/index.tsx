import type { JSX } from "react";
import { SectionHeading } from "@/components/heading/section-heading";
import { SectionChecklist } from "@/components/todo/section-checklist";
import {
	checklistItemsBySection,
	resumeChecklistStorageKey,
} from "../../resume-checklist-data";
import { LayoutRules } from "./layout";
import { BuildingSoftware } from "./software";
import { StructureFormats } from "./structure";
import { TraditionalVsCreative } from "./traditional-vs-creative";

export function SectionTemplate(): JSX.Element {
	return (
		<section id="template" className="scroll-mt-24">
			<SectionHeading anchor="template">Resume template</SectionHeading>
			{StructureFormats()}
			{BuildingSoftware()}
			{LayoutRules()}
			{TraditionalVsCreative()}
			<SectionChecklist
				storageKey={resumeChecklistStorageKey}
				items={checklistItemsBySection("template")}
				title="This section's checklist"
				locale="en-US"
			/>
		</section>
	);
}

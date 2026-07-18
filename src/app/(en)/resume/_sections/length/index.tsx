import type { JSX } from "react";
import { SectionHeading } from "@/components/heading/section-heading";
import { SectionChecklist } from "@/components/todo/section-checklist";
import {
	checklistItemsBySection,
	resumeChecklistStorageKey,
} from "../../resume-checklist-data";
import { LengthFitTips } from "./fit-tips";
import { LengthMoreTips } from "./more-tips";
import { LengthWhyOnePage } from "./why-one-page";

export function SectionLength(): JSX.Element {
	return (
		<section id="length" className="scroll-mt-24">
			<SectionHeading anchor="length">
				How many pages should a resume be?
			</SectionHeading>
			{LengthWhyOnePage()}
			{LengthFitTips()}
			{LengthMoreTips()}
			<SectionChecklist
				storageKey={resumeChecklistStorageKey}
				items={checklistItemsBySection("length")}
				title="This section's checklist"
				locale="en-US"
			/>
		</section>
	);
}

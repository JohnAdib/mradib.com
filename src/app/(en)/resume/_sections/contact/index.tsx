import type { JSX } from "react";
import { SectionHeading } from "@/components/heading/section-heading";
import { SectionChecklist } from "@/components/todo/section-checklist";
import {
	checklistItemsBySection,
	resumeChecklistStorageKey,
} from "../../resume-checklist-data";
import { EssentialInfo } from "./essential-info";
import { ContactExamples } from "./examples";
import { OptionalInfo } from "./optional-info";
import { ThingsToAvoid } from "./things-to-avoid";

export function SectionContact(): JSX.Element {
	return (
		<section id="contact" className="scroll-mt-24">
			<SectionHeading anchor="contact">
				Contact information on a resume
			</SectionHeading>
			{EssentialInfo()}
			{OptionalInfo()}
			{ThingsToAvoid()}
			{ContactExamples()}
			<SectionChecklist
				storageKey={resumeChecklistStorageKey}
				items={checklistItemsBySection("contact")}
				title="This section's checklist"
				locale="en-US"
			/>
		</section>
	);
}

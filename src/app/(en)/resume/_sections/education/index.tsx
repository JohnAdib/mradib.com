import type { JSX } from "react";
import { SectionHeading } from "@/components/heading/section-heading";
import { SectionChecklist } from "@/components/todo/section-checklist";
import {
	checklistItemsBySection,
	resumeChecklistStorageKey,
} from "../../resume-checklist-data";
import { EducationFields } from "./education-fields";
import { EducationIntro } from "./education-intro";
import { EducationOptional } from "./education-optional";
import { EducationTips } from "./education-tips";

export function SectionEducation(): JSX.Element {
	return (
		<section id="education" className="scroll-mt-24">
			<SectionHeading anchor="education">
				The education section in your resume
			</SectionHeading>
			{EducationIntro()}
			{EducationFields()}
			{EducationOptional()}
			{EducationTips()}
			<SectionChecklist
				storageKey={resumeChecklistStorageKey}
				items={checklistItemsBySection("education")}
				title="This section's checklist"
				locale="en-US"
			/>
		</section>
	);
}

import type { JSX } from "react";
import { SectionHeading } from "@/components/heading/section-heading";
import { SectionChecklist } from "@/components/todo/section-checklist";
import {
	checklistItemsBySection,
	resumeChecklistStorageKey,
} from "../../resume-checklist-data";
import { OptionalCertifications } from "./optional-certifications";
import { OptionalHobbies } from "./optional-hobbies";
import { OptionalLanguages } from "./optional-languages";
import { OptionalPublications } from "./optional-publications";

export function SectionOptional(): JSX.Element {
	return (
		<section id="optional" className="scroll-mt-24">
			<SectionHeading anchor="optional">
				Optional sections on a resume
			</SectionHeading>
			{OptionalLanguages()}
			{OptionalHobbies()}
			{OptionalCertifications()}
			{OptionalPublications()}
			<SectionChecklist
				storageKey={resumeChecklistStorageKey}
				items={checklistItemsBySection("optional")}
				title="This section's checklist"
				locale="en-US"
			/>
		</section>
	);
}

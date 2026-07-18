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
			<SectionHeading anchor="optional">بخش‌های اختیاری در رزومه</SectionHeading>
			{OptionalLanguages()}
			{OptionalHobbies()}
			{OptionalCertifications()}
			{OptionalPublications()}
			<SectionChecklist
				storageKey={resumeChecklistStorageKey}
				items={checklistItemsBySection("optional")}
			/>
		</section>
	);
}

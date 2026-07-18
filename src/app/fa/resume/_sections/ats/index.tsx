import { SectionHeading } from "@/components/heading/section-heading";
import { SectionChecklist } from "@/components/todo/section-checklist";
import {
	checklistItemsBySection,
	resumeChecklistStorageKey,
} from "../../resume-checklist-data";
import { KeywordTailoring } from "./keyword-tailoring";
import { WhatIsAts } from "./what-is-ats";

export function SectionAts(): JSX.Element {
	return (
		<section id="ats" className="scroll-mt-24">
			<SectionHeading anchor="ats">ATS سیستم ردیابی متقاضی</SectionHeading>
			{WhatIsAts()}
			{KeywordTailoring()}
			<SectionChecklist
				storageKey={resumeChecklistStorageKey}
				items={checklistItemsBySection("ats")}
			/>
		</section>
	);
}

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
			<SectionHeading anchor="length">رزومه باید چند صفحه باشه؟</SectionHeading>
			{LengthWhyOnePage()}
			{LengthFitTips()}
			{LengthMoreTips()}
			<SectionChecklist
				storageKey={resumeChecklistStorageKey}
				items={checklistItemsBySection("length")}
			/>
		</section>
	);
}

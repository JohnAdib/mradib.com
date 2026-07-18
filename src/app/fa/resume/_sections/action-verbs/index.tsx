import type { JSX } from "react";
import { Accordion } from "@/components/accordion/accordion";
import { SectionHeading } from "@/components/heading/section-heading";
import { SectionChecklist } from "@/components/todo/section-checklist";
import { ListActionVerbs } from "../../action-verbs/list/html-section";
import {
	checklistItemsBySection,
	resumeChecklistStorageKey,
} from "../../resume-checklist-data";
import { ActionVerbsIntro } from "./intro";
import { ActionVerbsTips } from "./tips";

export function SectionActionVerbs(): JSX.Element {
	return (
		<section id="action-verbs" className="scroll-mt-24">
			<SectionHeading anchor="action-verbs">
				افعال مناسب برای دستاوردهای شما در رزومه
			</SectionHeading>

			{ActionVerbsIntro()}
			{ActionVerbsTips()}

			<Accordion title="لیست کامل افعال اکشن">
				<ListActionVerbs />
			</Accordion>

			<SectionChecklist
				storageKey={resumeChecklistStorageKey}
				items={checklistItemsBySection("action-verbs")}
			/>
		</section>
	);
}

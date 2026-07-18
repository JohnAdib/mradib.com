import type { JSX } from "react";
import { SectionHeading } from "@/components/heading/section-heading";
import { SectionChecklist } from "@/components/todo/section-checklist";
import {
	checklistItemsBySection,
	resumeChecklistStorageKey,
} from "../../resume-checklist-data";
import { HardVsSoft } from "./hard-vs-soft";
import { IndustryLists } from "./industry-lists";
import { SkillLeveling } from "./leveling";
import { SkillTailoring } from "./tailoring";

export function SectionSkills(): JSX.Element {
	return (
		<section id="skills" className="scroll-mt-24">
			<SectionHeading anchor="skills">
				How to write the skills section on your resume
			</SectionHeading>
			{HardVsSoft()}
			{SkillLeveling()}
			{SkillTailoring()}
			{IndustryLists()}
			<SectionChecklist
				storageKey={resumeChecklistStorageKey}
				items={checklistItemsBySection("skills")}
				title="This section's checklist"
				locale="en-US"
			/>
		</section>
	);
}

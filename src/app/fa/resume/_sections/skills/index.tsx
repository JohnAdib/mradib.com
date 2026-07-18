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
				آموزش نوشتن مهارت‌ها در رزومه
			</SectionHeading>
			{HardVsSoft()}
			{SkillLeveling()}
			{SkillTailoring()}
			{IndustryLists()}
			<SectionChecklist
				storageKey={resumeChecklistStorageKey}
				items={checklistItemsBySection("skills")}
			/>
		</section>
	);
}

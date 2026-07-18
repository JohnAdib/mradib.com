import { SectionHeading } from "@/components/heading/section-heading";
import { SectionChecklist } from "@/components/todo/section-checklist";
import {
	checklistItemsBySection,
	resumeChecklistStorageKey,
} from "../../resume-checklist-data";
import { ExperienceAchievements } from "./achievements";
import { ExperienceBySeniority } from "./by-seniority";
import { ExperienceHowToList } from "./how-to-list";
import { ExperienceWorkedExample } from "./worked-example";

export function SectionExperience(): JSX.Element {
	return (
		<section id="experience" className="scroll-mt-24">
			<SectionHeading anchor="experience">
				بخش تجربه کاری در رزومه
			</SectionHeading>
			{ExperienceHowToList()}
			{ExperienceAchievements()}
			{ExperienceWorkedExample()}
			{ExperienceBySeniority()}
			<SectionChecklist
				storageKey={resumeChecklistStorageKey}
				items={checklistItemsBySection("experience")}
			/>
		</section>
	);
}

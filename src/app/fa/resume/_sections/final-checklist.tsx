import Image from "next/image";
import type { JSX } from "react";
import { SectionHeading } from "@/components/heading/section-heading";
import { ChecklistSummary } from "@/components/todo/checklist-summary";
import imgResumeChecklist from "../_img/resume-checklist.png";
import { resumeChecklistStorageKey } from "../resume-checklist-data";
import { resumeChecklistGroups } from "../resume-checklist-groups";

export function SectionFinalChecklist(): JSX.Element {
	return (
		<section id="checklist" className="scroll-mt-24">
			<SectionHeading anchor="checklist">
				چک لیست رایگان نوشتن رزومه
			</SectionHeading>
			<p>
				خب کارت تموم شد؟ به‌نظرم وقتشه که این لیست پایین رو چک کنی تا مطمئن بشی
				همه نکاتی که گفته شده رو توی رزومه خودت رعایت کردی.
			</p>
			<figure>
				<Image src={imgResumeChecklist} alt="چک لیست نوشتن رزومه رو کامل کن" />
				<figcaption>چک لیست نوشتن رزومه رو کامل کن</figcaption>
			</figure>

			<ChecklistSummary
				storageKey={resumeChecklistStorageKey}
				groups={resumeChecklistGroups}
			/>
		</section>
	);
}

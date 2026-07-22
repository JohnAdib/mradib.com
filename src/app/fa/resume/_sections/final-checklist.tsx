import Image from "next/image";
import type { JSX } from "react";
import { Button } from "@/components/button";
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

			<div className="not-prose mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
				<Button href="/fa/resume/checklist">به یک رزومه نمره بده</Button>
				<span className="text-sm text-zinc-600 dark:text-zinc-400">
					هر بخش رو امتیاز بده و نتیجه رو به‌شکل لینک به اشتراک بذار.
				</span>
			</div>
			<p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
				امتیاز فقط کمک می‌کنه تصویری از وضعیتت داشته باشی. بالای ۷۰ خوبه و هر
				مورد یک پیشنهاده، نه یک قانون.
			</p>
		</section>
	);
}

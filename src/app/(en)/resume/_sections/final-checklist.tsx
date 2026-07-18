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
				Free resume writing checklist
			</SectionHeading>
			<p>
				So, are you done? I think it is time to go through the list below to
				make sure you have applied every tip that was mentioned in your own
				resume.
			</p>
			<figure>
				<Image
					src={imgResumeChecklist}
					alt="Complete your resume writing checklist"
				/>
				<figcaption>Complete your resume writing checklist</figcaption>
			</figure>

			<ChecklistSummary
				storageKey={resumeChecklistStorageKey}
				groups={resumeChecklistGroups}
				locale="en-US"
				doneMessage="Congrats! You have done everything on the list I put together!"
			/>
		</section>
	);
}

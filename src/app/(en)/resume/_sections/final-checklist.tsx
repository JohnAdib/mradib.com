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
		<>
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
					detailsLabel="See the full checklist"
				/>
			</section>

			<section id="score" className="scroll-mt-24">
				<SectionHeading anchor="score">Score your resume</SectionHeading>
				<p>
					Want a number on where you stand? Grade your resume section by
					section, get the fix for each issue, and share the result as one link.
				</p>
				<div className="not-prose mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
					<Button href="/resume/checklist">Score a resume</Button>
					<span className="text-sm text-zinc-600 dark:text-zinc-400">
						Grade each section and share the result as a link.
					</span>
				</div>
				<p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
					The score just helps you picture where you stand. Above 70 is good,
					and every item is a suggestion, not a rule.
				</p>
			</section>
		</>
	);
}

import type { JSX } from "react";
import { SectionHeading } from "@/components/heading/section-heading";
import { Msg } from "@/components/msg/msg";
import { ArticleToc } from "@/components/toc/article-toc";
import {
	checklistIdsBySection,
	resumeChecklistStorageKey,
} from "../resume-checklist-data";
import { tocSections } from "../resume-sections";

export function SectionIntro(): JSX.Element {
	return (
		<>
			<p>
				A good resume is your way into a dream job. If your resume is weak, you
				might wait weeks or even months for an interview invite and a first
				reply. So when you can have a strong resume, why not? Put in a little
				time and make your resume professional, and you will see how much your
				interview rate goes up.
			</p>
			<p>
				So you are probably asking yourself how to write a standout resume that
				pulls in recruiters, HR, and hiring managers and makes them want to
				invite you to an interview. You have come to the right place!
			</p>
			<p>
				In this guide I have gathered every tip about resumes I could find from
				trusted sources, to show you how to build that standout resume of yours
				and land a great offer with it :)
			</p>

			<Msg severity="info">I try to keep this guide up to date</Msg>

			<SectionHeading anchor="step-by-step" id="step-by-step">
				A step-by-step guide to building a resume
			</SectionHeading>
			<p>
				When we break a big job into small pieces, it turns out to be far easier
				to get done. So let us see how to move forward step by step.
			</p>
			<p>
				Next we go through the different sections of a resume in order. We
				explain what to write and how to write it so you stand out and reach the
				job you deserve.
			</p>

			<div className="xl:hidden">
				<ArticleToc
					variant="inline"
					sections={tocSections}
					storageKey={resumeChecklistStorageKey}
					checklistIdsBySection={checklistIdsBySection}
					label="Table of Contents"
					locale="en-US"
				/>
			</div>
		</>
	);
}

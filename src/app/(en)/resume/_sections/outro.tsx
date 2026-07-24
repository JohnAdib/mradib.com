import type { JSX } from "react";
import { SectionHeading } from "@/components/heading/section-heading";

export function SectionOutro(): JSX.Element {
	return (
		<section id="cover-letter" className="scroll-mt-24">
			<SectionHeading anchor="cover-letter">Cover Letter</SectionHeading>
			<p>
				Writing your resume is the first step. The next is a cover letter, a
				short letter that shows the hiring manager your motivation for the role,
				so that together with your resume it earns you an interview.
			</p>
			<p>A full guide on writing a cover letter is coming soon.</p>
		</section>
	);
}

import type { JSX } from "react";
import { SectionHeading } from "@/components/heading/section-heading";

export function SectionOutro(): JSX.Element {
	return (
		<section id="cover-letter" className="scroll-mt-24">
			<SectionHeading anchor="cover-letter">Cover Letter</SectionHeading>
			<p>
				If you made it this far, you have taken the first step toward finding a
				dream job, and that was reading this article. But it is not enough. You
				need to get to work and write your resume. Once you have written it, you
				can come back to this part and carry on with the rest :)
			</p>
			<p>
				The next step is writing a cover letter. A letter that shows the hiring
				manager your motivation for the role, so that together with your resume
				it delights the reader enough to invite you to an interview.
			</p>
			<p>
				I hope the response to this resume guide is positive, so it gives me the
				motivation to write the next parts…
			</p>

			<p>
				It is worth mentioning that the spark for this article came when a lot
				of resumes were being shared in the TechImmigrants Telegram group, and
				many of them had the same common issues. So I tried to put together a
				standard approach to writing with this article.
			</p>
			<p>
				In the future I will try to add more tips and tricks for a better
				resume, or to update this article. I also think the cover letter is an
				important part of the application process and should not be
				underestimated. For that reason I will write a full guide on how to
				write a cover letter in the future too.
			</p>
		</section>
	);
}

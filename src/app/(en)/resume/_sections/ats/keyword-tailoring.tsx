import Image from "next/image";
import type { JSX } from "react";
import { Pre } from "@/components/syntax-highlighter/pre";
import imgResumeAtJobExample1 from "./_img/resume-ats-job-example-1.jpg";

export function KeywordTailoring(): JSX.Element {
	return (
		<>
			<p>
				Do not worry. Once you know what you are dealing with and how it works,
				getting past it will not be hard. The key is to read the job posting and
				tailor your resume to it. To do that, you need to find the keywords and
				use them in your own resume.
			</p>
			<p>
				Let us take a simple example. We will read a posting for a digital
				marketer and see what matters to the company.
			</p>
			<figure>
				<Image
					src={imgResumeAtJobExample1}
					alt="Reviewing a job posting from the ATS point of view"
				/>
				<figcaption>
					Reviewing a job posting from the ATS point of view
				</figcaption>
			</figure>
			<Pre language="plaintext">5+ years of experience in online marketing</Pre>
			<Pre language="plaintext">
				Social media marketing experience ... Facebook advertising
			</Pre>
			<Pre language="plaintext">
				B.A. in Marketing or Business Administration
			</Pre>
			<Pre language="plaintext">
				managing USD 20,000+ monthly advertising budget on Facebook
			</Pre>

			<p>
				Now, to tailor our resume to these requirements, all you need to do is
				add these points to your own resume. Of course, I mean something like
				them, based on the achievements and qualifications you actually have.
			</p>
		</>
	);
}

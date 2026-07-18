import Image from "next/image";
import type { JSX } from "react";
import imgResumeAts70pDisqualified from "./_img/resume-ats-70p-disqualified.png";
import imgResumeAtsUsage from "./_img/resume-ats-usage.png";

export function WhatIsAts(): JSX.Element {
	return (
		<>
			<p>
				There is a giant called the ATS, and once you learn its tricks you can
				get past it and let a real person read your resume.
			</p>
			<p>
				ATS stands for Applicant Tracking System. It is an automated system that
				checks your resume against the job when you submit it, to decide whether
				you are a fit or not. When you are not a fit, you usually get a
				rejection email without anyone ever reading your resume, and those
				emails tend to look alike.
			</p>
			<figure>
				<Image
					src={imgResumeAts70pDisqualified}
					alt="About 70 percent of resumes are rejected by the ATS"
				/>
				<figcaption>
					About 70 percent of resumes are rejected by the ATS
				</figcaption>
			</figure>

			<p>
				The ATS is a kind of robot that filters hundreds of resumes and passes
				only the better matches on to human resources and the recruiters.
			</p>
			<p>
				You are probably surprised. You may be telling yourself, if a robot is
				going to say no to me, why spend all this time getting my resume right
				:(
			</p>
			<figure>
				<Image
					src={imgResumeAtsUsage}
					alt="About 98 percent of companies use an ATS"
				/>
				<figcaption>About 98 percent of companies use an ATS</figcaption>
			</figure>
		</>
	);
}

import Image from "next/image";
import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";
import { Pre } from "@/components/syntax-highlighter/pre";
import imgResumeExperienceCover from "./_img/resume-experience-cover.jpg";

export function ExperienceHowToList(): JSX.Element {
	return (
		<>
			<p>
				If you master just this one section of the resume, you can say you have
				learned 80 percent of resume writing.
			</p>
			<p>
				There are plenty of techniques and rules to follow when writing your
				work experience. Let us start by going over the basics together.
			</p>

			<h3 id="listing">How to list your work experience on a resume</h3>
			<Msg severity="info">
				Remember, a job means work you were paid to do and did.
			</Msg>

			<p>
				The standard format for a work experience entry includes the following.
			</p>
			<ul>
				<li>Job title / position</li>
				<li>Company name / location / description</li>
				<li>Dates of employment</li>
				<li>Achievements and responsibilities</li>
			</ul>

			<figure>
				<Image
					src={imgResumeExperienceCover}
					alt="Work experience on a resume"
				/>
				<figcaption>
					A summary of the work experience information on a resume
				</figcaption>
			</figure>

			<h4 id="role">Job title</h4>
			<p>
				Always write the job title first. When a recruiter scans your resume,
				they want to see at a glance whether you have relevant experience, so
				make its font larger than the rest or use a different color.
			</p>
			<p>
				The titles of your previous jobs should be clear. Keep it simple and
				write whatever was in the job posting, because it can also matter for
				the ATS.
			</p>

			<h4 id="company">Company name, description, and location</h4>
			<p>
				Next, give the employer and company name, and mention the location,
				meaning the country and city. If the company is not well known,
				introduce it briefly in a sentence or two, no more than a line.
			</p>
			<p>
				You can also state the type of employment in a single word, whether it
				was full-time, part-time, contract, and so on.
			</p>
			<Pre language="plaintext">Full-time, Part-time, Contract, etc.</Pre>

			<h4 id="dates">Dates of employment</h4>
			<p>
				The period you were employed at the company, meaning the year and month
				you joined and left. For your most recent job, instead of a date you can
				write the word present, meaning up to now.
			</p>
			<p>
				The standard date format on a resume is <code>mm/yyyy</code>. So, for
				example, for the third month of 2017 you write it like this.{" "}
				<code>03/2017</code>
			</p>
			<p>
				Pay attention to each job's dates. Under normal circumstances it makes
				no sense to hold two full-time jobs at the same time.
			</p>
			<p>
				Also write how long you were at that job, so no one needs to calculate
				the difference between two dates. For example.
			</p>
			<Pre language="plaintext">(2 years 7 months) 12/2019 - present</Pre>
			<p>
				A gap between two jobs is a red flag only if there is no explanation for
				it. When HR sees a gap, they assume the worst scenario, so it is better
				to have a good and honest explanation ready. For example.
			</p>
			<Pre language="plaintext">
				July 2018 - February 2019, due to my medical situation, I had to take
				time off to fully recover and focus on my health.
			</Pre>
			<p>
				Of course, you do not need to tell the whole story, especially when the
				reason is personal. But be ready to explain it briefly in the interview.
			</p>
		</>
	);
}

import Image from "next/image";
import type { JSX } from "react";
import { Pre } from "@/components/syntax-highlighter/pre";
import imgResumeExperienceAccomplishments from "./_img/resume-experience-accomplishments.png";

export function ExperienceAchievements(): JSX.Element {
	return (
		<>
			<h4 id="achievements">
				<a
					href="#achievements"
					className="no-underline text-inherit hover:underline"
				>
					Achievements or responsibilities
				</a>
			</h4>
			<p>
				This part is the core of every work experience entry. Depending on your
				field, you can list your achievements or your responsibilities, which we
				will look at more closely below.
			</p>
			<p>Write about your achievements whenever you can.</p>
			<figure>
				<Image
					src={imgResumeExperienceAccomplishments}
					alt="A formula for writing achievements on a resume"
				/>
				<figcaption>How to write achievements on a resume</figcaption>
			</figure>
			<p>
				One of the common resume mistakes is listing only responsibilities. In
				most cases, the recruiter already knows the scope of your duties. Let us
				work through an example. Suppose you are a sales manager. Your
				responsibilities are probably these.
			</p>
			<ul>
				<li>Reaching out to potential customers by phone and email</li>
				<li>
					Maintaining relationships with existing customers and selling company
					products
				</li>
				<li>Tracking and reporting from the customer management system</li>
			</ul>
			<p>
				As it happens, this is a list of the responsibilities of any sales
				manager. 90 percent of resumes probably mention these points.
			</p>
			<p>
				So, to make your resume stand out, focus on achievements instead of
				responsibilities. Put simply, what exactly was your role in the
				company's growth? If you can, use numbers to say what changes you made
				and how much of an impact you had. For example, let us look at two good
				samples.
			</p>
			<Pre language="plaintext">
				Exceeded sales team KPIs by 30%+ for 3 months straight.
			</Pre>
			<Pre language="plaintext">
				Generated over $24,000 in sales in 1 month.
			</Pre>
			<p>
				Keep in mind that in some fields there are not many achievements to
				point to, and finding numbers will be genuinely hard. In those cases
				there is really no other choice, and listing responsibilities is the
				alternative.
			</p>
		</>
	);
}

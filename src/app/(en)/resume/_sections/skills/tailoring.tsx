import Image from "next/image";
import type { JSX } from "react";
import { Accordion } from "@/components/accordion/accordion";
import { Msg } from "@/components/msg/msg";
import { Pre } from "@/components/syntax-highlighter/pre";
import imgResumeSkillsInfographic from "./_img/resume-skills-infographic.png";
import imgResumeTopSkills from "./_img/resume-top-skills.png";

export function SkillTailoring(): JSX.Element {
	return (
		<>
			<h3 id="tailoring">
				<a
					href="#tailoring"
					className="no-underline text-inherit hover:underline"
				>
					Tailor your skills to the job posting you have in mind
				</a>
			</h3>
			<p>
				You might have excellent, rare skills, but that is not always useful.
				For example, imagine you know accounting, but what exactly does a
				developer need accounting for?
			</p>
			<p>
				The most important point is to follow the job postings you are
				interested in, find the keywords in them, and if you have those skills,
				mention them on your resume.
			</p>
			<p>
				This is valuable because by checking job postings you can see which way
				the market is heading and which skills it needs, then grow in that
				direction.
			</p>

			<h3 id="general">
				<a
					href="#general"
					className="no-underline text-inherit hover:underline"
				>
					Do not forget general skills
				</a>
			</h3>
			<p>
				Some skills suit a wide range of jobs: some soft skills like teamwork,
				critical thinking, and leadership, and some hard skills like Excel,
				PowerPoint, Photoshop, writing, and so on.
			</p>
			<p>
				For any job you apply to, you can comfortably mention these skills
				because they may help you in some way.
			</p>
			<Msg severity="info">
				In resume writing, always keep the principle of relevance in mind.
			</Msg>
			<p>
				For example, a recruiter looking for a software engineer does not care
				about your marketing skills. At the same time, your skill level in a
				programming language will definitely matter to them.
			</p>
			<figure>
				<Image
					src={imgResumeTopSkills}
					alt="The best skills to put on your resume"
				/>
				<figcaption>The best skills to put on your resume</figcaption>
			</figure>

			<Msg severity="success">
				The skills section on your resume can help you get past the ATS.
			</Msg>
			<p>
				<a href="#ats">ATS</a> works based on keywords, and your resume needs to
				contain enough of those keywords. If there was no chance to mention them
				elsewhere, you can point to them here.
			</p>
			<p>
				For example, imagine there is a job posting for Java and your resume
				does not mention the word Java at all. You can be sure this resume gets
				rejected by the ATS. In fact, 70 percent of resumes are filtered out at
				this very stage and never reach the next step, which is the human
				review.
			</p>
			<p>
				Even if a company does not use an ATS and the review is done by human
				resources, keep in mind that they were told to look for a set of
				keywords in the resume and, if present, send it forward for an
				interview. So whether it is for the ATS or the HR manager, write the
				skills that fit the job posting on your resume.
			</p>

			<p>
				In some jobs, soft skills matter more than hard skills. These days,
				plenty of organizations would rather hire for character than for skill.
			</p>

			<Accordion title="Infographic: which skills should we put on a resume?">
				<figure>
					<Image
						src={imgResumeSkillsInfographic}
						alt="Which skills should we put on a resume?"
					/>
					<figcaption>Which skills should we put on a resume?</figcaption>
				</figure>
			</Accordion>

			<h4 id="requested">
				<a
					href="#requested"
					className="no-underline text-inherit hover:underline"
				>
					Most requested soft skills across industries
				</a>
			</h4>
			<Pre language="plaintext">
				Time management, Effective communication, Emotional intelligence,
				Conflict management, Teamwork skills, Stress management, Productivity &
				organization, Critical thinking, Attention to detail, Adaptability
			</Pre>
			<h3 id="market">
				<a href="#market" className="no-underline text-inherit hover:underline">
					Research the market before you finalize your skills
				</a>
			</h3>
			<p>
				Most job titles share a common core of required skills. Missing those
				skills has a real negative impact on your CV. So find them and make sure
				they are on your resume.
			</p>
			<ol>
				<li>
					Go to LinkedIn and search for the job title you want to apply for.
				</li>
				<li>
					Open 10 or more real job posts for that title, on LinkedIn or other
					job sites.
				</li>
				<li>Note the skills those posts ask for again and again.</li>
				<li>
					For every skill you already have, make sure it is written on your
					resume.
				</li>
				<li>
					For every required skill that is missing from your resume, add it.
				</li>
				<li>
					If you do not even know what a required skill is, go learn it. Spend
					the time and genuinely improve.
				</li>
				<li>
					Make sure the shared core skills that most of these posts want are all
					present on your resume.
				</li>
			</ol>
		</>
	);
}

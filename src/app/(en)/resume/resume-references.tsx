import Link from "next/link";
import type { JSX } from "react";
import { Accordion } from "@/components/accordion/accordion";
import { SectionHeading } from "@/components/heading/section-heading";

const references = [
	"https://novoresume.com/career-blog/how-to-write-a-resume-guide",
	"https://novoresume.com/career-blog/how-long-should-a-resume-be",
	"https://novoresume.com/career-blog/job-titles-on-resume",
	"https://novoresume.com/career-blog/resume-fonts",
	"https://novoresume.com/career-blog/contact-information-on-resume",
	"https://novoresume.com/career-blog/what-to-put-on-a-resume",
	"https://novoresume.com/career-blog/most-important-skills-to-put-on-your-resume",
	"https://novoresume.com/career-blog/optimize-linkedin-profile-to-complement-your-resume",
	"https://novoresume.com/career-blog/how-to-list-work-experience-on-a-resume",
	"https://novoresume.com/career-blog/how-to-list-education-on-a-resume",
	"https://novoresume.com/career-blog/resume-summary",
	"https://novoresume.com/career-blog/ats-resume",
	"https://resumelab.com/resume/how-to",
	"https://resumelab.com/resume/format",
	"https://zety.com/blog/how-to-make-a-resume",
	"https://business.time.com/2012/04/13/how-to-make-your-resume-last-longer-than-6-seconds/",
	"https://www.youtube.com/watch?v=Gt2AQG-u8xM",
	"https://www.youtube.com/watch?v=HfEvIuUvF2Q",
];

export function ResumeReferences(): JSX.Element {
	// create a list of references with ul li
	return (
		<section id="references" className="scroll-mt-24">
			<SectionHeading anchor="references">References</SectionHeading>
			<p>
				This article draws on a range of sources and combines them with extra
				notes of my own. You can see the full list below and read the originals
				if you like. That said, I have tried hard not to leave anything out.
			</p>
			<Accordion title="Full list of references">
				<ul dir="ltr" className="text-xs">
					{references.map((ref) => (
						<li key={ref} className="my-1 leading-4">
							<Link
								href={ref}
								target="_blank"
								className="block py-1.5 md:py-1"
								rel="nofollow noreferrer noopener"
							>
								{ref}
							</Link>
						</li>
					))}
				</ul>
			</Accordion>
			<p>
				If you have a tip to add or think a part needs fixing, I would be glad
				if you sent it over so I can update this and keep it a complete
				reference for writing a resume.
			</p>
		</section>
	);
}

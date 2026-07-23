import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";

export function ExperienceBySeniority(): JSX.Element {
	return (
		<>
			<h3 id="seniority">
				<a
					href="#seniority"
					className="no-underline text-inherit hover:underline"
				>
					How much work experience should you put on a resume?
				</a>
			</h3>
			<p>
				If you have more than a decade of valuable work experience, you are
				probably confused about how much of it to put on your resume. If you
				tried to list every job you have held, you would practically be writing
				a novel. On the other hand, if you are just starting out, you probably
				have no experience and do not know what to write.
			</p>
			<p>
				The amount of information you include on your resume will differ
				depending on your level.
			</p>
			<Msg severity="info">
				Your work experience should be valuable to the recruiter. If it is not,
				it is better to remove it from your resume.
			</Msg>

			<h4 id="no-experience">
				<a
					href="#no-experience"
					className="no-underline text-inherit hover:underline"
				>
					No work experience
				</a>
			</h4>
			<p>
				If you have no experience, filling this section is definitely hard. You
				can leave this section empty and focus on the other sections, or fill it
				with experience from student, non-profit, and charity organizations, and
				so on.
			</p>

			<h4 id="entry-level">
				<a
					href="#entry-level"
					className="no-underline text-inherit hover:underline"
				>
					Entry-level candidate
				</a>
			</h4>
			<p>List every job you have done so far.</p>

			<h4 id="mid-level">
				<a
					href="#mid-level"
					className="no-underline text-inherit hover:underline"
				>
					Mid-level professional
				</a>
			</h4>
			<p>Write only the work experience relevant to the job title.</p>

			<h4 id="senior">
				<a href="#senior" className="no-underline text-inherit hover:underline">
					Senior professionals
				</a>
			</h4>
			<p>
				{" "}
				List at most 15 years of work history. If your recent experience was as
				a CEO, no one cares that you were a cashier as a teenager.
			</p>
		</>
	);
}

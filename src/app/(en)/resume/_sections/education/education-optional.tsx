import type { JSX } from "react";
import { Pre } from "@/components/syntax-highlighter/pre";

export function EducationOptional(): JSX.Element {
	return (
		<>
			<h3 id="edu-extras">
				<a
					href="#edu-extras"
					className="no-underline text-inherit hover:underline"
				>
					Optional information about your education
				</a>
			</h3>
			<p>
				When you do not have much work experience, you can use optional items to
				fill out your resume. But as always, make sure this information adds
				real value. For example, if your GPA was not strong, why mention it?
			</p>
			<h4 id="gpa">
				<a href="#gpa" className="no-underline text-inherit hover:underline">
					GPA
				</a>
			</h4>
			<p>
				Only mention it if you were a strong student and your GPA was above 3.5.
			</p>
			<Pre language="plaintext">GPA: 3.9</Pre>
			<h4 id="campus">
				<a href="#campus" className="no-underline text-inherit hover:underline">
					University location
				</a>
			</h4>
			<Pre language="plaintext">London, UK</Pre>
			<h4 id="honors">
				<a href="#honors" className="no-underline text-inherit hover:underline">
					Honors
				</a>
			</h4>
			<Pre language="plaintext">One of the top students in the class</Pre>
			<h4 id="academic">
				<a
					href="#academic"
					className="no-underline text-inherit hover:underline"
				>
					Academic achievements
				</a>
			</h4>
			<Pre language="plaintext">
				Published a research paper in the university journal
			</Pre>
			<h4 id="courses">
				<a
					href="#courses"
					className="no-underline text-inherit hover:underline"
				>
					Relevant courses you passed
				</a>
			</h4>
			<p>
				It is better not to list the courses you passed on your resume, unless
				you are just starting out and your goal is to fill it out.
			</p>
			<Pre language="plaintext">
				Software Engineering, Database Management, Algorithms
			</Pre>
			<h4 id="exchange">
				<a
					href="#exchange"
					className="no-underline text-inherit hover:underline"
				>
					Exchange program for a doctorate
				</a>
			</h4>
			<Pre language="plaintext">Exchange Program in Oslo, Norway</Pre>
		</>
	);
}

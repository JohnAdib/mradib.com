import type { JSX } from "react";
import { Pre } from "@/components/syntax-highlighter/pre";

export function EducationOptional(): JSX.Element {
	return (
		<>
			<h3 id="edu-extras">Optional information about your education</h3>
			<p>
				When you do not have much work experience, you can use optional items to
				fill out your resume. But as always, make sure this information adds
				real value. For example, if your GPA was not strong, why mention it?
			</p>
			<h4 id="gpa">GPA</h4>
			<p>
				Only mention it if you were a strong student and your GPA was above 3.5.
			</p>
			<Pre language="plaintext">GPA: 3.9</Pre>
			<h4 id="campus">University location</h4>
			<Pre language="plaintext">London, UK</Pre>
			<h4 id="honors">Honors</h4>
			<Pre language="plaintext">One of the top students in the class</Pre>
			<h4 id="academic">Academic achievements</h4>
			<Pre language="plaintext">
				Published a research paper in the university journal
			</Pre>
			<h4 id="courses">Relevant courses you passed</h4>
			<p>
				It is better not to list the courses you passed on your resume, unless
				you are just starting out and your goal is to fill it out.
			</p>
			<Pre language="plaintext">
				Software Engineering, Database Management, Algorithms
			</Pre>
			<h4 id="exchange">Exchange program for a doctorate</h4>
			<Pre language="plaintext">Exchange Program in Oslo, Norway</Pre>
		</>
	);
}

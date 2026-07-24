import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";
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
			<Msg severity="warning">
				For a work resume, optional details like GPA, honors, and coursework add
				no value. Leave them out. They only make sense on an academic CV when
				you apply for academic roles. If you are applying for a job, nobody
				cares about your GPA.
			</Msg>
			<p>
				The one exception is early on. When you have little work experience,
				these items can help fill the page. Even then, make sure each one adds
				real value. If your GPA was not strong, why mention it?
			</p>
			<h4 id="gpa">
				<a href="#gpa" className="no-underline text-inherit hover:underline">
					GPA
				</a>
			</h4>
			<p>
				On an academic CV, mention it only if you were a strong student with a
				GPA above 3.5. On a work resume, skip it.
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
				Do not list the courses you passed on a work resume. They belong on an
				academic CV, or on your first resume when you need to fill space.
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

import type { JSX } from "react";
export function LengthMoreTips(): JSX.Element {
	return (
		<>
			<h4 id="school">
				<a href="#school" className="no-underline text-inherit hover:underline">
					Remove your school education
				</a>
			</h4>
			<p>
				Unless your employer went to the same school, once you have a university
				degree there is no need to list your high school diploma and
				pre-university studies
			</p>

			<h4 id="repetition">
				<a
					href="#repetition"
					className="no-underline text-inherit hover:underline"
				>
					Remove repetitive entries
				</a>
			</h4>
			<p>
				If you had similar responsibilities at several companies, do not repeat
				the job description. It is really not interesting for an employer to see
				the same phrase several times.
			</p>

			<h4 id="trim">
				<a href="#trim" className="no-underline text-inherit hover:underline">
					Keep the resume summary summarized
				</a>
			</h4>
			<p>
				The name says it all. It should be brief. You should not write 6 lines
				and add 10 bullet points. Try to wrap it up in 3 lines at most.
			</p>

			<h4 id="builders">
				<a
					href="#builders"
					className="no-underline text-inherit hover:underline"
				>
					Use resume builder sites
				</a>
			</h4>
			<p>
				Changing the design of your resume yourself might be hard. Sites built
				for creating resumes have plenty of ready made one page templates, and
				you just need to enter your content and it fits everything on one page
				for you.
			</p>
		</>
	);
}

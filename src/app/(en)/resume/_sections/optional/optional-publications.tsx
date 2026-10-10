import type { JSX } from "react";
export function OptionalPublications(): JSX.Element {
	return (
		<>
			<h3 id="publications">
				<a
					href="#publications"
					className="no-underline text-inherit hover:underline"
				>
					Publications
				</a>
			</h3>
			<p>
				Do you sometimes write for websites and magazines? Or do you have
				notable academic work, such as an ISI paper?
			</p>
			<p>
				If you have work published online or in a relevant academic journal, you
				may want to add it to your resume. Just remember to include a link to
				the work so the recruiter can do a quick check.
			</p>
			<p>
				Publications mainly help early in your career, or to fill space when you
				have little experience. Once you have a few years behind you and grow
				more senior, your achievements at work matter far more than your
				publications.
			</p>

			<h3 id="projects">
				<a
					href="#projects"
					className="no-underline text-inherit hover:underline"
				>
					Projects
				</a>
			</h3>
			<p>
				Working on relevant side projects can show your passion for your work.
				For example, a university class project, a part-time entrepreneurial
				venture, taking part in a university competition, or even making
				handmade products and selling them. Hiring managers love to see that
				their employees do interesting things in their free time.
			</p>
			<p>
				A projects section is mostly for entry-level people, roughly 1 to 2
				years of experience. If you already work somewhere, your achievements at
				that job are more interesting than any side project. A very large side
				project built while you work full time can even read as a red flag. How
				did you have the time?
			</p>
			<p>
				Open source contributions are different. They are always appreciated.
				You normally do them in your free time, and they show genuine engagement
				with your craft.
			</p>
		</>
	);
}

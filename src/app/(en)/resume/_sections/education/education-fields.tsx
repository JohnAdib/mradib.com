import type { JSX } from "react";
import { Pre } from "@/components/syntax-highlighter/pre";

export function EducationFields(): JSX.Element {
	return (
		<>
			<h3 id="degree">
				<a href="#degree" className="no-underline text-inherit hover:underline">
					The degree title
				</a>
			</h3>
			<Pre language="plaintext">B.S. in Computer Software Engineering</Pre>

			<h3 id="university">
				<a
					href="#university"
					className="no-underline text-inherit hover:underline"
				>
					The name of the university or institution
				</a>
			</h3>
			<Pre language="plaintext">Azad University</Pre>

			<h3 id="graduation">
				<a
					href="#graduation"
					className="no-underline text-inherit hover:underline"
				>
					Years attended, graduation year, or expected completion
				</a>
			</h3>
			<Pre language="plaintext">2008 to 2012</Pre>
			<p>
				If your studies took longer than usual, or you would rather not share
				the details, you can list just the graduation year. For example
			</p>
			<Pre language="plaintext">2014</Pre>
			<p>
				When you have not graduated yet and expect to finish by a certain time.
				For example
			</p>
			<Pre language="plaintext">Expected in 2025</Pre>
		</>
	);
}

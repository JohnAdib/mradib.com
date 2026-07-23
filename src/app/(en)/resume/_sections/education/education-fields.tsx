import type { JSX } from "react";
import { Pre } from "@/components/syntax-highlighter/pre";

export function EducationFields(): JSX.Element {
	return (
		<>
			<h3 id="degree">The degree title</h3>
			<Pre language="plaintext">B.S. in Computer Software Engineering</Pre>

			<h3 id="university">The name of the university or institution</h3>
			<Pre language="plaintext">Azad University</Pre>

			<h3 id="graduation">
				Years attended, graduation year, or expected completion
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

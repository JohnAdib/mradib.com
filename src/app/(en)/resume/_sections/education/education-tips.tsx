import type { JSX } from "react";
export function EducationTips(): JSX.Element {
	return (
		<>
			<h3 id="edu-tips">
				<a
					href="#edu-tips"
					className="no-underline text-inherit hover:underline"
				>
					A few tips about the education section
				</a>
			</h3>
			<ul>
				<li>
					Always put your most recent degree at the top and work backwards in
					order.
				</li>
				<li>
					If you have a university degree, there is no need to mention your high
					school diploma or pre-university certificate.
				</li>
				<li>
					If you have just graduated and have no work experience, you can place
					the education section at the top of your resume.
				</li>
			</ul>
		</>
	);
}

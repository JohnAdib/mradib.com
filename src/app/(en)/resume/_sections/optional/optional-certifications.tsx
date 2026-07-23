import type { JSX } from "react";
export function OptionalCertifications(): JSX.Element {
	return (
		<>
			<h3 id="certifications">
				<a
					href="#certifications"
					className="no-underline text-inherit hover:underline"
				>
					Certifications and awards
				</a>
			</h3>
			<p>
				Do you have an award that sets you apart in your field? Or a
				certification that proves your expertise? If it is relevant to the job
				you are applying for, you can add it to your resume.
			</p>
			<p>
				For example, imagine you are a cloud specialist. Holding certifications
				like Azure Solutions Architect Expert can back up your skills.
			</p>
		</>
	);
}

import Image from "next/image";
import type { JSX } from "react";
import imgResumeSummaryCover from "./_img/resume-summary-cover.png";

export function SummaryIntro(): JSX.Element {
	return (
		<>
			<p>
				If the first impression is a bad one, it usually sticks and is hard to
				change. So let's not waste the chance, and win the reader over with the
				best summary we can.
			</p>
			<p>
				According to the numbers, recruiters spend about <b>6 seconds</b>{" "}
				scanning each resume. Yes, all that effort for 6 seconds. They only
				spend more time if their attention is caught. One of the key sections
				that can catch it is the resume summary or objective, which sits next to
				the contact information.
			</p>

			<figure>
				<Image
					src={imgResumeSummaryCover}
					alt="The summary section on a resume"
				/>
				<figcaption>
					This image shows where the summary section sits on a resume.
				</figcaption>
			</figure>
		</>
	);
}

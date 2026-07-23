import Image from "next/image";
import type { JSX } from "react";
import imgResumeExperienceExample1 from "./_img/resume-experience-example-1.png";

export function ExperienceWorkedExample(): JSX.Element {
	return (
		<>
			<h3 id="example">
				<a
					href="#example"
					className="no-underline text-inherit hover:underline"
				>
					بررسی یک نمونه از تجربه کاری
				</a>
			</h3>
			<figure>
				<Image
					src={imgResumeExperienceExample1}
					alt="تجربه کاری در رزومه - نمونه ۱"
				/>
				<figcaption>نمونه‌ای از نحوه نوشتن تجربه کاری در رزومه</figcaption>
			</figure>
		</>
	);
}

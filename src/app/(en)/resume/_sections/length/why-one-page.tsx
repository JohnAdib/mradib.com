import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";

export function LengthWhyOnePage(): JSX.Element {
	return (
		<>
			<Msg severity="info">How many pages should my resume be? One page.</Msg>

			<ul>
				<li>
					If you have under 10 years of experience, one page is definitely
					enough
				</li>
				<li>
					For more than 10 years of experience, keeping it to one page is
					strongly encouraged{" "}
				</li>
				<li>
					For more than 15 years of experience, still aim for one page. If that
					is not possible, two pages, but no more than that
				</li>
			</ul>

			<p>
				Think about it. When something is not going to be read, why should it be
				there at all.
			</p>
			<Msg severity="error">
				If you decide to have a two page resume, make sure the second page is
				worth it.
			</Msg>
			<p>
				Remember that a resume is different from a CV. A CV can be two to three
				pages, and in special cases even up to eight pages. If you want to apply
				for a job, you need a resume, not a CV. A CV is usually used for
				academic purposes.
			</p>
		</>
	);
}

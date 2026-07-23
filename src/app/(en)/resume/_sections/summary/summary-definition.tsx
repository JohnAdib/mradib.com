import type { JSX } from "react";
import { Pre } from "@/components/syntax-highlighter/pre";

export function SummaryDefinition(): JSX.Element {
	return (
		<>
			<h3 id="definition">
				What is a resume summary and when should you use it?
			</h3>
			<p>
				A summary is usually 2 to 3 sentences about your job. Using a resume
				summary is recommended, though it is not mandatory.
			</p>
			<p>
				In the resume summary, it is best to mention the three things below.
			</p>
			<ol>
				<li>
					<span>Your current job and years of experience</span>
					<Pre language="plaintext">
						Customer support representative with 5+ years of experience in the
						IT industry.
					</Pre>
				</li>
				<li>
					<span>One or two of your main achievements or responsibilities</span>
					<Pre language="plaintext">
						Specialized in technical support, customer care, and user retention.
					</Pre>
				</li>
				<li>
					<span>Your motivation or the goal you expect from the work</span>
					<Pre language="plaintext">
						Looking for new opportunities as a support lead for a SaaS company.
					</Pre>
				</li>
			</ol>
		</>
	);
}

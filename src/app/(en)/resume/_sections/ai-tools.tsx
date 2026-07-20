import Link from "next/link";
import type { JSX } from "react";
import { CopyButton } from "@/components/copy-button";
import { SectionHeading } from "@/components/heading/section-heading";

const aiPrompt =
	"Act as a resume expert and follow the MrAdib method at https://mradib.com/resume/llms.txt. " +
	"Review my resume section by section, rewrite each experience bullet as an achievement with a number, " +
	"open every bullet with a strong and varied action verb, tailor the wording and keywords to the job posting I paste, " +
	"then score the result out of 100 and list the fixes in order of impact.";

export function SectionAiTools(): JSX.Element {
	return (
		<section id="ai-tools" className="scroll-mt-24">
			<SectionHeading anchor="ai-tools">
				Write your resume with AI
			</SectionHeading>
			<p>
				Using ChatGPT, Claude, or any AI to write your resume? Point it at this
				guide so it follows a proven method instead of generic filler. I turned
				this whole guide into two files any AI can read, both built from the
				same checklist you just used.
			</p>
			<ul>
				<li>
					<Link href="/resume/llms.txt">/resume/llms.txt</Link>: the full method
					as weighted rules an AI can follow and score against.
				</li>
				<li>
					<Link href="/resume/skill.md">/resume/skill.md</Link>: a ready-made
					skill you can hand to Claude or drop into your own AI tool.
				</li>
			</ul>
			<p>
				Or paste this prompt into your AI and add your resume plus the job
				posting:
			</p>
			<blockquote>{aiPrompt}</blockquote>
			<CopyButton
				text={aiPrompt}
				label="Copy the prompt"
				copiedLabel="Copied"
			/>
		</section>
	);
}

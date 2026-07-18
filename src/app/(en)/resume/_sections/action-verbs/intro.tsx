import Image from "next/image";
import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";
import imgVerbMetricTask from "./_img/resume-action-verb-metric-task.jpg";
import imgVerbTaskMetric from "./_img/resume-action-verb-task-metric.jpg";

export function ActionVerbsIntro(): JSX.Element {
	return (
		<>
			<p>
				When you write your resume and describe your achievements, it helps to
				start each sentence with an action verb. The list below is a set of
				strong verbs put together by hiring managers at large companies, ready
				to use in your resume.
			</p>

			<h3>How to write your achievements on a resume</h3>
			<p>
				There are two patterns you can use to write each achievement bullet on
				your resume.
			</p>
			<Msg severity="success">Both patterns work equally well.</Msg>

			<p>
				Notice how you should begin with an action verb. Then describe the task
				or project briefly, and close the sentence with the impact you had.
			</p>

			<figure>
				<Image src={imgVerbTaskMetric} alt="resume-action-verb-task-metric" />
				<figcaption dir="ltr">
					1. Metric at the end. Action Verb + Task or Project + Metric or Result
				</figcaption>
			</figure>

			<p>
				Here is the second pattern. You again start with an action verb, then
				state your impact, and finish by briefly describing the task, project,
				or how you did it. In this example, fewer support calls was the result.
			</p>
			<figure>
				<Image src={imgVerbMetricTask} alt="resume-action-verb-metric-task" />
				<figcaption dir="ltr">
					2. Metric in the middle. Action Verb + Metric or Result + Task or
					Project
				</figcaption>
			</figure>

			<p>
				Below you can see a full list of action verbs that work well in a
				resume.
			</p>
			<Msg severity="error">Do not use any verb more than twice.</Msg>
		</>
	);
}

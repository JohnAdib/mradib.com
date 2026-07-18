import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";

export function SkillLeveling(): JSX.Element {
	return (
		<>
			<h3>How do we list our skills?</h3>
			<p>
				The first step is to list your hard skills. For example, when you are a
				developer, you have worked with a certain framework or you know a
				certain language. As a general rule, we can split your skill level into
				three tiers.
			</p>
			<ul>
				<li>
					<h4>Beginner</h4>
					<p>
						You have a little early experience with this skill, maybe from a
						class exercise or a weekend hobby. You could say you are only
						familiar with the topic.
					</p>
				</li>
				<li>
					<h4>Intermediate</h4>
					<p>
						You have used this skill in a work setting and you have a good level
						of understanding of it.
					</p>
				</li>
				<li>
					<h4>Advanced</h4>
					<p>
						You have a high level of expertise in this area, to the point where
						you can even train your colleagues.
					</p>
				</li>
			</ul>
			<Msg severity="error">Never lie about your skill level.</Msg>
			<p>
				Imagine you are hired as a graphic designer and your first task is, say,
				a beautiful cover for an article in Illustrator. If you end up drawing
				something in Microsoft Paint and hand it over, you can be sure you will
				be out of work before the trial period ends.
			</p>
		</>
	);
}

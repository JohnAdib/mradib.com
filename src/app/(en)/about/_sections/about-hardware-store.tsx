import { Chapter } from "./chapter";

export function AboutHardwareStore() {
	return (
		<Chapter
			index="03"
			era="Early 2000s · Two summers"
			title="The summer I built a computer alone"
			slug="shop"
		>
			<p>
				A friend of my father's ran a computer shop in my city: he built
				machines, sold parts, fixed what broke. I spent my school summers there,
				still in my early teens.
			</p>
			<p>
				On one of my first days, a customer ordered a computer before the owner
				had arrived. I was alone in the shop, a kid surrounded by the most
				expensive parts in the room. So I built it: motherboard, CPU, RAM, all
				of it. The owner walked in to find a finished, working machine and asked
				me one question. How did you do that?
			</p>
			<p>
				I stayed two summers: assembling computers, installing Windows,
				diagnosing faults, talking customers through their options across the
				counter. Everyone else my age was on holiday. I was certain I had the
				best job in the world.
			</p>
		</Chapter>
	);
}

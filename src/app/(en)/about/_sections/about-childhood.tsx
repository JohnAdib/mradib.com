import { Chapter } from "./chapter";

export function AboutChildhood() {
	return (
		<Chapter
			index="01"
			era="Childhood · The first computer"
			title="The keyboard came first"
		>
			<p>
				My father brought the first piece home: a keyboard. Then, almost every
				month, another arrived: a mouse, a case, a motherboard. Each one was its
				own event, long before the machine they belonged to ever turned on.
			</p>
			<p>
				I had no idea what a CPU or a hard disk did. It didn't matter. Watching
				the pieces become a working computer did. I spent long stretches in DOS,
				in a plain command line, learning by poking around rather than being
				taught.
			</p>
			<p>
				Then my father brought home a Windows install disc. I put it in myself
				and watched it boot for the first time. The startup sound and the first
				graphical screen, after months of a dark, blank one, felt like magic.
			</p>
		</Chapter>
	);
}

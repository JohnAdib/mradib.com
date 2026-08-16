import { Chapter } from "./chapter";
import { StoryVideo } from "./story-video";

export function AboutChildhood() {
	return (
		<Chapter
			index="01"
			era="Childhood · The first computer"
			title="The keyboard came first"
			slug="childhood"
		>
			<p>
				My father brought the first piece home: a keyboard. Just a keyboard,
				with no computer to plug it into. Then, almost every month, another part
				arrived: a mouse, a case, a motherboard. I was in primary school, and
				every delivery was an event I counted the days to.
			</p>
			<p>
				The mouse arrived before we had a computer to use it with. I lost count
				of how many times I took the ball out and cleaned it. In case you don't
				know{" "}
				<StoryVideo
					ariaLabel="See what the hell I'm talking about: cleaning a ball mouse"
					aspect="portrait"
					captionsSrc="/about/cleaning-a-ball-mouse.vtt"
					label="what the hell I'm talking about"
					src="/about/cleaning-a-ball-mouse.mp4"
					title="Cleaning a ball mouse"
				/>
				, congratulations. You missed one of computing's strangest household
				chores.
			</p>
			<p>
				I had no idea what a CPU or a hard disk did. It didn't matter. One day
				the pieces on the shelf became a machine that switched on, and from then
				on I came straight home from school to it. No manual, no teacher. Just
				DOS, NC, a blinking cursor, and more DOS games on floppy disks than I
				can remember, including{" "}
				<StoryVideo
					ariaLabel="Play Prince of Persia gameplay"
					aspect="landscape"
					captionsSrc="/about/prince-of-persia-dos-gameplay.vtt"
					label="Prince of Persia"
					src="/about/prince-of-persia-dos-gameplay.mp4"
					title="Prince of Persia (DOS, 1990)"
				/>
				.
			</p>
			<p>
				I called it playing. I lost track of how long I spent in front of that
				dark screen. To me, it was a whole world.
			</p>
		</Chapter>
	);
}

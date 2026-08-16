import { Chapter } from "./chapter";
import { StoryVideo } from "./story-video";

export function AboutWindows() {
	return (
		<Chapter
			index="02"
			era="90s · The first install"
			title="The startup sound"
			slug="windows"
		>
			<p>
				One day my father came home with a different kind of part: a Windows
				install disc. Nobody showed me what to do with it. I put it in and
				installed it myself, first try. The first Windows install of my life. I
				have done hundreds since.
			</p>
			<p>
				The machine rebooted into a graphical screen, and the speaker played the
				magical{" "}
				<StoryVideo
					ariaLabel="Play the Windows 98 startup sound"
					aspect="classic"
					captionsSrc="/about/windows-98-startup-sound.vtt"
					label="Windows 98 startup sound"
					src="/about/windows-98-startup-sound.mp4"
					title="Windows 98 startup sound"
				/>
				. After all that time in front of a dark, silent command line, the
				computer talked back.
			</p>
			<p>
				It lasted a few seconds, but I never forgot that moment. Some people
				remember their first bicycle. I remember a chime through a cheap
				speaker, and knowing exactly what I wanted to be near for the rest of my
				life.
			</p>
		</Chapter>
	);
}

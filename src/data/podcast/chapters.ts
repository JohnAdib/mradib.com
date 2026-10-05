import { futureChapters } from "./chapters-future";
import { leadershipChapters } from "./chapters-leadership";
import { workChapters } from "./chapters-work";

export const podcastChapters = [
	...workChapters,
	...leadershipChapters,
	...futureChapters,
].sort((a, b) => a.seconds - b.seconds);

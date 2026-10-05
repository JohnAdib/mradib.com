import type { PodcastChapter } from "./chapter";

export const workChapters: PodcastChapter[] = [
	{
		id: "productivity",
		title: "How AI changes engineering productivity",
		seconds: 579,
		paragraphs: [
			"The pace of development has changed so much that comparing it with how we worked even a year earlier feels strange. I used to spend much more time writing code line by line and looking for answers on Stack Overflow. Now I can explore an idea, build it, and try another approach in a fraction of that time. That changes what I expect from myself as an engineer.",
			"But faster coding exposes the delays around it. A requirement goes back and forth. An edge case waits for a decision. A growing queue of pull requests waits for review. If those parts stay the same, the whole process still gets stuck. In the conversation, I kept coming back to looking at the entire development process, including the work that happens before anyone writes code.",
			"I also see a big difference in how deeply people use these tools. Having an AI assistant open is a starting point. There is much more to explore in how we investigate problems, define requirements, and connect the steps of delivery.",
		],
	},
	{
		id: "prioritization",
		title: "Deciding what deserves to be built",
		seconds: 1017,
		paragraphs: [
			"When I can build several possible solutions quickly, choosing between them becomes a much bigger part of the job. The question is which direction makes sense for the product, and which ideas we should say no to. Being able to build more things gives us more decisions to make.",
			"Some of that uncertainty can be resolved by putting alternatives in front of users. I spoke about building two variants, running an A/B test, and using the results to decide what comes next. The cost of trying those alternatives is falling, which makes this approach more accessible to smaller teams.",
			"That is where I see engineering providing more value to the business: making options concrete, collecting useful evidence, and helping people make a decision. We still need priorities. We just have better ways to explore them.",
		],
	},
	{
		id: "product-engineer",
		title: "From software engineer to product engineer",
		seconds: 1133,
		paragraphs: [
			"I know very good engineers who are used to receiving a carefully defined ticket. Someone else has understood the problem, chosen a solution, written the acceptance criteria, and handed over the implementation. They can deliver that work quickly and well. But AI is changing how much of that final step needs an engineer to carry it out.",
			"If a ticket already contains all the context and decisions, an agent can do a growing amount of the implementation. That makes it important for engineers to participate earlier. I want engineers to understand why a problem matters, ask questions about the proposed solution, and help work through the details.",
			"This is a real change in mindset, and I do not expect it to feel easy for everyone. Product engineering existed before these tools. AI is making the reasons to work that way harder to ignore.",
		],
		quote: {
			text: "We need to think differently.",
			seconds: 1239.52,
		},
	},
	{
		id: "ownership",
		title: "Ownership beyond shipping code",
		seconds: 1307,
		paragraphs: [
			"Deploying a feature used to be a natural point to hand it over and move to the next ticket. With more product ownership, the engineer stays involved. Did the feature do what we expected? Did the fix solve the problem? What are the metrics telling us?",
			"Those answers should shape the next decision. Sometimes we need another iteration. Sometimes the first version has missed something. I see understanding what happens after release as part of the engineer's responsibility. It takes a different kind of attention from simply working through a queue of tasks.",
		],
		quote: {
			text: "Measuring the success of the feature or bug fix you deliver is your responsibility now.",
			seconds: 1322,
			edited: true,
		},
	},
];

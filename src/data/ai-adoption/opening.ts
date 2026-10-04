import type { ArticleSectionData } from "./types";

export const openingSections: ArticleSectionData[] = [
	{
		id: "ai-adoption-and-trust",
		title: "AI adoption starts with the process",
		tocTitle: "AI adoption",
		kind: "adoption",
		paragraphs: [
			"AI adoption became useful when I gave it a development process I could trust. I wanted to change a slow cycle in which writing the feature was only the beginning of the work needed to release it.",
			"Before that change, AI was not an intentional part of the development loop. Regressions weakened confidence, and checking the app after implementation took significant time. We had tests, but the feedback around a change did not consistently tell us whether the whole experience still worked. Finishing the code left another question open: how much checking would we need before we felt ready to ship?",
			"That uncertainty affected what we chose to build. Backlog improvements and projects could be postponed because their delivery time was difficult to predict. A useful feature also brought questions about the surrounding flows and the regressions it might introduce. The cost of investigating, testing and checking again made a small code change feel like a much larger commitment.",
			"I set a clear goal: bring confidence closer to the work. AI adoption gave me an opportunity to make implementation include understanding the requirement, writing tests, running checks, exercising the interface and preparing evidence for review. I defined what the agent had to produce before its work could be accepted. That made adoption an intentional change to how we developed and assessed the product.",
		],
	},
	{
		id: "the-cost-of-rechecking",
		title: "Manual QA was carrying too much of the loop",
		tocTitle: "Repeated QA",
		paragraphs: [
			"Manual QA was doing valuable work. Someone had to exercise the application, notice confusing behaviour and check that a feature made sense. Those activities require judgment. They also exposed how much repeated verification the process asked people to carry.",
			"Every release brought familiar paths back into consideration. The same screen could be checked again because a nearby dependency had changed. A previously fixed bug could demand another round of checking because its behaviour had never become an executable test. Knowledge existed in people, conversations and past reviews, and had to be assembled again for the next change.",
			"I see that as a process problem. Engineers and QA staff were responding to the evidence available to them. When that evidence arrived late, uncertainty accumulated. More changes waiting for the same round of testing meant more possible interactions to investigate and more context to recover when something failed.",
			"My goal was to turn repeated checks into reusable protection where that was practical, while keeping human attention on acceptance, exploratory testing and the experience itself. A bug investigation should leave something useful for the next release. A verified flow should be easy to run again. A reviewer should be able to inspect what happened without reconstructing the whole task. That would reduce the amount of confidence we had to rebuild from memory.",
		],
	},
	{
		id: "planning-before-generation",
		title: "I defined the work before asking AI to do it",
		tocTitle: "Plan the change",
		paragraphs: [
			"I started by making the development rules explicit. The agent needed to know where logic belonged, how existing components were used, which checks mattered and what evidence a reviewer would expect. Leaving those decisions implicit made each task an opportunity for the agent to invent a different process.",
			"Planning became part of the task. Before implementation, I ask the agent to inspect the relevant code, understand the requested behaviour and propose a bounded change. The plan should identify the happy path, important failure cases, affected surfaces and the way we will verify the result. I review that understanding before the agent starts changing the product.",
			"This gives me a useful place to exercise judgment. I can correct a misunderstood requirement while the change is still a plan. I can narrow a task that has become too broad, or ask why a new abstraction is needed when an existing one would work. Approval is more meaningful when the proposed behaviour and evidence are concrete.",
			"The rules then travel with the work. They guide implementation, test authoring and review. I aim for one consistent definition of acceptable work across people and tools. That definition can evolve as we learn. When a failure exposes an assumption, I can improve the rule or verification step that allowed the assumption to survive.",
		],
	},
	{
		id: "a-repeatable-development-loop",
		title: "The unit of work became a verified change",
		tocTitle: "Repeatable loop",
		kind: "loop",
		paragraphs: [
			"The development loop I work toward is straightforward: agree the behaviour, implement a bounded change, add or update tests, run the relevant checks, exercise the interface, collect evidence and review the result. Test builds and production feedback continue the loop after the pull request.",
			"An agent can carry much of the mechanical work between those stages. It can inspect dependencies, write implementation and tests, run the tools, interpret failures and prepare the review material. Giving it an isolated workspace also makes parallel work easier to manage. Each task needs a clear scope and ownership of the files or devices it uses.",
			"Each stage answers a different question. The plan asks whether we understood the request. Tests check specified behaviour. Static checks examine the code. Device evidence shows the interaction. Review considers whether the implementation and the experience are acceptable. A release then gives us new observations from actual use.",
			"The concrete result is a request that is easier to assess. Clear acceptance criteria give me something to judge against, while code, tests, device evidence and a test build make the implementation reviewable. I can see what is ready, what failed and what needs another check. These artifacts give people a better basis for deciding whether the change meets the request.",
		],
	},
];

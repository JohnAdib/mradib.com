import type { ArticleSectionData } from "./types";

export const feedbackSections: ArticleSectionData[] = [
	{
		id: "shared-components-and-accessibility",
		title: "Shared components make quality reusable",
		tocTitle: "Shared components",
		paragraphs: [
			"I also reduced the number of times the same UI decisions had to be made. Shared components give the agent an existing implementation to use, with states and behaviour that can be inspected before it writes a new screen. The component catalogue becomes context for implementation as well as a place to verify the UI.",
			"Storybook gives those states a visible home. Unit and interaction tests exercise behaviour, visual regression review checks appearance, and on-device examples show how the component behaves in a native environment. A shared Button can carry work that would otherwise be repeated across screens: focus, disabled state, loading, labels and consistent spacing.",
			"Accessibility belongs in that work. A control should expose a meaningful role, label and state. Tests that locate it through those semantics check something closer to the user's experience than an arbitrary identifier. An agent can help author the checks, while screen-reader use and human review still contribute important evidence.",
			"Shared components also change the conversation during review. I can ask why a new screen bypasses an established component, or whether a change to a shared component needs broader verification. A fix can benefit multiple consumers, and a mistake can affect them too. Reuse becomes valuable when it carries clear responsibilities for testing and review alongside the implementation.",
		],
	},
	{
		id: "review-and-test-builds",
		title: "Review ends with a decision people can make",
		tocTitle: "Review and builds",
		paragraphs: [
			"AI review adds another opportunity to inspect a change. Reviewers can check the same written standards used during implementation, question missing tests and identify edge cases. Multiple reviewers are useful when they provide independent reasoning, but their comments still need to be evaluated. An agent should investigate a suggestion before changing correct code to satisfy it.",
			"The pull request should bring the evidence together: the intended behaviour, the implementation, relevant test results, device captures and remaining limitations. That gives a human reviewer a concrete decision to make. They can assess whether the change meets the requirement, whether the tests protect the right behaviour and whether the experience is acceptable.",
			"Test builds extend that review beyond the engineer's environment. Automated build delivery to TestFlight makes an iOS change easier to try on a real device. A build for testers is a distinct step from publishing a public release. Store review, rollout choices and acceptance still need their own decisions.",
			"This is where the process starts to support smaller, more frequent releases. The practical gain is earlier access to an inspectable change and less work assembling its evidence. Release frequency alone cannot establish quality. I want the path to a release to be understandable, with a clear account of what was verified and what still requires human attention.",
		],
	},
	{
		id: "production-feedback",
		title: "Production feedback starts the next task",
		tocTitle: "Production signals",
		kind: "errors",
		paragraphs: [
			"The loop continues after release. Automated tests exercise the cases we have specified; production exposes combinations of devices, data, timing and user behaviour that we have not fully anticipated. Monitoring becomes useful when an observation can turn into a task someone can investigate.",
			"I made production feedback more actionable through regular triage and a connection between issues and development work. Release context and active feature flags help explain which implementation a user encountered. From there, the work is to reproduce the behaviour, decide whether it is a defect or an expected outcome, and establish a way to verify the correction.",
			"The Sentry chart shows recorded error-event volume over time. Its decline needs a careful reading. The work included fixes, filtering and changes to sampling. The data cannot separate their effects. These counts are not normalised by sessions or usage, and they are not a crash-free rate. A lower count cannot establish how much more reliable the app became.",
			"Repeated events and distinct problems are also different measures. One recurring condition can dominate the event volume. Expected outcomes may deserve product attention without being software defects. Sorting these signals makes the dashboard more useful, provided meaningful failures remain visible. Changes to instrumentation need scrutiny too: monitoring should help us understand the app without interfering with the user's action.",
			"For a reproducible defect, I want the investigation to return to the development loop with a testable requirement. That creates the opportunity to preserve the fix rather than only close the issue. Production feedback then helps decide what we work on next. The chart is evidence of recorded activity; the durable value comes from the decisions and verification that activity leads to.",
		],
	},
	{
		id: "adopting-the-loop",
		title: "Start with one change you can verify",
		tocTitle: "Adopt the loop",
		paragraphs: [
			"The lesson I take from this work is that AI adoption needs a repeatable way to earn trust. That starts with a task people understand, rules the agent can follow and evidence a reviewer can inspect. The agent's speed becomes useful when the surrounding process can assess its output.",
			"For a team beginning this work, I would choose one bounded change and make the whole path visible. Agree its acceptance criteria. Ask the agent to identify a meaningful test. Run the actual checks. Exercise the interface. Prepare the review evidence. Deliver a test build, and decide how to watch the relevant behaviour after release. Use that task to find the gaps in the process.",
			"Then improve the loop where those gaps appear. Keep checks fast enough to use regularly, make failures understandable and give people room for judgment. An unreadable result or a brittle flow needs attention because it affects the evidence everyone relies on. Measure the cost of reaching an accepted change, alongside useful outcomes such as protected behaviour and actionable feedback.",
			"I want each development task to leave the next one better supported. The useful result of AI adoption is code with a reason to trust it, a way to inspect it and a path to learn from what happens when people use it.",
		],
	},
];

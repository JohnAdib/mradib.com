import type { ArticleSectionData } from "./types";

export const verificationSections: ArticleSectionData[] = [
	{
		id: "agent-written-tests",
		title: "Agent-written tests became part of implementation",
		tocTitle: "AI-written tests",
		kind: "tests",
		paragraphs: [
			"I made test authoring part of the expected implementation work. When an agent changes behaviour, I ask it to write or update the tests that explain that behaviour. For a bug fix, the most useful starting point is a reproducible failure. The test should catch the bug before the fix and pass once the fix is applied.",
			"Growth in the test suite accompanied that change in habit. The chart counts unit-test files at two points in time. This is an inventory, rather than a coverage percentage or a measure of test quality. File organisation can increase the count, so the number needs to be read alongside what those tests exercise.",
			"I look for assertions about outcomes: the value returned, the state shown to the user, the request made or the recovery after a failure. Tests that simply repeat the implementation can pass while the requirement is wrong. Separating business rules from UI rendering makes important decisions easier to exercise directly, while interaction tests check how those decisions appear in the component.",
			"Agent assistance makes this work easier to include in the task, but I still need to inspect the cases. Useful protection comes from choosing the right behaviour to preserve. Existing tests may need updating rather than adding a new file. The aim is an executable account of the change that future work can run again.",
		],
	},
	{
		id: "deterministic-checks",
		title: "AI writes the work. CI checks it.",
		tocTitle: "CI checks",
		paragraphs: [
			"I keep a clear boundary between authoring and verification. An AI agent can propose code, tests and an explanation. The check result comes from running the tools against the actual change. A confident answer in the chat is not a substitute for that output.",
			"The check chain includes formatting and linting, TypeScript, unit tests, coverage inspection and build checks. UI flows add another layer. Each check should have a defined command, a visible result and a clear relationship to the code under review. The agent can run this chain, investigate failures and repeat it after making a correction.",
			"A pipeline also needs honest reporting. Dispatching a cloud build successfully proves that the request was accepted; the build and its tests still need their own results. A scheduled run that never starts gives us no evidence. A test that is skipped contributes no protection for the behaviour it would have exercised. Those distinctions matter when someone is deciding whether a change is ready.",
			"I want fresh evidence for the revision being reviewed. If a fix changes the code after a successful run, the relevant checks need to run again. Required gates should enforce the expectations that the team relies on, and failures need an owner. The useful role for AI here is to work through the feedback quickly. The tools establish what passed, and people decide what that evidence means for acceptance.",
		],
	},
	{
		id: "reliable-ui-flows",
		title: "Make UI flows reliable enough to use",
		tocTitle: "Reliable UI flows",
		paragraphs: [
			"Reliable UI automation starts before the first tap. Test data and setup need to be predictable: a known initial state, controlled conditions for a failure case and a way to reset between runs. A flow should establish what it needs without depending on another test having succeeded earlier.",
			"Selectors should express stable, accessible meaning. A role, label and state give a control an identity that users and tests can understand. Avoid locating an element only through its position or incidental wording. When a selector fails, inspect the actual interface and accessibility information before changing the test.",
			"Break long journeys into small, independent suites with clear results. That keeps a failure in one area from hiding the evidence for everything after it. Keep setup costs and execution limits visible when deciding how to group flows. A shorter run also makes the failing step easier to investigate.",
			"Treat a flake as a problem to diagnose. Check timing, overlays, data and assumptions about the device; rerunning until green leaves the cause in place. The suite's scope needs the same honesty. A flow that exists but cannot run supplies no current evidence. Report what ran and what was skipped, so a green result describes the behaviours actually exercised.",
		],
	},
	{
		id: "saving-a-setting-example",
		title: "An illustrative example: saving a setting",
		tocTitle: "Settings example",
		kind: "example",
		paragraphs: [
			"Consider a generic React Native settings screen. This is an illustrative example, not a production incident or a copy of private code. A user changes a preference and taps Save. The requirement is that the preference persists, and a failed save leaves a clear path to retry.",
			"Start with the failure. Suppose the screen shows success as soon as the button is pressed. When storage rejects the write, the interface still presents the new value as saved. The implementation completed an interaction, but it broke the promise that the setting would survive reopening the screen.",
			"I would ask the agent to write a test that makes the storage operation reject. The test should assert that success is not shown, the user's chosen value remains available and retry becomes possible. Running it against the faulty implementation should fail. That establishes the behaviour the fix must change.",
			"The implementation can then model the pending, saved and failed states explicitly. While saving, it prevents duplicate submissions. It confirms success only after persistence succeeds. On failure, it restores an actionable state and shows an understandable message. Tests should also cover a successful retry and reopening the screen with the stored value.",
			"To check the regression protection, temporarily revert the relevant fix and run the failure test again. It should fail for the original reason. Then restore the fix and run the checks. Finally, exercise the interaction on iOS and Android, including the failure and retry, and record the visible result. A reviewer can now inspect the requirement, the failing case, the fix and the device behaviour as one change.",
		],
	},
	{
		id: "device-evidence",
		title: "I ask for evidence of the real interaction",
		tocTitle: "Device evidence",
		paragraphs: [
			"Device evidence closes a gap that code review alone leaves open. I ask the agent to launch the application, reach the affected screen and exercise the behaviour where a user encounters it. If a feature depends on a flag, the agent needs to confirm the intended state before capturing the result.",
			"A screenshot is useful for a layout or a visible state. A recording is better for a sequence: opening a screen, submitting, waiting, failing and recovering. The evidence should show the part of the experience that changed. It should also identify the platform and the revision being tested, so the reviewer knows what the capture represents.",
			"This matters in React Native because the interaction crosses platform boundaries. A keyboard, system prompt or overlay can affect a flow differently on iOS and Android. A unit test can preserve a state transition while a real tap is intercepted by something elsewhere on the screen. The recording adds a different kind of evidence.",
			"Capturing both platforms can run in parallel when each worker has an isolated device. I also keep the scope honest: a simulator recording demonstrates a simulator run, and a physical-device test adds its own evidence. TestFlight builds let people try the change on their own devices. None of these artifacts replaces exploratory testing, but each makes the review better informed.",
		],
	},
];

import { verificationCheckpoints } from "./metrics";
import type { ArticleSectionData } from "./types";

const april = verificationCheckpoints[3];
const may = verificationCheckpoints[4];
const june = verificationCheckpoints[5];
const july = verificationCheckpoints[6];
const august = verificationCheckpoints[7];
const september = verificationCheckpoints[8];
const last = verificationCheckpoints[verificationCheckpoints.length - 1];

export const verificationSections: ArticleSectionData[] = [
	{
		id: "agent-written-tests",
		title: "The test inventory grew as tests became part of each change",
		tocTitle: "Unit-test history",
		kind: "tests",
		paragraphs: [
			`The unit-test history shows the change in habit over several months. January to April ended at ${verificationCheckpoints
				.slice(0, 4)
				.map((point) => point.unitTestFiles)
				.join(
					", ",
				)} files. The following month-end snapshots were ${may.unitTestFiles} in May, ${june.unitTestFiles} in June, ${july.unitTestFiles} in July and ${august.unitTestFiles.toLocaleString("en-GB")} in August. The app reached ${september.unitTestFiles.toLocaleString("en-GB")} files on 12 September and ${last.unitTestFiles.toLocaleString("en-GB")} on 2 October. Compared with April, that final snapshot contains ${(last.unitTestFiles - april.unitTestFiles).toLocaleString("en-GB")} additional test files, about ${(last.unitTestFiles / april.unitTestFiles).toFixed(1)} times the earlier inventory.`,
			"These are test files, not individual assertions or a coverage percentage. The 2 October inventory also contained 7,609 it() blocks and 225 parameterised it.each tables. A file can contain many cases, and splitting a file changes the inventory without increasing protection. I include the timeline because it makes the sustained investment visible; it needs to be read alongside the behaviours the tests exercise and the results of actually running them.",
			"I made tests part of the implementation contract. The agent uses Jest with jest-expo and a shared render helper that supplies providers and routing. Recorded MSW GraphQL handlers are shared with component examples, so the tests and the visible states can use the same controlled responses. Business decisions that do not need rendering live in pure helpers. That gives the agent a practical way to test a failure case without booting the entire interface.",
			"For a regression, I ask for a test that fails before the fix and passes after it. I also temporarily revert the correction to confirm that the specification fails for the original reason. In one review, Qodo caught two defects that earlier passes had missed; both new specifications failed when their fixes were reverted. That establishes protection more clearly than a count or a test that follows the implementation.",
		],
	},
	{
		id: "deterministic-checks",
		title: "CI checks the change, and its cost became visible",
		tocTitle: "Checks and CI cost",
		paragraphs: [
			"The PR check chain includes Biome, TypeScript, unit tests, coverage, Expo export and prebuild, plus checks for the device flows and release tooling. AI agents write implementation and tests; these CI commands remain deterministic. The agent can run the chain, interpret a failure and correct the code, but its explanation cannot establish that a build passed. I want the actual output from the actual revision.",
			"Coverage requires a careful distinction. The written standard asks for 100% unit coverage on changed production files, with the three AI reviewers checking missing tests and compliance. The inherited global Jest thresholds remained much lower: 12% branches, 9% functions, 14% lines and 14% statements. A green global coverage result therefore does not establish 100% application coverage, or automatically prove that every changed line met the written standard. Review and measurement scope still matter.",
			"Consolidating the app and shared packages made more context available to agents and removed a separate publishing cycle for a component change. I observed CI time move from about five to fifteen minutes; a recorded sample of 100 app CI workflow runs had a median of 15.6 minutes. That is a real cost to the feedback loop, and it made affected-only CI the next prerequisite. A larger workspace is useful only if its checks remain practical to run regularly.",
			"I also separated dispatch success from test success. GitHub Actions triggers the native work in EAS; a dispatch job can finish in seconds while the build and flows continue elsewhere. Fresh scheduled device builds tie the run to a known commit. Their results need to be visible where someone makes the merge or release decision.",
		],
	},
	{
		id: "reliable-ui-flows",
		title: "Maestro became a running system rather than a folder of flows",
		tocTitle: "Device-flow history",
		kind: "flows",
		paragraphs: [
			`The Maestro inventory stayed at ${april.uiFlowFiles} YAML files from January through April, grew to ${may.uiFlowFiles} in May, then reached ${june.uiFlowFiles} in June, ${july.uiFlowFiles} in July and ${august.uiFlowFiles} in August. It stood at ${september.uiFlowFiles} on 12 September and ${last.uiFlowFiles} on 2 October. The final structure included 125 leaf flows, 53 shared sub-flows and 37 suite aggregates. Those categories make the suite reusable; ${last.uiFlowFiles} files should not be read as ${last.uiFlowFiles} independent user journeys.`,
			"The first EAS device workflow landed in May. On 18 June, the flows moved into Maestro Cloud with PR smoke and nightly execution. PR labels select a smoke run or the broader device suite, and the scheduled configuration eventually reached 31 cloud jobs: 22 on iOS and nine on Android. Each job names an aggregate entrypoint, which calls the relevant leaves and setup. File tags alone were not selecting the CI runs.",
			"We changed the job structure after a flaky suite prevented the suites behind it from producing evidence. On 5 August, nightly execution was split into one job per suite and platform. Two days later, a nine-leaf run hit the 15-minute execution limit, so we split long suites into smaller parts. Some leaves needed roughly two minutes of setup each. Grouping was therefore a budget decision as well as a code-organisation decision.",
			"Predictable setup is essential. The flows use controlled initial state and launch arguments to select test conditions, with backend scenarios for known responses rather than a separate mock server. Accessibility labels and exact text matching make selectors easier to diagnose, while overlays and sticky elements can still intercept taps. I want a failed flow explained and repaired. Changing test data until a run happens to pass leaves the original uncertainty in place.",
		],
	},
	{
		id: "flow-lint-and-reachability",
		title: "I added static checks for the tests themselves",
		tocTitle: "Test linting",
		paragraphs: [
			"Growing the device suite exposed another problem: a file could look plausible and still be unable to run, or never be reached by a scheduled aggregate. On 5 August, I added a static analyser for the Maestro YAML. It checks syntax, paths, application identifiers, selectors that cannot resolve and which flow files the CI entrypoints can reach. That catches problems before an expensive build and device run.",
			"The analyser has nine rules, eight of them blocking, and 104 self-test cases. It runs in under a second in the normal CI lint job. Exceptions live in an allow-list with reasons rather than being silently ignored. The distinction between an inventory file and a reachable, executable test became part of the tooling, rather than something a reviewer had to remember every time.",
			"We documented failure patterns for agents: exact text matching, footers intercepting taps, overlays and setup that left the app in the wrong state. The next agent can read those learnings before trying the same approach. Debugging improves both the test and the instructions used to maintain it.",
			"The same principle applies to release automation. Its helper scripts have their own self-tests, with 167 checks in the PR chain. If a tag decides the version or an over-the-air update must reject a native change, those rules deserve executable specifications too. Automation around the application can create a regression as easily as application code. Testing the machinery makes its result easier to rely on.",
		],
	},
	{
		id: "device-evidence",
		title:
			"The review includes screenshots and a recording from both platforms",
		tocTitle: "Device evidence",
		paragraphs: [
			"Device evidence runs as a second pass after implementation and checks. The agent launches the app, reaches the affected screen and exercises the change where it is actually used. If a flag gates the interface, it confirms the flag is enabled before recording. An isolated component example helps with states, but the evidence also needs to show the surrounding screen and interaction.",
			"The workflow asks for multiple screenshots and an MP4 on each platform. One reviewed change attached twelve files: three screenshots and three recordings on iOS, and the same on Android. I use screenshots for visible states and recordings for sequences that include waiting, failure or recovery. Platform and revision details travel with the captures so that a reviewer can understand what they represent.",
			"iOS and Android capture can proceed in parallel with one worker per platform, provided each claims a separate device and pins its commands to that device identifier. This prevents two concurrent tasks from tapping or recording the same simulator. Recordings are attached to the task, and the PR links to that evidence. It gives the reviewer a direct path from the requested behaviour to what happened on the device.",
			"This does not make a simulator a physical phone. Simulator evidence checks the interaction in that environment; TestFlight then lets people add feedback from real devices. It also does not replace exploratory testing. The practical improvement is that acceptance no longer begins with someone asking the author to recreate the changed flow. They can inspect the captured result and decide what additional checking is needed.",
		],
	},
	{
		id: "shared-components-and-accessibility",
		title: "Shared components gave agents verified building blocks",
		tocTitle: "Shared components",
		paragraphs: [
			"The mobile design-system work started in May. By the source snapshot it contained 94 components and 801 stories, with 213 test files. The app's rulebook directs new reusable UI components into that package rather than allowing each screen to invent them again. That gives an agent a catalogue of existing behaviour and states to consult before writing a new interface.",
			"One story serves several consumers: web Storybook through react-native-web, an on-device Storybook app, Chromatic snapshots and Vitest browser tests. The native catalogue is delivered through TestFlight, so a component can be exercised away from the developer's machine. Chromatic blocks a design-system change until its visual result is reviewed. Code, interaction, appearance and native behaviour each get their own evidence.",
			"The Button examples illustrate the depth this can carry. Its catalogue has 24 stories including hover, press and focus interactions, alongside unit and interaction tests, a design reference and an accessibility report. Across the design-system tests, queries by role appear 494 times. Roles, labels and states are part of the component contract, so both assistive technology and automated tests have meaningful information to work with.",
			"A shared-component change needs verification across its consumers. The catalogue reduces repeated implementation decisions, and the visual gate makes appearance changes explicit. Those responsibilities travel with reuse.",
		],
	},
];

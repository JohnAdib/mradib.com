// Shared story for both presentation formats.
export const source = "https://mradib.com/beyond-the-qa-bottleneck";
export const slides = [
	{
		kind: "cover",
		theme: "dark",
		title: "Beyond the QA\nBottleneck",
		lead: "Building confidence in React Native with AI",
		foot: "React Native London Meetup · Thursday 22 October 2026\nFunding Circle · 71 Queen Victoria Street, London",
		notes:
			"• Code finished. Confidence missing.\n• React Native + AI adoption\n• Verification inside everyday development\n• John Adib · MrAdib.com\n• React Native London Meetup. 22 October 2026\n• Funding Circle, 71 Queen Victoria Street",
		chapter: "",
		speaker: "John Adib · MrAdib.com",
		coverFont: "Newsreader",
		speakerRole: "Engineering Manager at Zapp",
	},
	{
		kind: "statement",
		theme: "dark",
		chapter: "",
		title: "Regressions.\nEvery release.",
		lead: "We kept returning to behaviour we had already checked.",
		notes:
			"• Regressions every release\n• Previously checked behaviour breaks again\n• Repeated work. Falling confidence.\n• First-hand experience, not an incident-rate metric",
	},
	{
		kind: "statement",
		theme: "dark",
		chapter: "",
		title: "Tests existed.\nNobody ran them.",
		lead: "A small test suite. End-to-end checks outside CI.",
		notes:
			"• Small unit-test suite\n• End-to-end checks outside CI\n• Nobody ran them\n• Files existed. Reliable feedback did not.",
	},
	{
		kind: "statement",
		theme: "dark",
		chapter: "",
		title: "More than\nthree days of QA.",
		lead: "Engineering, product and UX/design.\nMany people paused their own work.",
		notes:
			"• More than three days of app QA\n• Engineering, product, UX/design\n• Many people pause their own work\n• The cost: interrupted progress",
	},
	{
		kind: "statement",
		theme: "dark",
		chapter: "",
		title: "Every release waited\ndays for approval.",
		lead: "A chain of sign-offs held up the whole release.",
		notes:
			"• Days waiting for approval\n• Sign-off chain holds the whole release\n• One feature delays other work\n• Later: approve the feature flag",
	},
	{
		kind: "statement",
		theme: "dark",
		title: "Projects postponed\nby over a quarter.",
		lead: "All the existing projects had slipped by more than a quarter.",
		notes:
			"• Existing projects delayed over a quarter\n• Regression work + slow QA + release queues\n• Backlog uncertainty\n• Process problem, not individual blame",
		chapter: "",
	},
	{
		kind: "intro",
		theme: "paper",
		title: "John Adib",
		lead: "The story of an EM in the era of AI",
		items: [
			[
				"2× co-founder. Former CTO.",
				"18 years building and improving systems.",
			],
			["Engineering leader and mentor", "Based in London."],
		],
		notes:
			"• John Adib · London\n• 2× co-founder. Former CTO. 18 years.\n• Engineering leader + mentor\n• Product engineering. Broader ownership.\n• I love moving mountains.",
		chapter: "",
		website: "https://mradib.com",
		websiteLabel: "MrAdib.com",
		tagline: "I love moving mountains.",
		credentials: "2× co-founder. Former CTO. Engineering leader and mentor.",
		experience:
			"18 years building and improving systems. I love moving mountains.",
	},
	{
		kind: "divider",
		theme: "section",
		chapter: "",
		title: "Skills",
		lead: "Make good engineering habits repeatable.",
		step: 1,
		sections: [
			"Skills",
			"Testing",
			"CI",
			"Device verification",
			"AI reviewers",
			"Sentry",
			"Delivery",
		],
		notes:
			"• Repeat the good engineering habits\n• AI adoption includes verification\n• Seven changes, one development loop\n• First: reusable skills",
	},
	{
		kind: "skillset",
		theme: "paper",
		chapter: "",
		title: "Eight skills. One development loop.",
		lead: "Each skill has a responsibility and an output.",
		items: [
			["cook", "Coordinates the task"],
			["sherlock", "Discovers the repository"],
			["dig", "Researches the behaviour"],
			["mastermind", "Plans for approval"],
			["michelin", "Implements and verifies"],
			["mugshot", "Captures device evidence"],
			["parole", "Evaluates review feedback"],
			["saul", "Communicates the result"],
		],
		notes:
			"• cook: coordinate; sherlock: discover\n• dig: research; mastermind: plan\n• michelin: implement; mugshot: capture\n• parole: evaluate feedback; saul: communicate\n• One workflow. Focus next on Michelin.",
	},
	{
		kind: "rows",
		theme: "paper",
		chapter: "",
		title: "My engineering standards, written down",
		lead: "Michelin makes those standards part of every change.",
		items: [
			["Reuse and consistency", "Build on existing code, patterns and tools."],
			["Separation of concerns", "Keep UI, state and business logic focused."],
			["Quality bar", "Meaningful tests. Readable code. Verified results."],
		],
		notes:
			"• 18 years of engineering judgement, written down\n• Reuse: code, components, patterns, tools\n• Separation: UI, state, business decisions\n• Quality: tests, readability, actual check results\n• Shared standards for implementation and review",
	},
	{
		kind: "divider",
		theme: "section",
		chapter: "",
		title: "Testing",
		lead: "Make each check protect real behaviour.",
		step: 2,
		sections: [
			"Skills",
			"Testing",
			"CI",
			"Device verification",
			"AI reviewers",
			"Sentry",
			"Delivery",
		],
		notes:
			"• Next: meaningful tests\n• Expected behaviour + failure case\n• Every correction leaves protection",
	},
	{
		kind: "rows",
		theme: "paper",
		title: "The testing bar, written into the codebase",
		lead: "Protect what works. Raise the bar with every change.",
		items: [
			["New code needs tests", "No test, no acceptance."],
			[
				"Bug fixes prove both cases",
				"The test fails before the fix and passes after it.",
			],
			[
				"Titles explain behaviour",
				"Name the expected result in plain language.",
			],
			[
				"The bar keeps rising",
				"Keep existing checks passing. Add protection as we go.",
			],
		],
		foot: "",
		notes:
			"• Before editing: read the testing guidelines\n• New code must include meaningful tests\n• Bug fix: reproduce failure, prove the fix, preserve working behaviour\n• Human-readable test titles help people and AI understand intent\n• Never lower the bar. Raise it gradually.",
		chapter: "",
	},
	{
		kind: "chart",
		chart: "units",
		theme: "paper",
		title: "113 to 2,257 unit-test files",
		lead: "",
		foot: "Month-end snapshots through September, then 8 October 2026. File count is not coverage.",
		notes:
			"• April: 113 files. September: 1,669. 8 October: 2,257\n• Dashed line: joined in April\n• October is a dated checkpoint, not month end\n• Files can contain many tests. Coverage is separate.",
		chapter: "",
	},
	{
		kind: "divider",
		theme: "section",
		chapter: "",
		title: "CI",
		lead: "Check every PR. Block the pipeline on failure.",
		step: 3,
		sections: [
			"Skills",
			"Testing",
			"CI",
			"Device verification",
			"AI reviewers",
			"Sentry",
			"Delivery",
		],
		notes:
			"• CI on every PR\n• Lint, types, tests and build\n• Failed checks block the pipeline\n• Parole watches results. Michelin makes valid fixes.",
	},
	{
		kind: "rows",
		theme: "paper",
		title: "Every PR goes through CI",
		items: [
			["Run the checks", "Lint, types, tests and build on every PR."],
			["Parole evaluates", "Watch CI results. Investigate each failure."],
			["Michelin fixes", "Make the correction. Commit, push and run again."],
		],
		notes:
			"• Automated CI on every PR\n• Parole continuously checks the results\n• Evaluate the failure and pass valid work to Michelin\n• Michelin fixes, commits and pushes\n• New commit triggers CI and another review. Repeat until clear.",
		chapter: "",
		lead: "Failed checks block the pipeline until they pass.",
		foot: "The loop repeats until the required checks pass.",
	},
	{
		kind: "metric",
		theme: "paper",
		title: "The quality bar keeps rising",
		lead: "",
		foot: "Measured scope changed. More tested lines, fewer eligible lines.\nCI now preserves this baseline.",
		notes:
			"• September: 72.02%. 2 October: 75.04%. 8 October: 99.26%\n• Four Jest coverage shards merged\n• Covered lines: 19,178 to 22,903\n• Eligible lines: 25,555 to 23,072. Scope excludes helpers and dev code\n• New tests and scope both affect the percentage\n• Thresholds pinned to measured baseline. Coverage is not test quality.",
		chapter: "",
		value: "99.26%",
		metricLabel: "Line coverage, 8 October 2026",
	},
	{
		kind: "divider",
		theme: "section",
		chapter: "",
		title: "Device verification",
		lead: "Maestro checks on iOS and Android. Recorded results and failures.",
		step: 4,
		sections: [
			"Skills",
			"Testing",
			"CI",
			"Device verification",
			"AI reviewers",
			"Sentry",
			"Delivery",
		],
		notes:
			"• Maestro on Android and iOS\n• Label-selected PR smoke and full runs\n• Scheduled suite overnight\n• Device results need their own scope. Nightly is not a universal release gate.",
	},
	{
		kind: "rows",
		theme: "paper",
		title: "Maestro checks the app while we sleep",
		items: [
			["Selected PRs", "Run smoke tests when the relevant label is applied."],
			["Every night", "33 configured suite jobs across iOS and Android."],
			[
				"Investigate failures",
				"Watch the video, inspect logs and fix the affected flow.",
			],
		],
		foot: "Attach recordings and logs so people and AI can investigate.",
		notes:
			"• PR labels select smoke or full device checks\n• 33 nightly jobs. 23 iOS, 10 Android\n• Configured jobs do not establish passing tests\n• Nightly failures inform the team. No claim that all releases are blocked\n• Recordings and logs support investigation.",
		chapter: "",
		lead: "Android and iOS, with evidence of every failure.",
	},
	{
		kind: "chart",
		chart: "flows",
		theme: "paper",
		title: "14 to 404 Maestro flow files",
		lead: "",
		foot: "Month-end snapshots through September, then 8 October. Includes shared flows and suites.",
		notes:
			"• April: 14. September: 225. 8 October: 404 YAML files\n• Inventory includes several file roles\n• 99 non-exempt routes reached in inventory\n• CI-run leaves reach 28 routes, 28.3%. 71 quarantine-only\n• 12 exempt routes. Not complete execution coverage.",
		chapter: "",
	},
	{
		kind: "divider",
		theme: "section",
		chapter: "",
		title: "AI reviewers",
		lead: "Three reviewers on every PR. Shared mobile guidelines.",
		step: 5,
		sections: [
			"Skills",
			"Testing",
			"CI",
			"Device verification",
			"AI reviewers",
			"Sentry",
			"Delivery",
		],
		notes:
			"• Human review queues took days\n• Three AI reviewers on every PR\n• Custom mobile reviewer runs hourly\n• Repository guidelines provide React Native context\n• Parole’s feedback loop connects this to CI.",
	},
	{
		kind: "rows",
		theme: "paper",
		chapter: "",
		title: "Three AI reviewers. One mobile specialist.",
		lead: "Review feedback arrives without waiting days for a person.",
		items: [
			["CodeRabbit, Qodo, cubic", "Three review perspectives on every PR."],
			["Custom Cursor reviewer", "An hourly review focused on React Native."],
			[
				"A shared quality bar",
				"All reviewers use the guidelines in the repository.",
			],
		],
		notes:
			"• CodeRabbit + Qodo Merge + cubic\n• Every PR receives automated feedback\n• Custom Cursor reviewer runs hourly\n• React Native context in the review prompt\n• Different perspectives. Parole evaluates the feedback.",
	},
	{
		kind: "rows",
		theme: "paper",
		title: "Review guidelines live with the code",
		lead: "Every AI reviewer starts with the same mobile context.",
		items: [
			[
				"React Native standards",
				"Mobile best practices and platform behaviour.",
			],
			[
				"Engineering expectations",
				"Reuse existing code. Separate concerns. Require tests.",
			],
			[
				"Guidelines evolve",
				"Clarify missed context and improve future reviews.",
			],
		],
		notes:
			"• Guidelines committed to the repository\n• React Native + iOS/Android expectations\n• Component reuse, separation of concerns, meaningful tests\n• Reviewers read the same rules used for implementation\n• Explain incorrect feedback. Refine the guidance. No guarantee of catching everything.",
		chapter: "",
		foot: "",
	},
	{
		kind: "divider",
		theme: "section",
		chapter: "",
		title: "Sentry",
		lead: "Turn production issues into the next regression check.",
		step: 6,
		sections: [
			"Skills",
			"Testing",
			"CI",
			"Device verification",
			"AI reviewers",
			"Sentry",
			"Delivery",
		],
		notes:
			"• Next: Sentry\n• Production feedback returns to development\n• July: systematic error cleanup\n• Prioritise reproducible problems",
	},
	{
		kind: "sequence",
		theme: "paper",
		title: "Turn an issue into a regression check",
		items: [
			"Investigate a recorded issue",
			"Reproduce the relevant behaviour",
			"Make a bounded correction",
			"Add a regression check",
			"Return evidence to review",
		],
		lead: "A resurfacing issue becomes a focused development task.",
		notes:
			"• Investigate context + revision + flags\n• Reproduce before correcting\n• Bounded fix + regression check\n• Return fresh evidence to review\n• Recorded event does not always mean a user crash",
		chapter: "",
	},
	{
		kind: "chart",
		chart: "errors",
		theme: "paper",
		title: "Fewer recorded errors, with variation",
		lead: "",
		foot: "Daily events, all environments. 7 July to 30 September 2026.\nFixes, filters and sampling affect counts. No usage denominator.",
		notes:
			"• 86 complete days: 7 July to 30 September\n• Raw daily variation, including September rise\n• All environments; no usage denominator\n• Fixes, filters and sampling affect volume\n• No crash-rate or AI-causality claim",
		chapter: "",
	},
	{
		kind: "divider",
		theme: "section",
		chapter: "",
		title: "Delivery",
		lead: "Ship small changes. Activate features separately.",
		step: 7,
		sections: [
			"Skills",
			"Testing",
			"CI",
			"Device verification",
			"AI reviewers",
			"Sentry",
			"Delivery",
		],
		notes:
			"• Finally: delivery\n• Small verified changes\n• Feature activation separated from code release",
	},
	{
		kind: "rows",
		theme: "paper",
		title: "Canary builds and nightly betas",
		lead: "TestFlight for iOS. Test builds for Android.",
		foot: "",
		notes:
			"• Canary build after every merge\n• Weekday nightly beta when main changes. iOS TestFlight + Android\n• Separate installs allow before/after comparison\n• Deep links and payment flows need that comparison\n• Skills generate specific TestFlight change notes and testing instructions.",
		chapter: "",
		items: [
			["After each merge", "A canary build to try the change."],
			["Every night", "An automated beta build for testing."],
			[
				"Side by side",
				"Install canary beside the normal app. Compare before and after.",
			],
			[
				"Clear test instructions",
				"Generated TestFlight notes explain what changed and what to test.",
			],
		],
	},
	{
		kind: "rows",
		theme: "paper",
		chapter: "",
		title: "Release the code. Approve the flag.",
		lead: "Small changes ship behind feature flags.",
		items: [
			["Small increments", "Keep unfinished features hidden behind a flag."],
			[
				"Seamless releases",
				"Release verified code without the feature sign-off queue.",
			],
			["Focused approval", "Approve activating the feature when it is ready."],
		],
		notes:
			"• Return to the days-long approval queue\n• Small increments behind feature flags\n• Ship verified code; decide activation separately\n• Check enabled and disabled behaviour\n• Mobile flag needs code in the installed app",
	},
	{
		kind: "chart",
		chart: "prs",
		theme: "paper",
		title: "The development rhythm changed",
		lead: "",
		foot: "App and design-system PRs. October* covers 1 to 8 October only. Activity, not productivity.",
		notes:
			"• September: 188 mobile PRs. October to 8th: 126\n• October: 79 test PRs, 22 fixes, 17 features\n• Partial month. Exclude from full-month averages\n• April joining marker. Process changed in May\n• PR count is activity, not productivity or features delivered.",
		chapter: "",
	},
	{
		kind: "rows",
		theme: "section",
		chapter: "",
		title: "There’s another talk in what we left out",
		lead: "A few months of change across the team, codebase and business.",
		items: [
			["Design system", "A shared UI language and a consistent quality bar."],
			["Monorepo", "Shared code and coordinated changes."],
			["Ways of working", "Clearer ownership and everyday engineering habits."],
			[
				"Product engineering",
				"Broader ownership, from product decisions to delivery.",
			],
			[
				"AI development",
				"Adoption across planning, code, review and verification.",
			],
			["An AI harness", "Context, skills, tools and checks around the agents."],
		],
		notes:
			"• Onboarding myself to the team, codebase and business\n• Design system and monorepo, each could be its own talk\n• Transition from engineering delivery to product ownership\n• AI adoption across the development loop\n• Harness: the environment around AI, not just the model\n• A few months of change, many challenges beyond today’s scope",
	},
	{
		kind: "rows",
		theme: "paper",
		title: "What I’d take into another team",
		items: [
			["Find the bottleneck", "Start where repeated work slows delivery."],
			[
				"Write down the bar",
				"Make quality expectations clear to people and AI.",
			],
			["Close the feedback loop", "Connect checks, evidence and fixes."],
			[
				"Adapt the rollout",
				"Choose tools and release rules that fit your team.",
			],
		],
		lead: "",
		notes:
			"• Lessons to adapt, not a universal five-step recipe\n• Start with your team’s actual bottleneck\n• Clear expectations and meaningful checks matter everywhere\n• Tools, approval boundaries and rollout depend on context\n• Start small. Inspect the outcome. Expand what works.",
		chapter: "",
		foot: "Keep the principles. Adapt the implementation.",
	},
	{
		kind: "summary",
		theme: "paper",
		chapter: "",
		title: "Confidence in AI-assisted development",
		lead: "Seven practices for mobile development. One continuous loop.",
		items: [
			["Skills", "Repeat good engineering habits."],
			["Testing", "Protect behaviour with regression checks."],
			["CI", "Check every PR. Block failures until fixed."],
			[
				"Device verification",
				"Maestro smoke and nightly checks. Video evidence.",
			],
			[
				"AI reviewers",
				"Mobile guidelines. Evaluate feedback. Fix valid issues.",
			],
			["Sentry", "Turn production issues into regression checks."],
			["Delivery", "Canary on merge. Nightly beta. Feature flags."],
		],
		foot: "Less repetitive QA. More confidence. Faster delivery.\nJohn Adib · MrAdib.com",
		notes:
			"• Regressions every release. Days of QA and approvals.\n• Skills → tests → CI → device evidence\n• Review → production feedback → delivery\n• Less repetitive QA. More confidence. Faster delivery.\n• Evidence has limits. Human judgement still matters.\n• QR: social profiles, talks and contact details",
	},
];

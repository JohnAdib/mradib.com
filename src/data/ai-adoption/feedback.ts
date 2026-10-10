import { errorWindowSummary, verificationCheckpoints } from "./metrics";
import { reviewActivityData, reviewSamplePrs } from "./operational-metrics";
import type { ArticleSectionData } from "./types";

const last = verificationCheckpoints[verificationCheckpoints.length - 1];
const earlierErrors = errorWindowSummary[0];
const laterErrors = errorWindowSummary[1];
const [aiReviews, otherReviews] = reviewActivityData.observations;
const reviewCommentCount = aiReviews.value + otherReviews.value;

export const feedbackSections: ArticleSectionData[] = [
	{
		id: "review-and-test-builds",
		title: "AI review became another pass over a concrete change",
		tocTitle: "Review and builds",
		kind: "review",
		paragraphs: [
			`From 25 July, three AI reviewers read the development rules alongside human reviewers. In the recorded sample of the last ${reviewSamplePrs} merged PRs, they wrote ${aiReviews.value} of ${reviewCommentCount} inline comments, about ${Math.round((aiReviews.value / reviewCommentCount) * 100)}%. The remaining ${otherReviews.value} came from other reviewers. This sample covers the broader repository, including work beyond the app. It measures review activity, not comment correctness, bugs prevented or the share of implementation AI wrote.`,
			"The implementation agent evaluates each comment: inspect the code, reproduce the concern, change when justified and rerun the affected checks. A reviewer can reveal a missing failure case or misunderstand a deliberate choice. Replies need evidence; automatically accepting suggestions is not a quality gate.",
			"The PR brings the requirement, implementation, test output, device captures and remaining limitations together. Human review controls acceptance and merge, with a concrete decision to make and a visible place to record it. Test builds extend assessment beyond the author, and TestFlight gives testers access on physical devices.",
			"I established dedicated test-build workflows on 22 June. Their purpose is to prepare installable builds for feedback beyond local captures, using distribution appropriate to each platform. A completed submission gives testers another way to assess the change on a real device. Publishing a public store release remains a separate decision with its own steps.",
		],
	},
	{
		id: "repeatable-release-delivery",
		title: "A more active release history needed clear delivery milestones",
		tocTitle: "Release mechanics",
		paragraphs: [
			"The updated release history records four store-release tags in July, three in August and six in September. September combines two in the original app repository and four in the monorepo. These counts show a more active release line, but tags do not establish confirmed public-store go-live dates on both platforms. A tag, a production workflow run, a TestFlight submission and a public release are different events. I keep those distinctions visible rather than using those tag counts to claim multiple public releases every week.",
			"On 11 and 12 September, I added release tooling and runbooks to make delivery more repeatable. Generated release notes derive from reviewed PR titles, and self-tests check the version and delivery decisions against the workflow configuration. The release machinery needs executable specifications just as the application does.",
			"I separated the delivery milestones: creating a build, submitting it for testers, preparing a store release and making it public. Automation can support these steps, but success has to be established at the step itself. A successful dispatch is not confirmation that the downstream build or submission completed. A release-history entry therefore needs context before it becomes evidence of public availability.",
			"Native store builds and over-the-air updates need different compatibility checks. I added tests around the release rules, including rejecting native changes from an update intended for an existing runtime. Human review and public-release decisions remain part of the process. The improvement was a repeatable delivery path and a clearer account of what each recorded event established.",
		],
	},
	{
		id: "production-feedback",
		title: "The Sentry history became part of the development loop",
		tocTitle: "Recorded errors",
		kind: "errors",
		paragraphs: [
			"On 28 July, I made error cleanup systematic and connected Sentry issues to development tickets. A resurfacing problem could return to the backlog instead of being rediscovered in an unrelated chat. Release context and active feature flags accompany events, helping explain which implementation the user encountered. The work then becomes reproduce, classify, fix where appropriate and add a test that preserves the correction.",
			"The daily chart shows all-environment error events from the retained history. Its 86 complete days run from 7 July through 30 September. The 6 July boundary was missing its first hour, so I exclude it. The series stops at September to keep the incomplete current month out of the comparison. A very low count from a partially elapsed current day would otherwise make the apparent improvement look much larger than the evidence supports.",
			`The 30 complete days from ${earlierErrors.label} contain ${earlierErrors.value.toLocaleString("en-GB")} events. The same-length window from ${laterErrors.label} contains ${laterErrors.value.toLocaleString("en-GB")}, about ${Math.round((1 - laterErrors.value / earlierErrors.value) * 100)}% fewer recorded events. Fixes, reporting filters and sampling changes all contributed; the data cannot separate their effects. All environments are included, and there is no session or traffic denominator. These are recorded event counts, not a crash-free rate or a measure of bugs eliminated by AI.`,
			"The 8 October refresh attributes 66 new issue types to September releases and none to October releases through that checkpoint. These are release-level issue attributions, not the daily event series, and attribution can change as later events arrive. Recorded volume rose again during September before settling, something a two-point chart would hide. Distinct issues and repeated events tell different stories: one recurring condition can dominate the count. I use these signals to prioritise investigations. Reproducible defects return to the same test, device-evidence and review loop.",
		],
	},
	{
		id: "performance-as-verification",
		title: "Performance needed its own evidence and controls",
		tocTitle: "Performance checks",
		paragraphs: [
			"On 26 August, I added a performance harness that samples main-thread activity during repeated list flings on a Release simulator build. It performs ten 300-millisecond flings, so repeated runs have a defined workload. One finding was that Session Replay accounted for 48% to 73% of UI-update work in that measurement. That figure describes the sampled workload; it is not a claim that disabling Replay made the whole application that much faster.",
			"I introduced performance changes behind feature flags so they could be measured before temporary controls were retired. The source records 20 performance flags retired, including 14 on 22 September. The useful habit was to profile a known workload, make a bounded change and rerun the measurement before simplifying the implementation.",
			"I also added static checks for patterns that had already created avoidable work: timers, expensive blur and gradient effects, autoplay without pause handling, large shadows and unstable style objects. The linter blocks new occurrences of eight selected patterns while documenting older exceptions. This turns a profiling lesson into a check that the next agent encounters before it repeats the same approach.",
			"A local profile and a scheduled performance trend establish different things. The local finding describes a known workload and environment. Using scheduled measurements as a trend requires completed, repeatable runs with results that can be compared. Performance belongs in QA only when its workload, environment and results are visible enough to interpret; configuring a workflow alone does not establish protection for every release.",
		],
	},
	{
		id: "limits-and-next-steps",
		title: "A useful loop also reports what it did not verify",
		tocTitle: "Gaps and lessons",
		paragraphs: [
			`The ${last.uiFlowFiles} Maestro files recorded on 8 October do not mean every path runs on every platform. They include shared setup and suite entrypoints, while the configured jobs cover different platform scopes. A green result needs to say which behaviours it exercised. Inventory growth and a passing subset cannot establish complete platform coverage.`,
			"Review needs completed device and performance results, rather than confirmation that a job was triggered. I want the result linked to its revision, platform and verification scope, where a reviewer can inspect it. If that evidence is absent, the review should say what remains unverified instead of inferring success from the workflow configuration.",
			"The next improvements follow those scopes: broaden platform verification, keep test setup predictable, make device and performance results easy to inspect, and verify delivery paths from the reviewed change through their downstream result. Affected-only CI matters too, because the move from roughly five to fifteen minutes makes repeated verification more expensive. Each improvement needs a defined scope and an observable result.",
			"What I take from these months is a practical way to adopt AI: define the work, give the agent clear rules, make it write and run meaningful tests, capture the interaction and put the evidence in front of a reviewer. The measured result was a more active app development record and a much larger verification inventory. In practice, feature development and delivery became faster while a smaller team took on broader product and web responsibilities. The lasting benefit is that the next task starts with tests, shared components and production learning that the previous work left behind.",
		],
	},
];

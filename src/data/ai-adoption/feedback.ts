import { errorWindowSummary } from "./metrics";
import { reviewActivityData, reviewSamplePrs } from "./operational-metrics";
import type { ArticleSectionData } from "./types";

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
			"The PR brings the requirement, implementation, test output, device captures and remaining limitations together. Two human approvals are required by the repository rules. This gives people a more concrete decision to make and a visible place to record it. The build workflow then extends assessment beyond the author: a Canary variant can install beside the main app, and TestFlight gives testers access on physical devices.",
			"The Beta, Canary and Production workflows were established on 22 June, followed by weekday Beta delivery. The later setup produces an iOS Canary on merge and a fresh weekday Beta when the main branch has changed. Android test delivery has its own trigger and internal distribution path. These are inspectable builds for feedback; publishing a public store release remains a separate decision with its own steps.",
		],
	},
	{
		id: "repeatable-release-delivery",
		title:
			"The release history accelerated, while go-live still had manual steps",
		tocTitle: "Release mechanics",
		paragraphs: [
			"The recorded release history contains eight entries between 24 August and 30 September, roughly five and a half weeks. That shows a much more active release line, but the evidence does not enumerate eight confirmed public-store go-live dates on both platforms. A tag, a production workflow run, a TestFlight submission and a public release are different events. I keep those distinctions visible rather than using the eight entries to claim multiple public releases every week.",
			"On 11 and 12 September, I added the release tooling and runbooks that make the process more repeatable. The tag supplies the app version; build numbers live in EAS. A base version such as X.Y.0 selects native store builds, while a nonzero patch selects an over-the-air update under the compatible base runtime. Generated release notes derive from the PR titles. The version and mechanism rules have self-tests against the workflow configuration.",
			"The production build path is configured to submit iOS to TestFlight and Android to an initial 10% production rollout. The configured release button checks the branch ancestry and refuses an existing tag. It was present but had no recorded runs at the snapshot; the four later release-history tags had been pushed manually. There were three recorded production-button runs in that later repository. Those records document workflow activity and the configured delivery path; downstream build and submission results need their own confirmation.",
			"The over-the-air path also compares the proposed change with the production build's commit and rejects incompatible native changes. Its new production path had not yet been exercised after the repository move. iOS build attachment, store text, submission and public release still required App Store Connect steps. Android rollout increases and halts were manual too. The improvement was a repeatable build and submission path, with specific remaining work between a reviewed change and public availability.",
		],
	},
	{
		id: "production-feedback",
		title: "The Sentry history became part of the development loop",
		tocTitle: "Recorded errors",
		kind: "errors",
		paragraphs: [
			"On 28 July, I made error cleanup systematic and connected Sentry issues to development tickets. A resurfacing problem could return to the backlog instead of being rediscovered in an unrelated chat. Release context and active feature flags accompany events, helping explain which implementation the user encountered. The work then becomes reproduce, classify, fix where appropriate and add a test that preserves the correction.",
			"The daily chart shows all-environment error events from the retained history. Its completed days run from 7 July through 3 October. The 6 July boundary was missing its first hour, and 4 October was still in progress when the snapshot was taken. I exclude those incomplete endpoints from a completed-day trend. A very low count from a partially elapsed current day would otherwise make the apparent improvement look much larger than the evidence supports.",
			`A reconstructed ${earlierErrors.label} window contains ${earlierErrors.value.toLocaleString("en-GB")} events, with that first hour missing. The 30 complete days from ${laterErrors.label} contain ${laterErrors.value.toLocaleString("en-GB")}, about ${Math.round((1 - laterErrors.value / earlierErrors.value) * 100)}% fewer recorded events. Fixes, reporting filters and sampling changes all contributed; the data cannot separate their effects. All environments are included, and there is no session or traffic denominator. These are recorded event counts, not a crash-free rate or a measure of bugs eliminated by AI.`,
			"Recorded volume rose again during September before settling, something a two-point chart would hide. Distinct issues and repeated events tell different stories: one recurring condition can dominate the count. I use these signals to prioritise investigations. Reproducible defects return to the same test, device-evidence and review loop.",
		],
	},
	{
		id: "performance-as-verification",
		title: "Performance needed its own evidence and controls",
		tocTitle: "Performance checks",
		paragraphs: [
			"On 26 August, I added a performance harness that samples main-thread activity during repeated list flings on a Release simulator build. It performs ten 300-millisecond flings, so repeated runs have a defined workload. One finding was that Session Replay accounted for 48% to 73% of UI-update work in that measurement. That figure describes the sampled workload; it is not a claim that disabling Replay made the whole application that much faster.",
			"I put runtime controls around the risky work. Replay and analytics have remote kill switches, active feature flags travel with error events, and the app keeps a mirror of the last effective flags if remote configuration fails. Performance changes can be introduced under flags, measured and then simplified. The source records 20 performance flags retired, including 14 on 22 September, once that temporary control was no longer needed.",
			"I also added static checks for patterns that had already created avoidable work: timers, expensive blur and gradient effects, autoplay without pause handling, large shadows and unstable style objects. The linter blocks new occurrences of eight selected patterns while documenting older exceptions. This turns a profiling lesson into a check that the next agent encounters before it repeats the same approach.",
			"The nightly performance workflow exposed an important limit. At the 4 October snapshot it was failing during simulator build, so it had not produced the intended trend data. I can describe the harness and the local finding, but I cannot claim the scheduled trend was protecting every release. Performance belongs in QA only when its workload, environment and results are visible enough to interpret.",
		],
	},
	{
		id: "limits-and-next-steps",
		title: "A useful loop also reports what it did not verify",
		tocTitle: "Gaps and lessons",
		paragraphs: [
			"The 232 Maestro files do not mean every path runs on every platform. Roughly a quarter of the suite was held out at the snapshot while test setup was being updated. Some controlled scenarios were available on only one platform, which helps explain the difference between 22 iOS jobs and nine Android jobs. A green subset needs to say which behaviours it actually exercised.",
			"The scheduled test verdict had another problem: the mirror into GitHub was unreadable on 21 consecutive nights after 13 September, although the underlying cloud results remained available in EAS. Making those results consistently visible at review and release remained part of the work. Surfacing them reliably would let the scheduled checks become a dependable part of those decisions.",
			"My next priorities were therefore specific: complete the test-setup updates, bring controlled scenarios to platform parity, repair result mirroring, fix the performance runner, connect verified results to review and release decisions, and exercise the new release entrypoints. Affected-only CI matters too, because the move from roughly five to fifteen minutes makes repeated verification more expensive. The process is easier to improve when each missing link has a known scope and an observable result.",
			"What I take from these months is a practical way to adopt AI: define the work, give the agent clear rules, make it write and run meaningful tests, capture the interaction and put the evidence in front of a reviewer. The measured result was a more active app delivery record and a much larger verification inventory. The lasting benefit is that the next task starts with tests, shared components and production learning that the previous work left behind.",
		],
	},
];

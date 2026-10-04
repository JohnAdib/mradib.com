import type { ArticleSectionData } from "./types";

export const skillSection: ArticleSectionData = {
	id: "eight-development-skills",
	title: "Eight focused skills carry the task through the loop",
	tocTitle: "The eight skills",
	kind: "skills",
	paragraphs: [
		"I packaged the process as eight named skills with specific responsibilities. A skill is a repeatable set of instructions that an agent loads for a job. Cook coordinates the workflow, and saul keeps communication clear throughout. The other skills perform focused stages, each leaving a concrete output for the next one.",
		"The handoffs keep autonomy bounded. Research returns findings from the ticket, discussions, documents, design and code; planning turns them into a checklist. Once I approve it, implementation works in a fresh branch and worktree from the main branch. Parallel tasks keep their checkouts and devices separate.",
		"Capture and review have their own instructions and evidence requirements. Human review still controls acceptance and merge. A later run confirms the merge before clearing the temporary worktree, branch and local evidence and releasing the devices. Worktree creation and cleanup are lifecycle stages around the eight named skills.",
		"This split also gives new lessons a home. Flaky selectors update capture guidance; a build command updates discovery; a missed edge case updates implementation and review. The next task gets those instructions alongside the tests that the previous work left behind.",
	],
};

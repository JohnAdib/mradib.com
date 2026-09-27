import type { IGuideAnchors } from "./guide-bundle";

// Strings that read the same on every guide, stated once.

/** The anchors every guide shares. Each guide adds its own steps and rules words. */
export const guideAnchorDefaults: Omit<IGuideAnchors, "steps" | "rules"> = {
	overview: "overview",
	ai: "ai",
	references: "references",
	faq: "faq",
	kit: "kit",
};

export const guideUiLabels = {
	read: "Read it",
	copyPrompt: "Copy the prompt",
	copied: "Copied",
	here: "You are here",
};

/** The fixed lines of llms.txt and the skill. Per-guide prose lives in aiText. */
export const guideAiLabels = {
	humanGuide: "Human guide",
	humanHub: "Human hub",
	framework: "Framework",
	skill: "Skill",
	skillFile: "Portable skill for AI tools",
	how: "How to use this",
	workflow: "Workflow",
	source: "Source and full guide",
	question: "Question",
	definition: "What it is",
};

import type { IAuditFitList, IAuditSectionHeading } from "./audit-interface";

export const auditFitHeading: IAuditSectionHeading = {
	eyebrow: "Fit",
	title: "Who it's for.",
};

export const auditFit: IAuditFitList = {
	title: "This is for you if",
	items: [
		"You have 20 to 150 engineers.",
		"AI coding agents are already in use, or a rollout is planned.",
		"You want evidence, not vibes.",
	],
};

export const auditNotFit: IAuditFitList = {
	title: "This is not for",
	items: [
		"Teams under 10 engineers.",
		"Anyone looking for a contractor to write code.",
		"Anyone looking for a rubber stamp.",
	],
};

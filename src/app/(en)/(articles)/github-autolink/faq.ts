import { IFaqQA } from "@/components/faq/faq-interface";

export const articleFaq: IFaqQA[] = [
	{
		id: "1",
		q: "What is the primary benefit of using GitHub Autolink References?",
		a: "GitHub Autolink References streamline your workflow by automatically converting references in GitHub (like 'JIRA-123') into clickable links to external tools like JIRA, Asana, or Zendesk. This eliminates the need to manually paste URLs, saving time and reducing errors.",
	},
	{
		id: "2",
		q: "Can I set up multiple autolink references for different tools in the same repository?",
		a: "Yes, GitHub allows you to create multiple autolink references within a single repository. You can define separate prefixes (like 'JIRA-' for JIRA and 'TASK-' for Asana) to link to different tools as needed.",
	},
	{
		id: "3",
		q: "What kind of permissions are required to set up autolink references?",
		a: "To configure autolink references, you need admin access to the GitHub repository. This ensures that only authorized users can modify or set up links that impact the workflow.",
	},
	{
		id: "4",
		q: "Is GitHub Autolink References available on all GitHub plans?",
		a: "No, autolink references are only available on GitHub Pro, Team, Enterprise Cloud, and GitHub Enterprise Server plans. Free plan users do not have access to this feature.",
	},
	{
		id: "5",
		q: "How can I verify that my autolink setup is working correctly?",
		a: "After configuring your autolink reference, test it by mentioning a reference (like 'JIRA-123') in a commit message, pull request, or issue. GitHub should automatically convert it into a clickable link to the specified external resource.",
	},
];

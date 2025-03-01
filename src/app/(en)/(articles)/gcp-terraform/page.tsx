import { ArticleSection } from "@/components/article/article-section";
import { ArticleLayout } from "@/components/article/layout";
import { type Metadata } from "next";
import Image from "next/image";
import { IArticle } from "../i-article-interface";
import imgCover from "./_img/cover.png";
import imgGithubAddNewAutoLinkReferencePreview from "./_img/github-add-new-autolink-reference-preview.png";
import imgGithubAddNewAutoLinkReference from "./_img/github-add-new-autolink-reference.png";
import imgGithubAutoLinkReferencesList from "./_img/github-autolink-references-list.png";
import { articleFaq } from "./faq";

export const article: IArticle = {
	author: "John Adib",
	publishDate: "2024-11-14",
	publishTime: "19:38:00",
	datePublished: "",
	dateModified: "",
	title: "How to Set Up Terraform with GCP Remote Backend",
	description:
		"Learn to configure Terraform with Google Cloud Platform, setting up a remote backend on GCS for efficient state management and IaC.",
	pageTitle: "Setting Up Terraform with GCP Remote Backend",
	pageDesc:
		"A comprehensive guide to setting up Terraform with a GCP remote backend for seamless CI/CD pipeline integration and state management",
	pagePath: "/gcp-terraform",
	keywords: [
		"GCP",
		"terraform",
		"remote backend",
		"Google Cloud Platform",
		"infrastructure as code",
		"IaC",
		"state management",
	],
};

// set publish date and time
article.datePublished =
	article.publishDate + "T" + article.publishTime + ".000Z";
article.dateModified = "2024-11-14" + "T" + "19:45:00" + ".000Z";

export const metadata: Metadata = {
	title: article.pageTitle,
	description: article.pageDesc,
	openGraph: {
		type: "article",
		publishedTime: article.datePublished,
	},
	twitter: {
		card: "summary_large_image",
	},
};

export default function Page() {
	return (
		<>
			<ArticleLayout
				title={article.title}
				intro={article.description}
				datePublished={article.datePublished}
				lang="en-US"
				urlPath={""}
				keywords={[]}
				coverImage={imgCover}
				dateModified={""}
				faq={articleFaq}
			>
				<Intro />
				<Problem />
				<Solution />
				<Why />
				<Requirements />
				<StepByStep />
				<Troubleshooting />
				<Conclusion />
			</ArticleLayout>
		</>
	);
}

function Intro() {
	return (
		<div id="intro">
			<p>
				Managing cloud infrastructure with Terraform brings consistency and
				scalability to your operations, but as your team or processes grow,
				managing Terraform state files becomes critical. This is especially true
				when integrating Terraform into CI/CD pipelines like GitHub Actions or
				Jenkins, where multiple automated runs need access to the same state.
				Setting up a remote backend on Google Cloud Platform (GCP) not only
				centralizes state management but also ensures seamless collaboration
				across environments. This guide walks you through the fundamentals of
				leveraging Terraform with a GCP remote backend for robust pipeline
				workflows.
			</p>
		</div>
	);
}

function Problem() {
	return (
		<ArticleSection
			title="Problem"
			subTitle="Local State Files vs. Remote, The Terraform Challenge"
		>
			<p>
				When using Terraform in CI/CD pipelines like GitHub Actions, Jenkins, or
				GitLab CI, managing state files locally becomes a significant challenge.
				Pipelines run in isolated environments without persistent storage,
				meaning Terraform commands would fail to retain the infrastructure state
				between runs. This can lead to:
			</p>
			<ul>
				<li>
					Infrastructure Drift: Without a shared state, pipelines may create
					duplicate resources or fail to update existing ones properly.
				</li>
				<li>
					Conflict Risks: Multiple developers or pipeline runs might
					inadvertently overwrite each other’s changes if a state isn’t
					centralized.
				</li>
				<li>
					Lack of Team Collaboration: Local state files prevent team members
					from accessing and updating the same infrastructure state, limiting
					collaboration and efficiency.
				</li>
			</ul>
			<p>
				These issues are amplified in dynamic environments where teams
				frequently update infrastructure or run multiple concurrent pipelines.
				To ensure consistency, Terraform state needs to be stored in a secure,
				centralized, and accessible location that supports both automated
				pipelines and local workflows.
			</p>
		</ArticleSection>
	);
}

function Solution() {
	return (
		<ArticleSection
			title="Solution"
			subTitle="GCP Remote Backend: Simplifying Terraform State"
		>
			<p>
				The key to running Terraform in CI/CD pipelines is setting up a remote
				backend on GCP. Here’s how it works:
			</p>
			<ul>
				<li>
					State Centralization: The Terraform state file is stored in a GCS
					bucket, accessible to all CI/CD pipeline runs and local environments.
				</li>
				<li>
					Locking and Versioning: GCS supports Terraform’s locking mechanism,
					preventing simultaneous modifications to the state file, and enables
					versioning for tracking changes.
				</li>
				<li>
					CI/CD Integration: Automated pipelines (e.g., GitHub Actions, Jenkins)
					can authenticate with GCP using a service account, ensuring secure
					access to the backend during runs.
				</li>
				<li>
					Local Compatibility: Developers can run Terraform locally and interact
					with the same backend, maintaining consistency across workflows.
				</li>
			</ul>
			<p>
				This setup eliminates common issues like state file conflicts and
				simplifies collaboration, allowing teams to scale their infrastructure
				management processes with confidence.
			</p>
		</ArticleSection>
	);
}

function Why() {
	return (
		<ArticleSection
			title="Why"
			subTitle="The Advantages of Using a Remote Backend with Terraform"
		>
			<p>
				CI/CD pipelines execute Terraform commands in isolated, stateless
				environments, making it essential to store and manage state files
				remotely. Without a remote backend, every pipeline run would start with
				an empty state, potentially causing configuration conflicts, duplicate
				resources, or even infrastructure drift. A remote backend provides a
				central location to store Terraform’s state file, ensuring that every
				pipeline run starts with the latest state and updates it consistently
				after execution.
			</p>
			<p>
				Beyond pipelines, a remote backend also supports local development
				workflows. Developers can use Terraform on their machines to test
				configurations while still interacting with the shared state, ensuring
				alignment between automated pipelines and manual processes. With GCP’s
				Google Cloud Storage (GCS) as the remote backend, you gain additional
				features like locking and versioning, making it an ideal choice for
				Terraform in CI/CD environments.
			</p>
		</ArticleSection>
	);
}

function Requirements() {
	return (
		<ArticleSection
			title="Requirements"
			subTitle="Essentials for Terraform & GCP Backend Setup"
		>
			<p>Before we start, here’s what you’ll need</p>
			<ol>
				<li>
					Access to a Google Cloud Platform (GCP) account with billing enabled.
				</li>
				<li>
					Permissions to create a Google Cloud Storage (GCS) bucket and manage
					IAM roles.
				</li>
				<li>
					Service Account: A dedicated account for Terraform with the required
					IAM roles for accessing GCS.
				</li>
				<li>Terraform CLI installed and ready to use on your local machine.</li>
				<li>
					Basic familiarity with Terraform configuration syntax and GCP
					permissions.
				</li>
			</ol>
		</ArticleSection>
	);
}

function StepByStep() {
	return (
		<ArticleSection
			title="Step by Step"
			subTitle="Configuring Terraform with GCP: A Step-by-Step Guide"
		>
			<p>Follow these simple steps to configure GitHub autolinks</p>

			<h4>Step 1: Open Repository Settings</h4>
			<p>
				In your GitHub repository, go to <strong>Settings</strong> under your
				repository’s name.
			</p>

			<h4>Step 2: Access Autolink References</h4>
			<p>
				In the sidebar, locate the <strong>Integrations</strong> section and
				click on <strong>Autolink references</strong>.
			</p>
			<Image
				src={imgGithubAutoLinkReferencesList}
				alt="GitHub Autolink References List"
			/>

			<h4>Step 3: Add a New Autolink Reference</h4>
			<p>
				Click <strong>Add autolink reference</strong>. This is where you’ll
				define the rules for automatic linking.
			</p>

			<h4>Step 4: Define Your Reference Prefix and Target URL</h4>
			<Image
				src={imgGithubAddNewAutoLinkReference}
				alt="GitHub Add New Autolink Reference"
			/>

			<h5>Options</h5>
			<h6>Alphanumeric</h6>
			<p>
				Matches any combination of letters and numbers in the reference (e.g.,
				<code>TASK-123</code>).
			</p>

			<h6>Numeric</h6>
			<p>
				Restricts matches to numbers only (e.g., <code>123</code>).
			</p>

			<h5>Reference Prefix</h5>
			<p>
				This is the identifier you’ll use in GitHub to create an autolink. For
				example, if you set the prefix to <code>TASK-</code>, then typing{" "}
				<code>TASK-123</code> in an issue or commit message will automatically
				create a link.
			</p>

			<h5>Target URL</h5>
			<p>
				The URL format of your external system where <code>{"<num>"}</code> is a
				placeholder for the reference number. GitHub will replace{" "}
				<code>{"<num>"}</code> with the actual number from your reference.
				Example: For a JIRA ticket link, you might use
				<code>https://[YOUR_PROJECT].atlassian.net/browse/&lt;num&gt;</code>. So{" "}
				<code>TASK-123</code> would become a link to{" "}
				<code>https://[YOUR_PROJECT].atlassian.net/browse/123</code>.
			</p>

			<h4>Step 5: Preview and Save</h4>
			<p>
				Verify the preview to ensure the link format is correct. If everything
				looks good, click <strong>Add autolink reference</strong>.
			</p>
			<Image
				src={imgGithubAddNewAutoLinkReferencePreview}
				alt="GitHub Add New Autolink Reference Preview"
			/>

			<h4>Step 6: Test Your Autolinks</h4>
			<p>
				Try referencing an issue in a GitHub comment or commit, such as
				<code>JIRA-123</code> and see how GitHub automatically converts it into
				a clickable link.
			</p>
		</ArticleSection>
	);
}

function Troubleshooting() {
	return (
		<ArticleSection
			title="Troubleshooting"
			subTitle="Tips for GitHub Autolink References"
		>
			<p>
				Even with a well-configured backend, issues can arise. Here are common
				problems and solutions:
			</p>
			<ol>
				<li>
					<strong>Authentication Errors</strong> Ensure that the service account
					has the correct permissions for accessing and modifying the Google
					Cloud Storage bucket.
				</li>
				<li>
					<strong>State Locking Failures</strong> If Terraform cannot lock the
					state, check that no other instances are running, and confirm that
					you’ve enabled GCS bucket versioning and locking.
				</li>
				<li>
					<strong>Backend Initialization Failures</strong> Double-check the
					terraform init command output for detailed errors. Ensure your GCP
					project and bucket configurations are correct, and verify that the
					backend block in your configuration points to the right GCS bucket.
				</li>
				<li>
					<strong>Permission Denials</strong> Confirm that IAM roles associated
					with the service account are configured correctly, granting access
					only as needed to minimize security risks.
				</li>
			</ol>
		</ArticleSection>
	);
}

function Conclusion() {
	return (
		<ArticleSection
			title="Conclusion"
			subTitle="Benefits of a GCP Remote Backend for Terraform"
		>
			<p>
				Integrating Terraform with a GCP remote backend is a must for modern
				CI/CD pipelines. It ensures a centralized and consistent state file,
				minimizes conflicts, and supports both automated and manual workflows.
				By using GCS as the backend, teams can leverage Terraform’s advanced
				features like locking and versioning while maintaining the flexibility
				to scale infrastructure operations efficiently. Whether you’re running
				Terraform locally or in pipelines, this setup creates a secure, reliable
				foundation for managing cloud infrastructure.
			</p>
		</ArticleSection>
	);
}

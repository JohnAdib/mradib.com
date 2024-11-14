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
    "A comprehensive guide to configuring Terraform on Google Cloud with a remote backend. Optimize your infrastructure management today",
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
        Terraform, a popular Infrastructure as Code (IaC) tool, simplifies cloud
        resource management across various providers, including Google Cloud
        Platform (GCP). For users managing Terraform state files, configuring a
        remote backend on GCP is a critical step toward efficient team
        collaboration and secure state management. This guide introduces the
        essentials of setting up a remote backend on Google Cloud, making
        infrastructure management more scalable and robust without needing
        step-by-step instructions, which we’ll cover in detail later.
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
      When multiple team members handle Terraform configurations locally,
      managing state files can become challenging. Version conflicts, accidental
      overwrites, and data loss are just a few of the potential issues that
      arise. Local storage of state files also limits accessibility, making it
      difficult to collaborate effectively. For larger projects, these risks
      escalate quickly, underscoring the need for a centralized, remote backend
      solution that enables teams to work efficiently without compromising data
      integrity.
    </ArticleSection>
  );
}

function Solution() {
  return (
    <ArticleSection
      title="Solution"
      subTitle="GCP Remote Backend: Simplifying Terraform State"
    >
      By setting up a remote backend on GCP’s Google Cloud Storage (GCS),
      Terraform users can achieve a more consistent and collaborative
      environment for managing infrastructure. This approach centralizes the
      state file in a secure location, supports versioning, and enables
      Terraform’s locking feature to prevent concurrent updates. With a remote
      backend, teams can benefit from reduced risk of conflicts, better
      security, and seamless collaboration, allowing them to scale their
      infrastructure operations more effectively.
    </ArticleSection>
  );
}

function Why() {
  return (
    <ArticleSection
      title="Why"
      subTitle="The Advantages of Using a Remote Backend with Terraform"
    >
      When managing infrastructure at scale, relying on local Terraform state
      files can introduce risks such as data loss, conflicts, and limited
      accessibility, especially in collaborative environments. A remote backend
      hosted on Google Cloud Platform centralizes state files, enhances
      security, and reduces conflicts by locking the state during updates. This
      setup allows teams to operate seamlessly, making Terraform state
      management more efficient and reliable, especially for distributed teams
      or multi-user environments.
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
        Setting up a remote backend on Google Cloud is essential for effective
        Terraform state management in team environments. Centralizing state
        files on GCS enhances security, minimizes conflict risk, and supports
        team collaboration. By following this guide, your team can better manage
        infrastructure as code, ensuring a more scalable and dependable approach
        to cloud operations.
      </p>
    </ArticleSection>
  );
}

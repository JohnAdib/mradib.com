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
  publishDate: "2024-07-12",
  publishTime: "14:28:00",
  datePublished: "",
  dateModified: "",
  title: "GitHub Autolink - Simplify Issue Linking and Workflow",
  description:
    "Boost Productivity with GitHub Autolink References: Seamlessly Link GitHub Issues to JIRA, Asana, and More",
  pageTitle: "GitHub Autolink - Simplify Issue Linking and Workflow",
  pageDesc:
    "Automatically linkify references to GitHub issues, PRs, commits, and users.",
  pagePath: "/github-autolink",
  keywords: ["GitHub", "autolink"],
};

// set publish date and time
article.datePublished =
  article.publishDate + "T" + article.publishTime + ".000Z";
article.dateModified = "2024-11-11" + "T" + "11:26:00" + ".000Z";

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
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
        If you’re tired of manually linking GitHub issues or pull requests to
        external platforms like JIRA or Asana, then GitHub’s Autolink References
        feature is here to make your life easier. With this simple setup, you
        can automatically link GitHub references to external systems, improving
        team productivity and saving time. Let’s dive into how to configure
        autolinks in GitHub and supercharge your workflow!
      </p>
    </div>
  );
}

function Problem() {
  return (
    <ArticleSection
      title="Problem"
      subTitle="The Pain of Manual Linking Between GitHub and JIRA"
    >
      In development teams, linking GitHub issues and commits to external
      project management tools like JIRA, Asana, or Zendesk is crucial for
      staying organized. But doing it manually every time is cumbersome and
      time-consuming. Imagine if typing <code>TASK-456</code> in GitHub could
      automatically generate a link to the corresponding task or issue in your
      project management tool—that’s what GitHub Autolink References can do!
    </ArticleSection>
  );
}

function Solution() {
  return (
    <ArticleSection
      title="Solution"
      subTitle="Automatically Link GitHub Issues with Autolink References"
    >
      GitHub’s Autolink References feature allows you to set up automatic links
      to external resources, so every time you reference an issue, task, or
      ticket in GitHub, it’s converted into a clickable link. Whether you’re
      linking to JIRA issues, Asana tasks, or other platforms, this setup will
      help you streamline your workflow.
    </ArticleSection>
  );
}

function Why() {
  return (
    <ArticleSection
      title="Why"
      subTitle="Using GitHub Autolink References comes with several benefits"
    >
      <ul>
        <li>
          <b>Increased Efficiency</b> No more copy-pasting URLs manually.
        </li>
        <li>
          <b>Improved Organization</b> Clear links to external resources in
          issues and commits.
        </li>
        <li>
          <b>Streamlined Workflow</b> Consistent reference format across your
          team.
        </li>
      </ul>
    </ArticleSection>
  );
}

function Requirements() {
  return (
    <ArticleSection
      title="Requirements"
      subTitle="Before we start, here’s what you’ll need"
    >
      <p></p>
      <ol>
        <li>
          <b>GitHub Admin Access</b> for your repository.
        </li>
        <li>
          <b>A GitHub Pro, Team, or Enterprise Plan</b> to enable the feature.
        </li>
        <li>
          <b>The URL Structure</b> of the system you want to link, like
          <code>https://jira.example.com/browse/</code>.
        </li>
      </ol>
    </ArticleSection>
  );
}

function StepByStep() {
  return (
    <ArticleSection
      title="Step by Step"
      subTitle="How to Set Up Autolink References in GitHub"
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
      <ol>
        <li>
          <b>Ensure Unique Prefixes</b> Avoid overlap with other prefixes.
        </li>
        <li>
          <b>A GitHub Pro, Team, or Enterprise Plan</b> to enable the feature.
        </li>
        <li>
          <b>The URL Structure</b> of the system you want to link, like
          <code>https://jira.example.com/browse/</code>.
        </li>
      </ol>
    </ArticleSection>
  );
}

function Conclusion() {
  return (
    <ArticleSection
      title="Conclusion"
      subTitle="How GitHub Autolink References Enhance Collaboration"
    >
      <p>
        GitHub Autolink References are a must-have for teams using multiple
        tools. By configuring them, you’re not only saving time but also
        boosting productivity and improving collaboration. So set up your GitHub
        autolinks today, and take one step closer to a seamless, well-connected
        workflow!
      </p>
    </ArticleSection>
  );
}

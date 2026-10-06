# AI-first positioning implementation plan

**Goal:** Lead John's public identity with pioneering AI-first software development and link that positioning to his published work.

**Architecture:** Shared positioning copy feeds the homepage, About introduction, profile descriptions, JSON-LD and generated AI-readable biographies. Existing published articles and talks supply the evidence links. Keep the current visual language, chronological About chapters, actual job title and existing URLs.

**Stack:** Next.js static export, TypeScript, Tailwind, Biome and the repository's Open Graph image generator.

## 1. Align the identity copy

Update `src/data/profile.ts`, `src/data/intro-bio.ts` and the home/About social-card definitions. Lead with the approved AI-first positioning, define the practical workflow, and retain founder and mentor achievements as supporting credentials. Centralise reusable phrasing in `src/data/ai-positioning.ts`. Remove confidential independent project names and categories from the shared long biography.

## 2. Surface the evidence

Move the existing AI section directly after the homepage hero. Link its case study, architecture talk and guardrails talk using their canonical data, including publication dates. Reuse the evidence links near the About introduction while keeping the life-story chapter order intact. Include the same evidence in the generated biographies.

## 3. Preserve the new direction

Update the advisor's positioning and relevant homepage/About playbooks, then record John's approved direction in the decision log. Prepare a reusable short speaker biography in the shared profile data; external profile edits are a later step.

## 4. Verify and deliver

Run the repository formatter for changed files, TypeScript, sharing tests, production build and SEO/privacy checks. Inspect generated visible text and JSON-LD for consistent positioning, correct evidence URLs/dates and preservation of the previous metadata cleanup. Generate and inspect the changed home/About social cards.

Capture and review homepage and About at 375, 430 and 1440px in both themes, including no-JavaScript and reduced-motion checks. Fix clipping, overflow or readability problems before committing. Have a second agent review the final diff. Commit, push the dedicated branch and create a separate PR, as John requested; attach the PR to this chat.

# AI Adoption Article UI and Skills Implementation Plan

**Goal:** Make the measured case study more visual and explain the eight-skill workflow, with no CSV downloads.

**Architecture:** Keep article copy and aggregate observations in focused data files. Reuse the article reading layout and native charts, with one figure per row. Enhance SSR-visible charts with viewport-triggered, reduced-motion-safe animation.

**Tech Stack:** Next.js static export, React, TypeScript, CSS motion tokens, IntersectionObserver, Node tests and Playwright.

## Changes

- Remove the four CSV assets, their generator and all download UI.
- Replace test-file and Maestro-history lines with zero-baseline vertical
  bars at the actual dated checkpoints.
- Explain the eight named skills, their responsibilities and outputs.
  Describe the process without distributing internal skill files.
- Add verified views of flow-file composition, platform job counts,
  the 100-run CI sample and review-comment activity.
- Place figures beside the prose they support, always in a single column.
- Animate chart entrances and data marks once when readers reach them.
  Preserve exact final geometry, no-JS readability and reduced motion.

## Verification and delivery

- Reconcile additional numbers and skill descriptions against the supplied
  source. Keep names, identifiers, private resources and control details out.
- Test viewport triggering, replay prevention and motion preferences.
- Run focused tests, formatting, types, production build and SEO checks.
- Capture seven widths in both themes and inspect the phone layout first.
- Verify old CSV URLs return 404 and no download links remain.
- Review independently, commit the batch and update the existing PR branch.

## Title, path and privacy follow-up

- Use "Beyond the QA Bottleneck" at /ai-qa, with AI adoption in search metadata.
- Regenerate the social card and check the heading on phone and desktop.
- Keep the approved measurements, but generalise private policies and current
  operational statuses. Keep employer data out of loaded browser code.
- Verify the new route, canonical, article index, feed, sitemap and privacy
  output before updating the same PR.

## Final publication pass

- Keep the approved title and use /beyond-the-qa-bottleneck.
- Mark April 2026 on histories that include the confirmed joining month.
  Treat it as month-level context and retain the May process-change timing.
- Fix breadcrumb chevrons by reading direction and disable text selection.
- Reconcile useful public source material, retaining aggregate evidence while
  excluding private, duplicated and unrelated records.
- Check social images, canonical, sitemap/feed, privacy, responsive layouts,
  animation, types, tests and production output before merge and publication.

Verified on 4 October 2026: formatting, TypeScript, the production build,
SEO and privacy checks, and 15 focused tests passed. The export contains
the final route in the article index, sitemap, feed and llms.txt. The
1200 by 630 sharing card and both page images load. English and Persian
breadcrumbs follow reading direction and have user-select disabled.
All seven widths passed in both themes, including five April markers.
Viewport motion, reduced motion, no JavaScript and print retain complete
chart data. The source audit found no material gap in the public story;
private details and ambiguous or duplicate measurements remain excluded.

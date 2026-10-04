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

---
name: resume-advisor
description: John's Resume Advisor for mradib.com. Use BEFORE editing any resume or CV content on this site: the /resume and /fa/resume guides, the resume scorecard, the action-verbs list, or the AI-facing resume method (llms.txt and skill.md). Keeps every surface deriving from one source.
---

# Resume Advisor

You keep the resume guide, the scorecard, and the AI-facing resume files in
sync. There is one source of truth and everything else renders from it. Never
state a piece of resume advice in two places.

## Source of truth

`src/data/resume-checklist/` holds the method as data: weighted items, each
with a `question`, `problem`, and `fix`, bilingual in `checklist-copy-en.ts`
and `checklist-copy-fa.ts`. Points live in `checklist-items.ts` and sum to 100
today, but scores are computed as a share of the live total, so new items never
break the math. Change the advice here, once.

## What renders from it

- The human guide: `src/app/(en)/resume` and `src/app/fa/resume` (per-section
  copy in `_sections`, self-assessment checklists fed from the data).
- The reviewer and scorecard: `src/components/resume-review`, the builder at
  `/resume/review` and the shared result at `/resume/checklist`.
- The AI-facing method: `src/lib/resume-ai/framework.ts` turns the checklist
  into ordered, weighted rules; `build-llms-txt.ts` and `build-skill.ts` render
  it as `/resume/llms.txt` and `/resume/skill.md` (and the `/fa` pair).
- The site-wide `llms.txt` advertises those files via
  `sectionResumeAiTools()` in `src/lib/llms/llms-sections-extra.ts`.

## Rules

1. Before any resume content change, read the Brand Advisor and Designer board
   (`docs/advisor/README.md`, `docs/designer/README.md`) and `voice.md`. This
   skill sits under that board, it does not replace it.
2. Add or change advice in `src/data/resume-checklist`, then let the guide,
   scorecard, and AI files inherit it. If a new rule needs its own guide
   section, add the `_sections` copy in both `(en)` and `fa` and a matching
   entry in each `resume-sections.ts`.
3. Keep the voice rules: no em or en dashes anywhere, bold and factual, and
   English pages never link into the Persian tree.
4. The AI files are plain text routes, not pages, so they need no OG card. Run
   `npm run check:fix`, `npm run check-types`, and `npm run build` before
   committing, and `npm run verify:seo` after a build to confirm the text
   routes stay clean.

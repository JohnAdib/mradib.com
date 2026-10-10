# Talk descriptions and previews implementation plan

**Goal:** Give all five talks with PDFs two useful paragraphs and a first-slide preview, preserving the existing download card.

**Architecture:** Store deck-grounded descriptions in src/data/talks and render them through the shared talk hero. Keep the short summaries for metadata and use them as the fallback for talks without descriptions. Reuse the existing preview component and cover images, adding the two missing first-slide images and replacing the design systems event poster.

**Tech stack:** Next.js, React, TypeScript, Tailwind, static WebP assets.

## Design

The user requested consistency and more context while retaining the download UI. Use two paragraphs immediately below the event facts, followed by the full first slide and the existing PDF link. This fits the current layout with no extra navigation. A separate topic list would duplicate a short description; an embedded PDF viewer would add complexity without making the page easier to skim.

Keep the panel and podcast content as they are. Preserve all PDF URLs and files. Do not publish independent project identities or categories. No new routes or metadata changes are needed.

Visual review found that the AI-first architecture event video uses the title
slide as its poster, overlapping the page heading when paused or unavailable.
Remove that decorative event video from this talk so all five PDF pages use the
same plain header. Keep its actual recording link and the panel video intact.

## Implementation

1. Read all five decks and record slide references in docs/speaking/talks.md.
2. Add src/data/talks/talk-descriptions.ts and the optional description field in talk-interface.ts. Reference the descriptions from talks.ts.
3. Update talk-hero.tsx to render description paragraphs, falling back to the existing summary.
4. Render the first slide for the guardrails talk, dashboard workshop, and design systems talk as WebP files under public/talks/covers; assign them in talks.ts.
5. Keep the preview frame and download UI, use contain sizing to avoid cropping slides, and add talk-specific image alternative text.
6. Run npm run check:fix, npm run check-types, npm run build, and npm run verify:seo. Verify the five rendered pages, images, and PDF downloads. Review screenshots at 375, 430, and 1440 pixels in light and dark modes. Check the panel fallback and talks index.
7. Commit the completed batch and open a PR to main as requested. The user will review and merge. Deployment is triggered only by pushes to main, so push the feature branch only.

## Verification approach

This is a small content and presentation change. Use the repository checks plus browser verification of the real pages rather than adding tests that repeat the prose or implementation. Store temporary PDF extracts and screenshot evidence outside the repository.

## Completed verification, 5 October 2026

- Biome check: passed; one existing optional-chaining warning in the OG image generator. Changed files pass check:fix without warnings or edits.
- TypeScript check and production build: passed; 112 static pages generated. Existing CSS @screen and Node module warnings remain outside this change.
- SEO checks: sitemap parity, metadata, constraints, and article privacy all passed.
- Browser checks: all five PDF pages at 375, 430, and 1440 pixels in light and dark modes (30 combinations). Two paragraphs, loaded preview, correct PDF link, and no horizontal overflow on each.
- All five PDF URLs returned valid PDF files. The panel still renders its summary and custom content; the talks index and Spotify link are intact.
- Screenshots reviewed for every combination. AI-first header recaptured after removing the overlapping video poster. Independent content/code review found no actionable issues.

# Playbook: adding or editing a talk

Talks are leadership evidence. A talk page must make an organizer think
"book him" and a founder think "he commands rooms".

## Framing rules

- Lead with the stage: event name, venue prestige, audience size. "AI Coding
  Summit, 5,000+ engineers" comes before any abstract.
- Recording first. If a recording exists, it is the hero of the page. If
  slides exist, link the PDF from public/talks/ with a clean URL.
- Name the host when it adds prestige: hosted at Figma's London office,
  hosted by NewDay.
- Every talk page links back to /talks and forward to a related talk or
  article.

## Data flow

- Facts go in docs/speaking/talks.md first, then src/data/talks/talks.ts.
  The page derives from data; never hardcode facts in the page.
- Each talk gets its own page at the root URL, existing convention.

## SEO for talk pages

- Title pattern: talk title, then event and year. John's name stays in the
  metadata.
- OG image required: a stage shot if available, otherwise a generated OG
  (see playbooks/seo.md). Never ship without one.
- JSON-LD for the talk derives from src/data and stays consistent with the
  positioning.

## Checklist

- [ ] Stage, audience size, and date visible on the first screen
- [ ] Recording embedded or linked if it exists
- [ ] Slides PDF in public/talks/ with a clean URL
- [ ] docs/speaking/talks.md and src/data updated, single source
- [ ] OG image committed, metadata set

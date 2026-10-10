# Homepage 01: Hero

Status: built

## Job

Win the 5 seconds. Before scrolling, the reader has the arc, one or two
proofs they cannot argue with, and a reason to scroll.

## Message

An engineering leader pioneering AI-first software development, with the
practical workflow defined before the supporting founder and mentor credentials.

## Facts

- The intro leads with AI-first development and a continuous workflow of
  agents, testing, code review and delivery. Founder scale, teaching,
  mentorship and the UK endorsement support that identity. Shared wording
  lives in src/data/ai-positioning.ts; src/data/intro-bio.ts derives the
  on-page and clipboard introductions.
- H1 material: the manifesto verbs (About hero, John-approved) and the
  keyboard origin (About chapter 01: "Just a keyboard, with no computer
  to plug it into"). Rulings 2026-07-19: no government wording in the
  title, no "teenager" anywhere on the homepage, no award names in the
  H1 (institutions prove, they do not headline), and never a growth or
  permanence claim about the startups, John ended both himself. Growth
  wording is allowed only for verified point-in-time numbers.

## Copy draft

The H1 is the name itself. Decided 2026-07-19, fifth round, John's own
construction from the headline lab:

"John Adib" with the accent line "Still building, every single day."
(his About hero line, present tense, evergreen).

Because the H1 carries the name, the site header hides its "John Adib"
text on the homepage only (avatar stays; every other page keeps name
plus avatar; see src/components/header/header-name.tsx). Reserved line,
John-approved, for About or an OG card: "From a blinking cursor to
leading engineering in London." It was not used here because it ends
where the paragraph begins (engineering leader in London) and the words
would double. Retired earlier rounds and their rulings: no credentials,
counts, award names, government wording, "teenager", or growth claims
in the title ("Everything I build grows" is factually wrong, John ended
both startups himself). Below the H1, the intro paragraph renders via
the click-to-copy HomeIntro component; a tap just copies, no tooltip,
no instruction. The paragraph is curated because the sections below carry
the detailed evidence. John's direction of 6 October 2026 moves AI-first
development to the opening sentence and explains the workflow immediately
after it. The exact current copy lives in src/data/ai-positioning.ts.
The clipboard copy prefixes "I'm John Adib, an ..." (one body string, two
openers, src/data/intro-bio.ts). Method note: five rounds of chat-text
options failed; rendering candidates in the real lockup
(docs/designer/mockups/headline-lab.html) settled it in one pass.

## Path deeper

Primary CTA "Read the story" to /about. Secondary CTA "Get in touch" to
/contact. Two buttons, never more. Decided 2026-07-19: the hero serves
the primary audience; mentorship and speaking move to the Invitation
section and the nav.

## Design notes (later phase)

Parked. Imagery rule on file: the homepage hero carries the single
strongest image on the site, a stage shot or a portrait with presence
(../../imagery.md).

## Open questions

- None.

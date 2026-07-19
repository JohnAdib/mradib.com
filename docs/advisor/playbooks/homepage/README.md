# Playbook: homepage

The most valuable page on the site. The primary reader, a founder or
investor who searched John's name, gives it 5 seconds.

This folder is the homepage content spec, one file per section. Decided
2026-07-19 (see ../../decisions.md): content first, one story, not a
trophy shelf. Design work on a section starts only after its content is
approved.

## Philosophy

Curate, do not enumerate. The homepage tells one rising story, shows a
few undeniable proofs, and sends visitors deeper (About, awards, talks).
Full lists live on the hub pages.

## The 5-second test

Above the fold, the reader must get: who John is (builder and leader),
one or two proofs they cannot argue with, and a reason to scroll. If the
first screen could describe a thousand engineers, it fails.

## The architecture: one rising story

Five sections. The hero compresses the whole arc for the 5-second
reader. The scroll then runs in time order, past to future, so momentum
is what the reader feels. Each section carries one message, one chapter
of one chronology, and one path deeper. Only the hero stacks proofs side
by side; that is its job. That is how the page passes the 5-second test
without becoming the trophy shelf John rejected.

| # | Section | File | Chapter | Path deeper |
|---|---------|------|---------|-------------|
| 1 | Hero | 01-hero.md | The whole arc, compressed | /about |
| 2 | Rise | 02-rise.md | Past: medals, classrooms, companies | /about |
| 3 | Recognition | 03-recognition.md | The world responds | /awards |
| 4 | Now | 04-now.md | Present: AI-first | the AI-First Architecture talk |
| 5 | Invitation | 05-invitation.md | Future: the open door | /contact |

Each file carries its own status: draft, approved, or built.

## Hierarchy of proof

Order highlights by wow weight for the primary audience:

1. The World's Most Influential Mentor, selected from 32,000+ mentors
   across 140+ countries.
2. 2x co-founder: $1M raised, one million users in a month, 1,200+
   businesses served.
3. UK government endorsement: Global Talent, exceptional talent in
   technology.
4. Stages: AI Coding Summit (5,000+ engineers), React Advanced London at
   Figma.
5. AI-first practice: releases taken from monthly to weekly, AI
   reviewers on every pull request.

## Rules

- A stat earns its place only if it means something on its own to
  someone who has never heard of the platforms behind it. Add context
  ("from 32,000+ mentors") or cut it.
- Numbers live inside the story. No standalone stat band; every number
  sits in the sentence that says what it meant (decided 2026-07-19).
- Every section ends with a path deeper. One per section; the closing
  Invitation carries the two conversion buttons.
- Never add a homepage section without removing or tightening another.
  The page gets sharper, not longer.
- The hero paragraph is the canonical shareable intro. It lives in
  src/data/intro-bio.ts and is never duplicated into these docs.
- No employer name anywhere on the homepage, including the intro
  paragraph (decided 2026-07-19).
- Video views are always framed "1.2M+ views on YouTube alone". Only
  YouTube is tracked; never state a total (decided 2026-07-19).

## Working in this folder

- Drafts here are working copy. src/data and the components stay the
  shipped truth until a section is built.
- Open questions live inside each section file. When John answers, apply
  the answer, delete the question, and log it in ../../decisions.md.

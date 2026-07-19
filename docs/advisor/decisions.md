# Brand and design decisions log

Append-only. Newest first. Date, decision, why. The shared log for the
whole advisory board: brand (docs/advisor) and design (docs/designer). Log
every new direction John gives in any session.

## 2026-07-19, email policy: public but obfuscated, plus-tagged per surface

The email stays the hero of /contact, but the static HTML never carries
the address: it assembles client side after hydration (components under
src/components/email). Every surface uses a Gmail plus-tag so leaks are
traceable and filterable: +site (contact hero link), +copy (copy
button), +talk (speaking invitations), +footer (footer icon), +ai
(llms.txt, deliberately plaintext for AI assistants). Person JSON-LD
carries no email. Known limit, accepted: smart spammers strip plus-tags;
this is tracing, not armor.

## 2026-07-19, awards page round 2 from John's review

The compressed badge strip was rejected: the kind-grouped, larger badge
cards return (the new "19, month after month" header stays). Lightbox
arrows now walk EVERY certificate in the collection, not just one
badge's images, with per-image reference pills. The ledger group header
never says immigration; it is "National recognition". The awards page
closing now sends readers to the STORY (/about) first, talks second:
someone who just read the proof is primed for the story, not for
booking a session.

## 2026-07-19, About round 2: honesty rules and new chapters

John's line-by-line review set standing rules. Never publish a duration he
cannot remember (no "years in front of the screen" claims). Windows version
stays unnamed: 95, 98, and XP all play startup sounds, so the sound cannot
identify the install. Teaching-era chapter dates from 2006 (Canon A640
released September 2006; his first salary bought it). Silver year
placements: first in city, first in state, national Silver. Global Talent
evidence is the LAST FIVE YEARS, innovation category, never "sixteen years
of evidence". London dates: the decision date (26 December 2021) may be
exact; the landing stays month-level (December 2022, Heathrow, no day) for
privacy. The co-founder conflict is never mentioned. Two new chapters:
online videos (1.2M+ views on one platform, John-stated) and first English
talks (from July 2025, Figma's office first). Open-source line removed from
the site's human framing; the About CTA is "Get in touch" to /contact,
never the awards page. Three privately trained WorldSkills national
medalists and the Sao Paulo 2015 camp are John-stated facts.

## 2026-07-19, homepage parked: content strategy before design

All four layout variants (cover, split, persona, ledger) rejected. The
reason is structural, not visual: a homepage that shows off multiple
things at once is wrong for John. Standing rule: decide WHAT the
homepage says first (one story, not a trophy shelf), then design it.
The homepage redesign is parked until that content conversation
happens. Work proceeds on the inner pages meanwhile, applying the
locked decisions: Newsreader display voice, warm paper light mode,
dramatic dark, Contact in the header, the Persian link in the footer.

## 2026-07-19, DISPLAY FONT DECIDED: Newsreader

John picked Newsreader over Instrument Serif on the head-to-head page
(docs/designer/mockups/round3/font-final.html). The display voice for
the whole site is Newsreader, weight around 560 to 620 for heroes with
the full 200 to 800 range available, optical sizing on, italic accent
words in the accent color. Inter remains the body sans, Vazirmatn stays
for Persian. This decision is closed; next single decision is layout.

## 2026-07-19, font finalists: Instrument Serif vs Newsreader, one step at a time

From the nine-face specimen John liked Instrument Serif and Newsreader
and rejected Marcellus and Cormorant Garamond. The board recommends
Newsreader (200 to 800 weight range and optical sizing carry the solid,
luxurious, trustworthy brief as a full system; Instrument Serif has a
single weight and is over-imitated right now), but the final pick is
John's, via a head-to-head page. Process rule John set: decisions land
ONE AT A TIME, font fully closed before any layout exploration starts. A
premature full-screen act-by-act layout demo (cinema style) was shown by
mistake and disliked; it is withdrawn and does not count as a layout
round. Inter stays as the quiet body sans regardless of the winner.

## 2026-07-19, round 3 layout rejected, font decision decoupled

Round 3 single-layout demos (inter, bricolage, fraunces on warm paper)
missed again: John rejects the layout outright and wants the typeface
chosen first, on its own, with more variance than three options. Inter is
out as the display face. Fraunces was "not bad" but the 900 weight reads
too bold. The brief for the display voice: luxurious, solid, fair,
trustworthy, less black. Process fix: step 1 is a nine-face specimen page
(docs/designer/mockups/round3/fonts.html) at moderated weights with
per-face hero previews; step 2 is separate full-layout variants built in
the winning face. The warm paper light background and dramatic dark mode
keepers stand.

## 2026-07-19, Iran and Tehran are never named on the site

Standing rule for every page, English and Persian alike. The country is
"the country" in prose, or "IR" only where a proper noun demands it (the
web festival is "IR Web Festival"). The people and audience are "Persian
speakers", never Iranians. The University of Tehran is "one of the biggest
universities in the country". Placeholder examples use neutral cities
(London, UK). The private docs under docs/profile keep full real names;
this rule governs published site content only.

## 2026-07-19, visual direction round 2 rejected, keepers extracted

Round 2 (kinetic, constellation, aurora2) also missed: "still nothing close
to what I can think of." Confirmed keepers from the rounds, binding on the
future direction: the warm paper background from Monograph (#f7f3ec range)
becomes the LIGHT MODE background instead of pure white or zinc-50, and
only that, nothing else from Monograph; Kinetic's bold heavy display
titles are liked; motion stayed lukewarm. Next step: John supplies
reference sites that match the picture in his head before any round 3.

## 2026-07-19, visual direction round 1 rejected, round 2 built

John rejected Monograph (editorial serif, "old school"), Signal (current
look sharpened, "literally nothing"), and Aurora v1's weak motion (the
background was acceptable). The bar he set: dark, dramatic, and the
animation itself must impress; more examples wanted. Round 2 prototypes in
docs/designer/mockups: kinetic (type-driven motion), constellation
(interactive particle network), aurora2 (cinematic depth with cursor
spotlight and 3D tilt). Light editorial looks are off the table.

## 2026-07-19, the Designer advisor is created

Second seat on the board, at docs/designer, with the skill
.claude/skills/designer. Both advisors are always consulted together; the
word "advisor" means both. Motion is a priority (hand-built, web-native,
Lottie discouraged). Screenshot proof per docs/designer/critique.md is
mandatory for every visual change, phone widths first (80% mobile). The
visual direction pick (Signal, Monograph, or Aurora in
docs/designer/direction.md) is deferred until John chooses; the current
teal-on-zinc identity stays until then. John is open to replacing Inter
for a more luxurious identity as part of that pick.

## 2026-07-19, About page: the London restart is told in full

John approved telling the hard part of the 2022 move: he closed Jibres, left
everything behind, and restarted in London as a software engineer on a Skilled
Worker visa. Framing rule: always an intentional, future-proofing decision,
never a bet or gamble. No politics, no commentary on the home country. The
salary tradeoff between cities stays off the site (offers were not final).
This beat deliberately sets up the Global Talent chapter: sponsored arrival in
2022, unsponsored endorsement in 2024.

## 2026-07-19, chapter slugs are one word

Every About chapter anchor is a single word (shop, talent, ai, windows), never
hyphenated. Applies to any future chapter or section slug.

## 2026-07-19, University of Tehran audience number

Use 200+ attendees (all sessions exceeded 200, a couple reached 300+; keep it
simple, do not mix numbers). The missing-photos story is published as an
authentic beat, ending with an open ask for photos from attendees.

## 2026-07-19, the Brand Advisor is created and takes authority

The advisor (docs/advisor) supersedes the old CLAUDE.md tone rules. The old
"humble but confident" register is retired in favor of bold, cinematic,
certain (see voice.md). Facts still must trace to docs/profile,
docs/speaking, or src/data.

## 2026-07-19, audience ranking

Primary audience: founders, investors, and successful people who search
John's name. Organizers, hiring managers, and mentees are served second and
never at the primary's expense. See audiences.md.

## 2026-07-19, testimonial ban lifted

LinkedIn recommendations may now be quoted on the site, selectively, with
name and role, where a third-party voice adds wow. John approved.

## 2026-07-19, OG image required on every page

The site is static on GitHub Pages, so OG images are generated locally and
committed as static files in public/. No page ships without one. See
playbooks/seo.md.

## 2026-07-19, advisor lives as docs plus a routing skill

Strategy lives in docs/advisor. A thin skill at .claude/skills/brand-advisor
triggers on content and design tasks and routes here. One source of truth,
two entry points.

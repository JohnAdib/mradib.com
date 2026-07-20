# Brand and design decisions log

Append-only. Newest first. Date, decision, why. The shared log for the
whole advisory board: brand (docs/advisor) and design (docs/designer). Log
every new direction John gives in any session.

## 2026-07-20, the scorecard wears the site's premium idioms

John's read: the compact scorecard had gone flat and old-school. Modernized it
with the treatments the rest of the site already uses, so it reads as one product
rather than a plain form. The result's first view (and the builder's score box)
are now glow panels: a soft zinc surface with two blurred accent orbs, matching
home-now and home-invitation. The score gauge blooms, an SVG feGaussianBlur halo
in the arc's own colour, so it feels luminous instead of a flat ring, brightest in
dark mode. Section tiles lift on hover with a soft shadow, issue cards carry a
resting shadow that deepens on hover, and the result's sections fade up on scroll
via the shared Reveal. Still compact, no extra height to speak of, and unchanged
across both locales and themes.

## 2026-07-20, five grades per item, crafted icons, N/A excluded

John wanted more nuance than three states, and crafted icons over emoji (emoji
render differently per device and read less premium). Each item now grades on a
five-point scale with distinct vector icons: great (star), good (check, the calm
default), needs work (amber circle, half points), problem (rose triangle, full
points), and N/A (grey minus, excluded from the score entirely so it never counts
against the person). Grading is a small inline tap-picker on each row, not a
cycle, since most items stay good and the reviewer only touches a few. The score
stays out of 100 (great adds nothing, since you cannot exceed 100); the result
surfaces a "What's great" strengths row above "What to fix". Share links stay
short: only non-good grades ride the URL as slug+digit (1-4), and codes 1/2 keep
their meaning so earlier links still decode.

## 2026-07-20, the scorecard is compact, like an installed app

John's read: the scorecard felt like a nice web page but too tall, scrolling
forever from the first view. Tightened it to feel like a native mobile app.
Builder items are now single-line rows (icon plus title, the self-assessment
question dropped from the reviewer view), which roughly halves the 28-item list;
padding, gaps, group spacing, the hero gauge, and the score box all shrank. The
English builder dropped from about 4700px to about 2760px tall at phone width.

## 2026-07-20, the scorecard grades in three states, and keeps links short

The review flow moved from binary flag / no-flag to three states per item: green
(good, the default), orange (some issue), red (a real problem). In the builder,
tapping an item cycles green to orange to red. Orange costs half the item's
points, red the full weight, so the score reflects severity, not just a count.
The share link stays short: only non-green items travel, each as its slug plus a
severity digit (orange 1, red 2), and green items are omitted entirely, so a
mostly-good CV yields a tiny URL (e.g. issues=fmt2.ach1.job2). The guide's
self-assessment checklist stays binary; severity is a reviewer concept.

## 2026-07-20, AI-facing resume method (llms.txt and a portable skill)

The resume guide now ships in a form AIs can read, so when someone writes their
CV with ChatGPT or Claude it follows John's method instead of generic filler,
and every AI-written resume traces back to mradib.com. Three pieces, all
deriving from the one checklist in src/data/resume-checklist:

- Published resource: /resume/llms.txt (and /fa/resume/llms.txt), the method as
  weighted, machine-readable rules, rendered by src/lib/resume-ai.
- Portable skill: /resume/skill.md (and the /fa pair), a ready SKILL.md a
  person can hand to any AI tool.
- Repo skill: .claude/skills/resume-advisor keeps the guide, scorecard, and AI
  files in sync from the single source.

Rulings:

- The /resume page mentions and shares them in a new "Write your resume with
  AI" section (id ai-tools), placed after References, before the cover letter,
  with a copy-ready prompt. Bilingual, matching the guide.
- These are text routes, not pages, so no OG card. The site-wide llms.txt
  advertises them via sectionResumeAiTools so agents discover them.
- Single source holds: advice lives only in src/data/resume-checklist; the
  guide, scorecard, and AI files all render from it.

## 2026-07-20, the scorecard speaks to the person, and grows

Two follow-ups to the resume scorecard. First, the shared result now greets the
candidate by name: the reviewer types a name in the builder, it rides the share
link as a `name` param, and the recipient's first view opens with "Hi {name},"
(Vazirmatn on the Persian page). The first view should feel like it is talking
to that specific person, not a generic tool. Second, the checklist grew from 17
to 28 items with real problems a reviewer actually flags: PDF export,
inconsistent formatting, missing profile links, a careless file name, clichés
and buzzwords, first-person bullets, missing or inconsistent dates, unexplained
gaps, personal details that invite bias, dense walls of text, and the outdated
references line. Points were rebalanced so the score stays out of 100, and the
builder copy was rewritten to say plainly what the page does.

## 2026-07-20, the resume scorecard, a shareable scored review

New page at /resume/checklist and /fa/resume/checklist: an app-like tool that
turns the resume checklist into a shareable CV review. The reviewer taps the
problems they spot, copies one link, and the recipient opens a Lighthouse-style
scorecard: the score out of 100 first, then a per-section breakdown, then each
issue with its fix and a deep link into the resume guide. The recipient ticks
issues as fixed and watches the score climb (progress in localStorage, keyed
per link). Rulings:

- A check means "a problem to fix". The score starts at 100 and each flagged
  issue lowers it. John's call, matching the Lighthouse framing he asked for.
- It is a new page, not part of the guide. The score-first, app-like layout is
  a different animal from the long SEO guide, so it gets its own route. The old
  /fa/resume/checklist redirect became the real page.
- The checklist data moved to src/data/resume-checklist. Each item now carries
  a short stable slug (share links use slugs, not long ids) and a point weight
  that sums to 100. The guide's self-assessment widgets read the same data
  through thin adapters, so nothing is stated twice.
- Gauge colour is provisional and set for John's live review: teal for the
  passing range (70 and up), amber for the middle band, rose for low. No
  Lighthouse green, to keep the accent brand-true.
- The share preview is one static brand card per locale in public/og. GitHub
  Pages cannot render a per-score image, so score-tier cards are deferred.

## 2026-07-19, the mentor hero card is replaced, typo fixed

The English mentor hero image (src/app/(en)/mentor/_img/mradib-mentoring)
is swapped for a fresh ADPList "I'm mentoring on adplist.org" card John
supplied. This retires the old card's known "Principle Software
Engineer, Loopla" typo and its casual photo; the new one carries the
professional studio headshot and "Engineering Manager, Zapp". John's
source PNG was actually a 2732x2032 WebP with heavy black export
padding; trimmed to the content bounds (balanced margins, 16:10 to match
the old slot), resized to 1680x1050, and saved as WebP (49KB, down from
the old 163KB PNG) since the hero loads it eagerly. Import updated to
.webp. Brand note for future edits: this authentic ADPList card shows
"Engineering Manager / Zapp" and ADPList blue, which differ from the
site's "engineering leader" wording and teal accent; kept because it is
ADPList's own card on the ADPList-context page and John chose it. The
Persian mentor page (src/app/fa/mentor/_img/mradib-mentoring.png) still
holds the old typo'd card as a separate file, not yet replaced.

## 2026-07-19, the word government leaves OG card copy

Ruling from John on the About card: no "government" keyword in the
image; the endorsement is named by the visa instead. The About proof
line is now "Entrepreneur, twice. The World's Most Influential Mentor.
UK Global Talent.", matching the home card's phrasing. Extends the
hero rule (institutions prove, they do not headline) to card copy:
prefer the award's own name over the endorsing institution. The award
page card keeps "UK Government" as its eyebrow for now, as issuer
attribution on the award's own page, pending John's word.

## 2026-07-19, the description is curated and founder-led

The homepage description was rewritten fresh (settled via
docs/designer/mockups/description-lab.html). Two rulings. First, it is
curated, not a full stat ledger: the sections below already prove every
count, so the paragraph carries a few undeniable proofs as prose and
lets the page enumerate. Second, it opens on the founder identity, not
the day-job title, because positioning.md ranks entrepreneur and builder
first and the primary audience respects founder over manager. On-page
text: "A two-time founder and engineering leader in London. $1M raised,
a million users in the first month, 1,200+ businesses served. I've
taught thousands and mentored engineers around the world. ADPList named
me The World's Most Influential Mentor; the UK endorsed me as
exceptional talent. Today I build AI-first, changing how teams work, not
just how fast they ship." src/data/intro-bio.ts no longer interpolates
live counts; the numbers here are frozen historical facts. Supersedes
the opener wording in the entry below.

## 2026-07-19, the intro paragraph stops repeating the name on the page

With "John Adib" as the H1, the paragraph no longer opens "I'm John
Adib" on the page; it renders "An engineering leader in London. 17+
years in, three verbs..." The CLIPBOARD copy still opens "I'm John
Adib, an engineering leader in London" so the pasted handout carries
the name and travels complete. One body string in src/data/intro-bio.ts
feeds both; only the opener differs. This refines the canonical-intro
decision below: copied text is now the name-prefixed rendition, not the
literal on-page text.

## 2026-07-19, the homepage title is the name, the header goes quiet there

Settled via the headline lab (docs/designer/mockups/headline-lab.html,
12 candidates rendered in the real hero lockup) after five rounds of
chat-text options failed. John's construction: the homepage H1 is "John
Adib" with the teal line "Still building, every single day." (his About
hero line). He approved two lines; the advisor chose this one because
the other, "From a blinking cursor to leading engineering in London.",
ends where the paragraph begins and the words would double; that line
is reserved for About or an OG card. Because the H1 is the name, the
header shows its "John Adib" text on every page EXCEPT the homepage
(avatar always stays); the rule lives in
src/components/header/header-name.tsx. Method rule for future copy
stalemates: render the candidates in place, do not list them in chat.

## 2026-07-19, views were never on YouTube, and testimonials become a mosaic

Fact correction from John: the 1.2M+ video views are NOT on YouTube.
One platform is tracked, the platform is never named on the site, and
the About chapter 06 framing "on one platform alone" is the canonical
wording everywhere. Every doc that said "YouTube alone" is corrected.
Also cut from the homepage Rise beat: "across four institutions", the
detail lives on /about. Testimonials change shape: instead of one long
quote, the homepage Recognition section shows a mosaic of many short
verbatim fragments pulled from all five LinkedIn recommendations
(src/data/recommendations.ts), collective attribution "engineers,
leads, and founders I worked with", one link to the LinkedIn
recommendations page, no individual names rendered, no photos.
voice.md's testimonial rule is amended to sanction the mosaic shape.

## 2026-07-19, hero round four: the manifesto verbs, and a fact guard

"Everything I build grows" is retired as factually wrong by John's own
account: both startups ended because he ended them. STANDING FACT GUARD
for every page: never claim or imply the companies still run or grow;
growth numbers are point-in-time facts ($1M raised, one million users in
the first month, 1,200+ businesses served), and the published framing
for the endings is the deliberate London restart, never the word
"failed". After credentials, counts, and pattern claims all failed
John's "is this me" test, the homepage H1 is now his approved manifesto,
shared with the About hero: "I build. I teach. I mentor." The accent
line is the childhood hook from About chapter 01: "It started with a
keyboard and no computer." The canonical intro paragraph opens on the
same verbs ("17+ years in, three verbs: I build, I teach, I mentor"),
ledger and AI-first closer unchanged. Direction chosen by John from
explicit full-text options; the keyboard line was the advisor
recommendation, accepted.

## 2026-07-19, hero round three: the H1 is a thesis, not a credentials list

John rated the award-led H1 good but not best, and he is right. New
standing principle for the homepage hero: institutions prove, they do
not headline. The H1 is now the one thesis only John can claim,
"Everything I build grows.", with the accent line "Classrooms.
Companies. Careers." (the three domains, chronological). The canonical
intro paragraph was rewritten to match: it opens with the pattern ("17+
years in, one pattern: everything I build grows", the years interpolate
from data), then proves it in ledger rhythm, short fragments, one number
per beat,
same facts as before, no new claims. The paragraph repeats the thesis
deliberately because the copied text travels without the headline. Also
ruled: the click-to-copy paragraph shows no tooltip and no instruction,
a tap just copies. (Superseded later 2026-07-19: the "Copied"
confirmation badge is removed too; the copy is fully silent, John's
call.)

## 2026-07-19, hero H1 round two: no government, no teenager, entrepreneurship

Three rulings from John after seeing the built page. The word
"government" leaves the H1: institutions belong in the proof, not in the
title of a personal site (the UK endorsement stays in the intro
paragraph and Recognition). The word "teenager" and any age framing
never appear on the homepage; age framing stays on /about and the
WorldSkills award page, and the Rise beat becomes "National medals at
WorldSkills", the competition name does the bragging. Entrepreneurship
is the preferred word over startup or company counts in headlines. The
H1 is now "Entrepreneur, twice. The World's Most Influential Mentor. In
that order." (advisor recommendation, accepted), and the Rise headline
ends "Then entrepreneurship." Standing note: John rates the page better
but not best; the gap is the visual layer, design round three with live
hero treatments is the open next step.

## 2026-07-19, homepage section content approved, all five sections

John resolved the open questions the same day. The hero H1 is "Two
startups, a world title, a government endorsement. In that order."
Recognition names the world title only; #1 Mentor in Europe stays on
/awards, one name hits harder than two. The testimonial is attributed in
full, "Qudrat Ullah, Senior Lead Software Engineer", per the voice.md
rule. Both cuts confirmed: the standalone personal section merges into
the Invitation close as one sentence, and the podcast card leaves the
homepage (it stays featured on /talks). Every section file in
playbooks/homepage/ is now Status: approved. Content is settled; the
design and build phase may open, section by section.

## 2026-07-19, gtag loads on first interaction, never near the paint

Google's gtag.js is 158 KiB, 44% of the page's JavaScript. It now loads
only on the first user interaction (pointer, key, scroll, touch) with a
4 second post-load idle fallback so non-interacting visits still get
counted (src/components/analytics.tsx). Verified: load event at 502ms,
gtag request at 4,582ms. Implementation gotcha recorded: the gtag shim
must push the Arguments object to dataLayer, never a plain array, or GA
silently ignores the commands. Reminder: the mobile LCP John measured on
the live site (3.8s) predates the committed font-display fix; the local
production build measures 1.5s under harsher throttling, so the biggest
win ships with the next push.

## 2026-07-19, homepage content decided: one story in five sections

The parked homepage conversation happened. The page tells one rising
story: Hero (the whole arc compressed, the locked intro paragraph, CTAs
"Read the story" to /about and "Get in touch" to /contact), Rise (past:
medals, classrooms, two companies), Recognition (the UK endorsement, the
world title, one short testimonial excerpt), Now (AI-first practice plus
the stages), Invitation (one human sentence, then mentorship and
speaking). The stat band and the highlights card grid die; numbers live
inside the story, never in a naked grid. Full spec, one file per
section: playbooks/homepage/. Supporting rulings from John: the employer
name is cut from the canonical intro paragraph (src/data/intro-bio.ts
now opens "an engineering leader in London"); video views are always
framed "1.2M+ views on YouTube alone", because only YouTube is tracked
and the real total is higher, so never state a total; homepage
testimonials are short excerpts with no colleague photos, linking to the
LinkedIn recommendations page. Design stays parked until section content
is approved; open questions live inside the section files.

## 2026-07-19, consistent motion, named header, client-side links only

Three standing rules from John's review. The header shows "John Adib"
next to the avatar on every page (one line, links home). Every page gets
the same entrance motion language as About: reveal-rise on hero text,
scroll Reveal on sections below, with the noscript fallback; awards,
mentor, and the articles index were brought in line. Internal navigation
always uses next/link, never a raw anchor: a raw <a> in the dark CTA
panel caused full-page reloads (the "jumping" John felt); every internal
<a> sitewide was converted. The About hero fits five stats on one line
on desktop (2/3/5 responsive columns, last stat spans the row on
phones). Also corrected on the Global Talent story page: evidence window
is the last five years, innovation category, matching the About rule.

## 2026-07-19, every page section is deep-linkable, ADPList named twice max

Standing rule: every major section on every page carries a one-word id
with scroll-mt-24 so it can be linked directly (home: stats, ai,
highlights, personal; talks: topics, talks, podcast, faq; awards:
flagship, badges, ledger; mentor: topics, stats, recognition, faq, book;
articles: articles; contact: channels, faq; about and resume already had
theirs). Brand rule: on the awards hub the ADPList name appears ONLY as
the issuer attribution on the two flagship cards (was 8 mentions, now 2);
prose says "The World's Most Influential Mentor", the stat label says
"most influential mentors, worldwide", the streak header says "Mentoring
recognition". Avoid repeating a platform name where the award name or an
issuer chip already carries it.

## 2026-07-19, stat labels darken, body font stops repainting LCP

Lighthouse flagged the StatBand uppercase labels: zinc-500 fails WCAG on
the warm paper background at 12px; they are zinc-600 now, dark mode
unchanged. LCP fix: Inter (body text, the LCP element) loads with
font-display optional, so the largest text paints once in its
size-adjusted fallback and never repaints late on slow connections;
Newsreader keeps swap, the display voice is worth the repaint. Verified
on the production build under Slow 4G with 4x CPU: LCP 1.5s (was 4.1s in
John's audit), accessibility 100.

## 2026-07-19, the homepage paragraph is the canonical shareable intro

John's call after considering the About hero: the About hero paragraph
stays humanized and page-bound; the HOMEPAGE hero paragraph is the one
polished self-intro he copies to introduce himself anywhere. It lives in
src/data/intro-bio.ts (numbers interpolate from data, mentor title
carries no year since he holds 2024 and 2026), renders via the
click-to-copy HomeIntro component, and the clipboard gets the exact
paragraph plus a tail "More: https://mradib.com" that never renders on
the page. This was a John-directed content change; the homepage-parked
rule (layout redesign) still stands.

## 2026-07-19, About round 4: the editorial sharpening pass

From the external revision brief plus John's answers. The borrowed
"yesterday is history" proverb is out; the last chapter now ends on
John's own philosophy (uncertainty exists, plans bend, but planned work
makes tomorrow answer). "I don't know what the next chapter looks like"
is retired as FALSE: the closing now says the next chapter is in the
works and this page hears it first. Chapter 15 opens with the
three-day enterprise auth panel as its scene (John approved; no
invented dates or people). Aphorism closers trimmed where unearned
(ch05 rewritten to the operating-manual line, ch07 keeps only
"Teaching first, titles later.", ch11 loses "restart/rebirth", ch12
keeps only the triplet); the ch10 vision/system closer stays. Vague
phrases replaced with concrete ones (ch08 masters-comparison, ch12
resume/interview/visa questions). Hero goes to five stats with "1.2M+
video course views" from the new src/data/teaching-stats.ts. Three
evazzadeh.com course links (Excel, HTML/CSS, PHP) woven inline into
ch06 prose; no evidence strip, no per-course numbers. Chapters 08 to
10 keep chronological order (the "Meanwhile" era label is the cue). A
one-line speaking CTA closes ch14, prose-styled, linking /contact.
Standing rule: unannounced projects stay off the site until John
announces them; no page may hint at them.

## 2026-07-19, About round 3: the deposit story goes in, plus new facts

The advisor call John delegated: the London arrival hardship IS published,
with dignity (a few hundred in his pocket, a friend lent the home deposit,
"one asset survived the move: what I can do"). Struggle sells the arc.
New John-stated facts now on the page: first video published 28 August
2011 (17 minutes, table of contents in Word, 400 comments on his site,
linked to evazzadeh.com); full Excel course video September 2013, C
programming December 2013; Jibres was the country's FIRST omnichannel
e-commerce platform, written line by line by John; settled status arrived
December 2025, three years after landing; the restart is framed as "zero
years old in this city". Phrasing rules: he never followed a syllabus
(his or anyone's), never say he wrote one; "highest score they had seen"
is the approved ICDL claim; teaching at the institute was two years flat,
no "maybe"; entrepreneur-becoming-employee replaces CEO-then-CTO; "money
that was not mine" is banned; sessions "filled six hours of a day", never
"without a break"; "father of two lovely daughters"; startup chapters
carry the company names in their titles.

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

## 2026-07-19, bespoke OG cards shipped for every page

Every page now has a generated 1200x630 card in public/og: one dark brand
frame (zinc-950, teal glows, starfield, Newsreader display, rotated artwork
panel), unique headline and proof per page, English and Persian variants.
Cards are data: src/data/og drives both the generator (npm run og:build,
headless Chrome plus sharp) and each page's og:title, og:description, and
og:image via src/lib/og-metadata.ts. Talk cards derive from talks data and
always show the event logo panel, never the cover slide (slides crop badly
and carry their own text). Award cards show evidence images; UK Global
Talent stays typographic on purpose (no artifact exists). The old
file-convention opengraph-image files, including the mentoring image with
the "Principle Software Engineer, Loopla" typo, are gone; the three used as
article covers were renamed to cover.jpg and kept as page art only.
verify-metadata now fails any page missing og:image or whose og:image file
is absent from out/. og:title is the social layer and may differ from the
SEO title tag; both derive from the same facts.

Round two rulings from John, same day: artwork frames use the site's
rounded-2xl radius, talk logo panels are full bleed with no inner padding,
and the homepage card leads with the name itself. Headline "John Adib",
eyebrow carries the hero manifesto "I build. I teach. I mentor." (updated
after the round-four fact guard retired the growth thesis), proof
"Engineering Manager in London. Entrepreneur, twice. The World's Most
Influential Mentor.", no employer and no government mention; the identity
strip drops the duplicate name when the headline already is the name.

## 2026-07-19, advisor lives as docs plus a routing skill

Strategy lives in docs/advisor. A thin skill at .claude/skills/brand-advisor
triggers on content and design tasks and routes here. One source of truth,
two entry points.

## 2026-07-19, header slims to four items; CV gets placements

The header nav is now About, Awards, Talks, Contact. Articles left because
there are only two; Mentorship left because John is winding down active (free)
mentoring and it should read as a chapter, not a destination. Both stay in
the footer, and mentorship remains a channel tile on /contact. The CV at
https://resume.mradib.com (urlSocial.resume) opens in a new tab from three
places: the About closing (already existed), a footer "CV ↗" link, and a
"My CV" tile on /contact. It never enters the header.

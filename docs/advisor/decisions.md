# Brand and design decisions log

Append-only. Newest first. Date, decision, why. The shared log for the
whole advisory board: brand (docs/advisor) and design (docs/designer). Log
every new direction John gives in any session.

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

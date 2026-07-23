# Design system registry

The path from "a component that exists" to "a signed-off system component we
reuse a million times". Every component in src/components has a tier.

## Tiers

- system: signed off by John. Canonical. Reuse it, extend it, never fork it.
- candidate: in production use, not yet signed off.
- legacy: scheduled to be absorbed into a system component or replaced.

Nothing is "system" until John signs it off. Promotions and demotions are
logged in ../advisor/decisions.md.

## Promotion workflow

A candidate becomes system when ALL hold:

1. Passes critique.md at every breakpoint in the full matrix, both themes.
2. Under about 100 lines, single responsibility, no data inside (src/data
   only).
3. Reused in 2 or more places, or clearly built for reuse.
4. John signs it off.

## Target organization, future refactor

Signed-off components move one by one into a dedicated folder, for example
src/components/system/, so the canonical set is findable at a glance. This
doc defines the destination; the actual moves happen in later sessions when
John asks for them. Until then, tiers live only in this registry.

## Registry

| Component | Path | Tier |
|---|---|---|
| Container | src/components/container.tsx | candidate |
| Section | src/components/section.tsx | candidate |
| Card | src/components/card.tsx | candidate |
| Button | src/components/button.tsx | candidate |
| Prose | src/components/prose.tsx | candidate |
| SimpleLayout | src/components/simple-layout.tsx | candidate |
| StatBand | src/components/stat-band.tsx | candidate |
| LinkChipGrid | src/components/link-chip-grid.tsx | candidate |
| CtaOnDarkPanel | src/components/cta-on-dark-panel/ | candidate |
| TiltCard | src/components/tilt-card/ | candidate |
| Reveal | src/components/reveal/ | candidate |
| HighlightCard | src/components/home/highlight-card.tsx | candidate |
| YouTubeEmbed | src/components/video/youtube-embed.tsx | candidate |
| TalkMedia | src/components/talk/talk-media.tsx | candidate |
| PricingCard | src/components/pricing/pricing-card.tsx | candidate |

Components not listed are feature components; add them here when they show
reuse potential.

## Rules

- Extend a system (or candidate) component before inventing a parallel one.
- A new component is allowed only when nothing in the registry fits. It
  lives in a folder by feature, single responsibility, under 100 lines.
- When touching a candidate, leave it closer to promotion: tighten it
  against the workflow above.

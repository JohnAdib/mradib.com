# Design language in practice

The tokens and treatments as they exist in code. Reuse these; never invent a
parallel style.

## Color

- Accent family: `--color-accent-50` to `950`, aliased to Tailwind teal in
  src/styles/tailwind.css inside `@theme`. This is the one-point rebrand:
  change those lines and the whole site rebrands. Never hardcode teal.
- Neutrals: zinc for chrome and text. Body is bg-zinc-50, dark is black.
- The division: neutral chrome, accent highlights. Buttons stay zinc;
  accent is reserved for links, icon chips, eyebrows, CTAs, and glows.
- Prose links use sky (src/styles/typography.ts), distinct from UI accent.
- Selection is branded: accent-950 background in ::selection
  (src/styles/tailwind.css).

## Typography

- Inter via `--font-en`, Vazirmatn via `--font-fa` (src/app/fonts.ts).
  Switching is automatic by dir and URL prefix in src/styles/tailwind.css;
  never set fonts per component.
- Custom scale in tailwind.config.ts: 4xl is 2rem/2.5rem, 5xl is 3rem/3.5rem.
- Page titles: text-4xl font-bold tracking-tight sm:text-5xl, zinc-800 and
  dark zinc-100 (see SimpleLayout).
- Eyebrows: text-xs font-medium tracking-wide uppercase zinc-500.
- Prose headings: font-semibold, h2 at 2xl, generous top margins
  (src/styles/typography.ts).

## Dark mode

- Class strategy: darkMode "selector" in tailwind.config.ts, next-themes
  with attribute="class" in src/app/providers.tsx.
- Both themes are first-class. Every color decision ships with its dark
  counterpart in the same commit.

## Shape and spacing

- Radius language: rounded-2xl for images and inner elements, rounded-3xl
  for cards and panels, rounded-md for buttons.
- Card idiom: rounded-3xl bg-white p-7 ring-1 ring-zinc-100 with
  hover:-translate-y-1 hover:shadow-xl; dark bg-zinc-800/40 ring-zinc-700/50.
- Page rhythm: SimpleLayout header then mt-16 sm:mt-20 to content.

## Signature treatments, reuse before inventing

- Glow panels: blurred accent orbs (bg-accent-500/15 blur-3xl) behind
  content. See src/components/home/home-ai-first.tsx and
  src/components/award/award-flagship-showcase.tsx.
- Icon chips: accent-tinted rounded tiles with ring. See
  src/components/link-chip-grid.tsx and home/highlight-card.tsx.
- Metric tiles: bold tabular-nums value over uppercase label, staggered
  reveal. See src/components/stat-band.tsx.
- Dark CTA panel with teal radial burst: src/components/cta-on-dark-panel/.
- Rotated hero portrait: rotate-3 rounded-2xl in home/home-hero.tsx.
- Starfield backdrop: src/components/stars-animation/.
- Gradient scrims over photos: talk/talk-hero.tsx.

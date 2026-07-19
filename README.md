# mradib.com

Source code for [mradib.com](https://mradib.com), the personal website of
John Adib (MrAdib): engineering leader in London, 2x startup co-founder,
conference speaker, and ADPList's World's Most Influential Mentor 2024.

## Stack

- Next.js App Router with static export, TypeScript strict, Tailwind, Biome.
- Deployed on GitHub Pages. Pushing to main deploys production.

## Structure

- `src/data` holds every fact once. Pages, JSON-LD, RSS, the sitemap, and
  llms.txt all derive from it.
- `src/components` holds presentation, `src/app` composes pages. The English
  tree lives under `src/app/(en)`, the Persian tree under `src/app/fa`.
- `docs/` is the verified career history and the source of truth for every
  claim on the site.
- `docs/advisor/` is the Brand Advisor: positioning, voice, audiences,
  imagery, and playbooks consulted before any content or design change.
- `docs/designer/` is the Designer: visual direction, motion foundation,
  design language, the design system registry, and the screenshot critique
  required before any visual change ships.

## Development

```bash
npm install
npm run dev          # local dev server
npm run check:fix    # Biome lint and format
npm run check-types  # TypeScript
npm run build        # static export
```

## Deploy

GitHub Pages deploys from this repository, so pushing means production.
Changes are committed locally and pushed only after John reviews them.
Post-push steps live in LAUNCH.md.

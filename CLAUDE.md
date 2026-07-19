# CLAUDE.md

Project conventions for mradib.com. Read this before changing content or code.

## Advisors, read first

Before ANY change to content, copy, design, images, SEO, metadata, or
structured data, read BOTH docs/advisor/README.md (the Brand Advisor:
positioning, tone, audiences, imagery, page playbooks) and
docs/designer/README.md (the Designer: visual direction, motion, design
system, screenshot critique). They are one board and are always consulted
together; when John says "advisor" he means both. They supersede older
conventions everywhere except the Delivery rules below. When John gives new
brand or design direction, log it in docs/advisor/decisions.md.

## Engineering standards

- Maximum of about 100 lines per file. Split components before crossing it.
- Single responsibility per component. Data lives in src/data, presentation in components, composition in pages.
- Reuse primitives first: Container, Section, Card, Button, Prose, SimpleLayout.
- Pages, JSON-LD, llms.txt, RSS, and the sitemap all derive from src/data. Never state a fact in two places.
- Every new page needs an OG card: add its IOgCard to src/data/og, spread ogMetadata(route) into the page metadata, run npm run og:build locally, and commit the JPG it writes to public/og. Talk pages derive their cards from src/data/talks automatically. npm run verify:seo fails any page shipped without one; the design and copy rules live in docs/advisor/playbooks/seo.md.
- TypeScript strict and Biome clean. Run npm run check:fix, npm run check-types, and npm run build before committing.

## Delivery

- NEVER git push. GitHub Pages deploys from this repository, so pushing means production. Commit locally, John reviews and pushes himself.
- Post-push steps live in LAUNCH.md.

## Reference

- docs/advisor holds the brand strategy: positioning, voice, audiences, imagery, playbooks, and the shared decision log. Consult it before any content or design change.
- docs/designer holds the visual strategy: direction, motion foundation, design language, the design system registry, and the mandatory screenshot critique. Consult it before any visual change.
- The rest of the docs folder holds John's verified career history: experience, awards, certifications, volunteering, education, talks, and sources. Use it as the source of truth instead of searching the web.

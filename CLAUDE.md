# CLAUDE.md

Project conventions for mradib.com. Read this before changing content or code.

## Brand Advisor, read first

Before ANY change to content, copy, design, images, SEO, metadata, or
structured data, read docs/advisor/README.md and follow its routing table.
The Brand Advisor owns positioning, tone, audiences, imagery, and the page
playbooks. It supersedes older conventions everywhere except the Delivery
rules below. When John gives new brand direction, log it in
docs/advisor/decisions.md.

## Engineering standards

- Maximum of about 100 lines per file. Split components before crossing it.
- Single responsibility per component. Data lives in src/data, presentation in components, composition in pages.
- Reuse primitives first: Container, Section, Card, Button, Prose, SimpleLayout.
- Pages, JSON-LD, llms.txt, RSS, and the sitemap all derive from src/data. Never state a fact in two places.
- TypeScript strict and Biome clean. Run npm run check:fix, npm run check-types, and npm run build before committing.

## Delivery

- NEVER git push. GitHub Pages deploys from this repository, so pushing means production. Commit locally, John reviews and pushes himself.
- Post-push steps live in LAUNCH.md.

## Reference

- docs/advisor holds the brand strategy: positioning, voice, audiences, imagery, playbooks, and the decision log. Consult it before any content or design change.
- The rest of the docs folder holds John's verified career history: experience, awards, certifications, volunteering, education, talks, and sources. Use it as the source of truth instead of searching the web.

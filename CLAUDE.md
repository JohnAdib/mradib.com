# CLAUDE.md

Project conventions for mradib.com. Read this before changing content or code.

## Writing style, hard rules

- NEVER use em dashes or en dashes anywhere in the codebase: not in copy, not in comments, not in data strings, not in docs. Use a full stop or a comma instead. Date ranges use "to", for example "2015 to 2017".
- Tone: humble but confident. No filler words like "roughly". No bragging adjectives. Let numbers speak for themselves.
- Never quote LinkedIn recommendations or testimonials on the site.
- Open source is an identity line plus a GitHub link. Never showcase repo names or stats.
- English pages never link into the Persian tree. The only crossover is the فارسی item in the main navigation.
- Family appears in prose only, never in metadata or schema.

## Homepage philosophy

Curate, do not enumerate. The homepage introduces the identity, shows a few
selected highlights, and sends visitors to the hub pages. Full lists live on
/awards, /talks, and /articles. A stat earns its place only if it means
something on its own.

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

- The docs folder holds John's verified career history: experience, awards, certifications, volunteering, education, talks, and sources. Use it as the source of truth instead of searching the web.

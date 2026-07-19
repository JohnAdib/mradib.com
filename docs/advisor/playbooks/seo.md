# Playbook: SEO, metadata, and sharing

The goal: when anyone searches "John Adib" or "MrAdib", they find this site
first, and every shared link looks deliberate and impressive.

## Name-search dominance

- Every page's metadata includes John's name and reinforces the positioning
  one-liners from src/data/profile.ts.
- JSON-LD is mandatory and must match the positioning: the Person schema
  derives from profile.ts, and pages add their own type (Article, Event).
  Never state a fact in JSON-LD that is not in src/data.
- llms.txt, RSS, and the sitemap derive from src/data; adding content means
  updating data, the rest follows.

## OG images, required on every page

Nice sharing matters. Every page ships a static 1200x630 card in public/og,
one shared dark brand frame with a unique headline, proof line, and optional
artwork per page. The site is static on GitHub Pages, so cards are generated
locally and committed; there is no runtime OG renderer.

The workflow when adding a page:

1. Add the page's card to src/data/og: slug, route, eyebrow, headline
   (bold, short, becomes og:title), proof (a superlative plus a number),
   and artwork if a real image passes imagery.md (photos fit cover;
   logos fit contain on a white panel). Talk pages skip this step, their
   cards derive from src/data/talks.
2. Spread ogMetadata(route) into the page's exported metadata
   (src/lib/og-metadata.ts; articles pass publishedTime).
3. Run npm run og:build and commit the JPG it writes to public/og.
   The generator (scripts/og) renders the card in a local headless
   browser; regenerate any card the same way after copy or artwork edits.
4. No strong artwork? Ship the typographic card and, if a real photo
   should exist, ask John for it and say exactly what shot is needed.

Never ship a page without an OG image: npm run verify:seo fails any page
missing og:image or whose image file is absent from the build. Never add
file-convention opengraph-image files; they silently override the cards.

## Media files

- Videos, PDFs, and downloadable files live in public/ with clean, SEO
  friendly URLs, for example public/talks/talk-name-event-year.pdf, never an
  opaque hash. Pages reference those URLs.
- Prefer hosting recordings where they already live (YouTube, GitNation) and
  embedding them; put PDFs and slides in public/.

## Checklist for any page change

- [ ] Title tag and meta description carry the name plus one proof point
- [ ] OG image exists, 1200x630, static in public/
- [ ] JSON-LD present and consistent with src/data
- [ ] Sitemap, RSS, and llms.txt still derive correctly (they do when data
      was updated in src/data)
- [ ] Media referenced via clean public/ URLs

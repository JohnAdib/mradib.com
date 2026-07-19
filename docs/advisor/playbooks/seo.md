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

Nice sharing matters. Every page ships a static 1200x630 OG image.

The site is static on GitHub Pages, so there is no runtime OG renderer. The
workflow when a page has no OG image:

1. Prefer a real photo that passes imagery.md (stage shot, ceremony,
   evidence image).
2. Otherwise generate one locally: build an OG layout (page title, John's
   name, one proof point, consistent brand look), render it in a local
   browser at 1200x630, screenshot it, and save the file into public/.
3. Wire the static file into the page metadata.
4. If neither works, ask John for a photo and say exactly what is needed.

Never ship a page without an OG image.

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

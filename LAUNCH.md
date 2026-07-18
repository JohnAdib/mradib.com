# Launch checklist — run AFTER you push to production

The overhaul ships new pages, a new identity, and machine-readable metadata.
None of it reaches search/AI engines until you push — and then these steps
make the reindexing fast and consistent.

## 1. Verify the deployment (first 30 minutes)

- [ ] `curl -sI https://mradib.com/sitemap.xml` → 200, `Content-Type: application/xml`
- [ ] `curl -sI https://mradib.com/robots.txt` → 200, body points at `https://mradib.com/sitemap.xml`
- [ ] `curl -s https://mradib.com/llms.txt` → starts with `# John Adib (MrAdib)`
- [ ] `curl -sI https://mradib.com/feed.xml` → 200
- [ ] `curl -sI https://mradib.com/manifest.webmanifest` → 200
- [ ] Open https://mradib.com — hero says "Engineering leader…", dark mode works, `/awards`, `/talks`, `/now` load
- [ ] GitHub Pages CDN caches ~10 min — use `?v=2` query if you see stale pages

## 2. Search Console (same day)

- [ ] Resubmit `https://mradib.com/sitemap.xml` in Google Search Console
- [ ] Request indexing for: `/`, `/about`, `/awards`, `/awards/worlds-most-influential-mentor`, `/awards/uk-global-talent`, `/mentor`, `/talks`
- [ ] Validate structured data: run https://search.google.com/test/rich-results on `/` (Person), `/about` (ProfilePage), one award page, one talk article (Event)
- [ ] Check OG cards: LinkedIn Post Inspector (https://www.linkedin.com/post-inspector/) on `/` and one award page

## 3. Sync off-site profiles (same week — AI engines cross-check sources)

The canonical line: **"Engineering Manager & 2× startup co-founder — pioneering AI-first development in London."**

- [ ] LinkedIn headline → keep "Engineering Leader 🌟 UK Global Talent" or align with the canonical line; add the 2026 ADPList100 listing to Honors & Awards (only 2024 is there today)
- [ ] GitHub bio → replace "Trust Me, I'm an Engineer" with the canonical line + link mradib.com
- [ ] ADPList profile title → "Engineering Manager at Zapp" (already correct); ask ADPList to update the ADPList100 2026 listing title (it still says "Senior Software Engineer")
- [ ] GitNation bio (gitnation.com/person/mradib) → still says "Senior lead software engineer"; update via GitNation profile
- [ ] X/Twitter + Instagram bios → one-line version + link

## 4. Assets that upgrade pages when you have them

- [ ] High-res award certificates/badges → drop into `public/awards/<slug>/` and set `badgeImg`/`evidencePdf` in `src/data/awards/awards.ts` (fields already exist)
- [ ] Designed 1200×630 OG card → replace `src/app/opengraph-image.png` (currently reuses the mentoring image)
- [ ] Talk recording URLs (GitNation) → set `recordingUrl` in `src/data/talks/talks.ts`
- [ ] 192/512 px app icons → add to `public/` and reference in `src/app/manifest.ts`
- [ ] YOUR real photography → the old `src/images/photos/image-1..5.jpg` are Tailwind-template stock photos (astronaut, cockpit…), NOT yours, so the homepage strip and gallery grid were removed rather than show them. Drop real photos into `src/images/photos/` and re-add a grid to `src/app/(en)/gallery/page.tsx` (and optionally a small strip in `src/components/home/home-personal.tsx`)

## 5. Quarterly upkeep (15 minutes)

- [ ] Update `/now` (`src/app/(en)/now/page.tsx`) + "Last updated" line
- [ ] Bump `sessions` + `asOfDate` in `src/data/mentoring-stats.ts` (updates hero, mentor page, llms.txt automatically)
- [ ] New award/talk? Add to `src/data/awards/awards.ts` or `src/data/talks/talks.ts` — sitemap, llms.txt, and pages derive from data

## Related repo (separate task)

- resume.mradib.com is a different repo (`MrJohnAdib/resume`) — its broken
  certificates section still needs fixing there; this site now links to
  `/awards` as the canonical recognition page.

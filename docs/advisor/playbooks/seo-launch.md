# SEO launch checklist

Run this after every push that touches metadata, the sitemap, JSON-LD,
redirects, or images. Re-run the whole list quarterly.

## Google Search Console

1. Submit `https://mradib.com/sitemap.xml` under Sitemaps. Confirm every URL
   is discovered, none excluded unexpectedly.
2. Check the Page Indexing report one week after a metadata change. Every
   indexable page should be "Indexed". Redirect stubs (`/github`,
   `/linkedin`, `/smile-is-gold`, `/fa/resume/...` anchors) should show
   "Excluded by noindex tag". If a stub shows as Indexed, inspect it and
   request removal.
3. URL Inspection on the three hreflang pairs (`/` and `/fa`, `/mentor` and
   `/fa/mentor`, `/resume` and `/fa/resume`). The rendered HTML must show
   both hreflang links plus x-default. Run one pair through a third party
   hreflang checker to confirm return tags match.

## Rich results and schema

4. Google Rich Results Test on one page per template: an article, a talk
   page (Event), `/contact` (FAQ), `/about` (ProfilePage plus Breadcrumb).
5. schema.org validator on `/` for Person and WebSite. Confirm no email
   appears anywhere in the JSON-LD.

## Serving checks

6. `curl -I https://mradib.com/about/` (with slash). Record what GitHub
   Pages returns. `curl -I https://mradib.com/some-page-that-does-not-exist`
   must return 404, not 200.
7. Share preview debuggers after OG changes: Facebook Sharing Debugger,
   LinkedIn Post Inspector, and a tweet preview on `/`, `/mentor`, one
   article. Scrape again after changing any OG image.

## Beyond Google

8. Bing Webmaster Tools: import the site from GSC and submit the sitemap.
   Bing feeds ChatGPT browsing and several AI answer engines, so this
   directly serves LLM visibility.
9. Spot check `https://mradib.com/llms.txt` and `llms-full.txt` render as
   plain text and their facts still match `src/data`.

## Maintenance

10. When a page materially changes, bump its `lastModified` in
    `src/data/routes/` (or `pageUpdated` in the award data). The sitemap,
    feed, and llms files derive from data; never edit them by hand.

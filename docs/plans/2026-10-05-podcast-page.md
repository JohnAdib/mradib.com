# Podcast page implementation plan

**Goal:** Publish the ten approved topic summaries in the site's shared page frame, with Spotify links and no hosted audio.

**Architecture:** Shared podcast data supplies the page, metadata, discovery links and structured data. Small server components render the article and timing chart; the chapter navigation alone tracks the active section on the client. The existing root layout owns the header, footer and theme.

**Tech stack:** Next.js, React, TypeScript, Tailwind and existing site primitives.

1. Import the reviewed summaries into src/data/podcast, retaining a single employer mention. Replace the ownership and hands-on excerpts with meaningful, explicitly edited excerpts. Mark timestamps as discussion start points.
2. Build src/components/podcast with the shared Container and Button, article sections, chapter navigation and an accessible three-segment timing chart. All listening actions open the original Spotify episode.
3. Add the root episode route, PodcastEpisode JSON-LD, OG card, sitemap and llms discovery. Link the talks listing to the episode page.
4. Run formatting, types, build and SEO verification. Inspect both themes at 375, 430, 768, 1024, 1440, 1920 and 2560px. Verify no audio element or MP3 requests and preserve the shared header/footer.
5. Commit and create a reviewable feature PR, as requested by John. Do not merge or deploy.

## Verification results

The production build emits the podcast route. Type checking and SEO verification pass. Biome check:fix passes with one existing optional-chaining warning in the OG generator. Browser checks cover 14 viewport/theme combinations and 42 captures, confirm no audio elements or MP3 requests, Spotify destinations, topic navigation, discovery from talks, canonical metadata, and content without JavaScript. A separate 1280 by 600 check confirms the sidebar scrolls and anchor targets clear the shared header. Content review against the user-confirmed transcript found no grounding issues.

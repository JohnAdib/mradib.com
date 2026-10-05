# Editable talk sources

The PowerPoint is the reviewed revision 29 of Beyond the QA Bottleneck. Keep it outside `public/` so it is not included in the static website. This repository may be public; this directory is source storage, not private storage.

Only the PDF in `public/talks/` is offered to website visitors. Replace the PDF and cover together when the deck changes. Event details live in `src/data/talks/qa-bottleneck-talk.ts`.

The page preview uses the first PDF slide. The social card uses that same cover with a 1200 by 630 crop, selected by `shareSlideCover` in the talk data. Regenerate it with `npm run og:build -- talk-beyond-the-qa-bottleneck` after updating the cover.

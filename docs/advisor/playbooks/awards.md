# Playbook: adding or editing an award

Awards are third-party proof. The issuer does the bragging.

## Flagship or hub-only

- Flagship page (own URL): only awards that stop the primary reader.
  The current four: worlds-most-influential-mentor, uk-global-talent,
  number-1-mentor-in-europe, worldskills. A new award earns a flagship page
  only if it matches their weight.
- Everything else is a hub entry on /awards. Monthly ADPList badges stay
  aggregated, never separate pages.

## Framing rules

- Lead with the issuer and the scale: "selected from 32,000+ mentors across
  140+ countries" beats the award name alone.
- Government and institutional recognition outranks community recognition;
  order accordingly when both appear on a page.
- Evidence links on every flagship page: certificate, live listing, press.
  Evidence images at full native resolution, existing convention.

## Data flow

- Record in docs/profile/awards.md first (verbatim name, issuer, date),
  then src/data/awards/awards.ts. Pages derive from data.

## Checklist

- [ ] Verbatim award name and issuer recorded in docs/profile/awards.md
- [ ] Flagship vs hub decision made against the bar above
- [ ] Issuer scale stated in the copy
- [ ] Evidence images at full native resolution
- [ ] OG image and JSON-LD updated

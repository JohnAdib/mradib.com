# Talks

Source: GitNation speaker certificates, LinkedIn, and mradib.com, July 2026.
Site data lives in `src/data/talks/talks.ts`. Slides PDFs in `public/talks/`.
Each talk has its own page at the root URL. Talks are separate from articles.

## 2026

### The Compound Effect of Guardrails in the Era of AI

- Event: JavaScript London, hosted by NewDay, King's Cross, London, 29 April 2026.
- Topics: AI-assisted engineering, guardrails, developer productivity.
- Talk page: /the-compound-effect-of-guardrails-in-the-era-of-ai

### Building an Enterprise Dashboard with AI: From Architecture to Production

- Event: United Hacks V6, hosted by Hack United, online, 18 January 2026. Given while helping run the hackathon.
- Topics: AI-assisted architecture, enterprise dashboards, production readiness.
- Talk page: /building-an-enterprise-dashboard-with-ai
- Recording: https://www.youtube.com/watch?v=F0VBmJyeDDU
- Source: https://www.hackunited.org/, https://unitedhacksv6.devpost.com/

## 2025

### AI-First Architecture: Why Single Responsibility Matters More Than Ever

- Event: AI Coding Summit 2025 (GitNation), online, 23 October 2025.
- Audience: 800+ engineers (817 joined). An 18 minute recording exists on GitNation.
- Talk page: /ai-first-architecture-why-single-responsibility-matters-more-than-ever
- Speaker certificate: GitNation Foundation, Oct 2025, ID 31526.

### Turning Chaos into Control with Cloudflare

- Event: LNUG #110, London Node User Group, London, 24 September 2025.
- Topics: zero trust, Cloudflare, infrastructure.
- Talk page: /turning-chaos-into-control-with-cloudflare

### Design Systems, AI, and the Art of Separation of Concern

- Event: React Advanced London, hosted at Figma's London office, 3 July 2025.
- Audience: 120+ engineers.
- Talk page: /design-systems-ai-and-the-art-of-separation-of-concern
- Speaker certificate: GitNation Foundation, Jul 2025, ID 31163.

## Earlier

- Invited university speaker at the University of Tehran era events, audiences of 200+ (2017 to 2018).

## Speaker profile

- GitNation: https://gitnation.com/person/mradib

## Beyond the QA Bottleneck, upcoming

- Title: Beyond the QA Bottleneck
- Status: upcoming, slides remain a work in progress.
- Event, organizer, venue, city and date: unconfirmed, stored as null.
- Topic: John’s story of adopting AI in React Native engineering, from regressions and slow verification to reusable skills, tests, CI, device checks, AI review, Sentry feedback and delivery.
- Page: /beyond-the-qa-bottleneck-talk
- Public deck: /talks/beyond-the-qa-bottleneck.pdf
- Editable source: resources/talks/beyond-the-qa-bottleneck.pptx, excluded from the static site.
- Source: John’s reviewed 32-slide deck, revision 27, 5 October 2026.

## Slide sources for page descriptions

Reviewed 5 October 2026. Descriptions in src/data/talks/talk-descriptions.ts
summarise the published PDFs, not a recording or transcript. Page numbers below
refer to PDF pages. Keep the original decks and their public URLs intact.

- Guardrails, 2026-04-29 PDF: pages 14 to 19 trace the Slack, Linear, agent,
  review, and deployment workflow; pages 22 to 30 explain compounding patterns;
  pages 31 to 56 cover instructions, context, types, lint, formatting, schemas,
  and tests, with gradual Biome adoption and a rising test coverage floor.
- Enterprise dashboard, 2026-01-18 PDF: pages 3 to 6 describe the three-day
  build, AI workflow, shared rules, and 72 decision records; pages 7 to 17 cover
  the monorepo, Next.js, Hono, Cloudflare, Better Auth, scoped permissions,
  Drizzle, and deployment; pages 19 to 21 explain the lessons. Summaries avoid
  internal operational categories and do not imply automated tests were already
  implemented (page 17 explicitly says they were not).
- AI-first architecture, 2025-10-23 PDF: pages 2 to 13 describe AI entering the
  development workflow and amplifying existing structure; pages 15 to 20 cover
  single responsibility and separation of concerns; pages 22 to 27 cover lint,
  tests, naming, patterns, and documentation for humans and AI.
- Cloudflare, 2025-09-24 PDF: pages 7 to 11 describe scattered deployments,
  domains, and security gaps; pages 13 to 24 explain CDN, WAF, authentication,
  authorisation, SSO, one domain, and Zero Trust; pages 26 to 30 describe login,
  access costs, Cloud Run domain constraints, and end-to-end testing trade-offs.
  Keep these framed as experiences from that implementation, not current vendor
  pricing or support claims.
- Design systems, 2025-05-03 PDF: pages 6 to 18 describe a shared design
  language, visual design, interaction, behaviour, and ownership; pages 20 to 38
  explain separation of concerns and seven practical tips, including the log
  viewer example on pages 24 to 29. The PDF title slide confirms 3 July 2025;
  the older filename is retained to preserve links.

Preview images represent page 1 of each PDF. The design systems page previously
used an event poster; replace its preview with the actual title slide.

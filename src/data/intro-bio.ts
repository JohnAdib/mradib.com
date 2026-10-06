import { aiPositioning } from "@/data/ai-positioning";
import { homepageUrl } from "@/lib/constants/url";

/*
  The canonical shareable self-intro (decisions.md, 2026-07-19). The body
  starts at the role in lowercase so it takes two openers: the H1 already
  carries the name, so the on-page paragraph opens "An ...", while the
  clipboard copy opens "I'm John Adib, an ..." plus a link tail so the
  pasted handout stands alone. Numbers here are frozen historical facts,
  so they read as prose; the exact tallies live in the sections and /about.
*/
export const introBio = `An ${aiPositioning.introBioBody}`;

export const introBioClipboard = `I'm John Adib, an ${aiPositioning.introBioBody}

More: ${homepageUrl}`;

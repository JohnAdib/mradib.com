import { homepageUrl } from "@/lib/constants/url";

/*
  The canonical shareable self-intro (decisions.md, 2026-07-19). The body
  starts at the role in lowercase so it takes two openers: the H1 already
  carries the name, so the on-page paragraph opens "A ...", while the
  clipboard copy opens "I'm John Adib, a ..." plus a link tail so the
  pasted handout stands alone. Numbers here are frozen historical facts,
  so they read as prose; the exact tallies live in the sections and /about.
*/
const introBioBody = `two-time founder and engineering leader in London. $1M raised, a million users in the first month, 1,200+ businesses served. I've taught thousands and mentored engineers around the world. ADPList named me The World's Most Influential Mentor; the UK endorsed me as exceptional talent. Today I build AI-first, changing how teams work, not just how fast they ship.`;

export const introBio = `A ${introBioBody}`;

export const introBioClipboard = `I'm John Adib, a ${introBioBody}

More: ${homepageUrl}`;

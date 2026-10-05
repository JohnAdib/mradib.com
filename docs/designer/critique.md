# Critique: mandatory visual proof

No visual change ships without screenshots reviewed against this checklist.
This is not optional and not on request; it is the definition of done for
visual work.

## Workflow

1. Run `npm run dev`.
2. Capture the changed screens with the chrome-devtools MCP tools (resize,
   navigate, screenshot), in BOTH light and dark mode.
3. Review every capture against the checklist below.
4. Fix and recapture until clean, then summarize the result to John (with
   screenshots for anything notable) before committing.

## Breakpoint matrix

80% of visitors are on phones, so phone widths come first, always.

- Every change, minimum: 375px (iPhone SE), 430px (Pro Max class), 1440px
  (desktop). Both themes at each width.
- Page redesigns and new pages, full matrix: 375, 430, 768 (iPad portrait),
  1024 (iPad landscape), 1440, 1920, 2560 (ultrawide). Both themes.

## Checklist

- [ ] Phone layout is perfect before desktop is even judged
- [ ] Hierarchy readable in 5 seconds at every width
- [ ] Dark mode as polished as light, same commit
- [ ] No decorative vertical lines anywhere
- [ ] Spacing rhythm consistent with system.md
- [ ] Motion present and purposeful, no jank, respects reduced motion
- [ ] Touch-friendly: no hover-only affordances on functionality
- [ ] No horizontal scroll at any width
- [ ] Passes the "who built this?" bar (direction.md)
- [ ] Still passes the brand wow test (../advisor/positioning.md)

## Failure rule

If a capture fails the checklist, the change does not ship. Fix it or raise
it with John; never commit a known visual defect silently.


## 2026-10-05: Event sharing page

Reviewed light and dark layouts at 375, 430, 768, 1024, 1440, 1920 and 2560px,
plus 320px phones and two landscape sizes. The card fits without scrolling;
landscape places identity beside links. A quiet portrait and Newsreader name
establish identity, with LinkedIn first and equal-weight secondary links.
QR popup keeps a clean white background in both themes. Verified QR decoding,
Escape, restored focus, native share payload and clipboard fallback. Reduced
motion removes entry and dialog transitions. Browser checks are repeatable via
`npm run test:share-browser` with optional `SHARE_BASE_URL` and `SHARE_SCREENSHOTS`.

## 2026-10-05: Contact card refinement

The `/@` redesign uses the About portrait, flat social rows, LinkedIn blue and
the Contact email component below navigation. Removed arrows and hover movement.
The top-right icon expands into the white QR panel; its address invokes sharing.
Reviewed both themes across the full 20-case viewport matrix with no page scroll,
and checked QR fit, focus restoration, Escape, clipboard and native share payload.
Reduced motion skips the morph. Both slide exports decode to the new URL.

## 2026-10-05: At-sign page business card redesign

Reviewed the new ink card, textured backgrounds, blue LinkedIn button, paired
GitHub/X tiles and compact navigation across 20 viewport/theme combinations.
Phone, landscape and desktop layouts fit without scrolling. All page elements
are non-selectable. QR morph, Escape, restored focus, native sharing and clipboard
fallback pass. Instagram destinations are absent from the full exported site.

## 2026-10-05: At-sign page viewport lock

Expanded checks to 24 viewport/theme cases, including 320×480 phones and 568×320
landscape. Links and the QR trigger stay fully in view. Emulated mobile swipes
in both directions and wheel input leave the card and QR panel stationary.
The Contact page remains scrollable. Pinch zoom remains enabled.

## 2026-10-05: In-card QR sharing and clean glass

Reviewed 24 screen/theme combinations after removing the grain and refining the
glass surface and buttons. GitHub/X are text-only. Opening QR preserves identity
geometry exactly and hides the inactive links from accessibility and keyboard
navigation. Sharing, Escape, mobile scroll lock and viewport fit pass. Desktop
tilt stays within 2.5 degrees, eases back over 700ms and respects reduced motion.

## 2026-10-05: Fixed card proportions

Reviewed the taller portrait card and matching QR view in light and dark mode.
All 24 viewport/theme checks pass, including 320x480 and short landscape phones.
The card follows 53.98:85.6 proportions, rotated in landscape, and retains exactly
the same bounds and identity position when sharing opens. Screenshots verified
that links, email and QR remain inside the card; the additional vertical space
separates identity from actions. Touch/wheel locking, native sharing, clipboard,
Escape focus restoration, desktop tilt and reduced-motion behavior pass.
Evidence: `/tmp/atsign-ratio-qa` and `/tmp/atsign-ratio-matrix.png`.

## 2026-10-05: Fixed-size card and local calibration

Reviewed the compact fixed-size layout and QR state in light and dark across
24 viewport/theme combinations. Both keep the same 53.98mm by 85.6mm CSS size,
without responsive shrinking or rotation. A 320px-high viewport is shorter than
the reference card, so its outer edge is cropped; controls remain visible. This
is the intentional consequence of John's fixed-size requirement. Typography and
spacing were compacted to preserve the card content. Device calibration is local,
retains proportions, survives reload and resize, and includes Reset and Done.
Browser checks verify dimensions, calibration persistence, sharing, focus,
scroll locking and reduced motion. Screenshots: `/tmp/atsign-fixed-qa`.

## 2026-10-05: Refined card hierarchy and spacing

Reviewed both themes and QR mode across the 24 viewport/theme checks. The portrait
is now 68px, the name 32px, and side padding 22px. Social buttons use a compact
32px height and consistent neutral glass styling, with no blue LinkedIn fill.
Adjusted navigation gaps and QR sizing keep both panels within the same fixed
frame. Calibration, persistence, sharing, scroll lock and tilt checks pass.
Production build, TypeScript, Biome and SEO checks pass with existing unrelated
warnings. Evidence: `/tmp/atsign-spacing-qa` and `/tmp/atsign-spacing-matrix.png`.

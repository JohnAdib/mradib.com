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

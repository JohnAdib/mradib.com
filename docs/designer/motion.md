# Motion

Motion is a signature of this site, not decoration. John wants more of it,
purposeful and hand-built. This file is the FOUNDATION: it defines the
target state precisely so a future session can be told "refactor motion to
match the foundation" and know exactly what to build.

## Doctrine

- Every page carries purposeful motion; a static page is an unfinished page.
- Animate transform and opacity only, 60fps. Never animate layout
  properties (width, height, top, margin).
- prefers-reduced-motion is always respected; content is SSR-visible with
  motion as enhancement (the existing Reveal pattern is the model).
- Motion must feel equally good on a phone. Touch has no hover: hover-only
  effects need a touch equivalent or must degrade gracefully.
- Motion never delays readability. Content is legible before its animation
  finishes.

## What exists today

- Staggered fade-up reveals: src/styles/reveal.css (.reveal-up plus
  .reveal-delay-1 to 4, 0.6s ease-out), used by home-hero and stat-band.
- Scroll-triggered reveal: src/components/reveal/reveal.tsx
  (IntersectionObserver adds .is-visible, delay prop, noscript fallback).
- 3D tilt on hover: src/components/tilt-card/tilt-card.tsx.
- Parallax starfield: src/components/stars-animation/ with
  src/styles/star-animation.css.
- Micro-interactions: hover lift (-translate-y-1) on cards and chips.

## Target architecture, the refactor blueprint

1. Motion tokens defined once in CSS (in the same @theme block pattern as
   the accent colors): a duration scale (fast, base 0.6s, slow), easing
   curves (the ease-out house curve plus one entrance spring), and a stagger
   step. No hardcoded durations or delays in components once migrated.
2. A small set of reusable motion primitives every page consumes: Reveal
   (exists), a Stagger wrapper that assigns delays to children (replacing
   stat-band's inline animationDelay and reveal.css's numbered delay
   classes), and a scroll-progress primitive when a page needs one.
3. Signature effects (tilt-card, starfield) stay standalone components but
   consume the shared tokens.

Gap list, the refactor backlog: durations and delays are hardcoded per
component (reveal.css, stat-band inline styles); delay classes cap at 4;
tilt and starfield define their own timing. Closing these gaps is the future
"refactor motion" task.

## Technique ladder, authentic and web-native first

In order of preference: CSS keyframes and transitions, IntersectionObserver
reveals, CSS scroll-driven animations, the View Transitions API for page
navigation, SVG stroke and line drawing, canvas particles for hero moments.
Lottie is discouraged here: a personal site should feel hand-built, and the
bundle cost is real. No animation library until a concrete need clearly
beats what CSS can do.

## Rules

- Stagger caps: at most 5 to 6 staggered items per group; beyond that,
  group them.
- Durations and easings come from the tokens; the house feel is the current
  0.6s ease-out language.
- Entrance animations run once; ambient motion (starfield) is slow and
  ignorable.
- Every new effect is checked on a real phone width in critique.md.

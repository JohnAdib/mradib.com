# Profile Photos Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the site's visible portraits with a coherent, right-sized 2026 London photo set for the homepage, About page, and header avatar.

**Architecture:** Keep optimized canonical JPEG sources in `public/img`, then use the existing Sharp image pipeline to generate right-sized AVIF and JPEG variants without changing their aspect ratios. Each visible portrait uses an AVIF `<source>` with an explicit JPEG fallback. The homepage uses the full vertical portrait and About restores the site's previous square formal portrait; both use subtle 3D rotation driven by mouse position anywhere in the viewport. While tracking, each card straightens its base angle to zero, then eases back to its original resting angle when the pointer leaves. The header uses the supplied square crop at 108px. A verification script enforces dimensions, byte budgets, source references, and the absence of forced crop classes so full-resolution camera files or accidental crops cannot be shipped.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, Sharp, Node.js verification scripts.

---

### Task 1: Lock the asset contract

**Files:**
- Create: `scripts/verify-profile-images.mjs`
- Modify: `package.json`

**Step 1: Write the failing verification script**

Assert the final asset names, dimensions, size ceilings, and component references.

**Step 2: Run it to verify it fails**

Run: `npm run verify:photos`

Expected: FAIL because the new optimized files and references do not exist yet.

### Task 2: Build optimized variants

**Files:**
- Create: `public/img/john-adib-london-landscape.jpg`
- Create: `public/img/john-adib-london-portrait.jpg`
- Create: `public/img/john-adib-london-avatar.jpg`
- Create: `public/img/john-adib-london-landscape-1152.jpg`
- Create: `public/img/john-adib-london-portrait-720.jpg`
- Create: `public/img/john-adib-london-avatar-108.jpg`
- Modify: `scripts/optimize-images.mjs`

**Step 1: Create optimized canonical sources**

Normalize metadata and color space, cap the originals to practical web sizes, and encode as progressive JPEGs.

**Step 2: Extend the existing image pipeline**

Generate a 720×1561 homepage portrait, a 1152×768 About image, and a 108×108 navigation avatar. Preserve every source ratio.

### Task 3: Place each photo once

**Files:**
- Modify: `src/components/home/home-hero.tsx`
- Modify: `src/app/(en)/about/_sections/about-hero.tsx`
- Modify: `src/components/header/avatar.tsx`
- Modify: `src/data/profile.ts`

**Step 1: Update the homepage**

Use the complete vertical photo as the desktop hero card, preserving its native 1845:4000 ratio. On mobile, use the horizontal London photo below the social links in its native 3:2 ratio. Give the mobile photo responsive 768px and 1152px AVIF/JPEG sources, and use opposing transparent media sources so each breakpoint downloads only its intended composition. Track mouse position across the viewport for a subtle desktop card tilt, while respecting reduced-motion preferences and leaving touch input static.

**Step 2: Update About**

Restore the previous homepage portrait in its native square ratio, with no `object-cover` or forced aspect ratio. Give it the same viewport-driven tilt, active straightening, and slow reset behavior as the homepage image.

**Step 3: Update the avatar and structured profile image**

Use the supplied square crop for the 36px header avatar and its optimized canonical version for Person JSON-LD.

### Task 4: Verify and preview

**Files:**
- Verify all modified and generated files.

**Step 1: Run automated checks**

Run: `npm run verify:photos`, `npm run check-types`, `npm run check`, `npm run build`, and `npm run verify:seo`.

Expected: all commands exit 0.

**Step 2: Inspect in browser**

Check the homepage and About page at desktop and mobile breakpoints, including dark and light themes, image crops, layout shift, console errors, and loaded asset sizes.

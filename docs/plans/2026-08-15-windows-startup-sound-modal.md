# Windows Startup Sound Modal Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Let visitors play the supplied Windows startup clip from the existing “startup sound” phrase without placing the video in the About page layout.

**Architecture:** Keep `AboutWindows` as a Server Component and replace only the existing phrase with a small Client Component. The client component owns an accessible Headless UI dialog and mounts the video only while the dialog is open, so closing it stops and resets playback.

**Tech Stack:** Next.js 16, React 19, Headless UI Dialog, Tailwind CSS, Node test runner, Playwright Core, Chrome.

---

### Task 1: Add the failing browser interaction test

**Files:**
- Create: `tests/about-windows-startup-sound.test.mjs`
- Modify: `package.json`

1. Add a focused `test:about-windows` package script.
2. Write a Node test that starts the local Next.js server and launches installed Chrome through Playwright Core.
3. Visit `/about#windows`, click the button named “Play the startup sound”, and assert that a named dialog opens with an autoplaying, controlled, inline MP4.
4. Press Escape and assert that the dialog/video are removed.
5. Run `rtk npm run test:about-windows` and confirm it fails because the trigger does not exist.

### Task 2: Implement the startup-sound modal

**Files:**
- Create: `src/app/(en)/about/_sections/startup-sound.tsx`
- Modify: `src/app/(en)/about/_sections/about-windows.tsx`
- Create: `public/about/windows-startup.mp4`

1. Copy the supplied, already web-compatible MP4 to the generic public path `/about/windows-startup.mp4` so the page does not identify an uncertain Windows version.
2. Add a small client boundary whose inline button visually replaces the words “startup sound”.
3. Open an accessible Headless UI dialog containing the video with `controls`, `autoPlay`, `playsInline`, and `preload="metadata"`.
4. On any close path, pause and reset the video before unmounting it.
5. Run `rtk npm run test:about-windows` and confirm it passes.

### Task 3: Verify and hand off locally

**Files:**
- Verify all files changed above; do not commit.

1. Run the focused browser test, Biome checks, TypeScript checks, production build, and site constraint checks.
2. Start the development server on an available local port.
3. Open `/about#windows` in the in-app browser and verify the trigger, modal, playback, Escape/close/backdrop behavior, focus handling, and responsive layout.
4. Leave the server running and hand the browser to John for approval before any commit.

### Task 4: Expand the failing About-story media tests

**Files:**
- Create: `tests/about-story-videos.test.mjs`
- Modify: `package.json`
- Remove: `tests/about-windows-startup-sound.test.mjs`

1. Assert that Section 01 contains accessible ball-mouse and Prince of Persia triggers and Section 02 names the Windows 98 startup sound.
2. Assert that none of the three video elements exist before a visitor taps its trigger.
3. Table-drive all three modal sources, caption tracks, aspect ratios, playback controls, focus return, and reset-on-close behavior.
4. Dispatch the media `ended` event and assert that the modal deliberately stays open for replay.
5. Assert that the Windows 98 trigger has a shimmer under normal motion preferences and no shimmer under reduced motion.
6. Run `rtk env TEST_BASE_URL=http://127.0.0.1:3000 npm run test:about-videos` and confirm the new expectations fail against the current page.

### Task 5: Generalize the story-video interaction and revise Section 01

**Files:**
- Create: `src/app/(en)/about/_sections/story-video.tsx`
- Create: `src/styles/story-video.css`
- Modify: `src/styles/tailwind.css`
- Modify: `src/app/(en)/about/_sections/about-childhood.tsx`
- Modify: `src/app/(en)/about/_sections/about-windows.tsx`
- Remove: `src/app/(en)/about/_sections/startup-sound.tsx`
- Add three MP4 and three VTT files under `public/about/`

1. Replace the hard-coded startup component with a reusable client leaf supporting classic 4:3, portrait 9:16, and landscape 16:9 viewport-safe panels.
2. Keep the modal open after playback ends; closing still pauses, resets, unmounts, and restores focus.
3. Add a restrained Magic UI-inspired light glare over only the Windows 98 trigger text, with a static readable fallback for reduced motion.
4. Add the supplied mouse-ball memory and DOS/Prince of Persia memory to Section 01 in the existing conversational voice.
5. Rename the original startup asset and copy both supplied clips with descriptive public filenames; add concise caption tracks.
6. Run `rtk env TEST_BASE_URL=http://127.0.0.1:3000 npm run test:about-videos` and confirm all focused tests pass.

### Task 6: Re-verify and hand off the expanded preview

**Files:**
- Verify all files changed above; do not commit.

1. Run the focused browser suite, Biome, TypeScript, production build, SEO constraints, and media-integrity checks.
2. Review all three modal layouts in the local browser, including a short landscape viewport and the portrait mouse clip.
3. Leave `/about#childhood` open in the visible browser for John's approval before any commit.

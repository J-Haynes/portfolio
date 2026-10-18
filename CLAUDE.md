@AGENTS.md

# Portfolio

Jack Haynes's personal site, live at https://jackhaynes.dev. Next.js 16 (App Router, Turbopack), React 19, plain CSS, no other dependencies. Recruiters and engineers are the audience.

## Commands

- `npm run dev` serves on **port 4000**. One is often already running; reuse it instead of starting another (Next refuses a second dev server in the same directory).
- `npx tsc --noEmit` and `npm run lint` must pass before committing. There are no tests.

## Deploys (Vercel)

- **Every push to `main` deploys to production** on jackhaynes.dev. Other branches and PRs get preview deployments. Don't push to `main` unless asked.
- Node is pinned to `24.x` by `engines.node` in package.json, which overrides the Vercel project setting (still on a discontinued Node 18). Keep it pinned.
- Changes also land on `main` from cloud sessions and merged PRs, so `git fetch` and rebase before pushing. A rejected push usually means the branches have diverged.
- `metadataBase` in `app/layout.tsx` is `https://jackhaynes.dev`, so Open Graph URLs only resolve properly in production. LinkedIn caches previews; refresh it with the Post Inspector after changing the share image.

## Layout

- `app/page.tsx`: hero (name, links), project list, footer.
- `app/projects.ts`: **all project content** (summary, stack, accent colour, links, media). Edit copy here.
- `app/components/ProjectCard.tsx`, `ProjectVideo.tsx`, `icons.tsx` (inline SVG icons, solid `currentColor` 22px to match each other).
- `app/hero/TrackHero.tsx`: animated canvas of Mount Panorama from `app/hero/bathurst.json` (OpenStreetMap + SRTM, credited in the footer).
- `app/opengraph-image.tsx`, `icon.tsx`, `apple-icon.tsx`: generated with `ImageResponse` and `app/fonts/Geist-SemiBold.ttf`.

Intentional: "View CV" links to `#` until there's a CV. Don't "fix" it.

## Project media

Files live in `public/projects/`. Each video project needs five files:

- `name.png`: the poster (first frame), imported in `projects.ts`. Its content hash also versions the clip URLs, so a re-recorded clip isn't served from a stale browser cache.
- `name.webm` (VP9) and `name.mp4` (H.264), full size.
- `name-sm.webm` and `name-sm.mp4`, half size, served to 1x screens via `media="(max-resolution: 1.5dppx)"`. Browsers shrink video with a cheap filter that makes text jagged past ~2x, and full-size clips shrink ~3x on 1x desktops. The README has the ffmpeg commands.

Phone clips are 600x1298 (a 390x844 viewport at 2x, scaled), with an iPhone-style status bar at the top so the frame's rounded corners don't clip the app's header. Encode `yuv420p`, TV range, BT.709 (`-color_range tv -colorspace bt709 ...`). Full-range JPEG colour (`yuvj420p`) fails to play in some browsers.

### Recording with Playwright (lessons learned)

- `recordVideo` and CDP screencasts capture at CSS-pixel size, ignoring `deviceScaleFactor`. Take `page.screenshot()` frames in a loop instead, and slow page animations with CDP `Animation.setPlaybackRate` so capture keeps up (that also slows `requestAnimationFrame` timestamps; time scripted motion with `Date.now()`).
- Don't let the page scroll by itself while capturing. On mobile viewports the scroll moves mid-screenshot and whole frames jitter. Step `scrollTo` from the capture loop before each screenshot.
- Capture PNG, not JPEG, and drop blank frames (tab switches can flash black).
- Check frames at full size. Thumbnails hide problems like content stuck in a corner of the frame.

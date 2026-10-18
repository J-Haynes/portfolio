# portfolio

My personal site, built with Next.js and deployed on Vercel.

```bash
npm install
npm run dev
```

Projects live in `app/projects.ts`. Screenshots go in `public/projects/`: add an `image` entry with `frame: "phone"` for phone screenshots or `frame: "desktop"` for everything else. A project without an image shows a placeholder.

A screen recording plays in place of its screenshot when the entry has a `video` path. Put `name.webm` and `name.mp4` next to it, plus half-size `name-sm.webm` and `name-sm.mp4` for standard-density screens (browsers shrink video with a cheap filter, so the full-size clips look jagged there):

```bash
ffmpeg -i name.mp4 -vf "scale=iw/2:-2:flags=lanczos" -c:v libvpx-vp9 -b:v 0 -crf 32 -an name-sm.webm
ffmpeg -i name.mp4 -vf "scale=iw/2:-2:flags=lanczos" -c:v libx264 -crf 23 -pix_fmt yuv420p -movflags +faststart -an name-sm.mp4
```

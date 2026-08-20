# Ramya Krishna & Prabhu Kumar — Wedding Invitation

A cinematic, mobile-first wedding invitation website. Built with React, TypeScript,
Tailwind CSS, and Framer Motion.

---

## 1. Running it locally

You'll need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). The site auto-reloads as
you edit files.

To check it builds cleanly for production:

```bash
npm run build
npm run preview
```

---

## 2. Everything you'll want to edit lives in one file

**`src/data/weddingData.ts`**

This is the single source of truth for the whole site — names, date, time,
venue, family names, the Google Maps link, and every piece of English/Telugu
text. You should almost never need to touch a component file just to change
content. Open that file and look for:

- `config` — all the factual details (names, dates, venue, family names, contact numbers)
- `copy.en` / `copy.te` — every English and Telugu sentence shown on the site

Everything in there is exactly what your invitation card says — I re-read the
scanned PDF carefully (English and Telugu) rather than guessing, so names,
dates, the venue address, and family details should all match the card. Do
double-check the transliterations against your own eye before it goes out to
guests, especially the Telugu paragraph text.

---

## 3. Adding your photos

Right now the site uses **only** the couple photo you uploaded — as the hero
background. Everywhere else a photo isn't available yet (bride's solo photo,
groom's solo photo, venue photo, gallery), you'll see a clearly labeled dashed
placeholder instead of a fake stand-in image.

To add a photo:

1. Put the image file in `public/assets/images/` (e.g. `bride.jpg`)
2. Open `src/data/weddingData.ts`
3. Update the matching line in `config.assets`, e.g.:
   ```ts
   brideSolo: "/assets/images/bride.jpg",
   ```
4. For the gallery, add file paths to the `gallery: []` array — the gallery
   section stays hidden entirely until you add at least one photo there.

---

## 4. Adding music

The floating music button (bottom-right) is fully wired up — play/pause,
autoplay-attempt-on-load with a graceful fallback to the first tap (browsers
block true autoplay-with-sound, there's no way around that from any website),
and a visible manual control either way.

**I couldn't add the specific movie song you mentioned** — I don't have a way
to license or source copyrighted commercial audio, and that applies
regardless of which track or film it's from. What you can do:

1. Get a licensed copy of the track (e.g. purchase/download from a store or
   streaming service that allows offline use, or use a track you have the
   rights to)
2. Save it as `public/audio/wedding-music.mp3`
3. That's it — no code changes needed, the player will pick it up automatically

If you'd rather not deal with licensing at all, royalty-free instrumental
options (Indian classical/shehnai/veena style) are easy to find on sites like
Pixabay Music or YouTube Audio Library and are safe to use without permission.

---

## 5. Deploying to Vercel

The easiest path:

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project** → import that repo
3. Vercel auto-detects it as a Vite app — just click **Deploy**
4. You'll get a live URL (e.g. `your-wedding.vercel.app`) you can share on WhatsApp

No environment variables or extra configuration needed.

---

## 6. Things that are intentionally left as-is

- **RSVP button** and **blessings/wishes form** are front-end only right now —
  tapping them shows a nice confirmation, but nothing is saved anywhere yet.
  The code has clear comments marking where to wire up a backend (a simple
  option: [Formspree](https://formspree.io) or [Google Forms](https://forms.google.com)
  for a zero-backend way to collect responses).
- **Gallery** is hidden until you add photos — intentionally, since a mostly-empty
  gallery looks worse than none at all.
- **Language toggle** defaults to Telugu; switch with the "EN | తెలుగు" control
  in the nav.

---

## 7. Project structure

```
src/
  components/       — every section (Hero, Countdown, Venue, RSVP, etc.)
  data/
    weddingData.ts  — the file you'll actually edit
  context/          — language (EN/Telugu) state
  hooks/            — countdown timer, reduced-motion detection
public/
  assets/images/    — photos
  audio/            — music file goes here
```

---

Built with care — congratulations to Ramya Krishna & Prabhu Kumar!

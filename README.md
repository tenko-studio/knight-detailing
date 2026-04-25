# KNIGHTS — 鏡面仕上げ専門

Marketing and information site for **KNIGHTS**, a paint correction and ceramic-coating workshop based in Nakai, Kanagawa, Japan. Founded in 2002. The site presents the workshop's services, pricing, archive, and contact information in Japanese, in a brutalist editorial design language.

> **Live identity:** mirror polishing, glass-polymer ceramic coating, interior detailing, and headlight restoration. Single craftsman, eight cars per month, by appointment only.

---

## Tech Stack

| Layer            | Choice                                        |
| ---------------- | --------------------------------------------- |
| Framework        | [Next.js 14](https://nextjs.org/) (App Router)|
| Language         | TypeScript 5.5                                |
| UI               | React 18                                      |
| Styling          | Tailwind CSS 3.4 + Material Design 3 tokens   |
| Animation        | Framer Motion 11                              |
| Typography       | Newsreader (display), Work Sans (body), Space Grotesk (label) — via `next/font/google` |
| Deployment       | Static-rendered Next.js, Vercel-compatible    |

No CMS, no database. Content is colocated with the renderer (`lib/journal.ts`, page-level data arrays). The site is fully server-rendered with React Server Components; the only `"use client"` boundaries are the contact form and the motion primitives in `components/motion/`.

---

## Project Structure

```
.
├── app/                          # Next.js App Router routes
│   ├── layout.tsx                # Root layout, fonts, header/footer
│   ├── page.tsx                  # Home
│   ├── about/page.tsx            # 工房について — workshop profile, timeline, domains
│   ├── services/page.tsx         # サービス一覧 — 4 service protocols
│   ├── pricing/page.tsx          # 料金プラン — 3 tiers, comparison, FAQ
│   ├── gallery/page.tsx          # 施工事例 — project archive
│   ├── journal/
│   │   ├── page.tsx              # お知らせ — index
│   │   └── [slug]/page.tsx       # individual post (statically prerendered)
│   ├── contact/page.tsx          # お問い合わせ — form + Google Maps embed
│   └── globals.css               # Tailwind layers, custom utilities (film-grain, noise overlay)
│
├── components/
│   ├── Header.tsx                # Top navigation
│   ├── Footer.tsx                # Footer with workshop address / contact
│   ├── PageHero.tsx              # Shared page-hero with eyebrow / title / subtitle
│   └── motion/
│       ├── Reveal.tsx            # Scroll-triggered reveal wrapper
│       ├── Stagger.tsx           # Stagger / StaggerItem for sequenced animations
│       ├── Parallax.tsx          # ParallaxImage component
│       └── ScrollProgress.tsx    # Top-of-viewport scroll progress bar
│
├── lib/
│   └── journal.ts                # Journal/news data + helpers (getAllPosts, getPostBySlug, …)
│
├── public/                       # Static assets (favicon, etc.)
├── tailwind.config.ts            # MD3 color tokens, custom font families, zero border-radius
├── next.config.mjs               # Image remote patterns
└── tsconfig.json
```

---

## Design Language

The site uses a **brutalist editorial** aesthetic:

- **Hard 4–8px borders**, zero border-radius (set globally in `tailwind.config.ts`).
- **Material Design 3 token palette** with primary `#ad2c00` (rust), neutral surfaces, on-surface `#1b1b1b`.
- **Three-font stack**: Newsreader italic display for headlines, Work Sans for body, Space Grotesk for labels.
- **Editorial chrome**: figure captions, registration marks, plate-number eyebrows (`01 / …`, `Fig 1.A`), film-grain overlays.
- **Motion**: staggered reveals on viewport entry, subtle parallax on imagery, top-of-page scroll progress bar.

Imagery in the live site is loaded from `images.unsplash.com`; whitelisted in `next.config.mjs`. Replace with hosted assets before going to production.

---

## Content

The Japanese copy uses polite form (〜です／〜ます) throughout, calibrated for a non-specialist client audience. Brand-core terminology is preserved verbatim — `鏡面仕上げ`, `ガラスコーティング`, `JCA認定`, `完全予約制`, `研磨` — while editorial stiffness has been removed.

Workshop coordinates are the source of truth for the map and the displayed lat/lng:

- Address: `〒259-0151 神奈川県足柄上郡中井町井ノ口 1540-1`
- Coordinates: `35.3376° N · 139.2303° E`
- Google Maps: <https://maps.app.goo.gl/7KZS2Rs5242v4bEt7>

---

## Development

### Prerequisites

- Node.js ≥ 18.17
- npm (or your preferred Node package manager)

### Setup

```bash
npm install
```

### Scripts

| Command         | Action                                                    |
| --------------- | --------------------------------------------------------- |
| `npm run dev`   | Start the dev server on http://localhost:3000             |
| `npm run build` | Production build (`.next/`)                               |
| `npm run start` | Serve the production build                                |
| `npm run lint`  | Run Next.js / ESLint checks                               |

A typecheck-only pass is also useful while editing copy:

```bash
npx tsc --noEmit
```

---

## Adding Journal Posts

Posts are defined as structured content blocks in `lib/journal.ts`. Each entry has typed metadata (`slug`, `number`, `dateISO`, `category`, `author`, `image`, …) and a `body` array of `JournalBlock`s. Supported block types:

- `p` — paragraph
- `h2` / `h3` — section / sub-section heading
- `quote` — pull-quote with optional `cite`
- `list` — bulleted list
- `specs` — keyed spec table

Adding a post is a single object in the `POSTS` array. The route `app/journal/[slug]/page.tsx` uses `generateStaticParams` to prerender every entry at build time — no further wiring required.

---

## Deployment

The project is a stock Next.js 14 App Router app and deploys cleanly to Vercel:

```bash
vercel
```

For self-hosting, run `npm run build && npm run start` behind a reverse proxy. The build emits no edge runtime requirements and no custom server.

---

## License

All rights reserved. Code, copy, and brand assets are property of KNIGHTS workshop. Do not reproduce without permission.

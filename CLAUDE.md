# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ZeroCarbon is a Next.js 15 marketing/landing site for an African carbon trading platform. It uses the **App Router** with JavaScript (no TypeScript).

## Commands

```bash
npm run dev      # Dev server at localhost:3000
npm run build    # Production build
npm start        # Production server
npm run lint     # ESLint (next/core-web-vitals, flat config)
```

No test framework is configured.

## Tech Stack

- **Next.js 15** (App Router), **React 19**, **Tailwind CSS 4** with @tailwindcss/forms
- **Appwrite 11** for auth, database, and cloud functions
- **@headlessui/react 2** for accessible UI primitives (Popover, Dialog, Disclosure, Menu)
- **@heroicons/react** and **react-icons** for icons
- **Google Maps JavaScript API** (loaded via `next/script` in `app/layout.js`)
- Custom fonts: Mona Sans Expanded (local woff2 in `src/fonts/`), Inter (via `next/font/google`)

## Architecture

**Routing:** App Router via `app/` directory. Key routes:
- `/` — Home (Navbar, Header, Projects, About, Values, Team, Contact, Footer) — Server Component
- `/login` — Sign-in form (Client Component, Appwrite auth not yet wired)
- `/project/EAYA` — EAYA project detail page — Server Component

**Layout:** `app/layout.js` is the root layout (fonts, metadata, Google Maps script). No nested layouts yet.

**Component structure:** Each component lives in its own folder under `components/` with `index.js` as entry point. Sub-components (e.g., `Projects/card.js`) are co-located. Components using `useState`/`useEffect` or Headless UI must have `"use client"` directive.

**Appwrite client:** Singleton in `components/Appwrite/index.js` exports `client`, `account`, `databases`, `functions`. Uses `NEXT_PUBLIC_*` environment variables (`NEXT_PUBLIC_PROJECT_URL`, `NEXT_PUBLIC_PROJECT_ID`, `NEXT_PUBLIC_DB_ID`, `NEXT_PUBLIC_COLLECTION_ATTENDEE_ID`, `NEXT_PUBLIC_FUNCTION_MAIL_ID`).

**State management:** Local component state only (`useState`/`useEffect`). No global store.

**Static data:** Team data lives in `components/Data/team.js` as a plain JS export.

## Tailwind v4 Custom Theme

Theme is defined via CSS `@theme` block in `app/globals.css` (not a JS config file):
- `--color-primary`: `#00695c` (dark teal/green)
- `--color-buttercup`: `#F59E0B` (amber/yellow)
- `--font-sans`: `var(--font-mona)` (Mona Sans Expanded)
- Content detection is automatic (no content array needed)

## Conventions

- JavaScript only, no TypeScript
- Component folders use `index.js` as entry point
- Client Components must have `"use client"` directive at top of file
- Headless UI v2 uses named exports (`PopoverButton`, `DialogPanel`, etc.) not dot notation
- `classNames(...classes)` helper is defined locally in components that need it
- Image remote patterns configured in `next.config.js`: `appwrite.tikobaze.co.ke`, `studio.tailwindui.com`, `images.pexels.com`
- ESLint uses flat config format (`eslint.config.mjs`)

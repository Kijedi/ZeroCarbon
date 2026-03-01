# Next.js 15 + App Router + Tailwind v4 Migration

## Summary
Migrate ZeroCarbon from Next.js 13.4 (Pages Router) to Next.js 15 (App Router), upgrade Tailwind CSS from v3 to v4, upgrade Headless UI from v1 to v2, and clean up dead references.

## Package Changes
- next: 13.4.4 → 15.x
- react/react-dom: 18.2 → 19.x
- eslint/eslint-config-next: 8.12/12.1 → 9.x/15.x
- @headlessui/react: 1.6 → 2.x
- tailwindcss: 3.x → 4.x
- Drop: autoprefixer, postcss config, @tailwindcss/forms (replaced by v4 import)
- Add: @tailwindcss/forms (v4 version)

## Directory Restructure
- pages/ → app/ (full migration, no hybrid)
- _app.js + _document.js → app/layout.js
- styles/globals.css → app/globals.css (Tailwind v4 CSS-first config)

## Headless UI v2 API Changes
- Dot notation → named exports (Popover.Button → PopoverButton, etc.)
- Transition simplified with built-in transition prop

## Tailwind v4
- @tailwind directives → @import "tailwindcss"
- tailwind.config.js → @theme block in CSS
- Automatic content detection

## Cleanup
- Remove dead links: /signup, /dashboard, /project/BMT, /event/*
- Remove commented-out code in login.js
- Remove unused useRouter in Projects
- Fix missing alt props on images
- Replace images.domains with images.remotePatterns

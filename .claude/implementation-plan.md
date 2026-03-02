# ZeroCarbon Website Strategy — Implementation Plan & Tracker

> Based on: `ZeroCarbon_Website_Strategy.pdf` (February 2026)
> Scope: Full homepage replace + Investors page + SEO
> Created: 2026-03-02

---

## Phase 1: SEO & Metadata Foundation

> Add search visibility infrastructure before touching UI.

- [ ] **1.1** Update `app/layout.js` metadata export with site-wide meta description, Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`), and Twitter card tags
- [ ] **1.2** Add JSON-LD structured data (Organization schema) to `app/layout.js` via `<script type="application/ld+json">`
- [ ] **1.3** Create `app/sitemap.js` (Next.js sitemap route) listing all pages: `/`, `/investors`, `/project/EAYA`, `/login`
- [ ] **1.4** Create `app/robots.js` (Next.js robots route) allowing all crawlers, referencing sitemap URL
- [ ] **1.5** Add target keywords to page-level metadata: "carbon trading Africa", "smallholder farmer carbon credits", "African carbon market platform"

**Files touched:** `app/layout.js`, `app/sitemap.js` (new), `app/robots.js` (new)

---

## Phase 2: Navbar Update

> Update navigation to reflect new site structure before building sections.

- [ ] **2.1** Update nav links: Home, How It Works (anchor `#how-it-works`), For Investors (`/investors`), Contact (anchor `#contact`)
- [ ] **2.2** Remove "Our Projects" dropdown — replace with "How It Works" link
- [ ] **2.3** Add "Invest in ZeroCarbon" CTA button to navbar (styled with `bg-primary` or `bg-buttercup`)
- [ ] **2.4** Update mobile menu to match new links
- [ ] **2.5** Verify sticky behavior and transparency still work

**Files touched:** `components/Navigation/index.js`

---

## Phase 3: Hero Section (Replace Header)

> Replace existing Header component with new investor-focused hero.

- [ ] **3.1** Rewrite `components/Header/index.js` with new headline: "Africa's Carbon Wealth. Finally Unlocked."
- [ ] **3.2** Add subheadline: "ZeroCarbon connects smallholder farmers to global carbon markets through real-time verification, fair pricing, and transparent earnings — turning sustainable farming into a revenue stream."
- [ ] **3.3** Add two CTA buttons: "Explore the Platform" (primary, scrolls to `#how-it-works`) and "Invest in ZeroCarbon" (secondary, links to `/investors`)
- [ ] **3.4** Build animated impact counter strip: `$50B+` Global Carbon Market | `33M+` African Smallholder Farmers | `<2%` Credits from Africa Today
- [ ] **3.5** Implement count-up animation using `useEffect` + `useState` (client component) or CSS-only approach
- [ ] **3.6** Add `"use client"` directive if using JS animation

**Files touched:** `components/Header/index.js`

---

## Phase 4: The Problem Section (New)

> New section — "A $50 Billion Market — With Africa Left Out"

- [ ] **4.1** Create `components/Problem/index.js`
- [ ] **4.2** Add section title and introductory paragraph from PDF copy
- [ ] **4.3** Build 3-card grid layout:
  - Card 1: "No Market Access" — "Farmers sequester carbon but have no way to monetize it"
  - Card 2: "Exploitative Middlemen" — "No standardized contracts or fair pricing protections"
  - Card 3: "No Verification" — "Buyers lack confidence without real-time tracking data"
- [ ] **4.4** Add appropriate icons from `@heroicons/react` or `react-icons` for each card
- [ ] **4.5** Style cards with hover effects, consistent with site theme (primary green, buttercup accents)

**Files touched:** `components/Problem/index.js` (new), `app/page.js`

---

## Phase 5: The Solution Section (New)

> New section — "The Platform That Bridges the Gap"

- [ ] **5.1** Create `components/Solution/index.js`
- [ ] **5.2** Add section title and description paragraph from PDF
- [ ] **5.3** Build 4-pillar card layout (2x2 grid on desktop):
  - "Register & Geotag" — digital identity + GPS-verified land
  - "Track & Verify" — real-time satellite + field data monitoring
  - "Protect & Pay" — standardized contracts, fair pricing
  - "Trade & Scale" — verified credits listed for global buyers
- [ ] **5.4** Add icons for each pillar
- [ ] **5.5** Ensure responsive layout (stacks to 1-col on mobile)

**Files touched:** `components/Solution/index.js` (new), `app/page.js`

---

## Phase 6: How It Works Section (New)

> New section — "From Farm to Credit in Four Steps"

- [ ] **6.1** Create `components/HowItWorks/index.js` with `id="how-it-works"` anchor
- [ ] **6.2** Build 4-step horizontal process layout:
  - 01 REGISTER — "Farmer signs up and land is GPS-geotagged"
  - 02 MEASURE — "Carbon sequestration is tracked via satellite and field data"
  - 03 VERIFY — "Credits are validated using research-backed methodology"
  - 04 TRADE — "Verified credits go to market; farmer gets paid transparently"
- [ ] **6.3** Style step numbers with large bold typography (green/buttercup accent)
- [ ] **6.4** Add connecting line or arrow between steps on desktop
- [ ] **6.5** Stack vertically on mobile with timeline-style layout

**Files touched:** `components/HowItWorks/index.js` (new), `app/page.js`

---

## Phase 7: Traction & Milestones Section (New)

> New section — "Built, Live, and Growing"

- [ ] **7.1** Create `components/Traction/index.js`
- [ ] **7.2** Add section title and intro copy: "ZeroCarbon isn't a concept — it's a working platform."
- [ ] **7.3** Build visual timeline/roadmap with 3 states:
  - COMPLETED (green): MVP deployed, farmer registration operational, carbon measurement methodology
  - IN PROGRESS (buttercup/amber): Pilot program with farmer cooperatives
  - NEXT (gray/outline): Scale to 5,000+ farmers, first verified credits
- [ ] **7.4** Use vertical timeline with dot indicators and connecting lines
- [ ] **7.5** Ensure mobile-responsive layout

**Files touched:** `components/Traction/index.js` (new), `app/page.js`

---

## Phase 8: Team Section Update

> Update existing team section with new bios from the PDF.

- [ ] **8.1** Update `components/Data/team.js` with new titles:
  - Wesley Kijedi → "Co-Founder & CTO"
  - Judy Wangare → "Co-Founder & Climate Lead"
  - Gladwel Njeri → "Community Development Lead"
  - Solomon Rabin → "Agricultural Extension Officer"
- [ ] **8.2** Add short bio descriptions to team data (from PDF)
- [ ] **8.3** Update team section title to "Built by People Who Understand the Problem"
- [ ] **8.4** Show bios on hover or below each card

**Files touched:** `components/Data/team.js`, `app/page.js` (team section)

---

## Phase 9: Final CTA Section (Replace Contact)

> Replace existing contact section with audience-segmented CTA.

- [ ] **9.1** Create `components/CTA/index.js` with `id="contact"` anchor
- [ ] **9.2** Add headline: "Ready to Power Africa's Carbon Future?"
- [ ] **9.3** Add copy paragraph addressing investors, buyers, and farmers
- [ ] **9.4** Build 3 CTA buttons:
  - "Schedule an Investor Call" → links to `/investors` (or Calendly when available)
  - "Request Carbon Credits" → `mailto:jammutsami@gmail.com` (placeholder)
  - "Join ZeroCarbon" → `/login` or registration (placeholder)
- [ ] **9.5** Style with dark/primary background for visual contrast

**Files touched:** `components/CTA/index.js` (new), `app/page.js`

---

## Phase 10: Footer Update

> Update footer links and structure.

- [ ] **10.1** Add navigation links: About, Platform, For Investors, For Buyers, For Farmers, Contact
- [ ] **10.2** Add contact email: `jammutsami@gmail.com`
- [ ] **10.3** Keep newsletter signup if desired, or replace with simpler layout
- [ ] **10.4** Ensure footer matches new brand messaging

**Files touched:** `components/Footer/index.js`

---

## Phase 11: Homepage Assembly

> Wire all new sections into the homepage in correct order.

- [ ] **11.1** Update `app/page.js` imports — add Problem, Solution, HowItWorks, Traction, CTA
- [ ] **11.2** Remove old About, Values sections (replaced by Problem + Solution)
- [ ] **11.3** Set section order: Navbar → Hero → Problem → Solution → HowItWorks → Traction → Team → CTA → Footer
- [ ] **11.4** Verify all anchor links work (`#how-it-works`, `#contact`)
- [ ] **11.5** Test full page scroll and responsive layout at mobile/tablet/desktop
- [ ] **11.6** Run `npm run build` to verify no build errors

**Files touched:** `app/page.js`

---

## Phase 12: Investors Page (New)

> Build the dedicated investor-focused page at `/investors`.

- [ ] **12.1** Create `app/investors/page.js` with page-level metadata (title, description, OG tags)
- [ ] **12.2** Build Market Opportunity section — "Why Now. Why Africa. Why ZeroCarbon." with ACMI context paragraph
- [ ] **12.3** Add 3 large stat callouts: `$2B+` market value, `300M` credits target, `$6B` revenue target
- [ ] **12.4** Reuse or reference Traction component for milestones
- [ ] **12.5** Reuse or reference Team section
- [ ] **12.6** Add investor-specific CTA: "Schedule an Investor Call" (placeholder link)
- [ ] **12.7** Include Navbar and Footer

**Files touched:** `app/investors/page.js` (new)

---

## Phase 13: Final QA & Polish

> Cross-cutting quality checks.

- [ ] **13.1** Run `npm run lint` and fix any ESLint errors
- [ ] **13.2** Run `npm run build` — confirm clean production build
- [ ] **13.3** Test all pages at 3 breakpoints: mobile (375px), tablet (768px), desktop (1280px)
- [ ] **13.4** Verify all internal links and anchor scrolls work
- [ ] **13.5** Check color contrast and accessibility (heading hierarchy, alt text)
- [ ] **13.6** Verify Open Graph tags render correctly (use og:image preview tool)
- [ ] **13.7** Commit all changes with descriptive message

**Files touched:** Various (fixes only)

---

## Summary

| Phase | Description | New Files | Status |
|-------|-------------|-----------|--------|
| 1 | SEO & Metadata | `app/sitemap.js`, `app/robots.js` | ✅ Done |
| 2 | Navbar Update | — | ✅ Done |
| 3 | Hero Section | — | ✅ Done |
| 4 | Problem Section | `components/Problem/index.js` | ✅ Done |
| 5 | Solution Section | `components/Solution/index.js` | ✅ Done |
| 6 | How It Works | `components/HowItWorks/index.js` | ✅ Done |
| 7 | Traction & Milestones | `components/Traction/index.js` | ✅ Done |
| 8 | Team Update | — | ✅ Done |
| 9 | Final CTA | `components/CTA/index.js` | ✅ Done |
| 10 | Footer Update | — | ✅ Done |
| 11 | Homepage Assembly | — | ✅ Done |
| 12 | Investors Page | `app/investors/page.js` | ✅ Done |
| 13 | Final QA & Polish | — | ✅ Done |

**Total new files:** 7
**Total modified files:** ~8
**Estimated phases:** 13

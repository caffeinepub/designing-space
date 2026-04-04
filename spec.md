# OfNeeds — SEO Optimization (Version 21)

## Current State
- Single-page React app (SPA) at `/` with sections: hero, starter packs, products, about, testimonials, trusted brands, blog, contact
- `index.html` has basic meta tags referencing OfNeeds but still has `designingspace.in` in some schema
- `sitemap.xml` and `robots.txt` still reference `designingspace.in` (old domain)
- No dedicated landing pages per keyword — all content is on the homepage as hash anchors
- App.tsx has routes for `/` and `/admin/inquiries` only
- Missing dedicated pages for: corporate-gifts, welcome-gifts, trophies, lanyards, customized-tshirts, jackets, customized-jackets, welcome-goodies
- Blog posts exist as sections but not as standalone routable pages
- Schema markup is in index.html only — not per-page
- Keywords like "lanyards", "customized t-shirts", "customized jackets", "trophies", "welcome goodies" are underrepresented in content

## Requested Changes (Diff)

### Add
- 8 dedicated SEO landing pages (routable via React Router):
  - `/corporate-gifts` — Corporate Gifts India | OfNeeds
  - `/welcome-gifts` — Welcome Gifts for Employees | OfNeeds
  - `/trophies` — Corporate Trophies & Awards | OfNeeds
  - `/lanyards` — Custom Lanyards for Companies | OfNeeds
  - `/customized-tshirts` — Customized T-Shirts for Companies | OfNeeds
  - `/jackets` — Corporate Jackets & Outerwear | OfNeeds
  - `/customized-jackets` — Customized Jackets India | OfNeeds
  - `/welcome-goodies` — Welcome Goodies & Onboarding Kits | OfNeeds
- Each landing page must include:
  - Unique `<title>` and `<meta description>` injected via react-helmet or document.title + meta management
  - H1, H2, H3 with primary + secondary keyword placement
  - 800–1200 words of keyword-rich, human-readable content
  - FAQ section (5 questions) targeting long-tail keywords with FAQPage schema
  - Product schema markup per page
  - CTA: Get a Quote, Bulk Order, Explore Packs
  - Internal links to related pages
  - Location signals: Bangalore, Karnataka, India
- Update `index.html` schema to reference `ofneeds.com` (not `designingspace.in`), fix geo tags to include Bangalore/Karnataka
- Update `sitemap.xml` to include all new landing pages with correct `ofneeds.com` domain
- Update `robots.txt` Sitemap URL to `https://ofneeds.com/sitemap.xml`
- Add a shared `SEOHead` component that updates document title and meta tags per route
- Reusable `FAQSection` component used across all landing pages
- Reusable `LandingPageCTA` component for consistent CTA blocks
- Navigation in Header should include dropdown or links to major landing pages

### Modify
- `App.tsx`: Add 8 new routes for keyword landing pages
- `Header.tsx`: Add navigation links to landing pages (Products dropdown or direct links)
- `index.html`: Fix domain references to `ofneeds.com`, add Bangalore/Karnataka geo tags
- `sitemap.xml`: Replace `designingspace.in` with `ofneeds.com`, add all new page URLs
- `robots.txt`: Fix Sitemap URL to point to `ofneeds.com`

### Remove
- Old `designingspace.in` references in sitemap.xml, robots.txt, and index.html schema

## Implementation Plan
1. Create `src/frontend/src/components/seo/SEOHead.tsx` — updates document.title + meta tags programmatically
2. Create `src/frontend/src/components/seo/FAQSection.tsx` — renders FAQ accordion with FAQPage schema injection
3. Create `src/frontend/src/components/seo/LandingPageCTA.tsx` — CTA block with quote, bulk order, explore buttons
4. Create 8 landing page components in `src/frontend/src/pages/`
5. Update `App.tsx` with new routes
6. Update `Header.tsx` with navigation to landing pages
7. Update `index.html` meta/schema to use `ofneeds.com`, add Bangalore geo tags
8. Rewrite `sitemap.xml` with all pages and `ofneeds.com` domain
9. Fix `robots.txt` Sitemap URL

# Maple Photo Imaging — Execution Tasks

## Related files
- [Project context](./PROJECT.md)
- [Implementation spec](./SPEC.md)
- [Build prompt](./PROMPT.md)

## Purpose
This file tracks execution work for the MVP.

Use this file for:
- launch checklist
- pending content collection
- implementation progress
- final QA and deployment tasks

Do not treat this file as the source of truth for product direction.
Product direction lives in [PROJECT.md](./PROJECT.md).
Implementation requirements live in [SPEC.md](./SPEC.md).

---

## Status
- Project phase: MVP build
- Launch target: within 1 week
- Current priority: build production-ready marketing site and prepare for deployment

---

## Pending business content
These items are required before final launch:

- [ ] Confirm exact business address
- [ ] Confirm business phone number
- [ ] Confirm business email
- [ ] Confirm business hours
- [ ] Confirm final domain choice
- [ ] Confirm Calendly booking URL
- [ ] Confirm Google Maps embed URL
- [ ] Collect 2–3 real shop photos
- [ ] Collect 3–5 real Google review excerpts
- [ ] Confirm social media links, if any

---

## Build checklist

### Phase 1 — Project setup
- [ ] Create Next.js project
- [ ] Set up TypeScript and Tailwind
- [ ] Add fonts
- [ ] Set up base file structure
- [ ] Create constants/config file
- [ ] Add placeholder environment variables
- [ ] Push repo and connect deployment

### Phase 2 — Core landing page
- [ ] Build navbar
- [ ] Build hero section
- [ ] Build services section
- [ ] Build pricing section
- [ ] Build booking section
- [ ] Build reviews section
- [ ] Build FAQ section
- [ ] Build location section
- [ ] Build footer

### Phase 3 — Admin MVP
- [ ] Create admin login page
- [ ] Create admin page
- [ ] Add login API route
- [ ] Add cookie-based auth
- [ ] Add middleware protection
- [ ] Add logout flow
- [ ] Add Calendly dashboard link

### Phase 4 — SEO and polish
- [ ] Add metadata
- [ ] Add Open Graph tags
- [ ] Add local SEO keywords
- [ ] Add structured data if time permits
- [ ] Improve accessibility
- [ ] Optimize images
- [ ] Check mobile responsiveness
- [ ] Check loading/performance

### Phase 5 — Launch
- [ ] Replace placeholders with real content
- [ ] Test booking flow
- [ ] Test admin login flow
- [ ] Test on mobile
- [ ] Test on desktop browsers
- [ ] Connect custom domain
- [ ] Verify HTTPS
- [ ] Submit site for indexing
- [ ] Final content review

---

## Suggested execution order
1. Build page structure
2. Build all public-facing sections
3. Integrate booking
4. Add admin auth
5. Add SEO and polish
6. Replace placeholders
7. Launch

For implementation details, see [SPEC.md](./SPEC.md).

---

## Day-by-day sprint plan

### Day 1
- [ ] Initialize project
- [ ] Add fonts, colors, and layout structure
- [ ] Create all major components
- [ ] Build navbar and footer
- [ ] Create deployment preview

### Day 2
- [ ] Build hero
- [ ] Build services
- [ ] Add responsive behavior
- [ ] Validate top-half mobile layout

### Day 3
- [ ] Build pricing
- [ ] Integrate Calendly embed
- [ ] Test booking experience

### Day 4
- [ ] Build reviews
- [ ] Build FAQ accordion
- [ ] Build location section
- [ ] Fill in confirmed business info

### Day 5
- [ ] Build admin login
- [ ] Protect admin route
- [ ] Test auth flow

### Day 6
- [ ] Add SEO metadata
- [ ] Improve accessibility
- [ ] Optimize images and layout
- [ ] Run final UI polish pass

### Day 7
- [ ] Final review
- [ ] Cross-browser testing
- [ ] Connect domain
- [ ] Launch

---

## QA checklist

### Content QA
- [ ] Headline is clear
- [ ] Pricing is visible and easy to understand
- [ ] Booking CTA is visible above the fold
- [ ] FAQ answers are concise
- [ ] Address, phone, email, and hours are correct

### UX QA
- [ ] Navigation works correctly
- [ ] Anchor scrolling feels smooth
- [ ] Mobile menu works
- [ ] FAQ accordion works with keyboard
- [ ] Booking embed displays properly on small screens

### Technical QA
- [ ] No broken links
- [ ] No missing environment variables
- [ ] No protected admin leakage
- [ ] Metadata renders correctly
- [ ] Images are optimized
- [ ] No obvious layout breaks

### Launch QA
- [ ] Domain resolves correctly
- [ ] SSL works
- [ ] Site loads on mobile data/Wi-Fi
- [ ] Search engine indexing steps completed

---

## Notes for Claude Code
When implementing:
- use [PROJECT.md](./PROJECT.md) for business context
- use [SPEC.md](./SPEC.md) for implementation rules
- use this file to track execution progress
- use [PROMPT.md](./PROMPT.md) as the orchestration prompt

If there is a conflict:
1. [PROJECT.md](./PROJECT.md) defines product intent
2. [SPEC.md](./SPEC.md) defines implementation requirements
3. [TASKS.md](./TASKS.md) defines execution order
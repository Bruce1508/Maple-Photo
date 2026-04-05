# Maple Photo Imaging — CLAUDE.md

## Related docs

- [Project context](./PROJECT.md)
- [Implementation spec](./SPEC.md)
- [Execution tasks](./TASKS.md)
- [Build prompt](./PROMPT.md)

## Source of truth priority

1. `.claude/PROJECT.md` — business and product intent
2. `.claude/SPEC.md` — implementation requirements
3. `.claude/TASKS.md` — execution order and progress tracking
4. `CLAUDE.md` — coding workflow and guardrails

## Project

Passport and ID photo studio website for a Toronto business.

- **Framework:** Next.js App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deploy target:** Vercel
- **Domain:** `maplephotoimaging.ca`

Build this as a real local-business MVP, not a startup SaaS app.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React
- DM Serif Display + DM Sans via `next/font/google`
- Calendly inline embed via `NEXT_PUBLIC_CALENDLY_URL`
- Cookie-based admin auth for a single internal user

## Core principles

- Keep the implementation simple
- Do not over-engineer
- Do not add a database for MVP
- Do not add CMS complexity in v1
- Prefer maintainable code over clever code
- Prioritize mobile-first UX
- Use placeholders when real business content is still missing

## File structure

```text
app/                  # App Router pages and routes
components/
  layout/             # Navbar, Footer
  sections/           # Hero, Services, Pricing, Booking, Reviews, FAQ, Location
lib/constants.ts    # Centralized static business content
middleware.ts         # Protect /admin routes
.env.local            # ADMIN_PASSWORD, NEXT_PUBLIC_CALENDLY_URL, etc.
```

## Coding rules

- Keep all static business data in `lib/constants.ts`
- Do not scatter repeated business copy across components
- Use `next/image` for content images when applicable
- Inline SVG is fine for simple icons or logo marks
- Build mobile-first: start at 375px, then scale up
- Use semantic HTML: `main`, `section`, `nav`, `footer`, etc.
- Every interactive element must have an accessible name
- Avoid `any`; use clear types for props, shared data, and API boundaries
- Client-exposed environment variables must start with `NEXT_PUBLIC_`

## Design tokens

- **Primary:** `#0EA5E9`
- **Accent:** `#DC2626`
- **Warm:** `#F59E0B`
- **Background:** `#F8FAFC`
- **Text:** `#0F172A`
- **Muted:** `#64748B`
- **Border:** `#E2E8F0`

## Parallel work suggestions

Parallelize only after shared structure is clear.

**Suggested split:**

- **Agent A:** build `components/sections/*`
- **Agent B:** define `lib/constants.ts` and shared types
- **Agent C:** implement admin login, middleware, and API route

**Before parallel work:**

- define shared data shapes
- keep naming consistent
- keep UI patterns consistent across sections

## Debugging workflow

- Check build errors and browser console first
- For hydration issues, identify server/client mismatch before adding `"use client"`
- Put browser-only logic in `useEffect` when appropriate
- If Calendly fails, verify env vars and script loading
- If admin auth loops, verify cookie name and middleware logic
- If images shift layout, provide proper sizing

## Testing checklist

Before major commits:

- `npm run build` passes
- Mobile layout looks correct at 375px
- Anchor links scroll correctly
- FAQ accordion works with keyboard
- `/admin` redirects to `/admin/login` when unauthenticated
- Admin login works with valid password
- Calendly widget loads correctly

## SEO requirements

- Add metadata in `app/layout.tsx`
- Include title, description, and Open Graph data
- Use strong semantic heading structure
- Add alt text for content images
- Implement sitemap/robots using App Router conventions if needed
- Add LocalBusiness structured data if practical

## Content placeholders

Use clear placeholders for missing real content.

Prefer centralizing placeholders in `lib/constants.ts` when possible:

- address
- phone
- email
- business hours
- review content
- maps link
- booking URL
- hero/shop images

Use `TODO` comments only where the placeholder must stay near the implementation.

## Working instructions

**Before coding:**

- Read `.claude/PROJECT.md`
- Follow `.claude/SPEC.md`
- Track execution in `.claude/TASKS.md`

If files conflict, follow the priority order defined at the top.

## Final reminder

Optimize for:

- clarity
- trust
- speed
- mobile usability
- fast launch
- easy maintenance

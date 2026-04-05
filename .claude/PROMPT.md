# Maple Photo Imaging — Claude Code Prompt

## Read these first
- [Project context](./PROJECT.md)
- [Implementation spec](./SPEC.md)
- [Execution tasks](./TASKS.md)

## Your role
You are building the MVP website for Maple Photo Imaging, a passport and ID photo studio in Toronto.

Before writing code:
1. Read [PROJECT.md](./PROJECT.md) to understand the business, users, scope, and product direction.
2. Read [SPEC.md](./SPEC.md) to follow the implementation requirements.
3. Use [TASKS.md](./TASKS.md) to track progress and execution order.

## Priority order
If there is a conflict between files, follow this order:
1. [PROJECT.md](./PROJECT.md) for product intent and business context
2. [SPEC.md](./SPEC.md) for implementation details
3. [TASKS.md](./TASKS.md) for execution order and checklist

## Main objective
Build a production-ready MVP marketing website that:
- clearly explains the business
- helps customers trust the shop
- shows services and pricing
- allows appointment booking
- works well on mobile
- is easy to deploy and maintain

## Build rules
- Keep the implementation simple
- Do not over-engineer
- Do not add a database for MVP
- Do not add CMS complexity
- Use placeholder content where business details are still missing
- Keep all reusable content centralized
- Prefer clean, maintainable code over clever code
- Prioritize mobile-first UX
- Keep the site fast and accessible

## Required implementation
Build the following:
- public landing page
- admin login page
- protected admin page
- login API route
- middleware-based route protection
- centralized constants/config
- responsive sections based on the spec

## Workflow
Work in phases:
1. Project structure and base layout
2. Public landing page sections
3. Booking integration
4. Admin auth flow
5. SEO and polish
6. Final placeholder cleanup

After finishing a meaningful phase:
- update progress in [TASKS.md](./TASKS.md)
- keep implementation aligned with [SPEC.md](./SPEC.md)

## Content handling
If some real business data is missing, keep clear placeholders for:
- address
- phone
- email
- maps embed URL
- photos
- review source links
- booking URL

Make placeholders obvious and easy to replace later.

## Output expectations
Generate complete implementation files.
Do not leave empty stubs unless explicitly unavoidable.
Use production-quality structure, naming, and component organization.

## Final reminder
This is a real local-business MVP, not a startup SaaS app.
Optimize for clarity, trust, speed, and launch readiness.
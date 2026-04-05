# Maple Photo Imaging — Implementation Spec

## Related files

- [Project context](./PROJECT.md)
- [Execution tasks](./TASKS.md)
- [Build prompt](./PROMPT.md)

## Source of truth

Business context and product goals are defined in [PROJECT.md](./PROJECT.md).  
Execution tracking lives in [TASKS.md](./TASKS.md).

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Lucide React
- Google Fonts via `next/font`

## Architecture principles

- Keep the site simple and fast
- Prefer server-rendered/static-friendly pages where possible
- Avoid unnecessary backend complexity
- Use environment variables for third-party URLs and secrets
- Keep business content centralized in constants or config files
- Build mobile-first

## Brand direction

The website should feel:

- warm
- trustworthy
- professional
- fast
- local

## Visual style

### Colors

- Primary: `#0EA5E9`
- Accent: `#DC2626`
- Warm accent: `#F59E0B`
- Background: `#F8FAFC`
- Surface: `#FFFFFF`
- Text primary: `#0F172A`
- Text secondary: `#64748B`
- Border: `#E2E8F0`

### Typography

- Heading: DM Serif Display
- Body: DM Sans
- UI labels: DM Sans, medium or semibold

### Component style

- Rounded cards
- Soft shadows
- Clean borders
- Spacious section padding
- Strong CTA buttons
- Clear visual hierarchy
- Good contrast and readability

## Logo

Use a text-based logo with a maple leaf icon and the words:

`Maple Photo Imaging`

No separate logo image file is required for MVP.

## Site structure

### Routes

- `/` — landing page
- `/admin/login` — admin login page
- `/admin` — protected internal page
- Custom not-found page (`not-found.tsx`)

### Landing page sections

- Navbar
- Hero
- Services
- Pricing
- Booking
- Reviews
- FAQ
- Location
- Footer

## Content architecture

All reusable data should be extracted into a central file such as:

- `lib/constants.ts`

This should include:

- services
- pricing
- reviews
- FAQ items
- business hours
- contact info placeholders
- navigation items

Do not scatter repeated content across components.

## Section requirements

### Navbar

**Requirements:**

- sticky on scroll
- logo on the left
- navigation links for Services, Pricing, Book Now, Location
- primary CTA button on desktop
- hamburger menu on mobile
- smooth anchor navigation
- mobile menu should be easy to open and close

**Behavior:**

- should remain readable on mobile
- should support active/visible section highlighting if simple to implement
- should not feel heavy or oversized

### Hero

**Purpose:**

- immediately communicate what the business does
- build trust
- push users toward booking or browsing services

**Must include:**

- strong headline about professional passport photos
- subheadline mentioning Toronto and government-compliant photos
- primary CTA for booking
- secondary CTA for viewing services
- trust badges
- visual area for shop image or placeholder graphic

**Notes:**

- the hero should be scannable in under 5 seconds
- prioritize clarity over decorative design

### Services

**Purpose:**

- show common photo types clearly
- reassure customers that many formats are supported

**Must include:**

- cards for common services
- short spec note per service
- starting price label
- note that additional international formats are supported

**Layout:**

- responsive card grid
- clean spacing
- easy to scan on mobile

### Pricing

**Purpose:**

- remove uncertainty
- help users choose quickly

**Must include:**

- Print Only
- Print + Digital
- Family Bundle / Contact Us

**Requirements:**

- transparent pricing layout
- highlight the most popular package
- include tax/pricing disclaimer
- keep copy short and practical

### Booking

**Purpose:**

- convert traffic into appointments

**Implementation:**

- Calendly inline embed
- env-based Calendly URL
- load script safely
- banner reminding users that walk-ins are welcome

**Requirements:**

- booking block should feel reliable and easy
- should not break the page layout on mobile
- should degrade gracefully if embed is unavailable

### Reviews

**Purpose:**

- build trust quickly

**MVP approach:**

- use static reviews
- include reviewer name and star rating
- include a button or link to Google reviews page

**Requirements:**

- review cards should be readable
- do not overload this section with too much text
- keep tone authentic and local-business focused

### FAQ

**Purpose:**

- reduce repetitive questions
- increase confidence before visit or booking

**Implementation:**

- accordion UI
- keyboard accessible
- simple open/close interactions

**Questions should cover:**

- clothing guidance
- timing
- acceptance guarantee
- children/infants
- digital copy availability
- appointment requirement

### Location

**Purpose:**

- help customers find and contact the business quickly

**Must include:**

- map embed
- address
- phone
- email
- business hours
- directions button

**Requirements:**

- important contact info should be readable without interacting with the map
- use placeholders until final business details are confirmed

### Footer

**Must include:**

- logo or brand text
- short tagline
- quick links
- contact summary
- copyright

Footer should be compact and easy to scan.

## Admin requirements

### `/admin/login`

**Must include:**

- password field
- login button
- error state for invalid password

### `/admin`

**Purpose:**

- simple internal page for owner/admin access

**MVP behavior:**

- show placeholder or simple booking view
- include a direct Calendly dashboard link
- include logout action

Do not build a full dashboard in the first version.

## Auth approach

Use a simple MVP-friendly auth flow:

- admin password stored in environment variable
- login route compares submitted password
- valid login sets cookie
- middleware protects `/admin`
- unauthenticated users are redirected to `/admin/login`

Keep the logic simple and easy to audit.

## Environment variables

Suggested variables:

- `ADMIN_PASSWORD`
- `NEXT_PUBLIC_CALENDLY_URL`
- `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL`
- `NEXT_PUBLIC_GA_ID` (optional)

## SEO requirements

The site should include:

- page title
- meta description
- local SEO keywords
- Open Graph metadata
- basic structured data for local business if possible
- good semantic HTML
- readable heading structure

Core SEO target ideas:

- passport photo Toronto
- ID photo Toronto
- visa photo Toronto
- PR card photo Toronto

## Performance and UX requirements

- mobile-first responsive layout
- optimized images
- minimal layout shift
- clear CTA visibility
- accessible contrast
- semantic HTML
- keyboard-usable interactive elements
- fast first load
- avoid large unnecessary dependencies

## Suggested file structure

```text
app/
  layout.tsx
  page.tsx
  not-found.tsx
  admin/
    page.tsx
    login/
      page.tsx
  api/
    admin/
      login/
        route.ts

components/
  layout/
    Navbar.tsx
    Footer.tsx
  sections/
    Hero.tsx
    Services.tsx
    Pricing.tsx
    Booking.tsx
    Reviews.tsx
    FAQ.tsx
    Location.tsx

lib/
  constants.ts

public/
  images/

middleware.ts
```

## Content placeholders

Until real business content is confirmed, allow placeholders for:

- address
- phone
- email
- maps URL
- shop photos
- review source links
- exact booking URL

Placeholders should be obvious and easy to replace later.

## Build priorities

1. working page structure
2. responsive layout
3. content sections
4. booking embed
5. admin auth flow
6. SEO polish
7. final content replacement

## Guardrails

- do not over-engineer
- do not add a database for MVP
- do not add CMS complexity in version 1
- do not turn the site into a generic template
- optimize for a real local business, not a startup app

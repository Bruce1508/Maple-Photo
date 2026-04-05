## Related files
- [Implementation spec](./SPEC.md)
- [Execution tasks](./TASKS.md)
- [Build prompt](./PROMPT.md)

# Maple Photo Imaging — Project Context

## Overview
Maple Photo Imaging is a passport and ID photo studio based in Toronto, Canada.

The business currently has little to no web presence. The goal of this project is to launch a production-ready marketing website that helps customers discover the shop through Google, understand services and pricing quickly, and book appointments online.

This is an MVP website intended to be launched within 1 week.

## Problem
Right now, potential customers searching for passport or ID photo services in Toronto may not find the business online.

The website should solve these problems:
- Improve discoverability through local SEO
- Show services and pricing clearly before customers visit
- Reduce uncertainty about accepted photo formats
- Allow online booking to reduce wait times
- Build trust through reviews and professional presentation

## Goals
### Business goals
- Increase discoverability for searches like "passport photo Toronto"
- Convert visitors into bookings or walk-ins
- Reduce repetitive phone inquiries about price, hours, and requirements
- Build trust with a clean, modern, local-business website

### Success metrics
- Rank for local passport photo search terms
- Generate at least 10 bookings per week in month 1
- Increase FAQ page engagement
- Maintain reliable uptime

## Scope
### In scope
- A production-ready marketing website
- Single-page landing experience with clear anchor navigation
- Service overview
- Transparent pricing
- Online booking via Calendly
- Reviews section
- FAQ section
- Location, hours, and contact details
- Simple protected admin page for internal use
- SEO basics for local search

### Out of scope
- Full e-commerce
- Full CMS
- Custom booking backend
- Multi-user admin system
- Complex dashboard features
- Advanced customer account functionality

## Audience
### Persona 1 — New immigrant / PR applicant
- Needs passport, PR card, or citizenship photos
- Usually searches Google first
- Wants confidence that the photo will be compliant
- Cares about trust, accuracy, and convenience

### Persona 2 — International student
- Needs visa, permit, or student ID photos
- Has a busy schedule and prefers quick service
- Wants pricing, speed, and online booking

### Persona 3 — Family / walk-in group
- May need multiple photos for travel or IDs
- Wants to confirm location, hours, and pricing quickly

## Product direction
The site should feel:
- Professional
- Fast
- Trustworthy
- Mobile-friendly
- Local and approachable

It should not feel:
- Overdesigned
- Corporate
- Complicated
- SaaS-like

## Information architecture
### Main routes
- `/` — main landing page
- `/admin` — protected internal page
- `/404` — custom not found page

### Landing page sections
- Hero
- Services
- Pricing
- Booking
- Reviews
- FAQ
- Location
- Footer

## Why single-page
A passport photo business has a simple user journey:
- arrive
- check services
- check prices
- trust the business
- book or walk in

A single-page website is the fastest and clearest MVP approach for this business.

## Constraints
- Launch target: within 1 week
- Real business details may still be pending
- Must support mobile users well
- Should be easy to deploy and maintain
- Should avoid unnecessary backend complexity

## Open questions
- Exact address
- Phone number
- Business email
- Business hours
- Final domain choice
- Calendly account owner
- Number of booking slots per day
- Social media links, if any
- Who will maintain the site after launch

## Working principle
This project should prioritize speed, clarity, and real business value over unnecessary complexity.

When in doubt:
- choose the simpler implementation
- keep the content easy to scan
- optimize for local customers on mobile
- ship the MVP first
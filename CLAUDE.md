# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (run this to verify no TS/lint errors before committing)
npm run lint     # ESLint
```

There are no tests. There is no test runner.

> **Important:** This project uses **Next.js 16** and **Tailwind CSS v4**, which have breaking changes from their previous major versions. Read relevant docs in `node_modules/next/dist/docs/` before writing any Next.js-specific code.

## Architecture

Single-page marketing website for Barao JiuJitsu Mislata gym (Mislata, Valencia, Spain). All content is static — no database, no CMS.

**Data flow:** Static data files (`src/data/*.ts`) → Section components (`src/components/sections/`) → `src/app/page.tsx`

**Component split:**
- `src/components/layout/` — `navbar.tsx` (sticky, scroll-aware), `footer.tsx`
- `src/components/sections/` — one file per page section, all server components except `faq_section.tsx`
- `src/components/ui/` — reusable cards/form used by sections

**Client components** (marked `"use client"`) — only three exist:
- `navbar.tsx` — mobile menu open/close state
- `faq_item.tsx` — accordion expand/collapse
- `contact_form.tsx` — Formspree POST with loading/success/error states

**Tailwind v4 config:** No `tailwind.config.ts`. Brand colors and fonts are defined via `@theme` in `src/app/globals.css`. Custom tokens follow the pattern `--color-*` (e.g., `--color-accent-red`) which Tailwind exposes as utility classes (`bg-accent-red`, `text-accent-gold`, etc.).

**Contact form:** Posts to Formspree. Requires `NEXT_PUBLIC_FORMSPREE_ID` env var (set in `.env.local` locally, and in Vercel project settings for production).

## Conventions

- **File naming:** snake_case for all files under `src/` (e.g., `hero_section.tsx`, `class_card.tsx`). Next.js App Router files (`layout.tsx`, `page.tsx`, `globals.css`) keep their required names.
- **Content updates:** Edit the relevant file in `src/data/` — never hardcode gym data directly in components.
- **New brand colors:** Add to the `@theme` block in `src/app/globals.css`, not inline styles.
- **Instructor photos:** Place at `public/images/instructor_N.jpg`. The `instructor_card.tsx` currently renders an initials placeholder — swap in `<Image>` from `next/image` once real photos exist (make `instructor_card.tsx` a client component if `onError` fallback is needed, or handle errors server-side).

## Deployment

Hosted on Vercel (free hobby tier). Auto-deploys on push to `main`. The `NEXT_PUBLIC_FORMSPREE_ID` env var must be set in Vercel project settings for the contact form to work in production.

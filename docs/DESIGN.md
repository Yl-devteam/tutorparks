---
name: LumioEdu Academic Studio
colors:
  surface: '#fff9ed'
  surface-dim: '#dfd9cf'
  surface-bright: '#fff9ed'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f3e8'
  surface-container: '#f3ede2'
  surface-container-high: '#ede8dd'
  surface-container-highest: '#e8e2d7'
  on-surface: '#1d1c15'
  on-surface-variant: '#404944'
  inverse-surface: '#333029'
  inverse-on-surface: '#f6f0e5'
  outline: '#707974'
  outline-variant: '#bfc9c3'
  surface-tint: '#306855'
  primary: '#003426'
  on-primary: '#ffffff'
  primary-container: '#0f4c3a'
  on-primary-container: '#82bba4'
  inverse-primary: '#99d3ba'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#571600'
  on-tertiary: '#ffffff'
  tertiary-container: '#7d2400'
  on-tertiary-container: '#ff936f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b4efd6'
  primary-fixed-dim: '#99d3ba'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#15503e'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59d'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#832600'
  background: '#fff9ed'
  on-background: '#1d1c15'
  surface-variant: '#e8e2d7'
typography:
  display-lg:
    fontFamily: Newsreader
    fontSize: 3.5rem
    fontWeight: '500'
    lineHeight: 4rem
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Newsreader
    fontSize: 2.25rem
    fontWeight: '500'
    lineHeight: 2.75rem
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 2.25rem
    fontWeight: '500'
    lineHeight: 2.75rem
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 1.75rem
    fontWeight: '500'
    lineHeight: 2.25rem
    letterSpacing: 0em
  headline-md:
    fontFamily: Newsreader
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.005em
  headline-sm:
    fontFamily: Newsreader
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
  body-lg:
    fontFamily: Manrope
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Manrope
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: Manrope
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
  label-lg:
    fontFamily: Manrope
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-md:
    fontFamily: Manrope
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Manrope
    fontSize: 0.6875rem
    fontWeight: '700'
    lineHeight: 0.875rem
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-tablet: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

# Implementation in this project

This file is the design guideline for TutorParks. Visual UI must follow the **written** Colors, Typography, Layout, Elevation, Shapes, and Components sections below — not the YAML Material 3 color scale (YAML `primary` is `#003426`; product primary is `#0f4c3a`).

YAML still supplies **typography**, **radius**, **spacing**, and **error** colors.

## Source of truth

| Layer | Location |
| --- | --- |
| Guideline | this file (`docs/DESIGN.md`) |
| Tokens | [`app/styles/tokens.css`](../app/styles/tokens.css) |
| Fonts | `Newsreader` + `Manrope` via `next/font/google` in [`app/layout.tsx`](../app/layout.tsx) |

Do **not** paste hex values into components. Use Tailwind token classes or the recipe utilities.

## Color classes

| Token | Class examples | Hex |
| --- | --- | --- |
| canvas | `bg-canvas` | `#fdfbf7` |
| canvas-raised | `bg-canvas-raised` | `#f7f4ed` |
| canvas-inset | `bg-canvas-inset` | `#f3ede2` |
| primary | `bg-primary` `text-primary` | `#0f4c3a` |
| primary-hover | `hover:bg-primary-hover` | `#0b382b` |
| on-primary | `text-on-primary` | `#fdfbf7` |
| secondary | `bg-secondary` | `#d97706` |
| on-secondary | `text-on-secondary` | `#ffffff` |
| tertiary | `bg-tertiary` `text-tertiary` | `#c2410c` |
| on-tertiary | `text-on-tertiary` | `#ffffff` |
| ink | `text-ink` | `#1c1917` |
| ink-muted | `text-ink-muted` | `#292524` |
| ink-subtle | `text-ink-subtle` | `#57534e` |
| border | `border-border` | `#d8cebe` |
| border-card | `border-border-card` | `#e8dfd1` |
| rule | `border-rule` `bg-rule` | `#e7ded0` |
| progress-track | `bg-progress-track` | `#e5ded1` |
| chip-emerald | `bg-chip-emerald` | `#e7efe9` |
| chip-ochre | `bg-chip-ochre` | `#fef3c7` |
| chip-ochre-fg | `text-chip-ochre-fg` | `#92400e` |
| ring-focus | `shadow-focus` / `ring` aura | `rgba(15, 76, 58, 0.15)` |
| error | `bg-error` `text-error` | `#ba1a1a` |
| on-error | `text-on-error` | `#ffffff` |
| error-container | `bg-error-container` | `#ffdad6` |
| on-error-container | `text-on-error-container` | `#93000a` |

## Typography

- Headings / display: `font-display` (Newsreader)
- Body / UI: `font-sans` (Manrope) — default on `<body>`
- Prefer scale utilities (mobile-first; `display-lg` and `headline-lg` step up at `md`):

| Utility | Use |
| --- | --- |
| `type-display-lg` | Hero statements |
| `type-headline-lg` `type-headline-md` `type-headline-sm` | Section and module titles |
| `type-body-lg` `type-body-md` `type-body-sm` | Body copy |
| `type-label-lg` `type-label-md` `type-label-sm` | Buttons, chips, captions |

## Spacing, radius, elevation, width

- Space: `p-space-xs` `gap-space-sm` `p-space-md` `p-space-lg` `p-space-xl` (YAML `space-*`; named `xs`–`xl` are avoided so they do not collide with Tailwind `max-w-md`)
- Page gutters: `px-gutter-mobile md:px-gutter`
- Section gaps: `mt-margin-mobile md:mt-margin-tablet lg:mt-margin` — not heavy rules
- Radius: `rounded` (4px fields/buttons), `rounded-lg` (cards/modals), `rounded-xl` (celebratory sandboxes only)
- Shadows: `shadow-card` (resting), `shadow-float` (modals/popovers)
- Reading width: `max-w-content` (`1280px`); narrower copy: `max-w-prose`

## Layout grid

```
grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12
```

- Mobile `<768px`: 4 columns
- Tablet `768px–1023px`: 8 columns
- Desktop `>1024px`: 12 columns, max `1280px`

## Recipe utilities

Use these instead of restyling from scratch:

- `btn-primary` — emerald, ivory text, `0.25rem` radius, `0.75rem 1.5rem` padding
- `btn-secondary` — ochre, high-momentum actions only
- `btn-outline` — ivory, parchment border, charcoal text
- `surface-card` — raised canvas, card border, `rounded-lg`, resting shadow, hover lift

## Hard rules

- Never put hex colors in JSX/TSX; use tokens.
- No `rounded-full` on buttons, cards, or structural containers. Pills are only for small status tags and counter chips.
- Never italicize Manrope. Italic is Newsreader-only (quotes, citations, reflective prompts).
- No `dark:` palette and no `prefers-color-scheme` inversion. This identity is light, warm linen only.
- Do not use default browser blue focus rings; use the emerald focus aura (`shadow-focus` / field focus in tokens).
- Prefer tonal stepping (`canvas` → `canvas-raised`) over heavy drop shadows.

---

## Brand & Style

The design system establishes a warm, bespoke academic studio presence designed for discerning families, motivated students, and expert educators. Moving decisively away from sterile, tech-monochrome edtech platforms, this identity borrows cues from venerable reading rooms, archival bookplates, and tactile craft paper to cultivate an environment of unhurried focus, intellectual gravity, and genuine encouragement.

The aesthetic pairs literary editorial grace with modern clarity. Deep forest botanical tones anchor the space with collegiate dignity, while warm amber accents inject lively curiosity and celebration. The underlying visual language leans into subtle, warm linen substrates, disciplined typographic rhythm, and restrained physical tactility. The emotional payoff is immediate: parents perceive rigorous, high-touch institutional excellence, while young learners encounter an inviting, human sanctuary that honors their growth.

## Colors

The palette draws life from classic campus foliage, aged paper leaves, and warm desk lamplight. 

- **Primary (`#0f4c3a` - Deep Collegiate Emerald):** The foundational anchor for the brand. Applied to key navigation elements, primary calls-to-action, structural badges, and top-tier typographic moments. It communicates stewardship, stability, and enduring rigor.
- **Secondary (`#d97706` - Warm Golden Ochre):** The spark of academic discovery. Used strategically for progress meters, achievement ribbons, focus alerts, and interactive highlights that reward student engagement.
- **Tertiary (`#c2410c` - Burnt Terracotta):** Reserved for energetic secondary highlights, deadline indicators, critical milestone tags, and key visual accents requiring immediate warm distinction.
- **Neutral & Canvas Tiering (`#fdfbf7`, `#f7f4ed`, `#f3ede2`):** Rather than cold, bleached digital whites or clinical cool grays, layouts rest upon warm linen and soft ivory planes. 
  - Canvas base: `#fdfbf7`
  - Subtle card/container background: `#f7f4ed`
  - High-contrast structural neutral boundary: `#f3ede2`
- **Text & Stroke Contrast (`#1c1917`, `#292524`, `#57534e`):** All typography utilizes deep warm stone and charcoal slates to ensure maximum legibility without the harshness of pitch black (#000000).

## Typography

The typographical voice bridges scholarly heritage with modern ergonomics through a dual-typeface structure:

- **Editorial Headings (Newsreader):** Brings the warmth, pacing, and human touch of physical literature to the screen. It is deployed across major section headers, hero statements, module titles, and parent-facing testimonials. Its medium weight yields authority without appearing austere.
- **System Interface & Body (Manrope):** Delivers clean geometry, open counters, and high legibility across student assignments, scheduling tables, tutor feedback notes, and dashboard navigation.
- **Typographic Discipline:** Never italicize sans-serif body copy for emphasis; reserve italicization solely for Newsreader literary quotes, publication citations, and reflective prompts. Maintain a strict optical balance by allowing Newsreader headlines generous vertical leading.

## Layout & Spacing

The layout philosophy mirrors the architectural proportion of classic reading rooms: spacious, grounded, and orderly.

- **Grid Framework:** A 12-column fluid grid system on desktop (`>1024px`) with a maximum reading container width of `1280px`. The grid condenses to 8 columns on tablet devices (`768px - 1023px`) and 4 columns on mobile (`<768px`).
- **Whitespace Cadence:** Layouts should never feel claustrophobic or rushed. Generous margins create breathing room around curriculum paths and tutoring notes. Content blocks are bounded by standard 8-point harmonic multipliers, prioritizing vertical rhythm over dense information packaging.
- **Section Breaks:** Distinguish transitions between disparate instructional modules using structural margin gaps (`margin`) rather than excessive dividing lines, letting the warm linen canvas define logical grouping.

## Elevation & Depth

To sustain the organic, human-crafted academic aesthetic, this design system rejects glossy neomorphism and heavy drop-shadows in favor of grounded physical paper layering:

- **Tonal Stepping:** Surfaces gain hierarchy primarily through warmth and tint differential. The primary canvas rests on `#fdfbf7`. Elevated workspaces, such as lesson cards or study consoles, sit on `#f7f4ed` framed by faint parchment borders (`rgba(28, 25, 23, 0.08)`).
- **Ambient Academic Shadows:** When true floating separation is required (such as modals, active dropdown selectors, or dragged flashcards), utilize soft, diffused shadows tinted with deep forest and warm umber tones instead of neutral gray:
  - *Resting Card Elevation:* `0 2px 4px -1px rgba(28, 25, 23, 0.04), 0 1px 2px -1px rgba(28, 25, 23, 0.02)`
  - *Floating Modal/Popover:* `0 12px 24px -4px rgba(15, 76, 58, 0.08), 0 4px 8px -2px rgba(28, 25, 23, 0.04)`
- **Rule Lines:** Structural dividing rules must remain soft and tactile, utilizing `#e7ded0` to emulate bookbinders' scoring lines.

## Shapes

The design system embraces a **Soft (`1`)** shape language, reminiscent of hand-trimmed archival paper, ledger books, and rounded bookplates.

- **Base Radius (0.25rem / 4px):** Applied to form fields, nested tags, utility controls, and subtle UI toggles.
- **Large Radius (`rounded-lg` - 0.5rem / 8px):** Applied to lesson cards, tutor profiles, modal dialogs, and primary interactive containers.
- **Extra Large Radius (`rounded-xl` - 0.75rem / 12px):** Applied exclusively to celebratory badges, interactive learning sandboxes, and student showcase highlights.
- **Pill Exceptions:** Rounded pills (`9999px`) are intentionally avoided for structural containers and primary buttons to preserve the architectural, crafted tone. Pills are reserved strictly for small status tags and counter chips.

## Components

### Buttons
- **Primary:** Deep emerald (`#0f4c3a`) background, soft ivory text (`#fdfbf7`), 0.25rem border radius, padded with `0.75rem 1.5rem`. Subtle hover transition deepens to `#0b382b`.
- **Secondary / Accent:** Warm golden ochre (`#d97706`) background with white or deep charcoal text, reserved for high-momentum actions like "Book Next Session" or "Celebrate Milestone."
- **Tertiary / Outline:** Ivory canvas with a delicate 1px border (`#d8cebe`) and deep charcoal text (`#1c1917`). Hover yields `#f3ede2`.

### Cards & Lesson Tiles
- Built with `#f7f4ed` surface fill, an enclosing 1px border (`#e8dfd1`), and `0.5rem` radius.
- Cards feature Newsreader medium headers paired with Manrope body text. Internal padding strictly honors `space-md` or `space-lg`. Hover interactions employ a subtle warm upward translation (-2px) with enhanced ambient shadow.

### Form Inputs & Text Fields
- Unfocused inputs maintain an ivory canvas fill (`#fdfbf7`), crisp 1px borders in `#d8cebe`, and deep stone labels (`#292524`).
- Focused states swap the border to Deep Emerald (`#0f4c3a`) with a 2px outer ambient aura tinted in `rgba(15, 76, 58, 0.15)`. No harsh primary blue rings.

### Checkboxes & Radio Controls
- Styled square (`roundedness: 1`) or circular toggles utilizing `#0f4c3a` when selected, with warm linen tick marks. 
- Unselected states utilize a defined `#d8cebe` border on a neutral ivory base, providing a distinct, tactile touchpoint for young students and parents alike.

### Chips & Subject Badges
- Compact indicators featuring `label-sm` Manrope typography.
- Filled with tinted neutral bases (e.g., emerald tint `#e7efe9` with `#0f4c3a` text, or ochre tint `#fef3c7` with `#92400e` text) using `0.25rem` corners to signify subjects, grade levels, and academic domains.

### Progress & Milestone Indicators
- Educational progress tracks utilize `#e5ded1` channel troughs with `#d97706` (Ochre) or `#0f4c3a` (Emerald) continuous fill bars, celebrating continuous mastery rather than game-like anxiety.

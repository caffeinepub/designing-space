# OfNeeds — Design Brief

## Direction

Premium B2B corporate gifting platform. Navy, white, gold palette. Elegant Lora serif headings paired with clean DM Sans body text. Full-width layout, card-based sections, refined minimalism. Tone: trustworthy, warm, professional — "your reliable partner."

## Palette

| Token       | Light (OKLCH)  | Dark (OKLCH)  | Usage                             |
|-------------|----------------|---------------|-----------------------------------|
| Primary     | 0.22 0 267     | 0.70 0.08 267 | Navy buttons, headings, text      |
| Accent      | 0.58 0.19 62   | 0.65 0.18 62  | Gold CTAs, highlights, borders    |
| Bg          | 0.98 0 0       | 0.12 0 267    | Light/dark page background        |
| Card        | 1.0 0 0        | 0.16 0 267    | White cards on navy sections      |
| Muted       | 0.92 0 0       | 0.25 0 267    | Tertiary surfaces, dividers       |
| Foreground  | 0.22 0 267     | 0.95 0 0      | Body text, primary labels         |

## Typography

| Element        | Font           | Scale      | Weight     |
|----------------|----------------|------------|------------|
| H1 (hero)      | Lora           | 3.5–4.5rem | 700        |
| H2 (section)   | Lora           | 2–3rem     | 700        |
| H3 (subsection)| Lora           | 1.5–2rem   | 600        |
| Body           | DM Sans        | 1rem       | 400–500    |
| Label/UI       | DM Sans        | 0.875rem   | 600        |
| Mono           | JetBrains Mono | 0.875rem   | 400        |

## Structural Zones

| Zone           | Surface                    | Border              | Intent                          |
|----------------|----------------------------|---------------------|---------------------------------|
| Header/Nav     | Navy primary (0.22)        | Gold accent line    | Trust, authority, navigation    |
| Hero           | Navy gradient + gold text  | None                | Premium, distinctive entry      |
| Content        | White/light bg             | Muted dividers      | Clean, readable, hierarchy      |
| Cards          | White on navy sections     | Gold accent (subtle)| Modularity, focus               |
| CTA buttons    | Gold bg, navy text         | None                | High contrast, action           |
| Footer         | Navy primary               | Gold links          | Grounding, secondary actions    |

## Spacing & Rhythm

- Padding scale: 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem (responsive: mobile ×0.75, desktop ×1.25)
- Gap between sections: 4rem–6rem
- Card gap: 1.5rem–2rem
- Asymmetric padding: full-width sections with inner max-width 1200px (md/lg breakpoints)

## Component Patterns

- **Buttons**: Gold accent bg (hover: darker gold), navy text, 0.5rem radius, no shadow (corporate restraint)
- **Cards**: White bg, navy border-l (2px gold), shadow-corporate, rounded-sm
- **Nav**: Navy bg, white text, gold active state, sticky on scroll
- **Forms**: White input, navy border, gold focus ring
- **Hero**: Navy bg with subtle gold linear gradient text overlay

## Motion

- Hover: opacity shift, subtle scale (1.02), no bounce
- Transitions: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` (ease-out, corporate feel)
- No animations on page load (professional restraint)

## Constraints

- No arbitrary colors; use only CSS tokens (oklch vars)
- Max 3 shadows (subtle, corporate); no glow effects
- Border radius: 0, 0.5rem, 1rem (no ultra-rounded)
- No gradients except hero text/backgrounds (sparingly)
- Full-width sections; content centers within 1200px max-width
- Mobile-first: scale padding/font down, scale back up on md/lg
- Heading line-height: 1.1 (tight, professional); body line-height: 1.6 (readable)

## Signature Detail

Gold accents on section dividers, button focuses, and card left borders — small, refined gestures that reinforce the premium brand perception and corporate trust.

## Theme

Light (default). Dark mode available; navy deepens, white lighten, gold shifts warm.

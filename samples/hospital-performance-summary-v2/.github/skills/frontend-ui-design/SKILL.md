---
name: frontend-ui-design
description: Build and design a small vanilla frontend with professional healthcare-inspired visual cues.
---

# Frontend UI Design Skill

## Purpose

Use this skill when implementing, designing, or reviewing the browser UI for this standalone workshop app.

The goal is to create a small frontend that makes API output visible, easy to explain in a workshop, and styled with a **professional healthcare-group tone** inspired by public website style cues. Keep the implementation original, lightweight, and suitable for a live coding exercise.

Do not copy source code, images, logos, icon fonts, proprietary fonts, or exact layout assets. Recreate the general style with simple CSS and semantic HTML.

Do not use real-world branding in the generated app UI. The app must remain a fictional workshop demo and must not imply endorsement, ownership, or affiliation.

## Implementation procedure

1. Read the feature spec and backend response shape.
2. Create the smallest public frontend files needed by the spec.
3. Build the UI around:
   - clear user inputs
   - readable result sections
   - loading state
   - empty state
   - error state
4. Fetch data from the local backend endpoints defined by the spec.
5. Render the fields and state labels required by the spec.
6. Keep the implementation plain and readable.
7. Apply the visual guidance below only after the core UI behavior is clear.

## Observed screenshot style cues

Use only these summarized visual cues. Do not fetch, scrape, inspect source, hotlink assets, or copy files from the live website when generating the demo UI.

- **Tone**: professional, calm, institutional, healthcare-oriented, information-first.
- **Overall composition**: full-width burgundy top navigation, a pale blue header/slogan band, then a centered white rounded content shell.
- **Page background**: very light blue gradient or tint around the main content, not a dark dashboard background.
- **Navigation**: burgundy bar with white menu text, a darker burgundy active button, and a simple search icon/action area.
- **Header band**: generous vertical space, logo-like area on the left, muted gray centered slogan text, compact language/action area on the right. For this demo, use text or simple shapes instead of copied logos/flags.
- **Hero area**: large rounded banner/card near the top of the white shell. Use a simple original gradient or placeholder panel instead of medical imagery.
- **Card grid**: large warm beige-gray cards in a 4-column desktop grid, with rounded corners, centered dark navy icons, and bold dark blue text.
- **Primary UI color**: burgundy/red, close to `#a51f3d`, mainly for the top navigation and restrained call-to-action accents.
- **Information color**: deep navy/blue, close to `#07354a` or `#004976`, for icons, headings, and important text.
- **Supporting neutrals**: white, very light gray (`#f5f5f5`), warm beige-gray (`#eae6df`), and soft blue tints (`#e2ecff`, `#d9edf7`).
- **Typography**: clean sans-serif with a slightly condensed corporate feel. Use a local/system fallback such as `Arial`, `Segoe UI`, or `system-ui`; do not import proprietary fonts.
- **Interaction feel**: subtle hover transitions. Cards may shift from warm beige to dark navy with light text, while buttons can move from burgundy to darker burgundy.

## Recommended design system

Use CSS custom properties:

```css
:root {
  --color-nav: #a51f3d;
  --color-nav-active: #5b1930;
  --color-info: #004976;
  --color-info-dark: #07354a;
  --color-accent: #ae103b;
  --color-surface: #ffffff;
  --color-muted-surface: #f5f5f5;
  --color-warm-surface: #eae6df;
  --color-soft-blue: #e2ecff;
  --color-page-blue: #d9edf7;
  --color-border-blue: #a5d6f2;
  --color-text: #333333;
  --color-muted-text: #555555;
}
```

Recommended shape:

- page background: pale blue tint or gradient
- top navigation: burgundy bar, white text, darker active action
- main container: max-width around `1100px` to `1200px`, centered, white, rounded
- cards: warm beige-gray surface, `10px` to `16px` radius
- card hover: dark navy background with light text, or subtle shadow if hover inversion feels too strong
- icons/badges: dark navy line icons or simple circular badges
- headings and card text: deep navy/blue, bold
- important warnings or attention states: burgundy/red accent, used sparingly

## Suggested page structure

1. **Header band**
   - burgundy top strip with app sections/actions
   - white or pale blue identity/slogan area below it
   - no copied logo; use plain text app name or an original mark
2. **Hero or intro panel**
   - large rounded banner inside the white shell
   - original gradient, abstract shape, or short explanatory text
3. **Control card**
   - simple controls required by the spec
   - primary action button in burgundy or deep navy
4. **Main content grid**
   - cards or rows for results
   - important values clearly grouped
   - status labels with text, not color alone
5. **Supporting info**
   - data/source note
   - fictional demo data disclaimer

## Button guidance

- Primary button: burgundy or deep navy background, white text.
- Hover/focus: darker burgundy or dark navy.
- Keep focus outlines visible.
- Avoid gradients unless they remain subtle.

Example style direction:

```css
.button-primary {
  border: 0;
  border-radius: 999px;
  background: var(--color-nav);
  color: white;
  font-weight: 700;
  padding: 0.75rem 1.1rem;
}

.button-primary:hover,
.button-primary:focus-visible {
  background: var(--color-nav-active);
}
```

## Card guidance

- Prefer simple card grids over complex charts.
- Use rounded corners and generous spacing.
- Use dark navy line icons, emoji-free symbols, or simple initial badges when they help scanning.
- Keep numeric values large enough to read in a workshop room.
- For a screenshot-like layout, use 2 columns on tablets and 4 columns on wide screens.

## Accessibility requirements

- Do not rely on color alone for status.
- Keep text contrast high.
- Use semantic headings and landmarks.
- Connect labels to inputs.
- Use buttons or form submission for loading data.
- Keep error messages visible and understandable.
- Use visible focus styles.
- Keep motion subtle and non-essential.

## Avoid

- Copying real-world logos, images, CSS files, font files, or exact markup.
- Overly clinical visuals, patient imagery, or real healthcare content.
- Heavy dashboards, chart libraries, animation-heavy hero sections, or visual effects that distract from the spec-driven exercise.
- Real-world branded headers, wordmarks, copied slogans, or any text implying the demo is an official product.
- React, Vite, bundlers, CSS frameworks, complex state management, and build steps unless the spec explicitly requires them.

## Review checklist

Before accepting generated UI, verify:

1. The UI uses original HTML and CSS.
2. No real-world logos, images, fonts, CSS files, copied code, hotlinked assets, copied slogans, or branded text are present.
3. The style follows the summarized cues: burgundy top navigation, pale blue page/header area, centered white shell, large hero panel, warm beige cards, dark navy icons/text, readable spacing, and calm professional tone.
4. The app remains clearly fictional and workshop-oriented.
5. Accessibility basics are present: labels, contrast, semantic structure, visible focus states, and text labels for status.

## Useful prompt

```text
Use the frontend-ui-design skill.
Build a vanilla HTML/CSS/JS UI for the API described in the spec, then apply an original healthcare-inspired style.
Use a burgundy top navigation, pale blue page/header area, centered white shell, large hero panel, warm beige cards, dark navy icons/text, accessible controls, no copied assets, and no real-world branding.
```

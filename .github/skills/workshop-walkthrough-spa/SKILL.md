---
name: workshop-walkthrough-spa
description: Create, update, or review the local facilitator walkthrough SPA for this GitHub Copilot workshop.
---

# Workshop Walkthrough SPA Skill

## Purpose

Use this skill when creating, updating, redesigning, or reviewing the local walkthrough SPA in `facilitator/walkthrough`.

The goal is to turn the numbered Markdown workshop sections into a facilitator-friendly and attendee-friendly local SPA while keeping the Markdown files as the source of truth.

## Project scope

This skill applies to:

- `facilitator/walkthrough/SPEC.md`
- `facilitator/walkthrough/index.html`
- `facilitator/walkthrough/styles.css`
- `facilitator/walkthrough/app.js`
- `facilitator/walkthrough/README.md`
- related facilitator documentation that links to the walkthrough

Do not introduce Git workflow, pull request, CI/CD, deployment, analytics, package managers, or production app architecture unless explicitly requested.

## Core requirements

- Create or update `SPEC.md` first when the behavior, design, or content model changes.
- Keep the SPA dependency-free: plain HTML, CSS, and JavaScript only.
- Keep it runnable from the repository root with:

  ```bash
  python3 -m http.server 4173
  ```

- Preserve the numbered workshop flow from `00-start-here` through `13-token-optimization`.
- Keep lesson content concise in the SPA and render the related Markdown README inline for full detail.
- Keep hash navigation for welcome and lessons, for example `#/welcome` and `#/lesson/05`.
- Keep previous/next lesson navigation and left/right keyboard navigation.
- Keep local progress tracking with `localStorage`.
- Celebrate newly completed lessons with a short dependency-free confetti burst that respects `prefers-reduced-motion`.
- Keep facilitator/learner mode available from icon controls, with clearly different page structures.
- Treat facilitator mode as **audience-facing presentation view**. Do not show internal facilitator notes or private guidance in this mode.
- Treat learner mode as **self-paced workshop view**. Include enough guidance and README detail for attendees to work independently.
- Keep GitHub and Microsoft logo badges visible in the persistent top bar.

## Visual design rules

- Use a clean GitHub/Primer-style system font stack:

  ```css
  -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"
  ```

- Use flat dark surfaces, hairline borders, spacing, and typography for hierarchy.
- Do not use gradients, aurora effects, decorative glow fields, external fonts, CDN assets, or network-loaded images.
- Prefer small inline SVG icons with explicit `width`, `height`, `viewBox`, and `fill="currentColor"` where appropriate.
- Keep top-bar controls icon-only with accessible `aria-label` and `title` attributes.
- Keep the welcome page focused on the hands-on end-to-end GitHub Copilot journey.
- Keep the pair-programming loop visible as compact icon chips: understand, plan, implement, verify, review, refine.
- Keep the welcome page context panels that explain how agents change the unit of work and how the AI economy changes delivery; keep them collapsible and collapsed by default.
- Do not add a top search bar unless the user explicitly asks to restore search.

## Content model

Each lesson entry in `app.js` should include:

- `id`
- `slug`
- `title`
- `time`
- `phase`
- `summary`
- `mainMessage`
- `presentationPoints`
- `learnerCue`
- `demo`
- `tryIt`
- `takeaway`
- `tags`
- `source`
- `bridge`

Use the numbered section READMEs and the root workshop flow as the content source. Keep SPA text presentation-friendly; link or render Markdown for full detail.

Derive facilitator/presentation view from audience-safe fields such as `mainMessage`, `summary`, `presentationPoints`, `demo`, `tryIt`, `takeaway`, and `bridge`. Do not render private facilitator guidance in presentation view.

Facilitator mode should include key README content that is useful to show to the audience, such as what a section covers, what it intentionally skips, prerequisites, or the main exercise path. It should also expose an `Open README` button that renders the selected section Markdown inline instead of opening a separate window.

## Implementation procedure

1. Read `facilitator/walkthrough/SPEC.md`, `facilitator/walkthrough/README.md`, and the current SPA files if they exist.
2. Read the root `README.md` workshop flow and relevant numbered section READMEs when lesson content changes.
3. If requirements changed, update `SPEC.md` before implementation.
4. Implement the smallest complete SPA change in the existing static files.
5. If changing asset URLs, add a cache-busting query string so browser cache does not mix old CSS with new HTML.
6. Keep Markdown rendering local:
   - fetch README files by relative path from the local static server
   - escape HTML before rendering
   - support common workshop Markdown: headings, paragraphs, lists, fenced code, inline code, emphasis, and links
7. Preserve accessibility basics:
   - semantic landmarks
   - clear focus states
   - usable button labels via `aria-label`
   - `prefers-reduced-motion`
8. Update `facilitator/README.md` or `facilitator/walkthrough/README.md` when run instructions or location changes.

## Validation procedure

Run these checks from the repository root:

```bash
node --check facilitator/walkthrough/app.js
```

Check that gradients are not present:

```bash
if grep -n 'gradient' facilitator/walkthrough/styles.css facilitator/walkthrough/index.html facilitator/walkthrough/app.js; then
  echo 'Gradient usage found' >&2
  exit 1
fi
```

Smoke test with a local static server:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Then verify, using bounded `curl` checks in another shell:

```bash
curl -fsS http://127.0.0.1:4173/facilitator/walkthrough/ >/tmp/walkthrough.html
curl -fsS http://127.0.0.1:4173/facilitator/walkthrough/styles.css >/tmp/walkthrough.css
curl -fsS http://127.0.0.1:4173/facilitator/walkthrough/app.js >/tmp/walkthrough.js
curl -fsS http://127.0.0.1:4173/00-start-here/README.md >/tmp/walkthrough-readme.md
```

Stop the temporary server after validation.

## Quality checklist

- The walkthrough still works with no install step.
- The welcome page explains the workshop as a hands-on GitHub Copilot journey from start to finish.
- The welcome page includes two compact four-card context sections, collapsed by default: agents changing the unit of work and the new AI economy.
- GitHub and Microsoft logo badges remain visible after leaving the welcome page.
- The top bar is not crowded and the logo badges are vertically centered.
- The lesson list includes welcome plus every numbered section in order.
- The selected facilitator view shows audience headline, section purpose, key README points, live demo, audience prompt/action, takeaway, topic transfer, tags, and an Open README button that renders Markdown inline.
- The selected learner view shows goal, self-paced guidance, hands-on exercise, completion check, topic transfer, tags, and inline README preview.
- Marking a lesson complete shows a tasteful local confetti burst, while marking it incomplete does not.
- Prompt/action text remains copy-ready and beginner-friendly.
- The design supports live presentation and self-paced attendance without becoming a production app.

## Example prompts

```text
Use the workshop-walkthrough-spa skill.
Create a local walkthrough SPA for the numbered workshop sections under facilitator/walkthrough.
Write or update SPEC.md first, then implement the static SPA.
```

```text
Use the workshop-walkthrough-spa skill.
Review facilitator/walkthrough for workshop fit, local run safety, no-gradient styling, inline README rendering, and top-bar logo consistency.
```

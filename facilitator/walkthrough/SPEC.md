# Workshop Walkthrough SPA Spec

## Purpose

Create a local, dependency-free SPA that turns the repository's numbered Markdown workshop sections into a facilitator-friendly and attendee-friendly guided journey.

The SPA should not replace the Markdown source files. It should make the workshop easier to present live and easier to follow self-paced by adding visual flow, guided navigation, progress cues, transitions, and copy-ready actions.

## Audience

- Facilitators who need a presentation-style control surface during a live workshop.
- Attendees who want a self-driven path through the same lesson structure.

## Design principles

- Preserve the repository's numbered lesson flow from `00-start-here` through `13-token-optimization`.
- Make the pair-programming loop visible: understand, plan, implement, verify, review, refine.
- Use a clean GitHub-style product workspace aesthetic: dark surfaces, hairline borders, precise spacing, and task-app navigation.
- Use the GitHub/Primer system font stack used by GitHub Pages-style documentation.
- Avoid gradients; use flat surfaces, borders, spacing, and typography for hierarchy.
- Use visual effects to create momentum, not distraction.
- Keep the app runnable locally with minimal setup and no package install.
- Keep content concise enough to support live delivery.
- Link back to the Markdown section for full detail instead of duplicating every paragraph.

## Information architecture

The SPA contains:

1. A welcome screen for the full workshop story.
2. A lesson timeline for direct navigation to each numbered section.
3. A main stage for the selected lesson.
4. Facilitator and learner cues for each lesson.
5. Prompt/action cards that attendees can copy or repeat.
6. A transition bridge that explains how the current lesson connects to the previous and next topics.
7. A progress panel persisted in local storage.

## Functional requirements

- Show all numbered workshop sections in order.
- Provide direct navigation to individual sections.
- Support hash-based deep links so a facilitator can open a specific lesson.
- Provide previous and next navigation.
- Support keyboard navigation with left and right arrows.
- Provide a facilitator/learner mode toggle that changes the emphasis of cues.
- Let users mark lessons as complete and persist that state locally.
- Provide a reset progress action.
- Keep GitHub and Microsoft logo badges visible in the persistent top bar.
- Provide copy buttons for prompt/action cards.
- Render each lesson's source Markdown README inline, with a source-file link as a fallback.
- Work from a local static server without build tooling.

## Visual and interaction requirements

- Use a polished presentation look with flat dark surfaces, thin borders, restrained motion, and card transitions.
- Make the active section feel like a slide or stage, not a plain document.
- Provide clear focus states and readable contrast.
- Respect `prefers-reduced-motion`.
- Be responsive for projector, laptop, and tablet widths.
- Avoid external fonts, CDN assets, or network dependencies.

## Content model

Each lesson entry should include:

- `id`: numeric section id, for example `05`.
- `slug`: repository folder name.
- `title`: short presentation title.
- `time`: suggested duration.
- `phase`: workshop phase.
- `summary`: short explanation of the lesson.
- `mainMessage`: one clear idea the audience should remember.
- `demo`: suggested live demo.
- `tryIt`: attendee action or prompt.
- `takeaway`: concise closing point.
- `tags`: searchable topic labels.
- `source`: relative path to the Markdown source.

## Local run requirements

The walkthrough should be runnable from the repository root with:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173/facilitator/walkthrough/
```

Opening `index.html` directly may work in some browsers, but the supported path is a local static server.

## Acceptance criteria

- `facilitator/walkthrough/index.html` loads the SPA shell.
- `facilitator/walkthrough/styles.css` provides the presentation styling and responsive layout.
- `facilitator/walkthrough/app.js` contains the lesson data and SPA behavior.
- Lesson pages render the related Markdown README inline.
- The app exposes every numbered lesson from `00` to `13`.
- Hash links, previous/next buttons, and keyboard arrows move between lessons.
- Completion state survives a page refresh.
- The app has no build step and no external runtime dependency beyond a local static server.

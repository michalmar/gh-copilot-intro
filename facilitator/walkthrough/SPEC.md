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

1. A welcome screen for the full workshop story, including context panels about how agentic work and AI economics change software delivery.
2. A lesson timeline for direct navigation to each numbered section.
3. A main stage for the selected lesson.
4. Two distinct lesson modes:
   - **Facilitator / presentation view**: audience-facing section content suitable to project on screen, with no private facilitator notes.
   - **Learner / self-paced view**: learner-facing guidance with enough detail to complete the hands-on workshop independently.
5. Prompt/action cards that attendees can copy or repeat.
6. A transition bridge that explains how the current lesson connects to the previous and next topics.
7. A progress panel persisted in local storage.

## Functional requirements

- Show all numbered workshop sections in order.
- Provide direct navigation to individual sections.
- Support hash-based deep links so a facilitator can open a specific lesson.
- Provide previous and next navigation.
- Support keyboard navigation with left and right arrows.
- Provide a facilitator/learner mode toggle that changes the page structure, not only a label.
- In facilitator mode, show presentation-style information: headline, section purpose, audience-facing key points from the README, live demo, audience prompt/action, takeaway, and topic transfer.
- In learner mode, show self-paced information: goal, learner guidance, hands-on exercise, completion check, topic transfer, and inline README detail.
- Let users mark lessons as complete and persist that state locally.
- Provide a reset progress action.
- Keep GitHub and Microsoft logo badges visible in the persistent top bar.
- Provide copy buttons for prompt/action cards.
- Provide a visible button to open the underlying README for every lesson. In facilitator mode, this renders the Markdown inside the current page instead of opening a separate window.
- On the welcome screen, show two audience-facing context sections as collapsible panels that are collapsed by default:
  - **Agents change the unit of work** with four cards: Assistant -> agent, Sync -> async, Spec -> intent, and 1:n -> m:n.
  - **The new AI economy** with four cards: AI does not sleep, Cost / value, People + tokens, and Value is not the model.
- In facilitator mode, keep README detail out of the projected lesson view by default, then render it inline when the facilitator chooses **Open README**.
- In learner mode, render each lesson's source Markdown README inline, with a source-file link as a fallback.
- Fetch inline README content fresh from the local static server so recently edited section Markdown is not hidden by stale browser or SPA memory cache.
- Render common workshop Markdown inline, including headings, paragraphs, lists, fenced code, inline code, links, emphasis, and pipe tables.
- When a user marks a lesson complete, show a short, flat-color confetti celebration that respects `prefers-reduced-motion`.
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
- `presentationPoints`: audience-facing key points from the underlying README.
- `learnerCue`: self-paced guidance for attendees.
- `demo`: suggested live demo.
- `tryIt`: attendee action or prompt.
- `takeaway`: concise closing point.
- `tags`: searchable topic labels.
- `source`: relative path to the Markdown source.
- `bridge`: how the lesson connects to adjacent topics.

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
- Facilitator mode is audience-facing, shows key README points, exposes an Open README button that renders Markdown inline, and does not show internal facilitator guidance.
- Learner mode is self-paced and renders the related Markdown README inline.
- The app exposes every numbered lesson from `00` to `13`.
- Hash links, previous/next buttons, and keyboard arrows move between lessons.
- Completion state survives a page refresh.
- The app has no build step and no external runtime dependency beyond a local static server.

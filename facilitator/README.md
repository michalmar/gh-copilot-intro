# Facilitator guide

Use this repository as a **narrated walkthrough** rather than as reading material. The strongest pattern is:

1. explain the goal,
2. show one live example,
3. let attendees repeat the move on a smaller task,
4. debrief what made the interaction effective.

For a full-day delivery that combines this GitHub Copilot workshop with Azure AI Foundry content, use the [full-day agenda](./full-day-agenda.md).

## Before the session

### Required

- GitHub accounts with Copilot access
- VS Code with GitHub Copilot and GitHub Copilot Chat enabled
- Node.js available locally
- Python and `uv` available locally

### Nice to have

- Copilot CLI installed for all attendees
- One prepared repository or folder per attendee
- A short backup recording or screenshots in case login/setup slows down

## Suggested pacing

| Segment | Guidance |
| --- | --- |
| 00-04 | Keep these interactive and conversational. Ask the room what they already use Copilot for. |
| 05 | Spend the most time here. This is where attendees get a quick success. |
| 06-09 | Treat these as “how to scale Copilot from personal use to team use.” |
| 10-12 | Demo first. If setup is slow, keep CLI hands-on and Azure deployment optional. |

## Golden path: Node sample

Use this sequence when you want a reliable pair-programming demo:

1. Ask Copilot to explain `samples/node-feedback-api` and the current tests.
2. Ask for a plan for `GET /feedback/:id`, including success and not-found behavior.
3. Ask Copilot to implement only that endpoint and its tests.
4. Run `npm test` in the sample.
5. Ask Copilot to review the change for bugs, missing edge cases, and inconsistent response shape.
6. Debrief which parts of the answer came from context, constraints, and tests.

## Optional golden path: vibe-coding to spec-driven development

Use this when you want learners to feel the difference between under-specified prompting and spec-driven development. Keep the repository root open while comparing v1 and v2. Open `samples/hospital-performance-summary-v2` as the focused workspace only when you want its local `AGENTS.md`, `.github/instructions`, and `.github/skills` to apply directly.

1. Focus on `samples/hospital-performance-summary-v1` and ask Copilot for a small local app from the data only, with minimal safety guardrails.
2. Debrief which decisions Copilot invented: stack, endpoints, calculations, UI, edge cases, and tests.
3. Give attendees the short goal brief from [09-spec-driven-development](../09-spec-driven-development/README.md) and ask Copilot to draft a feature spec before coding.
4. Ask Copilot to verify the draft spec against the data and identify one expected row or first API test.
5. Open `samples/hospital-performance-summary-v2` and ask Copilot to read `AGENTS.md`, `.github/copilot-instructions.md`, `.github/instructions`, `.github/skills`, and `specs/daily-summary/README.md`.
6. Ask Copilot to summarize how the v2 spec pack removes ambiguity compared with v1.
7. For a short live demo, use the `backend-api-builder` skill and ask for the smallest useful API slice plus one test.
8. Inspect the new API behavior and use the `spec-reviewer` skill to review that slice against the relevant part of the spec.
9. For an extended exercise, continue into the remaining API and frontend behavior with the frontend UI skill.

## What to emphasize

- Copilot is strongest when the task is concrete.
- Context beats clever wording.
- Specs and instructions reduce rework.
- Fast review loops are better than giant prompts.
- The developer stays responsible for correctness and tradeoffs.
- Pair-programming with Copilot means steering, checking, and refining, not accepting the first answer.

## Bad answer recovery

If Copilot gives an answer that is too broad or too complex, keep the moment visible and recover with a better prompt:

```text
That answer is too broad for this workshop sample. Keep the current style, avoid new dependencies, and suggest the smallest safe change with one test.
```

If the answer is plausible but risky, ask:

```text
What assumptions did you make? Which parts should I verify before accepting this change?
```

## If time gets tight

Trim in this order:

1. Reduce attendee hands-on time in the Python sample.
2. Keep Spaces as a short demo instead of a full exercise.
3. Keep CLI to plan mode, `@file`, and one implementation prompt.

Do **not** cut setup verification or the “effective usage” section. Those are what make the rest of the workshop land.

## Demo safety tips

- Keep one terminal and one editor window ready before the session starts.
- Use the sample prompts from [reference/demo-prompts.md](../reference/demo-prompts.md).
- For live coding, ask for a plan before asking for changes.
- If Copilot gives a weak answer, use that moment to teach how to add context and constraints.

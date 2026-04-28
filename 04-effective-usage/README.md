# 04 - Effective usage

## Main message

**Copilot quality is mostly a context and steering problem.**

## A practical prompt template

Use this structure:

```text
Goal
Context
Constraints
Definition of done
```

## The pair-programming loop

Use Copilot in small, reviewable loops:

1. **Understand**: ask Copilot to explain the current code or problem.
2. **Plan**: ask for the smallest safe implementation plan.
3. **Implement**: ask for one focused change, not a bundle of changes.
4. **Verify**: run tests or ask what should be tested.
5. **Review**: ask Copilot to inspect the diff for bugs and missing edge cases.
6. **Refine**: tighten the prompt or code based on what you learn.

The goal is not a perfect first answer. The goal is a useful conversation that keeps the developer in control.

## Example

Instead of:

```text
Add filtering.
```

Try:

```text
Add filtering by topic and minimum score to the feedback list endpoint in samples/node-feedback-api.
Reuse the existing response shape.
Keep the code simple and update tests.
```

## Better habits

- attach the relevant file
- ask for a short plan before a bigger change
- tell Copilot what to preserve
- ask for tests when behavior changes
- iterate with smaller corrections instead of restarting from scratch

## Model selection guidance

- use a faster, lower-cost model for explanation, search, quick drafts, and lightweight edits
- use a stronger reasoning model when the task spans multiple files, has tricky tradeoffs, or needs a plan
- if Copilot gets stuck, changing the model can be a practical second opinion

## Questions worth asking

- “What assumptions are you making?”
- “What would you change first?”
- “What are the edge cases?”
- “What is the smallest safe implementation?”
- “Review the change for bugs, weak tests, and inconsistent behavior.”

## Anti-patterns

- vague prompts
- no acceptance criteria
- too much context with no focus
- giant multi-feature prompts
- accepting code without reading the change

## If Copilot gives a weak answer

Do not restart with another vague prompt. Add steering:

```text
That answer is too broad. Keep the change beginner-friendly, preserve the current API shape, and suggest only the smallest next step with tests.
```

```text
Review your previous answer against the existing code style. What would you remove or simplify?
```

## Quick scorecard

After a Copilot interaction, ask:

1. Did I provide the relevant file or spec?
2. Did I state constraints and definition of done?
3. Did I ask for a plan before a larger edit?
4. Did I verify behavior?
5. Did I review the result instead of accepting it blindly?

## Demo idea

Show the difference between these two prompts:

```text
Make this API better.
```

```text
Review samples/node-feedback-api/src/app.js and suggest 3 improvements that keep the sample beginner-friendly and easy to demo live.
```

## Takeaway

Be explicit about **intent, boundaries, success criteria, and review**. That is the single biggest upgrade in Copilot usage.

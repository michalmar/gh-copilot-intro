# Lightweight engineering constitution

In this workshop, **constitution** means the shared rules that make Copilot usage more consistent across a team.

Think of it as the bridge between:

- what your team values,
- how you want code and docs to look,
- and how you want Copilot to behave when helping with the work.

## Simple constitution layers

1. **Principles**: clarity over cleverness, small safe changes, explicit tests, readable docs
2. **Repository instructions**: what applies to the whole repo
3. **Path-specific instructions**: what applies only to Python, JavaScript, docs, or a service area
4. **Specs and templates**: how new work is described before implementation

## Why teams use this

Custom instructions are most valuable when they capture standards that would otherwise appear as repeated review comments:

- “Please add a test.”
- “Do not introduce another dependency.”
- “This API response shape must stay stable.”
- “Use our design system components.”
- “Avoid clever abstractions in onboarding code.”
- “Document the tradeoff before changing architecture.”

When these expectations are written down, Copilot can consider them before it suggests a plan or edits code.

## Example professional standards

| Standard | Good instruction |
| --- | --- |
| Testing | “Every behavior change should include a focused test for visible behavior.” |
| Maintainability | “Prefer simple functions and explicit names over generic abstractions.” |
| Security | “Validate external input at boundaries and never log secrets or tokens.” |
| API design | “Keep existing response shapes stable unless the spec explicitly changes them.” |
| Accessibility | “Frontend changes must preserve keyboard navigation and accessible labels.” |
| Dependencies | “Use existing libraries first; explain why a new dependency is needed.” |
| Documentation | “Document setup, commands, and user-facing behavior before internals.” |

## How the layers work together

Use the layers like this:

1. **Constitution** says what the team values.
2. **Repository instructions** turn those values into defaults for this repo.
3. **Path-specific instructions** adapt the defaults to each stack.
4. **Specs** define the exact behavior for a feature.
5. **Copilot prompts** ask for the next small step using that context.

Example:

```text
Constitution: Prefer small, testable changes.
Repository instruction: Keep samples beginner-friendly and runnable locally.
JavaScript instruction: Use Express, Vitest, and simple API contracts.
Spec: Add GET /feedback/:id with not-found behavior.
Prompt: Implement the spec and explain how the repo instructions shaped the solution.
```

## In this repository

- [`AGENTS.md`](../AGENTS.md) gives agent-oriented repo guidance.
- [`.github/copilot-instructions.md`](../.github/copilot-instructions.md) gives repository-wide Copilot guidance.
- [`.github/instructions/javascript.instructions.md`](../.github/instructions/javascript.instructions.md) and [`.github/instructions/python.instructions.md`](../.github/instructions/python.instructions.md) show path-specific instructions.

## Main teaching point

Without a constitution, Copilot helps one prompt at a time.

With a constitution, Copilot starts to behave more like a teammate that understands your project's defaults.

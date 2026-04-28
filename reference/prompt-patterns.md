# Prompt patterns that work

## Good default structure

Use this pattern when you want reliable results:

```text
Goal
Context
Constraints
Definition of done
```

## Pair-programming pattern

Use this when Copilot should work with you instead of jumping straight to code:

```text
Understand the current code.
Propose a short plan.
Implement one focused change.
Verify with tests or checks.
Review the change for bugs and edge cases.
Refine only what matters.
```

## Examples

| Situation | Weak prompt | Stronger prompt |
| --- | --- | --- |
| Explain code | “Explain this.” | “Explain this file for a new teammate. Focus on data flow, extension points, and any risky assumptions.” |
| Add a feature | “Add filtering.” | “Add filtering by topic and minimum score to the list endpoint. Reuse the existing response shape and add tests.” |
| Fix a bug | “Fix this error.” | “The POST route returns 400 when score is omitted, but score should be required with a clear validation message. Find the cause, propose the smallest safe fix, and update tests.” |
| Write docs | “Document this project.” | “Create a short README section for local setup, run commands, and the current API endpoints. Keep it to the point.” |

## Practical habits

- Attach the relevant file, not the whole world.
- Ask for a short plan before big edits.
- Give examples of the output shape you want.
- Tell Copilot what to preserve.
- Prefer small loops over giant prompts.
- Ask Copilot to review the diff before you accept it.

## Quick scorecard

Use this after a Copilot answer:

1. Is the task narrow?
2. Is the relevant context attached?
3. Are constraints and success criteria clear?
4. Is there a verification step?
5. Did I review the output?

## Anti-patterns

- “Make this better.”
- “Do the whole app.”
- Prompts with no success criteria.
- Asking for changes without giving the file, error, or expected behavior.
- Accepting output without reading the diff.

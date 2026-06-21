# Hospital performance summary v2

This is the guided version of the hospital performance exercise. It starts from the same kind of fictional data as v1, but adds the context an enterprise team would normally want before asking Copilot to implement.

## What this folder demonstrates

| Artifact | What it gives Copilot | Contrast with v1 |
| --- | --- | --- |
| `specs/daily-summary/README.md` | product behavior, API contract, data rules, edge cases, and acceptance criteria | Copilot no longer invents what "done" means |
| `AGENTS.md` | local working rules and exercise guardrails | the app stays small, local, and workshop-safe |
| `.github/copilot-instructions.md` | always-on guidance for this sample | generated code should stay clear, deterministic, and dependency-light |
| `.github/instructions/*.instructions.md` | focused backend, frontend, and data rules | different parts of the app get the right constraints |
| `.github/skills/*/SKILL.md` | repeatable procedures for building and reviewing slices | attendees can invoke a role-like workflow instead of writing one large prompt |

## Suggested workshop flow

1. Compare this folder with `../hospital-performance-summary-v1`.
2. Ask Copilot which decisions are explicit here but were missing in v1.
3. Ask Copilot to summarize the spec before coding.
4. Implement one small backend slice with a focused test.
5. Review the change against the spec and acceptance criteria.

## Useful prompts

```text
Explain how this folder guides Copilot differently than samples/hospital-performance-summary-v1.
For each artifact, name one implementation decision it controls.
```

```text
Read the spec pack in this folder. Which decisions should come from the spec, which should come from instructions, and which should be handled by a skill?
```

```text
Use the spec-reviewer skill to compare an implementation against specs/daily-summary/README.md.
Report only correctness, demo-safety, or teaching-clarity issues.
```

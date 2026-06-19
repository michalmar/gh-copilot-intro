# 09 - Spec-driven development

## Main message

**Specs are one of the best ways to turn Copilot from a text generator into a reliable implementation assistant.**

Simple framing: a spec is a **shared task brief**. It lets Copilot pair with you from clear requirements instead of guessing what "done" means.

## Why specs help

- they reduce ambiguity
- they capture acceptance criteria
- they separate design from implementation
- they make review easier

## A simple flow

1. describe the problem
2. define constraints and acceptance criteria
3. ask Copilot to summarize the spec back to you
4. ask for a short implementation plan
5. implement in small steps
6. verify behavior
7. ask Copilot to review the result against the spec

## Samples in this repository

Use one of these specs depending on the demo style:

- [`samples/python-ticket-analyzer/specs/needs-attention/README.md`](../samples/python-ticket-analyzer/specs/needs-attention/README.md)
- [`samples/hospital-performance-summary-v2/specs/daily-summary/README.md`](../samples/hospital-performance-summary-v2/specs/daily-summary/README.md)

The Python sample is best for a compact CLI flow. The hospital performance sample is an optional standalone exercise for building a small backend + frontend app from a spec.

## Demo prompts

```text
Read the feature spec in samples/python-ticket-analyzer/specs/needs-attention/README.md.
Summarize the required behavior, edge cases, and acceptance criteria before suggesting code changes.
```

```text
Open samples/hospital-performance-summary-v2 as the workspace root.
Read AGENTS.md, .github/copilot-instructions.md, .github/instructions, .github/skills, and specs/daily-summary/README.md.
Summarize the app goal, backend behavior, frontend behavior, edge cases, and acceptance criteria before suggesting code changes.
```

For a short live demo, keep the first slice small:

```text
Use the backend-api-builder skill.
Choose the smallest useful API slice from the spec, implement it with one focused API test, and do not build the full UI yet.
```

## What to teach here

- ask Copilot to restate the spec before coding
- watch for hidden assumptions
- keep “definition of done” visible
- use tests as part of the spec feedback loop

## Try it

Ask Copilot to:

1. summarize the spec
2. propose a plan
3. implement one focused slice
4. add tests
5. run or inspect the app
6. review the implementation against the acceptance criteria

## Takeaway

Specs are one of the easiest ways to make Copilot output more predictable and more reviewable.

# 09 - Spec-driven development

## Main message

**Specs are one of the best ways to turn Copilot from a text generator into a reliable implementation assistant.**

Simple framing: a spec is a **shared task brief**. It lets Copilot pair with you from clear requirements instead of guessing what "done" means.

## Why specs help

- they reduce ambiguity
- they capture acceptance criteria
- they separate design from implementation
- they make review easier

## Learning path for this topic

Use the hospital performance sample as a three-step contrast:

1. **Start with pure vibe-coding.** Open [`samples/hospital-performance-summary-v1`](../samples/hospital-performance-summary-v1), which intentionally contains only data exports. Ask Copilot to build an app from the data and observe what it invents.
2. **Create a spec from goals.** Give attendees a short goal brief and ask Copilot to help turn it into a feature spec before writing code.
3. **Compare with a guided spec pack.** Open [`samples/hospital-performance-summary-v2`](../samples/hospital-performance-summary-v2), where the same idea has a spec, `AGENTS.md`, Copilot instructions, path-specific instructions, and custom skills.

The teaching point is not that vibe-coding cannot work. It often can. The point is that without a spec, Copilot must guess the app shape, stack, endpoints, data rules, edge cases, tests, and UI expectations.

Workspace tip: keep the repository root open while comparing v1, the attendee-created spec, and v2. Open `samples/hospital-performance-summary-v2` as the focused workspace only when you want its local `AGENTS.md`, `.github/instructions`, and `.github/skills` to apply directly.

## A simple flow

1. describe the problem
2. define constraints and acceptance criteria
3. ask Copilot to summarize the spec back to you
4. ask for a short implementation plan
5. implement in small steps
6. verify behavior
7. ask Copilot to review the result against the spec

## Exercise 1: pure vibe-coding from data only

Use the v1 folder as the deliberately under-specified starting point:

```text
Focus on samples/hospital-performance-summary-v1.
It contains only fictional aggregate data exports. Build a small local app that helps hospital leaders understand daily performance.
Keep it local only: no database, authentication, external APIs, deployment, CI/CD, or heavy frameworks.
Ask me for a short plan before writing files, then include the commands needed to run and check the app.
```

Ask attendees to notice what Copilot had to decide on its own:

- app stack and commands
- API shape, if any
- data join rules
- status rules and thresholds
- UI layout and language
- edge cases and error handling
- tests and definition of done

## Exercise 2: create a spec from a goal brief

Give attendees only this brief, then ask Copilot to help draft a spec:

- hospital leaders need a daily aggregate performance view
- use fictional Excel planning and Power BI actuals exports from the `data/` folder
- compare actual production with plan and with the previous week
- compare bed occupancy with plan
- highlight hospitals that are on track, on watch, or need attention
- provide a small local backend and browser UI
- keep the demo deterministic, testable, and free of patient or confidential data

Suggested prompt:

```text
Using this goal brief and the data files in samples/hospital-performance-summary-v1/data, help me create a feature spec before coding.
Ask clarifying questions first if anything affects behavior.
The spec should include problem, constraints, data assumptions, backend behavior, frontend behavior, edge cases, acceptance criteria, and a first-slice implementation plan.
Do not write application code yet.
```

Follow-up prompt:

```text
Review the draft spec as if you were a teammate. Which requirements are still ambiguous, hard to test, or likely to make Copilot invent behavior during implementation?
```

Verification prompt:

```text
Inspect the data files used by the draft spec.
List the hospitals and date range, choose one demo date, compute the expected values for one hospital by hand, and suggest the first API or helper test that would prove the spec is implementable.
Do not write application code yet.
```

## Exercise 3: compare with the guided v2 spec pack

Now open the curated v2 folder:

```text
Open samples/hospital-performance-summary-v2 as the focused workspace.
Explain how AGENTS.md, .github/copilot-instructions.md, .github/instructions, .github/skills, and specs/daily-summary/README.md guide Copilot differently than the data-only v1 folder.
Focus on decisions that are no longer left to guessing.
```

What to compare:

| Area | v1 data-only behavior | v2 guided behavior |
| --- | --- | --- |
| Product intent | inferred from file names and prompt | stated in the feature spec |
| App shape | Copilot chooses | spec defines local backend + frontend |
| API contract | likely invented | endpoints and response shape are specified |
| Data rules | inferred | join keys, calculations, sorting, and missing data behavior are defined |
| UX | custom design from prompt taste | accessible states and UI requirements are explicit |
| Review | subjective | acceptance criteria and spec-reviewer skill give a checklist |
| Enterprise fit | hard to govern | instructions and skills encode repeatable team expectations |

For a short live implementation demo, keep the first slice small:

```text
Use the backend-api-builder skill.
Read the spec and instructions, choose the smallest useful API slice, implement it with one focused API test, and do not build the full UI yet.
```

Then review against the spec:

```text
Use the spec-reviewer skill.
Review the recent changes against the local feature spec and report only issues that affect correctness, demo safety, or teaching clarity.
```

## Optional compact spec sample

If you need a shorter CLI-oriented demo instead of the hospital app, use [`samples/python-ticket-analyzer/specs/needs-attention/README.md`](../samples/python-ticket-analyzer/specs/needs-attention/README.md).

## What to teach here

- ask Copilot to restate the spec before coding
- watch for hidden assumptions
- keep “definition of done” visible
- use tests as part of the spec feedback loop
- make Copilot help write the spec, not only follow it
- use instructions and skills to make spec-driven work repeatable for teams

## Try it

Ask Copilot to:

1. build a first attempt from the v1 data-only folder
2. list the assumptions it had to invent
3. draft a spec from the short goal brief
4. compare the draft spec with the v2 curated spec pack
5. implement one focused v2 slice with tests
6. review the result against the acceptance criteria

## Takeaway

Specs make Copilot output more predictable and reviewable. Instructions and skills make that behavior repeatable across teams, which is why spec-driven development matters more in enterprise settings than pure vibe-coding.

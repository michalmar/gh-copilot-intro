# 07 - Constitution and instructions

## Main message

If you want Copilot to work well **for a team**, give it stable guidance, not just clever prompts.

Simple framing: constitutions and instructions are **team defaults**. They tell Copilot what good work looks like before anyone writes a prompt.

Good agentic work starts with durable context. Before asking Copilot to implement, show it the repository rules, product intent, specs, and shared planning context that a human teammate would also need.

## Useful layers

### 1. Constitution

Shared engineering principles and defaults. This is where you write what your team values: clarity, small changes, testability, security, accessibility, performance, or domain language.

### 2. Repository instructions

Guidance that applies to the whole repository. This is the “how we work here” layer: project goals, scope boundaries, preferred workflows, documentation style, testing expectations, and things Copilot should avoid.

### 3. Path-specific instructions

Rules that only apply to certain files, languages, services, or folders. This is useful when one repo contains multiple stacks, such as frontend, backend, infrastructure, and docs.

### 4. Specs and templates

Structured inputs for new work. Specs describe what should change, why it matters, acceptance criteria, and edge cases.

### 5. Spaces and external context

Shared planning context that may live outside one repository: customer briefs, architecture notes, design constraints, personas, standards, and cross-repo knowledge.

## What belongs where

| Context layer | Best for | Example guidance |
| --- | --- | --- |
| `AGENTS.md` | Agent-facing repository rules and engineering preferences | “Keep examples runnable locally. Do not introduce CI/CD topics unless asked.” |
| `.github/copilot-instructions.md` | Repository-wide Copilot behavior | “Optimize for teaching value, clear demos, and beginner-friendly names.” |
| `.github/instructions/*.instructions.md` | Path-specific or language-specific rules | “Python sample uses `uv`, Typer, pytest, and pure helper functions.” |
| Constitution | Team principles and professional standards | “Small, reviewed changes are preferred over clever rewrites.” |
| Specs | Feature intent and acceptance criteria | “Add command X with defaults, sorting rules, error cases, and tests.” |
| Spaces | Reusable planning and domain context | “Use customer personas and delivery constraints when shaping adoption ideas.” |

## How this shapes professional coding

Use examples that feel familiar to engineering teams:

| Company guideline | Where to encode it | How Copilot behavior changes |
| --- | --- | --- |
| “Every behavior change needs a test.” | Repository instructions and path-specific instructions | Copilot proposes tests with implementation instead of treating tests as optional. |
| “Use approved frameworks only.” | `AGENTS.md` or path-specific instructions | Copilot avoids adding new libraries or switching stacks without justification. |
| “Public APIs must keep stable response shapes.” | Specs and backend path instructions | Copilot checks compatibility before changing JSON responses. |
| “Prefer readable code over clever abstractions.” | Constitution and repo instructions | Copilot keeps examples direct and avoids over-engineering. |
| “Follow secure defaults.” | Constitution, specs, and security-focused instructions | Copilot asks about validation, secrets, input handling, and authorization boundaries. |
| “Docs must be concise and customer-ready.” | Repository instructions | Copilot writes short, practical docs instead of long theory. |
| “Frontend changes must preserve accessibility.” | Frontend path instructions | Copilot includes labels, keyboard behavior, semantic HTML, and accessible states. |
| “Infrastructure must use approved modules.” | Infrastructure path instructions | Copilot uses standard modules and avoids one-off cloud resources. |

The teaching point is simple: **instructions turn recurring review comments into reusable context**. Instead of repeating “please add tests,” “keep it simple,” or “do not add a new dependency” in every prompt, encode those expectations once.

## In this repository

- [`AGENTS.md`](../AGENTS.md)
- [`.github/copilot-instructions.md`](../.github/copilot-instructions.md)
- [`.github/instructions/javascript.instructions.md`](../.github/instructions/javascript.instructions.md)
- [`.github/instructions/python.instructions.md`](../.github/instructions/python.instructions.md)
- [`constitution/README.md`](../constitution/README.md)

## Demo idea: inspect the rules first

Ask Copilot:

```text
Look at AGENTS.md and the files in .github/instructions. Explain how they should shape future edits in this repository.
```

Then discuss why that is better than repeating the same constraints in every prompt.

## Demo idea: compare generic vs guided work

First ask a generic prompt:

```text
Add a new feature to the Node sample that would be useful in a workshop.
```

Then ask a guided prompt:

```text
Using AGENTS.md, .github/copilot-instructions.md, and .github/instructions/javascript.instructions.md, suggest one safe Node sample feature. Explain which rules shaped your recommendation.
```

What to observe:

- the guided answer should mention simple local setup, beginner-friendly code, tests, and avoiding extra infrastructure
- Copilot should justify the recommendation using repository context
- the output should feel more like advice from a teammate who knows the project

## Practical message for customers

Start lightweight:

1. one repository-wide instruction file
2. one or two path-specific instruction files
3. a short constitution page for shared engineering principles

That is enough to get real value.

## Practical examples customers can adapt

Repository-wide instruction:

```text
Prefer small, reviewable changes. When behavior changes, add or update tests. Do not introduce new dependencies unless the benefit is clear and documented.
```

Backend instruction:

```text
Keep API response shapes stable. Validate external input at the boundary. Return clear error messages without exposing secrets or internal stack traces.
```

Frontend instruction:

```text
Use semantic HTML, accessible labels, keyboard-friendly interactions, and existing design tokens. Avoid one-off styling unless the component is truly unique.
```

Data or analytics instruction:

```text
Keep transformations deterministic. Document assumptions about missing values, ordering, and time zones. Add tests for edge cases in input data.
```

Documentation instruction:

```text
Write docs for busy engineers. Start with the outcome, include copy-paste-ready commands, and keep conceptual background short.
```

## Demo follow-up

After Copilot explains the instruction files, ask:

```text
If I asked you to edit the Node sample, which repository rules would matter most, and how would they constrain your implementation?
```

Then ask:

```text
Draft a path-specific instruction file for a TypeScript frontend that follows these company standards: accessibility first, design system components, no new state library without approval, and tests for user-visible behavior.
```

This shows attendees that Copilot can help create the guidance, not only follow it.

## Takeaway

Constitution and instruction files make Copilot more consistent, more teachable, and easier to scale across teams.

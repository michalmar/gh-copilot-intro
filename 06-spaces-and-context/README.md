# 06 - Spaces and reusable context

## Main message

**Spaces let you bring together reusable context for repeated conversations.**

Simple framing: a Space is **shared memory for a recurring workstream**. It helps Copilot answer as if it already has the customer brief, personas, constraints, and repository context on the desk.

## When Spaces are useful

- product discovery
- architecture discussions
- cross-repo context
- customer or domain guidance that should not be re-pasted into every prompt

## Good content for a Space

- repositories
- product docs
- architecture notes
- customer briefs
- personas
- constraints and guardrails

This repository includes small starter documents in [`spaces/context`](../spaces/context/).

## Demo idea

Create a Space and add:

- this repository
- `spaces/context/customer-brief.md`
- `spaces/context/user-personas.md`
- `spaces/context/delivery-constraints.md`

Then ask:

```text
Given the customer brief, personas, and delivery constraints in this Space, what are the top 3 adoption opportunities for GitHub Copilot, and what should we validate first?
```

## What to emphasize

- A Space is about **shared context**, not just a longer prompt.
- It helps keep recurring work consistent.
- It is especially useful before implementation: discovery, scoping, prioritization, and documentation.
- It is a practical way to make Copilot feel more like a prepared teammate.

## Try it

Ask Copilot in the Space to turn the opportunities into:

- a small backlog
- a list of assumptions
- a first-draft adoption plan

Then ask the same question outside the Space and compare how much context is missing.

## Takeaway

Spaces help move Copilot from ad-hoc conversations to **repeatable, context-rich collaboration**.

# AGENTS.md

This repository is a **teaching repository** for a GitHub Copilot workshop.

## Goals

- Keep content clear, practical, and friendly to mixed-seniority technical audiences.
- Preserve the numbered, presentation-style structure of the workshop.
- Favor copy-paste-ready prompts, exercises, and facilitator cues over long theory.
- Keep examples simple, deterministic, and runnable on a local machine.

## Scope guardrails

- Do not add Git workflow, pull request, CI/CD, or deployment material unless explicitly requested.
- Prefer examples that teach **effective Copilot usage**: intent, context, constraints, review, and verification.
- Keep advanced topics grounded in simple demos. Avoid unnecessary enterprise complexity.

## Sample project conventions

- `samples/node-feedback-api` should stay lightweight and use Node.js with Express and Vitest.
- `samples/python-ticket-analyzer` should stay lightweight and use `uv`, Typer, and pytest.
- Sample code should be readable enough for live explanation in a workshop.

## Documentation conventions

- Each numbered workshop section should include:
  - the main message
  - a short explanation
  - a suggested demo
  - prompts or actions attendees can try
  - a concise takeaway
- Keep markdown concise and scan-friendly.

## When editing this repo

- Prefer small, workshop-friendly examples over production-grade abstractions.
- If you add exercises, make sure the starting point still runs.
- If you change commands, update the related workshop section and sample README in the same edit.

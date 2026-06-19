---
name: spec-reviewer
description: Review a standalone workshop app implementation against its local spec and guardrails.
---

# Spec Reviewer Skill

## Purpose

Use this skill after Copilot generates or edits code for this sample.

The goal is to check correctness, teaching value, and demo safety before accepting the change.

## Review checklist

1. Does the implementation match the local feature spec?
2. Does data loading and transformation follow the spec?
3. Is output deterministic and sorted as specified?
4. Are business rules implemented exactly?
5. Are the edge cases from the spec handled?
6. Are tests focused on public behavior and important rules?
7. Is the frontend accessible and understandable without relying on color alone?
8. Did the implementation avoid databases, external APIs, auth, unnecessary build tools, deployment, and real confidential data?

## Output style

Report only high-value issues. Prefer the smallest useful fix over broad refactoring.

## Useful prompt

```text
Use the spec-reviewer skill. Review the recent changes against the local feature spec and report only issues that affect correctness, demo safety, or teaching clarity.
```

---
name: backend-api-builder
description: Build a small local backend API from a feature spec and demo data.
---

# Backend API Builder Skill

## Purpose

Use this skill when implementing or reviewing backend behavior for a standalone workshop sample.

The goal is to turn a feature spec into a small, testable local API without adding production complexity.

## Procedure

1. Read `AGENTS.md`, `.github/copilot-instructions.md`, the backend instructions, and the feature spec.
2. Summarize the required endpoints, response shapes, edge cases, and assumptions.
3. Start with the smallest useful API slice from the spec.
4. Add helper functions for:
   - reading local demo data
   - parsing simple file formats
   - joining related records
   - calculating derived fields
   - applying business rules
   - sorting deterministic output
5. Keep route handlers short and readable.
6. Add test coverage for API behavior and pure helper rules.
7. Review the implementation against the spec before expanding the UI.

## Output expectations

- Use the project backend stack with ECMAScript modules.
- Keep all data local to the `data/` folder.
- Avoid authentication, databases, external APIs, vendor connectors, and unnecessary parser libraries.
- Return deterministic JSON sorted according to the spec.

## Useful prompt

```text
Use the backend-api-builder skill. Read the spec, choose the smallest useful API slice, and implement it with one focused API test before expanding the app.
```

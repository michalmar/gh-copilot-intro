# AGENTS.md

This folder is a **standalone spec-driven exercise** for a GitHub Copilot workshop.

Learners start from the spec, demo data, instructions, and skills. There is intentionally no backend or frontend implementation yet.

## Goal

Build a small local app from the provided spec.

Use this file for general working rules only. Use the spec for product behavior, data details, endpoints, response shapes, UI requirements, edge cases, and acceptance criteria.

## Guardrails

- Keep the app beginner-friendly and easy to explain live.
- Prefer simple local web app tools and minimal dependencies.
- Do not add a frontend build step, database server, authentication, external APIs, email delivery, deployment, or CI/CD.
- Do not introduce real confidential, personal, regulated, or customer data.
- Treat all provided data as fictional demo data.

## Working style

- Prefer decisions that can be traced to the spec, instructions, or skills instead of prompt taste.
- Read the spec before coding.
- Restate requirements, assumptions, and edge cases before implementation.
- Implement one small slice at a time.
- Prefer pure helper functions for parsing, transformation, calculations, sorting, and business rules.
- Review the result against the spec before accepting it.

## Suggested workflow

1. Summarize the spec in your own words.
2. Implement
3. Review the implementation against the spec and name which acceptance criteria are satisfied.

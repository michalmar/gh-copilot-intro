# Node sample - feedback API

This sample is a small Express API designed for **editor-first Copilot exercises**.

## Why this sample works well

- tiny codebase
- simple API behavior
- easy to explain live
- safe place to practice small feature prompts and tests

## Run it

```bash
npm install
npm test
npm start
```

The service runs on `http://localhost:3001`.

## Current API

- `GET /health`
- `GET /feedback`
- `POST /feedback`
- `GET /feedback/summary`

## Good workshop prompts

```text
Explain the current API surface and the role of each file in this sample.
```

```text
Before editing, propose a short plan for GET /feedback/:id, including response shape, not-found behavior, and tests.
```

```text
Implement GET /feedback/:id. Reuse the existing response style and update tests.
```

```text
Update the summary endpoint so results are sorted by average score descending and topic ascending for ties.
```

```text
Review the changes for likely bugs, missing edge cases, and tests that are too weak. Suggest only small refinements.
```

## Teaching note

The sample is intentionally small and not over-engineered. The goal is to practice good Copilot interactions, not to show framework complexity.

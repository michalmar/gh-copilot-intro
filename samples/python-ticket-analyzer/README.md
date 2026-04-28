# Python sample - ticket analyzer

This sample is a small `uv`-managed Python CLI designed for **spec-driven development and Copilot CLI** exercises.

## Why this sample works well

- tiny codebase
- no infrastructure setup
- easy to inspect from the terminal
- suitable for “read spec -> plan -> implement -> test”

## Run it

```bash
uv sync
uv run pytest
uv run ticket-analyzer summary data/tickets.json
uv run ticket-analyzer owners data/tickets.json
```

If `uv` reports a broken `.venv` after the repository has moved, remove the local environment and recreate it:

```bash
rm -rf .venv
uv sync
```

## Current commands

- `summary`
- `owners`

## Workshop feature spec

The starter spec for the advanced exercise lives here:

- [`specs/needs-attention/README.md`](./specs/needs-attention/README.md)

## Good workshop prompts

```text
Explain the current CLI, the supporting modules, and the easiest way to add a new command cleanly.
```

```text
Read the spec in specs/needs-attention/README.md, summarize the requirements, then propose a short implementation plan.
```

```text
Implement the spec, preserve the current output style, and add pytest coverage.
```

```text
Review the recent changes against the spec. Look for missing edge cases, unstable output, or tests that are too weak.
```

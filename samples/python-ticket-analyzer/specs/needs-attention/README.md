# Feature spec - needs-attention command

## Problem

The current CLI can summarize tickets and group them by owner, but it cannot quickly answer a common operational question:

**Which open tickets need attention right now?**

## Requested feature

Add a new command:

```bash
ticket-analyzer needs-attention PATH [--days 7] [--limit 5]
```

## Required behavior

- load tickets from the provided JSON file
- consider only tickets with `status == "open"`
- include a ticket in the output if either condition is true:
  - `priority == "P1"`
  - the ticket age in days is greater than or equal to `--days`
- default `--days` to `7`
- default `--limit` to `5`
- sort results by:
  1. priority importance (`P1` before `P2` before `P3`)
  2. age descending
  3. id ascending
- print one line per result in this format:

```text
T-1001 | P1 | 7 days | Ava | CLI output is too generic
```

## Edge cases

- if no tickets match, print `No tickets need attention.`
- `--days` must be a non-negative integer
- `--limit` must be a positive integer

## Acceptance criteria

- the new command exists and works from `uv run ticket-analyzer needs-attention data/tickets.json`
- the output is stable and deterministic
- pytest coverage is added for the selection or CLI behavior
- the implementation stays consistent with the current code style of the sample

## Suggested workshop prompt

```text
Read the feature spec in specs/needs-attention/README.md.
Summarize the requirements and edge cases, then propose a short plan before implementing the command and its tests.
```

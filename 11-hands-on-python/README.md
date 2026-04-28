# 11 - Hands-on: Python + CLI

## Main message

Use this sample to connect **specs, instructions, and Copilot CLI** in one small exercise.

## Sample

Project: [`samples/python-ticket-analyzer`](../samples/python-ticket-analyzer/README.md)

## Run it

```bash
cd samples/python-ticket-analyzer
uv sync
uv run pytest
uv run ticket-analyzer summary data/tickets.json
```

## Pair-programming loop

This exercise should feel like working with a terminal-native teammate:

1. read the spec together
2. ask Copilot to restate requirements
3. ask for a short implementation plan
4. implement with tests
5. review the resulting change

## Suggested exercise path

### Exercise 1 - Understand the current CLI

Prompt:

```text
Explain @samples/python-ticket-analyzer/src/ticket_analyzer/cli.py, the current commands, and the helper modules involved.
```

### Exercise 2 - Use the spec

Prompt:

```text
Read @samples/python-ticket-analyzer/specs/needs-attention/README.md.
Summarize the behavior and propose a short plan before making changes.
```

### Exercise 3 - Implement with tests

Prompt:

```text
Implement the feature from the spec.
Keep the output consistent with the existing CLI commands and add pytest coverage.
```

### Exercise 4 - Review the implementation

Prompt:

```text
Review the recent changes in samples/python-ticket-analyzer. Look for likely bugs, edge cases from the spec that are not covered, and tests that are too weak.
```

## Debrief questions

- Did the spec reduce ambiguity?
- Did the instructions keep the style consistent?
- Was CLI a good fit for this task?
- Did the final review change what you trusted?

## Takeaway

This is the “advanced but still practical” pattern: reusable guidance + clear spec + terminal workflow.

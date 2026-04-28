# Troubleshooting

## Copilot does not answer in the editor

- Check that the user is signed in to GitHub in VS Code.
- Confirm the GitHub Copilot and GitHub Copilot Chat extensions are enabled.
- Try a smaller prompt attached to a specific file.

## Copilot gives generic answers

- Add repository context or specific files.
- State the goal, constraints, and expected output.
- Ask for a plan first, then ask for implementation.

## CLI asks for too many permissions

- Start in a trusted project folder only.
- Use plan mode before implementation-heavy prompts.
- Approve only the tools you understand.
- Keep the task narrow and attach files with `@`.

## The answer is technically correct but not useful

- Ask for tradeoffs, not just output.
- Ask for smaller changes.
- Provide an example of the shape or tone you want.
- Add repo instructions or a lightweight constitution for recurring work.

## Copilot suggests too much code

- Restate the scope and ask for the smallest safe change.
- Tell it what to preserve.
- Ask it to remove unnecessary abstractions.
- Ask for one test that proves the behavior.

Recovery prompt:

```text
That is too much for this workshop sample. Keep the current structure, avoid new dependencies, and propose the smallest change that satisfies the requirement.
```

## Python `uv` uses a broken `.venv`

If the repository was moved or copied, an existing `.venv` may still point to an old path.

```bash
cd samples/python-ticket-analyzer
rm -rf .venv
uv sync
uv run pytest
```

## Mixed audience problem

- Let experienced attendees explore stretch prompts.
- Keep beginners on the provided copy-paste prompts.
- Use the sample projects so everyone works from the same baseline.

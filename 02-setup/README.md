# 02 - Setup

## Main message

**Good setup removes friction.** If setup is shaky, the workshop feels like magic. If setup is solid, the workshop feels practical.

## Minimum setup

### Editor

- Visual Studio Code
- GitHub Copilot extension
- GitHub Copilot Chat extension

### Accounts

- GitHub account with Copilot access
- sign in to GitHub inside the editor

### Local runtimes

- Node.js
- Python 3.11+
- `uv`

## Optional but recommended

- Copilot CLI installed and authenticated
- one terminal already opened in the workshop repository

Use the official docs for installation details:

- Copilot docs: <https://docs.github.com/en/copilot>
- Copilot CLI docs: <https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli>

## Verification checklist

### Editor

1. Open this repository.
2. Open a file in one of the samples.
3. Ask Copilot Chat to explain the file.
4. Confirm inline suggestions appear while typing.

### CLI

1. Run `copilot`.
2. Trust the current folder if appropriate.
3. Sign in if prompted.
4. Ask a small question against a specific file with `@`.

## Demo idea

Have the room verify setup with the same tiny prompt:

```text
Explain the purpose of this file in 5 bullet points and tell me one safe improvement.
```

## Try it

- open `samples/node-feedback-api/src/app.js`
- ask for a summary
- compare answers between a broad prompt and a file-specific prompt

## Takeaway

When setup is ready, Copilot can immediately help with understanding, generation, and small improvements.

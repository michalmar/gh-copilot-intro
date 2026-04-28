# 10 - Copilot CLI

## Main message

Copilot CLI brings the same pair-programming mindset into the terminal, where developers already inspect, test, and iterate.

Simple framing: the CLI is an **agentic workbench**. It makes context, modes, permissions, sessions, and review visible instead of hiding them behind a single chat box.

## Good use cases

- explain a file from the current repo
- plan a change before editing
- implement a focused task from the terminal
- review recent changes
- research a repo question and produce a shareable report
- resume or continue previous work
- keep working in a repo without switching surfaces

## Important terminology

| Term | What it means | Why it matters |
| --- | --- | --- |
| **Session** | A persistent CLI conversation with local state and history | You can resume, rename, compact, and continue work later. |
| **Context** | The files, folders, instructions, and conversation history Copilot can see | Better context produces better plans and safer edits. |
| **Mention** | `@file` adds a specific file to the prompt | Use this instead of asking broad repo questions with no anchor. |
| **Slash command** | A built-in CLI command such as `/help`, `/context`, `/diff`, or `/review` | Commands make the workflow explicit and teachable. |
| **Mode** | The interaction style selected in the CLI | Use the right mode for planning, editing, or more autonomous work. |
| **Plan mode** | A mode for planning before code changes | Best default before multi-file or ambiguous work. |
| **Autopilot** | An experimental mode where the agent continues more autonomously | Useful for well-scoped tasks, but not the first thing to show beginners. |
| **Permissions** | Approvals for file access, shell commands, tools, and URLs | Keeps the human in control of what the agent can do. |
| **Trusted directory** | A folder Copilot is allowed to inspect or edit | Start in the workshop repo and avoid granting broad access. |
| **Diff review** | Inspecting what changed with `/diff` | Connects generation to human review. |
| **Code review agent** | Running `/review` against local changes | Good pre-check for bugs, edge cases, and risky edits. |
| **Compaction** | Summarizing long history with `/compact` | Keeps long-running sessions useful when context grows. |
| **Research** | A deeper investigation with `/research` | Better for repo exploration or technical reports than quick chat answers. |
| **MCP, skills, plugins** | Ways to extend what Copilot can access or do | Mention as extensibility, but keep the intro demo focused. |

## Terminology to avoid confusing

- **Plan mode is not execution.** It is where you align on intent, files, tests, and constraints before edits.
- **Autopilot is not the same as permissions.** Autonomy controls how persistently the agent works; permissions control what it may access or execute.
- **Allow-all permissions are not a teaching default.** Commands such as `/allow-all` are useful in trusted expert workflows, but workshop demos should use deliberate approvals.
- **Memory is not the same as instructions.** Instructions are written guidance; memory, where enabled, is repository-scoped learned context that may help across sessions.

## A minimal workflow

1. open the repository in a terminal
2. run `copilot`
3. use `/login` if authentication is needed
4. confirm the working folder with `/cwd`
5. trust only the repository folder when prompted
6. attach focused files with `@`
7. use plan mode or `/plan` before larger edits
8. approve commands deliberately
9. run tests or ask Copilot what to verify
10. inspect changes with `/diff`
11. ask for a focused `/review`
12. use `/resume`, `/rename`, or `/compact` for longer sessions

## Commands worth showing

| Category | Commands | Teaching point |
| --- | --- | --- |
| Start and help | `copilot`, `/login`, `/help`, `/model` | The CLI is an interactive assistant, not a one-shot command. |
| Context | `@file`, `/context`, `/usage`, `/env` | Show what Copilot can see and how much context is being used. |
| Workspace access | `/cwd`, `/add-dir`, `/list-dirs` | Keep file access intentional and visible. |
| Planning and execution | `/plan`, `Shift+Tab` mode switching | Separate planning from editing. |
| Review | `/diff`, `/review` | Inspect generated changes before trusting them. |
| Sessions | `/resume`, `/rename`, `/session`, `/compact` | CLI work can be paused, resumed, and managed. |
| Sharing | `/share file`, `/share html`, `/share gist` | A session can become a handoff artifact. |
| Research | `/research` | Use a specialized flow for deeper investigations. |
| Extensibility | `/mcp`, `/skills`, `/plugin`, `/lsp` | Mention how tools and code intelligence can extend the CLI. |

## Demo flow

```text
Explain @samples/python-ticket-analyzer/src/ticket_analyzer/cli.py and tell me which file I should change to add a new command.
```

Then move to:

```text
Read @samples/python-ticket-analyzer/specs/needs-attention/README.md and implement the feature in plan mode first. Keep the existing CLI style and add tests.
```

After implementation, inspect and review:

```text
/diff
```

```text
Review the recent changes in samples/python-ticket-analyzer and identify the two most likely bugs or missing edge cases. Do not suggest broad refactors.
```

If you want to show the built-in reviewer:

```text
/review
```

If the session is useful as an artifact:

```text
/share file
```

## What to observe

- The CLI can plan before editing, not only generate code.
- File and command approvals keep the user in control.
- `/diff` and `/review` make review part of the terminal workflow.
- Sessions are durable: they can be renamed, compacted, resumed, and shared.
- The same repo instructions and path-specific instructions still matter in the terminal.

## Optional advanced concepts to mention

Keep these short in an intro workshop:

- **Background CLI tasks**: useful for longer-running work without blocking the main session.
- **Agent HQ**: a place to see local and cloud agent sessions together when available.
- **Cloud coding agents**: better for delegated work outside a live demo; mention only if the audience asks about scaling beyond local CLI.
- **Copilot Memory**: repository-scoped learned context, where enabled, that is different from manually written instructions.
- **Fleet or parallel work**: useful for clearly separable investigations, but too advanced for the first CLI demo.

## Safety message

- work only in trusted folders
- prefer plan mode before implementation
- approve commands deliberately
- keep the task narrow
- avoid broad permission shortcuts during customer demos
- do not paste secrets into prompts or terminal output

## Takeaway

CLI is not “Copilot but with a different UI.” It is a controlled agent surface for terminal-native work: explicit context, explicit modes, explicit permissions, durable sessions, and built-in review.

# 01 - What GitHub Copilot is

## Main message

**GitHub Copilot is a set of AI-assisted development experiences, not just inline code completion.**

## The simple mental model

Copilot can help in several useful modes:

1. **Complete**: finish code or text while you type
2. **Explain**: help you understand unfamiliar code
3. **Generate**: scaffold code, tests, docs, or refactors
4. **Guide**: propose a plan, outline tradeoffs, or reason about a change
5. **Operate in context**: work from repo instructions, specs, Spaces, and terminal context
6. **Extend**: use specialized agents, skills, MCP tools, and plugins when the workflow needs more than chat

## Surfaces worth showing

- editor completions
- editor chat
- repo-aware changes in the editor
- Spaces for reusable shared context
- agents, skills, MCP, and plugins as extension points
- Copilot CLI for terminal-native workflows

## What Copilot is not

- not an autonomous replacement for software engineering
- not automatically correct
- not a substitute for architecture, testing, or review
- not equally strong at every task or every level of ambiguity

## Demo idea

Open one sample project and ask:

```text
Explain this project like I just joined the team. Focus on the main files, the current behavior, and where a safe first change would go.
```

Then show how much better the answer becomes when a specific file is attached.

## Try it

Ask Copilot to do three different kinds of work on the same project:

- explain one file
- suggest a small improvement
- write a first test

## Takeaway

Use Copilot as a **thinking and implementation partner**, but keep the developer responsible for intent, review, and final judgment.

# GitHub Copilot workshop repository

This repository is a **slide-free, presentation-style workshop** for a **2-hour customer session** on GitHub Copilot. It focuses on **what Copilot is, how to set it up, how to use it as a pair-programming partner on simple examples, and how to introduce advanced features** such as **Spaces, constitution/instructions, agents, skills, MCP, plugins, spec-driven development, and Copilot CLI**.

The workshop intentionally **does not cover Git workflows, pull requests, CI/CD, or deployment**. The goal is practical developer productivity.

## Main messages

1. **Copilot is more than autocomplete.** It is a set of development surfaces: inline completion, chat, edit/agent workflows, Spaces, and CLI.
2. **Better context produces better output.** Good prompts, attached files, specs, and repo instructions matter.
3. **Pair-programming is a loop.** Use Copilot to understand, plan, implement, verify, review, and refine in small steps.
4. **Keep humans in charge.** Use Copilot to accelerate thinking and implementation, then review, test, and refine.
5. **Move from one-off prompts to repeatable workflows.** Spaces, constitutions, instructions, and specs make team usage more reliable.

## 2-hour flow

| Time | Topic | Repository section |
| --- | --- | --- |
| 5 min | Framing, goals, how to use this repo | [00-start-here](./00-start-here/README.md) |
| 10 min | What GitHub Copilot is and where it shows up | [01-what-is-github-copilot](./01-what-is-github-copilot/README.md) |
| 10 min | Setup and verification | [02-setup](./02-setup/README.md) |
| 10 min | First wins in the editor | [03-first-wins](./03-first-wins/README.md) |
| 15 min | Effective usage patterns | [04-effective-usage](./04-effective-usage/README.md) |
| 20 min | Hands-on: Node sample | [05-hands-on-node](./05-hands-on-node/README.md) |
| 10 min | Spaces and reusable context | [06-spaces-and-context](./06-spaces-and-context/README.md) |
| 10 min | Constitution, instructions, and governance | [07-constitution-and-instructions](./07-constitution-and-instructions/README.md) |
| 10 min | Agents, skills, MCP, and plugins | [08-agents-skills-mcp-plugins](./08-agents-skills-mcp-plugins/README.md) |
| 10 min | Spec-driven development and full-stack starter | [09-spec-driven-development](./09-spec-driven-development/README.md) |
| 5 min | Copilot CLI | [10-copilot-cli](./10-copilot-cli/README.md) |
| 5 min | Hands-on: Python + CLI | [11-hands-on-python](./11-hands-on-python/README.md) |

## Repository map

- [00-start-here](./00-start-here/README.md)
- [01-what-is-github-copilot](./01-what-is-github-copilot/README.md)
- [02-setup](./02-setup/README.md)
- [03-first-wins](./03-first-wins/README.md)
- [04-effective-usage](./04-effective-usage/README.md)
- [05-hands-on-node](./05-hands-on-node/README.md)
- [06-spaces-and-context](./06-spaces-and-context/README.md)
- [07-constitution-and-instructions](./07-constitution-and-instructions/README.md)
- [08-agents-skills-mcp-plugins](./08-agents-skills-mcp-plugins/README.md)
- [09-spec-driven-development](./09-spec-driven-development/README.md)
- [10-copilot-cli](./10-copilot-cli/README.md)
- [11-hands-on-python](./11-hands-on-python/README.md)
- [facilitator](./facilitator/README.md)
- [reference](./reference/README.md)
- [constitution](./constitution/README.md)
- [spaces](./spaces/README.md)
- [samples](./samples/README.md)

## Samples

- [`samples/node-feedback-api`](./samples/node-feedback-api/README.md): editor-first exercise using Node.js, Express, and Vitest
- [`samples/python-ticket-analyzer`](./samples/python-ticket-analyzer/README.md): `uv`-managed Python CLI sample for spec-driven development and Copilot CLI exercises
- [`samples/hospital-performance-summary`](./samples/hospital-performance-summary/README.md): standalone spec-driven vibe-coding exercise using local instructions, skills, and fictional demo data

## Recommended delivery style

- Keep the pace brisk and practical.
- Demo first, then let attendees repeat the same move on a smaller task.
- Narrate **why** a prompt worked: context, constraints, acceptance criteria, and review loop.
- Make the pair-programming loop visible: ask for a plan, inspect the change, run a check, and ask for a focused review.
- Use the advanced sections to show where Copilot fits into a real engineering workflow, not as a replacement for engineering judgment.

## Workshop preparation checklist

See [facilitator/README.md](./facilitator/README.md) for the exact checklist, timing, and fallback options.

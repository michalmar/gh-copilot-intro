# 08 - Agents, skills, MCP, and plugins

## Main message

After Copilot has the right context, you can extend how it works through **specialized roles, reusable capabilities, and connected tools**.

Simple framing:

```text
Instructions shape defaults.
Agents shape roles.
Skills package repeatable capabilities.
MCP connects tools and data.
Plugins extend the environment.
```

## Why this comes after instructions

Do not start by showing every extension point. First show durable context: `AGENTS.md`, repository instructions, path-specific instructions, specs, and Spaces.

Then explain that agents, skills, MCP, and plugins are how teams move from “Copilot understands our rules” to “Copilot can work with specialized roles and useful tools.”

## Concept map

| Concept | Best use | Workshop example |
| --- | --- | --- |
| **Agent** | A specialized role or workflow | “Act as a code reviewer focused on correctness and missing tests.” |
| **Skill** | A reusable packaged capability | “Convert a known file format, generate a standard report, or follow a repeatable checklist.” |
| **MCP** | A protocol for connecting tools, systems, and live data | “Query GitHub, internal docs, issue trackers, cloud resources, or databases through governed tools.” |
| **Plugin** | An installable extension point for additional capabilities | “Add or manage capabilities from an approved marketplace or local setup.” |

## Important distinctions

- **Instructions are always-on guidance.** They tell Copilot how to behave in the repo.
- **Agents are role specialization.** They help when the same kind of work repeats, such as planning, reviewing, testing, or documenting.
- **Skills are packaged know-how.** They are useful when a task has a repeatable procedure, resources, or scripts.
- **MCP is tool access.** It connects Copilot to external systems through explicit tools rather than pasted context.
- **Plugins are environment extensions.** Availability depends on the Copilot surface and organization policy.

## Professional coding examples

| Team need | Good fit | Why |
| --- | --- | --- |
| “Review changes for correctness before PR.” | Agent | A reviewer role can focus on bugs, edge cases, and missing tests. |
| “Generate the same release note format every sprint.” | Skill | The procedure and output shape can be packaged and reused. |
| “Answer questions using live issue or repository data.” | MCP | The answer depends on current external data. |
| “Expose approved enterprise tools to developers.” | MCP or plugin | Tool access can be centrally configured and governed. |
| “Make every edit follow company coding rules.” | Instructions | This should be default guidance, not a special agent. |

## Example definitions in this repository

This repository includes two small examples that attendees can inspect:

| Example | File | Why it fits this repo |
| --- | --- | --- |
| Custom agent | [`.github/agents/workshop-reviewer.agent.md`](../.github/agents/workshop-reviewer.agent.md) | A reviewer role can check workshop changes for teaching value, demo safety, and repo-instruction fit. |
| Skill | [`.github/skills/workshop-section-designer/SKILL.md`](../.github/skills/workshop-section-designer/SKILL.md) | A repeatable procedure can encode the standard shape for numbered workshop sections. |

The agent and skill are intentionally different:

- the **agent** is a role: “review this workshop change like a focused teammate”
- the **skill** is a reusable method: “design or review a numbered workshop section using this project’s standards”

This is a useful distinction for professional teams. A company might define a security-review agent, but use a skill for a repeatable release-note format or architecture-decision template.

## Definition anatomy

Custom agent definition:

| Part | Example in this repo | Purpose |
| --- | --- | --- |
| `name` | `workshop-reviewer` | Gives the agent a reusable identity. |
| `description` | Review workshop changes for teaching value and demo safety | Helps Copilot know when the agent is relevant. |
| `tools` | `search` | Limits the agent to the tools it needs for the role. |
| Role instructions | “You are the workshop reviewer...” | Defines the professional perspective. |
| Review standards | numbered flow, runnable demos, repo guardrails | Turns company or project standards into reviewer behavior. |
| Output contract | highest-value improvement first, then risks and missing checks | Keeps responses predictable and useful. |

Skill definition:

| Part | Example in this repo | Purpose |
| --- | --- | --- |
| `name` | `workshop-section-designer` | Gives the skill a reusable capability name. |
| `description` | Design or review numbered workshop sections | Helps Copilot decide when to load the skill. |
| Purpose | keep workshop material practical and concise | States the outcome the skill supports. |
| Project scope | numbered sections, facilitator guidance, demo prompts, sample READMEs | Prevents the skill from applying too broadly. |
| Procedure | identify outcome, add prompts, check flow, include review | Captures repeatable know-how. |
| Quality checklist | concise, runnable, beginner-friendly, pair-programming loop | Encodes the standard for good output. |

## Demo idea

In Copilot CLI, show that these concepts are visible as commands:

```text
/agent
/skills
/mcp
/plugin
```

You do not need to install anything in the intro workshop. The goal is to explain the categories and when they matter.

Then ask:

```text
Explain the difference between agents, skills, MCP, and plugins for a new GitHub Copilot user. Use this repository as the example and keep the answer practical.
```

Follow up with:

```text
For this workshop repo, which concept would you use for a code-review specialist, a repeatable README generator, live GitHub issue lookup, and company-wide coding standards?
```

Then inspect the example definitions:

```text
Explain .github/agents/workshop-reviewer.agent.md and .github/skills/workshop-section-designer/SKILL.md. What is the difference between the agent role and the skill procedure?
```

```text
Use the workshop-reviewer agent concept to review the new 08 section. Focus on teaching value, demo safety, and whether the section stays beginner-friendly.
```

```text
Use the workshop-section-designer skill concept to improve this section's Try it prompts without making the workshop longer.
```

## Try it

Ask attendees to classify each need:

```text
For each item, choose instructions, custom agent, skill, MCP, or plugin:
1. Always add tests for behavior changes.
2. Review workshop edits for teaching clarity.
3. Generate a standard workshop section from a checklist.
4. Query live GitHub issues.
5. Add an approved enterprise tool integration.
Explain your choices briefly.
```

## What to emphasize

- Start with instructions and specs before adding extension points.
- Use agents for repeated roles, not one-off prompts.
- Use skills for repeatable procedures that benefit from packaging.
- Use MCP when Copilot needs live systems or governed tools.
- Keep beginner demos conceptual unless the audience is ready for deeper setup.

## Takeaway

Agents, skills, MCP, and plugins move Copilot from a single assistant to an extensible development environment. Use them deliberately: context first, specialization second, tool access third.

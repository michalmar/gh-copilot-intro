# Demo prompts

Use these prompts as copy-paste starters during the workshop.

## Pair-programming loop

```text
Explain the current code path first. Then propose the smallest safe plan before making any changes.
```

```text
Implement only the planned change. Preserve the existing style and update the relevant tests.
```

```text
Review the change for likely bugs, missing edge cases, weak tests, and unnecessary complexity. Suggest only focused refinements.
```

## First wins in the editor

```text
Explain this project like I just joined the team. Focus on the entry points, the main data flow, and where I should start editing.
```

```text
Review this file and suggest 3 small, high-value improvements. Keep the suggestions practical and explain the tradeoffs.
```

```text
Write tests for the behavior in this file before changing the implementation. Keep them readable and only cover the public behavior.
```

```text
What assumptions did you make, and what should I verify before accepting this?
```

## Node sample

```text
In samples/node-feedback-api, explain the current API surface and the purpose of each file. Then suggest one safe feature to add in under 10 minutes.
```

```text
Add a new endpoint that returns one feedback item by id. Reuse existing validation and response patterns. Update tests too.
```

```text
Before editing, propose the response shape, not-found behavior, and tests for GET /feedback/:id.
```

```text
Add topic sorting to the summary endpoint. Keep the output stable and update the tests.
```

```text
Review the Node sample changes and suggest only the smallest fixes needed for correctness or clearer tests.
```

## Spaces

```text
Given the customer brief, user personas, and delivery constraints in this Space, what are the top 3 product opportunities we should explore next, and what assumptions should we validate first?
```

```text
Turn those opportunities into a small backlog with one-line success criteria for each item.
```

## Constitution and instructions

```text
Look at AGENTS.md and the files in .github/instructions. Explain how they should influence changes in the sample projects.
```

```text
Using AGENTS.md, .github/copilot-instructions.md, and .github/instructions/javascript.instructions.md, suggest one safe Node sample feature. Explain which rules shaped your recommendation.
```

```text
If I asked you to edit the Python sample, which repository and path-specific instructions would matter most? Turn them into a short implementation checklist.
```

```text
Draft a repository-wide instruction file for a Python service that values clarity, small changes, and explicit tests.
```

```text
Draft a path-specific instruction file for a TypeScript frontend that follows these company standards: accessibility first, design system components, no new state library without approval, and tests for user-visible behavior.
```

```text
Review this proposed instruction: "Write high-quality code." Rewrite it into concrete, enforceable guidance that would help Copilot produce better changes.
```

## Agents, skills, MCP, and plugins

```text
Explain the difference between agents, skills, MCP, and plugins for a new GitHub Copilot user. Use this repository as the example and keep the answer practical.
```

```text
For this workshop repo, which concept would you use for a code-review specialist, a repeatable README generator, live GitHub issue lookup, and company-wide coding standards?
```

```text
In Copilot CLI, explain what /agent, /skills, /mcp, and /plugin are for. Do not install anything; just explain when each one matters.
```

```text
Explain .github/agents/workshop-reviewer.agent.md and .github/skills/workshop-section-designer/SKILL.md. What is the difference between a custom agent and a skill?
```

```text
Use the workshop-section-designer skill concept to review 08-agents-skills-mcp-plugins. Check for a clear main message, live demo, attendee prompts, and concise takeaway.
```

## Spec-driven development

```text
Read the feature spec in samples/python-ticket-analyzer/specs/needs-attention/README.md. Summarize the requested behavior, edge cases, and acceptance criteria before writing code.
```

```text
Implement the feature from the spec, but first give me a short plan and point out any ambiguities.
```

```text
Open samples/hospital-performance-summary-v2 as the workspace root.
Read AGENTS.md, .github/copilot-instructions.md, .github/instructions, .github/skills, and specs/daily-summary/README.md.
Summarize the app goal, constraints, acceptance criteria, and assumptions before suggesting code changes.
```

```text
Use the backend-api-builder skill.
Choose the smallest useful API slice from the spec, implement it with one focused API test, and do not build the full UI yet.
```

```text
For an extended exercise, use the backend-api-builder and frontend-ui-design skills to build the first runnable backend + frontend slice from the spec.
Use the stack and data sources defined by the project and spec. Avoid new dependencies unless the benefit is clear.
```

```text
Use the spec-reviewer skill. Review the changes against the spec. Look for missing edge cases, unstable sorting, weak tests, accessibility issues, and unnecessary complexity.
```

```text
Use the frontend-ui-design skill to review the UI.
Verify that the frontend uses only original HTML/CSS, no real-world logos, images, fonts, copied code, hotlinked assets, copied slogans, or branded text.
```

```text
Verify this implementation against the spec. Tell me which commands to run, which API responses to inspect, and what UI behavior to check in the browser before accepting the change.
```

## Copilot CLI

```text
Explain @samples/python-ticket-analyzer/src/ticket_analyzer/cli.py and tell me which file I should change to add a new command.
```

```text
Read @samples/python-ticket-analyzer/specs/needs-attention/README.md and implement the feature in plan mode first. Keep the command names and output style consistent with the existing CLI.
```

```text
Review the recent changes in this folder and suggest the two most likely bugs or edge cases.
```

## Bad answer recovery

```text
That answer is too broad. Keep the change beginner-friendly, preserve the current behavior, and suggest the smallest useful next step.
```

```text
Simplify your previous answer so it fits a 10-minute live demo. Avoid new abstractions unless they remove obvious duplication.
```

# Full-day workshop agenda

Use this agenda for a full-day customer workshop that starts with this GitHub Copilot repository and continues with Azure AI Foundry in the afternoon.

## Workshop goals

- Show how GitHub Copilot supports practical developer productivity across editor, chat, CLI, reusable context, and agent-style workflows.
- Give attendees hands-on practice with a simple local project, prompts, verification, and review.
- Introduce Azure AI Foundry as the platform layer for building, evaluating, and operating AI applications and agents.
- Connect the two halves: Copilot helps developers build faster; Azure AI Foundry helps teams build AI solutions responsibly and repeatably.

## Suggested full-day flow

| Time | Area | Focus |
| --- | --- | --- |
| 09:00-09:15 | Welcome and framing | Goals, audience expectations, local setup check, and how the day connects developer productivity with AI application delivery. |
| 09:15-10:00 | GitHub Copilot orientation | What Copilot is, where it appears in the developer workflow, and how to think of it as a pair-programming partner rather than only autocomplete. |
| 10:00-10:45 | Prompting and context | How better context improves answers: files, workspace awareness, instructions, constraints, acceptance criteria, and small review loops. |
| 10:45-11:00 | Break | Buffer for setup, questions, and environment issues. |
| 11:00-12:00 | Hands-on coding with this repository | Guided local exercise using the sample projects: understand existing code, ask for a plan, implement a small change, run checks, and review the result. |
| 12:00-12:30 | Team-scale Copilot usage | Reusable context, Spaces, repository instructions, skills, MCP, agents, specifications, and CLI workflows as ways to make Copilot usage more consistent. |
| 12:30-13:30 | Lunch | Transition from developer productivity to AI solution delivery. |
| 13:30-14:00 | Azure AI Foundry overview | What Azure AI Foundry is, where it fits in the AI application lifecycle, and how projects, models, playgrounds, tools, and deployments relate. |
| 14:00-14:45 | Building with models and prompts | Model selection, prompt iteration, grounding options, simple prompt flow, and practical patterns for moving from experiment to application behavior. |
| 14:45-15:30 | Agents and connected tools | Foundry agents, tool use, knowledge grounding, function/action patterns, safety boundaries, and when to use an agent versus a direct model call. |
| 15:30-15:45 | Break | Buffer before evaluation and operational topics. |
| 15:45-16:30 | Evaluation, quality, and safety | Test datasets, evaluators, tracing, content safety, responsible AI checks, and how to make quality visible before sharing an AI feature. |
| 16:30-16:55 | Operating and improving AI solutions | Monitoring, feedback loops, prompt improvement, versioning considerations, and handoff patterns for teams. |
| 16:55-17:00 | Wrap-up | Key takeaways, recommended next steps, and Q&A. |

## Morning delivery notes

Keep the GitHub Copilot half practical and repository-led. Highlight the main areas rather than walking through every numbered section:

- **Copilot surfaces:** inline suggestions, chat, edit workflows, agent mode, and CLI.
- **Context and instructions:** how files, prompts, repository guidance, and reusable context shape the answer.
- **Pair-programming loop:** understand, plan, implement, verify, review, and refine.
- **Hands-on samples:** use the Node and Python samples as small, safe exercises attendees can run locally.
- **Reusable workflows:** Spaces, skills, MCP, specs, and instructions as ways to make Copilot more repeatable for teams.
- **Token optimization:** keep context scoped, output concise, and retries low without making prompts vague.

Recommended demo arc:

1. Ask Copilot to explain one sample project.
2. Ask for a short implementation plan with constraints.
3. Apply a small change.
4. Run the relevant local check.
5. Ask Copilot to review the result and improve the prompt or implementation.

## Afternoon delivery notes

Keep the Azure AI Foundry half focused on the lifecycle of an AI solution:

- **Explore:** choose models, test prompts, compare behavior, and understand cost/latency/quality tradeoffs.
- **Build:** create prompt or agent behavior with tools, grounding, and clear task boundaries.
- **Evaluate:** use datasets, evaluators, traces, and safety checks to move beyond subjective demos.
- **Operate:** monitor behavior, collect feedback, improve prompts or models, and manage changes over time.

Suggested scenario:

1. Start with a simple business assistant or support-triage use case.
2. Prototype the prompt or agent behavior in Azure AI Foundry.
3. Add grounding or a tool to make the answer more useful.
4. Run a small evaluation set to compare quality.
5. Discuss what would be monitored or improved before production use.

## Facilitator reminders

- Avoid listing every repository lesson during the morning. Use the repository as the working environment and point to areas only when they support the live flow.
- Keep both halves demo-first. Explain concepts after attendees see the workflow.
- Leave time for environment issues, especially sign-in, extensions, model access, and Azure permissions.
- Emphasize the same principle across both halves: AI tools accelerate work, but teams still need context, constraints, verification, and human review.

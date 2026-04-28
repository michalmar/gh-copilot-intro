---
name: workshop-section-designer
description: Design or review numbered workshop sections for this GitHub Copilot intro repository.
---

# Workshop Section Designer Skill

## Purpose

Use this skill when creating, expanding, or reviewing a numbered workshop section in this repository.

The goal is to keep workshop material practical, concise, and easy to deliver live. The section should help attendees understand GitHub Copilot as a pair-programming partner, not only as autocomplete.

## Project scope

This skill applies to:

- numbered workshop folders such as `03-first-wins` or `08-agents-skills-mcp-plugins`
- facilitator guidance
- reusable demo prompts
- sample README files used during exercises

Do not introduce Git workflow, pull request, CI/CD, deployment, or production operations topics unless the user explicitly asks for them.

## Section standard

Every numbered workshop section should include:

1. **Main message**: one clear idea the audience should remember.
2. **Short explanation**: enough context to understand why the topic matters.
3. **Suggested demo**: something the facilitator can show live.
4. **Try it**: a prompt or action attendees can repeat.
5. **Takeaway**: a concise closing point.

## Design procedure

When designing or reviewing a section:

1. Identify the audience outcome.
2. Keep the explanation short and concrete.
3. Add copy-paste-ready prompts.
4. Prefer one small demo over several abstract examples.
5. Include a review or verification step when code or docs change.
6. Check that the section fits the surrounding numbered flow.
7. Keep advanced concepts optional unless they are required for the main story.

## Quality checklist

- The section can be presented in a few minutes.
- The demo works from the local repository.
- The prompt examples include context and constraints.
- The content reinforces the pair-programming loop: understand, plan, implement, verify, review, refine.
- The wording is friendly to mixed-seniority technical audiences.
- The sample projects remain lightweight and beginner-friendly.

## Example prompt

```text
Use the workshop-section-designer skill to review 08-agents-skills-mcp-plugins. Check whether the section has a clear main message, a live demo, attendee prompts, and a concise takeaway.
```

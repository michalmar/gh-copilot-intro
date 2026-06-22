# 13 - Token optimization

## Main message

Token optimization is not about spending the fewest tokens. It is about giving Copilot **enough focused context to solve the task correctly, with as little noise as possible**.

Simple framing:

```text
Right context > more context.
Short useful output > long impressive output.
One focused loop > repeated retries.
```

## Why it matters

Every Copilot interaction has a context budget. Tokens are used by more than the words you type:

- repository instructions such as `AGENTS.md` and path-specific instructions
- attached, selected, or open files
- previous chat history and summaries
- tool definitions and tool results
- pasted logs, command output, screenshots, or copied documentation
- model output
- retries, broad agent exploration, and parallel subagents

The practical efficiency model is simple: **reused context is better than repeatedly rediscovering the same facts, fresh input consumes the context budget, long output adds cost and latency, and retries multiply everything**. If your Copilot surface exposes token usage, treat it as a directional signal rather than a perfect billing report.

The goal is **scoped sufficiency**: enough context for a correct answer, not every possible detail.

## Easy wins

| Habit | Why it helps |
| --- | --- |
| Name exact files or folders | Prevents broad repository exploration. |
| Ask for the smallest relevant file set first | Lets Copilot discover scope before implementing. |
| Use structured prompts | Reduces ambiguity without adding long prose. |
| Limit the response shape | Saves expensive output tokens and makes review easier. |
| Paste excerpts, not full logs | Keeps the signal visible and avoids replaying thousands of irrelevant lines. |
| Use tools for deterministic work | Search, tests, formatters, and scripts are better than reasoning over pasted data. |
| Keep always-on instructions short | Large global instructions become a repeated tax on every turn. |

## Prompt makeovers

Instead of:

```text
Understand this whole repository and tell me how to make Copilot usage cheaper.
```

Try:

```text
Find the smallest set of files that explain how this workshop teaches effective Copilot usage.
Return only file paths and one reason for each. Do not summarize the whole repo.
```

Then follow with:

```text
Using only README.md, 04-effective-usage/README.md, and 10-copilot-cli/README.md,
create a token-efficient Copilot checklist for attendees.
Max 6 bullets. No intro.
```

Instead of:

```text
Explain everything you changed in detail.
```

Try:

```text
Report only: changed files, reason, validation, risks. Max 5 bullets.
```

Instead of pasting a full failing log, provide the useful slice:

```text
Command: npm test
Exit code: 1
Relevant error:
  TypeError: Cannot read properties of undefined (reading 'id')
  at src/services/user.js:42

Last 30 lines:
  ...

Find the likely cause and suggest the smallest fix.
```

## Suggested demo

Use Copilot CLI from the repository root. If CLI is unavailable, run the same prompts in VS Code Chat and skip the slash-command usage checks.

1. Show current context with:

   ```text
   /context
   ```

2. Ask a scoped discovery question:

   ```text
   Find the smallest file set needed to explain token-efficient Copilot usage in this workshop.
   Return only file paths and one reason each. Do not inspect sample project code unless needed.
   ```

3. Turn the result into a concise teaching artifact:

   ```text
   Using the files you selected, write a 90-second explanation of token optimization for developers.
   Include: context, output length, logs, tools, sessions, and review.
   Max 120 words.
   ```

4. If the answer is too long, refine it instead of starting over:

   ```text
   Compress that into 6 bullets. No intro. Keep one practical action per bullet.
   ```

5. Add a review loop:

   ```text
   Review that explanation against these constraints:
   max 120 words, practical actions only, no unsafe token minimization.
   List any fixes in 3 bullets.
   ```

6. If your Copilot surface exposes usage details, show them with:

   ```text
   /usage
   ```

## What to emphasize

- Token saving should not make prompts vague or unsafe.
- Clear constraints usually save more tokens than terse wording alone.
- English can be more token-efficient for repeated operational prompts, but use the language that captures the requirement best.
- Long context is useful when it prevents mistakes; it is wasteful when it replaces scoping.
- `/compact` is helpful for long sessions, but it is not free: it creates summary output and may hide details.
- Subagents can save time, but they do not automatically save tokens if each agent reads the same context.

## Try it

Ask attendees to rewrite this broad prompt:

```text
Look at the project and improve the API.
```

Into this shape:

```text
Goal:
Context:
Constraints:
Definition of done:
Output format:
```

Then ask Copilot:

```text
Review my rewritten prompt for token efficiency and correctness.
Tell me what context is missing, what can be removed, and what output limit I should add.
Max 5 bullets.
```

## Takeaway

Treat tokens as an investment, not a cost to blindly minimize. The best Copilot interactions are scoped, structured, verified, and short enough to keep the human in control.

## Source note

This section is an English workshop adaptation inspired by Tomas Kubica's token-saving article: <https://tomaskubica.cz/2026/token-saving-cz/source.md>.

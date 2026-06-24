# 14 - GitHub Copilot SDK

## Main message

The GitHub Copilot SDK lets you build Copilot-powered experiences inside your own app, script, or internal developer tool.

Simple framing:

```text
Copilot Chat is a product surface.
Copilot SDK is a building block.
Tools are how your app gives Copilot safe, useful capabilities.
```

## Why it matters

Most workshop sections show how developers use Copilot while writing code. This section flips the perspective: what if your team wants to embed a Copilot-powered assistant in a tool they already use?

The SDK gives an application a session with Copilot, then lets the application send prompts, stream responses, and expose custom tools. The important design question is not "can the model answer?" but "what context and capabilities should this app provide?"

## Sample

Project: [`samples/copilot-sdk-weather-assistant`](../samples/copilot-sdk-weather-assistant/README.md)

This sample adapts the Python flow from the Copilot SDK getting started guide:

- create a `CopilotClient`
- create a streaming session
- define a small Python tool with typed parameters
- ask Copilot to call the tool and explain the result

## Run it

Prerequisites:

- GitHub Copilot CLI authenticated locally
- Python 3.11+
- `uv`

```bash
cd samples/copilot-sdk-weather-assistant
uv sync
uv run python weather_assistant.py
```

If the Python SDK package is not available for an attendee's operating system yet, keep this as a code walkthrough. The teaching point still works: inspect the client, session, streaming handler, and tool boundary.

Expected interaction:

```text
You: What's the weather in Seattle and Tokyo?
Assistant: ...
```

Copilot should use the local `get_weather` tool, then respond using the returned weather data.

The sample prints a local tool trace such as:

```text
[tool:get_weather] returning demo weather for Seattle
```

Use that line to separate app-owned Python behavior from Copilot-generated text.

## Suggested demo

1. Start by showing the tool definition in `weather_assistant.py`.
2. Point out the three boundaries:

   | Boundary | Teaching point |
   | --- | --- |
   | Prompt | What the user asks Copilot to do. |
   | Session | The app-controlled conversation with model, streaming, and tools. |
   | Tool | The app-owned code Copilot can request to run. |

3. Run the sample and ask:

   ```text
   What's the weather in Seattle and Tokyo?
   ```

4. Ask a follow-up that reuses the same session:

   ```text
   Which city looks better for an outdoor lunch?
   ```

5. Open the code again and ask Copilot CLI:

   ```text
   Explain @samples/copilot-sdk-weather-assistant/weather_assistant.py as a teaching demo.
   Focus on client startup, session creation, streaming events, and custom tools.
   Max 6 bullets.
   ```

## What to emphasize

- The SDK does not replace normal Copilot usage. It helps you build Copilot-powered application experiences.
- The app owns the tool implementation, data access, and permission model.
- Typed tool parameters make the boundary between Copilot and application code easier to review.
- Streaming makes the assistant feel interactive without changing the core prompt-and-response loop.
- The sample uses a toy local tool. Real tools need clear permission checks, logging, and user-visible errors.

## Try it

Ask attendees to make one small, local change:

```text
In @samples/copilot-sdk-weather-assistant/weather_assistant.py,
add a deterministic weather result for Prague.
Keep the sample beginner-friendly and do not call any external APIs.
```

Then ask for a focused review:

```text
Review the weather assistant sample.
Check only whether the new city is wired into the existing tool behavior
and whether the demo remains deterministic.
Max 4 bullets.
```

## Verification prompt

After running the sample, ask Copilot to explain what happened:

```text
Based on the weather assistant code and the terminal output,
explain when Copilot generated text and when local Python code returned data.
Confirm whether the response used Seattle = 62 F/cloudy and Tokyo = 75 F/sunny,
or identify that the local tool was not used.
Use 5 bullets.
```

## Takeaway

The Copilot SDK is the bridge from "using Copilot while coding" to "building a Copilot-powered tool." Keep that bridge narrow: clear prompts, typed tools, explicit permissions, and a reviewable human loop.

## Source note

This section is based on the Python examples in the GitHub Copilot SDK getting started guide: <https://github.com/github/copilot-sdk/blob/main/docs/getting-started.md>.

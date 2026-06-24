import asyncio
import sys

from copilot import CopilotClient
from copilot.session import PermissionHandler
from copilot.session_events import SessionEventType
from copilot.tools import define_tool
from pydantic import BaseModel, Field


WEATHER_BY_CITY = {
    "seattle": {"city": "Seattle", "temperature": "62 F", "condition": "cloudy"},
    "tokyo": {"city": "Tokyo", "temperature": "75 F", "condition": "sunny"},
    "paris": {"city": "Paris", "temperature": "68 F", "condition": "partly cloudy"},
}


class GetWeatherParams(BaseModel):
    city: str = Field(description="The city to get weather for")


@define_tool(description="Get the current demo weather for a city")
async def get_weather(params: GetWeatherParams) -> dict[str, str]:
    city_key = params.city.strip().lower()
    print(f"\n[tool:get_weather] returning demo weather for {params.city}", file=sys.stderr, flush=True)
    return WEATHER_BY_CITY.get(
        city_key,
        {
            "city": params.city,
            "temperature": "70 F",
            "condition": "unknown in the demo data",
        },
    )


async def main() -> None:
    client = CopilotClient()
    await client.start()

    session = await client.create_session(
        on_permission_request=PermissionHandler.approve_all,
        model="gpt-5-mini",
        streaming=True,
        tools=[get_weather],
    )

    def handle_event(event) -> None:
        if event.type == SessionEventType.ASSISTANT_MESSAGE_DELTA:
            sys.stdout.write(event.data.delta_content)
            sys.stdout.flush()

    session.on(handle_event)

    print("Copilot SDK weather assistant (type 'exit' to quit)")
    print("Try: What's the weather in Seattle and Tokyo?\n")

    try:
        while True:
            user_input = input("You: ").strip()
            if user_input.lower() == "exit":
                break

            sys.stdout.write("Assistant: ")
            await session.send_and_wait(user_input)
            print("\n")
    finally:
        await client.stop()


if __name__ == "__main__":
    asyncio.run(main())

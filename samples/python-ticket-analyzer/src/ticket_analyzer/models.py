from dataclasses import dataclass
from datetime import date


@dataclass(frozen=True)
class Ticket:
    id: str
    title: str
    status: str
    priority: str
    owner: str
    created_at: date
    tags: list[str]

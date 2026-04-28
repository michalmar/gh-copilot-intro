from __future__ import annotations

import json
from datetime import date
from pathlib import Path

from ticket_analyzer.models import Ticket


def load_tickets(path: str | Path) -> list[Ticket]:
    source = Path(path)
    raw_items = json.loads(source.read_text())

    return [
        Ticket(
            id=item["id"],
            title=item["title"],
            status=item["status"],
            priority=item["priority"],
            owner=item["owner"],
            created_at=date.fromisoformat(item["created_at"]),
            tags=item["tags"],
        )
        for item in raw_items
    ]

from __future__ import annotations

from collections import Counter
from datetime import date

from ticket_analyzer.models import Ticket


def count_by_status(tickets: list[Ticket]) -> dict[str, int]:
    return dict(Counter(ticket.status for ticket in tickets))


def count_by_priority(tickets: list[Ticket]) -> dict[str, int]:
    return dict(Counter(ticket.priority for ticket in tickets))


def count_by_owner(tickets: list[Ticket]) -> list[tuple[str, int]]:
    counts = Counter(ticket.owner for ticket in tickets)
    return sorted(counts.items(), key=lambda item: (-item[1], item[0]))


def oldest_open_ticket(tickets: list[Ticket], today: date) -> tuple[Ticket, int] | None:
    open_tickets = [ticket for ticket in tickets if ticket.status == "open"]
    if not open_tickets:
        return None

    oldest = min(open_tickets, key=lambda ticket: ticket.created_at)
    return oldest, (today - oldest.created_at).days

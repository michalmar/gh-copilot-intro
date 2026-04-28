from datetime import date

from ticket_analyzer.analytics import count_by_owner, count_by_priority, count_by_status, oldest_open_ticket
from ticket_analyzer.data import load_tickets


def test_status_and_priority_counts() -> None:
    tickets = load_tickets("data/tickets.json")

    assert count_by_status(tickets) == {"open": 4, "closed": 2}
    assert count_by_priority(tickets) == {"P1": 2, "P2": 2, "P3": 2}


def test_owner_counts_are_sorted() -> None:
    tickets = load_tickets("data/tickets.json")

    assert count_by_owner(tickets) == [("Ava", 3), ("Noah", 2), ("Mila", 1)]


def test_oldest_open_ticket() -> None:
    tickets = load_tickets("data/tickets.json")

    oldest = oldest_open_ticket(tickets, today=date(2026, 4, 21))

    assert oldest is not None
    ticket, age_days = oldest
    assert ticket.id == "T-1004"
    assert age_days == 10

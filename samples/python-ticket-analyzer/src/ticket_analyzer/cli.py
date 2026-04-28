from __future__ import annotations

from datetime import date
from pathlib import Path

import typer

from ticket_analyzer.analytics import count_by_owner, count_by_priority, count_by_status, oldest_open_ticket
from ticket_analyzer.data import load_tickets

app = typer.Typer(help="Analyze a small ticket dataset.")


@app.command()
def summary(path: Path) -> None:
    tickets = load_tickets(path)
    status_counts = count_by_status(tickets)
    priority_counts = count_by_priority(tickets)

    typer.echo(f"Tickets: {len(tickets)}")
    typer.echo(f"Open: {status_counts.get('open', 0)}")
    typer.echo(f"Closed: {status_counts.get('closed', 0)}")

    for priority in ("P1", "P2", "P3"):
        typer.echo(f"{priority}: {priority_counts.get(priority, 0)}")

    oldest = oldest_open_ticket(tickets, today=date(2026, 4, 21))
    if oldest is not None:
        ticket, age_days = oldest
        typer.echo(f"Oldest open ticket: {ticket.id} ({age_days} days)")


@app.command()
def owners(path: Path) -> None:
    tickets = load_tickets(path)

    for owner, count in count_by_owner(tickets):
        typer.echo(f"{owner}: {count}")


if __name__ == "__main__":
    app()

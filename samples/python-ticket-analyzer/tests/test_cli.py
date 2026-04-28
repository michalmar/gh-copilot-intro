from typer.testing import CliRunner

from ticket_analyzer.cli import app

runner = CliRunner()


def test_summary_command() -> None:
    result = runner.invoke(app, ["summary", "data/tickets.json"])

    assert result.exit_code == 0
    assert "Tickets: 6" in result.stdout
    assert "Open: 4" in result.stdout
    assert "Oldest open ticket: T-1004 (10 days)" in result.stdout


def test_owners_command() -> None:
    result = runner.invoke(app, ["owners", "data/tickets.json"])

    assert result.exit_code == 0
    assert result.stdout.splitlines() == ["Ava: 3", "Noah: 2", "Mila: 1"]

# Feature spec - daily hospital performance summary

## Problem

Hospital leaders need a quick daily view of aggregate operational performance:

- production compared with plan
- production compared with the previous week
- bed occupancy compared with plan
- a short explanation of which hospitals are on track or need attention

The workshop app must use fictional aggregate data only. It must not process patient data, clinical decisions, diagnoses, insurance codes, or personal information.

## Requested app

Build a small local backend + frontend app:

```bash
npm start
```

The app should run at `http://localhost:3002` and read data from:

```text
data/excel-current-plan.json
data/power-bi-actuals.csv
```

The files emulate the original business inputs:

- **Excel**: `excel-current-plan.json` contains the current weekly plan, exported from a planning workbook as JSON.
- **Power BI**: `power-bi-actuals.csv` contains daily actuals, exported from a dashboard dataset as CSV.

The plan and actuals intentionally use different timelines. Plans are weekly records with daily targets. Actuals are daily rows. The implementation should join them by hospital and date.

## Required backend behavior

Add these API endpoints:

```text
GET /health
GET /api/hospitals
GET /api/daily-summary?date=YYYY-MM-DD&hospital=HOSPITAL_NAME
```

### `GET /health`

- return `{ "status": "ok" }`

### `GET /api/hospitals`

- load hospital names from both data sources
- return unique hospital names sorted alphabetically:

```json
{
  "items": ["Central Care", "North Clinic", "Riverside Hospital"]
}
```

### `GET /api/daily-summary`

- require `date`
- optionally filter by `hospital`
- load matching actual rows from `data/power-bi-actuals.csv`
- find the matching weekly plan in `data/excel-current-plan.json`
- compare the actual day with the planned target for the same date
- find previous-week production from the CSV row with the same hospital and date minus 7 days
- return rows sorted by hospital name
- for each row, compute:
  - `productionVariance`: `actualProduction - plannedProduction`
  - `productionVariancePercent`: percentage variance vs `plannedProduction`, rounded to one decimal
  - `weekChangeProduction`: `actualProduction - previousWeekProduction`
  - `actualOccupancyPercent`: `occupiedBeds / availableBeds * 100`, rounded to one decimal
  - `occupancyVariancePoints`: `actualOccupancyPercent - plannedOccupancyPercent`
  - `dataSources`: source labels used for the row
  - `status`: one of `on-track`, `watch`, or `needs-attention`
  - `summary`: one short sentence explaining the status

Use these status rules:

1. `needs-attention` when production is below 90% of plan or actual occupancy is at least 95%.
2. `watch` when production is below plan or occupancy is more than 5 points above plan.
3. `on-track` for all other rows.

Example response shape:

```json
{
  "items": [
    {
      "date": "2026-06-16",
      "hospital": "Central Care",
      "plannedProduction": 152,
      "actualProduction": 128,
      "productionVariance": -24,
      "productionVariancePercent": -15.8,
      "previousWeekProduction": 146,
      "weekChangeProduction": -18,
      "plannedOccupancyPercent": 80,
      "occupiedBeds": 96,
      "availableBeds": 100,
      "actualOccupancyPercent": 96,
      "occupancyVariancePoints": 16,
      "dataSources": {
        "plan": "Excel planning workbook export",
        "actuals": "Power BI dashboard export"
      },
      "status": "needs-attention",
      "summary": "Central Care needs attention because production is 15.8% below plan and occupancy is 96%."
    }
  ]
}
```

## Required frontend behavior

Create a simple dashboard that:

- loads available hospitals from `/api/hospitals`
- lets the user choose a date
- lets the user filter by hospital or view all hospitals
- shows one card per matching hospital
- displays production vs plan, previous-week change, occupancy vs plan, status, and summary text
- uses clear status labels for `on-track`, `watch`, and `needs-attention`
- shows a friendly empty state when no rows match
- shows a clear error message when the API returns an error

Keep the UI accessible:

- use semantic HTML
- connect labels to form controls
- do not rely on color alone for status

## Edge cases

- Missing `date` returns HTTP 400 with a clear error message.
- Invalid date format returns HTTP 400 with a clear error message.
- Unknown hospital with a valid date returns an empty `items` array.
- An actual row without a matching plan for the date should return HTTP 500 with a clear development-time error.
- A plan row without matching actuals for the date should not create a summary item.
- A missing previous-week actual should set `previousWeekProduction` and `weekChangeProduction` to `null`.
- Missing or invalid data should fail clearly during development instead of silently inventing values.

## Acceptance criteria

- `npm start` serves the app locally on port `3002`.
- `npm test` passes.
- The backend reads plans from `data/excel-current-plan.json` and actuals from `data/power-bi-actuals.csv`.
- The implementation joins weekly plan targets with daily actuals by hospital and date.
- The API response shape matches the spec.
- Summary rows are deterministic and sorted by hospital name.
- Tests cover the status rules and at least one API response.
- The frontend can display all rows for `2026-06-16`.
- The implementation stays beginner-friendly and avoids new dependencies.

## Suggested workshop prompt

```text
Read this spec, AGENTS.md, .github/copilot-instructions.md, .github/instructions, and .github/skills.
Summarize the required backend behavior, frontend behavior, edge cases, and acceptance criteria.
Then propose a short implementation plan before writing code.
```

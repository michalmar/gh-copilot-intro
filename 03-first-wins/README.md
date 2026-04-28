# 03 - First wins

## Main message

Start with **low-risk, high-feedback tasks**. That is the fastest way to build trust.

## Great first tasks

- explain unfamiliar code
- generate a test for existing behavior
- draft a README section
- suggest small refactors
- add validation to a simple route or function

## Demo flow

Use the Node sample for this section.

### Step 1

Ask Copilot to explain the project:

```text
In samples/node-feedback-api, explain the purpose of each file and the current API behavior.
```

### Step 2

Ask for a small improvement:

```text
Suggest 3 small improvements that fit this workshop sample. Keep them low-risk and easy to review.
```

### Step 3

Ask for a short plan before editing:

```text
Pick the smallest safe improvement from that list. Before changing code, propose a short plan and the test you would add.
```

### Step 4

Implement one focused change.

### Step 5

Ask Copilot to review the change:

```text
Review the change for likely bugs, missing edge cases, and tests that are too weak. Suggest only changes that keep the sample beginner-friendly.
```

## Why this works

- the task is concrete
- the scope is small
- the output is easy to inspect
- the user learns how Copilot thinks before trusting it with larger changes
- the review step reinforces that Copilot is a partner, not an automatic accept button

## Try it

Choose one:

1. Ask for a test.
2. Ask for a route explanation.
3. Ask for a tiny refactor.

Then ask one follow-up:

```text
What assumptions did you make, and what should I verify before accepting this?
```

## Takeaway

The first successful Copilot moments should be **small, obvious, reviewable, and easy to refine**.

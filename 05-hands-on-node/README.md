# 05 - Hands-on: Node sample

## Main message

Use this sample to practice **editor-first Copilot workflows** on a small API.

## Sample

Project: [`samples/node-feedback-api`](../samples/node-feedback-api/README.md)

## Run it

```bash
cd samples/node-feedback-api
npm install
npm test
npm start
```

The API runs on `http://localhost:3001`.

## Facilitator golden path

Use this as the visible pair-programming loop:

1. Ask Copilot to explain the API and current tests.
2. Ask for a short plan for `GET /feedback/:id`.
3. Ask it to implement the endpoint and tests.
4. Run the tests.
5. Ask Copilot to review the diff for edge cases and consistency.
6. Refine only if the review finds something meaningful.

## Suggested exercise path

### Exercise 1 - Understand before editing

Prompt:

```text
In samples/node-feedback-api, explain the API surface, the current validation rules, and the current test coverage. Then identify the smallest safe place to add GET /feedback/:id.
```

### Exercise 2 - Plan one focused feature

Prompt:

```text
Before editing, propose a short plan for adding GET /feedback/:id. Include the response shape, the not-found behavior, and the tests you would add.
```

### Exercise 3 - Implement with tests

Prompt:

```text
Implement GET /feedback/:id using that plan. Reuse the existing response style, update tests, and keep the code simple enough for a workshop demo.
```

### Exercise 4 - Review and refine

Prompt:

```text
Review the changes for likely bugs, inconsistent response shapes, missing edge cases, and weak tests. Suggest only the smallest useful refinements.
```

### Exercise 5 - Improve output shape

Prompt:

```text
Update the summary endpoint so topics are returned in descending order by average score, then alphabetically for ties.
Add or update tests.
```

## Debrief questions

- What context made the answer better?
- Did Copilot preserve the style of the existing sample?
- Was the suggested change easy to review?
- What would you tighten in the prompt next time?
- Did the review step catch anything useful?

## Optional stretch

Ask Copilot to draft a short API section for the sample README after the changes are done.

## Takeaway

This is the everyday Copilot sweet spot: understand, plan, change one thing, verify, review, and refine.

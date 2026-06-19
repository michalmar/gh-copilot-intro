---
applyTo: "src/**/*.js,tests/**/*.js"
---

Build the backend with the project stack and modern ECMAScript modules.

Keep routes thin. Put parsing, joining, calculations, sorting, and rule logic into small helper functions that are easy to test.

Read local demo data from the project data folder. Do not add a database, external API, vendor connector, or file parser library unless the spec explicitly requires it.

Validate query parameters at the API boundary. Return clear 400 responses for user input errors and fail clearly for invalid demo data.

Use the project test tools for API and helper coverage. Cover public API behavior, important rules, validation, and deterministic sorting.

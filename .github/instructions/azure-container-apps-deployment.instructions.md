---
applyTo: "12-deploy-to-azure/**"
---

Use these instructions when planning or running the section 12 Azure deployment for `samples/hospital-performance-summary-v2`.

## Workshop defaults

- Use Azure Container Apps by default. Do not use Azure App Service for this workshop deployment.
- Use Azure CLI for deployment commands.
- Use `swedencentral` as the default Azure region.
- Ask the user only for the resource group name. The resource group name must be unique for each attendee within the Azure subscription.
- Derive related names from the resource group name where practical, keeping them Azure-valid and readable:
  - Azure Container Registry
  - Container Apps environment
  - Container App
  - image name and tag
- Use Node 20 or newer for the container runtime.
- The sample currently listens on port `3002`; use Container Apps external ingress with target port `3002` unless the app has been changed to honor `process.env.PORT`.

## Architecture constraints

- Keep the environment small and workshop-friendly.
- Use Azure Container Apps with external HTTPS ingress for the web app.
- Use Azure Container Registry or the current recommended Azure Container Apps source-build flow to build and store the container image.
- Do not add Kubernetes, Azure App Service, databases, authentication, queues, secrets, external integrations, GitHub Actions, CI/CD, or deployment pipelines.
- Treat all app data as fictional demo data from the repository.
- Mention Bicep and Terraform only as the correct production direction for repeatable infrastructure, not as commands to run in this workshop.

## Deployment behavior

- Inspect the app before planning or deploying.
- Verify local readiness first when possible: package scripts, runtime port handling, data file paths, static frontend serving, and `/health`.
- For this Express app, prefer an in-process local smoke test that imports `createApp()`, listens on port `0`, checks `/health`, `/api/hospitals`, and `/api/daily-summary?date=2026-06-16`, then closes the server. Avoid background `npm start` process management unless needed.
- If the app needs deployment files such as `Dockerfile` or `.dockerignore`, create the smallest beginner-friendly versions and explain why.
- The Dockerfile should copy `src`, `public`, and `data`, expose `3002`, and run `npm start`.
- Let Copilot run the Azure CLI deployment, with the user approving commands that create, change, deploy, or delete Azure resources.
- Some Container Apps extension versions reject `--query` and `--output` on `az containerapp up`; run `az containerapp up` without output formatting, then query the FQDN with `az containerapp show`.
- Verify the deployed app with bounded `curl` calls for `/health`, `/api/hospitals`, `/api/daily-summary?date=2026-06-16`, and the browser UI.
- If verification fails, inspect Azure Container Apps status and logs before changing code or commands.
- Clean up by deleting the user-provided resource group after confirmation.

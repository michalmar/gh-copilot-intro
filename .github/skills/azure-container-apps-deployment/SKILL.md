---
name: azure-container-apps-deployment
description: Plan, deploy, verify, troubleshoot, and clean up the hospital performance sample on Azure Container Apps.
---

# Azure Container Apps Deployment Skill

## Purpose

Use this skill when planning, deploying, verifying, troubleshooting, or cleaning up the section 12 Azure deployment for `samples/hospital-performance-summary-v2`.

The goal is to minimize attendee effort while keeping the architecture and Azure CLI actions visible, reviewable, and workshop-friendly.

## Required defaults

- Deploy to **Azure Container Apps**. Do not choose Azure App Service.
- Use **Azure CLI** for the workshop deployment.
- Use **swedencentral** as the default region.
- Ask the user only for the resource group name if it is not already provided.
- Treat the resource group name as attendee-specific. It must be unique within the Azure subscription.
- Derive other resource names from the resource group name where practical.
- The sample currently listens on port `3002`; use Container Apps external ingress with target port `3002` unless the app has been changed to honor `process.env.PORT`.
- Mention **Bicep** and **Terraform** only as the production setup direction, not as tools to run in the workshop.

## Planning procedure

1. Inspect `samples/hospital-performance-summary-v2`.
2. Confirm the app shape:
   - package scripts
   - Node runtime and start command
   - `process.env.PORT` or equivalent configurable port handling
   - static frontend serving
   - data file paths
   - `/health`, `/api/hospitals`, and `/api/daily-summary`
3. If Azure skills, Azure MCP tools, or Azure-aware context are available, use them to check the signed-in Azure context and current Container Apps guidance.
4. Recommend the smallest architecture:
   - resource group
   - Azure Container Registry or current recommended source-build flow
   - Container Apps environment
   - Container App with external ingress
   - Container Apps logs for troubleshooting
5. Explain assumptions, deployment steps, verification steps, and cleanup.
6. End planning responses with a section titled `Approved deployment plan` so the deployment step can execute the agreed architecture.
7. Do not deploy during planning unless the user explicitly asks to proceed.

## Deployment procedure

1. Confirm or ask for the resource group name.
2. Confirm the current default Azure subscription if the CLI exposes more than one subscription. Prefer one concise confirmation instead of asking for a subscription name up front.
3. Verify the app locally when practical.
   - Run `npm test`.
   - Prefer an in-process Express smoke test that starts `createApp()` on port `0`, calls `/health`, `/api/hospitals`, and `/api/daily-summary?date=2026-06-16`, then closes the server. This avoids managing background server PIDs in the CLI.
4. Create only the deployment files needed for Azure Container Apps, such as `Dockerfile` and `.dockerignore`.
   - Use a beginner-friendly Node 20+ image.
   - Copy `src`, `public`, and `data` into the image.
   - Expose `3002` for this sample unless the app has changed its runtime port behavior.
5. Use Azure CLI to create resources, build or publish the image, deploy the container app, and enable external ingress.
   - `az containerapp up` may reject `--query` or `--output` in some Container Apps extension versions. Run `az containerapp up` without output formatting, then query the FQDN with `az containerapp show`.
6. Pause for user approval before commands that create, change, deploy, or delete Azure resources.
7. Let Copilot execute the deployment commands after approval. Do not hand the user a command list and stop.
8. Verify the deployed `/health`, `/api/hospitals`, `/api/daily-summary?date=2026-06-16`, and browser UI.
   - Use bounded `curl` calls with `--connect-timeout` and `--max-time` so ingress checks do not hang indefinitely.
9. If verification fails, inspect Container Apps status and logs before changing the app.

## Cleanup procedure

1. Confirm the resource group name.
2. Show the resource group that will be deleted.
3. Ask for approval.
4. Use Azure CLI to delete the resource group.

## Guardrails

- Keep commands and explanations beginner-friendly.
- Do not add Kubernetes, Azure App Service, databases, authentication, queues, secrets, external integrations, GitHub Actions, CI/CD, or deployment pipelines.
- Do not introduce real confidential, personal, regulated, or customer data.
- Prefer clear verification over broad production hardening.

## Example prompts

```text
Use the azure-container-apps-deployment skill.
Plan the Azure architecture for samples/hospital-performance-summary-v2.
Do not deploy yet.
End with a section titled "Approved deployment plan" that we can use in the deployment step.
```

```text
Use the azure-container-apps-deployment skill.
Deploy samples/hospital-performance-summary-v2 to Azure using the Approved deployment plan from the previous step.
Resource group: rg-copilot-hospital-summary-maria
```

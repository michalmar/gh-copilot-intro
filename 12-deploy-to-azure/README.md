# 12 - Deploy to Azure

## Main message

Use GitHub Copilot as the deployment partner: first to discuss and plan the Azure architecture, then to execute the deployment with reviewed Azure CLI commands.

Simple framing: deployment is not "copy commands from a slide." It is another pair-programming loop: understand the app, choose services, make a plan, let Copilot run the agreed steps, and verify the deployed result.

## What we are deploying

This section follows the vibe-coded app from section 09:

```text
samples/hospital-performance-summary-v2
```

By the time this section starts, the app should already run locally:

```bash
cd samples/hospital-performance-summary-v2
npm test
npm start
```

The expected app is a small Node.js backend + frontend that serves `/health`, `/api/hospitals`, `/api/daily-summary`, and the dashboard UI.

## Step 1 - Discuss and plan the architecture

Start by asking Copilot to inspect the app and propose an Azure architecture. The defaults and constraints live in the repository guidance:

- [Azure Container Apps deployment instructions](../.github/instructions/azure-container-apps-deployment.instructions.md)
- [Azure Container Apps deployment skill](../.github/skills/azure-container-apps-deployment/SKILL.md)

If your Copilot environment has Azure skills, Azure MCP tools, or Azure-aware extensions available, ask Copilot to use them for current service guidance and subscription checks. Keep the final workshop deployment to **Azure CLI only** so every action remains visible in the terminal.

Copy-paste prompt:

```text
Use the azure-container-apps-deployment skill.
Plan the Azure architecture for samples/hospital-performance-summary-v2.
Do not deploy yet.
End with a section titled "Approved deployment plan" that we can use in the deployment step.
```

Recommended workshop architecture:

| Need | Azure service | Why |
| --- | --- | --- |
| Run one simple Node web app | Azure Container Apps | Serverless container hosting with HTTPS ingress and scale-to-zero-friendly workshop economics |
| Build and store the container image | Azure Container Registry | Keeps the image in the same Azure subscription and avoids local architecture issues |
| Host the running app | Container Apps environment | Provides the managed boundary for ingress, revisions, logs, and scaling |
| Group workshop resources | Resource group | Easy cleanup after the workshop |
| Runtime logs and quick checks | Container Apps logs | Enough observability for a short demo |

Best practices to discuss briefly:

1. Start with the simplest service that matches the app.
2. Use Azure Container Apps by default for this workshop deployment.
3. Verify the app locally before deploying.
4. Review generated commands before approving them.
5. Use `/health` and one real API endpoint as deployment checks.
6. Use Container Apps logs for troubleshooting instead of guessing.
7. For production, move the environment definition to Bicep or Terraform and add security, monitoring, configuration, and release automation.

## Step 2 - Instruct Copilot to deploy the app

After the architecture plan looks right, ask Copilot to execute it. The attendee only supplies a resource group name. This name must be unique for each attendee within the Azure subscription; for example, include initials, a short team name, or a random suffix.

The facilitator should approve commands deliberately and keep the terminal visible so attendees see Copilot acting on the agreed plan.

Copy-paste prompt:

```text
Use the azure-container-apps-deployment skill.
Deploy samples/hospital-performance-summary-v2 to Azure using the Approved deployment plan from the previous step.
Resource group: <your-unique-resource-group-name>
```

## Suggested demo

1. Ask Copilot for the architecture plan.
2. Discuss why Azure Container Apps is the default for this app.
3. Ask Copilot to deploy using the skill.
4. Review each command before approval.
5. Open the deployed UI.
6. Ask Copilot to explain what changed from local run to Azure run.

Troubleshooting prompt:

```text
The Azure deployment completed, but verification failed.
Use the deployment commands, the app code, and Azure Container Apps logs to find the likely cause.
Check startup script, PORT handling, data file paths, dependency installation, and /health first.
Suggest the smallest workshop-friendly fix and explain how to verify it.
```

## Try it

Ask Copilot to:

1. inspect the app and summarize its hosting needs
2. recommend a small Azure Container Apps architecture
3. explain the Azure CLI deployment plan before executing it
4. deploy the app from the terminal through Copilot
5. verify `/health`, `/api/hospitals`, and the dashboard
6. troubleshoot with logs if needed
7. explain what would change for a production deployment with Bicep or Terraform

## Cleanup

At the end of the workshop, ask Copilot to clean up the Azure resources. Use the same resource group name from deployment:

```text
Use the azure-container-apps-deployment skill.
Clean up the Azure resources created for this workshop deployment.
Resource group: <your-unique-resource-group-name>
```

## Takeaway

Copilot can help with deployment when the human stays in the loop: agree on the architecture, review the commands, approve execution, verify the app, and use logs to refine.

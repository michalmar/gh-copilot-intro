const lessons = [
  {
    id: "00",
    slug: "00-start-here",
    title: "Start here",
    time: "10 min",
    phase: "Framing",
    summary: "Set the room up for a practical, slide-free workshop: goals, audience, scope, repository map, and how to move through the sections.",
    mainMessage: "This is a guided Copilot practice path, not reading material. Demo one thing, let people repeat it, then debrief what made it work.",
    facilitatorCue: "Anchor the session around human steering: intent, context, constraints, review, and judgment stay visible.",
    learnerCue: "Do not try to read the whole repo first. Follow the numbered path and use each README when you need more detail.",
    demo: "Open the root README, show the 5-6 hour flow, then point to the samples and facilitator guide.",
    tryIt: "Open README.md and 00-start-here/README.md. Identify one Copilot habit you want to improve during the workshop.",
    takeaway: "The repository is the path: explain the goal, show a live example, practice, then debrief.",
    tags: ["orientation", "flow", "facilitation"],
    source: "../../00-start-here/README.md",
    bridge: "Start with shared expectations before showing any tools."
  },
  {
    id: "01",
    slug: "01-what-is-github-copilot",
    title: "What Copilot is",
    time: "20 min",
    phase: "Foundation",
    summary: "Expand the mental model from autocomplete to a set of AI-assisted development experiences across editor, chat, agents, Spaces, and CLI.",
    mainMessage: "GitHub Copilot is a set of AI-assisted development experiences, not just inline code completion.",
    facilitatorCue: "Show the surfaces quickly, then return to the core idea: Copilot helps when the developer gives direction and reviews output.",
    learnerCue: "Try asking Copilot to explain, improve, and test the same small project so you can feel the different modes.",
    demo: "Open a sample project and ask Copilot to explain the main files, current behavior, and a safe first change.",
    tryIt: "Explain this project like I just joined the team. Focus on the main files, the current behavior, and where a safe first change would go.",
    takeaway: "Use Copilot as a thinking and implementation partner while staying responsible for intent, review, and final judgment.",
    tags: ["mental model", "surfaces", "partner"],
    source: "../../01-what-is-github-copilot/README.md",
    bridge: "Once the room sees Copilot as a partner, verify everyone can use the same surfaces."
  },
  {
    id: "02",
    slug: "02-setup",
    title: "Setup",
    time: "20 min",
    phase: "Foundation",
    summary: "Remove environment friction so the rest of the workshop feels practical instead of magical or fragile.",
    mainMessage: "Good setup removes friction. If setup is solid, Copilot feels practical.",
    facilitatorCue: "Keep setup checks visible and boring. This prevents the hands-on sections from becoming support time.",
    learnerCue: "Verify editor chat, inline suggestions, and local runtimes before starting the coding exercises.",
    demo: "Have the room verify setup with the same tiny prompt against a known file.",
    tryIt: "Explain the purpose of this file in 5 bullet points and tell me one safe improvement.",
    takeaway: "When setup is ready, Copilot can immediately help with understanding, generation, and small improvements.",
    tags: ["setup", "verification", "editor"],
    source: "../../02-setup/README.md",
    bridge: "With setup complete, shift to low-risk tasks that build trust quickly."
  },
  {
    id: "03",
    slug: "03-first-wins",
    title: "First wins",
    time: "20 min",
    phase: "Practice",
    summary: "Build confidence with small, obvious, reviewable interactions before asking Copilot for larger changes.",
    mainMessage: "Start with low-risk, high-feedback tasks. That is the fastest way to build trust.",
    facilitatorCue: "Use the Node sample and keep each ask small enough that attendees can inspect the answer.",
    learnerCue: "Pick one tiny task: explain a route, add a test, or propose a small refactor.",
    demo: "Use the Node sample to ask for a project explanation, a focused test, and a review of one tiny change.",
    tryIt: "Choose one: ask for a test, ask for a route explanation, or ask for a tiny refactor in samples/node-feedback-api.",
    takeaway: "The first successful Copilot moments should be small, obvious, reviewable, and easy to refine.",
    tags: ["trust", "small tasks", "node"],
    source: "../../03-first-wins/README.md",
    bridge: "After the first wins, teach the prompt structure that makes those wins repeatable."
  },
  {
    id: "04",
    slug: "04-effective-usage",
    title: "Effective usage",
    time: "25 min",
    phase: "Practice",
    summary: "Show how context, constraints, success criteria, and review instructions improve Copilot output more than clever wording alone.",
    mainMessage: "Copilot quality is mostly a context and steering problem.",
    facilitatorCue: "Contrast a vague prompt with a constrained prompt so the quality jump is obvious.",
    learnerCue: "Include intent, boundaries, success criteria, and a review request in one prompt.",
    demo: "Compare 'Make this API better' with a prompt that names the file, desired behavior, constraints, tests, and review criteria.",
    tryIt: "In samples/node-feedback-api, add GET /feedback/:id. Keep the current Express style, add success and 404 tests, avoid new dependencies, and review the response shape.",
    takeaway: "Be explicit about intent, boundaries, success criteria, and review. That is the single biggest upgrade in Copilot usage.",
    tags: ["prompting", "context", "review"],
    source: "../../04-effective-usage/README.md",
    bridge: "Now apply the pair-programming loop to a real but small API exercise."
  },
  {
    id: "05",
    slug: "05-hands-on-node",
    title: "Hands-on Node",
    time: "40 min",
    phase: "Hands-on",
    summary: "Practice editor-first Copilot workflows on a lightweight Express API with Vitest tests.",
    mainMessage: "Use this sample to practice editor-first Copilot workflows on a small API.",
    facilitatorCue: "Make the loop visible: explain, plan, implement one endpoint, run tests, ask for review, refine.",
    learnerCue: "Stay inside the sample and keep the feature narrow. The point is the workflow, not a large API.",
    demo: "Ask Copilot to explain the API and tests, plan GET /feedback/:id, implement it with tests, then review the change.",
    tryIt: "Explain samples/node-feedback-api and its tests. Then propose the smallest plan for GET /feedback/:id with success and not-found behavior before changing code.",
    takeaway: "This is the everyday Copilot sweet spot: understand, plan, change one thing, verify, review, and refine.",
    tags: ["node", "express", "vitest", "pair loop"],
    source: "../../05-hands-on-node/README.md",
    bridge: "After a hands-on win, show how reusable context helps repeated conversations."
  },
  {
    id: "06",
    slug: "06-spaces-and-context",
    title: "Spaces and context",
    time: "20 min",
    phase: "Reusable context",
    summary: "Introduce Spaces as shared context for recurring workstreams, customer briefs, personas, constraints, and repository context.",
    mainMessage: "Spaces let you bring together reusable context for repeated conversations.",
    facilitatorCue: "Position Spaces as prepared context, not just a longer prompt.",
    learnerCue: "Notice which facts you would otherwise paste into every chat and move those into reusable context.",
    demo: "Create a Space with this repository plus the customer brief and user personas from spaces/context.",
    tryIt: "Ask Copilot in the Space to turn the customer context into a small backlog, assumptions list, and first-draft adoption plan.",
    takeaway: "Spaces help move Copilot from ad-hoc conversations to repeatable, context-rich collaboration.",
    tags: ["spaces", "context", "reuse"],
    source: "../../06-spaces-and-context/README.md",
    bridge: "Reusable context is stronger when teams also define durable rules for what good work looks like."
  },
  {
    id: "07",
    slug: "07-constitution-and-instructions",
    title: "Constitution and instructions",
    time: "25 min",
    phase: "Reusable context",
    summary: "Show how constitutions, repository instructions, and path-specific guidance make Copilot more consistent across a team.",
    mainMessage: "If you want Copilot to work well for a team, give it stable guidance, not just clever prompts.",
    facilitatorCue: "Inspect the rules before asking for implementation. This models how a prepared teammate starts work.",
    learnerCue: "Ask Copilot which repository instructions apply before requesting a change.",
    demo: "Ask Copilot to inspect AGENTS.md and .github/instructions, then explain how they should shape future edits.",
    tryIt: "Look at AGENTS.md and the files in .github/instructions. Explain how they should shape future edits in this repository.",
    takeaway: "Constitution and instruction files make Copilot more consistent, more teachable, and easier to scale across teams.",
    tags: ["instructions", "governance", "team defaults"],
    source: "../../07-constitution-and-instructions/README.md",
    bridge: "Once guidance is durable, show when to add specialized roles, packaged procedures, or live tools."
  },
  {
    id: "08",
    slug: "08-agents-skills-mcp-plugins",
    title: "Agents, skills, MCP, plugins",
    time: "25 min",
    phase: "Extension points",
    summary: "Explain how specialized roles, reusable capabilities, connected tools, and packaged extensions expand Copilot deliberately.",
    mainMessage: "After Copilot has the right context, you can extend how it works through specialized roles, reusable capabilities, and connected tools.",
    facilitatorCue: "Keep the demo conceptual unless the audience is ready. Start with instructions and specs before adding extension points.",
    learnerCue: "Classify needs before choosing an extension point: rule, role, repeatable procedure, live tool, or packaged integration.",
    demo: "In Copilot CLI, show /agent, /skills, /mcp, and /plugin as visible extension concepts.",
    tryIt: "For each need, choose instructions, custom agent, skill, MCP, or plugin: tests for every behavior change, reusable Azure deployment procedure, live issue lookup, specialized security review, or new tool bundle.",
    takeaway: "Agents, skills, MCP, and plugins move Copilot from a single assistant to an extensible development environment. Use them deliberately.",
    tags: ["agents", "skills", "mcp", "plugins"],
    source: "../../08-agents-skills-mcp-plugins/README.md",
    bridge: "Specialization works best when Copilot has a clear spec for what done means."
  },
  {
    id: "09",
    slug: "09-spec-driven-development",
    title: "Spec-driven development",
    time: "35 min",
    phase: "Specification",
    summary: "Demonstrate how specs reduce guessing, make output reviewable, and turn Copilot into a more reliable implementation assistant.",
    mainMessage: "Specs are one of the best ways to turn Copilot from a text generator into a reliable implementation assistant.",
    facilitatorCue: "Let attendees feel the contrast between data-only vibe-coding and a guided spec pack.",
    learnerCue: "Ask for assumptions before accepting code. Then turn the goal into a spec and verify against data.",
    demo: "Compare the hospital performance v1 data-only folder with the v2 guided spec pack.",
    tryIt: "Build a first attempt from the v1 data-only folder, list the assumptions Copilot had to invent, then draft a spec from the short goal brief.",
    takeaway: "Specs make Copilot output more predictable and reviewable; instructions and skills make that behavior repeatable.",
    tags: ["specs", "requirements", "vibe coding"],
    source: "../../09-spec-driven-development/README.md",
    bridge: "With specs in place, move the same pair-programming mindset into the terminal."
  },
  {
    id: "10",
    slug: "10-copilot-cli",
    title: "Copilot CLI",
    time: "20 min",
    phase: "Terminal workflow",
    summary: "Introduce Copilot CLI as an agentic workbench for terminal-native inspection, planning, edits, sessions, and review.",
    mainMessage: "Copilot CLI brings the same pair-programming mindset into the terminal, where developers already inspect, test, and iterate.",
    facilitatorCue: "Emphasize explicit context, explicit modes, explicit permissions, durable sessions, and built-in review.",
    learnerCue: "Use file references and plan-first prompts so terminal work stays inspectable.",
    demo: "Ask the CLI to explain the Python sample CLI file and identify where a new command should go.",
    tryIt: "Explain @samples/python-ticket-analyzer/src/ticket_analyzer/cli.py and tell me which file I should change to add a new command.",
    takeaway: "CLI is a controlled agent surface for terminal-native work: explicit context, modes, permissions, sessions, and review.",
    tags: ["cli", "terminal", "agentic workbench"],
    source: "../../10-copilot-cli/README.md",
    bridge: "Now combine specs, instructions, and CLI in one practical Python exercise."
  },
  {
    id: "11",
    slug: "11-hands-on-python",
    title: "Hands-on Python and CLI",
    time: "25 min",
    phase: "Hands-on",
    summary: "Connect specs, instructions, and Copilot CLI in a lightweight Python Typer sample managed with uv.",
    mainMessage: "Use this sample to connect specs, instructions, and Copilot CLI in one small exercise.",
    facilitatorCue: "Keep it advanced but practical: inspect first, use the spec, implement with tests, then review.",
    learnerCue: "Let the CLI explain the current command before asking for a new one.",
    demo: "Run the Python sample, ask Copilot CLI to explain it, then implement one spec-backed command with tests.",
    tryIt: "In samples/python-ticket-analyzer, explain the current CLI, read the spec, then plan one new command and its tests before editing.",
    takeaway: "This is the advanced but still practical pattern: reusable guidance plus clear spec plus terminal workflow.",
    tags: ["python", "typer", "uv", "cli"],
    source: "../../11-hands-on-python/README.md",
    bridge: "The core workshop can end here, or continue into the optional Azure deployment loop."
  },
  {
    id: "12",
    slug: "12-deploy-to-azure",
    title: "Deploy to Azure",
    time: "30-45 min optional",
    phase: "Optional extension",
    summary: "Use Copilot as a deployment partner for the guided hospital app: discuss architecture, review commands, execute, and verify.",
    mainMessage: "Use GitHub Copilot as the deployment partner: first to discuss and plan the Azure architecture, then to execute with reviewed Azure CLI commands.",
    facilitatorCue: "Keep this optional and human-approved. The teaching point is reviewed execution, not cloud trivia.",
    learnerCue: "Ask for the plan before running commands, then verify the deployed app and logs.",
    demo: "Ask Copilot for the architecture plan, discuss Container Apps, deploy with the skill, review commands, and open the deployed UI.",
    tryIt: "Inspect the app and summarize its hosting needs, recommend a small Azure Container Apps architecture, and explain the Azure CLI deployment plan before executing it.",
    takeaway: "Copilot can help with deployment when the human agrees on architecture, reviews commands, approves execution, verifies, and refines.",
    tags: ["azure", "deployment", "optional"],
    source: "../../12-deploy-to-azure/README.md",
    bridge: "Close by showing how focused context keeps Copilot efficient and easier to review."
  },
  {
    id: "13",
    slug: "13-token-optimization",
    title: "Token optimization",
    time: "15-20 min optional",
    phase: "Optional extension",
    summary: "Teach context budgeting as an engineering skill: enough focused context to solve the task correctly, with as little noise as possible.",
    mainMessage: "Token optimization is about giving Copilot enough focused context to solve the task correctly, with as little noise as possible.",
    facilitatorCue: "Frame tokens as attention. Good scoping, concise constraints, and fewer retries matter more than terse wording alone.",
    learnerCue: "Rewrite broad prompts into scoped prompts with clear files, goals, constraints, and expected output.",
    demo: "Use Copilot CLI or VS Code Chat to compare context-heavy and focused prompts, then show a compact prompt makeover.",
    tryIt: "Rewrite this broad prompt: 'Look at the project and improve the API.' Include the specific file, desired behavior, constraints, tests, and output limits.",
    takeaway: "Treat tokens as an investment. The best Copilot interactions are scoped, structured, verified, and short enough to keep the human in control.",
    tags: ["tokens", "context", "efficiency"],
    source: "../../13-token-optimization/README.md",
    bridge: "End by connecting efficiency back to the whole workshop loop: focused context, fast verification, human judgment."
  }
];

const STORAGE_KEY = "copilot-workshop-walkthrough-progress";
const MODE_KEY = "copilot-workshop-walkthrough-mode";

const lessonList = document.querySelector("#lesson-list");
const lessonStage = document.querySelector("#lesson-stage");
const progressRing = document.querySelector("#progress-ring");
const progressPercent = document.querySelector("#progress-percent");
const progressLabel = document.querySelector("#progress-label");
const progressHelper = document.querySelector("#progress-helper");
const resetProgressButton = document.querySelector("#reset-progress");
const spotlightToggle = document.querySelector("#spotlight-toggle");
const modeButtons = Array.from(document.querySelectorAll(".mode-button"));
const readmeCache = new Map();

let completedLessons = readCompletedLessons();
let currentMode = readMode();
let currentLessonId = getInitialLessonId();

setMode(currentMode);
renderNavigation();
renderLesson();
updateProgress();

window.addEventListener("hashchange", () => {
  currentLessonId = getInitialLessonId();
  renderNavigation();
  renderLesson();
});

document.addEventListener("keydown", (event) => {
  const target = event.target;
  const isTyping = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement;

  if (isTyping || event.metaKey || event.ctrlKey || event.altKey) {
    return;
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    goToRelativeLesson(1);
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    goToRelativeLesson(-1);
  }
});

resetProgressButton.addEventListener("click", () => {
  completedLessons = new Set();
  persistCompletedLessons();
  renderNavigation();
  renderLesson();
  updateProgress();
  showToast("Progress reset");
});

spotlightToggle.addEventListener("click", () => {
  const enabled = !document.body.classList.contains("spotlight-mode");
  document.body.classList.toggle("spotlight-mode", enabled);
  spotlightToggle.setAttribute("aria-pressed", String(enabled));
  spotlightToggle.setAttribute("aria-label", enabled ? "Show journey" : "Focus stage");
  spotlightToggle.title = enabled ? "Show journey" : "Focus stage";
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setMode(button.dataset.mode);
    renderLesson();
  });
});

function readCompletedLessons() {
  const rawValue = localStorage.getItem(STORAGE_KEY);

  if (!rawValue) {
    return new Set();
  }

  try {
    const parsedValue = JSON.parse(rawValue);

    if (!Array.isArray(parsedValue)) {
      console.warn("Stored walkthrough progress was not a list. Resetting progress.");
      return new Set();
    }

    return new Set(parsedValue.filter((id) => lessons.some((lesson) => lesson.id === id)));
  } catch (error) {
    console.warn("Could not read stored walkthrough progress. Resetting progress.", error);
    return new Set();
  }
}

function persistCompletedLessons() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completedLessons)));
}

function readMode() {
  const mode = localStorage.getItem(MODE_KEY);
  return mode === "learner" ? "learner" : "facilitator";
}

function setMode(mode) {
  currentMode = mode === "learner" ? "learner" : "facilitator";
  localStorage.setItem(MODE_KEY, currentMode);

  modeButtons.forEach((button) => {
    const isActive = button.dataset.mode === currentMode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  progressHelper.textContent = currentMode === "facilitator"
    ? "Mark sections complete as you guide the room."
    : "Mark sections complete as you finish them.";
}

function getInitialLessonId() {
  return parseRouteFromHash();
}

function parseRouteFromHash() {
  if (!window.location.hash || window.location.hash === "#/welcome") {
    return "";
  }

  const match = window.location.hash.match(/(?:lesson\/|#?)(\d{2})$/);
  const lessonId = match ? match[1] : "";
  return lessons.some((lesson) => lesson.id === lessonId) ? lessonId : "";
}

function getCurrentLesson() {
  return lessons.find((lesson) => lesson.id === currentLessonId) || lessons[0];
}

function renderNavigation() {
  const welcomeLink = `
    <button class="lesson-link ${currentLessonId ? "" : "is-active"}" type="button" data-welcome aria-current="${currentLessonId ? "false" : "page"}">
      <span class="lesson-number">W</span>
      <span>
        <strong>Welcome</strong>
        <small>Presentation path</small>
      </span>
      <span class="complete-dot" aria-hidden="true"></span>
    </button>
  `;

  lessonList.innerHTML = welcomeLink + lessons.map((lesson) => {
    const complete = completedLessons.has(lesson.id);
    const active = lesson.id === currentLessonId;

    return `
      <button class="lesson-link ${active ? "is-active" : ""} ${complete ? "is-complete" : ""}" type="button" data-lesson-id="${lesson.id}" aria-current="${active ? "page" : "false"}">
        <span class="lesson-number">${escapeHtml(lesson.id)}</span>
        <span>
          <strong>${escapeHtml(lesson.title)}</strong>
          <small>${escapeHtml(lesson.phase)} - ${escapeHtml(lesson.time)}</small>
        </span>
        <span class="complete-dot" aria-label="${complete ? "Complete" : "Not complete"}"></span>
      </button>
    `;
  }).join("");

  lessonList.querySelector("[data-welcome]")?.addEventListener("click", navigateToWelcome);

  lessonList.querySelectorAll("[data-lesson-id]").forEach((button) => {
    button.addEventListener("click", () => navigateToLesson(button.dataset.lessonId));
  });
}

function renderLesson() {
  if (!currentLessonId) {
    renderWelcome();
    return;
  }

  const lesson = getCurrentLesson();
  const index = lessons.findIndex((entry) => entry.id === lesson.id);
  const previousLesson = lessons[index - 1];
  const nextLesson = lessons[index + 1];
  const complete = completedLessons.has(lesson.id);
  const modeTitle = currentMode === "facilitator" ? "Facilitator cue" : "Learner cue";
  const modeText = currentMode === "facilitator" ? lesson.facilitatorCue : lesson.learnerCue;

  lessonStage.innerHTML = `
    <article class="lesson-view">
      <header class="lesson-hero">
        <div>
          <div class="lesson-kicker">
            <span class="pill hot">${escapeHtml(lesson.id)}</span>
            <span class="pill">${escapeHtml(lesson.phase)}</span>
            <span class="pill">${escapeHtml(lesson.time)}</span>
            ${lesson.time.includes("optional") ? '<span class="pill">Optional</span>' : ""}
          </div>
          <h2 class="lesson-title">${escapeHtml(lesson.title)}</h2>
          <p class="lesson-summary">${escapeHtml(lesson.summary)}</p>
        </div>
      </header>

      <section class="card-grid" aria-label="Lesson guidance cards">
        <article class="card feature">
          <h3>Main message</h3>
          <p>${escapeHtml(lesson.mainMessage)}</p>
        </article>
        <article class="card">
          <h3>${escapeHtml(modeTitle)}</h3>
          <p>${escapeHtml(modeText)}</p>
        </article>
        <article class="card">
          <h3>Suggested demo</h3>
          <p>${escapeHtml(lesson.demo)}</p>
        </article>
        <article class="card">
          <h3>Takeaway</h3>
          <p>${escapeHtml(lesson.takeaway)}</p>
        </article>
      </section>

      <section class="prompt-card" aria-labelledby="try-it-title">
        <div class="prompt-header">
          <h3 id="try-it-title">Try it prompt or action</h3>
          <button class="copy-button" type="button" data-copy="${escapeAttribute(lesson.tryIt)}">Copy</button>
        </div>
        <pre class="prompt-text">${escapeHtml(lesson.tryIt)}</pre>
      </section>

      <section class="bridge-card" aria-labelledby="bridge-title">
        <h3 id="bridge-title">Topic transfer</h3>
        <p>${escapeHtml(lesson.bridge)}</p>
        <div class="bridge-row">
          <div class="bridge-node">
            <span>Previous</span>
            <strong>${escapeHtml(previousLesson ? `${previousLesson.id} - ${previousLesson.title}` : "Workshop opening")}</strong>
          </div>
          <div class="bridge-arrow" aria-hidden="true">-&gt;</div>
          <div class="bridge-node">
            <span>Next</span>
            <strong>${escapeHtml(nextLesson ? `${nextLesson.id} - ${nextLesson.title}` : "Workshop close")}</strong>
          </div>
        </div>
      </section>

      <div class="tag-row" aria-label="Lesson tags">
        ${lesson.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
      </div>

      <section class="readme-card" aria-labelledby="readme-title">
        <div class="prompt-header">
          <h3 id="readme-title">README preview</h3>
          <a class="source-link" href="${escapeAttribute(lesson.source)}" target="_blank" rel="noreferrer">Open source file</a>
        </div>
        <div class="markdown-body" data-readme-content>
          <p>Loading README...</p>
        </div>
      </section>

      <footer class="lesson-footer">
        <button class="complete-button ${complete ? "is-complete" : ""}" type="button" data-complete="${lesson.id}">
          ${complete ? "Marked complete" : "Mark complete"}
        </button>
        <div class="nav-cluster">
          <button class="nav-button" type="button" data-nav="-1" ${previousLesson ? "" : "disabled"}>Previous</button>
          <button class="nav-button" type="button" data-nav="1" ${nextLesson ? "" : "disabled"}>Next</button>
        </div>
      </footer>
    </article>
  `;

  const copyButton = lessonStage.querySelector("[data-copy]");
  copyButton.addEventListener("click", () => copyText(copyButton.dataset.copy));

  lessonStage.querySelector("[data-complete]").addEventListener("click", () => toggleLessonComplete(lesson.id));

  lessonStage.querySelectorAll("[data-nav]").forEach((button) => {
    button.addEventListener("click", () => goToRelativeLesson(Number(button.dataset.nav)));
  });

  renderReadme(lesson);
}

function renderWelcome() {
  lessonStage.innerHTML = `
    <article class="welcome-view">
      <section class="welcome-hero" aria-labelledby="welcome-title">
        <p class="eyebrow">Hands-on workshop path</p>
        <h1 id="welcome-title">Learn GitHub Copilot by using it from start to finish.</h1>
        <p>
          Move section by section through a practical GitHub Copilot journey: setup, first editor wins,
          effective prompting, hands-on Node and Python exercises, reusable context, specs, agents, CLI,
          and optional Azure deployment. Each step gives you a demo, a prompt to try, and a review habit
          that keeps the developer in control.
        </p>
        <button class="primary-button" type="button" data-start>Start with section 00</button>
      </section>

      <section class="loop-orbit" aria-label="Pair-programming loop">
        <span>
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 2a6 6 0 0 1 5.62 3.92l-1.4.52A4.5 4.5 0 1 0 8 12.5c1 0 1.93-.33 2.68-.88L9.5 10.44V7h1.5v2.82l.74.74A5.98 5.98 0 1 1 8 2Z"/>
          </svg>
          <strong>Understand</strong>
        </span>
        <span>
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M3 2.75A1.75 1.75 0 0 1 4.75 1h6.5A1.75 1.75 0 0 1 13 2.75v10.5A1.75 1.75 0 0 1 11.25 15h-6.5A1.75 1.75 0 0 1 3 13.25V2.75ZM4.75 2.5a.25.25 0 0 0-.25.25v10.5c0 .14.11.25.25.25h6.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5ZM6 5h4V3.75H6V5Zm0 3h4V6.75H6V8Zm0 3h2.75V9.75H6V11Z"/>
          </svg>
          <strong>Plan</strong>
        </span>
        <span>
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="m5.22 4.22 1.06 1.06L3.56 8l2.72 2.72-1.06 1.06L1.44 8l3.78-3.78Zm5.56 0L14.56 8l-3.78 3.78-1.06-1.06L12.44 8 9.72 5.28l1.06-1.06ZM8.85 3l1.46.34L7.15 13l-1.46-.34L8.85 3Z"/>
          </svg>
          <strong>Implement</strong>
        </span>
        <span>
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6.75 10.18 3.97 7.4 2.91 8.46l3.84 3.84 6.34-6.34-1.06-1.06-5.28 5.28ZM8 1.5A6.5 6.5 0 1 0 8 14.5 6.5 6.5 0 0 0 8 1.5Zm0 1.5a5 5 0 1 1 0 10A5 5 0 0 1 8 3Z"/>
          </svg>
          <strong>Verify</strong>
        </span>
        <span>
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1.5 2.5 4v3.2c0 3.18 2.16 6.1 5.5 7.3 3.34-1.2 5.5-4.12 5.5-7.3V4L8 1.5ZM4 4.97l4-1.82 4 1.82V7.2c0 2.38-1.52 4.64-4 5.68-2.48-1.04-4-3.3-4-5.68V4.97Zm2.72 3.3L5.66 9.34 7.3 11l3.42-3.42-1.06-1.06L7.3 8.88l-.58-.6Z"/>
          </svg>
          <strong>Review</strong>
        </span>
        <span>
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M3.5 3.5h7.88L9.94 2.06 11 1l3.25 3.25L11 7.5 9.94 6.44 11.38 5H3.5v3H2V5a1.5 1.5 0 0 1 1.5-1.5ZM12.5 12.5H4.62l1.44 1.44L5 15l-3.25-3.25L5 8.5l1.06 1.06L4.62 11H12.5V8H14v3a1.5 1.5 0 0 1-1.5 1.5Z"/>
          </svg>
          <strong>Refine</strong>
        </span>
      </section>
    </article>
  `;

  lessonStage.querySelector("[data-start]").addEventListener("click", () => navigateToLesson("00"));
}

function navigateToWelcome() {
  currentLessonId = "";
  window.location.hash = "#/welcome";
  renderNavigation();
  renderLesson();
  lessonStage.focus({ preventScroll: true });
}

function navigateToLesson(lessonId) {
  if (!lessons.some((lesson) => lesson.id === lessonId)) {
    console.warn(`Unknown lesson id: ${lessonId}`);
    return;
  }

  currentLessonId = lessonId;
  window.location.hash = `#/lesson/${lessonId}`;
  renderNavigation();
  renderLesson();
  lessonStage.focus({ preventScroll: true });
}

function goToRelativeLesson(direction) {
  if (!currentLessonId) {
    if (direction > 0) {
      navigateToLesson(lessons[0].id);
    }

    return;
  }

  const currentIndex = lessons.findIndex((lesson) => lesson.id === currentLessonId);

  if (currentIndex === 0 && direction < 0) {
    navigateToWelcome();
    return;
  }

  const nextLesson = lessons[currentIndex + direction];

  if (!nextLesson) {
    return;
  }

  navigateToLesson(nextLesson.id);
}

function toggleLessonComplete(lessonId) {
  if (completedLessons.has(lessonId)) {
    completedLessons.delete(lessonId);
    showToast("Marked incomplete");
  } else {
    completedLessons.add(lessonId);
    showToast("Marked complete");
  }

  persistCompletedLessons();
  renderNavigation();
  renderLesson();
  updateProgress();
}

function updateProgress() {
  const completeCount = completedLessons.size;
  const percent = Math.round((completeCount / lessons.length) * 100);
  progressRing.setAttribute("aria-label", `${percent}% complete`);
  progressPercent.textContent = `${percent}%`;
  progressLabel.textContent = `${completeCount} of ${lessons.length} complete`;
}

async function renderReadme(lesson) {
  const container = lessonStage.querySelector("[data-readme-content]");

  if (!container) {
    return;
  }

  try {
    const markdown = await getReadmeMarkdown(lesson.source);

    if (lesson.id !== currentLessonId) {
      return;
    }

    container.innerHTML = markdownToHtml(markdown, lesson.source);
  } catch (error) {
    console.warn(`Could not render README for ${lesson.slug}.`, error);
    container.innerHTML = "<p>README preview is unavailable. Use the source file link above.</p>";
  }
}

async function getReadmeMarkdown(source) {
  if (readmeCache.has(source)) {
    return readmeCache.get(source);
  }

  const response = await fetch(source);

  if (!response.ok) {
    throw new Error(`README request failed with ${response.status}`);
  }

  const markdown = await response.text();
  readmeCache.set(source, markdown);
  return markdown;
}

function markdownToHtml(markdown, sourcePath) {
  const lines = markdown.replaceAll("\r\n", "\n").split("\n");
  const html = [];
  let paragraph = [];
  let listItems = [];
  let inCode = false;
  let codeLines = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) {
      return;
    }

    html.push(`<p>${formatInline(paragraph.join(" "), sourcePath)}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (listItems.length === 0) {
      return;
    }

    html.push(`<ul>${listItems.map((item) => `<li>${formatInline(item, sourcePath)}</li>`).join("")}</ul>`);
    listItems = [];
  };

  lines.forEach((line) => {
    if (line.startsWith("```")) {
      if (inCode) {
        html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        codeLines = [];
        inCode = false;
      } else {
        flushParagraph();
        flushList();
        inCode = true;
      }
      return;
    }

    if (inCode) {
      codeLines.push(line);
      return;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = Math.min(heading[1].length + 1, 6);
      html.push(`<h${level}>${formatInline(heading[2], sourcePath)}</h${level}>`);
      return;
    }

    const bullet = line.match(/^\s*(?:[-*]|\d+\.)\s+(.+)$/);
    if (bullet) {
      flushParagraph();
      listItems.push(bullet[1]);
      return;
    }

    if (!line.trim()) {
      flushParagraph();
      flushList();
      return;
    }

    paragraph.push(line.trim());
  });

  if (inCode) {
    html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
  }

  flushParagraph();
  flushList();

  return html.join("");
}

function formatInline(value, sourcePath) {
  let output = escapeHtml(value);

  output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    const resolvedHref = resolveMarkdownHref(href, sourcePath);
    return `<a href="${escapeAttribute(resolvedHref)}" target="_blank" rel="noreferrer">${label}</a>`;
  });

  output = output
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");

  return output;
}

function resolveMarkdownHref(href, sourcePath) {
  if (/^(https?:|mailto:|#)/.test(href)) {
    return href;
  }

  return new URL(href, new URL(sourcePath, window.location.href)).href;
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      showToast("Copied prompt");
      return;
    } catch (error) {
      console.warn("Clipboard API copy failed. Trying textarea fallback.", error);
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.append(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();

  if (copied) {
    showToast("Copied prompt");
  } else {
    showToast("Copy unavailable");
  }
}

function showToast(message) {
  const template = document.querySelector("#toast-template");
  const toast = template.content.firstElementChild.cloneNode(true);
  toast.textContent = message;
  document.body.append(toast);
  window.setTimeout(() => toast.remove(), 1800);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

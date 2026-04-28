import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";

import { createApp } from "../src/app.js";
import { resetFeedbackStore } from "../src/feedback-store.js";

describe("feedback API", () => {
  const app = createApp();

  beforeEach(() => {
    resetFeedbackStore();
  });

  it("returns health status", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });

  it("lists all feedback items", async () => {
    const response = await request(app).get("/feedback");

    expect(response.status).toBe(200);
    expect(response.body.items).toHaveLength(3);
  });

  it("filters feedback by topic", async () => {
    const response = await request(app).get("/feedback").query({ topic: "copilot-chat" });

    expect(response.status).toBe(200);
    expect(response.body.items).toHaveLength(2);
  });

  it("creates a feedback item", async () => {
    const response = await request(app).post("/feedback").send({
      author: "Liam",
      topic: "copilot-cli",
      score: 5,
      comment: "Very useful once I gave it a narrow task and a spec.",
    });

    expect(response.status).toBe(201);
    expect(response.body.topic).toBe("copilot-cli");
    expect(response.body.id).toBeTruthy();
  });

  it("rejects invalid feedback payloads", async () => {
    const response = await request(app).post("/feedback").send({
      author: "",
      topic: "copilot-cli",
      score: 10,
      comment: "bad",
    });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Validation failed");
  });

  it("returns summary by topic", async () => {
    const response = await request(app).get("/feedback/summary");

    expect(response.status).toBe(200);
    expect(response.body.items).toEqual([
      { topic: "copilot-chat", count: 2, averageScore: 4 },
      { topic: "inline-completions", count: 1, averageScore: 4 },
    ]);
  });
});

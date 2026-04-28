import express from "express";
import { ZodError } from "zod";

import { createFeedback, listFeedback, summarizeFeedback } from "./feedback-store.js";
import { createFeedbackSchema, listQuerySchema } from "./schemas.js";

export function createApp() {
  const app = express();
  app.use(express.json());

  app.get("/health", (_request, response) => {
    response.json({ status: "ok" });
  });

  app.get("/feedback", (request, response, next) => {
    try {
      const query = listQuerySchema.parse(request.query);
      response.json({ items: listFeedback(query) });
    } catch (error) {
      next(error);
    }
  });

  app.post("/feedback", (request, response, next) => {
    try {
      const input = createFeedbackSchema.parse(request.body);
      const feedbackItem = createFeedback(input);
      response.status(201).json(feedbackItem);
    } catch (error) {
      next(error);
    }
  });

  app.get("/feedback/summary", (_request, response) => {
    response.json({ items: summarizeFeedback() });
  });

  app.use((error, _request, response, next) => {
    if (error instanceof ZodError) {
      response.status(400).json({
        error: "Validation failed",
        issues: error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        })),
      });
      return;
    }

    next(error);
  });

  app.use((error, _request, response, _next) => {
    response.status(500).json({
      error: "Unexpected server error",
      detail: error.message,
    });
  });

  return app;
}

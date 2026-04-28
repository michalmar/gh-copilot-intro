import { z } from "zod";

export const listQuerySchema = z.object({
  topic: z.string().trim().min(1).optional(),
  minScore: z.coerce.number().int().min(1).max(5).optional(),
});

export const createFeedbackSchema = z.object({
  author: z.string().trim().min(1),
  topic: z.string().trim().min(1),
  score: z.number().int().min(1).max(5),
  comment: z.string().trim().min(5).max(280),
});

import { randomUUID } from "node:crypto";

const seedFeedback = [
  {
    id: "fb-1",
    author: "Ava",
    topic: "copilot-chat",
    score: 5,
    comment: "Great for understanding unfamiliar code quickly.",
    createdAt: "2026-04-01T09:00:00.000Z",
  },
  {
    id: "fb-2",
    author: "Noah",
    topic: "inline-completions",
    score: 4,
    comment: "Fast for repetitive edits, but I still review the result.",
    createdAt: "2026-04-02T10:30:00.000Z",
  },
  {
    id: "fb-3",
    author: "Mila",
    topic: "copilot-chat",
    score: 3,
    comment: "Helpful, but answers improve a lot when I attach the right file.",
    createdAt: "2026-04-03T14:15:00.000Z",
  },
];

let feedbackItems = structuredClone(seedFeedback);

export function resetFeedbackStore() {
  feedbackItems = structuredClone(seedFeedback);
}

export function listFeedback({ topic, minScore } = {}) {
  return feedbackItems.filter((item) => {
    if (topic && item.topic !== topic) {
      return false;
    }

    if (typeof minScore === "number" && item.score < minScore) {
      return false;
    }

    return true;
  });
}

export function createFeedback(input) {
  const feedbackItem = {
    id: randomUUID(),
    author: input.author,
    topic: input.topic,
    score: input.score,
    comment: input.comment,
    createdAt: new Date().toISOString(),
  };

  feedbackItems.push(feedbackItem);
  return feedbackItem;
}

export function summarizeFeedback() {
  const grouped = new Map();

  for (const item of feedbackItems) {
    const current = grouped.get(item.topic) ?? { topic: item.topic, count: 0, totalScore: 0 };
    current.count += 1;
    current.totalScore += item.score;
    grouped.set(item.topic, current);
  }

  return Array.from(grouped.values()).map((item) => ({
    topic: item.topic,
    count: item.count,
    averageScore: Number((item.totalScore / item.count).toFixed(2)),
  }));
}

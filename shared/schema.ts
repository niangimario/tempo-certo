import { z } from "zod";

export const questionSchema = z.object({
  id: z.number(),
  text: z.string(),
  options: z.array(z.string()),
  correctOptionIndex: z.number(),
});

export const testConfigSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  durationMinutes: z.number(),
  questions: z.array(questionSchema),
});

export const testSessionSchema = z.object({
  id: z.string(),
  testConfigId: z.string(),
  startedAt: z.string(),
  answers: z.record(z.string(), z.number()),
  status: z.enum(["in_progress", "completed", "timed_out"]),
});

export const testResultSchema = z.object({
  sessionId: z.string(),
  totalQuestions: z.number(),
  correctAnswers: z.number(),
  score: z.number(),
  answers: z.array(z.object({
    questionId: z.number(),
    selectedOptionIndex: z.number().nullable(),
    correctOptionIndex: z.number(),
    isCorrect: z.boolean(),
  })),
  completedAt: z.string(),
  status: z.enum(["completed", "timed_out"]),
});

export const submitTestSchema = z.object({
  sessionId: z.string(),
  answers: z.record(z.string(), z.number()),
  timedOut: z.boolean().optional(),
});

export type Question = z.infer<typeof questionSchema>;
export type TestConfig = z.infer<typeof testConfigSchema>;
export type TestSession = z.infer<typeof testSessionSchema>;
export type TestResult = z.infer<typeof testResultSchema>;
export type SubmitTest = z.infer<typeof submitTestSchema>;

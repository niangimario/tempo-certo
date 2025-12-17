import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { submitTestSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get("/api/test-config", async (req, res) => {
    try {
      const config = await storage.getTestConfig();
      const safeConfig = {
        ...config,
        questions: config.questions.map(q => ({
          id: q.id,
          text: q.text,
          options: q.options,
        })),
      };
      res.json(safeConfig);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch test configuration" });
    }
  });

  app.post("/api/sessions", async (req, res) => {
    try {
      const config = await storage.getTestConfig();
      const session = await storage.createSession(config.id);
      res.json(session);
    } catch (error) {
      res.status(500).json({ error: "Failed to create session" });
    }
  });

  app.get("/api/sessions/:id", async (req, res) => {
    try {
      const session = await storage.getSession(req.params.id);
      if (!session) {
        return res.status(404).json({ error: "Session not found" });
      }
      res.json(session);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch session" });
    }
  });

  app.post("/api/sessions/submit", async (req, res) => {
    try {
      const parsed = submitTestSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid submission data" });
      }

      const { sessionId, answers, timedOut } = parsed.data;
      
      const session = await storage.getSession(sessionId);
      if (!session) {
        return res.status(404).json({ error: "Session not found" });
      }

      if (session.status !== "in_progress") {
        return res.status(400).json({ error: "Test already submitted" });
      }

      const result = await storage.calculateResult(sessionId, answers, timedOut || false);
      if (!result) {
        return res.status(500).json({ error: "Failed to calculate result" });
      }

      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Failed to submit test" });
    }
  });

  return httpServer;
}

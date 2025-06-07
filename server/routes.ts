import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertFeedbackSchema, insertMoodEntrySchema, insertBreathingActivitySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Feedback endpoints
  app.post("/api/feedback", async (req, res) => {
    try {
      const validatedData = insertFeedbackSchema.parse(req.body);
      const feedback = await storage.createFeedback(validatedData);
      res.json(feedback);
    } catch (error) {
      res.status(400).json({ error: "Invalid feedback data" });
    }
  });

  app.get("/api/feedback", async (req, res) => {
    try {
      const feedbacks = await storage.getFeedbacks();
      res.json(feedbacks);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch feedbacks" });
    }
  });

  // Mood tracking endpoints
  app.post("/api/mood", async (req, res) => {
    try {
      const validatedData = insertMoodEntrySchema.parse(req.body);
      const moodEntry = await storage.createMoodEntry(validatedData);
      res.json(moodEntry);
    } catch (error) {
      res.status(400).json({ error: "Invalid mood data" });
    }
  });

  app.get("/api/mood", async (req, res) => {
    try {
      const moodEntries = await storage.getMoodEntries();
      res.json(moodEntries);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch mood entries" });
    }
  });

  // Breathing activity endpoints
  app.post("/api/breathing", async (req, res) => {
    try {
      const validatedData = insertBreathingActivitySchema.parse(req.body);
      const activity = await storage.createBreathingActivity(validatedData);
      res.json(activity);
    } catch (error) {
      res.status(400).json({ error: "Invalid breathing activity data" });
    }
  });

  app.get("/api/breathing", async (req, res) => {
    try {
      const activities = await storage.getBreathingActivities();
      res.json(activities);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch breathing activities" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

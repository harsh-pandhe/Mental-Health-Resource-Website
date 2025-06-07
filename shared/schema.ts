import { pgTable, text, serial, integer, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const feedbacks = pgTable("feedbacks", {
  id: serial("id").primaryKey(),
  content: text("content"),
  rating: integer("rating").notNull(),
  mood: text("mood"),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
  metadata: jsonb("metadata"),
});

export const moodEntries = pgTable("mood_entries", {
  id: serial("id").primaryKey(),
  mood: text("mood").notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
  notes: text("notes"),
});

export const breathingActivities = pgTable("breathing_activities", {
  id: serial("id").primaryKey(),
  duration: integer("duration").notNull(), // in seconds
  timestamp: timestamp("timestamp").defaultNow().notNull(),
  completed: integer("completed").notNull().default(0), // boolean as integer
});

export const insertFeedbackSchema = createInsertSchema(feedbacks).omit({
  id: true,
  timestamp: true,
});

export const insertMoodEntrySchema = createInsertSchema(moodEntries).omit({
  id: true,
  timestamp: true,
});

export const insertBreathingActivitySchema = createInsertSchema(breathingActivities).omit({
  id: true,
  timestamp: true,
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertFeedback = z.infer<typeof insertFeedbackSchema>;
export type Feedback = typeof feedbacks.$inferSelect;

export type InsertMoodEntry = z.infer<typeof insertMoodEntrySchema>;
export type MoodEntry = typeof moodEntries.$inferSelect;

export type InsertBreathingActivity = z.infer<typeof insertBreathingActivitySchema>;
export type BreathingActivity = typeof breathingActivities.$inferSelect;

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

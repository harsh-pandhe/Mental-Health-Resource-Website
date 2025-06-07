import { 
  users, 
  feedbacks, 
  moodEntries, 
  breathingActivities,
  type User, 
  type InsertUser,
  type Feedback,
  type InsertFeedback,
  type MoodEntry,
  type InsertMoodEntry,
  type BreathingActivity,
  type InsertBreathingActivity
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createFeedback(feedback: InsertFeedback): Promise<Feedback>;
  getFeedbacks(): Promise<Feedback[]>;
  
  createMoodEntry(moodEntry: InsertMoodEntry): Promise<MoodEntry>;
  getMoodEntries(): Promise<MoodEntry[]>;
  
  createBreathingActivity(activity: InsertBreathingActivity): Promise<BreathingActivity>;
  getBreathingActivities(): Promise<BreathingActivity[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private feedbacks: Map<number, Feedback>;
  private moodEntries: Map<number, MoodEntry>;
  private breathingActivities: Map<number, BreathingActivity>;
  private currentUserId: number;
  private currentFeedbackId: number;
  private currentMoodEntryId: number;
  private currentBreathingActivityId: number;

  constructor() {
    this.users = new Map();
    this.feedbacks = new Map();
    this.moodEntries = new Map();
    this.breathingActivities = new Map();
    this.currentUserId = 1;
    this.currentFeedbackId = 1;
    this.currentMoodEntryId = 1;
    this.currentBreathingActivityId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createFeedback(insertFeedback: InsertFeedback): Promise<Feedback> {
    const id = this.currentFeedbackId++;
    const feedback: Feedback = { 
      id, 
      content: insertFeedback.content ?? null,
      rating: insertFeedback.rating,
      mood: insertFeedback.mood ?? null,
      metadata: insertFeedback.metadata ?? null,
      timestamp: new Date() 
    };
    this.feedbacks.set(id, feedback);
    return feedback;
  }

  async getFeedbacks(): Promise<Feedback[]> {
    return Array.from(this.feedbacks.values()).sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
    );
  }

  async createMoodEntry(insertMoodEntry: InsertMoodEntry): Promise<MoodEntry> {
    const id = this.currentMoodEntryId++;
    const moodEntry: MoodEntry = { 
      id, 
      mood: insertMoodEntry.mood,
      notes: insertMoodEntry.notes ?? null,
      timestamp: new Date() 
    };
    this.moodEntries.set(id, moodEntry);
    return moodEntry;
  }

  async getMoodEntries(): Promise<MoodEntry[]> {
    return Array.from(this.moodEntries.values()).sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
    );
  }

  async createBreathingActivity(insertActivity: InsertBreathingActivity): Promise<BreathingActivity> {
    const id = this.currentBreathingActivityId++;
    const activity: BreathingActivity = { 
      id, 
      duration: insertActivity.duration,
      completed: insertActivity.completed ?? 0,
      timestamp: new Date() 
    };
    this.breathingActivities.set(id, activity);
    return activity;
  }

  async getBreathingActivities(): Promise<BreathingActivity[]> {
    return Array.from(this.breathingActivities.values()).sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
    );
  }
}

export const storage = new MemStorage();

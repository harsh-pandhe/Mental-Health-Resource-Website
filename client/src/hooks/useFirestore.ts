import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertFeedback, InsertMoodEntry, InsertBreathingActivity } from "@shared/schema";

// Custom hook for feedback operations
export function useFeedback() {
  const queryClient = useQueryClient();

  const feedbacks = useQuery({
    queryKey: ["/api/feedback"],
  });

  const submitFeedback = useMutation({
    mutationFn: async (data: InsertFeedback) => {
      const response = await apiRequest("POST", "/api/feedback", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/feedback"] });
    },
  });

  return {
    feedbacks: feedbacks.data || [],
    isLoading: feedbacks.isLoading,
    submitFeedback,
    isSubmitting: submitFeedback.isPending,
  };
}

// Custom hook for mood tracking
export function useMoodTracking() {
  const queryClient = useQueryClient();

  const moodEntries = useQuery({
    queryKey: ["/api/mood"],
  });

  const addMoodEntry = useMutation({
    mutationFn: async (data: InsertMoodEntry) => {
      const response = await apiRequest("POST", "/api/mood", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/mood"] });
    },
  });

  return {
    moodEntries: moodEntries.data || [],
    isLoading: moodEntries.isLoading,
    addMoodEntry,
    isAdding: addMoodEntry.isPending,
  };
}

// Custom hook for breathing activities
export function useBreathingActivities() {
  const queryClient = useQueryClient();

  const activities = useQuery({
    queryKey: ["/api/breathing"],
  });

  const addActivity = useMutation({
    mutationFn: async (data: InsertBreathingActivity) => {
      const response = await apiRequest("POST", "/api/breathing", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/breathing"] });
    },
  });

  return {
    activities: activities.data || [],
    isLoading: activities.isLoading,
    addActivity,
    isAdding: addActivity.isPending,
  };
}

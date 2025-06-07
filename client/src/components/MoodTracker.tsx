import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { InsertMoodEntry } from "@shared/schema";

const moodOptions = [
  { value: "great", emoji: "😊", label: "Great" },
  { value: "good", emoji: "🙂", label: "Good" },
  { value: "okay", emoji: "😐", label: "Okay" },
  { value: "sad", emoji: "😢", label: "Sad" },
  { value: "anxious", emoji: "😰", label: "Anxious" },
];

const moodResponses = {
  great: "Wonderful! Keep up the positive energy.",
  good: "Great to hear! Consider sharing your positivity.",
  okay: "That's perfectly normal. Take care of yourself.",
  sad: "It's okay to feel sad. Consider talking to someone.",
  anxious: "Anxiety is manageable. Try our breathing exercise."
};

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [showResponse, setShowResponse] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const moodMutation = useMutation({
    mutationFn: async (moodData: InsertMoodEntry) => {
      const response = await apiRequest("POST", "/api/mood", moodData);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/mood"] });
      setShowResponse(true);
      setTimeout(() => setShowResponse(false), 5000);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to save mood entry. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    moodMutation.mutate({ mood });
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">How are you feeling today?</h3>
      <div className="flex justify-center gap-4 flex-wrap">
        {moodOptions.map((option) => (
          <Button
            key={option.value}
            variant={selectedMood === option.value ? "default" : "outline"}
            className={`mood-btn flex flex-col items-center p-4 h-auto ${
              selectedMood === option.value 
                ? 'bg-primary text-primary-foreground border-primary' 
                : 'border-2 border-gray-200 hover:border-primary'
            }`}
            onClick={() => handleMoodSelect(option.value)}
            disabled={moodMutation.isPending}
          >
            <span className="text-2xl mb-2">{option.emoji}</span>
            <span className="text-sm font-medium">{option.label}</span>
          </Button>
        ))}
      </div>
      
      {showResponse && selectedMood && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg text-center">
          <p className="text-blue-800 text-sm">
            {moodResponses[selectedMood as keyof typeof moodResponses]}
          </p>
        </div>
      )}
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { InsertBreathingActivity } from "@shared/schema";

type BreathingPhase = "inhale" | "hold" | "exhale";

export default function BreathingExercise() {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<BreathingPhase>("inhale");
  const [count, setCount] = useState(4);
  const [totalDuration, setTotalDuration] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const breathingMutation = useMutation({
    mutationFn: async (activityData: InsertBreathingActivity) => {
      const response = await apiRequest("POST", "/api/breathing", activityData);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/breathing"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to save breathing activity.",
        variant: "destructive",
      });
    },
  });

  const phaseDurations = {
    inhale: 4,
    hold: 7,
    exhale: 8,
  };

  const phaseInstructions = {
    inhale: "Breathe in...",
    hold: "Hold...",
    exhale: "Breathe out...",
  };

  const getNextPhase = (currentPhase: BreathingPhase): BreathingPhase => {
    switch (currentPhase) {
      case "inhale": return "hold";
      case "hold": return "exhale";
      case "exhale": return "inhale";
    }
  };

  const startExercise = () => {
    if (isActive) {
      stopExercise();
      return;
    }

    setIsActive(true);
    setPhase("inhale");
    setCount(4);
    startTimeRef.current = Date.now();

    intervalRef.current = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 1) {
          return prevCount - 1;
        } else {
          setPhase((prevPhase) => {
            const nextPhase = getNextPhase(prevPhase);
            return nextPhase;
          });
          return phaseDurations[getNextPhase(phase as BreathingPhase)];
        }
      });
    }, 1000);
  };

  const stopExercise = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    if (startTimeRef.current) {
      const duration = Math.floor((Date.now() - startTimeRef.current) / 1000);
      setTotalDuration(duration);
      
      if (duration > 10) { // Only save if exercise lasted more than 10 seconds
        breathingMutation.mutate({
          duration,
          completed: 1,
        });
        
        toast({
          title: "Great job!",
          description: `You completed ${duration} seconds of breathing exercise.`,
        });
      }
    }
    
    setIsActive(false);
    setPhase("inhale");
    setCount(4);
    startTimeRef.current = null;
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      setCount(phaseDurations[phase]);
    }
  }, [phase, isActive]);

  return (
    <div className="text-center">
      <h3 className="text-lg font-semibold mb-4">Quick Breathing Exercise</h3>
      <div className={`breathing-circle w-24 h-24 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center shadow-lg transition-transform duration-1000 ${
        isActive && phase === "inhale" ? "scale-110" : ""
      }`}>
        <span className="text-white font-bold text-lg">{count}</span>
      </div>
      <p className="text-gray-600 mb-4">
        {isActive 
          ? `${phaseInstructions[phase]} ${count}`
          : "Click to start 4-7-8 breathing"
        }
      </p>
      <Button 
        onClick={startExercise}
        className="bg-primary text-primary-foreground hover:bg-primary/90"
        disabled={breathingMutation.isPending}
      >
        {isActive ? "Stop Exercise" : "Start Breathing Exercise"}
      </Button>
      
      {totalDuration > 0 && !isActive && (
        <div className="mt-4 p-3 bg-green-50 rounded-lg">
          <p className="text-green-800 text-sm">
            Last session: {totalDuration} seconds
          </p>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useMoodTracking, useBreathingActivities } from "@/hooks/useFirestore";
import MoodTracker from "@/components/MoodTracker";
import BreathingExercise from "@/components/BreathingExercise";
import { 
  Wrench, 
  Heart, 
  Leaf, 
  BookOpen, 
  Target, 
  Brain,
  Clock,
  Download,
  PlayCircle,
  PauseCircle,
  Volume2,
  FileText,
  PenTool,
  Lightbulb,
  Star,
  Timer,
  Activity,
  TrendingUp,
  Calendar,
  Zap
} from "lucide-react";

export default function Tools() {
  const [journalText, setJournalText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);
  const { toast } = useToast();
  const { moodEntries, isLoading: moodLoading } = useMoodTracking();
  const { activities, isLoading: breathingLoading } = useBreathingActivities();

  const journalPrompts = {
    emotions: [
      "What emotions am I feeling right now, and what might have triggered them?",
      "Describe a moment today when you felt genuinely happy or content.",
      "What are three things that made you feel grateful today?",
      "How did you handle stress or difficult emotions today?",
      "What would you tell a friend who was feeling the way you feel right now?"
    ],
    gratitude: [
      "List three things you're grateful for today and why.",
      "Who is someone you appreciate in your life and what do they mean to you?",
      "What is a simple pleasure that brings you joy?",
      "Describe a challenge that helped you grow as a person.",
      "What aspects of your health (physical, mental, emotional) are you thankful for?"
    ],
    goals: [
      "What is one small step you can take tomorrow toward a personal goal?",
      "What does your ideal day look like, and how can you create more days like that?",
      "What habit would you like to develop, and why is it important to you?",
      "What fears are holding you back, and how might you address them?",
      "How do you want to feel at the end of this week, and what can you do to make that happen?"
    ],
    reflection: [
      "What patterns do you notice in your thoughts and behaviors lately?",
      "How have you changed or grown in the past month?",
      "What lessons has today taught you about yourself?",
      "What are you most proud of accomplishing recently?",
      "If you could give your past self advice, what would it be?"
    ]
  };

  const meditationAudios = [
    {
      id: "calm-5min",
      title: "5-Minute Calm",
      duration: "5 min",
      description: "Quick relaxation for busy moments",
      category: "Short Sessions"
    },
    {
      id: "anxiety-relief",
      title: "Anxiety Relief",
      duration: "10 min",
      description: "Gentle guidance for anxious thoughts",
      category: "Anxiety Support"
    },
    {
      id: "body-scan",
      title: "Mindful Body Scan",
      duration: "15 min",
      description: "Progressive relaxation technique",
      category: "Body Awareness"
    },
    {
      id: "sleep-prep",
      title: "Sleep Preparation",
      duration: "12 min",
      description: "Wind down for better rest",
      category: "Sleep Support"
    },
    {
      id: "focus-clarity",
      title: "Focus & Clarity",
      duration: "8 min",
      description: "Enhance concentration and mental clarity",
      category: "Productivity"
    },
    {
      id: "loving-kindness",
      title: "Loving Kindness",
      duration: "10 min",
      description: "Cultivate compassion for self and others",
      category: "Emotional Healing"
    }
  ];

  const copingWorksheets = [
    {
      title: "Anxiety Toolkit",
      description: "Practical strategies for managing anxiety symptoms",
      pages: "8 pages",
      category: "Anxiety",
      techniques: ["Grounding exercises", "Breathing techniques", "Thought challenging", "Action planning"]
    },
    {
      title: "Stress Management Plan",
      description: "Create your personalized stress management strategy",
      pages: "6 pages", 
      category: "Stress",
      techniques: ["Stress identification", "Coping strategies", "Prevention planning", "Recovery methods"]
    },
    {
      title: "Depression Support Guide",
      description: "Tools and activities for managing low mood",
      pages: "10 pages",
      category: "Depression",
      techniques: ["Mood tracking", "Behavioral activation", "Self-care planning", "Support systems"]
    },
    {
      title: "Mindfulness Workbook",
      description: "Daily practices for present-moment awareness",
      pages: "12 pages",
      category: "Mindfulness",
      techniques: ["Meditation guides", "Awareness exercises", "Mindful activities", "Progress tracking"]
    }
  ];

  const mindfulnessExercises = [
    {
      title: "5 Senses Exercise",
      duration: "3-5 minutes",
      description: "Ground yourself by engaging all five senses",
      steps: [
        "Find 5 things you can see",
        "Identify 4 things you can touch",
        "Notice 3 things you can hear", 
        "Find 2 things you can smell",
        "Identify 1 thing you can taste"
      ]
    },
    {
      title: "Mindful Eating",
      duration: "10-15 minutes",
      description: "Transform a meal into a meditation",
      steps: [
        "Choose a small portion of food",
        "Observe its colors, textures, and smell",
        "Take small, deliberate bites",
        "Chew slowly and notice flavors",
        "Pay attention to how your body feels"
      ]
    },
    {
      title: "Walking Meditation",
      duration: "5-20 minutes", 
      description: "Combine movement with mindfulness",
      steps: [
        "Start walking at a slow, comfortable pace",
        "Focus on the sensation of your feet touching the ground",
        "Notice your breath as you walk",
        "Observe your surroundings without judgment",
        "Return focus to walking when mind wanders"
      ]
    },
    {
      title: "Mindful Breathing Space",
      duration: "3 minutes",
      description: "A quick reset for busy moments",
      steps: [
        "Minute 1: Notice what's happening in your mind and body",
        "Minute 2: Focus entirely on your breathing",
        "Minute 3: Expand awareness to your whole body and surroundings"
      ]
    }
  ];

  const copyJournalText = () => {
    navigator.clipboard.writeText(journalText);
    toast({
      title: "Copied!",
      description: "Your journal entry has been copied to clipboard.",
    });
  };

  const clearJournal = () => {
    setJournalText("");
    toast({
      title: "Cleared",
      description: "Journal text has been cleared.",
    });
  };

  const handlePromptSelect = (prompt: string) => {
    if (journalText.trim()) {
      setJournalText(prev => prev + "\n\n" + prompt);
    } else {
      setJournalText(prompt);
    }
  };

  const playAudio = (audioId: string) => {
    if (currentAudio === audioId) {
      setCurrentAudio(null);
      toast({
        title: "Audio Stopped",
        description: "Meditation audio has been stopped.",
      });
    } else {
      setCurrentAudio(audioId);
      toast({
        title: "Audio Playing",
        description: "Meditation audio is now playing. Find a comfortable position and focus on your breath.",
      });
    }
  };

  const downloadWorksheet = (worksheet: any) => {
    toast({
      title: "Download Started",
      description: `${worksheet.title} is being prepared for download.`,
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "emotions": "bg-red-100 text-red-700",
      "gratitude": "bg-green-100 text-green-700", 
      "goals": "bg-blue-100 text-blue-700",
      "reflection": "bg-purple-100 text-purple-700"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700";
  };

  // Calculate recent stats
  const recentMoodEntries = moodEntries?.slice(0, 7) || [];
  const recentBreathingActivities = activities?.slice(0, 7) || [];
  const totalBreathingTime = recentBreathingActivities.reduce((sum, activity) => sum + activity.duration, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Wellness Tools</h1>
        <p className="text-lg text-gray-600">
          Interactive tools and activities to support your mental wellness journey.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Mood Entries</p>
                <p className="text-xl font-bold">{recentMoodEntries.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Breathing Sessions</p>
                <p className="text-xl font-bold">{recentBreathingActivities.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Mindfulness Time</p>
                <p className="text-xl font-bold">{Math.round(totalBreathingTime / 60)}m</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="interactive" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="interactive">Interactive Tools</TabsTrigger>
          <TabsTrigger value="meditations">Guided Audio</TabsTrigger>
          <TabsTrigger value="worksheets">Worksheets</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        {/* Interactive Tools */}
        <TabsContent value="interactive">
          <div className="space-y-8">
            
            {/* Mood & Breathing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    Mood Tracker
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <MoodTracker />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-primary" />
                    Breathing Exercise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BreathingExercise />
                </CardContent>
              </Card>
            </div>

            {/* Journaling Prompts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PenTool className="w-5 h-5 text-primary" />
                  Journaling Prompts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Choose a category to get started:</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {Object.keys(journalPrompts).map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                          className="capitalize"
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {selectedCategory && (
                    <div className="space-y-3">
                      <h4 className="font-medium capitalize">{selectedCategory} Prompts:</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {journalPrompts[selectedCategory as keyof typeof journalPrompts].map((prompt, index) => (
                          <div 
                            key={index}
                            className="p-3 border border-gray-200 rounded-lg hover:border-primary cursor-pointer transition-colors"
                            onClick={() => handlePromptSelect(prompt)}
                          >
                            <p className="text-sm text-gray-700">{prompt}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    <Textarea
                      placeholder="Start writing your thoughts here... Click on a prompt above to get started, or begin with your own reflection."
                      value={journalText}
                      onChange={(e) => setJournalText(e.target.value)}
                      className="min-h-32 resize-none"
                    />
                    
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <p className="text-xs text-yellow-800 flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Your thoughts are private and not saved by this app. Copy your text if you want to save it elsewhere.</span>
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        onClick={copyJournalText}
                        disabled={!journalText.trim()}
                        variant="outline"
                      >
                        Copy Text
                      </Button>
                      <Button 
                        onClick={clearJournal}
                        disabled={!journalText.trim()}
                        variant="outline"
                      >
                        Clear
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mindfulness Exercises */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Mindfulness Exercises
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mindfulnessExercises.map((exercise, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold">{exercise.title}</h3>
                        <Badge variant="outline">{exercise.duration}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{exercise.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Steps:</h4>
                        <ol className="text-sm space-y-1">
                          {exercise.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start gap-2">
                              <span className="flex-shrink-0 w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-medium">
                                {stepIndex + 1}
                              </span>
                              <span className="text-gray-700">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </TabsContent>

        {/* Guided Meditations & Audio */}
        <TabsContent value="meditations">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-primary" />
                Guided Meditations & Breathing Exercises
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-600">
                  Find a comfortable position, put on headphones if available, and let these guided sessions support your wellness practice.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {meditationAudios.map((audio) => (
                    <div key={audio.id} className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold mb-1">{audio.title}</h3>
                          <Badge variant="secondary" className="text-xs">{audio.category}</Badge>
                        </div>
                        <span className="text-sm text-gray-500">{audio.duration}</span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-4">{audio.description}</p>
                      
                      <Button
                        onClick={() => playAudio(audio.id)}
                        variant={currentAudio === audio.id ? "default" : "outline"}
                        className="w-full"
                        size="sm"
                      >
                        {currentAudio === audio.id ? (
                          <>
                            <PauseCircle className="w-4 h-4 mr-2" />
                            Stop
                          </>
                        ) : (
                          <>
                            <PlayCircle className="w-4 h-4 mr-2" />
                            Play
                          </>
                        )}
                      </Button>
                    </div>
                  ))}
                </div>

                {currentAudio && (
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <Volume2 className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">Now Playing</p>
                        <p className="text-sm text-gray-600">
                          {meditationAudios.find(a => a.id === currentAudio)?.title}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Coping Skill Worksheets */}
        <TabsContent value="worksheets">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Coping Skill Worksheets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-600">
                  Download these evidence-based worksheets to develop practical coping strategies and track your progress.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {copingWorksheets.map((worksheet, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{worksheet.title}</h3>
                          <Badge variant="outline">{worksheet.category}</Badge>
                        </div>
                        <span className="text-sm text-gray-500">{worksheet.pages}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{worksheet.description}</p>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">Includes:</h4>
                        <ul className="space-y-1">
                          {worksheet.techniques.map((technique, techIndex) => (
                            <li key={techIndex} className="flex items-center gap-2 text-sm text-gray-600">
                              <Star className="w-3 h-3 text-yellow-500" />
                              {technique}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button
                        onClick={() => downloadWorksheet(worksheet)}
                        className="w-full mt-4"
                        variant="outline"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Recommended Resources */}
        <TabsContent value="resources">
          <div className="space-y-6">
            
            {/* Recommended Books */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Recommended Books
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      title: "The Anxiety and Worry Workbook",
                      author: "David A. Clark",
                      category: "Anxiety",
                      description: "Evidence-based techniques for managing anxiety and worry"
                    },
                    {
                      title: "Feeling Good: The New Mood Therapy",
                      author: "David D. Burns",
                      category: "Depression",
                      description: "Cognitive behavioral techniques for overcoming depression"
                    },
                    {
                      title: "Mindfulness for Beginners",
                      author: "Jon Kabat-Zinn",
                      category: "Mindfulness",
                      description: "Introduction to mindfulness meditation and practice"
                    },
                    {
                      title: "The Body Keeps the Score",
                      author: "Bessel van der Kolk",
                      category: "Trauma",
                      description: "Understanding and healing trauma's effects on the body and mind"
                    },
                    {
                      title: "Self-Compassion",
                      author: "Kristin Neff",
                      category: "Self-Care",
                      description: "Learn to be kind to yourself and develop emotional resilience"
                    },
                    {
                      title: "The Happiness Trap",
                      author: "Russ Harris",
                      category: "General",
                      description: "ACT-based approach to creating a rich and meaningful life"
                    }
                  ].map((book, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="mb-3">
                        <h3 className="font-semibold mb-1">{book.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                        <Badge variant="secondary" className="text-xs">{book.category}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{book.description}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        Find Online
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Helpful Apps */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Helpful Apps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Headspace",
                      category: "Meditation",
                      description: "Guided meditation and mindfulness exercises",
                      features: ["Guided meditations", "Sleep stories", "Focus music"]
                    },
                    {
                      name: "Calm",
                      category: "Relaxation",
                      description: "Meditation, sleep stories, and relaxation tools",
                      features: ["Daily calm sessions", "Sleep stories", "Nature sounds"]
                    },
                    {
                      name: "Daylio",
                      category: "Mood Tracking",
                      description: "Micro mood diary and habit tracker",
                      features: ["Mood tracking", "Habit monitoring", "Statistics"]
                    },
                    {
                      name: "PTSD Coach",
                      category: "Trauma Support",
                      description: "Tools for managing PTSD symptoms",
                      features: ["Coping tools", "Symptom tracking", "Professional resources"]
                    }
                  ].map((app, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="mb-3">
                        <h3 className="font-semibold mb-1">{app.name}</h3>
                        <Badge variant="secondary" className="text-xs">{app.category}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{app.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Features:</h4>
                        <ul className="text-xs space-y-1">
                          {app.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Podcasts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-primary" />
                  Mental Health Podcasts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      name: "The Mental Illness Happy Hour",
                      host: "Paul Gilmartin",
                      description: "Honest conversations about mental health struggles"
                    },
                    {
                      name: "Therapy for Black Girls",
                      host: "Dr. Joy Harden Bradford",
                      description: "Mental health topics relevant to Black women"
                    },
                    {
                      name: "The Hilarious World of Depression",
                      host: "John Moe",
                      description: "Comedy and honest talk about depression"
                    },
                    {
                      name: "Mental Health America",
                      host: "Various Experts",
                      description: "Educational content on mental health topics"
                    },
                    {
                      name: "The Anxiety Coaches Podcast",
                      host: "Gina Ryan",
                      description: "Practical tools for managing anxiety"
                    },
                    {
                      name: "SelfWork with Dr. Margaret Rutherford",
                      host: "Dr. Margaret Rutherford",
                      description: "Psychology insights for personal growth"
                    }
                  ].map((podcast, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold mb-1">{podcast.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">by {podcast.host}</p>
                      <p className="text-sm text-gray-600 mb-4">{podcast.description}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        Listen Now
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </TabsContent>

      </Tabs>
    </div>
  );
}

import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useFeedback } from "@/hooks/useFirestore";
import MoodTracker from "@/components/MoodTracker";
import BreathingExercise from "@/components/BreathingExercise";
import StarRating from "@/components/StarRating";
import { 
  Brain, 
  Wrench, 
  UserCheck, 
  Phone, 
  Heart,
  Leaf,
  ChartLine,
  Star,
  TrendingUp
} from "lucide-react";

export default function Home() {
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackRating, setFeedbackRating] = useState(0);
  const { toast } = useToast();
  const { submitFeedback, isSubmitting } = useFeedback();

  const handleSubmitFeedback = async () => {
    if (feedbackRating === 0) {
      toast({
        title: "Rating Required",
        description: "Please provide a rating before submitting.",
        variant: "destructive",
      });
      return;
    }

    try {
      await submitFeedback.mutateAsync({
        content: feedbackText.trim() || null,
        rating: feedbackRating,
        mood: null,
        metadata: null,
      });

      toast({
        title: "Thank you!",
        description: "Your feedback has been submitted successfully.",
      });

      setFeedbackText("");
      setFeedbackRating(0);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive",
      });
    }
  };

  const clearFeedback = () => {
    setFeedbackText("");
    setFeedbackRating(0);
  };

  const quickStats = [
    { icon: Heart, title: "Better Relationships", description: "Stronger connections with family, friends, and colleagues" },
    { icon: ChartLine, title: "Increased Productivity", description: "Better focus, decision-making, and work performance" },
    { icon: Leaf, title: "Mental Wellness", description: "Tools and practices for emotional well-being" },
    { icon: TrendingUp, title: "Personal Growth", description: "Resources for continuous self-improvement" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-green-600/10 rounded-3xl"></div>
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/50 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200/50 rounded-full blur-xl"></div>
            
            {/* Hero Content */}
            <div className="relative z-10 text-center py-16 px-6">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Find Your
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Inner Peace
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Free, accessible mental health support and guidance. No registration needed - just care when you need it.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                  <Link href="/learn">
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      Start Your Journey
                    </Button>
                  </Link>
                  <Link href="/help">
                    <Button variant="outline" className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-blue-50">
                      Find Professional Help
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Support Banner */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-2xl shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Need Immediate Help?</h3>
                  <p className="text-red-100">24/7 Crisis support available</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a 
                  href="tel:1800-599-0019" 
                  className="bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 text-center inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  KIRAN: 1800-599-0019
                </a>
                <Link href="/help">
                  <Button className="w-full sm:w-auto bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                    More Helplines
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/learn">
              <Card className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 bg-white/80 backdrop-blur-sm hover:bg-white transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Learn About Mental Health</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Understanding the basics, myths vs facts, and different conditions</p>
                  <span className="text-blue-600 font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300 inline-block">Explore →</span>
                </CardContent>
              </Card>
            </Link>

            <Link href="/tools">
              <Card className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 bg-white/80 backdrop-blur-sm hover:bg-white transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Wrench className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Wellness Tools</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Breathing exercises, mood tracking, journaling prompts</p>
                  <span className="text-green-600 font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300 inline-block">Try Now →</span>
                </CardContent>
              </Card>
            </Link>

            <Link href="/help">
              <Card className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 bg-white/80 backdrop-blur-sm hover:bg-white transform hover:scale-105 md:col-span-2 lg:col-span-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <UserCheck className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Find Professional Help</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Directory of verified mental health professionals</p>
                  <span className="text-purple-600 font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300 inline-block">Find Doctors →</span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Mental Health Matters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => {
              const IconComponent = stat.icon;
              const colors = ["blue", "green", "purple", "orange"];
              const color = colors[index % colors.length];
              
              return (
                <Card key={index} className={`text-center border-0 bg-gradient-to-br from-${color}-50 to-${color}-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 bg-gradient-to-br from-${color}-500 to-${color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{stat.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Tools Preview */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Wellness Check</h2>
                <p className="text-lg text-gray-600">Take a moment to check in with yourself</p>
              </div>
              
              <div className="space-y-12">
                <MoodTracker />
                <BreathingExercise />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* App Feedback Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-xl">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="text-white text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Help Us Improve</h2>
                <p className="text-lg text-gray-600">Your feedback helps us create better mental health support</p>
              </div>
              
              <div className="space-y-6 max-w-2xl mx-auto">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-center">Rate your experience with this app:</h3>
                  <div className="flex justify-center">
                    <StarRating 
                      rating={feedbackRating} 
                      onRatingChange={setFeedbackRating} 
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Share your thoughts (optional):</h3>
                  <Textarea
                    placeholder="Tell us what you found helpful or how we can improve..."
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    className="min-h-32 resize-none border-0 bg-white/50 backdrop-blur-sm focus:bg-white transition-all duration-300"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleSubmitFeedback}
                    disabled={isSubmitting || feedbackRating === 0}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Feedback"}
                  </Button>
                  <Button 
                    onClick={clearFeedback}
                    variant="outline"
                    disabled={feedbackRating === 0 && !feedbackText.trim()}
                    className="border-2 border-gray-300 text-gray-700 hover:border-indigo-500 hover:text-indigo-600 px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-indigo-50"
                  >
                    Clear
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
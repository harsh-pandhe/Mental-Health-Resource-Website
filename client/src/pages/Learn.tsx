import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Info, 
  HelpCircle, 
  ClipboardList,
  Activity,
  Users,
  TriangleAlert,
  CloudRain,
  Zap,
  TrendingUp,
  Heart,
  Eye,
  AlertCircle,
  CheckCircle
} from "lucide-react";

export default function Learn() {
  const conditions = [
    {
      id: "anxiety",
      name: "Anxiety Disorders",
      icon: TriangleAlert,
      color: "yellow",
      description: "Persistent worry, fear, and physical symptoms that interfere with daily activities.",
      prevalence: "Very Common",
      symptoms: {
        emotional: ["Excessive worry", "Restlessness", "Feeling on edge", "Irritability"],
        physical: ["Rapid heartbeat", "Sweating", "Trembling", "Shortness of breath"],
        behavioral: ["Avoidance of situations", "Difficulty concentrating", "Sleep problems"]
      },
      causes: ["Genetics", "Brain chemistry", "Stress", "Trauma", "Medical conditions"],
      impact: "Can significantly affect work, relationships, and daily functioning when left untreated.",
      treatment: "Highly treatable with therapy, medication, and lifestyle changes."
    },
    {
      id: "depression",
      name: "Depression",
      icon: CloudRain,
      color: "blue",
      description: "Persistent sadness, loss of interest, and other symptoms lasting weeks or months.",
      prevalence: "Very Common",
      symptoms: {
        emotional: ["Persistent sadness", "Loss of interest", "Hopelessness", "Guilt"],
        physical: ["Fatigue", "Sleep changes", "Appetite changes", "Aches and pains"],
        behavioral: ["Withdrawal from activities", "Difficulty concentrating", "Neglecting responsibilities"]
      },
      causes: ["Genetics", "Brain chemistry", "Life events", "Medical conditions", "Substance use"],
      impact: "Affects ability to work, study, eat, sleep, and enjoy life.",
      treatment: "Very treatable with therapy, medication, and support systems."
    },
    {
      id: "stress",
      name: "Stress Disorders",
      icon: Zap,
      color: "orange",
      description: "Overwhelming feeling of being unable to cope with mental or emotional pressure.",
      prevalence: "Common",
      symptoms: {
        emotional: ["Feeling overwhelmed", "Anxiety", "Irritability", "Low mood"],
        physical: ["Headaches", "Muscle tension", "Fatigue", "Sleep problems"],
        behavioral: ["Changes in appetite", "Procrastination", "Social withdrawal", "Nervous habits"]
      },
      causes: ["Work pressure", "Financial problems", "Relationships", "Health issues", "Major life changes"],
      impact: "Can lead to serious health problems if not managed properly.",
      treatment: "Manageable with stress reduction techniques, therapy, and lifestyle changes."
    },
    {
      id: "bipolar",
      name: "Bipolar Disorder",
      icon: TrendingUp,
      color: "purple",
      description: "Extreme mood swings between emotional highs (mania) and lows (depression).",
      prevalence: "Less Common",
      symptoms: {
        emotional: ["Extreme mood swings", "Elevated mood (mania)", "Depression episodes", "Irritability"],
        physical: ["Energy changes", "Sleep pattern changes", "Appetite changes", "Restlessness"],
        behavioral: ["Impulsive decisions", "Risk-taking behavior", "Social withdrawal", "Difficulty concentrating"]
      },
      causes: ["Genetics", "Brain structure", "Environmental factors", "Stress"],
      impact: "Can significantly disrupt life and relationships without proper treatment.",
      treatment: "Manageable with medication, therapy, and lifestyle management."
    }
  ];

  const mythsFacts = [
    {
      myth: "Mental illness is a sign of weakness or character flaw",
      fact: "Mental illness is a medical condition like diabetes or heart disease",
      explanation: "Mental health conditions are caused by a complex interplay of biological, psychological, and environmental factors."
    },
    {
      myth: "People with mental illness are violent and dangerous",
      fact: "People with mental illness are more likely to be victims of violence than perpetrators",
      explanation: "The vast majority of people with mental health conditions are not violent and pose no danger to others."
    },
    {
      myth: "Mental health problems don't affect children",
      fact: "Mental health conditions can occur at any age, including childhood",
      explanation: "Early intervention and treatment can significantly improve outcomes for children and adolescents."
    },
    {
      myth: "People with mental illness can't work or be productive",
      fact: "Most people with mental health conditions are productive members of society",
      explanation: "With proper treatment and support, people with mental illness can excel in their careers and personal lives."
    },
    {
      myth: "Therapy is only for serious mental illness",
      fact: "Therapy can benefit anyone dealing with life's challenges",
      explanation: "Therapy provides tools and strategies that can improve overall well-being and quality of life."
    }
  ];

  const factors = [
    {
      category: "Biological Factors",
      icon: Activity,
      color: "red",
      items: [
        "Genetics and family history",
        "Brain chemistry and structure",
        "Hormonal changes",
        "Medical conditions",
        "Substance use"
      ]
    },
    {
      category: "Psychological Factors", 
      icon: Brain,
      color: "blue",
      items: [
        "Trauma and abuse",
        "Coping skills and resilience",
        "Thought patterns and beliefs",
        "Personality traits",
        "Previous mental health history"
      ]
    },
    {
      category: "Environmental Factors",
      icon: Users,
      color: "green",
      items: [
        "Family dynamics and relationships",
        "Social support systems",
        "Cultural and community factors",
        "Socioeconomic status",
        "Life stressors and major changes"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      yellow: "bg-yellow-100 text-yellow-600",
      blue: "bg-blue-100 text-blue-600",
      orange: "bg-orange-100 text-orange-600",
      purple: "bg-purple-100 text-purple-600",
      green: "bg-green-100 text-green-600",
      red: "bg-red-100 text-red-600"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Learn About Mental Health</h1>
        <p className="text-lg text-gray-600">
          Understanding mental health is the first step toward wellness. Explore comprehensive information about conditions, causes, and facts.
        </p>
      </div>

      <div className="space-y-8">
        
        {/* About Mental Health - The Basics */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Info className="text-primary text-xl" />
              <h2 className="text-2xl font-bold">About Mental Health - The Basics</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">What is Mental Health?</h3>
                <p className="text-gray-600 mb-4">
                  Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Emotional Well-being</h4>
                    <p className="text-sm text-blue-700">How we feel about ourselves and our ability to manage emotions</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Psychological Well-being</h4>
                    <p className="text-sm text-green-700">Our ability to think clearly and make good decisions</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Social Well-being</h4>
                    <p className="text-sm text-purple-700">How we relate to others and build meaningful relationships</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Why is Mental Health Important?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Helps you cope with life's stresses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Enables you to be productive and contribute to your community</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Affects your physical health</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Influences how you handle relationships</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Impacts your ability to enjoy life</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Helps you realize your full potential</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Myths vs Facts */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="text-primary text-xl" />
              <h2 className="text-2xl font-bold">Common Myths vs Facts</h2>
            </div>

            <div className="space-y-6">
              {mythsFacts.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-sm font-medium text-red-800">Myth: </span>
                          <span className="text-sm text-red-700">{item.myth}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-sm font-medium text-green-800">Fact: </span>
                          <span className="text-sm text-green-700">{item.fact}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 italic">{item.explanation}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Why Does It Happen */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="text-primary text-xl" />
              <h2 className="text-2xl font-bold">Why Does Mental Illness Happen?</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Mental health conditions result from a complex interaction of multiple factors. Understanding these factors helps reduce stigma and promotes effective treatment approaches.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {factors.map((factor, index) => {
                const IconComponent = factor.icon;
                return (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getColorClasses(factor.color)}`}>
                      <IconComponent className="text-xl" />
                    </div>
                    <h3 className="font-semibold mb-3">{factor.category}</h3>
                    <ul className="text-sm text-gray-600 space-y-1 text-left">
                      {factor.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">The Interplay of Factors</h4>
              <p className="text-sm text-blue-700">
                Mental health conditions typically result from multiple factors working together. For example, someone may have a genetic predisposition to depression, but it might only develop after experiencing significant stress or trauma. Understanding this complexity helps us approach mental health with compassion and without judgment.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Mental Health Conditions - Detailed */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardList className="text-primary text-xl" />
              <h2 className="text-2xl font-bold">Understanding Different Conditions</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Each mental health condition has unique characteristics, symptoms, and treatment approaches. Here's detailed information about common conditions:
            </p>

            <Accordion type="single" collapsible className="w-full">
              {conditions.map((condition) => {
                const IconComponent = condition.icon;
                return (
                  <AccordionItem key={condition.id} value={condition.id}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getColorClasses(condition.color)}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{condition.name}</h3>
                          <Badge variant="outline" className="mt-1">{condition.prevalence}</Badge>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="space-y-6 ml-13">
                        <div>
                          <h4 className="font-semibold mb-2">What is {condition.name}?</h4>
                          <p className="text-gray-600">{condition.description}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Symptoms</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <h5 className="font-medium text-red-700 mb-2">Emotional</h5>
                              <ul className="text-sm space-y-1">
                                {condition.symptoms.emotional.map((symptom, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <Heart className="w-3 h-3 text-red-500 mt-1 flex-shrink-0" />
                                    <span>{symptom}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-blue-700 mb-2">Physical</h5>
                              <ul className="text-sm space-y-1">
                                {condition.symptoms.physical.map((symptom, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <Activity className="w-3 h-3 text-blue-500 mt-1 flex-shrink-0" />
                                    <span>{symptom}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-green-700 mb-2">Behavioral</h5>
                              <ul className="text-sm space-y-1">
                                {condition.symptoms.behavioral.map((symptom, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <Users className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                                    <span>{symptom}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Causes/Risk Factors</h4>
                          <div className="flex flex-wrap gap-2">
                            {condition.causes.map((cause, index) => (
                              <Badge key={index} variant="secondary">{cause}</Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Impact on Daily Life</h4>
                          <p className="text-gray-600">{condition.impact}</p>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">Treatment Overview</h4>
                          <p className="text-sm text-green-700">{condition.treatment}</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">When to Seek Help</h4>
                          <p className="text-sm text-blue-700">
                            If you're experiencing symptoms that interfere with your daily life, relationships, or work for more than two weeks, consider reaching out to a mental health professional. Early intervention often leads to better outcomes.
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </CardContent>
        </Card>

        {/* Key Statistics */}
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Mental Health by the Numbers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1 in 4</div>
                <p className="text-sm text-gray-600">People will experience a mental health problem in any given year</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">75%</div>
                <p className="text-sm text-gray-600">Of mental health problems develop before age 25</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">70%</div>
                <p className="text-sm text-gray-600">Recovery rate with proper treatment and support</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">50%</div>
                <p className="text-sm text-gray-600">Of people don't seek help due to stigma</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  UserCheck, 
  Phone, 
  MapPin, 
  Clock, 
  Heart, 
  AlertTriangle,
  Search,
  ExternalLink,
  MessageSquare,
  Pill,
  Users,
  Target,
  Brain,
  Shield,
  Star,
  IndianRupee,
  Globe,
  Mail,
  Calendar,
  CheckCircle,
  Info,
  Stethoscope,
  Building,
  Award,
  Activity,
  Lightbulb,
  TrafficCone
} from "lucide-react";

export default function FindHelp() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const crisisLines = [
    {
      name: "KIRAN Mental Health Helpline",
      number: "1800-599-0019",
      description: "24/7 toll-free helpline providing mental health support",
      features: ["24/7 availability", "Multiple languages", "Confidential", "Free"]
    },
    {
      name: "Vandrevala Foundation",
      number: "9999-666-555",
      description: "24/7 crisis helpline and mental health support",
      features: ["Crisis intervention", "Emotional support", "Free counseling", "Suicide prevention"]
    },
    {
      name: "AASRA",
      number: "91-22-27546669",
      description: "Mumbai-based suicide prevention helpline",
      features: ["Suicide prevention", "Email support", "Local Mumbai focus", "Volunteer-driven"]
    },
    {
      name: "Sneha India",
      number: "91-44-24640050",
      description: "Chennai-based emotional support and suicide prevention",
      features: ["Emotional support", "Suicide prevention", "24/7 helpline", "Email counseling"]
    },
    {
      name: "Sumaitri",
      number: "011-23389090",
      description: "Delhi-based emotional support helpline",
      features: ["Active listening", "Emotional support", "Face-to-face counseling", "Group sessions"]
    },
    {
      name: "Parivarthan",
      number: "91-77-60044333",
      description: "Bangalore-based counseling and support services",
      features: ["Individual counseling", "Family therapy", "Psychiatric support", "Rehabilitation"]
    }
  ];

  const professionalTypes = [
    {
      title: "Psychiatrist",
      icon: Stethoscope,
      description: "Medical doctor specializing in mental health",
      when: "For medication management, severe mental illness, or when therapy isn't enough",
      services: ["Medication prescription", "Diagnosis", "Medical treatment", "Hospitalization if needed"],
      qualifications: "MBBS + MD/DPM in Psychiatry"
    },
    {
      title: "Clinical Psychologist",
      icon: Brain,
      description: "Mental health professional providing therapy and assessment",
      when: "For therapy, counseling, psychological testing, and non-medical treatment",
      services: ["Psychotherapy", "Psychological testing", "Behavioral therapy", "Counseling"],
      qualifications: "MA/MSc + MPhil/PhD in Clinical Psychology"
    },
    {
      title: "Counseling Psychologist",
      icon: MessageSquare,
      description: "Therapist focusing on life challenges and adjustment issues",
      when: "For relationship issues, stress management, life transitions, and mild anxiety/depression",
      services: ["Individual counseling", "Couples therapy", "Family therapy", "Group therapy"],
      qualifications: "MA/MSc in Counseling Psychology"
    },
    {
      title: "Psychiatric Social Worker",
      icon: Users,
      description: "Social worker specializing in mental health support",
      when: "For community-based support, case management, and social interventions",
      services: ["Case management", "Family support", "Community resources", "Crisis intervention"],
      qualifications: "MSW in Psychiatric Social Work"
    },
    {
      title: "Addiction Counselor",
      icon: Shield,
      description: "Specialist in substance abuse and addiction treatment",
      when: "For alcohol, drug, or behavioral addictions",
      services: ["Addiction assessment", "Detox support", "Relapse prevention", "Family counseling"],
      qualifications: "Specialized training in addiction counseling"
    },
    {
      title: "Marriage & Family Therapist",
      icon: Heart,
      description: "Specialist in relationship and family dynamics",
      when: "For relationship problems, family conflicts, and communication issues",
      services: ["Couples therapy", "Family therapy", "Premarital counseling", "Divorce counseling"],
      qualifications: "Masters in Marriage & Family Therapy"
    }
  ];

  const treatmentOptions = [
    {
      category: "Psychotherapy/Talking Therapies",
      icon: MessageSquare,
      color: "blue",
      treatments: [
        {
          name: "Cognitive Behavioral Therapy (CBT)",
          description: "Focuses on changing negative thought patterns and behaviors",
          effective: ["Depression", "Anxiety", "PTSD", "OCD"],
          duration: "12-20 sessions typically"
        },
        {
          name: "Dialectical Behavior Therapy (DBT)",
          description: "Skills-based therapy for emotional regulation",
          effective: ["Borderline personality disorder", "Self-harm", "Emotional instability"],
          duration: "6-12 months"
        },
        {
          name: "Acceptance and Commitment Therapy (ACT)",
          description: "Focuses on accepting thoughts and committing to values-based actions",
          effective: ["Anxiety", "Depression", "Chronic pain", "Substance abuse"],
          duration: "8-16 sessions"
        },
        {
          name: "Psychodynamic Therapy",
          description: "Explores unconscious thoughts and past experiences",
          effective: ["Depression", "Relationship issues", "Personality disorders"],
          duration: "Long-term (months to years)"
        }
      ]
    },
    {
      category: "Medication",
      icon: Pill,
      color: "green",
      treatments: [
        {
          name: "Antidepressants",
          description: "Medications to treat depression and some anxiety disorders",
          effective: ["Depression", "Anxiety disorders", "OCD", "PTSD"],
          duration: "Several months to years"
        },
        {
          name: "Anti-anxiety Medications",
          description: "Short-term relief for severe anxiety symptoms",
          effective: ["Panic disorder", "Severe anxiety", "Phobias"],
          duration: "Short-term use recommended"
        },
        {
          name: "Mood Stabilizers",
          description: "Medications for bipolar disorder and mood regulation",
          effective: ["Bipolar disorder", "Mood swings"],
          duration: "Long-term treatment"
        },
        {
          name: "Antipsychotics",
          description: "Medications for severe mental health conditions",
          effective: ["Schizophrenia", "Bipolar disorder", "Severe depression"],
          duration: "Long-term treatment"
        }
      ]
    },
    {
      category: "Holistic Approaches",
      icon: Target,
      color: "purple",
      treatments: [
        {
          name: "Yoga Therapy",
          description: "Traditional Indian practice combining physical postures with breathing",
          effective: ["Stress", "Anxiety", "Depression", "PTSD"],
          duration: "Ongoing practice"
        },
        {
          name: "Meditation & Mindfulness",
          description: "Practices for present-moment awareness and mental clarity",
          effective: ["Anxiety", "Depression", "Stress", "Chronic pain"],
          duration: "Daily practice"
        },
        {
          name: "Ayurvedic Medicine",
          description: "Traditional Indian system focusing on mind-body balance",
          effective: ["Stress", "Sleep issues", "Anxiety", "Depression"],
          duration: "Ongoing lifestyle approach"
        },
        {
          name: "Art/Music Therapy",
          description: "Creative expression as a tool for healing",
          effective: ["Trauma", "Depression", "Autism", "Dementia"],
          duration: "Varies by individual"
        }
      ]
    }
  ];

  const mumbaiProfessionals = [
    {
      name: "Dr. Harish Shetty",
      title: "Psychiatrist",
      hospital: "L.T.M.G Hospital, Sion",
      specialization: "Depression, Anxiety, Schizophrenia",
      experience: "25+ years",
      fees: "₹800 - ₹1,200",
      rating: 4.8,
      languages: ["English", "Hindi", "Marathi"],
      timings: "Mon-Sat: 10 AM - 6 PM"
    },
    {
      name: "Dr. Yusuf Matcheswala",
      title: "Psychiatrist",
      hospital: "Jaslok Hospital, Mumbai",
      specialization: "Bipolar Disorder, Depression",
      experience: "30+ years",
      fees: "₹1,500 - ₹2,000",
      rating: 4.9,
      languages: ["English", "Hindi"],
      timings: "Mon-Fri: 2 PM - 8 PM"
    },
    {
      name: "Ms. Priya Nair",
      title: "Clinical Psychologist",
      hospital: "Fortis Hospital, Mulund",
      specialization: "CBT, Anxiety, PTSD",
      experience: "12+ years",
      fees: "₹1,000 - ₹1,500",
      rating: 4.7,
      languages: ["English", "Hindi", "Malayalam"],
      timings: "Tue-Sun: 9 AM - 5 PM"
    },
    {
      name: "Dr. Anjali Chhabria",
      title: "Psychiatrist & Psychotherapist",
      hospital: "Mindtemple, Bandra",
      specialization: "Women's Mental Health, Relationship Issues",
      experience: "20+ years",
      fees: "₹2,000 - ₹2,500",
      rating: 4.9,
      languages: ["English", "Hindi"],
      timings: "Mon-Sat: 11 AM - 7 PM"
    },
    {
      name: "Mr. Rohit Sharma",
      title: "Counseling Psychologist",
      hospital: "Apollo Hospital, Navi Mumbai",
      specialization: "Addiction, Family Therapy",
      experience: "8+ years",
      fees: "₹800 - ₹1,200",
      rating: 4.6,
      languages: ["English", "Hindi", "Marathi"],
      timings: "Mon-Fri: 10 AM - 6 PM"
    },
    {
      name: "Dr. Ravi Gupta",
      title: "Psychiatrist",
      hospital: "Kokilaben Hospital, Andheri",
      specialization: "Child & Adolescent Psychiatry",
      experience: "15+ years",
      fees: "₹1,200 - ₹1,800",
      rating: 4.8,
      languages: ["English", "Hindi", "Gujarati"],
      timings: "Mon-Sat: 9 AM - 1 PM, 4 PM - 8 PM"
    }
  ];

  const mentalHealthOrganizations = [
    {
      name: "Mind India",
      type: "NGO",
      location: "Pan India",
      services: ["Awareness programs", "Support groups", "Training"],
      website: "mindindia.org",
      description: "Leading mental health advocacy organization in India"
    },
    {
      name: "The Live Love Laugh Foundation",
      type: "NGO",
      location: "Mumbai, Delhi, Bangalore",
      services: ["Awareness", "Research", "Training", "Support"],
      website: "thelivelovelaughfoundation.org",
      description: "Founded by Deepika Padukone, focuses on mental health awareness"
    },
    {
      name: "Mpower",
      type: "Mental Health Center",
      location: "Mumbai",
      services: ["Counseling", "Therapy", "Psychiatric care", "Employee assistance"],
      website: "mpowerminds.com",
      description: "Comprehensive mental health services in Mumbai"
    },
    {
      name: "Mann Talks",
      type: "Platform",
      location: "Online",
      services: ["Online therapy", "Workshops", "Community support"],
      website: "manntalks.com",
      description: "Digital mental health platform offering accessible support"
    },
    {
      name: "Sangath",
      type: "Research Organization",
      location: "Goa, Delhi",
      services: ["Research", "Community programs", "Training"],
      website: "sangath.in",
      description: "Research-based mental health interventions and programs"
    },
    {
      name: "White Swan Foundation",
      type: "NGO",
      location: "Chennai",
      services: ["Information platform", "Support", "Awareness"],
      website: "whiteswan.org.in",
      description: "Mental health information and support platform"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-700",
      green: "bg-green-100 text-green-700",
      purple: "bg-purple-100 text-purple-700"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-700";
  };

  const filteredProfessionals = mumbaiProfessionals.filter(prof => 
    prof.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    prof.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
    prof.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Professional Help</h1>
        <p className="text-lg text-gray-600">
          Connect with qualified mental health professionals and access crisis support when you need it most.
        </p>
      </div>

      {/* Crisis Support Alert */}
      <Alert className="mb-8 border-destructive bg-destructive/5">
        <AlertTriangle className="h-4 w-4 text-destructive" />
        <AlertDescription className="text-destructive">
          <strong>If you're in crisis or having thoughts of self-harm, please reach out immediately.</strong> 
          Call KIRAN at <a href="tel:1800-599-0019" className="underline font-semibold">1800-599-0019</a> or your local emergency services.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="crisis" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="crisis">Crisis Help</TabsTrigger>
          <TabsTrigger value="professionals">Find Doctors</TabsTrigger>
          <TabsTrigger value="types">Professional Types</TabsTrigger>
          <TabsTrigger value="treatment">Treatment Options</TabsTrigger>
          <TabsTrigger value="solutions">Living & Coping</TabsTrigger>
          <TabsTrigger value="organizations">Organizations</TabsTrigger>
        </TabsList>

        {/* Crisis Support */}
        <TabsContent value="crisis">
          <div className="space-y-6">
            <Card className="border-destructive bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <Phone className="w-5 h-5" />
                  24/7 Crisis Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">
                  If you're experiencing a mental health crisis, these helplines provide immediate support and guidance. All services are confidential and free.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {crisisLines.map((line, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-lg">{line.name}</h3>
                        <a 
                          href={`tel:${line.number}`}
                          className="bg-destructive text-destructive-foreground px-3 py-1 rounded-lg text-sm font-medium hover:bg-destructive/90 transition-colors"
                        >
                          <Phone className="w-3 h-3 mr-1 inline" />
                          {line.number}
                        </a>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm">{line.description}</p>
                      
                      <div className="flex flex-wrap gap-1">
                        {line.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  When to Seek Emergency Help
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-red-700 mb-3">Immediate Emergency (Call 102/108):</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Thoughts of suicide or self-harm</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Thoughts of harming others</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Severe psychotic symptoms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Severe drug or alcohol intoxication</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-blue-700 mb-3">Crisis Support (Call Helplines):</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Phone className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Feeling overwhelmed or desperate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Phone className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Unable to cope with daily life</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Phone className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Severe anxiety or panic attacks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Phone className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Need someone to talk to immediately</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Professional Directory */}
        <TabsContent value="professionals">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-primary" />
                  Search Mental Health Professionals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <div className="flex-1">
                    <Input
                      type="text"
                      placeholder="Search by name, specialization, or type..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <Button variant="outline">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  Showing {filteredProfessionals.length} verified mental health professionals in Mumbai/Navi Mumbai area
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProfessionals.map((professional, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{professional.name}</h3>
                        <p className="text-primary font-medium">{professional.title}</p>
                        <p className="text-sm text-gray-600">{professional.hospital}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium">{professional.rating}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-700">Specialization: </span>
                        <span className="text-sm text-gray-600">{professional.specialization}</span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4 text-green-600" />
                          <span>{professional.experience}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <IndianRupee className="w-4 h-4 text-blue-600" />
                          <span>{professional.fees}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span>{professional.timings}</span>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {professional.languages.map((lang, langIndex) => (
                          <Badge key={langIndex} variant="outline" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button size="sm" className="flex-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        Book Appointment
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Need Help Finding the Right Professional?</h3>
                  <p className="text-gray-600 mb-4">
                    Not sure which type of mental health professional is right for you? Our guidance can help.
                  </p>
                  <Button variant="outline">
                    View Professional Types Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Professional Types */}
        <TabsContent value="types">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Types of Mental Health Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Understanding different types of mental health professionals can help you choose the right support for your needs.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {professionalTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{type.title}</h3>
                          <p className="text-sm text-gray-600">{type.description}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-green-700 mb-2">When to See Them:</h4>
                          <p className="text-sm text-gray-600">{type.when}</p>
                        </div>

                        <div>
                          <h4 className="font-medium text-blue-700 mb-2">Services Provided:</h4>
                          <ul className="text-sm space-y-1">
                            {type.services.map((service, serviceIndex) => (
                              <li key={serviceIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                                <span>{service}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-purple-700 mb-1">Qualifications:</h4>
                          <p className="text-sm text-gray-600">{type.qualifications}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </TabsContent>

        {/* Treatment Options */}
        <TabsContent value="treatment">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Treatment Approaches & Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Mental health treatment often combines multiple approaches for the best outcomes. Here are the main categories of treatment available:
                </p>
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Treatment should always be personalized. What works for one person may not work for another. Work with qualified professionals to find the right approach for you.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {treatmentOptions.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <Card key={categoryIndex}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CategoryIcon className="w-5 h-5 text-primary" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.treatments.map((treatment, treatmentIndex) => (
                        <div key={treatmentIndex} className="border border-gray-200 rounded-lg p-4">
                          <h3 className="font-semibold mb-2">{treatment.name}</h3>
                          <p className="text-sm text-gray-600 mb-3">{treatment.description}</p>
                          
                          <div className="space-y-3">
                            <div>
                              <h4 className="text-sm font-medium text-green-700 mb-1">Effective for:</h4>
                              <div className="flex flex-wrap gap-1">
                                {treatment.effective.map((condition, conditionIndex) => (
                                  <Badge key={conditionIndex} variant="secondary" className="text-xs">
                                    {condition}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-medium text-blue-700 mb-1">Duration:</h4>
                              <p className="text-xs text-gray-600">{treatment.duration}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Combination Treatment</h3>
                <p className="text-gray-700 mb-4">
                  Many mental health conditions respond best to a combination of treatments. For example:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Depression:</strong> Often treated with both therapy (CBT) and medication (antidepressants)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Anxiety:</strong> May combine therapy, medication, and mindfulness practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>PTSD:</strong> Often requires specialized trauma therapy plus supportive medications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Bipolar Disorder:</strong> Typically requires mood stabilizers plus ongoing therapy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Living & Coping with Mental Health */}
        <TabsContent value="solutions">
          <div className="space-y-6">
            {/* Chronic Mental Health Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrafficCone className="w-5 h-5 text-primary" />
                  Living with Mental Health Conditions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Understanding Chronic Mental Health</h3>
                    <p className="text-gray-600 mb-4">
                      Some mental health conditions are chronic, meaning they require ongoing management rather than a one-time cure. This doesn't mean a fulfilling life isn't possible - many people with chronic mental health conditions live rich, productive lives with proper support and management strategies.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Activity className="w-6 h-6 text-blue-600" />
                        <h4 className="font-semibold">Long-term Management Strategies</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Regular therapy or counseling sessions</li>
                        <li>• Consistent medication management (if prescribed)</li>
                        <li>• Developing and maintaining healthy routines</li>
                        <li>• Building strong support networks</li>
                        <li>• Learning to recognize early warning signs</li>
                        <li>• Practicing stress management techniques</li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Users className="w-6 h-6 text-green-600" />
                        <h4 className="font-semibold">Finding Support</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Join support groups (online or in-person)</li>
                        <li>• Connect with mental health organizations</li>
                        <li>• Educate family and friends about your condition</li>
                        <li>• Work with a consistent healthcare team</li>
                        <li>• Consider peer support programs</li>
                        <li>• Advocate for mental health awareness</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Hope and Recovery</h4>
                        <p className="text-sm text-green-700">
                          Recovery is possible even with chronic conditions. It may look different for each person - sometimes it's about managing symptoms, sometimes it's about finding meaning and purpose despite challenges. The key is finding what works for you and building a life that feels fulfilling and authentic.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Practical Coping Strategies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  Practical Coping Strategies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <Brain className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Mindfulness & Meditation</h3>
                        <p className="text-sm text-gray-700">Daily meditation, breathing exercises, and present-moment awareness</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-green-100 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <Activity className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Physical Exercise</h3>
                        <p className="text-sm text-gray-700">Regular movement, yoga, walking, or any enjoyable physical activity</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Social Connection</h3>
                        <p className="text-sm text-gray-700">Maintaining relationships, joining communities, and seeking support</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <Target className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Goal Setting</h3>
                        <p className="text-sm text-gray-700">Setting realistic, achievable goals and celebrating small victories</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-br from-red-50 to-red-100 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Journaling</h3>
                        <p className="text-sm text-gray-700">Writing thoughts, tracking moods, and reflecting on patterns</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Routine Building</h3>
                        <p className="text-sm text-gray-700">Creating structure through consistent daily habits and schedules</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Self-Care & Lifestyle */}
            <Card>
              <CardHeader>
                <CardTitle>Self-Care & Lifestyle Approaches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-blue-800 mb-2">
                        <strong>Remember:</strong> Professional treatment combined with self-care strategies often provides the best outcomes. 
                        What works varies from person to person, so it's important to work with healthcare providers to find the right approach.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Organizations & Resources */}
        <TabsContent value="organizations">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-primary" />
                  Mental Health Organizations & Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  These organizations provide additional support, resources, and advocacy for mental health in India.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mentalHealthOrganizations.map((org, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{org.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline">{org.type}</Badge>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <MapPin className="w-3 h-3" />
                            <span>{org.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">{org.description}</p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-blue-700 mb-2">Services:</h4>
                        <div className="flex flex-wrap gap-1">
                          {org.services.map((service, serviceIndex) => (
                            <Badge key={serviceIndex} variant="secondary" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Globe className="w-4 h-4" />
                          <span>{org.website}</span>
                        </div>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Visit Website
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Additional Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold mb-2">National Institute of Mental Health</h3>
                    <p className="text-sm text-gray-600 mb-3">Government resources and research</p>
                    <Button size="sm" variant="outline">Visit Website</Button>
                  </div>
                  
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold mb-2">Support Groups</h3>
                    <p className="text-sm text-gray-600 mb-3">Connect with others in similar situations</p>
                    <Button size="sm" variant="outline">Find Groups</Button>
                  </div>
                  
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <Mail className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-semibold mb-2">Email Support</h3>
                    <p className="text-sm text-gray-600 mb-3">Non-urgent support via email</p>
                    <Button size="sm" variant="outline">Get Support</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

      </Tabs>
    </div>
  );
}

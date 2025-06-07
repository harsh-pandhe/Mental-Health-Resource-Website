import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Info, 
  Shield, 
  FileText, 
  Mail, 
  ExternalLink, 
  Heart, 
  Target, 
  Users, 
  Leaf, 
  Globe, 
  BookOpen,
  Star,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertTriangle,
  Phone,
  Download,
  Lightbulb,
  Award,
  Eye,
  Lock,
  Scale,
  Check,
  X,
  Trophy,
  Brain,
  ChartLine,
  Terminal,
  Smile
} from "lucide-react";

export default function More() {
  const appFeatures = [
    {
      icon: Heart,
      title: "No Registration Required",
      description: "Access all features without creating an account or sharing personal information"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data stays private. We don't track, store, or share your personal information"
    },
    {
      icon: Globe,
      title: "Free & Accessible",
      description: "All resources and tools are completely free to use for everyone"
    },
    {
      icon: Users,
      title: "Culturally Sensitive",
      description: "Content designed with Indian cultural context and mental health understanding"
    },
    {
      icon: Phone,
      title: "Crisis Support",
      description: "Immediate access to verified crisis helplines and emergency resources"
    },
    {
      icon: Leaf,
      title: "Holistic Approach",
      description: "Combines modern psychology with traditional wellness practices"
    }
  ];

  const teamMembers = [
    {
      role: "Mental Health Consultant",
      description: "Licensed psychiatrist providing clinical guidance and content validation"
    },
    {
      role: "Clinical Psychologist",
      description: "Expert in cognitive behavioral therapy and trauma-informed care"
    },
    {
      role: "Technology Team",
      description: "Developers focused on accessible, privacy-first mental health technology"
    },
    {
      role: "Content Specialists",
      description: "Writers and researchers specializing in mental health education"
    }
  ];

  const acknowledgments = [
    "National Institute of Mental Health and Neurosciences (NIMHANS)",
    "Indian Psychiatric Society",
    "Indian Association of Clinical Psychologists",
    "KIRAN Mental Health Helpline",
    "Mental health advocates and researchers across India",
    "Open source community for accessibility tools"
  ];

  const legalInfo = [
    {
      title: "Medical Disclaimer",
      content: "This app is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified health providers with questions about your health."
    },
    {
      title: "Crisis Situations",
      content: "If you are experiencing a mental health crisis, please contact emergency services immediately or call a crisis helpline. This app cannot provide emergency intervention."
    },
    {
      title: "No Professional Relationship",
      content: "Using this app does not create a doctor-patient or therapist-client relationship. The information provided should not replace professional mental health care."
    },
    {
      title: "Individual Results",
      content: "Mental health experiences are highly individual. Strategies that work for some may not work for others. Professional guidance is recommended for personalized care."
    }
  ];

  const upcomingFeatures = [
    {
      feature: "Expanded Crisis Resources",
      description: "Additional regional helplines and crisis intervention resources",
      timeline: "Coming Soon"
    },
    {
      feature: "Community Support",
      description: "Safe, moderated peer support forums and discussion groups",
      timeline: "In Development"
    },
    {
      feature: "Professional Directory Expansion",
      description: "Verified mental health professionals across more Indian cities",
      timeline: "Planned"
    },
    {
      feature: "Regional Language Support",
      description: "Content and resources in multiple Indian languages",
      timeline: "Future Release"
    }
  ];

  const advantages = [
    { icon: Heart, title: "Better Relationships", description: "Stronger connections with family, friends, and colleagues", color: "green" },
    { icon: ChartLine, title: "Increased Productivity", description: "Better focus, decision-making, and work performance", color: "blue" },
    { icon: Shield, title: "Emotional Resilience", description: "Better ability to cope with stress and life challenges", color: "purple" },
    { icon: Terminal, title: "Physical Health", description: "Improved immune system and overall physical well-being", color: "yellow" },
    { icon: Smile, title: "Life Satisfaction", description: "Greater sense of purpose, joy, and fulfillment", color: "red" },
    { icon: Brain, title: "Mental Clarity", description: "Clearer thinking and better problem-solving abilities", color: "indigo" }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      yellow: "bg-yellow-100 text-yellow-600",
      blue: "bg-blue-100 text-blue-600",
      orange: "bg-orange-100 text-orange-600",
      purple: "bg-purple-100 text-purple-600",
      green: "bg-green-100 text-green-600",
      red: "bg-red-100 text-red-600",
      indigo: "bg-indigo-100 text-indigo-600"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">More Information</h1>
        <p className="text-lg text-gray-600">
          Learn more about Mindful Path, our mission, privacy practices, and additional resources.
        </p>
      </div>

      <div className="space-y-8">
        
        {/* About the App */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" />
              About Mindful Path
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Mindful Path is dedicated to providing free, accessible, and trustworthy mental health information and support to everyone in India. We believe that mental health resources should be available to all, regardless of their ability to pay, their location, or their background. Our platform combines evidence-based mental health information with culturally sensitive approaches and traditional wellness practices.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Our Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {appFeatures.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{feature.title}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Why We Built This</h3>
                <p className="text-gray-600 leading-relaxed">
                  Mental health stigma remains a significant barrier in India, preventing many from seeking help. We created Mindful Path to provide a judgment-free space where anyone can access reliable mental health information, learn coping strategies, and find professional help when needed. By removing barriers like registration requirements and costs, we aim to reach those who might otherwise go without support.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Data Protection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Privacy & Data Protection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <Alert>
                <Lock className="h-4 w-4" />
                <AlertDescription>
                  <strong>Your privacy is our priority.</strong> We collect minimal data and never share personal information with third parties.
                </AlertDescription>
              </Alert>

              <div>
                <h3 className="text-lg font-semibold mb-3">What We Collect</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Anonymous Usage Statistics</p>
                      <p className="text-sm text-gray-600">General app usage patterns to improve our services (no personal identification)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Voluntary Feedback</p>
                      <p className="text-sm text-gray-600">Only feedback you choose to share (ratings and comments)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Activity Data</p>
                      <p className="text-sm text-gray-600">Anonymized data about tool usage (breathing exercises, mood tracking) for improvement purposes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">What We Don't Collect</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span className="text-sm">Personal identification information</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span className="text-sm">Your journal entries or personal thoughts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span className="text-sm">Location data beyond general region</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span className="text-sm">Contact information or device identifiers</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Data Storage</h4>
                <p className="text-sm text-blue-700">
                  Any data we collect is stored securely and used only to improve the app experience. We never sell, rent, or share your data with advertisers or third parties. You can request data deletion at any time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Important Legal Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {legalInfo.map((info, index) => (
                <div key={index} className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">{info.title}</h3>
                  <p className="text-sm text-yellow-700">{info.content}</p>
                </div>
              ))}

              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Emergency Situations</h4>
                    <p className="text-sm text-red-700 mb-3">
                      If you are experiencing thoughts of self-harm or suicide, please contact emergency services immediately:
                    </p>
                    <div className="space-y-1 text-sm">
                      <p><strong>KIRAN:</strong> 1800-599-0019 (24/7, toll-free)</p>
                      <p><strong>Emergency Services:</strong> 102 or 108</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team & Acknowledgments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Our Team & Acknowledgments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Our Team</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">{member.role}</h4>
                      <p className="text-sm text-gray-600">{member.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4">Acknowledgments</h3>
                <p className="text-gray-600 mb-4">
                  We are grateful to the following organizations and communities for their support, guidance, and contributions to mental health awareness in India:
                </p>
                <ul className="space-y-2">
                  {acknowledgments.map((ack, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{ack}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mental Health Do's & Don'ts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" />
              Mental Health Do's & Don'ts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-800">✅ Do's</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-800">Take care of your physical health</p>
                      <p className="text-sm text-green-700">Regular exercise, proper sleep, and balanced nutrition support mental well-being</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-800">Stay connected with others</p>
                      <p className="text-sm text-green-700">Maintain relationships and seek support when needed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-800">Practice stress management</p>
                      <p className="text-sm text-green-700">Use healthy coping strategies like meditation, breathing exercises, or hobbies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-800">Seek professional help when needed</p>
                      <p className="text-sm text-green-700">Don't hesitate to consult mental health professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-800">Be patient with yourself</p>
                      <p className="text-sm text-green-700">Recovery and growth take time - practice self-compassion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-800">Educate yourself about mental health</p>
                      <p className="text-sm text-green-700">Understanding mental health reduces stigma and improves outcomes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-800">❌ Don'ts</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                    <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-red-800">Don't ignore persistent symptoms</p>
                      <p className="text-sm text-red-700">Seek help if symptoms last more than two weeks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                    <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-red-800">Don't self-medicate with alcohol or drugs</p>
                      <p className="text-sm text-red-700">Substance use can worsen mental health conditions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                    <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-red-800">Don't isolate yourself completely</p>
                      <p className="text-sm text-red-700">Maintain some social connections even when it's difficult</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                    <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-red-800">Don't believe everything you think</p>
                      <p className="text-sm text-red-700">Negative thoughts during low periods aren't always accurate</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                    <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-red-800">Don't compare your journey to others</p>
                      <p className="text-sm text-red-700">Everyone's mental health journey is unique</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                    <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-red-800">Don't stop treatment without consulting professionals</p>
                      <p className="text-sm text-red-700">Always discuss changes with your healthcare provider</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits of Good Mental Health */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              Benefits of Good Mental Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {advantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <div key={index} className={`p-4 rounded-lg border-l-4 ${getColorClasses(advantage.color)}`}>
                    <div className="flex items-start gap-3">
                      <IconComponent className="w-6 h-6 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">{advantage.title}</h3>
                        <p className="text-sm">{advantage.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Contact & Support */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              Contact & Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Get In Touch</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">General Inquiries</p>
                        <p className="text-sm text-gray-600">hello@mindfulpath.org</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium">Privacy Concerns</p>
                        <p className="text-sm text-gray-600">privacy@mindfulpath.org</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-5 h-5 text-yellow-600" />
                      <div>
                        <p className="font-medium">Suggestions</p>
                        <p className="text-sm text-gray-600">feedback@mindfulpath.org</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Response Time</h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>General inquiries: 2-3 business days</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span>Privacy concerns: 24-48 hours</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-yellow-600" />
                      <span>Technical issues: 1-2 business days</span>
                    </p>
                  </div>
                  
                  <Alert className="mt-4">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      <strong>Note:</strong> We cannot provide emergency mental health support via email. For crisis situations, please contact helplines or emergency services.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Future Plans */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Future Plans & Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-gray-600">
                We're continuously working to improve Mindful Path and expand our resources. Here's what we're planning:
              </p>

              <div className="space-y-4">
                {upcomingFeatures.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold">{item.feature}</h3>
                        <Badge variant="outline">{item.timeline}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Community Driven</h4>
                <p className="text-sm text-green-700">
                  Our development priorities are influenced by user feedback and community needs. Have a suggestion? We'd love to hear from you!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources & Links */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Additional Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <Globe className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">WHO Mental Health</h3>
                <p className="text-sm text-gray-600 mb-3">World Health Organization mental health resources</p>
                <Button size="sm" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Visit
                </Button>
              </div>

              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">NIMHANS</h3>
                <p className="text-sm text-gray-600 mb-3">National Institute of Mental Health and Neurosciences</p>
                <Button size="sm" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Visit
                </Button>
              </div>

              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Mental Health India</h3>
                <p className="text-sm text-gray-600 mb-3">Government mental health portal</p>
                <Button size="sm" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Visit
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* App Info */}
        <Card>
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto">
                <Leaf className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Mindful Path</h2>
                <p className="text-gray-600">Your Mental Health Companion</p>
              </div>

              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <span>Version 1.0.0</span>
                <span>•</span>
                <span>Made with ❤️ in India</span>
                <span>•</span>
                <span>Free & Open Source</span>
              </div>

              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                Thank you for choosing Mindful Path. Together, we can break the stigma around mental health and create a more supportive society for everyone.
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

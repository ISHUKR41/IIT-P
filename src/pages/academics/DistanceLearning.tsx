import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Monitor, Users, Wifi, ExternalLink, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Distance Learning (CDEEP) Page for IIT Patna
 * Features:
 * - Information about Centre for Distance Education Engineering Programme
 * - Online learning opportunities and courses
 * - Technology-enabled distance education
 * - Registration and admission processes
 * - Modern animations and responsive design
 */
const DistanceLearning: React.FC = () => {
  // CDEEP program features
  const cdeepFeatures = [
    {
      title: "Online Learning Platform",
      description: "State-of-the-art LMS with interactive content, video lectures, and real-time discussions",
      icon: Monitor,
      color: "from-blue-500 to-blue-600",
      benefits: [
        "HD video lectures by IIT faculty",
        "Interactive simulations and labs",
        "24/7 platform accessibility",
        "Mobile-responsive design"
      ]
    },
    {
      title: "Expert Faculty",
      description: "Learn from renowned IIT Patna faculty members with decades of experience",
      icon: Users,
      color: "from-green-500 to-green-600",
      benefits: [
        "Industry-experienced professors",
        "Live interactive sessions",
        "Doubt clearing sessions",
        "Personalized mentorship"
      ]
    },
    {
      title: "Flexible Learning",
      description: "Study at your own pace with flexible timings and self-paced learning modules",
      icon: Clock,
      color: "from-purple-500 to-purple-600",
      benefits: [
        "Self-paced learning modules",
        "Weekend and evening batches",
        "Recorded lecture access",
        "Mobile learning support"
      ]
    },
    {
      title: "Technology Integration",
      description: "Advanced learning technologies including AI-powered assessments and VR labs",
      icon: Wifi,
      color: "from-orange-500 to-orange-600",
      benefits: [
        "Virtual reality laboratories",
        "AI-powered assessments",
        "Cloud-based simulations",
        "Blockchain certificates"
      ]
    }
  ];

  // Available programs
  const programs = [
    {
      title: "M.Tech in Computer Science",
      duration: "2 Years",
      mode: "Online",
      eligibility: "B.Tech/B.E. in relevant field",
      highlights: ["Advanced algorithms", "Machine learning", "Cybersecurity", "Software engineering"]
    },
    {
      title: "M.Tech in Electronics & Communication",
      duration: "2 Years", 
      mode: "Blended",
      eligibility: "B.Tech/B.E. in ECE/EEE",
      highlights: ["Signal processing", "VLSI design", "Communication systems", "IoT applications"]
    },
    {
      title: "Certificate in Data Science",
      duration: "6 Months",
      mode: "Online",
      eligibility: "Any graduate degree",
      highlights: ["Python programming", "Statistical analysis", "Machine learning", "Data visualization"]
    },
    {
      title: "Diploma in Digital Marketing",
      duration: "1 Year",
      mode: "Online",
      eligibility: "12th pass or equivalent",
      highlights: ["SEO/SEM", "Social media marketing", "Content strategy", "Analytics"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Distance Learning (CDEEP) - IIT Patna | Online Education & Courses</title>
        <meta 
          name="description" 
          content="Explore IIT Patna's Centre for Distance Education Engineering Programme (CDEEP). Quality engineering education through online and blended learning modes."
        />
        <meta 
          name="keywords" 
          content="IIT Patna distance learning, CDEEP, online education, distance education, engineering courses, online degrees, e-learning"
        />
        <link rel="canonical" href="https://www.iitp.ac.in/academics/distance-learning" />
      </Helmet>

      <Layout>
        <div className="min-h-screen bg-gradient-subtle py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header Section */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Monitor className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6">
                Distance Learning (CDEEP)
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Centre for Distance Education Engineering Programme - Bringing world-class 
                IIT education to your doorstep through innovative technology and flexible learning.
              </p>
            </motion.div>

            {/* Hero Statistics */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="card-feature text-center">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">50,000+</h3>
                  <p className="text-muted-foreground">Students Enrolled</p>
                </CardContent>
              </Card>
              <Card className="card-feature text-center">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">100+</h3>
                  <p className="text-muted-foreground">Expert Faculty</p>
                </CardContent>
              </Card>
              <Card className="card-feature text-center">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">25+</h3>
                  <p className="text-muted-foreground">Programs Offered</p>
                </CardContent>
              </Card>
              <Card className="card-feature text-center">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">95%</h3>
                  <p className="text-muted-foreground">Success Rate</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* CDEEP Features */}
            <motion.div 
              className="grid md:grid-cols-2 gap-8 mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {cdeepFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="card-feature h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className={`p-3 rounded-full bg-gradient-to-r ${feature.color}`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <CardTitle className="text-xl text-primary">
                            {feature.title}
                          </CardTitle>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-2">
                              <span className="text-secondary text-sm">✓</span>
                              <span className="text-muted-foreground text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Available Programs */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card className="card-modern">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl text-primary flex items-center space-x-3">
                    <BookOpen className="h-8 w-8" />
                    <span>Available Programs</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Comprehensive range of engineering and technology programs
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {programs.map((program, index) => (
                      <motion.div
                        key={program.title}
                        className="p-6 bg-card-hover rounded-xl hover:shadow-card transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="font-semibold text-primary text-lg">
                            {program.title}
                          </h4>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            program.mode === 'Online' 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'bg-green-100 text-green-700'
                          }`}>
                            {program.mode}
                          </span>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                            <Clock className="h-4 w-4" />
                            <span>Duration: {program.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                            <MapPin className="h-4 w-4" />
                            <span>Eligibility: {program.eligibility}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h5 className="font-medium text-primary mb-2">Key Highlights:</h5>
                          <div className="flex flex-wrap gap-2">
                            {program.highlights.map((highlight, highlightIndex) => (
                              <span 
                                key={highlightIndex}
                                className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Button className="w-full btn-secondary">
                          Learn More
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Application Process & Support */}
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Application Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full text-sm flex items-center justify-center font-medium">1</span>
                      <div>
                        <h4 className="font-medium text-primary">Online Registration</h4>
                        <p className="text-muted-foreground text-sm">Create account and fill application form</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full text-sm flex items-center justify-center font-medium">2</span>
                      <div>
                        <h4 className="font-medium text-primary">Document Upload</h4>
                        <p className="text-muted-foreground text-sm">Submit required academic certificates</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full text-sm flex items-center justify-center font-medium">3</span>
                      <div>
                        <h4 className="font-medium text-primary">Entrance Test</h4>
                        <p className="text-muted-foreground text-sm">Online assessment based on program</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full text-sm flex items-center justify-center font-medium">4</span>
                      <div>
                        <h4 className="font-medium text-primary">Admission Confirmation</h4>
                        <p className="text-muted-foreground text-sm">Fee payment and course enrollment</p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Student Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Technical Support</h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        24/7 technical assistance for platform and connectivity issues
                      </p>
                      <Button size="sm" className="btn-secondary">
                        Get Help
                      </Button>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Academic Counseling</h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        Dedicated counselors for academic guidance and career planning
                      </p>
                      <Button size="sm" variant="outline">
                        Book Session
                      </Button>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Study Materials</h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        Comprehensive digital library and learning resources
                      </p>
                      <Button size="sm" variant="outline">
                        Access Library
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DistanceLearning;
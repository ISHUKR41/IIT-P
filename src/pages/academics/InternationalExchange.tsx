import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Users, BookOpen, Award, ExternalLink, Plane, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * International Exchange Program Page for IIT Patna
 * Features:
 * - Student and faculty exchange opportunities
 * - International partnerships and collaborations
 * - Application processes and requirements
 * - Study abroad programs and research opportunities
 * - Modern animations and comprehensive information
 */
const InternationalExchange: React.FC = () => {
  // Exchange program types
  const exchangePrograms = [
    {
      title: "Student Exchange Program",
      description: "Semester abroad opportunities at partner universities worldwide",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
      duration: "1-2 Semesters",
      eligibility: "CGPA ≥ 7.5",
      benefits: [
        "Credit transfer facility",
        "Cultural immersion experience", 
        "International networking",
        "Enhanced career prospects"
      ]
    },
    {
      title: "Faculty Exchange Program",
      description: "Research and teaching collaborations with international institutions",
      icon: Users,
      color: "from-green-500 to-green-600",
      duration: "3-12 Months",
      eligibility: "PhD + 2 years experience",
      benefits: [
        "Research collaboration",
        "Grant funding support",
        "Publication opportunities",
        "Global research network"
      ]
    },
    {
      title: "Summer Research Program",
      description: "Short-term research internships at prestigious international labs",
      icon: BookOpen,
      color: "from-purple-500 to-purple-600",
      duration: "6-12 Weeks",
      eligibility: "B.Tech 3rd year onwards",
      benefits: [
        "Hands-on research experience",
        "Mentorship by experts",
        "Research publications",
        "Future PhD opportunities"
      ]
    },
    {
      title: "Joint Degree Program",
      description: "Dual degree programs with partner universities",
      icon: Award,
      color: "from-orange-500 to-orange-600",
      duration: "2-4 Years",
      eligibility: "As per program requirements",
      benefits: [
        "Degrees from both institutions",
        "Enhanced global recognition",
        "Diverse academic exposure",
        "International alumni network"
      ]
    }
  ];

  // Partner universities by region
  const partnerUniversities = [
    {
      region: "North America",
      flag: "🇺🇸🇨🇦",
      universities: [
        { name: "MIT, USA", programs: ["Research", "Exchange"] },
        { name: "Stanford University, USA", programs: ["Summer Research", "Joint Degree"] },
        { name: "University of Toronto, Canada", programs: ["Student Exchange", "Faculty Exchange"] },
        { name: "Carnegie Mellon University, USA", programs: ["Research", "Exchange"] }
      ]
    },
    {
      region: "Europe",
      flag: "🇩🇪🇫🇷🇬🇧",
      universities: [
        { name: "Technical University of Munich, Germany", programs: ["Exchange", "Joint Degree"] },
        { name: "École Polytechnique, France", programs: ["Summer Research", "Exchange"] },
        { name: "Imperial College London, UK", programs: ["Research", "Faculty Exchange"] },
        { name: "ETH Zurich, Switzerland", programs: ["Student Exchange", "Research"] }
      ]
    },
    {
      region: "Asia-Pacific",
      flag: "🇯🇵🇰🇷🇸🇬",
      universities: [
        { name: "University of Tokyo, Japan", programs: ["Exchange", "Research"] },
        { name: "KAIST, South Korea", programs: ["Summer Research", "Joint Degree"] },
        { name: "National University of Singapore", programs: ["Student Exchange", "Research"] },
        { name: "University of Melbourne, Australia", programs: ["Exchange", "Faculty Exchange"] }
      ]
    }
  ];

  // Application timeline
  const applicationTimeline = [
    { month: "January", activity: "Application opens for Fall semester" },
    { month: "March", activity: "Document submission deadline" },
    { month: "April", activity: "Selection process and interviews" },
    { month: "May", activity: "Results announcement and acceptance" },
    { month: "June-July", activity: "Visa processing and pre-departure" },
    { month: "August", activity: "Program commencement" }
  ];

  return (
    <>
      <Helmet>
        <title>International Exchange - IIT Patna | Study Abroad & Global Programs</title>
        <meta 
          name="description" 
          content="Explore international exchange opportunities at IIT Patna. Student exchange programs, faculty collaborations, and study abroad opportunities with global partner universities."
        />
        <meta 
          name="keywords" 
          content="IIT Patna international exchange, study abroad, student exchange, faculty exchange, international partnerships, global education"
        />
        <link rel="canonical" href="https://www.iitp.ac.in/academics/international-exchange" />
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
                  <Globe className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6">
                International Exchange
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Expand your horizons with global academic and research opportunities. 
                Connect with world-class institutions and build an international perspective.
              </p>
            </motion.div>

            {/* Global Statistics */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="card-feature text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl mb-2">🌍</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">75+</h3>
                  <p className="text-muted-foreground">Partner Universities</p>
                </CardContent>
              </Card>
              <Card className="card-feature text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl mb-2">✈️</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">500+</h3>
                  <p className="text-muted-foreground">Students Exchanged</p>
                </CardContent>
              </Card>
              <Card className="card-feature text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl mb-2">🎓</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">25+</h3>
                  <p className="text-muted-foreground">Countries</p>
                </CardContent>
              </Card>
              <Card className="card-feature text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl mb-2">🤝</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">100+</h3>
                  <p className="text-muted-foreground">Faculty Collaborations</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Exchange Programs */}
            <motion.div 
              className="grid md:grid-cols-2 gap-8 mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {exchangePrograms.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <motion.div
                    key={program.title}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="card-feature h-full">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className={`p-3 rounded-full bg-gradient-to-r ${program.color}`}>
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-xl text-primary">
                              {program.title}
                            </CardTitle>
                          </div>
                          <Plane className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {program.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="p-3 bg-card-hover rounded-lg text-center">
                            <p className="text-sm text-muted-foreground">Duration</p>
                            <p className="font-semibold text-primary">{program.duration}</p>
                          </div>
                          <div className="p-3 bg-card-hover rounded-lg text-center">
                            <p className="text-sm text-muted-foreground">Eligibility</p>
                            <p className="font-semibold text-primary">{program.eligibility}</p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="font-medium text-primary mb-2">Key Benefits:</h4>
                          <ul className="space-y-1">
                            {program.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start space-x-2">
                                <span className="text-secondary text-sm">✓</span>
                                <span className="text-muted-foreground text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button className="w-full btn-secondary">
                          Apply Now
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Partner Universities */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card className="card-modern">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl text-primary flex items-center space-x-3">
                    <Globe className="h-8 w-8" />
                    <span>Global Partner Universities</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Our prestigious network of international academic partnerships
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {partnerUniversities.map((region, regionIndex) => (
                      <motion.div
                        key={region.region}
                        className="border-l-4 border-primary/30 pl-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + regionIndex * 0.1 }}
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="text-2xl">{region.flag}</span>
                          <h3 className="text-xl font-semibold text-primary">{region.region}</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          {region.universities.map((university, universityIndex) => (
                            <motion.div
                              key={university.name}
                              className="p-4 bg-card-hover rounded-lg hover:shadow-card transition-all duration-300"
                              whileHover={{ scale: 1.02 }}
                            >
                              <h4 className="font-semibold text-primary mb-2">{university.name}</h4>
                              <div className="flex flex-wrap gap-2">
                                {university.programs.map((program, programIndex) => (
                                  <span 
                                    key={programIndex}
                                    className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full"
                                  >
                                    {program}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Application Timeline and Support */}
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Application Timeline</CardTitle>
                  <p className="text-muted-foreground">
                    Important dates for exchange program applications
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {applicationTimeline.map((item, index) => (
                      <motion.div
                        key={item.month}
                        className="flex items-start space-x-4 p-3 bg-card-hover rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm flex items-center justify-center font-medium">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium text-primary">{item.month}</h4>
                          <p className="text-muted-foreground text-sm">{item.activity}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Support Services</CardTitle>
                  <p className="text-muted-foreground">
                    Comprehensive support for international mobility
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Pre-Departure Support</h4>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li>• Visa application guidance</li>
                        <li>• Cultural orientation sessions</li>
                        <li>• Travel and accommodation assistance</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Academic Support</h4>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li>• Course selection guidance</li>
                        <li>• Credit transfer facilitation</li>
                        <li>• Academic progress monitoring</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Ongoing Support</h4>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li>• 24/7 emergency assistance</li>
                        <li>• Regular check-ins and counseling</li>
                        <li>• Alumni network connections</li>
                      </ul>
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

export default InternationalExchange;
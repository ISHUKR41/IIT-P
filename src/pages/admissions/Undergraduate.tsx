import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Users, BookOpen, Award, Clock, FileText, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Undergraduate Admissions page - Information about B.Tech admissions
 * Features:
 * - Complete B.Tech program information
 * - Admission process and eligibility criteria
 * - Department-wise seat matrix
 * - Application deadlines and important dates
 * - Fee structure and scholarship information
 */
const Undergraduate: React.FC = () => {
  const programs = [
    {
      name: "Computer Science & Engineering",
      code: "CSE",
      seats: 85,
      description: "Core computer science with focus on algorithms, software development, and emerging technologies.",
      specializations: ["AI/ML", "Cybersecurity", "Data Science", "Software Engineering"]
    },
    {
      name: "Electrical Engineering",
      code: "EE",
      seats: 70,
      description: "Power systems, electronics, control systems, and electrical machine design.",
      specializations: ["Power Systems", "Electronics", "Control Systems", "Renewable Energy"]
    },
    {
      name: "Mechanical Engineering",
      code: "ME",
      seats: 65,
      description: "Design, manufacturing, thermal engineering, and advanced materials.",
      specializations: ["Manufacturing", "Thermal Engineering", "Design", "Robotics"]
    },
    {
      name: "Civil Engineering",
      code: "CE",
      seats: 60,
      description: "Infrastructure development, structural engineering, and environmental systems.",
      specializations: ["Structural", "Environmental", "Geotechnical", "Transportation"]
    },
    {
      name: "Chemical Engineering",
      code: "CHE",
      seats: 50,
      description: "Process design, chemical production, and environmental engineering.",
      specializations: ["Process Design", "Environmental", "Petrochemicals", "Biotechnology"]
    },
    {
      name: "Electronics & Communication",
      code: "ECE",
      seats: 75,
      description: "Communication systems, VLSI design, and embedded systems.",
      specializations: ["VLSI Design", "Communication", "Embedded Systems", "Signal Processing"]
    }
  ];

  const admissionProcess = [
    {
      step: 1,
      title: "JEE Main Qualification",
      description: "Qualify JEE Main with required percentile cutoff",
      icon: BookOpen,
      timeline: "January-April"
    },
    {
      step: 2,
      title: "JEE Advanced",
      description: "Clear JEE Advanced examination",
      icon: Award,
      timeline: "May"
    },
    {
      step: 3,
      title: "JoSAA Counselling",
      description: "Participate in Joint Seat Allocation Authority counselling",
      icon: Users,
      timeline: "June-July"
    },
    {
      step: 4,
      title: "Seat Allocation",
      description: "Get seat allotment based on rank and preferences",
      icon: CheckCircle,
      timeline: "July"
    },
    {
      step: 5,
      title: "Document Verification",
      description: "Complete document verification and fee payment",
      icon: FileText,
      timeline: "July-August"
    },
    {
      step: 6,
      title: "Admission Confirmation",
      description: "Report to institute and complete admission formalities",
      icon: GraduationCap,
      timeline: "August"
    }
  ];

  const eligibilityRequirements = [
    {
      category: "Educational Qualification",
      requirements: [
        "12th standard (10+2) or equivalent with Physics, Chemistry, and Mathematics",
        "Minimum 75% aggregate (65% for SC/ST) in qualifying examination",
        "Must have passed in all three subjects individually"
      ]
    },
    {
      category: "Entrance Examination",
      requirements: [
        "JEE Main qualification with required percentile",
        "JEE Advanced rank within prescribed limits",
        "Valid scorecard from respective examination authorities"
      ]
    },
    {
      category: "Age Limit",
      requirements: [
        "General/OBC candidates: Born on or after October 1, 1999",
        "SC/ST/PwD candidates: Born on or after October 1, 1994",
        "Age relaxation as per government norms"
      ]
    }
  ];

  const feeStructure = [
    { category: "Tuition Fee", amount: "₹2,00,000", period: "Per Year" },
    { category: "Hostel Fee", amount: "₹35,000", period: "Per Year" },
    { category: "Mess Fee", amount: "₹45,000", period: "Per Year" },
    { category: "One-time Fees", amount: "₹15,000", period: "At Admission" },
    { category: "Total (Approx)", amount: "₹2,95,000", period: "First Year" }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Undergraduate Admissions - IIT Patna | B.Tech Programs</title>
        <meta 
          name="description" 
          content="Apply for undergraduate B.Tech programs at IIT Patna. Learn about admission process, eligibility criteria, programs offered, and fee structure."
        />
        <meta name="keywords" content="IIT Patna B.Tech admission, undergraduate programs, JEE Advanced, engineering admission" />
      </Helmet>

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="relative bg-gradient-primary text-primary-foreground py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GraduationCap className="h-16 w-16 mx-auto mb-6 opacity-80" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Undergraduate Admissions
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
                Begin your journey in engineering excellence with our B.Tech programs
              </p>
              <div className="mt-8">
                <Button size="lg" variant="secondary" className="btn-secondary">
                  Apply Now for 2025
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Programs", value: "6", icon: BookOpen, color: "text-blue-600" },
                { label: "Total Seats", value: "405", icon: Users, color: "text-green-600" },
                { label: "Placement Rate", value: "95%", icon: Award, color: "text-purple-600" },
                { label: "Duration", value: "4 Years", icon: Clock, color: "text-orange-600" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="card-modern text-center">
                      <CardContent className="pt-6">
                        <IconComponent className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                        <div className="text-2xl font-bold text-primary mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Programs Offered */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                B.Tech Programs
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose from our comprehensive range of undergraduate engineering programs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.code}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="card-modern h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge variant="secondary">{program.code}</Badge>
                            <Badge variant="outline">{program.seats} Seats</Badge>
                          </div>
                          <CardTitle className="text-xl text-primary">
                            {program.name}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {program.description}
                      </p>
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">
                          Specialization Areas:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {program.specializations.map((spec, specIndex) => (
                            <Badge 
                              key={specIndex} 
                              variant="outline" 
                              className="text-xs"
                            >
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Admission Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Step-by-step guide to secure your admission in B.Tech programs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {admissionProcess.map((process, index) => {
                const IconComponent = process.icon;
                return (
                  <motion.div
                    key={process.step}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="card-modern h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                            {process.step}
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg text-primary">
                              {process.title}
                            </CardTitle>
                            <Badge variant="outline" className="text-xs mt-1">
                              {process.timeline}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-start space-x-3">
                          <IconComponent className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {process.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Eligibility & Fee Structure */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Eligibility */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="card-feature h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">
                      Eligibility Criteria
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {eligibilityRequirements.map((category, index) => (
                      <div key={index}>
                        <h3 className="text-lg font-semibold text-primary mb-3">
                          {category.category}
                        </h3>
                        <ul className="space-y-2">
                          {category.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {req}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Fee Structure */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="card-feature h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">
                      Fee Structure (2024-25)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {feeStructure.map((fee, index) => (
                        <div 
                          key={index} 
                          className={`flex justify-between items-center p-3 rounded-lg ${
                            fee.category.includes('Total') ? 'bg-primary/10 border border-primary/20' : 'bg-muted/30'
                          }`}
                        >
                          <div>
                            <span className={`font-medium ${
                              fee.category.includes('Total') ? 'text-primary' : 'text-foreground'
                            }`}>
                              {fee.category}
                            </span>
                            {fee.period && (
                              <span className="text-sm text-muted-foreground ml-2">
                                ({fee.period})
                              </span>
                            )}
                          </div>
                          <span className={`font-bold ${
                            fee.category.includes('Total') ? 'text-primary text-lg' : 'text-secondary'
                          }`}>
                            {fee.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-800">
                        <strong>Note:</strong> Fee structure may vary for different categories. 
                        Scholarship and financial assistance available for eligible students.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Start Your Engineering Journey?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join IIT Patna and become part of India's premier technical education system
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="btn-secondary">
                  Download Brochure
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Contact Admissions
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Undergraduate;
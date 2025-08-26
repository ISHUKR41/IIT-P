import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Calendar, FileText, ExternalLink, GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Course Management (ASC) Page for IIT Patna
 * Features:
 * - Academic System for Course management information
 * - Course registration guidelines
 * - Academic calendar integration
 * - Student and faculty resources
 * - System access and support
 */
const CourseManagement: React.FC = () => {
  // ASC system features
  const ascFeatures = [
    {
      title: "Course Registration",
      description: "Online course registration system for students to enroll in subjects for each semester",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      features: [
        "Semester-wise course selection",
        "Prerequisites checking",
        "Credit limit management",
        "Registration timeline tracking"
      ]
    },
    {
      title: "Academic Records",
      description: "Comprehensive academic record management and grade tracking system",
      icon: FileText,
      color: "from-green-500 to-green-600",
      features: [
        "Grade reports and transcripts",
        "CGPA calculation",
        "Semester-wise performance",
        "Academic standing status"
      ]
    },
    {
      title: "Faculty Management",
      description: "Tools for faculty to manage courses, students, and academic activities",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      features: [
        "Course content management",
        "Student enrollment tracking",
        "Grade entry and submission",
        "Attendance management"
      ]
    },
    {
      title: "Academic Calendar",
      description: "Integrated calendar system for academic events and important dates",
      icon: Calendar,
      color: "from-orange-500 to-orange-600",
      features: [
        "Semester schedules",
        "Examination dates",
        "Registration deadlines",
        "Holiday calendar"
      ]
    }
  ];

  // Student guidelines
  const studentGuidelines = [
    "Login to ASC portal using your student credentials",
    "Check course prerequisites before registration",
    "Register within the specified time window",
    "Verify your course selection before final submission",
    "Monitor your academic progress regularly",
    "Contact academic advisor for course planning"
  ];

  // Faculty guidelines
  const facultyGuidelines = [
    "Update course syllabi and learning outcomes",
    "Set up course structure and evaluation criteria",
    "Monitor student enrollments and manage waitlists",
    "Submit grades within specified deadlines",
    "Maintain attendance records regularly",
    "Provide feedback on course effectiveness"
  ];

  return (
    <>
      <Helmet>
        <title>Course Management (ASC) - IIT Patna | Academic System for Course Management</title>
        <meta 
          name="description" 
          content="Access IIT Patna's Academic System for Course Management (ASC). Online course registration, academic records, grade management, and faculty tools."
        />
        <meta 
          name="keywords" 
          content="IIT Patna ASC, course management, course registration, academic system, student portal, faculty portal, grade management"
        />
        <link rel="canonical" href="https://www.iitp.ac.in/academics/course-management" />
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
                  <GraduationCap className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6">
                Course Management (ASC)
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Academic System for Course Management - Your one-stop portal for course registration, 
                academic records, and all course-related activities at IIT Patna.
              </p>
            </motion.div>

            {/* Quick Access Portal */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="card-feature max-w-2xl mx-auto">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-secondary/10 rounded-full">
                      <ExternalLink className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Access ASC Portal</h3>
                  <p className="text-muted-foreground mb-6">
                    Login to the Academic System for Course Management portal
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="btn-hero">
                      Student Login
                    </Button>
                    <Button className="btn-secondary">
                      Faculty Login
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ASC Features Grid */}
            <motion.div 
              className="grid md:grid-cols-2 gap-8 mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {ascFeatures.map((feature, index) => {
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
                          {feature.features.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2">
                              <span className="text-secondary text-sm">•</span>
                              <span className="text-muted-foreground text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Guidelines Section */}
            <motion.div 
              className="grid md:grid-cols-2 gap-8 mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Student Guidelines */}
              <Card className="card-modern">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center space-x-3">
                    <Users className="h-6 w-6" />
                    <span>Student Guidelines</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Step-by-step guide for students using the ASC system
                  </p>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3">
                    {studentGuidelines.map((guideline, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full text-sm flex items-center justify-center font-medium">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{guideline}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              {/* Faculty Guidelines */}
              <Card className="card-modern">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center space-x-3">
                    <Award className="h-6 w-6" />
                    <span>Faculty Guidelines</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Instructions for faculty members using the ASC system
                  </p>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3">
                    {facultyGuidelines.map((guideline, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-secondary text-secondary-foreground rounded-full text-sm flex items-center justify-center font-medium">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{guideline}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </motion.div>

            {/* Support and Resources */}
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">System Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Modern web browser (Chrome, Firefox, Safari, Edge)</li>
                    <li>• Stable internet connection</li>
                    <li>• JavaScript enabled</li>
                    <li>• Pop-up blocker disabled for ASC portal</li>
                    <li>• PDF reader for downloading reports</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Support Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <div>
                      <h4 className="font-semibold text-primary">Technical Support</h4>
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Academic Support</h4>
                      <p>Monday - Friday: 10:00 AM - 4:00 PM</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Emergency Support</h4>
                      <p>During registration periods: Extended hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Contact Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full btn-secondary">
                      ASC Help Desk
                    </Button>
                    <Button variant="outline" className="w-full">
                      User Manual
                    </Button>
                    <Button variant="outline" className="w-full">
                      FAQ
                    </Button>
                    <div className="text-center text-sm text-muted-foreground">
                      📧 asc-support@iitp.ac.in
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

export default CourseManagement;
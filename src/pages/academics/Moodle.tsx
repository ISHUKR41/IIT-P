import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, BookOpen, Users, MessageSquare, ExternalLink, Play, Download } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Moodle Learning Management System Page for IIT Patna
 * Features:
 * - Access to Moodle LMS platform
 * - Course management and online learning
 * - Student and faculty resources
 * - Integration with academic systems
 * - Modern animations and comprehensive information
 */
const MoodleLMS: React.FC = () => {
  // Moodle features for different user types
  const moodleFeatures = [
    {
      title: "Course Content Management",
      description: "Comprehensive digital course materials, lectures, and resources",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      userType: "All Users",
      features: [
        "Video lectures and recordings",
        "PDF notes and presentations",
        "Interactive learning modules",
        "Downloadable course materials"
      ]
    },
    {
      title: "Assignment & Assessment",
      description: "Online assignment submission, quizzes, and automated grading",
      icon: Monitor,
      color: "from-green-500 to-green-600",
      userType: "Students & Faculty",
      features: [
        "Online quiz and examination",
        "Assignment submission portal",
        "Automated grading system",
        "Plagiarism detection tools"
      ]
    },
    {
      title: "Communication Tools",
      description: "Forums, messaging, and collaborative learning environments",
      icon: MessageSquare,
      color: "from-purple-500 to-purple-600",
      userType: "All Users",
      features: [
        "Discussion forums",
        "Direct messaging system",
        "Group collaboration tools",
        "Announcement system"
      ]
    },
    {
      title: "Progress Tracking",
      description: "Real-time monitoring of academic progress and performance analytics",
      icon: Users,
      color: "from-orange-500 to-orange-600",
      userType: "Students & Faculty",
      features: [
        "Grade tracking and analytics",
        "Course completion tracking",
        "Performance dashboards",
        "Learning outcome assessment"
      ]
    }
  ];

  // Available courses by department
  const courseDepartments = [
    {
      name: "Computer Science & Engineering",
      courses: [
        { code: "CS101", name: "Programming Fundamentals", enrolled: 120, completion: "85%" },
        { code: "CS201", name: "Data Structures & Algorithms", enrolled: 98, completion: "78%" },
        { code: "CS301", name: "Database Management Systems", enrolled: 89, completion: "92%" },
        { code: "CS401", name: "Machine Learning", enrolled: 76, completion: "67%" }
      ]
    },
    {
      name: "Electrical Engineering",
      courses: [
        { code: "EE101", name: "Circuit Analysis", enrolled: 95, completion: "88%" },
        { code: "EE201", name: "Digital Electronics", enrolled: 87, completion: "91%" },
        { code: "EE301", name: "Power Systems", enrolled: 73, completion: "84%" },
        { code: "EE401", name: "Control Systems", enrolled: 68, completion: "79%" }
      ]
    },
    {
      name: "Mechanical Engineering",
      courses: [
        { code: "ME101", name: "Engineering Mechanics", enrolled: 110, completion: "87%" },
        { code: "ME201", name: "Thermodynamics", enrolled: 92, completion: "83%" },
        { code: "ME301", name: "Fluid Mechanics", enrolled: 85, completion: "89%" },
        { code: "ME401", name: "Manufacturing Processes", enrolled: 78, completion: "86%" }
      ]
    }
  ];

  // Quick access links
  const quickLinks = [
    { title: "Student Portal", description: "Access your enrolled courses", icon: BookOpen, url: "#" },
    { title: "Faculty Dashboard", description: "Manage courses and students", icon: Users, url: "#" },
    { title: "Mobile App", description: "Download Moodle mobile app", icon: Monitor, url: "#" },
    { title: "Help & Support", description: "Get technical assistance", icon: MessageSquare, url: "#" }
  ];

  return (
    <>
      <Helmet>
        <title>Moodle LMS - IIT Patna | Online Learning Management System</title>
        <meta 
          name="description" 
          content="Access IIT Patna's Moodle Learning Management System. Online courses, assignments, discussions, and comprehensive digital learning resources."
        />
        <meta 
          name="keywords" 
          content="IIT Patna Moodle, LMS, online learning, course management, e-learning, digital education, student portal"
        />
        <link rel="canonical" href="https://www.iitp.ac.in/academics/moodle" />
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
                Moodle LMS
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Your gateway to digital learning at IIT Patna. Access courses, assignments, 
                discussions, and comprehensive online educational resources.
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
                  <h3 className="text-2xl font-bold text-primary mb-4">Access Moodle Platform</h3>
                  <p className="text-muted-foreground mb-6">
                    Login to your Moodle account to access courses and learning materials
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="btn-hero">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open Moodle Portal
                    </Button>
                    <Button className="btn-secondary">
                      <Download className="mr-2 h-4 w-4" />
                      Download Mobile App
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Platform Statistics */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="card-feature text-center">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">2,500+</h3>
                  <p className="text-muted-foreground">Active Students</p>
                </CardContent>
              </Card>
              <Card className="card-feature text-center">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">150+</h3>
                  <p className="text-muted-foreground">Courses Available</p>
                </CardContent>
              </Card>
              <Card className="card-feature text-center">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">200+</h3>
                  <p className="text-muted-foreground">Faculty Members</p>
                </CardContent>
              </Card>
              <Card className="card-feature text-center">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">95%</h3>
                  <p className="text-muted-foreground">Student Satisfaction</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Moodle Features */}
            <motion.div 
              className="grid md:grid-cols-2 gap-8 mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {moodleFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="card-feature h-full">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className={`p-3 rounded-full bg-gradient-to-r ${feature.color}`}>
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-xl text-primary">
                              {feature.title}
                            </CardTitle>
                          </div>
                          <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                            {feature.userType}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {feature.features.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2">
                              <span className="text-secondary text-sm">✓</span>
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

            {/* Course Overview by Department */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="card-modern">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl text-primary flex items-center space-x-3">
                    <BookOpen className="h-8 w-8" />
                    <span>Popular Courses</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Most enrolled courses across different departments
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {courseDepartments.map((department, deptIndex) => (
                      <motion.div
                        key={department.name}
                        className="border-l-4 border-primary/30 pl-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 + deptIndex * 0.1 }}
                      >
                        <h3 className="text-xl font-semibold text-primary mb-4">{department.name}</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {department.courses.map((course, courseIndex) => (
                            <motion.div
                              key={course.code}
                              className="p-4 bg-card-hover rounded-lg hover:shadow-card transition-all duration-300"
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-semibold text-primary">{course.code}</h4>
                                <Button size="sm" variant="outline" className="h-8 px-3">
                                  <Play className="h-3 w-3 mr-1" />
                                  View
                                </Button>
                              </div>
                              <p className="text-muted-foreground text-sm mb-3">{course.name}</p>
                              <div className="flex justify-between items-center text-xs text-muted-foreground">
                                <span>{course.enrolled} students</span>
                                <span className="font-medium text-secondary">{course.completion} completion</span>
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

            {/* Quick Links and Support */}
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.div
                    key={link.title}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card className="card-feature h-full cursor-pointer group">
                      <CardContent className="pt-6 text-center">
                        <div className="flex justify-center mb-4">
                          <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            <IconComponent className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                          </div>
                        </div>
                        <h3 className="font-semibold text-primary mb-2">{link.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{link.description}</p>
                        <Button size="sm" variant="outline" className="w-full">
                          Access <ExternalLink className="ml-2 h-3 w-3" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default MoodleLMS;
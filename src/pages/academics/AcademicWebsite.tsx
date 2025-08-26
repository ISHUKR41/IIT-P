import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Globe, BookOpen, Users, FileText, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Academic Website Page for IIT Patna
 * Features:
 * - Links to academic portals and systems
 * - Department websites and resources
 * - Student and faculty portals
 * - Learning management systems
 * - Academic tools and utilities
 */
const AcademicWebsite: React.FC = () => {
  // Academic portals and systems
  const academicPortals = [
    {
      title: "Student Information System (SIS)",
      description: "Access grades, attendance, course registration, and academic records",
      url: "#",
      icon: Users,
      category: "Student Portal",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Faculty Information System (FIS)",
      description: "Faculty portal for course management, grading, and academic administration",
      url: "#",
      icon: BookOpen,
      category: "Faculty Portal",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Learning Management System (Moodle)",
      description: "Online learning platform for courses, assignments, and digital resources",
      url: "#",
      icon: Globe,
      category: "E-Learning",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Academic Calendar System",
      description: "View semester dates, holidays, examination schedules, and important events",
      url: "#",
      icon: Calendar,
      category: "Planning",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Course Catalog",
      description: "Browse all available courses, prerequisites, and academic requirements",
      url: "#",
      icon: FileText,
      category: "Academic Info",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Academic Regulations",
      description: "Access to academic policies, rules, and institutional guidelines",
      url: "#",
      icon: FileText,
      category: "Policies",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  // Department websites
  const departmentWebsites = [
    { name: "Computer Science & Engineering", url: "#" },
    { name: "Electrical Engineering", url: "#" },
    { name: "Mechanical Engineering", url: "#" },
    { name: "Civil Engineering", url: "#" },
    { name: "Chemical Engineering", url: "#" },
    { name: "Materials Science & Engineering", url: "#" },
    { name: "Mathematics & Computing", url: "#" },
    { name: "Physics", url: "#" },
    { name: "Chemistry", url: "#" },
    { name: "Humanities & Social Sciences", url: "#" }
  ];

  return (
    <>
      <Helmet>
        <title>Academic Website - IIT Patna | Academic Portals & Online Systems</title>
        <meta 
          name="description" 
          content="Access IIT Patna's academic websites, student portals, faculty systems, and online learning platforms. Find links to all academic resources and tools."
        />
        <meta 
          name="keywords" 
          content="IIT Patna academic website, student portal, faculty portal, moodle, academic system, online learning, SIS, LMS"
        />
        <link rel="canonical" href="https://www.iitp.ac.in/academics/website" />
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
                Academic Website & Portals
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Access all academic systems, portals, and online resources for students, 
                faculty, and administration at IIT Patna.
              </p>
            </motion.div>

            {/* Academic Portals Grid */}
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {academicPortals.map((portal, index) => {
                const IconComponent = portal.icon;
                return (
                  <motion.div
                    key={portal.title}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card className="card-feature h-full group cursor-pointer hover:shadow-elegant">
                      <CardHeader>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className={`p-3 rounded-full bg-gradient-to-r ${portal.color} group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-secondary bg-secondary/10 px-2 py-1 rounded-full">
                              {portal.category}
                            </span>
                          </div>
                        </div>
                        <CardTitle className="text-xl text-primary group-hover:text-secondary transition-colors duration-300">
                          {portal.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {portal.description}
                        </p>
                        <Button 
                          className="w-full btn-secondary flex items-center justify-center space-x-2"
                          onClick={() => window.open(portal.url, '_blank')}
                        >
                          <span>Access Portal</span>
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Department Websites Section */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="card-modern">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl text-primary flex items-center space-x-3">
                    <BookOpen className="h-8 w-8" />
                    <span>Department Websites</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Quick access to all academic department websites and resources
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {departmentWebsites.map((department, index) => (
                      <motion.div
                        key={department.name}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          variant="outline" 
                          className="w-full h-auto p-4 justify-between hover:bg-primary/5 hover:border-primary transition-all duration-300"
                          onClick={() => window.open(department.url, '_blank')}
                        >
                          <span className="text-left">{department.name}</span>
                          <ExternalLink className="h-4 w-4 flex-shrink-0 ml-2" />
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Access & Support */}
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Quick Access Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-between"
                      onClick={() => window.open('#', '_blank')}
                    >
                      <span>Academic Calendar 2024-25</span>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-between"
                      onClick={() => window.open('#', '_blank')}
                    >
                      <span>Examination Guidelines</span>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-between"
                      onClick={() => window.open('#', '_blank')}
                    >
                      <span>Academic Regulations</span>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-between"
                      onClick={() => window.open('#', '_blank')}
                    >
                      <span>Student Handbook</span>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Technical Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-secondary/5 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">IT Help Desk</h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        For technical issues with academic portals and systems
                      </p>
                      <Button size="sm" className="btn-secondary">
                        Contact Support
                      </Button>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Academic Office</h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        For academic queries and course-related assistance
                      </p>
                      <Button size="sm" variant="outline">
                        Get Help
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

export default AcademicWebsite;
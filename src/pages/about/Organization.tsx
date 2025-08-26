import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Building, Award, Target } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Organization page for IIT Patna
 * Features:
 * - Organizational structure
 * - Department hierarchy  
 * - Administrative divisions
 * - Leadership information
 */
const Organization: React.FC = () => {
  // Sample organizational data
  const departments = [
    {
      name: "Computer Science & Engineering",
      head: "Dr. Rajesh Kumar",
      faculty: 25,
      students: 450,
      icon: "💻"
    },
    {
      name: "Electrical Engineering", 
      head: "Dr. Priya Sharma",
      faculty: 22,
      students: 380,
      icon: "⚡"
    },
    {
      name: "Mechanical Engineering",
      head: "Dr. Amit Singh",
      faculty: 20,
      students: 340,
      icon: "⚙️"
    },
    {
      name: "Civil Engineering",
      head: "Dr. Sunita Gupta", 
      faculty: 18,
      students: 280,
      icon: "🏗️"
    },
    {
      name: "Chemical Engineering",
      head: "Dr. Vikram Patel",
      faculty: 15,
      students: 220,
      icon: "🧪"
    },
    {
      name: "Mathematics & Computing",
      head: "Dr. Neha Agarwal",
      faculty: 12,
      students: 180,
      icon: "📊"
    }
  ];

  const adminUnits = [
    {
      title: "Academic Affairs",
      description: "Managing curriculum, examinations, and academic policies",
      icon: Building
    },
    {
      title: "Student Affairs", 
      description: "Student welfare, hostel management, and extracurricular activities",
      icon: Users
    },
    {
      title: "Research & Development",
      description: "Research projects, collaborations, and innovation initiatives",
      icon: Award
    },
    {
      title: "Administration",
      description: "Finance, HR, infrastructure, and general administration",
      icon: Target
    }
  ];

  return (
    <>
      <Helmet>
        <title>Organization - IIT Patna | Structure & Departments</title>
        <meta 
          name="description" 
          content="Learn about IIT Patna's organizational structure, academic departments, administrative units, and leadership hierarchy."
        />
        <meta 
          name="keywords" 
          content="IIT Patna organization, departments, administration, faculty, academic structure, leadership"
        />
      </Helmet>

      <Layout>
        <div className="min-h-screen bg-gradient-subtle py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Page Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Organization Structure
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how IIT Patna is organized to deliver excellence in education, 
                research, and innovation through our well-structured departments and administrative units.
              </p>
            </motion.div>

            {/* Key Statistics */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Card className="card-feature text-center">
                  <CardContent className="pt-8">
                    <div className="text-3xl font-bold text-primary mb-2">6</div>
                    <p className="text-muted-foreground">Academic Departments</p>
                  </CardContent>
                </Card>
                <Card className="card-feature text-center">
                  <CardContent className="pt-8">
                    <div className="text-3xl font-bold text-secondary mb-2">112+</div>
                    <p className="text-muted-foreground">Faculty Members</p>
                  </CardContent>
                </Card>
                <Card className="card-feature text-center">
                  <CardContent className="pt-8">
                    <div className="text-3xl font-bold text-accent mb-2">1850+</div>
                    <p className="text-muted-foreground">Students</p>
                  </CardContent>
                </Card>
                <Card className="card-feature text-center">
                  <CardContent className="pt-8">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <p className="text-muted-foreground">Research Centers</p>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* Academic Departments */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center mb-8">
                <Building className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-foreground">Academic Departments</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {departments.map((dept, index) => (
                  <motion.div
                    key={dept.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card className="card-feature h-full">
                      <CardHeader className="text-center">
                        <div className="text-4xl mb-4">{dept.icon}</div>
                        <CardTitle className="text-lg mb-2">{dept.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">Head: {dept.head}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-primary">{dept.faculty}</div>
                            <p className="text-xs text-muted-foreground">Faculty</p>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-secondary">{dept.students}</div>
                            <p className="text-xs text-muted-foreground">Students</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Administrative Units */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <Users className="h-8 w-8 text-secondary mr-3" />
                <h2 className="text-3xl font-bold text-foreground">Administrative Units</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {adminUnits.map((unit, index) => (
                  <motion.div
                    key={unit.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card className="card-modern">
                      <CardHeader>
                        <div className="flex items-center mb-4">
                          <div className="p-3 bg-primary/10 rounded-lg mr-4">
                            <unit.icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{unit.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{unit.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Organizational Chart */}
            <motion.section 
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="card-feature bg-gradient-primary text-primary-foreground">
                <CardContent className="text-center py-12">
                  <Award className="h-16 w-16 mx-auto mb-6 opacity-90" />
                  <h3 className="text-2xl font-bold mb-4">Detailed Organizational Chart</h3>
                  <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                    Access our comprehensive organizational chart showing the complete 
                    hierarchy and reporting structure of IIT Patna.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-6 py-3 bg-primary-foreground text-primary rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                      View Organizational Chart
                    </button>
                    <button className="px-6 py-3 border border-primary-foreground text-primary-foreground rounded-lg font-medium hover:bg-primary-foreground hover:text-primary transition-all duration-300">
                      Download PDF
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Organization;
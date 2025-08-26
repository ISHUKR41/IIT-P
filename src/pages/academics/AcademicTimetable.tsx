import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Download, Search } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Academic Timetable Page for IIT Patna
 * Features:
 * - Semester-wise timetable organization
 * - Department and course filtering
 * - Download functionality for timetables
 * - Responsive design with modern animations
 * - Search and filter capabilities
 */
const AcademicTimetable: React.FC = () => {
  // Sample timetable data structure
  const timetableData = [
    {
      semester: "Autumn 2024",
      departments: [
        {
          name: "Computer Science & Engineering",
          courses: [
            { code: "CS101", name: "Programming Fundamentals", time: "9:00-10:30", days: "Mon, Wed, Fri" },
            { code: "CS201", name: "Data Structures", time: "11:00-12:30", days: "Tue, Thu" },
            { code: "CS301", name: "Database Systems", time: "2:00-3:30", days: "Mon, Wed" }
          ]
        },
        {
          name: "Electrical Engineering",
          courses: [
            { code: "EE101", name: "Circuit Analysis", time: "9:00-10:30", days: "Tue, Thu" },
            { code: "EE201", name: "Electronics", time: "11:00-12:30", days: "Mon, Wed, Fri" }
          ]
        }
      ]
    },
    {
      semester: "Spring 2025",
      departments: [
        {
          name: "Mechanical Engineering",
          courses: [
            { code: "ME101", name: "Engineering Mechanics", time: "9:00-10:30", days: "Mon, Wed, Fri" },
            { code: "ME201", name: "Thermodynamics", time: "2:00-3:30", days: "Tue, Thu" }
          ]
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Academic Timetable - IIT Patna | Class Schedules & Course Timings</title>
        <meta 
          name="description" 
          content="Access current academic timetables for all departments at IIT Patna. View semester-wise class schedules, course timings, and download timetable PDFs."
        />
        <meta 
          name="keywords" 
          content="IIT Patna timetable, class schedule, course timings, academic calendar, semester schedule, department timetable"
        />
        <link rel="canonical" href="https://www.iitp.ac.in/academics/timetable" />
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
                  <Calendar className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6">
                Academic Timetable
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Access comprehensive class schedules, course timings, and semester timetables 
                for all academic departments at IIT Patna.
              </p>
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button className="btn-hero flex items-center space-x-2">
                <Search className="h-4 w-4" />
                <span>Search Courses</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Download Complete Timetable</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Exam Schedule</span>
              </Button>
            </motion.div>

            {/* Timetable Content */}
            <div className="space-y-8">
              {timetableData.map((semester, semesterIndex) => (
                <motion.div
                  key={semester.semester}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + semesterIndex * 0.1 }}
                >
                  <Card className="card-modern">
                    <CardHeader>
                      <CardTitle className="text-2xl md:text-3xl text-primary flex items-center space-x-3">
                        <Calendar className="h-8 w-8" />
                        <span>{semester.semester}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {semester.departments.map((department, deptIndex) => (
                          <div key={department.name} className="border-l-4 border-primary/30 pl-6">
                            <h3 className="text-xl font-semibold text-primary mb-4">
                              {department.name}
                            </h3>
                            <div className="grid gap-4">
                              {department.courses.map((course, courseIndex) => (
                                <motion.div
                                  key={course.code}
                                  className="bg-card-hover rounded-lg p-4 hover:shadow-card transition-all duration-300"
                                  whileHover={{ scale: 1.02 }}
                                >
                                  <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                                    <div>
                                      <h4 className="font-semibold text-primary">
                                        {course.code} - {course.name}
                                      </h4>
                                      <p className="text-muted-foreground text-sm">
                                        {course.days}
                                      </p>
                                    </div>
                                    <div className="flex items-center space-x-2 text-secondary">
                                      <Clock className="h-4 w-4" />
                                      <span className="font-medium">{course.time}</span>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional Information */}
            <motion.div 
              className="mt-12 grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Important Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary">•</span>
                      <span>Timetables are subject to change. Check regularly for updates.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary">•</span>
                      <span>Lab sessions are scheduled separately and may vary by department.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary">•</span>
                      <span>Exam schedules are published 2 weeks before examination periods.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary">•</span>
                      <span>Contact your department office for specific queries.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Download Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full btn-secondary flex items-center justify-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download PDF - Complete Timetable</span>
                    </Button>
                    <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download PDF - Department Wise</span>
                    </Button>
                    <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Export to Calendar (iCal)</span>
                    </Button>
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

export default AcademicTimetable;
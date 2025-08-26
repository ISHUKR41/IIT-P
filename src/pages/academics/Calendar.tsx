import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarIcon, Clock, Download, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Academic Calendar page - Complete academic schedule and important dates
 * Features:
 * - Semester-wise academic calendar
 * - Important dates and deadlines
 * - Holiday schedule integration
 * - Examination schedule links
 * - Downloadable calendar formats
 */
const Calendar: React.FC = () => {
  const academicEvents = [
    {
      title: "Autumn Semester 2024",
      startDate: "July 15, 2024",
      endDate: "November 30, 2024",
      events: [
        { date: "July 15-19", event: "Registration & Course Selection", type: "registration" },
        { date: "July 22", event: "Classes Begin", type: "academic" },
        { date: "August 15", event: "Independence Day Holiday", type: "holiday" },
        { date: "September 2-6", event: "Mid-Semester Examinations", type: "exam" },
        { date: "October 2", event: "Gandhi Jayanti Holiday", type: "holiday" },
        { date: "October 31-Nov 2", event: "Diwali Break", type: "holiday" },
        { date: "November 18-30", event: "End Semester Examinations", type: "exam" }
      ]
    },
    {
      title: "Spring Semester 2025",
      startDate: "January 6, 2025",
      endDate: "May 31, 2025",
      events: [
        { date: "January 6-10", event: "Registration & Course Selection", type: "registration" },
        { date: "January 13", event: "Classes Begin", type: "academic" },
        { date: "January 26", event: "Republic Day Holiday", type: "holiday" },
        { date: "February 24-28", event: "Mid-Semester Examinations", type: "exam" },
        { date: "March 13-14", event: "Holi Festival Break", type: "holiday" },
        { date: "April 14", event: "Baisakhi Holiday", type: "holiday" },
        { date: "May 12-31", event: "End Semester Examinations", type: "exam" }
      ]
    }
  ];

  const importantDates = [
    {
      date: "June 1-30, 2024",
      event: "Summer Internship Period",
      description: "Students undertake industrial/research internships",
      priority: "high"
    },
    {
      date: "July 1-10, 2024",
      event: "Faculty Development Program",
      description: "Professional development activities for teaching staff",
      priority: "medium"
    },
    {
      date: "December 2024",
      event: "Annual Convocation",
      description: "Graduation ceremony for completing students",
      priority: "high"
    },
    {
      date: "March 2025",
      event: "Annual Technical Festival - Celesta",
      description: "Student-organized technical and cultural events",
      priority: "high"
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'registration': return 'bg-blue-100 text-blue-800';
      case 'academic': return 'bg-green-100 text-green-800';
      case 'exam': return 'bg-red-100 text-red-800';
      case 'holiday': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Academic Calendar - IIT Patna | Important Dates & Schedule</title>
        <meta 
          name="description" 
          content="View the complete academic calendar for IIT Patna including semester dates, examination schedule, holidays, and important academic events."
        />
        <meta name="keywords" content="IIT Patna academic calendar, semester dates, exam schedule, holidays, academic events" />
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
              <CalendarIcon className="h-16 w-16 mx-auto mb-6 opacity-80" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Academic Calendar
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
                Complete schedule of academic activities, examinations, and important dates
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Download, label: "Download PDF", color: "text-blue-600" },
                { icon: CalendarIcon, label: "Add to Calendar", color: "text-green-600" },
                { icon: Clock, label: "View Timetable", color: "text-purple-600" },
                { icon: AlertCircle, label: "Set Reminders", color: "text-orange-600" }
              ].map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <motion.button
                    key={action.label}
                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <IconComponent className={`h-8 w-8 ${action.color} mb-2`} />
                    <span className="text-sm font-medium text-gray-700">{action.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Semester Calendar */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Academic Year 2024-25
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Detailed schedule for both semesters with all important academic events
              </p>
            </motion.div>

            <div className="space-y-12">
              {academicEvents.map((semester, semesterIndex) => (
                <motion.div
                  key={semester.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: semesterIndex * 0.2 }}
                >
                  <Card className="card-feature">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle className="text-2xl text-primary mb-2">
                            {semester.title}
                          </CardTitle>
                          <p className="text-muted-foreground">
                            {semester.startDate} - {semester.endDate}
                          </p>
                        </div>
                        <Badge variant="outline" className="mt-3 md:mt-0">
                          {semester.events.length} Events
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        {semester.events.map((event, eventIndex) => (
                          <motion.div
                            key={eventIndex}
                            className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: (semesterIndex * 0.5) + (eventIndex * 0.1) }}
                          >
                            <div className="flex-1">
                              <div className="flex items-center space-x-3">
                                <Badge className={getEventTypeColor(event.type)}>
                                  {event.type}
                                </Badge>
                                <span className="font-medium text-primary">
                                  {event.event}
                                </span>
                              </div>
                            </div>
                            <div className="text-sm text-muted-foreground font-medium">
                              {event.date}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Important Dates
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Key events and deadlines throughout the academic year
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {importantDates.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="card-modern h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge className={getPriorityColor(item.priority)}>
                              {item.priority} priority
                            </Badge>
                          </div>
                          <CardTitle className="text-lg text-primary">
                            {item.event}
                          </CardTitle>
                          <p className="text-sm text-secondary font-medium mt-1">
                            {item.date}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendar Legend */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                Calendar Legend
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { type: 'registration', label: 'Registration Events' },
                { type: 'academic', label: 'Academic Activities' },
                { type: 'exam', label: 'Examinations' },
                { type: 'holiday', label: 'Holidays & Breaks' }
              ].map((legend, index) => (
                <motion.div
                  key={legend.type}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Badge className={`${getEventTypeColor(legend.type)} mb-2`}>
                    {legend.label}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Calendar;
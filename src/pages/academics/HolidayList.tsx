import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Download, Star, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Holiday List Page for IIT Patna
 * Features:
 * - Academic year holiday schedule
 * - National and regional holidays
 * - Restricted holidays and optional holidays
 * - Download functionality
 * - Categorized holiday display
 */
const HolidayList: React.FC = () => {
  // Holiday data structure
  const holidays = [
    {
      category: "National Holidays",
      color: "from-red-500 to-red-600",
      holidays: [
        { date: "January 26, 2025", name: "Republic Day", type: "National" },
        { date: "August 15, 2025", name: "Independence Day", type: "National" },
        { date: "October 2, 2025", name: "Gandhi Jayanti", type: "National" }
      ]
    },
    {
      category: "Religious Holidays",
      color: "from-purple-500 to-purple-600",
      holidays: [
        { date: "March 14, 2025", name: "Holi", type: "Religious" },
        { date: "April 6, 2025", name: "Ram Navami", type: "Religious" },
        { date: "April 13, 2025", name: "Good Friday", type: "Religious" },
        { date: "May 12, 2025", name: "Buddha Purnima", type: "Religious" },
        { date: "August 16, 2025", name: "Janmashtami", type: "Religious" },
        { date: "September 7, 2025", name: "Ganesh Chaturthi", type: "Religious" },
        { date: "October 20, 2025", name: "Dussehra", type: "Religious" },
        { date: "November 1, 2025", name: "Diwali", type: "Religious" },
        { date: "November 15, 2025", name: "Guru Nanak Jayanti", type: "Religious" }
      ]
    },
    {
      category: "Regional Holidays (Bihar)",
      color: "from-green-500 to-green-600",
      holidays: [
        { date: "March 22, 2025", name: "Bihar Day", type: "Regional" },
        { date: "April 14, 2025", name: "Baisakhi", type: "Regional" },
        { date: "October 31, 2025", name: "Chhath Puja (Day 1)", type: "Regional" },
        { date: "November 1, 2025", name: "Chhath Puja (Day 2)", type: "Regional" }
      ]
    },
    {
      category: "Restricted Holidays",
      color: "from-blue-500 to-blue-600",
      holidays: [
        { date: "January 14, 2025", name: "Makar Sankranti", type: "Restricted" },
        { date: "February 13, 2025", name: "Maha Shivratri", type: "Restricted" },
        { date: "March 13, 2025", name: "Holika Dahan", type: "Restricted" },
        { date: "May 1, 2025", name: "Labour Day", type: "Restricted" },
        { date: "July 17, 2025", name: "Muharram", type: "Restricted" },
        { date: "August 26, 2025", name: "Raksha Bandhan", type: "Restricted" },
        { date: "September 6, 2025", name: "Janmashtami (Smarta)", type: "Restricted" },
        { date: "December 25, 2025", name: "Christmas Day", type: "Restricted" }
      ]
    }
  ];

  // Academic breaks
  const academicBreaks = [
    { period: "Winter Break 2024", duration: "December 23, 2024 - January 6, 2025", days: "15 days" },
    { period: "Spring Break 2025", duration: "April 10 - April 20, 2025", days: "11 days" },
    { period: "Summer Break 2025", duration: "May 15 - July 15, 2025", days: "62 days" },
    { period: "Autumn Break 2025", duration: "October 5 - October 15, 2025", days: "11 days" }
  ];

  return (
    <>
      <Helmet>
        <title>Holiday List 2025 - IIT Patna | Academic Calendar & Holidays</title>
        <meta 
          name="description" 
          content="Official holiday list for IIT Patna 2025. View national holidays, regional holidays, restricted holidays, and academic breaks for the academic year."
        />
        <meta 
          name="keywords" 
          content="IIT Patna holidays 2025, academic calendar, holiday list, Bihar holidays, national holidays, academic breaks"
        />
        <link rel="canonical" href="https://www.iitp.ac.in/academics/holidays" />
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
                Holiday List 2025
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Official holiday calendar for IIT Patna including national holidays, 
                regional celebrations, and academic breaks for the year 2025.
              </p>
            </motion.div>

            {/* Download Section */}
            <motion.div 
              className="flex justify-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button className="btn-hero flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download Holiday Calendar PDF</span>
              </Button>
            </motion.div>

            {/* Holiday Categories */}
            <div className="space-y-8 mb-16">
              {holidays.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + categoryIndex * 0.1 }}
                >
                  <Card className="card-modern">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${category.color}`}>
                          <Star className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl md:text-3xl text-primary">
                          {category.category}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        {category.holidays.map((holiday, holidayIndex) => (
                          <motion.div
                            key={holiday.name}
                            className="flex items-center justify-between p-4 bg-card-hover rounded-lg hover:shadow-card transition-all duration-300"
                            whileHover={{ scale: 1.01 }}
                          >
                            <div className="flex items-center space-x-4">
                              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}></div>
                              <div>
                                <h4 className="font-semibold text-primary">{holiday.name}</h4>
                                <p className="text-muted-foreground text-sm">{holiday.type}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-secondary">{holiday.date}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Academic Breaks Section */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Card className="card-modern">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl text-primary flex items-center space-x-3">
                    <MapPin className="h-8 w-8" />
                    <span>Academic Breaks</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Scheduled academic breaks and vacation periods
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {academicBreaks.map((breakPeriod, index) => (
                      <motion.div
                        key={breakPeriod.period}
                        className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl hover:shadow-card transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <h4 className="font-semibold text-primary text-lg mb-2">
                          {breakPeriod.period}
                        </h4>
                        <p className="text-muted-foreground mb-2">
                          {breakPeriod.duration}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm font-medium rounded-full">
                            {breakPeriod.days}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Important Notes */}
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Important Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary">•</span>
                      <span>Restricted holidays are optional and subject to department discretion.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary">•</span>
                      <span>Academic activities may continue during some regional holidays.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary">•</span>
                      <span>Holiday dates may change based on moon sighting for certain festivals.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-secondary">•</span>
                      <span>Check with department for specific holiday observances.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Academic Office</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        For holiday-related queries and clarifications
                      </p>
                      <p className="text-sm text-secondary">
                        📧 academic@iitp.ac.in
                      </p>
                    </div>
                    <div className="p-4 bg-secondary/5 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Administration</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        For official holiday declarations and updates
                      </p>
                      <p className="text-sm text-secondary">
                        📧 admin@iitp.ac.in
                      </p>
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

export default HolidayList;
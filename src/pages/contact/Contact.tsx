import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Bus, 
  Plane, 
  Train,
  Car,
  Navigation
} from 'lucide-react';

/**
 * Contact page component
 * Features:
 * - Complete contact information
 * - Campus location and directions
 * - Transportation details
 * - Working hours
 * - Interactive elements
 * - SEO optimized content
 */
const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Indian Institute of Technology Patna",
        "Bihta, Patna - 801106",
        "Bihar, India"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main Office: +91-612-302-8000",
        "Admissions: +91-612-302-8001", 
        "Academics: +91-612-302-8002"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "General: info@iitp.ac.in",
        "Admissions: admissions@iitp.ac.in",
        "Academics: academics@iitp.ac.in"
      ]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:30 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const transportationModes = [
    {
      icon: Plane,
      title: "By Air",
      description: "Nearest airport is Jay Prakash Narayan International Airport, Patna",
      distance: "35 km from campus",
      details: [
        "Airport to Campus: 45-60 minutes by taxi",
        "Prepaid taxi services available",
        "Airport shuttle service available"
      ]
    },
    {
      icon: Train,
      title: "By Train",
      description: "Patna Junction is the main railway station",
      distance: "25 km from campus",
      details: [
        "Patna Junction to Campus: 40-50 minutes",
        "Auto-rickshaw and taxi available",
        "Direct trains from major cities"
      ]
    },
    {
      icon: Bus,
      title: "By Bus",
      description: "Regular bus services from Patna bus station",
      distance: "30 km from campus",
      details: [
        "State buses available to Bihta",
        "Private bus services",
        "Campus shuttle from Bihta"
      ]
    },
    {
      icon: Car,
      title: "By Car",
      description: "Well-connected by road network",
      distance: "Via NH-30 and SH-7",
      details: [
        "GPS Coordinates: 25.6014° N, 84.9500° E",
        "Parking facilities available on campus",
        "24/7 security at gates"
      ]
    }
  ];

  const busTimings = [
    {
      route: "City to Campus",
      timings: ["7:00 AM", "8:30 AM", "10:00 AM", "2:00 PM", "4:00 PM", "6:00 PM"]
    },
    {
      route: "Campus to City", 
      timings: ["8:00 AM", "9:30 AM", "1:00 PM", "3:00 PM", "5:00 PM", "7:00 PM"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - IIT Patna | Address, Phone, Directions</title>
        <meta 
          name="description" 
          content="Contact IIT Patna - Find our address, phone numbers, email addresses, working hours, and detailed directions to reach our campus."
        />
        <meta 
          name="keywords" 
          content="IIT Patna contact, address, phone number, email, directions, how to reach, transportation, bus timings"
        />
      </Helmet>

      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10">
          <div className="container mx-auto px-4 py-12">
            
            {/* Page Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get in touch with us or find directions to reach our campus
              </p>
            </motion.div>

            {/* Contact Information Grid */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="text-center pb-4">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <IconComponent className="h-8 w-8 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{info.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="space-y-2">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground text-sm text-center">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* How to Reach Campus */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">How to Reach Campus</h2>
                <p className="text-lg text-muted-foreground">
                  Choose your preferred mode of transportation to reach IIT Patna
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {transportationModes.map((mode, index) => {
                  const IconComponent = mode.icon;
                  return (
                    <motion.div
                      key={mode.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <IconComponent className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">{mode.title}</CardTitle>
                              <p className="text-sm text-muted-foreground">{mode.distance}</p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">{mode.description}</p>
                          <ul className="space-y-2">
                            {mode.details.map((detail, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* Bus Timings */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Bus Timings</h2>
                <p className="text-lg text-muted-foreground">
                  Campus shuttle service schedule for students and staff
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {busTimings.map((schedule, index) => (
                  <motion.div
                    key={schedule.route}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Bus className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{schedule.route}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          {schedule.timings.map((time, idx) => (
                            <div key={idx} className="text-center p-3 bg-muted rounded-lg">
                              <span className="font-semibold text-foreground">{time}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 text-center">
                          <p className="text-sm text-muted-foreground">
                            *Timings may vary on holidays and special occasions
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <Button size="lg" className="hover:scale-105 transition-transform duration-200">
                  <Navigation className="h-5 w-5 mr-2" />
                  Get Directions
                </Button>
                <Button variant="outline" size="lg" className="hover:scale-105 transition-transform duration-200">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us
                </Button>
              </div>
            </motion.section>

          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
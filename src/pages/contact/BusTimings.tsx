import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bus, Clock, MapPin, ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Bus Timings page for IIT Patna
 * Features:
 * - Campus to city bus schedules
 * - City to campus bus schedules  
 * - Route information
 * - Fare details
 */
const BusTimings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("city-to-campus");

  // Sample bus timings data
  const cityToCampus = [
    {
      route: "Patna Junction to IIT Patna",
      buses: [
        { time: "06:30", type: "Regular", fare: "₹15" },
        { time: "07:15", type: "Express", fare: "₹20" },
        { time: "08:00", type: "Regular", fare: "₹15" },
        { time: "08:45", type: "Regular", fare: "₹15" },
        { time: "09:30", type: "Express", fare: "₹20" },
        { time: "10:15", type: "Regular", fare: "₹15" },
        { time: "11:00", type: "Regular", fare: "₹15" },
        { time: "12:00", type: "Express", fare: "₹20" },
        { time: "13:00", type: "Regular", fare: "₹15" },
        { time: "14:00", type: "Regular", fare: "₹15" },
        { time: "15:00", type: "Express", fare: "₹20" },
        { time: "16:00", type: "Regular", fare: "₹15" },
        { time: "17:00", type: "Regular", fare: "₹15" },
        { time: "18:00", type: "Express", fare: "₹20" },
        { time: "19:00", type: "Regular", fare: "₹15" },
        { time: "20:00", type: "Regular", fare: "₹15" }
      ]
    },
    {
      route: "Gandhi Maidan to IIT Patna",
      buses: [
        { time: "07:00", type: "Regular", fare: "₹12" },
        { time: "08:00", type: "Regular", fare: "₹12" },
        { time: "09:00", type: "Express", fare: "₹18" },
        { time: "10:00", type: "Regular", fare: "₹12" },
        { time: "11:00", type: "Regular", fare: "₹12" },
        { time: "12:00", type: "Regular", fare: "₹12" },
        { time: "13:00", type: "Express", fare: "₹18" },
        { time: "14:00", type: "Regular", fare: "₹12" },
        { time: "15:00", type: "Regular", fare: "₹12" },
        { time: "16:00", type: "Express", fare: "₹18" },
        { time: "17:00", type: "Regular", fare: "₹12" },
        { time: "18:00", type: "Regular", fare: "₹12" },
        { time: "19:30", type: "Regular", fare: "₹12" }
      ]
    }
  ];

  const campusToCity = [
    {
      route: "IIT Patna to Patna Junction",
      buses: [
        { time: "07:00", type: "Regular", fare: "₹15" },
        { time: "08:00", type: "Express", fare: "₹20" },
        { time: "09:00", type: "Regular", fare: "₹15" },
        { time: "10:00", type: "Regular", fare: "₹15" },
        { time: "11:00", type: "Express", fare: "₹20" },
        { time: "12:00", type: "Regular", fare: "₹15" },
        { time: "13:00", type: "Regular", fare: "₹15" },
        { time: "14:00", type: "Express", fare: "₹20" },
        { time: "15:00", type: "Regular", fare: "₹15" },
        { time: "16:00", type: "Regular", fare: "₹15" },
        { time: "17:00", type: "Express", fare: "₹20" },
        { time: "18:00", type: "Regular", fare: "₹15" },
        { time: "19:00", type: "Regular", fare: "₹15" },
        { time: "20:00", type: "Regular", fare: "₹15" },
        { time: "21:00", type: "Regular", fare: "₹15" }
      ]
    },
    {
      route: "IIT Patna to Gandhi Maidan",
      buses: [
        { time: "07:30", type: "Regular", fare: "₹12" },
        { time: "08:30", type: "Regular", fare: "₹12" },
        { time: "09:30", type: "Express", fare: "₹18" },
        { time: "10:30", type: "Regular", fare: "₹12" },
        { time: "11:30", type: "Regular", fare: "₹12" },
        { time: "12:30", type: "Regular", fare: "₹12" },
        { time: "13:30", type: "Express", fare: "₹18" },
        { time: "14:30", type: "Regular", fare: "₹12" },
        { time: "15:30", type: "Regular", fare: "₹12" },
        { time: "16:30", type: "Express", fare: "₹18" },
        { time: "17:30", type: "Regular", fare: "₹12" },
        { time: "18:30", type: "Regular", fare: "₹12" },
        { time: "19:30", type: "Regular", fare: "₹12" },
        { time: "20:30", type: "Regular", fare: "₹12" }
      ]
    }
  ];

  const stops = [
    "Patna Junction Railway Station",
    "Gandhi Maidan",
    "Income Tax Roundabout", 
    "Collectorate",
    "Bailey Road",
    "Boring Road",
    "AIIMS Patna",
    "IIT Patna Campus"
  ];

  return (
    <>
      <Helmet>
        <title>Bus Timings - IIT Patna | Campus Transportation Schedule</title>
        <meta 
          name="description" 
          content="View bus timings and schedules for IIT Patna campus transportation. City to campus and campus to city bus routes with timings and fares."
        />
        <meta 
          name="keywords" 
          content="IIT Patna bus timings, campus transport, bus schedule, city to campus, transportation"
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
                Bus Timings & Routes
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete bus schedule for convenient travel between IIT Patna campus and Patna city. 
                Regular and express services available throughout the day.
              </p>
            </motion.div>

            {/* Quick Info Cards */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="card-feature text-center">
                  <CardContent className="pt-6">
                    <Bus className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary">32</div>
                    <p className="text-sm text-muted-foreground">Daily Services</p>
                  </CardContent>
                </Card>
                <Card className="card-feature text-center">
                  <CardContent className="pt-6">
                    <Clock className="h-8 w-8 text-secondary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-secondary">15-30</div>
                    <p className="text-sm text-muted-foreground">Min Frequency</p>
                  </CardContent>
                </Card>
                <Card className="card-feature text-center">
                  <CardContent className="pt-6">
                    <MapPin className="h-8 w-8 text-accent mx-auto mb-3" />
                    <div className="text-2xl font-bold text-accent">8</div>
                    <p className="text-sm text-muted-foreground">Key Stops</p>
                  </CardContent>
                </Card>
                <Card className="card-feature text-center">
                  <CardContent className="pt-6">
                    <ArrowRight className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary">45</div>
                    <p className="text-sm text-muted-foreground">Min Journey</p>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* Bus Timings Tabs */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="city-to-campus" className="text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    City to Campus
                  </TabsTrigger>
                  <TabsTrigger value="campus-to-city" className="text-sm">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Campus to City
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="city-to-campus" className="space-y-8">
                  {cityToCampus.map((route, routeIndex) => (
                    <motion.div
                      key={route.route}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: routeIndex * 0.1 }}
                    >
                      <Card className="card-modern">
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Bus className="h-5 w-5 text-primary mr-2" />
                            {route.route}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                            {route.buses.map((bus, index) => (
                              <div
                                key={index}
                                className={`p-3 rounded-lg border text-center ${
                                  bus.type === 'Express' 
                                    ? 'bg-secondary/10 border-secondary/20' 
                                    : 'bg-primary/10 border-primary/20'
                                }`}
                              >
                                <div className="font-bold text-lg">{bus.time}</div>
                                <div className="text-xs text-muted-foreground">{bus.type}</div>
                                <div className="text-sm font-medium">{bus.fare}</div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </TabsContent>

                <TabsContent value="campus-to-city" className="space-y-8">
                  {campusToCity.map((route, routeIndex) => (
                    <motion.div
                      key={route.route}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: routeIndex * 0.1 }}
                    >
                      <Card className="card-modern">
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Bus className="h-5 w-5 text-primary mr-2" />
                            {route.route}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                            {route.buses.map((bus, index) => (
                              <div
                                key={index}
                                className={`p-3 rounded-lg border text-center ${
                                  bus.type === 'Express' 
                                    ? 'bg-secondary/10 border-secondary/20' 
                                    : 'bg-primary/10 border-primary/20'
                                }`}
                              >
                                <div className="font-bold text-lg">{bus.time}</div>
                                <div className="text-xs text-muted-foreground">{bus.type}</div>
                                <div className="text-sm font-medium">{bus.fare}</div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </TabsContent>
              </Tabs>
            </motion.section>

            {/* Route Stops */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-6 w-6 text-primary mr-2" />
                    Major Bus Stops
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stops.map((stop, index) => (
                      <motion.div
                        key={stop}
                        className="flex items-center p-3 bg-muted/50 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                      >
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mr-3">
                          {index + 1}
                        </div>
                        <span className="text-sm">{stop}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Important Notes */}
            <motion.section 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="card-modern">
                <CardHeader>
                  <CardTitle>Important Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Regular Service</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Stops at all designated bus stops</li>
                        <li>• Journey time: 45-60 minutes</li>
                        <li>• Lower fare, comfortable seating</li>
                        <li>• Available throughout the day</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Express Service</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Limited stops for faster travel</li>
                        <li>• Journey time: 30-40 minutes</li>
                        <li>• Slightly higher fare</li>
                        <li>• Peak hours frequency</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
                    <p className="text-sm text-foreground">
                      <strong>Note:</strong> Bus timings may vary during festivals, weather conditions, or special events. 
                      Please check with the transport office for real-time updates.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Download Schedule */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Card className="card-feature bg-gradient-primary text-primary-foreground">
                <CardContent className="text-center py-12">
                  <Download className="h-16 w-16 mx-auto mb-6 opacity-90" />
                  <h3 className="text-2xl font-bold mb-4">Download Complete Schedule</h3>
                  <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                    Get the complete bus schedule PDF with all routes, timings, and fare information 
                    for offline reference.
                  </p>
                  <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF Schedule
                  </Button>
                </CardContent>
              </Card>
            </motion.section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BusTimings;
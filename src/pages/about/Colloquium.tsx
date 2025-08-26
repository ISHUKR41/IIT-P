import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Institute Colloquium and Lectures Page
 * Features:
 * - Display of upcoming and past colloquiums
 * - Distinguished speaker information
 * - Event scheduling and venue details
 * - Academic excellence showcase
 */

interface ColloquiumEvent {
  id: string;
  title: string;
  speaker: string;
  designation: string;
  institution: string;
  date: string;
  time: string;
  venue: string;
  topic: string;
  description: string;
  status: 'upcoming' | 'completed';
}

const ColloquiumLectures: React.FC = () => {
  const upcomingEvents: ColloquiumEvent[] = [
    {
      id: '1',
      title: 'Distinguished Lecture Series',
      speaker: 'Dr. A.K. Sharma',
      designation: 'Professor Emeritus',
      institution: 'IIT Delhi',
      date: '2024-09-15',
      time: '4:00 PM',
      venue: 'Central Auditorium',
      topic: 'Advances in Sustainable Engineering',
      description: 'Exploring innovative approaches to sustainable engineering practices and their implementation in modern infrastructure.',
      status: 'upcoming'
    },
    {
      id: '2',
      title: 'Industry Interface Lecture',
      speaker: 'Ms. Priya Patel', 
      designation: 'Director of Technology',
      institution: 'Tech Innovations Ltd.',
      date: '2024-09-20',
      time: '3:30 PM',
      venue: 'Conference Hall B',
      topic: 'Industry 4.0 and Digital Transformation',
      description: 'Understanding the impact of Industry 4.0 technologies on modern manufacturing and service sectors.',
      status: 'upcoming'
    }
  ];

  const pastEvents: ColloquiumEvent[] = [
    {
      id: '3',
      title: 'Annual Institute Colloquium',
      speaker: 'Prof. R.K. Gupta',
      designation: 'Director',
      institution: 'IIT Bombay',
      date: '2024-08-10',
      time: '2:00 PM',
      venue: 'Main Auditorium',
      topic: 'Research Excellence in Higher Education',
      description: 'Strategies for promoting research culture and achieving excellence in academic institutions.',
      status: 'completed'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Institute Colloquium & Lectures - IIT Patna | Distinguished Speaker Series</title>
        <meta 
          name="description" 
          content="Join distinguished lectures and colloquiums at IIT Patna. Featuring renowned speakers from academia and industry sharing cutting-edge research and insights."
        />
        <meta name="keywords" content="IIT Patna colloquium, distinguished lectures, academic events, research presentations, speaker series" />
        <link rel="canonical" href="https://iitp.ac.in/about/colloquium" />
      </Helmet>

      <Layout>
        <div className="min-h-screen bg-gradient-subtle">
          {/* Hero Section */}
          <section className="bg-gradient-primary text-primary-foreground py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Institute Colloquium & Lectures
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto">
                  Distinguished Speaker Series fostering academic excellence and knowledge exchange
                </p>
              </motion.div>
            </div>
          </section>

          {/* Upcoming Events Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Upcoming Events
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Join us for engaging lectures by distinguished speakers from academia and industry
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="card-modern h-full">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-4">
                          <CardTitle className="text-xl text-primary">
                            {event.title}
                          </CardTitle>
                          <Badge variant="default" className="bg-primary">
                            Upcoming
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {event.speaker}
                        </h3>
                        <p className="text-muted-foreground">
                          {event.designation}, {event.institution}
                        </p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <h4 className="font-semibold text-primary text-lg">
                          {event.topic}
                        </h4>
                        <p className="text-muted-foreground">
                          {event.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="text-sm">{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2 col-span-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span className="text-sm">{event.venue}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Past Events Section */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Past Events
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Explore our archive of distinguished lectures and academic events
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {pastEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="card-modern h-full opacity-80">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-4">
                          <CardTitle className="text-xl text-foreground">
                            {event.title}
                          </CardTitle>
                          <Badge variant="secondary">
                            Completed
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {event.speaker}
                        </h3>
                        <p className="text-muted-foreground">
                          {event.designation}, {event.institution}
                        </p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <h4 className="font-semibold text-primary text-lg">
                          {event.topic}
                        </h4>
                        <p className="text-muted-foreground">
                          {event.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{event.venue}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-16 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  Join Our Academic Community
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                  Stay updated with our latest events and distinguished lecture series
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-secondary">
                    Subscribe to Updates
                  </button>
                  <button className="btn-outline bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    View Event Calendar
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default ColloquiumLectures;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Camera, Users, Heart, Download, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Campus Diary Magazine page - Student life and campus events publication
 * Features student experiences, event coverage, and campus stories
 */
const CampusDiary: React.FC = () => {
  // Sample campus diary content
  const diaryEntries = [
    {
      id: 1,
      title: 'Anwesha 2024: A Cultural Extravaganza',
      date: 'March 2024',
      category: 'Cultural Events',
      author: 'Student Editorial Team',
      excerpt: 'The annual cultural festival brought together artists, performers, and students from across India...',
      image: '/api/placeholder/400/250',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Hostel Life Chronicles',
      date: 'February 2024',
      category: 'Campus Life',
      author: 'Hostel Students',
      excerpt: 'Stories from our residential campus - friendships, late-night studies, and memorable moments...',
      image: '/api/placeholder/400/250',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Sports Week Highlights',
      date: 'January 2024',
      category: 'Sports',
      author: 'Sports Committee',
      excerpt: 'Inter-hostel competitions, record-breaking performances, and sportsmanship at its finest...',
      image: '/api/placeholder/400/250',
      readTime: '4 min read'
    }
  ];

  const features = [
    {
      icon: Calendar,
      title: 'Event Coverage',
      description: 'Comprehensive coverage of all campus events and celebrations'
    },
    {
      icon: Camera,
      title: 'Photo Stories',
      description: 'Visual narratives capturing the essence of campus life'
    },
    {
      icon: Users,
      title: 'Student Voices',
      description: 'Personal experiences and stories from our diverse student community'
    },
    {
      icon: Heart,
      title: 'Campus Culture',
      description: 'Traditions, values, and the unique spirit of IIT Patna'
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Campus Diary - IIT Patna | Student Life & Campus Events Magazine</title>
        <meta 
          name="description" 
          content="Campus Diary captures the vibrant student life at IIT Patna. Read stories about cultural events, hostel life, sports, and student experiences on our beautiful campus."
        />
        <meta 
          name="keywords" 
          content="Campus Diary, IIT Patna student life, campus events, cultural activities, hostel life, student magazine, campus stories"
        />
        <link rel="canonical" href="https://www.iitp.ac.in/about/magazines/campus-diary" />
      </Helmet>

      <Layout>
        <main className="min-h-screen bg-gradient-subtle">
          
          {/* Hero Section */}
          <section className="hero-gradient py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                  Campus Diary
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
                  Stories from our vibrant campus - capturing the spirit, culture, 
                  and unforgettable moments of student life at IIT Patna
                </p>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  What We Cover
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Campus Diary brings you closer to the heartbeat of our campus community
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.3 + (index * 0.1) 
                      }}
                    >
                      <Card className="card-feature text-center h-full">
                        <CardHeader className="pb-4">
                          <div className="mx-auto w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-4">
                            <IconComponent className="h-8 w-8 text-secondary-foreground" />
                          </div>
                          <CardTitle className="text-xl font-bold text-foreground">
                            {feature.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Recent Stories */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Recent Stories
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Latest entries from our campus diary - fresh stories and experiences
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {diaryEntries.map((entry, index) => (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.5 + (index * 0.1) 
                    }}
                  >
                    <Card className="card-modern overflow-hidden h-full">
                      {/* Story Image */}
                      <div className="aspect-[16/10] bg-gradient-secondary relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Camera className="h-12 w-12 text-secondary-foreground opacity-60" />
                        </div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                            {entry.category}
                          </span>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3 text-sm text-muted-foreground">
                          <span>{entry.date}</span>
                          <span>{entry.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                          {entry.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {entry.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            By {entry.author}
                          </span>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            Read More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Submit Story Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Card className="card-modern">
                  <CardContent className="p-12 text-center">
                    <div className="max-w-2xl mx-auto">
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Share Your Story
                      </h2>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Have a campus story to tell? We'd love to feature your experiences, 
                        achievements, or memorable moments in our next edition of Campus Diary.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="text-center">
                          <Calendar className="h-8 w-8 text-secondary mx-auto mb-3" />
                          <h4 className="font-semibold text-foreground mb-2">Event Coverage</h4>
                          <p className="text-sm text-muted-foreground">
                            Help us cover campus events and activities
                          </p>
                        </div>
                        <div className="text-center">
                          <Heart className="h-8 w-8 text-secondary mx-auto mb-3" />
                          <h4 className="font-semibold text-foreground mb-2">Personal Stories</h4>
                          <p className="text-sm text-muted-foreground">
                            Share your unique campus experiences
                          </p>
                        </div>
                      </div>
                      
                      <Button className="btn-secondary mr-4">
                        Submit Your Story
                      </Button>
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download Latest Issue
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>

        </main>
      </Layout>
    </>
  );
};

export default CampusDiary;
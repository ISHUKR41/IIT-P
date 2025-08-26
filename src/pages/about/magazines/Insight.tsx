import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Download, Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Insight Magazine page - IIT Patna's flagship publication
 * Features magazine archives, latest issues, and subscription information
 */
const Insight: React.FC = () => {
  // Sample magazine issues data
  const magazineIssues = [
    {
      id: 1,
      title: 'Innovation & Research Excellence',
      volume: 'Vol. 15, Issue 2',
      date: 'December 2023',
      coverImage: '/api/placeholder/300/400',
      description: 'Featuring breakthrough research in AI, sustainable technology, and student innovations.'
    },
    {
      id: 2,
      title: 'Campus Life & Achievements',
      volume: 'Vol. 15, Issue 1',
      date: 'June 2023',
      coverImage: '/api/placeholder/300/400',
      description: 'Highlighting student achievements, campus events, and cultural activities.'
    },
    {
      id: 3,
      title: 'Industry Collaboration Special',
      volume: 'Vol. 14, Issue 2',
      date: 'December 2022',
      coverImage: '/api/placeholder/300/400',
      description: 'Special edition on industry partnerships and placement success stories.'
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Research Articles',
      description: 'In-depth articles on cutting-edge research and innovations'
    },
    {
      icon: Users,
      title: 'Student Stories',
      description: 'Success stories and achievements of our students and alumni'
    },
    {
      icon: Calendar,
      title: 'Campus Events',
      description: 'Coverage of major events, conferences, and celebrations'
    },
    {
      icon: Download,
      title: 'Digital Access',
      description: 'Available in both print and digital formats for easy access'
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Insight Magazine - IIT Patna | Institute Publication & Research Highlights</title>
        <meta 
          name="description" 
          content="Insight is IIT Patna's flagship magazine featuring research articles, student achievements, campus life, and institutional developments. Read our latest issues online."
        />
        <meta 
          name="keywords" 
          content="Insight magazine, IIT Patna publication, research articles, student magazine, campus news, institutional magazine"
        />
        <link rel="canonical" href="https://www.iitp.ac.in/about/magazines/insight" />
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
                  Insight Magazine
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
                  IIT Patna's flagship publication showcasing research excellence, 
                  student achievements, and institutional developments
                </p>
              </motion.div>
            </div>
          </section>

          {/* Magazine Features */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  What's Inside Insight
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our magazine covers diverse aspects of campus life, research, and institutional growth
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
                          <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                            <IconComponent className="h-8 w-8 text-primary-foreground" />
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

          {/* Latest Issues */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Latest Issues
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Browse through our recent publications and download digital copies
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {magazineIssues.map((issue, index) => (
                  <motion.div
                    key={issue.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.5 + (index * 0.1) 
                    }}
                  >
                    <Card className="card-modern overflow-hidden h-full">
                      {/* Magazine Cover */}
                      <div className="aspect-[3/4] bg-gradient-primary relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-primary-foreground p-6">
                            <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-80" />
                            <h3 className="text-lg font-bold mb-2">{issue.title}</h3>
                            <p className="text-sm opacity-90">{issue.volume}</p>
                          </div>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-primary">{issue.volume}</span>
                          <span className="text-sm text-muted-foreground">{issue.date}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          {issue.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                          {issue.description}
                        </p>
                        
                        <div className="flex space-x-3">
                          <Button className="btn-outline flex-1" size="sm">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Read Online
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Subscribe Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Card className="card-modern">
                  <CardContent className="p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                      Stay Updated
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      Subscribe to receive notifications when new issues of Insight are published. 
                      Get the latest updates on research, campus life, and institutional developments.
                    </p>
                    
                    <div className="max-w-md mx-auto space-y-4">
                      <input 
                        type="email" 
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <Button className="btn-hero w-full">
                        Subscribe to Updates
                      </Button>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mt-4">
                      Published bi-annually • Free digital access • Print copies available
                    </p>
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

export default Insight;
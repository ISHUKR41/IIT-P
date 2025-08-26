import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Users, MessageSquare, Lightbulb, Download, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Impulse Magazine page - Student-driven publication for creative expression
 * Features student opinions, creative writing, and contemporary issues
 */
const Impulse: React.FC = () => {
  // Sample impulse content
  const impulseContent = [
    {
      id: 1,
      title: 'The Future of Work in AI Era',
      author: 'Aman Kumar',
      year: '3rd Year, CSE',
      category: 'Opinion',
      date: 'March 2024',
      excerpt: 'As artificial intelligence reshapes industries, what does the future hold for young professionals?',
      readTime: '6 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Campus Sustainability: A Student\'s Perspective',
      author: 'Sneha Patel',
      year: '2nd Year, Environmental Engineering',
      category: 'Environment',
      date: 'March 2024',
      excerpt: 'How small changes in our daily campus life can contribute to environmental conservation.',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 3,
      title: 'Breaking Barriers: Women in STEM',
      author: 'Priya Singh',
      year: 'PhD Scholar, Physics',
      category: 'Social',
      date: 'February 2024',
      excerpt: 'Personal experiences and observations on gender representation in technical fields.',
      readTime: '8 min read',
      featured: true
    },
    {
      id: 4,
      title: 'Mental Health in Academic Pressure',
      author: 'Rajesh Sharma',
      year: '4th Year, Mechanical',
      category: 'Wellness',
      date: 'February 2024',
      excerpt: 'Breaking the stigma around mental health discussions in academic environments.',
      readTime: '5 min read',
      featured: false
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Student Voices',
      description: 'Platform for students to express opinions on contemporary issues'
    },
    {
      icon: MessageSquare,
      title: 'Open Discussions',
      description: 'Fostering healthy debates and diverse perspectives'
    },
    {
      icon: Lightbulb,
      title: 'Creative Expression',
      description: 'Poetry, short stories, and artistic contributions'
    },
    {
      icon: Users,
      title: 'Community Issues',
      description: 'Addressing social, environmental, and campus concerns'
    }
  ];

  const categories = [
    { name: 'Opinion', count: 24, color: 'bg-primary' },
    { name: 'Creative', count: 18, color: 'bg-secondary' },
    { name: 'Social', count: 15, color: 'bg-accent' },
    { name: 'Technology', count: 21, color: 'bg-success' },
    { name: 'Environment', count: 12, color: 'bg-warning' }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Impulse Magazine - IIT Patna | Student Opinions & Creative Expression</title>
        <meta 
          name="description" 
          content="Impulse is IIT Patna's student-driven magazine featuring opinions, creative writing, and discussions on contemporary issues by our diverse student community."
        />
        <meta 
          name="keywords" 
          content="Impulse magazine, IIT Patna student opinions, creative writing, student magazine, contemporary issues, campus discussions"
        />
        <link rel="canonical" href="https://www.iitp.ac.in/about/magazines/impulse" />
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
                  Impulse
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
                  The voice of IIT Patna students - sharing perspectives, sparking conversations, 
                  and driving positive change in our community
                </p>
                <div className="mt-8">
                  <span className="inline-block bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Student-Led • Opinion-Driven • Change-Oriented
                  </span>
                </div>
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
                  What Drives Impulse
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  A platform where student voices matter and diverse perspectives come together
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
                          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-warning to-secondary rounded-full flex items-center justify-center mb-4">
                            <IconComponent className="h-8 w-8 text-warning-foreground" />
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

          {/* Categories Section */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Content Categories
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Explore different types of content our students contribute to Impulse
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.5 + (index * 0.1) 
                    }}
                  >
                    <Card className="card-modern text-center">
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                          <span className="text-white font-bold text-lg">{category.count}</span>
                        </div>
                        <h3 className="font-semibold text-foreground">{category.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">Articles</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Recent Articles */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Recent Articles
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Latest thoughts and perspectives from our student community
                </p>
              </motion.div>

              <div className="space-y-6">
                {impulseContent.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.7 + (index * 0.1) 
                    }}
                  >
                    <Card className={`card-modern ${article.featured ? 'border-warning border-2' : ''}`}>
                      <CardContent className="p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                          
                          {/* Article Content */}
                          <div className="lg:col-span-3">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                <span className="bg-warning/10 text-warning px-3 py-1 rounded-full text-sm font-medium">
                                  {article.category}
                                </span>
                                {article.featured && (
                                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                                    Featured
                                  </span>
                                )}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {article.date}
                              </span>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-foreground mb-3 leading-tight">
                              {article.title}
                            </h3>
                            
                            <div className="flex items-center space-x-2 mb-4 text-sm">
                              <span className="text-primary font-medium">{article.author}</span>
                              <span className="text-muted-foreground">•</span>
                              <span className="text-muted-foreground">{article.year}</span>
                              <span className="text-muted-foreground">•</span>
                              <span className="text-muted-foreground">{article.readTime}</span>
                            </div>
                            
                            <p className="text-muted-foreground leading-relaxed mb-6">
                              {article.excerpt}
                            </p>
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="lg:col-span-1">
                            <div className="flex lg:flex-col gap-3">
                              <Button className="btn-outline flex-1 lg:flex-none">
                                Read Article
                              </Button>
                              <Button variant="outline" className="flex-1 lg:flex-none">
                                <Share2 className="h-4 w-4 mr-2" />
                                Share
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contribute Section */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card className="card-modern">
                  <CardContent className="p-12 text-center">
                    <div className="max-w-2xl mx-auto">
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Join the Conversation
                      </h2>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Have something to say? Impulse welcomes articles, opinions, creative pieces, 
                        and thought-provoking content from all IIT Patna students.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="text-center">
                          <MessageSquare className="h-8 w-8 text-warning mx-auto mb-3" />
                          <h4 className="font-semibold text-foreground mb-2">Share Your Opinion</h4>
                          <p className="text-sm text-muted-foreground">
                            Write about issues that matter to you
                          </p>
                        </div>
                        <div className="text-center">
                          <Lightbulb className="h-8 w-8 text-warning mx-auto mb-3" />
                          <h4 className="font-semibold text-foreground mb-2">Creative Content</h4>
                          <p className="text-sm text-muted-foreground">
                            Submit poetry, stories, or artistic pieces
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <Button className="btn-secondary mr-4">
                          Submit Your Article
                        </Button>
                        <Button variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Writer's Guidelines
                        </Button>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mt-6">
                        Open to all students • No technical prerequisites • Express yourself freely
                      </p>
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

export default Impulse;
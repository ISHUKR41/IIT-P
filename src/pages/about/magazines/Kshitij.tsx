import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, Rocket, Beaker, Users, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Kshitij Magazine page - Technical and innovation-focused publication
 * Features technical articles, research insights, and innovation stories
 */
const Kshitij: React.FC = () => {
  // Sample technical articles
  const technicalArticles = [
    {
      id: 1,
      title: 'Artificial Intelligence in Healthcare',
      authors: ['Dr. Rajesh Kumar', 'Ms. Priya Sharma'],
      department: 'Computer Science & Engineering',
      issue: 'Vol. 8, Issue 2',
      date: 'November 2023',
      category: 'AI & ML',
      abstract: 'Exploring the revolutionary applications of AI in medical diagnosis and treatment...',
      tags: ['AI', 'Healthcare', 'Machine Learning', 'Medical Technology']
    },
    {
      id: 2,
      title: 'Sustainable Energy Solutions',
      authors: ['Prof. Amit Verma', 'Mr. Suresh Patel'],
      department: 'Electrical Engineering',
      issue: 'Vol. 8, Issue 2',
      date: 'November 2023',
      category: 'Energy',
      abstract: 'Innovative approaches to renewable energy generation and storage systems...',
      tags: ['Renewable Energy', 'Sustainability', 'Solar Power', 'Energy Storage']
    },
    {
      id: 3,
      title: 'Quantum Computing Fundamentals',
      authors: ['Dr. Neha Singh', 'Mr. Rahul Gupta'],
      department: 'Physics',
      issue: 'Vol. 8, Issue 1',
      date: 'May 2023',
      category: 'Quantum Computing',
      abstract: 'Understanding the principles and potential of quantum computing technology...',
      tags: ['Quantum Physics', 'Computing', 'Quantum Algorithms', 'Future Technology']
    }
  ];

  const features = [
    {
      icon: Beaker,
      title: 'Research Papers',
      description: 'Peer-reviewed technical papers from faculty and research scholars'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Stories',
      description: 'Breakthrough innovations and their real-world applications'
    },
    {
      icon: Rocket,
      title: 'Emerging Technologies',
      description: 'Insights into cutting-edge technologies shaping the future'
    },
    {
      icon: Users,
      title: 'Collaborative Research',
      description: 'Inter-disciplinary research projects and industry partnerships'
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Kshitij Magazine - IIT Patna | Technical Research & Innovation Publication</title>
        <meta 
          name="description" 
          content="Kshitij is IIT Patna's technical magazine featuring research papers, innovation stories, and emerging technology insights from our faculty and students."
        />
        <meta 
          name="keywords" 
          content="Kshitij magazine, IIT Patna research, technical publication, innovation, engineering research, scientific papers, technology magazine"
        />
        <link rel="canonical" href="https://www.iitp.ac.in/about/magazines/kshitij" />
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
                  Kshitij
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
                  IIT Patna's premier technical magazine - exploring the horizons of 
                  research, innovation, and emerging technologies
                </p>
                <div className="mt-8">
                  <span className="inline-block bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Sanskrit: क्षितिज (Horizon) - Expanding Boundaries of Knowledge
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
                  Technical Excellence
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Kshitij showcases the best of technical research and innovation from our academic community
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
                          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mb-4">
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

          {/* Recent Articles */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Featured Articles
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Latest technical papers and research insights from our faculty and scholars
                </p>
              </motion.div>

              <div className="space-y-8">
                {technicalArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.5 + (index * 0.1) 
                    }}
                  >
                    <Card className="card-modern">
                      <CardContent className="p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                          
                          {/* Article Content */}
                          <div className="lg:col-span-3">
                            <div className="flex items-center justify-between mb-4">
                              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                {article.category}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                {article.issue} • {article.date}
                              </span>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-foreground mb-3 leading-tight">
                              {article.title}
                            </h3>
                            
                            <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
                              <span className="text-muted-foreground">By:</span>
                              {article.authors.map((author, idx) => (
                                <span key={idx} className="text-primary font-medium">
                                  {author}{idx < article.authors.length - 1 ? ',' : ''}
                                </span>
                              ))}
                              <span className="text-muted-foreground">•</span>
                              <span className="text-muted-foreground">{article.department}</span>
                            </div>
                            
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                              {article.abstract}
                            </p>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                              {article.tags.map((tag, idx) => (
                                <span 
                                  key={idx}
                                  className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="lg:col-span-1">
                            <div className="flex lg:flex-col gap-3">
                              <Button className="btn-outline flex-1 lg:flex-none">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Read Full Paper
                              </Button>
                              <Button variant="outline" className="flex-1 lg:flex-none">
                                <Download className="h-4 w-4 mr-2" />
                                Download PDF
                              </Button>
                            </div>
                            
                            {/* Stats */}
                            <div className="mt-6 pt-6 border-t border-border lg:block hidden">
                              <div className="space-y-3 text-center">
                                <div>
                                  <div className="text-2xl font-bold text-primary">1.2k</div>
                                  <div className="text-xs text-muted-foreground">Views</div>
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-primary">45</div>
                                  <div className="text-xs text-muted-foreground">Citations</div>
                                </div>
                              </div>
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

          {/* Submission Guidelines */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Card className="card-modern">
                  <CardContent className="p-12">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Submit Your Research
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Kshitij welcomes high-quality technical papers, research articles, 
                        and innovation stories from faculty, students, and researchers.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Submission Categories</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Research Papers (5000-8000 words)</li>
                          <li>• Technical Reviews (3000-5000 words)</li>
                          <li>• Innovation Stories (2000-3000 words)</li>
                          <li>• Case Studies (3000-4000 words)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Review Process</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Double-blind peer review</li>
                          <li>• Editorial board evaluation</li>
                          <li>• 4-6 weeks review timeline</li>
                          <li>• Publication in next issue</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Button className="btn-hero mr-4">
                        Submit Article
                      </Button>
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Guidelines PDF
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

export default Kshitij;
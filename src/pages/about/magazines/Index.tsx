import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * IIT Patna Magazines Index Page
 * Features all institutional magazines and publications
 * Animations: Staggered card animations, hover effects
 */

const magazines = [
  {
    title: 'Insight',
    description: 'The official institutional magazine featuring research insights, achievements, and academic excellence.',
    path: '/about/magazines/insight',
    color: 'from-blue-500 to-blue-600',
    delay: 0.1
  },
  {
    title: 'Campus Diary',
    description: 'Student life, campus events, cultural activities, and memorable moments at IIT Patna.',
    path: '/about/magazines/campus-diary',
    color: 'from-green-500 to-green-600',
    delay: 0.2
  },
  {
    title: 'Kshitij',
    description: 'Technical magazine showcasing innovation, research projects, and technological advancement.',
    path: '/about/magazines/kshitij',
    color: 'from-purple-500 to-purple-600',
    delay: 0.3
  },
  {
    title: 'Impulse',
    description: 'Creative expressions, literary works, arts, and cultural contributions by the IIT Patna community.',
    path: '/about/magazines/impulse',
    color: 'from-orange-500 to-orange-600',
    delay: 0.4
  }
];

const MagazinesIndex: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IIT Patna Magazines | Publications & Academic Journals</title>
        <meta 
          name="description" 
          content="Explore IIT Patna's institutional magazines including Insight, Campus Diary, Kshitij, and Impulse. Academic publications and student publications." 
        />
        <meta name="keywords" content="IIT Patna magazines, institutional publications, Insight, Campus Diary, Kshitij, Impulse" />
      </Helmet>

      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6">
                  IIT Patna Magazines
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Discover our institutional publications showcasing research excellence, student life, 
                  technological innovations, and creative expressions from the IIT Patna community.
                </p>
              </motion.div>

              {/* Magazines Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {magazines.map((magazine, index) => (
                  <motion.div
                    key={magazine.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: magazine.delay,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="group"
                  >
                    <Card className="h-full card-modern group-hover:shadow-glow transition-all duration-300">
                      <CardHeader className="pb-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${magazine.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <BookOpen className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                          {magazine.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {magazine.description}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Link to={magazine.path} className="flex-1">
                            <Button 
                              className={`w-full bg-gradient-to-r ${magazine.color} hover:scale-105 transition-all duration-300`}
                              size="lg"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View Magazine
                            </Button>
                          </Link>
                          <Button 
                            variant="outline" 
                            size="lg"
                            className="hover:bg-muted/50 transition-all duration-300"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Additional Information */}
              <motion.div 
                className="mt-16 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-8 max-w-4xl mx-auto">
                  <h2 className="text-2xl font-bold text-card-foreground mb-4">
                    About Our Publications
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    IIT Patna's magazines serve as platforms for sharing knowledge, celebrating achievements, 
                    and fostering creativity within our academic community. Each publication reflects our 
                    commitment to excellence in education, research, and holistic development.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                      Research Excellence
                    </div>
                    <div className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                      Student Creativity
                    </div>
                    <div className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                      Innovation Showcase
                    </div>
                    <div className="bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
                      Community Stories
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default MagazinesIndex;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Star } from 'lucide-react';

/**
 * Vision & Mission page component
 * Features:
 * - Institute vision and mission statements
 * - Core values and objectives
 * - Animated cards with icons
 * - SEO optimized content
 */
const VisionMission: React.FC = () => {
  const visionPoints = [
    {
      icon: Eye,
      title: "Global Excellence",
      description: "To be among the top technological institutions globally, recognized for academic excellence and innovation."
    },
    {
      icon: Target,
      title: "Research Leadership",
      description: "Leading cutting-edge research in engineering, science, and technology for societal benefit."
    },
    {
      icon: Heart,
      title: "Holistic Development",
      description: "Fostering holistic development of students through academic rigor and character building."
    }
  ];

  const missionPoints = [
    {
      icon: Star,
      title: "Quality Education",
      description: "Providing world-class education in engineering, science, and technology."
    },
    {
      icon: Target,
      title: "Innovation & Research",
      description: "Promoting innovation and research for technological advancement and societal development."
    },
    {
      icon: Heart,
      title: "Ethical Values",
      description: "Instilling ethical values and social responsibility in future leaders."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Vision & Mission - IIT Patna | Our Goals and Objectives</title>
        <meta 
          name="description" 
          content="Learn about IIT Patna's vision to be a globally recognized institution and our mission to provide world-class education in engineering and technology."
        />
        <meta 
          name="keywords" 
          content="IIT Patna vision, IIT Patna mission, goals, objectives, excellence, innovation, research"
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
                Vision & Mission
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our commitment to excellence in education, research, and innovation
              </p>
            </motion.div>

            {/* Vision Section */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-card/80 backdrop-blur-sm shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold text-primary mb-4">
                    Our Vision
                  </CardTitle>
                  <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                    "To be recognized globally as a premier institution of higher learning, 
                    excelling in generation and dissemination of knowledge in engineering, 
                    science and technology through high quality education and research."
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {visionPoints.map((point, index) => {
                      const IconComponent = point.icon;
                      return (
                        <motion.div
                          key={point.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        >
                          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-6 text-center">
                              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <IconComponent className="h-8 w-8 text-primary" />
                              </div>
                              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                              <p className="text-muted-foreground">{point.description}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Mission Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-card/80 backdrop-blur-sm shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold text-primary mb-4">
                    Our Mission
                  </CardTitle>
                  <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                    "To create an environment that shall foster the growth of intellectually 
                    capable, innovative and entrepreneurial human resource; to contribute to 
                    the generation of knowledge in science and technology through research; 
                    and to promote technology development and transfer."
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {missionPoints.map((point, index) => {
                      const IconComponent = point.icon;
                      return (
                        <motion.div
                          key={point.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        >
                          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-6 text-center">
                              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <IconComponent className="h-8 w-8 text-secondary" />
                              </div>
                              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                              <p className="text-muted-foreground">{point.description}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

          </div>
        </div>
      </Layout>
    </>
  );
};

export default VisionMission;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Microscope, 
  BookOpen, 
  Users, 
  TrendingUp, 
  Award, 
  Building2,
  Target,
  Lightbulb,
  FileText,
  ExternalLink
} from 'lucide-react';

/**
 * Research & Development Home page component
 * Features:
 * - Research overview and statistics
 * - Key research areas
 * - Ongoing projects
 * - Publications and achievements
 * - Research facilities
 * - SEO optimized content
 */
const RDHome: React.FC = () => {
  const researchStats = [
    {
      number: "50+",
      title: "Active Projects",
      description: "Ongoing research initiatives"
    },
    {
      number: "₹25Cr+", 
      title: "Research Funding",
      description: "Total funding received"
    },
    {
      number: "200+",
      title: "Publications",
      description: "Peer-reviewed publications"
    },
    {
      number: "15+",
      title: "Patents",
      description: "Filed and granted patents"
    }
  ];

  const researchAreas = [
    {
      icon: Microscope,
      title: "Nanotechnology & Materials Science",
      description: "Advanced materials research for next-generation applications",
      projects: ["Graphene Applications", "Smart Materials", "Nanocomposites"]
    },
    {
      icon: Lightbulb,
      title: "Artificial Intelligence & Machine Learning",
      description: "Cutting-edge AI research for real-world problem solving",
      projects: ["Deep Learning", "Computer Vision", "Natural Language Processing"]
    },
    {
      icon: Building2,
      title: "Sustainable Engineering",
      description: "Green technologies and sustainable development solutions",
      projects: ["Renewable Energy", "Water Treatment", "Green Buildings"]
    },
    {
      icon: Target,
      title: "Biomedical Engineering",
      description: "Healthcare technology and medical device development",
      projects: ["Medical Imaging", "Biomaterials", "Drug Delivery Systems"]
    }
  ];

  const facilities = [
    {
      name: "Central Research Facility",
      description: "State-of-the-art equipment for advanced research",
      equipment: ["SEM", "XRD", "FTIR", "UV-Vis Spectroscopy"]
    },
    {
      name: "High Performance Computing Center",
      description: "Computational resources for complex simulations",
      equipment: ["GPU Clusters", "Parallel Computing", "Cloud Infrastructure"]
    },
    {
      name: "Innovation Lab",
      description: "Prototyping and product development facility",
      equipment: ["3D Printing", "PCB Fabrication", "Testing Equipment"]
    }
  ];

  const recentPublications = [
    {
      title: "Advanced Machine Learning Techniques for Smart Cities",
      authors: "Dr. A. Kumar, Dr. B. Singh",
      journal: "IEEE Transactions on Smart Cities",
      year: "2024"
    },
    {
      title: "Sustainable Materials for Green Construction",
      authors: "Dr. C. Sharma, Dr. D. Patel",
      journal: "Journal of Sustainable Materials",
      year: "2024"
    },
    {
      title: "Nanotechnology Applications in Healthcare",
      authors: "Dr. E. Gupta, Dr. F. Mishra",
      journal: "Nature Nanotechnology",
      year: "2023"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Research & Development - IIT Patna | Innovation and Excellence</title>
        <meta 
          name="description" 
          content="Explore cutting-edge research at IIT Patna. Discover our research areas, projects, publications, facilities, and innovation initiatives."
        />
        <meta 
          name="keywords" 
          content="IIT Patna research, R&D, innovation, projects, publications, patents, research facilities, technology transfer"
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
                Research & Development
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advancing knowledge through innovative research and cutting-edge technology development
              </p>
            </motion.div>

            {/* Research Statistics */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {researchStats.map((stat, index) => (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                          {stat.number}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
                        <p className="text-sm text-muted-foreground">{stat.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Key Research Areas */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Key Research Areas</h2>
                <p className="text-lg text-muted-foreground">
                  Our focus areas driving innovation and technological advancement
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {researchAreas.map((area, index) => {
                  const IconComponent = area.icon;
                  return (
                    <motion.div
                      key={area.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <IconComponent className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-xl mb-2">{area.title}</CardTitle>
                              <p className="text-muted-foreground text-sm">{area.description}</p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-sm">Current Projects:</h4>
                            <div className="flex flex-wrap gap-2">
                              {area.projects.map((project) => (
                                <Badge key={project} variant="secondary" className="text-xs">
                                  {project}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* Research Facilities */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Research Facilities</h2>
                <p className="text-lg text-muted-foreground">
                  State-of-the-art infrastructure supporting world-class research
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {facilities.map((facility, index) => (
                  <motion.div
                    key={facility.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg">{facility.name}</CardTitle>
                        <p className="text-muted-foreground text-sm">{facility.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Available Equipment:</h4>
                          <ul className="space-y-1">
                            {facility.equipment.map((item) => (
                              <li key={item} className="text-sm text-muted-foreground flex items-center">
                                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Recent Publications */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Recent Publications</h2>
                <p className="text-lg text-muted-foreground">
                  Latest research contributions to scientific community
                </p>
              </div>

              <div className="space-y-6 max-w-4xl mx-auto">
                {recentPublications.map((publication, index) => (
                  <motion.div
                    key={publication.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              {publication.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-2">
                              <strong>Authors:</strong> {publication.authors}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              <strong>Published in:</strong> {publication.journal} ({publication.year})
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-center mt-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Collaborate with Us</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Interested in research collaboration or want to know more about our facilities? 
                    Get in touch with our research team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">
                      <Users className="h-5 w-5 mr-2" />
                      Research Collaboration
                    </Button>
                    <Button variant="outline" size="lg">
                      <FileText className="h-5 w-5 mr-2" />
                      View All Publications
                    </Button>
                  </div>
                </div>
              </div>
            </motion.section>

          </div>
        </div>
      </Layout>
    </>
  );
};

export default RDHome;
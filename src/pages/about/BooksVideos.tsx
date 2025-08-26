import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Play, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Books & Videos page for IIT Patna
 * Features:
 * - Display of institutional publications
 * - Video resources and lectures
 * - Digital library access
 * - Research publications
 */
const BooksVideos: React.FC = () => {
  // Sample data for books and videos
  const books = [
    {
      title: "IIT Patna: A Journey of Excellence",
      author: "Dr. Timothy A. Gonsalves",
      description: "A comprehensive overview of IIT Patna's growth and achievements",
      year: "2023",
      pages: 250
    },
    {
      title: "Research Compendium 2023",
      author: "Various Faculty",
      description: "Collection of research papers and findings from IIT Patna",
      year: "2023",
      pages: 400
    },
    {
      title: "Innovation at IIT Patna",
      author: "Faculty Publications",
      description: "Stories of innovation and technological advancement",
      year: "2022",
      pages: 180
    }
  ];

  const videos = [
    {
      title: "Institute Overview",
      duration: "15:30",
      description: "Complete introduction to IIT Patna campus and facilities",
      category: "Institutional"
    },
    {
      title: "Research Excellence",
      duration: "22:45",
      description: "Showcase of cutting-edge research projects",
      category: "Research"
    },
    {
      title: "Student Life at IIT Patna",
      duration: "18:20",
      description: "Day in the life of IIT Patna students",
      category: "Campus Life"
    },
    {
      title: "Alumni Success Stories",
      duration: "25:10",
      description: "Inspiring journeys of IIT Patna graduates",
      category: "Alumni"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Books & Videos - IIT Patna | Digital Resources</title>
        <meta 
          name="description" 
          content="Access IIT Patna's digital library, institutional publications, video resources, and educational content. Explore books, research papers, and multimedia resources."
        />
        <meta 
          name="keywords" 
          content="IIT Patna books, educational videos, digital library, publications, research papers, institutional resources"
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
                Books & Videos
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our comprehensive digital library, institutional publications, 
                and multimedia resources that showcase IIT Patna's academic excellence.
              </p>
            </motion.div>

            {/* Books Section */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center mb-8">
                <BookOpen className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-foreground">Publications & Books</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {books.map((book, index) => (
                  <motion.div
                    key={book.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card className="card-feature h-full">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <BookOpen className="h-12 w-12 text-primary" />
                          <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                            {book.year}
                          </span>
                        </div>
                        <CardTitle className="text-xl mb-2">{book.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">by {book.author}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80 mb-4">{book.description}</p>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-sm text-muted-foreground">
                            {book.pages} pages
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" className="btn-outline flex-1">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Videos Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center mb-8">
                <Play className="h-8 w-8 text-secondary mr-3" />
                <h2 className="text-3xl font-bold text-foreground">Video Resources</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videos.map((video, index) => (
                  <motion.div
                    key={video.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card className="card-modern overflow-hidden">
                      <div className="relative bg-gradient-primary h-48 flex items-center justify-center">
                        <Play className="h-16 w-16 text-primary-foreground opacity-80" />
                        <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                          {video.duration}
                        </div>
                        <div className="absolute bottom-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm">
                          {video.category}
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">{video.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{video.description}</p>
                        <Button className="btn-secondary w-full">
                          <Play className="h-4 w-4 mr-2" />
                          Watch Video
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Digital Library Access */}
            <motion.section 
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="card-feature bg-gradient-primary text-primary-foreground">
                <CardContent className="text-center py-12">
                  <BookOpen className="h-16 w-16 mx-auto mb-6 opacity-90" />
                  <h3 className="text-2xl font-bold mb-4">Digital Library Access</h3>
                  <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                    Access our comprehensive digital library with thousands of books, 
                    journals, and research papers available online.
                  </p>
                  <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Access Digital Library
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

export default BooksVideos;
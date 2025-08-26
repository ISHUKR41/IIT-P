import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar, Search, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Press Release Page - IIT Patna
 * Features:
 * - Latest press releases and news announcements
 * - Search and filter functionality
 * - Downloadable press materials
 * - Media contact information
 */

interface PressRelease {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  downloadUrl?: string;
  featured: boolean;
}

const PressReleasePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const pressReleases: PressRelease[] = [
    {
      id: '1',
      title: 'IIT Patna Achieves Milestone in Research Excellence',
      date: '2024-08-15',
      category: 'Research',
      summary: 'IIT Patna researchers make breakthrough in sustainable energy technology, contributing to national green energy goals.',
      content: 'Detailed announcement about recent research achievements and their impact on sustainable development.',
      downloadUrl: '/downloads/press-release-research-2024.pdf',
      featured: true
    },
    {
      id: '2',
      title: 'New Academic Programs Launched for 2024-25',
      date: '2024-07-20',
      category: 'Academics',
      summary: 'IIT Patna introduces innovative undergraduate and postgraduate programs aligned with industry needs.',
      content: 'Information about new academic offerings and their significance in modern education.',
      featured: true
    },
    {
      id: '3',
      title: 'Industry Collaboration Strengthens Innovation Ecosystem',
      date: '2024-06-30',
      category: 'Collaboration',
      summary: 'Strategic partnerships with leading industries enhance research capabilities and student opportunities.',
      content: 'Details about recent industry collaborations and their benefits for the academic community.',
      featured: false
    },
    {
      id: '4',
      title: 'International Conference on Technology Innovation',
      date: '2024-06-15',
      category: 'Events',
      summary: 'IIT Patna hosts prestigious international conference bringing together global technology leaders.',
      content: 'Coverage of the international conference and its outcomes for technological advancement.',
      featured: false
    }
  ];

  const categories = ['all', 'Research', 'Academics', 'Collaboration', 'Events', 'Awards'];

  const filteredReleases = pressReleases.filter(release => {
    const matchesSearch = release.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         release.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || release.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredReleases = pressReleases.filter(release => release.featured);

  return (
    <>
      <Helmet>
        <title>Press Releases - IIT Patna | Latest News & Announcements</title>
        <meta 
          name="description" 
          content="Stay updated with latest press releases, news, and official announcements from IIT Patna. Download media materials and access institutional updates."
        />
        <meta name="keywords" content="IIT Patna press release, news, announcements, media, updates, research news" />
        <link rel="canonical" href="https://iitp.ac.in/about/press-release" />
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
                  Press Releases
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto">
                  Latest news, announcements, and updates from IIT Patna
                </p>
              </motion.div>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="py-12 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-4 items-center justify-between"
              >
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search press releases..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="capitalize"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Featured Press Releases */}
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
                  Featured News
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Highlighting our most significant announcements and achievements
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {featuredReleases.map((release, index) => (
                  <motion.div
                    key={release.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="card-feature h-full">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-4">
                          <Badge variant="default" className="bg-secondary">
                            Featured
                          </Badge>
                          <Badge variant="outline">
                            {release.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl text-primary mb-2">
                          {release.title}
                        </CardTitle>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(release.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                          {release.summary}
                        </p>
                        <div className="flex gap-3 pt-4">
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Read More
                          </Button>
                          {release.downloadUrl && (
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* All Press Releases */}
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
                  All Press Releases
                </h2>
                <p className="text-lg text-muted-foreground">
                  {filteredReleases.length} releases found
                </p>
              </motion.div>

              <div className="space-y-6">
                {filteredReleases.map((release, index) => (
                  <motion.div
                    key={release.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="card-modern">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge variant="outline" className="bg-primary/10">
                                {release.category}
                              </Badge>
                              {release.featured && (
                                <Badge variant="default" className="bg-secondary">
                                  Featured
                                </Badge>
                              )}
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-2">
                              {release.title}
                            </h3>
                            <p className="text-muted-foreground mb-3">
                              {release.summary}
                            </p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-2" />
                              {new Date(release.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 min-w-fit">
                            <Button variant="outline" size="sm">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Read More
                            </Button>
                            {release.downloadUrl && (
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {filteredReleases.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p className="text-lg text-muted-foreground">
                    No press releases found matching your criteria.
                  </p>
                </motion.div>
              )}
            </div>
          </section>

          {/* Media Contact Section */}
          <section className="py-16 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  Media Contact
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                  For media inquiries, press materials, or interview requests
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <h3 className="font-semibold text-primary-foreground mb-2">
                      Public Relations Office
                    </h3>
                    <p className="text-primary-foreground/80">
                      pr@iitp.ac.in<br />
                      +91-612-302-8000
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-primary-foreground mb-2">
                      Media Relations
                    </h3>
                    <p className="text-primary-foreground/80">
                      media@iitp.ac.in<br />
                      +91-612-302-8001
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-primary-foreground mb-2">
                      Press Materials
                    </h3>
                    <p className="text-primary-foreground/80">
                      Download logos, photos,<br />
                      and institutional materials
                    </p>
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

export default PressReleasePage;
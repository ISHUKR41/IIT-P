import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Calendar, Users, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Academic Rule Books page - Comprehensive academic regulations and guidelines
 * Features:
 * - Complete list of academic rule books for all programs
 * - Download links and version information
 * - Program-wise categorization
 * - Regular updates and amendments tracking
 */
const RuleBooks: React.FC = () => {
  const ruleBooks = [
    {
      title: "Undergraduate (B.Tech.) Rules & Regulations",
      description: "Comprehensive guidelines for B.Tech programs including admission, curriculum, examination, and graduation requirements.",
      version: "2024-25",
      lastUpdated: "August 2024",
      category: "Undergraduate",
      pages: 45,
      icon: GraduationCap,
      color: "text-blue-600"
    },
    {
      title: "Dual Degree Program Handbook",
      description: "Special regulations for integrated B.Tech + M.Tech programs with detailed academic pathways and requirements.",
      version: "2024-25",
      lastUpdated: "July 2024",
      category: "Dual Degree",
      pages: 38,
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Master's Programs (M.Tech/M.Sc.) Rules",
      description: "Academic regulations for postgraduate programs including course requirements, research guidelines, and thesis submission.",
      version: "2024-25",
      lastUpdated: "August 2024",
      category: "Masters",
      pages: 52,
      icon: FileText,
      color: "text-purple-600"
    },
    {
      title: "Ph.D. Program Guidelines",
      description: "Comprehensive doctorate program regulations covering admission, coursework, comprehensive exam, and thesis requirements.",
      version: "2024-25",
      lastUpdated: "June 2024",
      category: "Doctorate",
      pages: 67,
      icon: Calendar,
      color: "text-orange-600"
    },
    {
      title: "Executive Programs Handbook",
      description: "Guidelines for executive education programs, weekend courses, and professional development certifications.",
      version: "2024-25",
      lastUpdated: "September 2024",
      category: "Executive",
      pages: 28,
      icon: Users,
      color: "text-red-600"
    },
    {
      title: "International Exchange Program Rules",
      description: "Regulations for student exchange programs, credit transfer, and international collaboration guidelines.",
      version: "2024-25",
      lastUpdated: "July 2024",
      category: "International",
      pages: 35,
      icon: GraduationCap,
      color: "text-teal-600"
    }
  ];

  const categories = [
    { name: "Undergraduate", count: 1, color: "bg-blue-100 text-blue-800" },
    { name: "Masters", count: 1, color: "bg-purple-100 text-purple-800" },
    { name: "Doctorate", count: 1, color: "bg-orange-100 text-orange-800" },
    { name: "Dual Degree", count: 1, color: "bg-green-100 text-green-800" },
    { name: "Executive", count: 1, color: "bg-red-100 text-red-800" },
    { name: "International", count: 1, color: "bg-teal-100 text-teal-800" }
  ];

  const importantNotes = [
    {
      title: "Regular Updates",
      description: "Rule books are updated annually to reflect policy changes and academic improvements.",
      icon: "📅"
    },
    {
      title: "Compliance Required",
      description: "All students and faculty must familiarize themselves with relevant academic regulations.",
      icon: "⚖️"
    },
    {
      title: "Version Control",
      description: "Always refer to the latest version available on the official website for current regulations.",
      icon: "🔄"
    },
    {
      title: "Clarifications",
      description: "For any queries regarding academic rules, contact the Academic Section office.",
      icon: "❓"
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Academic Rule Books - IIT Patna | Official Regulations & Guidelines</title>
        <meta 
          name="description" 
          content="Access official academic rule books and regulations for all programs at IIT Patna. Download comprehensive guidelines for undergraduate, postgraduate, and doctoral studies."
        />
        <meta name="keywords" content="IIT Patna academic rules, regulations, handbook, B.Tech, M.Tech, PhD, guidelines" />
      </Helmet>

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="relative bg-gradient-primary text-primary-foreground py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Academic Rule Books
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
                Official regulations and guidelines for all academic programs
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Program Categories
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Find the rule book specific to your academic program
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="card-modern text-center hover:scale-105 transition-transform duration-300">
                    <CardContent className="pt-4">
                      <Badge className={`${category.color} mb-2`}>
                        {category.count} {category.count === 1 ? 'Book' : 'Books'}
                      </Badge>
                      <h3 className="text-sm font-medium text-primary">
                        {category.name}
                      </h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Rule Books Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Available Rule Books
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Download the latest versions of academic regulations and guidelines
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {ruleBooks.map((book, index) => {
                const IconComponent = book.icon;
                return (
                  <motion.div
                    key={book.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="card-modern h-full">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`p-3 rounded-lg bg-primary/10`}>
                              <IconComponent className={`h-6 w-6 ${book.color}`} />
                            </div>
                            <div>
                              <Badge variant="secondary" className="mb-2">
                                {book.category}
                              </Badge>
                              <CardTitle className="text-lg text-primary leading-tight">
                                {book.title}
                              </CardTitle>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {book.description}
                        </p>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Version:</span>
                            <span className="font-medium text-primary">{book.version}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Last Updated:</span>
                            <span className="font-medium">{book.lastUpdated}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Pages:</span>
                            <span className="font-medium">{book.pages}</span>
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <Button className="flex-1 bg-primary hover:bg-primary/90">
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </Button>
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Important Notes Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Important Notes
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Please read these important guidelines before using the rule books
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {importantNotes.map((note, index) => (
                <motion.div
                  key={note.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="card-modern h-full text-center">
                    <CardContent className="pt-6">
                      <div className="text-4xl mb-4">{note.icon}</div>
                      <h3 className="text-lg font-semibold text-primary mb-3">
                        {note.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {note.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="card-feature max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Need Help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    For clarifications regarding academic rules and regulations, 
                    please contact the Academic Section office.
                  </p>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <strong>Phone:</strong> +91-612-302-8001
                    </div>
                    <div className="text-sm">
                      <strong>Email:</strong> academic@iitp.ac.in
                    </div>
                    <div className="text-sm">
                      <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default RuleBooks;
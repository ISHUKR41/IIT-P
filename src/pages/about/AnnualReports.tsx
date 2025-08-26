import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Calendar, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Annual Reports page component
 * Displays institutional annual reports with download functionality
 * Features: Responsive design, animations, document preview
 */
const AnnualReports: React.FC = () => {
  // Sample annual reports data - replace with actual data
  const reports = [
    {
      id: 1,
      year: '2023-24',
      title: 'Annual Report 2023-24',
      description: 'Comprehensive report covering academic and administrative activities',
      fileSize: '15.2 MB',
      downloadUrl: '#',
      previewUrl: '#'
    },
    {
      id: 2,
      year: '2022-23',
      title: 'Annual Report 2022-23',
      description: 'Detailed overview of institutional achievements and progress',
      fileSize: '12.8 MB',
      downloadUrl: '#',
      previewUrl: '#'
    },
    {
      id: 3,
      year: '2021-22',
      title: 'Annual Report 2021-22',
      description: 'Report highlighting research achievements and academic excellence',
      fileSize: '14.5 MB',
      downloadUrl: '#',
      previewUrl: '#'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Annual Reports - IIT Patna | Institutional Performance Reports</title>
        <meta 
          name="description" 
          content="Access IIT Patna annual reports showcasing academic achievements, research progress, and institutional development over the years."
        />
        <meta name="keywords" content="IIT Patna, annual reports, academic progress, research achievements, institutional development" />
      </Helmet>

      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-16 lg:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Annual Reports
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
                  Comprehensive reports showcasing our institutional achievements, academic progress, and future vision
                </p>
              </motion.div>
            </div>
          </section>

          {/* Reports Grid Section */}
          <section className="py-16 lg:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Section Header */}
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Available Reports
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Download and explore our annual reports to understand our journey, achievements, and commitment to excellence
                </p>
              </motion.div>

              {/* Reports Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reports.map((report, index) => (
                  <motion.div
                    key={report.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.3 + (index * 0.1),
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="group"
                  >
                    <Card className="h-full bg-card/95 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardHeader className="text-center pb-4">
                        <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <FileText className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                          {report.title}
                        </CardTitle>
                        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{report.year}</span>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-muted-foreground mb-4 text-center leading-relaxed">
                          {report.description}
                        </p>
                        
                        <div className="text-center text-sm text-muted-foreground mb-6">
                          File Size: {report.fileSize}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button 
                            className="flex-1 bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all duration-300 shadow-md"
                            size="sm"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                          <Button 
                            variant="outline"
                            className="flex-1 hover:scale-105 transition-all duration-300"
                            size="sm"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 max-w-4xl mx-auto">
                  <CardContent className="py-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Looking for Older Reports?
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      For annual reports from previous years or specific departmental reports, 
                      please contact our administrative office or visit the central library.
                    </p>
                    <Button 
                      variant="outline" 
                      className="hover:scale-105 transition-all duration-300"
                    >
                      Contact Administration
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default AnnualReports;
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Download, Calendar, Book, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Acts and Statutes page component
 * Displays institutional acts, statutes, rules, and regulations
 * Features organized tabbed layout with downloadable documents
 */

// Acts and Statutes data structure
const institutionalDocuments = {
  acts: [
    {
      id: 1,
      title: 'IIT Act 1961',
      description: 'The foundational act establishing Indian Institutes of Technology',
      category: 'Founding Act',
      dateEffective: '1961-09-01',
      lastAmended: '2021-03-15',
      downloadLink: '#',
      sections: ['Establishment', 'Objects and Powers', 'Board of Governors', 'Senate', 'Finance']
    },
    {
      id: 2,
      title: 'IIT (Amendment) Act 2011',
      description: 'Amendment act for establishment of new IITs including IIT Patna',
      category: 'Amendment Act',
      dateEffective: '2011-07-01',
      lastAmended: '2011-07-01',
      downloadLink: '#',
      sections: ['New IIT Establishment', 'Administrative Structure', 'Academic Framework']
    },
    {
      id: 3,
      title: 'Right to Information Act 2005',
      description: 'Transparency and accountability framework applicable to IIT Patna',
      category: 'Transparency Act',
      dateEffective: '2005-10-12',
      lastAmended: '2019-07-19',
      downloadLink: '#',
      sections: ['Information Disclosure', 'Public Information Officer', 'Appeal Process']
    }
  ],
  statutes: [
    {
      id: 1,
      title: 'IIT Patna Statutes',
      description: 'Comprehensive statutes governing the institute operations',
      category: 'Institute Statutes',
      dateEffective: '2012-08-15',
      lastAmended: '2023-01-20',
      downloadLink: '#',
      sections: ['Academic Regulations', 'Administrative Structure', 'Financial Procedures', 'Personnel Policies']
    },
    {
      id: 2,
      title: 'Academic Statutes',
      description: 'Statutes specifically related to academic programs and examinations',
      category: 'Academic',
      dateEffective: '2013-06-01',
      lastAmended: '2022-12-15',
      downloadLink: '#',
      sections: ['Degree Requirements', 'Examination Rules', 'Academic Calendar', 'Grading System']
    },
    {
      id: 3,
      title: 'Research Statutes',
      description: 'Guidelines and regulations for research activities and doctoral programs',
      category: 'Research',
      dateEffective: '2014-01-01',
      lastAmended: '2023-03-10',
      downloadLink: '#',
      sections: ['PhD Regulations', 'Research Ethics', 'Publication Guidelines', 'Industry Collaboration']
    },
    {
      id: 4,
      title: 'Service Statutes',
      description: 'Rules governing faculty and staff service conditions',
      category: 'Personnel',
      dateEffective: '2012-08-15',
      lastAmended: '2022-11-30',
      downloadLink: '#',
      sections: ['Recruitment Rules', 'Promotion Criteria', 'Leave Policies', 'Disciplinary Procedures']
    }
  ],
  rules: [
    {
      id: 1,
      title: 'Admission Rules',
      description: 'Detailed rules for various admission processes',
      category: 'Admissions',
      dateEffective: '2013-03-01',
      lastAmended: '2023-04-15',
      downloadLink: '#',
      sections: ['JEE Advanced Rules', 'GATE Admission', 'International Students', 'Reservation Policy']
    },
    {
      id: 2,
      title: 'Examination Rules',
      description: 'Comprehensive examination and evaluation guidelines',
      category: 'Academic',
      dateEffective: '2013-06-01',
      lastAmended: '2022-08-20',
      downloadLink: '#',
      sections: ['Continuous Assessment', 'End-Semester Exams', 'Re-evaluation', 'Academic Misconduct']
    },
    {
      id: 3,
      title: 'Hostel Rules',
      description: 'Rules and regulations for student hostel accommodation',
      category: 'Student Affairs',
      dateEffective: '2013-07-01',
      lastAmended: '2023-01-10',
      downloadLink: '#',
      sections: ['Accommodation Policy', 'Disciplinary Rules', 'Mess Regulations', 'Visitor Guidelines']
    },
    {
      id: 4,
      title: 'Financial Rules',
      description: 'Financial procedures and procurement guidelines',
      category: 'Finance',
      dateEffective: '2012-08-15',
      lastAmended: '2022-10-05',
      downloadLink: '#',
      sections: ['Budget Procedures', 'Procurement Rules', 'Audit Guidelines', 'Fund Management']
    }
  ],
  regulations: [
    {
      id: 1,
      title: 'Academic Regulations (UG)',
      description: 'Detailed regulations for undergraduate programs',
      category: 'Undergraduate',
      dateEffective: '2013-08-01',
      lastAmended: '2023-02-28',
      downloadLink: '#',
      sections: ['Course Structure', 'Credit System', 'Grade Requirements', 'Degree Awards']
    },
    {
      id: 2,
      title: 'Academic Regulations (PG)',
      description: 'Comprehensive regulations for postgraduate programs',
      category: 'Postgraduate',
      dateEffective: '2013-08-01',
      lastAmended: '2023-02-28',
      downloadLink: '#',
      sections: ['Coursework Requirements', 'Research Component', 'Thesis Guidelines', 'Comprehensive Exam']
    },
    {
      id: 3,
      title: 'PhD Regulations',
      description: 'Specific regulations for doctoral degree programs',
      category: 'Doctoral',
      dateEffective: '2014-01-01',
      lastAmended: '2023-03-15',
      downloadLink: '#',
      sections: ['Admission Process', 'Coursework', 'Comprehensive Exam', 'Thesis Requirements', 'Defense Procedures']
    },
    {
      id: 4,
      title: 'Disciplinary Regulations',
      description: 'Student disciplinary procedures and guidelines',
      category: 'Discipline',
      dateEffective: '2013-07-01',
      lastAmended: '2022-09-10',
      downloadLink: '#',
      sections: ['Code of Conduct', 'Disciplinary Committee', 'Appeal Process', 'Penalties']
    }
  ]
};

// Category colors for badges
const categoryColors = {
  'Founding Act': 'bg-blue-500/10 text-blue-600',
  'Amendment Act': 'bg-green-500/10 text-green-600',
  'Transparency Act': 'bg-purple-500/10 text-purple-600',
  'Institute Statutes': 'bg-indigo-500/10 text-indigo-600',
  'Academic': 'bg-cyan-500/10 text-cyan-600',
  'Research': 'bg-teal-500/10 text-teal-600',
  'Personnel': 'bg-orange-500/10 text-orange-600',
  'Admissions': 'bg-pink-500/10 text-pink-600',
  'Student Affairs': 'bg-red-500/10 text-red-600',
  'Finance': 'bg-yellow-500/10 text-yellow-600',
  'Undergraduate': 'bg-violet-500/10 text-violet-600',
  'Postgraduate': 'bg-lime-500/10 text-lime-600',
  'Doctoral': 'bg-emerald-500/10 text-emerald-600',
  'Discipline': 'bg-rose-500/10 text-rose-600'
};

const ActsStatutes: React.FC = () => {
  const [activeTab, setActiveTab] = useState('acts');

  // Function to render document cards
  const renderDocumentCards = (documents: any[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {documents.map((doc, index) => (
        <motion.div
          key={doc.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <Card className="card-modern h-full hover:shadow-elegant transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {doc.title}
                    </CardTitle>
                    <Badge 
                      className={`text-xs mt-1 ${categoryColors[doc.category as keyof typeof categoryColors]}`}
                      variant="secondary"
                    >
                      {doc.category}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {doc.description}
              </p>
            </CardHeader>

            <CardContent className="space-y-4">
              
              {/* Document Information */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <div>
                    <span className="text-muted-foreground block">Effective Date</span>
                    <span className="text-foreground font-medium">
                      {new Date(doc.dateEffective).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  <div>
                    <span className="text-muted-foreground block">Last Amended</span>
                    <span className="text-foreground font-medium">
                      {new Date(doc.lastAmended).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Sections */}
              <div>
                <h4 className="font-medium text-foreground mb-2 flex items-center">
                  <Book className="h-4 w-4 mr-2 text-primary" />
                  Key Sections
                </h4>
                <div className="flex flex-wrap gap-1">
                  {doc.sections.map((section: string, idx: number) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="text-xs bg-background hover:bg-muted/50"
                    >
                      {section}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Download Button */}
              <div className="pt-2 border-t border-border">
                <Button 
                  className="w-full btn-outline" 
                  onClick={() => window.open(doc.downloadLink, '_blank')}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Document
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Acts & Statutes - IIT Patna | Legal Framework</title>
        <meta 
          name="description" 
          content="Comprehensive collection of acts, statutes, rules, and regulations governing IIT Patna operations, academics, and administration."
        />
        <meta name="keywords" content="IIT Patna, acts, statutes, rules, regulations, legal framework, governance" />
      </Helmet>

      <Layout>
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
          
          {/* Header Section */}
          <section className="pt-20 pb-12 bg-gradient-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center justify-center mb-6">
                  <Scale className="h-12 w-12 text-primary-foreground mr-4" />
                  <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                    Acts & Statutes
                  </h1>
                </div>
                <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                  Legal framework and institutional governance documents that guide the operations and administration of IIT Patna
                </p>
              </motion.div>
            </div>
          </section>

          {/* Documents Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Section Introduction */}
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Institutional Documentation
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Access comprehensive legal and regulatory documents that govern various aspects of institute operations
                </p>
              </motion.div>

              {/* Tabs for different document categories */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="acts" className="flex items-center space-x-2">
                    <Scale className="h-4 w-4" />
                    <span>Acts</span>
                  </TabsTrigger>
                  <TabsTrigger value="statutes" className="flex items-center space-x-2">
                    <FileText className="h-4 w-4" />
                    <span>Statutes</span>
                  </TabsTrigger>
                  <TabsTrigger value="rules" className="flex items-center space-x-2">
                    <Book className="h-4 w-4" />
                    <span>Rules</span>
                  </TabsTrigger>
                  <TabsTrigger value="regulations" className="flex items-center space-x-2">
                    <FileText className="h-4 w-4" />
                    <span>Regulations</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="acts" className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Institutional Acts
                    </h3>
                    <p className="text-muted-foreground">
                      Foundational legal acts establishing and governing the institute
                    </p>
                  </div>
                  {renderDocumentCards(institutionalDocuments.acts)}
                </TabsContent>

                <TabsContent value="statutes" className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Institute Statutes
                    </h3>
                    <p className="text-muted-foreground">
                      Comprehensive statutes governing academic and administrative operations
                    </p>
                  </div>
                  {renderDocumentCards(institutionalDocuments.statutes)}
                </TabsContent>

                <TabsContent value="rules" className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Institutional Rules
                    </h3>
                    <p className="text-muted-foreground">
                      Specific rules for various institute functions and services
                    </p>
                  </div>
                  {renderDocumentCards(institutionalDocuments.rules)}
                </TabsContent>

                <TabsContent value="regulations" className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Academic Regulations
                    </h3>
                    <p className="text-muted-foreground">
                      Detailed regulations for academic programs and student affairs
                    </p>
                  </div>
                  {renderDocumentCards(institutionalDocuments.regulations)}
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Legal Notice Section */}
          <section className="py-12 bg-muted/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Important Legal Notice
                </h2>
                <div className="bg-card p-6 rounded-xl shadow-card">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    All documents provided here are for informational purposes. For official and most current versions, 
                    please refer to the original gazette notifications and official publications. In case of any discrepancy, 
                    the official published version shall prevail.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                    <div>
                      <span className="font-medium text-foreground">Legal Queries:</span>
                      <span className="text-muted-foreground ml-2">legal@iitp.ac.in</span>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">RTI Officer:</span>
                      <span className="text-muted-foreground ml-2">rti@iitp.ac.in</span>
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

export default ActsStatutes;
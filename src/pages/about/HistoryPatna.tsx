import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Landmark, Crown, Star, Book } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * History of Patna page component
 * Comprehensive overview of Patna's rich historical heritage
 * Features timeline layout with major historical periods and events
 */

// Historical periods and events data
const historicalPeriods = [
  {
    id: 1,
    period: 'Ancient Period (600 BCE - 550 CE)',
    title: 'Pataliputra - Ancient Capital',
    icon: Crown,
    description: 'Patna, known as Pataliputra, was the capital of powerful ancient Indian empires including Maurya and Gupta dynasties.',
    keyEvents: [
      'Founded as Pataligrama by King Udayin in 490 BCE',
      'Capital of Mauryan Empire under Chandragupta Maurya (321-297 BCE)',
      'Flourished under Emperor Ashoka (268-232 BCE)',
      'Major center of learning and Buddhism',
      'Capital of Gupta Empire (320-550 CE)'
    ],
    significance: 'One of the oldest continuously inhabited cities in the world, serving as the political and cultural center of ancient India.',
    color: 'bg-amber-500/10 text-amber-600'
  },
  {
    id: 2,
    period: 'Medieval Period (1200-1757 CE)',
    title: 'Islamic Rule and Mughal Era',
    icon: Landmark,
    description: 'During the medieval period, Patna became an important administrative center under various Islamic dynasties and the Mughal Empire.',
    keyEvents: [
      'Conquered by Muhammad bin Bakhtiyar Khalji (1200 CE)',
      'Important administrative center under Delhi Sultanate',
      'Flourished under Mughal rule as Azimabad',
      'Major trading center for rice, saltpeter, and calico',
      'Administrative headquarters of Bengal Subah'
    ],
    significance: 'Strategic commercial and administrative importance, connecting eastern India with the rest of the subcontinent.',
    color: 'bg-green-500/10 text-green-600'
  },
  {
    id: 3,
    period: 'Colonial Period (1757-1947)',
    title: 'British Rule and Independence Movement',
    icon: Star,
    description: 'Under British rule, Patna became a major administrative center and played a crucial role in India\'s independence movement.',
    keyEvents: [
      'Came under British control after Battle of Buxar (1764)',
      'Important opium trading center',
      'Established as district headquarters (1875)',
      'Major center of independence movement',
      'Birthplace of several freedom fighters'
    ],
    significance: 'Administrative headquarters of Bihar and center of political awakening during the freedom struggle.',
    color: 'bg-blue-500/10 text-blue-600'
  },
  {
    id: 4,
    period: 'Modern Era (1947-Present)',
    title: 'Capital of Bihar State',
    icon: Book,
    description: 'Post-independence, Patna has evolved as the capital of Bihar state and an important educational and administrative center.',
    keyEvents: [
      'Became capital of Bihar state (1947)',
      'Establishment of Patna University (1917)',
      'Development as educational hub',
      'Industrial and infrastructural growth',
      'Establishment of IIT Patna (2008)'
    ],
    significance: 'Modern administrative capital with growing importance in education, technology, and governance.',
    color: 'bg-purple-500/10 text-purple-600'
  }
];

// Notable historical figures
const historicalFigures = [
  {
    name: 'Chandragupta Maurya',
    period: '340-297 BCE',
    significance: 'Founder of Mauryan Empire, made Pataliputra his capital',
    achievement: 'Established one of the largest empires in ancient Indian history'
  },
  {
    name: 'Emperor Ashoka',
    period: '304-232 BCE',
    significance: 'Greatest Mauryan emperor, ruled from Pataliputra',
    achievement: 'Spread Buddhism and established principles of dharma'
  },
  {
    name: 'Chandragupta II',
    period: '375-415 CE',
    significance: 'Gupta emperor who ruled from Pataliputra',
    achievement: 'Presided over the Golden Age of ancient India'
  },
  {
    name: 'Guru Gobind Singh',
    period: '1666-1708 CE',
    significance: 'Tenth Sikh Guru, born in Patna',
    achievement: 'Spiritual leader and founder of Khalsa'
  },
  {
    name: 'Dr. Rajendra Prasad',
    period: '1884-1963 CE',
    significance: 'First President of India, from Bihar',
    achievement: 'Key leader in independence movement and nation building'
  }
];

// Archaeological sites and monuments
const historicalSites = [
  {
    name: 'Agam Kuan',
    period: 'Mauryan Era',
    description: 'Ancient well believed to be from Ashoka\'s time, mentioned in historical texts',
    significance: 'Archaeological evidence of ancient Pataliputra'
  },
  {
    name: 'Kumhrar Excavation',
    period: 'Mauryan Era',
    description: 'Archaeological site revealing remains of ancient Pataliputra',
    significance: 'Pillared hall and other structures from Mauryan period'
  },
  {
    name: 'Patna Sahib Gurudwara',
    period: '17th Century',
    description: 'Sacred Sikh shrine marking birthplace of Guru Gobind Singh',
    significance: 'Important pilgrimage site for Sikh community'
  },
  {
    name: 'Golghar',
    period: 'British Era (1786)',
    description: 'Granary built by British for famine relief storage',
    significance: 'Architectural landmark of colonial period'
  },
  {
    name: 'Patna Museum',
    period: 'British Era (1917)',
    description: 'State museum housing ancient artifacts and sculptures',
    significance: 'Repository of Bihar\'s archaeological heritage'
  }
];

const HistoryPatna: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>History of Patna - IIT Patna | Ancient Capital to Modern City</title>
        <meta 
          name="description" 
          content="Explore the rich 2500-year history of Patna, from ancient Pataliputra capital of Mauryan Empire to modern educational hub with IIT Patna."
        />
        <meta name="keywords" content="Patna history, Pataliputra, Mauryan Empire, Ashoka, ancient India, Bihar history, IIT Patna location" />
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
                  <MapPin className="h-12 w-12 text-primary-foreground mr-4" />
                  <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                    History of Patna
                  </h1>
                </div>
                <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                  Discover the magnificent 2500-year journey of Patna, from the ancient capital of Pataliputra to the modern educational hub hosting IIT Patna
                </p>
              </motion.div>
            </div>
          </section>

          {/* Historical Timeline Section */}
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
                  Historical Timeline
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Journey through the major periods that shaped Patna's rich cultural and political heritage
                </p>
              </motion.div>

              {/* Timeline Cards */}
              <div className="space-y-8">
                {historicalPeriods.map((period, index) => {
                  const IconComponent = period.icon;
                  return (
                    <motion.div
                      key={period.id}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      className={`flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8 items-center`}
                    >
                      {/* Timeline Content */}
                      <div className="flex-1">
                        <Card className="card-modern hover:shadow-elegant transition-all duration-300">
                          <CardHeader>
                            <div className="flex items-center space-x-4 mb-4">
                              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                                <IconComponent className="h-8 w-8 text-primary-foreground" />
                              </div>
                              <div>
                                <Badge className={`${period.color} mb-2`} variant="secondary">
                                  {period.period}
                                </Badge>
                                <CardTitle className="text-2xl font-bold text-foreground">
                                  {period.title}
                                </CardTitle>
                              </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              {period.description}
                            </p>
                          </CardHeader>

                          <CardContent className="space-y-4">
                            {/* Key Events */}
                            <div>
                              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                                <Calendar className="h-4 w-4 mr-2 text-primary" />
                                Key Historical Events
                              </h4>
                              <ul className="space-y-2">
                                {period.keyEvents.map((event, idx) => (
                                  <li key={idx} className="flex items-start space-x-2 text-sm">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-muted-foreground">{event}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Historical Significance */}
                            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg">
                              <h4 className="font-semibold text-foreground mb-2">Historical Significance</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {period.significance}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Timeline Line */}
                      <div className="flex-shrink-0 flex lg:flex-col items-center">
                        <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                        {index < historicalPeriods.length - 1 && (
                          <div className="w-0.5 lg:h-24 h-0.5 lg:w-0.5 w-24 bg-primary/30" />
                        )}
                      </div>

                      {/* Spacer for alternating layout */}
                      <div className="flex-1 hidden lg:block" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Notable Historical Figures Section */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Notable Historical Figures
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Great personalities who shaped Patna's history and left lasting legacies
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {historicalFigures.map((figure, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <Card className="card-modern h-full hover:shadow-elegant transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg font-bold text-foreground">
                          {figure.name}
                        </CardTitle>
                        <Badge variant="outline" className="w-fit">
                          {figure.period}
                        </Badge>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Significance:</span> {figure.significance}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Achievement:</span> {figure.achievement}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Historical Sites Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Archaeological Sites & Monuments
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Explore the tangible heritage that preserves Patna's glorious past
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {historicalSites.map((site, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <Card className="card-modern h-full hover:shadow-elegant transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-2">
                          <Landmark className="h-6 w-6 text-primary" />
                          <CardTitle className="text-lg font-bold text-foreground">
                            {site.name}
                          </CardTitle>
                        </div>
                        <Badge variant="secondary" className="w-fit bg-secondary/10 text-secondary">
                          {site.period}
                        </Badge>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {site.description}
                        </p>
                        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-3 rounded-lg">
                          <p className="text-sm text-foreground font-medium">
                            {site.significance}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Modern Connection Section */}
          <section className="py-12 bg-gradient-secondary">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h2 className="text-2xl font-bold text-secondary-foreground mb-6">
                  Connecting Past with Future
                </h2>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <p className="text-secondary-foreground/90 leading-relaxed mb-4">
                    Today, as IIT Patna continues the city's legacy of learning and excellence, we honor the rich historical 
                    heritage of this ancient land. From the scholarly traditions of ancient Pataliputra to the modern 
                    technological education, Patna continues to be a beacon of knowledge and innovation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                    <div>
                      <span className="font-medium">Ancient Capital:</span>
                      <span className="ml-2">Pataliputra (6th century BCE)</span>
                    </div>
                    <div>
                      <span className="font-medium">Modern Institution:</span>
                      <span className="ml-2">IIT Patna (2008 CE)</span>
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

export default HistoryPatna;
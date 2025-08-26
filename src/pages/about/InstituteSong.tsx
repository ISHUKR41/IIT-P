import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, Play, Pause, Download, Volume2, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Institute Song page component
 * Features the official institute song with lyrics, audio player, and cultural significance
 * Features: Audio player, lyrics display, cultural context, modern design
 */
const InstituteSong: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLyrics, setShowLyrics] = useState(true);

  // Institute song details - replace with actual data
  const songDetails = {
    title: 'IIT Patna Anthem',
    composer: 'Dr. Musical Director',
    lyricist: 'Prof. Literary Head',
    yearComposed: '2010',
    duration: '3:45',
    language: 'Hindi & Sanskrit',
    audioUrl: '#' // Replace with actual audio file URL
  };

  // Song lyrics - replace with actual lyrics
  const lyrics = {
    hindi: [
      'ज्ञान की गंगा बहती यहाँ',
      'IIT पटना हमारा घर',
      'विज्ञान और तकनीक का केंद्र',
      'उत्कृष्टता हमारा मार्ग',
      '',
      'शिक्षा से जगमगाते हम',
      'नवाचार में अग्रणी',
      'भारत का गौरव बढ़ाते हम',
      'सेवा भाव से भरे',
      '',
      'एक साथ मिलकर चलते हैं',
      'सत्य और धर्म के साथ',
      'IIT पटना हमारी शान',
      'हमेशा आगे बढ़ते रहें'
    ],
    english: [
      'Here flows the Ganges of knowledge',
      'IIT Patna is our home',
      'Center of science and technology',
      'Excellence is our path',
      '',
      'We shine bright with education',
      'Leading in innovation',
      'Enhancing India\'s pride',
      'Filled with spirit of service',
      '',
      'Together we march forward',
      'With truth and righteousness',
      'IIT Patna is our pride',
      'May we always progress'
    ]
  };

  const [selectedLanguage, setSelectedLanguage] = useState<'hindi' | 'english'>('hindi');

  // Cultural significance points
  const significance = [
    {
      title: 'Unity in Diversity',
      description: 'The song brings together students and faculty from different backgrounds under one common identity'
    },
    {
      title: 'Educational Philosophy',
      description: 'Reflects our commitment to holistic education combining technical excellence with human values'
    },
    {
      title: 'Cultural Heritage',
      description: 'Incorporates elements of Indian classical music and traditional values in a contemporary setting'
    },
    {
      title: 'Institutional Pride',
      description: 'Instills a sense of belonging and pride among all members of the IIT Patna community'
    }
  ];

  // Handle play/pause toggle
  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
    // Implement actual audio playback logic here
  };

  return (
    <>
      <Helmet>
        <title>Institute Song - IIT Patna | Our Anthem & Cultural Heritage</title>
        <meta 
          name="description" 
          content="Listen to the official IIT Patna institute song, explore its lyrics, and understand its cultural significance in our institutional identity."
        />
        <meta name="keywords" content="IIT Patna, institute song, anthem, lyrics, music, cultural heritage, institutional identity" />
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
                <div className="flex items-center justify-center mb-6">
                  <Music className="h-12 w-12 mr-4 animate-pulse" />
                  <h1 className="text-4xl lg:text-5xl font-bold">
                    Institute Song
                  </h1>
                </div>
                <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
                  Our anthem that unites hearts and minds in the spirit of excellence and service
                </p>
              </motion.div>
            </div>
          </section>

          {/* Audio Player Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 shadow-xl">
                  <CardContent className="py-12">
                    {/* Song Info */}
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-foreground mb-4">
                        {songDetails.title}
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                        <div>
                          <span className="font-semibold">Composer:</span>
                          <br />
                          {songDetails.composer}
                        </div>
                        <div>
                          <span className="font-semibold">Lyricist:</span>
                          <br />
                          {songDetails.lyricist}
                        </div>
                        <div>
                          <span className="font-semibold">Year:</span>
                          <br />
                          {songDetails.yearComposed}
                        </div>
                      </div>
                    </div>

                    {/* Audio Player */}
                    <motion.div 
                      className="mb-8"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-white/50 rounded-full p-8 max-w-md mx-auto">
                        <div className="flex items-center justify-center space-x-6">
                          <Button
                            size="lg"
                            onClick={togglePlayback}
                            className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-110 transition-all duration-300 shadow-lg"
                          >
                            {isPlaying ? (
                              <Pause className="h-8 w-8 text-white" />
                            ) : (
                              <Play className="h-8 w-8 text-white ml-1" />
                            )}
                          </Button>
                          <div className="text-center">
                            <div className="font-semibold text-foreground">Duration</div>
                            <div className="text-sm text-muted-foreground">{songDetails.duration}</div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="hover:scale-105 transition-all duration-300"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </motion.div>

                    {/* Language Toggle */}
                    <div className="flex justify-center space-x-4 mb-6">
                      <Button
                        variant={selectedLanguage === 'hindi' ? 'default' : 'outline'}
                        onClick={() => setSelectedLanguage('hindi')}
                        className="hover:scale-105 transition-all duration-300"
                      >
                        हिंदी
                      </Button>
                      <Button
                        variant={selectedLanguage === 'english' ? 'default' : 'outline'}
                        onClick={() => setSelectedLanguage('english')}
                        className="hover:scale-105 transition-all duration-300"
                      >
                        English
                      </Button>
                    </div>

                    {/* Show/Hide Lyrics Toggle */}
                    <Button
                      variant="ghost"
                      onClick={() => setShowLyrics(!showLyrics)}
                      className="mb-4 hover:scale-105 transition-all duration-300"
                    >
                      {showLyrics ? 'Hide Lyrics' : 'Show Lyrics'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Lyrics Section */}
              {showLyrics && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-card/95 backdrop-blur-sm border-border/50 shadow-lg">
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl font-bold text-card-foreground flex items-center justify-center space-x-2">
                        <Volume2 className="h-6 w-6 text-primary" />
                        <span>Lyrics - {selectedLanguage === 'hindi' ? 'हिंदी' : 'English'}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center space-y-2 leading-relaxed">
                        {lyrics[selectedLanguage].map((line, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`${
                              line === '' 
                                ? 'h-4' 
                                : selectedLanguage === 'hindi' 
                                  ? 'text-lg text-foreground font-medium' 
                                  : 'text-base text-muted-foreground'
                            }`}
                          >
                            {line}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>
          </section>

          {/* Cultural Significance */}
          <section className="py-16 bg-secondary/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Cultural Significance
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Understanding the deeper meaning and importance of our institute song in our community
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {significance.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.3 + (index * 0.1),
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="group"
                  >
                    <Card className="h-full bg-card/95 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                            <Heart className="h-5 w-5 text-white" />
                          </div>
                          <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                            {item.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Community Participation */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 max-w-4xl mx-auto">
                  <CardContent className="py-12">
                    <div className="flex items-center justify-center mb-6">
                      <Music className="h-12 w-12 text-primary mr-4" />
                      <h3 className="text-3xl font-bold text-foreground">
                        Join Our Musical Heritage
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                      Our institute song is performed at all major ceremonies and celebrations. 
                      It serves as a unifying force that brings together our diverse community 
                      under shared values and aspirations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        size="lg"
                        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        <Music className="h-5 w-5 mr-2" />
                        Join Choir Group
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="hover:scale-105 transition-all duration-300"
                      >
                        <Download className="h-5 w-5 mr-2" />
                        Sheet Music
                      </Button>
                    </div>
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

export default InstituteSong;
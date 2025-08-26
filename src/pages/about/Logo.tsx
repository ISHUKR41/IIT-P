import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import logoImage from '@/assets/iit-patna-logo.png';

/**
 * About Logo page - Information about IIT Patna logo and its significance
 * Features:
 * - Logo display with detailed description
 * - Symbolism and meaning explanation
 * - Usage guidelines and variations
 * - Download options for official use
 */
const Logo: React.FC = () => {
  const logoElements = [
    {
      title: "Lotus Flower",
      description: "Represents purity, enlightenment, and spiritual awakening. Signifies the blooming of knowledge and wisdom.",
      color: "text-pink-600"
    },
    {
      title: "Wheel (Chakra)",
      description: "Symbolizes the eternal cycle of learning, progress, and development. Represents the continuous journey of education.",
      color: "text-blue-600"
    },
    {
      title: "Sanskrit Script",
      description: "Ancient script representing the rich cultural heritage and deep-rooted traditions of Indian education system.",
      color: "text-orange-600"
    },
    {
      title: "Color Scheme",
      description: "The blue and saffron colors represent wisdom, knowledge, courage, and sacrifice - core values of the institute.",
      color: "text-purple-600"
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>About Our Logo - IIT Patna | Symbol of Excellence</title>
        <meta 
          name="description" 
          content="Learn about the IIT Patna logo, its design elements, symbolism, and significance representing our institutional values and heritage."
        />
        <meta name="keywords" content="IIT Patna logo, institutional symbol, design meaning, brand identity" />
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
                Our Logo
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
                Symbol of excellence, tradition, and innovation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Logo Display Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Logo Display */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="card-feature p-8">
                  <div className="bg-white rounded-2xl p-12 shadow-inner">
                    <img 
                      src={logoImage} 
                      alt="IIT Patna Official Logo" 
                      className="w-64 h-64 mx-auto object-contain animate-float"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      IIT Patna Official Logo
                    </h3>
                    <p className="text-muted-foreground">
                      Designed to represent our commitment to excellence in education and research
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Logo Description */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                  Design Philosophy
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-foreground">
                  <p>
                    The IIT Patna logo is a carefully crafted symbol that embodies our institutional 
                    values, cultural heritage, and commitment to excellence. Every element has been 
                    thoughtfully designed to represent our mission of advancing knowledge and technology.
                  </p>
                  <p>
                    The logo combines traditional Indian symbols with modern design principles, 
                    creating a visual identity that honors our cultural roots while embracing 
                    contemporary educational philosophies.
                  </p>
                  <p>
                    This emblem serves as a beacon of our institutional pride and represents 
                    the aspirations of thousands of students, faculty, and alumni who are part 
                    of the IIT Patna family.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Logo Elements Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Logo Elements & Symbolism
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Understanding the deeper meaning behind each element of our logo
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {logoElements.map((element, index) => (
                <motion.div
                  key={element.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="card-modern h-full">
                    <CardHeader>
                      <CardTitle className={`text-xl ${element.color}`}>
                        {element.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {element.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Usage Guidelines Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Usage Guidelines
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Proper usage ensures the integrity and consistency of our brand identity
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Official Use Only",
                  description: "The logo should only be used for official IIT Patna communications, documents, and authorized materials.",
                  icon: "🏛️"
                },
                {
                  title: "Maintain Proportions",
                  description: "Always preserve the original proportions and aspect ratio. Do not stretch or distort the logo.",
                  icon: "📐"
                },
                {
                  title: "Clear Space",
                  description: "Maintain adequate clear space around the logo to ensure visibility and impact.",
                  icon: "🔲"
                },
                {
                  title: "Color Consistency",
                  description: "Use only approved color versions. Avoid unauthorized color modifications.",
                  icon: "🎨"
                },
                {
                  title: "Minimum Size",
                  description: "Ensure the logo is never used below the minimum size requirements for legibility.",
                  icon: "📏"
                },
                {
                  title: "Background Contrast",
                  description: "Always ensure sufficient contrast between the logo and background for optimal visibility.",
                  icon: "🌓"
                }
              ].map((guideline, index) => (
                <motion.div
                  key={guideline.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="card-modern h-full text-center">
                    <CardContent className="pt-6">
                      <div className="text-4xl mb-4">{guideline.icon}</div>
                      <h3 className="text-lg font-semibold text-primary mb-3">
                        {guideline.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {guideline.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Logo;
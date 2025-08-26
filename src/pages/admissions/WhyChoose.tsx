import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  BookOpen, 
  Building, 
  Globe, 
  TrendingUp, 
  Heart, 
  Lightbulb,
  Target,
  Shield
} from 'lucide-react';

/**
 * Why Choose Us page component for admissions
 * Features:
 * - Key reasons to choose IIT Patna
 * - Statistics and achievements
 * - Unique selling points
 * - Student testimonials
 * - SEO optimized content
 */
const WhyChoose: React.FC = () => {
  const reasons = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Consistently ranked among top engineering institutions with world-class faculty and rigorous academic standards."
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from distinguished professors with extensive research experience and industry expertise."
    },
    {
      icon: Building,
      title: "State-of-the-Art Infrastructure",
      description: "Modern laboratories, libraries, and facilities equipped with latest technology and equipment."
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "International exchange programs, collaborations with prestigious universities worldwide."
    },
    {
      icon: TrendingUp,
      title: "Excellent Placements",
      description: "Outstanding placement record with top national and international companies offering attractive packages."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Research",
      description: "Strong focus on research and innovation with numerous patents and publications."
    },
    {
      icon: Heart,
      title: "Holistic Development",
      description: "Emphasis on overall personality development through sports, cultural activities, and leadership programs."
    },
    {
      icon: Shield,
      title: "Alumni Network",
      description: "Strong alumni network in leading positions across industries globally, providing mentorship and opportunities."
    }
  ];

  const statistics = [
    {
      number: "95%+",
      title: "Placement Rate",
      description: "Students placed in top companies"
    },
    {
      number: "₹45L+",
      title: "Highest Package",
      description: "Annual package offered"
    },
    {
      number: "200+",
      title: "Partner Companies",
      description: "Recruiting partners"
    },
    {
      number: "50+",
      title: "Research Projects",
      description: "Ongoing research initiatives"
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      batch: "B.Tech CSE 2023",
      company: "Google",
      text: "IIT Patna provided me with the perfect platform to grow both academically and personally. The faculty support and research opportunities are exceptional."
    },
    {
      name: "Priya Singh",
      batch: "M.Tech EE 2022",
      company: "Microsoft",
      text: "The learning environment at IIT Patna is truly inspiring. The emphasis on practical knowledge and innovation helped me excel in my career."
    },
    {
      name: "Amit Kumar",
      batch: "B.Tech ME 2021",
      company: "Tesla",
      text: "IIT Patna's strong industry connections and placement support helped me secure my dream job. The technical skills I gained here are invaluable."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose IIT Patna - Admissions | Excellence in Engineering Education</title>
        <meta 
          name="description" 
          content="Discover why IIT Patna is the perfect choice for your engineering education. Excellence in academics, placements, research, and holistic development."
        />
        <meta 
          name="keywords" 
          content="why choose IIT Patna, IIT Patna admissions, engineering education, best IIT, placements, research opportunities"
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
                Why Choose IIT Patna?
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover what makes IIT Patna the ideal destination for your engineering education and career growth
              </p>
            </motion.div>

            {/* Statistics Section */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {statistics.map((stat, index) => (
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

            {/* Key Reasons Grid */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Key Reasons to Choose Us</h2>
                <p className="text-lg text-muted-foreground">
                  What sets IIT Patna apart from other institutions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reasons.map((reason, index) => {
                  const IconComponent = reason.icon;
                  return (
                    <motion.div
                      key={reason.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <CardContent className="p-6 text-center">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <IconComponent className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* Student Testimonials */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">What Our Students Say</h2>
                <p className="text-lg text-muted-foreground">
                  Hear from our successful alumni about their IIT Patna experience
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                            <span className="font-bold text-primary">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{testimonial.batch}</p>
                            <p className="text-sm text-primary font-semibold">{testimonial.company}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm leading-relaxed italic">
                          "{testimonial.text}"
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

          </div>
        </div>
      </Layout>
    </>
  );
};

export default WhyChoose;
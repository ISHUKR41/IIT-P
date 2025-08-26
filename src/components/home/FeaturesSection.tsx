import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Microscope, 
  Users, 
  Building, 
  Award, 
  Globe,
  ArrowRight,
  BookOpen,
  Lightbulb,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Features section showcasing IIT Patna's key strengths
 * Features:
 * - Academic excellence highlights
 * - Research and innovation focus
 * - Campus life and facilities
 * - Modern card-based layout with hover effects
 * - Responsive grid system
 */
const FeaturesSection: React.FC = () => {
  
  // Main feature cards data
  const features = [
    {
      icon: GraduationCap,
      title: "World-Class Education",
      description: "Comprehensive undergraduate, postgraduate, and doctoral programs designed to nurture future leaders in technology and innovation.",
      link: "/academics/undergraduate",
      linkText: "Explore Programs",
      stats: "15+ Departments"
    },
    {
      icon: Microscope,
      title: "Cutting-Edge Research",
      description: "State-of-the-art laboratories and research facilities fostering breakthrough discoveries in science and technology.",
      link: "/research/rd-home",
      linkText: "Research Excellence",
      stats: "₹50+ Crore Projects"
    },
    {
      icon: Users,
      title: "Industry Partnerships",
      description: "Strong collaborations with leading industries providing real-world exposure and excellent placement opportunities.",
      link: "/research/industry",
      linkText: "Industry Connect",
      stats: "100+ Partners"
    },
    {
      icon: Building,
      title: "Modern Infrastructure",
      description: "Contemporary campus with advanced facilities, smart classrooms, hostels, and recreational amenities for holistic development.",
      link: "/academics/campus-life",
      linkText: "Campus Tour",
      stats: "200+ Acre Campus"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Consistently ranked among India's top engineering institutions with outstanding academic achievements and recognition.",
      link: "/about/vision-mission",
      linkText: "Our Vision",
      stats: "NIRF Top 50"
    },
    {
      icon: Globe,
      title: "Global Exposure",
      description: "International collaborations, exchange programs, and global research initiatives providing worldwide opportunities.",
      link: "/academics/international-exchange",
      linkText: "Global Programs",
      stats: "25+ Countries"
    }
  ];

  // Why choose IIT Patna highlights
  const highlights = [
    {
      icon: Target,
      title: "Mission-Driven Excellence",
      description: "Committed to advancing knowledge and nurturing innovative minds for societal benefit."
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Fostering entrepreneurship and technology transfer for real-world impact."
    },
    {
      icon: BookOpen,
      title: "Holistic Development",
      description: "Comprehensive education combining technical expertise with leadership skills."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Why Choose IIT Patna?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience excellence in engineering education at one of India's premier technological institutions, 
            where innovation meets opportunity and dreams transform into reality.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="card-feature group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                
                {/* Feature Icon and Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {feature.stats}
                  </span>
                </div>

                {/* Feature Content */}
                <h3 className="text-xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature Link */}
                <Link 
                  to={feature.link}
                  className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors duration-300 group-hover:translate-x-1"
                >
                  {feature.linkText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-custom animate-fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">
                Institution of 
                <span className="text-gradient"> National Importance</span>
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Established by an Act of Parliament, IIT Patna stands as a beacon of 
                excellence in technical education, research, and innovation. Our commitment 
                to academic rigor and societal impact drives us forward.
              </p>

              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <div 
                    key={highlight.title} 
                    className="flex items-start space-x-4 animate-slide-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="p-2 bg-secondary/10 rounded-lg flex-shrink-0">
                      <highlight.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Call to Action */}
            <div className="text-center lg:text-left space-y-6">
              <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
                <h4 className="text-2xl font-bold mb-4">Ready to Join IIT Patna?</h4>
                <p className="mb-6 opacity-90">
                  Take the first step towards an extraordinary future in engineering and technology.
                </p>
                <div className="space-y-4">
                  <Link to="/admissions/why-choose">
                    <Button className="btn-secondary w-full">
                      Admissions Information
                    </Button>
                  </Link>
                  <Link to="/contact/reach-campus">
                    <Button variant="outline" className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      Visit Our Campus
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted rounded-xl">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-xl">
                  <div className="text-2xl font-bold text-primary">95%+</div>
                  <div className="text-sm text-muted-foreground">Placement Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
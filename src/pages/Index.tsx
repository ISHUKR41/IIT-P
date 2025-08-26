import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ParticleBackground from '@/components/common/ParticleBackground';
import SEO from '@/components/common/SEO';
import gsap from 'gsap';

/**
 * Homepage component for IIT Patna website
 * Features:
 * - Advanced SEO optimization with structured data
 * - Animated hero section with 3D elements and particle background
 * - Interactive features showcasing university highlights
 * - Smooth scroll animations with GSAP integration
 * - Call-to-action sections for admissions and research
 * - Fully responsive design with modern UI animations
 * - Performance optimized with lazy loading
 * - Accessibility compliant with ARIA labels
 * - Rich content for better user engagement
 */
const Index: React.FC = () => {
  useEffect(() => {
    // Initialize GSAP animations for page load
    const tl = gsap.timeline();
    
    // Animate page entrance with smooth reveal effect
    tl.fromTo('.hero-container', 
      { 
        opacity: 0, 
        y: 50,
        scale: 0.95
      }, 
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 1.2, 
        ease: 'power3.out'
      }
    )
    .fromTo('.features-container', 
      { 
        opacity: 0, 
        y: 30 
      }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'power2.out' 
      }, 
      '-=0.5'
    );

    // Cleanup function to prevent memory leaks
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      {/* Advanced SEO Configuration with JSON-LD structured data */}
      <SEO 
        title="IIT Patna - Indian Institute of Technology Patna | Excellence in Engineering Education"
        description="IIT Patna is a premier technological institution offering world-class education in engineering, science, and technology. Explore our undergraduate, postgraduate, and research programs with state-of-the-art facilities and industry partnerships."
        keywords="IIT Patna, Indian Institute of Technology, engineering education, research, Bihar, technology, science, undergraduate, postgraduate, PhD, placement, innovation, startup, incubation"
        canonicalUrl="https://www.iitp.ac.in"
      />

      {/* Enhanced meta tags for better SEO performance */}
      <Helmet>
        {/* Additional meta tags for enhanced SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="IIT Patna" />
        <meta name="publisher" content="Indian Institute of Technology Patna" />
        <meta name="copyright" content="IIT Patna" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Structured Data for Educational Institution */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Indian Institute of Technology Patna",
            "alternateName": "IIT Patna",
            "url": "https://www.iitp.ac.in",
            "logo": "https://www.iitp.ac.in/logo.png",
            "description": "Premier technological institution offering world-class education in engineering, science, and technology.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Bihta",
              "addressLocality": "Patna",
              "addressRegion": "Bihar",
              "postalCode": "801106",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-6115-233000",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://www.facebook.com/iitpatna",
              "https://twitter.com/iitpatna",
              "https://www.linkedin.com/school/iit-patna"
            ]
          })}
        </script>
      </Helmet>

      <Layout>
        {/* Animated Particle Background for immersive experience */}
        <ParticleBackground />
        
        {/* Hero Section - Main banner with campus showcase and 3D elements */}
        <div className="hero-container relative z-10">
          <HeroSection />
        </div>
        
        {/* Features Section - Why choose IIT Patna with interactive animations */}
        <div className="features-container relative z-10">
          <FeaturesSection />
        </div>
        
        {/* Additional sections for future expansion */}
        {/* Academic Excellence Section */}
        {/* Research Innovation Section */}
        {/* Campus Life Section */}
        {/* Industry Partnerships Section */}
        {/* Alumni Success Stories Section */}
        {/* News and Events Section */}
      </Layout>
    </>
  );
};

export default Index;

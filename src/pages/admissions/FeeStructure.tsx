import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Download, Info, Calculator, CreditCard, Calendar, Shield, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleBackground from '@/components/common/ParticleBackground';
import SEO from '@/components/common/SEO';

gsap.registerPlugin(ScrollTrigger);

/**
 * Fee Structure Page
 * Displays comprehensive fee information for all programs at IIT Patna
 * Includes tuition fees, hostel charges, scholarships, and payment options
 */

const FeeStructure: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState('btech');
  const [selectedCategory, setSelectedCategory] = useState('general');
  const feeTableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fee table animation
    if (feeTableRef.current) {
      gsap.fromTo(feeTableRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          ease: 'power3.out'
        }
      );
    }

    // Feature cards animation
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
      gsap.fromTo(card,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: index * 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%'
          }
        }
      );
    });
  }, []);

  const programs = [
    { id: 'btech', name: 'B.Tech', duration: '4 Years' },
    { id: 'mtech', name: 'M.Tech', duration: '2 Years' },
    { id: 'msc', name: 'M.Sc', duration: '2 Years' },
    { id: 'phd', name: 'PhD', duration: '3-5 Years' },
    { id: 'dual', name: 'Dual Degree', duration: '5 Years' }
  ];

  const categories = [
    { id: 'general', name: 'General/OBC' },
    { id: 'sc_st', name: 'SC/ST/PwD' },
    { id: 'international', name: 'International' }
  ];

  const feeStructure = {
    btech: {
      general: {
        tuition: 100000,
        hostel: 31000,
        mess: 24000,
        other: 15000,
        total: 170000
      },
      sc_st: {
        tuition: 0,
        hostel: 31000,
        mess: 24000,
        other: 15000,
        total: 70000
      },
      international: {
        tuition: 300000,
        hostel: 40000,
        mess: 30000,
        other: 20000,
        total: 390000
      }
    },
    mtech: {
      general: {
        tuition: 50000,
        hostel: 31000,
        mess: 24000,
        other: 10000,
        total: 115000
      },
      sc_st: {
        tuition: 0,
        hostel: 31000,
        mess: 24000,
        other: 10000,
        total: 65000
      },
      international: {
        tuition: 200000,
        hostel: 40000,
        mess: 30000,
        other: 15000,
        total: 285000
      }
    },
    msc: {
      general: {
        tuition: 30000,
        hostel: 31000,
        mess: 24000,
        other: 8000,
        total: 93000
      },
      sc_st: {
        tuition: 0,
        hostel: 31000,
        mess: 24000,
        other: 8000,
        total: 63000
      },
      international: {
        tuition: 150000,
        hostel: 40000,
        mess: 30000,
        other: 12000,
        total: 232000
      }
    },
    phd: {
      general: {
        tuition: 25000,
        hostel: 31000,
        mess: 24000,
        other: 5000,
        total: 85000
      },
      sc_st: {
        tuition: 0,
        hostel: 31000,
        mess: 24000,
        other: 5000,
        total: 60000
      },
      international: {
        tuition: 100000,
        hostel: 40000,
        mess: 30000,
        other: 10000,
        total: 180000
      }
    },
    dual: {
      general: {
        tuition: 100000,
        hostel: 31000,
        mess: 24000,
        other: 15000,
        total: 170000
      },
      sc_st: {
        tuition: 0,
        hostel: 31000,
        mess: 24000,
        other: 15000,
        total: 70000
      },
      international: {
        tuition: 300000,
        hostel: 40000,
        mess: 30000,
        other: 20000,
        total: 390000
      }
    }
  };

  const currentFee = feeStructure[selectedProgram as keyof typeof feeStructure][selectedCategory as keyof typeof feeStructure.btech];

  const scholarships = [
    {
      name: 'Merit-cum-Means Scholarship',
      amount: '₹50,000/year',
      eligibility: 'Family income < ₹4.5 lakhs',
      coverage: '67% students'
    },
    {
      name: 'SC/ST Full Tuition Waiver',
      amount: '100% Tuition Fee',
      eligibility: 'All SC/ST students',
      coverage: '100% eligible'
    },
    {
      name: 'Top 10% Merit Scholarship',
      amount: '₹25,000/year',
      eligibility: 'Top 10% of each batch',
      coverage: '10% students'
    },
    {
      name: 'Research Assistantship',
      amount: '₹12,400/month',
      eligibility: 'M.Tech & PhD students',
      coverage: 'All eligible'
    }
  ];

  const paymentModes = [
    { icon: CreditCard, title: 'Online Payment', description: 'Credit/Debit Card, Net Banking, UPI' },
    { icon: DollarSign, title: 'NEFT/RTGS', description: 'Direct bank transfer' },
    { icon: Calendar, title: 'EMI Options', description: '0% interest for 6 months' },
    { icon: Shield, title: 'Education Loan', description: 'Tie-up with major banks' }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <>
      <SEO 
        title="Fee Structure - IIT Patna"
        description="Complete fee structure for B.Tech, M.Tech, M.Sc, PhD programs at IIT Patna. Includes tuition fees, hostel charges, scholarships, and payment options."
        keywords="IIT Patna fees, tuition fees, hostel fees, scholarship, fee structure, payment options"
      />

      <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
        <ParticleBackground />
        
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full mb-6">
              <DollarSign className="h-8 w-8 text-green-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Fee Structure
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent and affordable fee structure for all programs at IIT Patna
            </p>
          </motion.div>

          {/* Program Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-center">Select Program</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {programs.map((program) => (
                <motion.button
                  key={program.id}
                  onClick={() => setSelectedProgram(program.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    selectedProgram === program.id
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                      : 'bg-card hover:bg-card/80 text-foreground border border-border'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div>{program.name}</div>
                  <div className="text-xs opacity-80">{program.duration}</div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Category Selection */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-4 text-center">Select Category</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card hover:bg-card/80 text-foreground'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Fee Breakdown Table */}
          <div ref={feeTableRef} className="mb-12">
            <motion.div
              className="bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6">
                <h2 className="text-2xl font-bold">
                  {programs.find(p => p.id === selectedProgram)?.name} - {categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-muted-foreground mt-2">Annual Fee Structure (Per Semester × 2)</p>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-3">Fee Component</th>
                      <th className="text-right py-3">Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <motion.tr 
                      className="border-b border-border/30"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <td className="py-3">Tuition Fee</td>
                      <td className="text-right font-semibold">{formatCurrency(currentFee.tuition)}</td>
                    </motion.tr>
                    <motion.tr 
                      className="border-b border-border/30"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <td className="py-3">Hostel Rent</td>
                      <td className="text-right font-semibold">{formatCurrency(currentFee.hostel)}</td>
                    </motion.tr>
                    <motion.tr 
                      className="border-b border-border/30"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <td className="py-3">Mess Charges</td>
                      <td className="text-right font-semibold">{formatCurrency(currentFee.mess)}</td>
                    </motion.tr>
                    <motion.tr 
                      className="border-b border-border/30"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <td className="py-3">Other Fees (Gymkhana, Medical, etc.)</td>
                      <td className="text-right font-semibold">{formatCurrency(currentFee.other)}</td>
                    </motion.tr>
                    <motion.tr 
                      className="text-lg font-bold"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <td className="py-4">Total Annual Fee</td>
                      <td className="text-right text-primary">{formatCurrency(currentFee.total)}</td>
                    </motion.tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>

          {/* Scholarships Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Scholarships & Financial Aid</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {scholarships.map((scholarship, index) => (
                <motion.div
                  key={scholarship.name}
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-xl h-full">
                    <h3 className="font-bold mb-2">{scholarship.name}</h3>
                    <div className="text-2xl font-bold text-green-500 mb-3">{scholarship.amount}</div>
                    <p className="text-sm text-muted-foreground mb-2">{scholarship.eligibility}</p>
                    <div className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded inline-block">
                      {scholarship.coverage}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Payment Options */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Payment Options</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paymentModes.map((mode, index) => {
                const Icon = mode.icon;
                return (
                  <motion.div
                    key={mode.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-center">
                      <Icon className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="font-bold mb-2">{mode.title}</h3>
                      <p className="text-sm text-muted-foreground">{mode.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Important Information */}
          <motion.div
            className="p-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-3xl backdrop-blur-sm border border-yellow-500/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-start gap-4">
              <Info className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-4">Important Information</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Fee is payable semester-wise at the beginning of each semester</li>
                  <li>• SC/ST/PwD students are exempted from tuition fee</li>
                  <li>• Students from families with income less than ₹1 lakh per annum get full remission</li>
                  <li>• Mess charges are subject to revision based on actual expenses</li>
                  <li>• Fee structure is subject to periodic revision by the Board of Governors</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-5 w-5" />
              Download Complete Fee Structure PDF
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FeeStructure;
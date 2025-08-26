import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  GraduationCap, 
  IndianRupee, 
  Download, 
  Calculator,
  CreditCard,
  Calendar,
  Info,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Fee Structure Page - IIT Patna
 * Comprehensive fee information for all programs
 * Features: Interactive fee calculator, payment options, scholarships
 */

const feeStructure = {
  undergraduate: {
    btech: {
      title: 'B.Tech Program',
      duration: '4 years',
      categories: [
        {
          category: 'General/OBC',
          tuitionFee: 250000,
          otherFees: 85000,
          hostelFee: 45000,
          messCharges: 48000,
          total: 428000,
          yearlyIncrease: '8-10%'
        },
        {
          category: 'SC/ST/PwD',
          tuitionFee: 0,
          otherFees: 85000,
          hostelFee: 45000,
          messCharges: 48000,
          total: 178000,
          yearlyIncrease: '8-10%'
        }
      ]
    },
    dualDegree: {
      title: 'Dual Degree Program',
      duration: '5 years',
      categories: [
        {
          category: 'General/OBC',
          tuitionFee: 250000,
          otherFees: 90000,
          hostelFee: 45000,
          messCharges: 48000,
          total: 433000,
          yearlyIncrease: '8-10%'
        },
        {
          category: 'SC/ST/PwD',
          tuitionFee: 0,
          otherFees: 90000,
          hostelFee: 45000,
          messCharges: 48000,
          total: 183000,
          yearlyIncrease: '8-10%'
        }
      ]
    }
  },
  postgraduate: {
    mtech: {
      title: 'M.Tech Program',
      duration: '2 years',
      categories: [
        {
          category: 'General/OBC',
          tuitionFee: 280000,
          otherFees: 75000,
          hostelFee: 45000,
          messCharges: 48000,
          total: 448000,
          assistantship: 'TA: ₹12,400/month'
        },
        {
          category: 'SC/ST/PwD',
          tuitionFee: 0,
          otherFees: 75000,
          hostelFee: 45000,
          messCharges: 48000,
          total: 168000,
          assistantship: 'TA: ₹12,400/month'
        }
      ]
    },
    msc: {
      title: 'M.Sc Program',
      duration: '2 years',
      categories: [
        {
          category: 'General/OBC',
          tuitionFee: 240000,
          otherFees: 70000,
          hostelFee: 45000,
          messCharges: 48000,
          total: 403000,
          assistantship: 'TA: ₹12,400/month'
        },
        {
          category: 'SC/ST/PwD',
          tuitionFee: 0,
          otherFees: 70000,
          hostelFee: 45000,
          messCharges: 48000,
          total: 163000,
          assistantship: 'TA: ₹12,400/month'
        }
      ]
    }
  },
  doctoral: {
    phd: {
      title: 'Ph.D Program',
      duration: '4-6 years',
      categories: [
        {
          category: 'General/OBC',
          tuitionFee: 200000,
          otherFees: 65000,
          hostelFee: 45000,
          messCharges: 48000,
          total: 358000,
          fellowship: 'JRF: ₹31,000/month, SRF: ₹35,000/month'
        },
        {
          category: 'SC/ST/PwD',
          tuitionFee: 0,
          otherFees: 65000,
          hostelFee: 45000,
          messCharges: 48000,
          total: 158000,
          fellowship: 'JRF: ₹31,000/month, SRF: ₹35,000/month'
        }
      ]
    }
  }
};

const scholarships = [
  {
    name: 'MCM Scholarship',
    eligibility: 'Merit cum Means for UG students',
    amount: '₹1,000 - ₹5,000/month',
    coverage: 'Family income < ₹5 lakh'
  },
  {
    name: 'INSPIRE Scholarship',
    eligibility: 'Top 1% in board exams',
    amount: '₹80,000/year',
    coverage: 'Tuition fee waiver + scholarship'
  },
  {
    name: 'KVPY Fellowship',
    eligibility: 'KVPY qualified students',
    amount: '₹7,000/month (UG), ₹12,400/month (PG)',
    coverage: 'Monthly fellowship + contingency'
  },
  {
    name: 'PM-USP Scholarship',
    eligibility: 'Economically weaker sections',
    amount: 'Up to ₹2 lakh/year',
    coverage: 'Complete fee waiver'
  }
];

const paymentOptions = [
  {
    title: 'Semester-wise Payment',
    description: 'Pay fees every 6 months',
    icon: Calendar,
    popular: true
  },
  {
    title: 'Annual Payment',
    description: 'Pay once a year with 2% discount',
    icon: TrendingUp,
    popular: false
  },
  {
    title: 'Education Loan',
    description: 'Partner banks with easy loan processing',
    icon: CreditCard,
    popular: false
  },
  {
    title: 'EMI Options',
    description: 'Convert to EMIs through bank partners',
    icon: Calculator,
    popular: false
  }
];

const FeeStructure: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState('undergraduate');
  const [selectedSubProgram, setSelectedSubProgram] = useState('btech');

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getCurrentFeeData = () => {
    return feeStructure[selectedProgram as keyof typeof feeStructure][selectedSubProgram as keyof any];
  };

  return (
    <>
      <Helmet>
        <title>Fee Structure | IIT Patna - Admission Fees & Payment Options</title>
        <meta 
          name="description" 
          content="Complete fee structure for IIT Patna programs. B.Tech, M.Tech, M.Sc, Ph.D fees, scholarships, payment options and financial assistance details." 
        />
        <meta name="keywords" content="IIT Patna fees, admission fees, B.Tech fees, M.Tech fees, Ph.D fees, scholarships, payment options" />
      </Helmet>

      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
          
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
            
            <div className="max-w-7xl mx-auto relative z-10">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <IndianRupee className="h-10 w-10 text-primary" />
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6">
                  Fee Structure
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Transparent and comprehensive fee structure for all academic programs at IIT Patna, 
                  with multiple payment options and scholarship opportunities.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Fee Structure Tabs */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <Tabs defaultValue="undergraduate" onValueChange={setSelectedProgram}>
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="undergraduate" className="text-sm md:text-base">
                    Undergraduate
                  </TabsTrigger>
                  <TabsTrigger value="postgraduate" className="text-sm md:text-base">
                    Postgraduate
                  </TabsTrigger>
                  <TabsTrigger value="doctoral" className="text-sm md:text-base">
                    Doctoral
                  </TabsTrigger>
                </TabsList>

                {/* Undergraduate Programs */}
                <TabsContent value="undergraduate">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Tabs defaultValue="btech" onValueChange={setSelectedSubProgram}>
                      <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="btech">B.Tech</TabsTrigger>
                        <TabsTrigger value="dualDegree">Dual Degree</TabsTrigger>
                      </TabsList>

                      <TabsContent value="btech">
                        <FeeCard program={feeStructure.undergraduate.btech} />
                      </TabsContent>

                      <TabsContent value="dualDegree">
                        <FeeCard program={feeStructure.undergraduate.dualDegree} />
                      </TabsContent>
                    </Tabs>

                    <PaymentOptionsCard />
                  </div>
                </TabsContent>

                {/* Postgraduate Programs */}
                <TabsContent value="postgraduate">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Tabs defaultValue="mtech" onValueChange={setSelectedSubProgram}>
                      <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="mtech">M.Tech</TabsTrigger>
                        <TabsTrigger value="msc">M.Sc</TabsTrigger>
                      </TabsList>

                      <TabsContent value="mtech">
                        <FeeCard program={feeStructure.postgraduate.mtech} />
                      </TabsContent>

                      <TabsContent value="msc">
                        <FeeCard program={feeStructure.postgraduate.msc} />
                      </TabsContent>
                    </Tabs>

                    <PaymentOptionsCard />
                  </div>
                </TabsContent>

                {/* Doctoral Programs */}
                <TabsContent value="doctoral">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <FeeCard program={feeStructure.doctoral.phd} />
                    <PaymentOptionsCard />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Scholarships Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                  Scholarships & Financial Aid
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Various scholarship opportunities to support meritorious and economically disadvantaged students
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {scholarships.map((scholarship, index) => (
                  <motion.div
                    key={scholarship.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="h-full card-modern">
                      <CardHeader className="pb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                          <Award className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-lg font-bold text-card-foreground">
                          {scholarship.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">Eligibility:</p>
                          <p className="text-sm text-card-foreground">{scholarship.eligibility}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">Amount:</p>
                          <p className="text-sm font-semibold text-green-600">{scholarship.amount}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">Coverage:</p>
                          <p className="text-sm text-card-foreground">{scholarship.coverage}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Fee Calculator Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-card-foreground mb-6">
                  Need Help with Fee Calculation?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Use our interactive fee calculator or download the detailed fee structure document.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="btn-hero">
                    <Calculator className="h-4 w-4 mr-2" />
                    Fee Calculator
                  </Button>
                  <Button variant="outline" size="lg">
                    <Download className="h-4 w-4 mr-2" />
                    Download Fee Structure
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

// Fee Card Component
const FeeCard: React.FC<{ program: any }> = ({ program }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <Card className="card-feature">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold text-card-foreground">
            {program.title}
          </CardTitle>
          <Badge variant="outline">{program.duration}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {program.categories.map((category: any, idx: number) => (
          <div key={idx} className="border border-border rounded-lg p-4">
            <h4 className="font-semibold text-card-foreground mb-4">{category.category}</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Tuition Fee:</span>
                <span className="font-medium">{category.tuitionFee === 0 ? 'Waived' : `₹${category.tuitionFee.toLocaleString()}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Other Fees:</span>
                <span className="font-medium">₹{category.otherFees.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Hostel Fee:</span>
                <span className="font-medium">₹{category.hostelFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Mess Charges:</span>
                <span className="font-medium">₹{category.messCharges.toLocaleString()}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-primary">
                <span>Total (Per Year):</span>
                <span>₹{category.total.toLocaleString()}</span>
              </div>
              {category.assistantship && (
                <div className="bg-green-50 p-2 rounded text-green-800 text-xs">
                  <strong>Assistantship:</strong> {category.assistantship}
                </div>
              )}
              {category.fellowship && (
                <div className="bg-blue-50 p-2 rounded text-blue-800 text-xs">
                  <strong>Fellowship:</strong> {category.fellowship}
                </div>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  </motion.div>
);

// Payment Options Card Component
const PaymentOptionsCard: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <Card className="card-feature">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-card-foreground">
          Payment Options
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {paymentOptions.map((option, idx) => {
          const IconComponent = option.icon;
          return (
            <div key={idx} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-200">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <IconComponent className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-card-foreground">{option.title}</h4>
                  {option.popular && (
                    <Badge variant="secondary" className="text-xs">Popular</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </div>
            </div>
          );
        })}

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start space-x-2">
            <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-800 mb-1">Important Note</h4>
              <p className="text-sm text-blue-700">
                All fees are subject to annual revision. Fee refund policy applies as per institute guidelines.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default FeeStructure;
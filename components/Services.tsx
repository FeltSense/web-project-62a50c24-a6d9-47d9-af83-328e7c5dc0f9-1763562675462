'use client';

import { Building, Star, Award, Shield, Crown, Zap, CheckCircle, Users, TrendingUp, FileText, Calculator, BarChart, BookOpen, Download, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Calculator,
      title: "Tax Preparation & Planning",
      description: "Comprehensive tax services designed to minimize liability and maximize returns for individuals and businesses.",
      features: ["Individual Tax Returns", "Corporate Tax Filing", "Tax Strategy Planning", "IRS Representation"]
    },
    {
      icon: BookOpen,
      title: "Bookkeeping Services",
      description: "Accurate, timely financial record-keeping to keep your business organized and compliant year-round.",
      features: ["Monthly Reconciliation", "Accounts Payable/Receivable", "Payroll Processing", "Financial Reporting"]
    },
    {
      icon: TrendingUp,
      title: "Financial Planning",
      description: "Strategic financial guidance to help you achieve your personal and business financial goals.",
      features: ["Retirement Planning", "Investment Strategy", "Estate Planning", "Cash Flow Management"]
    },
    {
      icon: Shield,
      title: "Audit & Assurance",
      description: "Independent audit services that provide credibility and confidence to your financial statements.",
      features: ["Financial Audits", "Compliance Reviews", "Internal Controls", "Risk Assessment"]
    },
    {
      icon: Building,
      title: "Business Consulting",
      description: "Expert advisory services to drive growth, improve efficiency, and maximize profitability.",
      features: ["Business Valuations", "Merger & Acquisition", "CFO Services", "Growth Strategy"]
    },
    {
      icon: Zap,
      title: "QuickBooks Support",
      description: "Full-service QuickBooks setup, training, and ongoing support to streamline your accounting.",
      features: ["Software Setup", "Training Sessions", "Troubleshooting", "System Optimization"]
    }
  ];

  const team = [
    {
      name: "Michael Robertson, CPA",
      role: "Senior Partner",
      credentials: "CPA, MBA",
      specialization: "Tax Strategy & Corporate Finance",
      experience: "25+ years",
      image: "M"
    },
    {
      name: "Sarah Chen, CPA",
      role: "Tax Director",
      credentials: "CPA, MST",
      specialization: "International Tax & Compliance",
      experience: "18+ years",
      image: "S"
    },
    {
      name: "David Martinez, CPA",
      role: "Audit Partner",
      credentials: "CPA, CIA",
      specialization: "Financial Audits & Risk Management",
      experience: "20+ years",
      image: "D"
    },
    {
      name: "Jennifer Adams, CPA",
      role: "Advisory Partner",
      credentials: "CPA, CFP",
      specialization: "Financial Planning & Wealth Management",
      experience: "15+ years",
      image: "J"
    }
  ];

  const successStories = [
    {
      client: "TechStart Solutions",
      industry: "Technology",
      challenge: "Needed tax strategy for rapid growth phase",
      result: "Reduced tax liability by 32% while maintaining full compliance",
      roi: "32% Tax Savings",
      metric: "$485K saved annually",
      testimonial: "Precision Accounting Partners transformed our financial operations. Their strategic tax planning saved us nearly half a million dollars in the first year alone."
    },
    {
      client: "Heritage Manufacturing",
      industry: "Manufacturing",
      challenge: "Required audit preparation for acquisition",
      result: "Completed comprehensive audit, facilitated $12M acquisition",
      roi: "$12M Deal Success",
      metric: "Closed in 90 days",
      testimonial: "The audit team's attention to detail and professionalism was outstanding. They were instrumental in helping us close our acquisition on time and under budget."
    },
    {
      client: "Riverside Medical Group",
      industry: "Healthcare",
      challenge: "Struggling with bookkeeping and cash flow",
      result: "Implemented new systems, improved cash flow by 45%",
      roi: "45% Cash Flow Boost",
      metric: "3-month turnaround",
      testimonial: "Our practice was drowning in paperwork. Precision brought order to chaos and gave us the financial clarity we desperately needed."
    }
  ];

  const resources = [
    {
      icon: FileText,
      title: "2024 Tax Planning Guide",
      description: "Essential strategies to minimize your tax burden for the upcoming year",
      type: "PDF Guide",
      downloadable: true
    },
    {
      icon: Calculator,
      title: "Small Business Tax Deduction Checklist",
      description: "Don't miss these commonly overlooked business tax deductions",
      type: "Checklist",
      downloadable: true
    },
    {
      icon: BarChart,
      title: "Financial Ratios Every Business Owner Should Know",
      description: "Key metrics to monitor your business financial health",
      type: "Article",
      downloadable: false
    },
    {
      icon: BookOpen,
      title: "Quarterly Tax Payment Calculator",
      description: "Estimate your quarterly tax obligations and avoid penalties",
      type: "Tool",
      downloadable: false
    },
    {
      icon: TrendingUp,
      title: "Retirement Planning Workbook",
      description: "Step-by-step guide to securing your financial future",
      type: "PDF Workbook",
      downloadable: true
    },
    {
      icon: Shield,
      title: "IRS Audit Survival Guide",
      description: "What to do if you receive an audit notice from the IRS",
      type: "PDF Guide",
      downloadable: true
    }
  ];

  return (
    <div className="bg-white">
      {/* Service Offerings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From tax preparation to strategic consulting, we provide the full spectrum of accounting services your business needs to thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experienced CPA Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team brings decades of combined expertise in accounting, tax, and financial advisory services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl font-bold text-white">{member.image}</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <div className="inline-flex items-center justify-center bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {member.credentials}
                  </div>
                  <p className="text-gray-700 font-medium mb-2">
                    {member.specialization}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {member.experience} experience
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Results for Real Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses like yours achieve measurable financial success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {story.client}
                    </h3>
                    <p className="text-gray-500 text-sm">{story.industry}</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">CHALLENGE</p>
                    <p className="text-gray-700">{story.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">RESULT</p>
                    <p className="text-gray-700">{story.result}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-2xl font-bold text-blue-600 mb-1">{story.roi}</p>
                    <p className="text-sm text-gray-600">Impact</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 mb-1">{story.metric}</p>
                    <p className="text-sm text-gray-600">Value</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-start mb-3">
                    <Star className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <Star className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <Star className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <Star className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <Star className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  </div>
                  <p className="text-gray-600 italic">"{story.testimonial}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Center */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Resource Center
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tax Tips & Financial Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our library of expert resources designed to help you make informed financial decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {resource.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {resource.description}
                  </p>

                  {resource.downloadable ? (
                    <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group">
                      <Download className="w-5 h-5 mr-2" />
                      Download Now
                    </button>
                  ) : (
                    <button className="w-full border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center group">
                      View Resource
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Need Personalized Guidance?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team of CPAs is ready to provide tailored financial advice for your unique situation.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
// pages/TermsOfServicePage.tsx
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfServicePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const termsSections = [
    {
      id: 'account-usage',
      title: 'Account & Service Usage',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Account Responsibilities</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• You must provide accurate information when creating your account</p>
              <p>• Keep your login credentials secure and don't share them</p>
              <p>• You're responsible for all activities under your account</p>
              <p>• Must be 18+ or have company authorization to use TagGuard</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Acceptable Use</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Use TagGuard only for legitimate security management purposes</p>
              <p>• Comply with all applicable laws and PSIRA regulations</p>
              <p>• Don't attempt to hack, reverse engineer, or misuse the platform</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'payments-billing',
      title: 'Payments & Billing',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Subscription Terms</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>• Monthly or annual billing cycles</p>
                <p>• Auto-renewal unless cancelled</p>
                <p>• 30-day free trial for new customers</p>
                <p>• Pricing based on number of guards</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Payment & Refunds</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>• Payments via M-Pesa, bank transfer, or card</p>
                <p>• No refunds for partial months</p>
                <p>• 14-day refund window for annual plans</p>
                <p>• Failed payments may suspend service</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              <strong>Kenya-Specific:</strong> All prices include applicable VAT. 
              M-Pesa payments processed through secure Safaricom integration.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'data-ownership',
      title: 'Data Rights & Ownership',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">✓ Your Data Belongs to You</h4>
            <p className="text-green-700 text-sm">
              You retain full ownership of all data you input into TagGuard. We're just the custodian.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What You Own</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>• All security data and reports</p>
                <p>• Guard information and schedules</p>
                <p>• Client and location details</p>
                <p>• Custom configurations</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What We Own</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>• TagGuard software and platform</p>
                <p>• Our technology and algorithms</p>
                <p>• Platform improvements and features</p>
                <p>• Aggregated, anonymized insights</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'service-availability',
      title: 'Service Levels & Support',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Service Commitments</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• <strong>99.5% uptime target</strong> (excluding maintenance)</p>
                <p>• Scheduled maintenance with 24-hour notice</p>
                <p>• Data backup every 6 hours</p>
                <p>• Enterprise-grade security measures</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Support Levels</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• <strong>Standard:</strong> Email support (24hr response)</p>
                <p>• <strong>Premium:</strong> Priority support + phone</p>
                <p>• <strong>Enterprise:</strong> Dedicated success manager</p>
                <p>• Emergency support available 24/7</p>
              </div>
            </div>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <p className="text-orange-800 text-sm">
              <strong>Service Credits:</strong> If we fail to meet our 99.5% uptime commitment, 
              you may be eligible for service credits. Contact support for details.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'termination-liability',
      title: 'Termination & Liability',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Account Termination</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• <strong>By You:</strong> Cancel anytime with 30-day notice</p>
                <p>• <strong>By Us:</strong> 30-day notice for non-payment</p>
                <p>• Immediate termination for policy violations</p>
                <p>• Data export available for 90 days after termination</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Liability Limits</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Limited to 12 months of subscription fees</p>
                <p>• No liability for indirect or consequential damages</p>
                <p>• Your insurance remains primary coverage</p>
                <p>• PSIRA compliance is your responsibility</p>
              </div>
            </div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800 text-sm">
              <strong>Important:</strong> TagGuard is a management tool. You remain fully responsible 
              for your security operations, compliance, and guard supervision.
            </p>
          </div>
        </div>
      )
    }
  ];

  const quickFacts = [
    {
      title: "Governing Law",
      description: "These terms are governed by Kenyan law",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      title: "Updates",
      description: "We'll notify you 30 days before any major changes",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM15 17H9a2 2 0 01-2-2V5a2 2 0 012-2h6a2 2 0 012 2v10z" />
        </svg>
      )
    },
    {
      title: "Dispute Resolution",
      description: "Arbitration in Nairobi for business disputes",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      title: "Language",
      description: "English version prevails in case of translation conflicts",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Header />
      
      <main className="max-w-5xl mx-auto py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl mb-8 shadow-2xl">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Clear, fair terms for using TagGuard's security management platform. 
            We believe in transparency and mutual respect in our business relationships.
          </p>
          
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>

        {/* Agreement Summary */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Agreement Summary</h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            By using TagGuard, you agree to these terms. We provide security management software, 
            you use it responsibly and pay your subscription. Simple as that.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fair & Balanced</h3>
              <p className="text-gray-600 text-sm">Terms that protect both parties while enabling great service</p>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Plain English</h3>
              <p className="text-gray-600 text-sm">No confusing legal jargon - just clear, understandable terms</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Kenya-Focused</h3>
              <p className="text-gray-600 text-sm">Designed for Kenyan businesses and PSIRA compliance requirements</p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-6 mb-12">
          {termsSections.map((section) => (
            <div 
              key={section.id}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-400 transition-transform ${activeSection === section.id ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeSection === section.id && (
                <div className="px-8 pb-6">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Facts */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Legal Facts</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickFacts.map((fact, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-2xl">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-3 text-white">
                  {fact.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{fact.title}</h4>
                <p className="text-gray-600 text-sm">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl p-8 text-white shadow-2xl mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Important Reminder</h3>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              TagGuard is a management tool that helps you run your security operations more efficiently. 
              You remain fully responsible for your security services, guard supervision, and PSIRA compliance.
            </p>
          </div>
        </div>

        {/* Contact & Support */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our legal team is here to clarify any questions about these terms. 
              We believe in transparent, fair business relationships.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
              <a 
                href="mailto:legal@tagguard.co.ke"
                className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Legal Team</span>
              </a>
              
              <a 
                href="/contact"
                className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Contact Us</span>
              </a>
            </div>

            <div className="text-center text-sm text-blue-200">
              <p>Email: <a href="mailto:legal@tagguard.co.ke" className="text-white hover:underline font-medium">legal@tagguard.co.ke</a></p>
              <p className="mt-1">Phone: <a href="tel:+254700123456" className="text-white hover:underline font-medium">+254 700 123 456</a></p>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Documents</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/privacy-policy" className="bg-white text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors shadow-md border border-gray-200">
              Privacy Policy
            </a>
            <a href="/cookie-policy" className="bg-white text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors shadow-md border border-gray-200">
              Cookie Policy
            </a>
            <a href="/data-processing" className="bg-white text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors shadow-md border border-gray-200">
              Data Processing Agreement
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
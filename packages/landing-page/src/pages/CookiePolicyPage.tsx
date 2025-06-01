// src/pages/CookiePolicyPage.tsx
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CookiePolicyPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const cookieTypes = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      purpose: 'Authentication, security, and basic functionality',
      retention: 'Session or up to 1 year',
      examples: ['User authentication', 'Security tokens', 'Language preferences'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      purpose: 'Performance monitoring and user experience improvement',
      retention: 'Up to 2 years',
      examples: ['Google Analytics', 'Page views', 'User behavior tracking'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'preferences',
      name: 'Preference Cookies',
      description: 'These cookies remember your choices and personalize your experience.',
      purpose: 'Customization and user preferences',
      retention: 'Up to 1 year',
      examples: ['Theme settings', 'Dashboard layout', 'Notification preferences'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'These cookies track your activity to help us show you relevant advertisements.',
      purpose: 'Targeted advertising and marketing campaigns',
      retention: 'Up to 2 years',
      examples: ['Ad targeting', 'Conversion tracking', 'Retargeting campaigns'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      color: 'from-orange-500 to-red-600'
    }
  ];

  const browserGuides = [
    {
      name: 'Google Chrome',
      url: 'https://support.google.com/chrome/answer/95647',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 6.894a8.048 8.048 0 01-3.991 13.2L7.106 6.894h10.788zM6.447 7.894L12 16.553l-5.553-8.659zm11.106 8.212L12 7.447l5.553 8.659z"/>
        </svg>
      )
    },
    {
      name: 'Mozilla Firefox',
      url: 'https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.001 2.014c.943 0 1.842.132 2.693.374-2.135.754-3.726 2.694-4.095 5.056-.38-1.32-1.504-2.278-2.875-2.278-1.633 0-2.958 1.325-2.958 2.958 0 1.633 1.325 2.958 2.958 2.958.709 0 1.357-.251 1.867-.667.435.956 1.058 1.82 1.834 2.543A9.937 9.937 0 0112 21.986C6.486 21.986 2.014 17.514 2.014 12S6.486 2.014 12 2.014z"/>
        </svg>
      )
    },
    {
      name: 'Safari',
      url: 'https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zM12 3c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9z"/>
        </svg>
      )
    },
    {
      name: 'Microsoft Edge',
      url: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.86 7.86c-.64-3.4-3.57-5.4-6.86-5.4-2.29 0-4.57 1.14-5.71 2.86-.86 1.14-1.43 2.57-1.43 4.28 0 .86.14 1.71.43 2.57C4.86 10.57 2 8.29 2 5.43c0-.86.14-1.71.43-2.57C3.57 1.14 5.86 0 8.14 0c3.29 0 6.22 2 6.86 5.4.64 3.4-.64 6.8-3.43 8.8-1.71 1.14-3.86 1.71-6 1.71-2.14 0-4.29-.57-6-1.71C-.64 12.6-1.93 9.2-1.29 5.8c.64-3.4 3.57-5.4 6.86-5.4 2.29 0 4.57 1.14 5.71 2.86.86 1.14 1.43 2.57 1.43 4.28 0 .86-.14 1.71-.43 2.57 3.43-1.57 6.29-3.86 6.29-6.71 0-.86-.14-1.71-.43-2.57z"/>
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
      
      <main className="max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl mb-8 shadow-2xl">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Cookie Policy
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
            We use cookies to enhance your experience on TagGuard. This policy explains what cookies are, 
            how we use them, and how you can control them.
          </p>
          
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>

        {/* Quick Summary */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Quick Summary
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Transparent Usage</h3>
              <p className="text-gray-600 text-sm">We clearly explain how and why we use cookies on our platform.</p>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Your Control</h3>
              <p className="text-gray-600 text-sm">You have full control over which cookies you accept or reject.</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600 text-sm">All cookies are handled securely with your privacy in mind.</p>
            </div>
          </div>
        </div>

        {/* What Are Cookies */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Cookies are small text files that websites store on your device when you visit them. 
                They help websites remember your preferences and provide a better user experience.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Session Cookies</h4>
                    <p className="text-gray-600 text-sm">Temporary cookies deleted when you close your browser</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Persistent Cookies</h4>
                    <p className="text-gray-600 text-sm">Remain on your device until they expire or are deleted</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Cookie Size</h4>
                <p className="text-gray-600 text-sm">Most cookies are less than 4KB in size - smaller than this text!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cookie Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types of Cookies We Use</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {cookieTypes.map((cookie) => (
              <div 
                key={cookie.id}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${cookie.color}`}></div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${cookie.color} rounded-xl flex items-center justify-center text-white mr-4`}>
                      {cookie.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{cookie.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{cookie.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Purpose:</h4>
                      <p className="text-gray-600 text-sm">{cookie.purpose}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Retention:</h4>
                      <p className="text-gray-600 text-sm">{cookie.retention}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Examples:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cookie.examples.map((example, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Manage Cookies */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Manage Cookies</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Browser Settings</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                You can control cookies through your browser settings. Here are guides for popular browsers:
              </p>
              
              <div className="space-y-3">
                {browserGuides.map((browser, index) => (
                  <a 
                    key={index}
                    href={browser.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
                  >
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 group-hover:text-blue-600 transition-colors">
                      {browser.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{browser.name}</div>
                      <div className="text-gray-500 text-sm">Cookie management guide</div>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cookie Consent</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                When you first visit TagGuard, you'll see a cookie consent banner where you can choose which types of cookies to accept.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-3">Important Note</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  If you disable certain cookies, some features of our platform may not work properly. 
                  Essential cookies cannot be disabled as they're necessary for security and basic functionality.
                </p>
                
                <div className="flex items-center space-x-2 text-blue-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium">You can update your preferences anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third-Party Cookies */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            We work with trusted third-party services that may also set cookies. Here are the main services we use:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h4 className="font-bold text-gray-900 mb-2">Google Analytics</h4>
              <p className="text-gray-600 text-sm mb-3">Helps us understand how users interact with our platform</p>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                Privacy Policy →
              </a>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h4 className="font-bold text-gray-900 mb-2">Intercom</h4>
              <p className="text-gray-600 text-sm mb-3">Powers our customer support chat widget</p>
              <a href="https://www.intercom.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                Privacy Policy →
              </a>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h4 className="font-bold text-gray-900 mb-2">Stripe</h4>
              <p className="text-gray-600 text-sm mb-3">Secure payment processing for subscriptions</p>
              <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                Privacy Policy →
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                question: "Can I use TagGuard without accepting all cookies?",
                answer: "Yes, you can use our basic services with only essential cookies. However, some features like personalized dashboards and analytics may not work optimally."
              },
              {
                question: "How often do you update this cookie policy?",
                answer: "We review and update our cookie policy regularly to ensure it reflects our current practices and complies with applicable laws. Any changes will be communicated through our platform."
              },
              {
                question: "Do you share cookie data with third parties?",
                answer: "We only share anonymized, aggregated data with trusted partners for analytics purposes. We never sell personal data or share individual user information without consent."
              },
              {
                question: "How can I delete cookies already stored on my device?",
                answer: "You can delete stored cookies through your browser settings. This will remove all cookies from TagGuard and other websites you've visited."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleSection(`faq-${index}`)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transition-transform ${expandedSection === `faq-${index}` ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {expandedSection === `faq-${index}` && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Questions About Our Cookie Policy?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our privacy team is here to help. If you have any questions about how we use cookies, 
              please don't hesitate to reach out.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
              <a 
                href="mailto:privacy@tagguard.co.ke"
                className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Privacy Team</span>
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

            <div className="text-center">
              <p className="text-blue-200 text-sm">
                Email: <a href="mailto:privacy@tagguard.co.ke" className="text-white hover:underline font-medium">privacy@tagguard.co.ke</a>
              </p>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Policies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/privacy-policy" className="bg-white text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors shadow-md border border-gray-200">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="bg-white text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors shadow-md border border-gray-200">
              Terms of Service
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

export default CookiePolicyPage;
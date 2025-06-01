// components/EcosystemSection.tsx
import React from 'react';

const EcosystemSection: React.FC = () => (
  <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-3/4 right-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-500"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-xl">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Built for Kenya's Security
          </span>
          <br />
          <span className="text-gray-800">Ecosystem</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          TagGuard serves every stakeholder in Kenya's security industry with tailored solutions for maximum impact.
        </p>
      </div>

      {/* Interactive Hub Design */}
      <div className="relative max-w-6xl mx-auto">
        {/* Central Hub */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <div className="text-white text-center">
              <div className="font-bold text-lg">TagGuard</div>
              <div className="text-xs opacity-90">Platform</div>
            </div>
          </div>
          {/* Pulsing rings */}
          <div className="absolute inset-0 w-32 h-32 rounded-full border-4 border-blue-300 opacity-30 animate-ping"></div>
          <div className="absolute -inset-4 w-40 h-40 rounded-full border-2 border-blue-200 opacity-20 animate-ping delay-300"></div>
        </div>

        {/* Stakeholder Cards - Orbital Layout matching original image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Security Companies */}
          <div className="lg:translate-y-0 lg:-translate-x-8">
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 relative overflow-hidden">
              {/* Background circle */}
              <div className="absolute top-6 left-6 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              
              <div className="pt-24">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Security Companies</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600 leading-relaxed">Reduce supervision costs by 60%</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600 leading-relaxed">Scale operations without proportional staff increase</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600 leading-relaxed">Improve client satisfaction with real-time reporting</p>
                  </div>
                </div>
                
                <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Client Businesses */}
          <div className="lg:translate-y-8">
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-teal-100 relative overflow-hidden">
              {/* Background circle */}
              <div className="absolute top-6 left-6 w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              
              <div className="pt-24">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Client Businesses</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600 leading-relaxed">Direct access to guard performance data</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600 leading-relaxed">Verify security coverage 24/7</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600 leading-relaxed">Streamlined guard booking process</p>
                  </div>
                </div>
                
                <button className="bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors shadow-lg">
                  View Portal
                </button>
              </div>
            </div>
          </div>

          {/* Regulatory Bodies */}
          <div className="lg:translate-y-0 lg:translate-x-8">
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100 relative overflow-hidden">
              {/* Background circle */}
              <div className="absolute top-6 left-6 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
              </div>
              
              <div className="pt-24">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Regulatory Bodies</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600 leading-relaxed">Automated compliance monitoring</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600 leading-relaxed">Real-time industry oversight</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600 leading-relaxed">Simplified license management</p>
                  </div>
                </div>
                
                <button className="bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-700 transition-colors shadow-lg">
                  Explore Features
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Connection Lines - Animated */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 1}}>
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2"/>
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2"/>
            </linearGradient>
          </defs>
          
          {/* Animated connection lines */}
          <g className="animate-pulse">
            <line x1="50%" y1="50%" x2="16.66%" y2="25%" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5"/>
            <line x1="50%" y1="50%" x2="50%" y2="75%" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5"/>
            <line x1="50%" y1="50%" x2="83.33%" y2="25%" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5"/>
          </g>
        </svg>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-xl border border-gray-100">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
            <div className="w-8 h-8 bg-teal-500 rounded-full border-2 border-white"></div>
            <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white"></div>
          </div>
          <span className="text-gray-700 font-medium">Connecting Kenya's Security Ecosystem</span>
        </div>
      </div>
    </div>
  </section>
);

export default EcosystemSection;
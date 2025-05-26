import React from 'react';
import { Button } from '@security-guard/shared';
import './index.css';

const App: React.FC = () => {
  const portals = [
    {
      title: 'National Registry Portal',
      description: 'Government dashboard for managing guard registrations and compliance',
      features: ['Guard Registration Management', 'Company Oversight', 'Compliance Monitoring', 'National Audit Logs'],
      gradient: 'from-blue-500 to-blue-700',
      icon: '🏛️',
      userType: 'Government Officials',
      url: 'https://registry.yourdomain.com'
    },
    {
      title: 'Company Portal',
      description: 'Security company management for operations and client services',
      features: ['Guard Management', 'Shift Scheduling', 'Client Operations', 'Business Analytics'],
      gradient: 'from-green-500 to-green-700',
      icon: '🏢',
      userType: 'Security Companies',
      url: 'https://companies.yourdomain.com'
    },
    {
      title: 'Individual Client App',
      description: 'Property owner interface for booking and monitoring security services',
      features: ['Service Booking', 'Guard Monitoring', 'Real-time Tracking', 'Payment Management'],
      gradient: 'from-purple-500 to-purple-700',
      icon: '🏠',
      userType: 'Property Owners',
      url: 'https://app.yourdomain.com'
    }
  ];

  const features = [
    { icon: '📡', title: 'RFID Tracking', description: 'Real-time guard location with RFID checkpoints' },
    { icon: '📊', title: 'Live Analytics', description: 'Real-time dashboards and performance metrics' },
    { icon: '📱', title: 'Mobile Apps', description: 'Native mobile apps for guards and managers' },
    { icon: '🔒', title: 'Secure Platform', description: 'Multi-tenant security with data isolation' },
    { icon: '⚡', title: 'Real-time Updates', description: 'Instant notifications and live data sync' },
    { icon: '📈', title: 'Advanced Reports', description: 'Comprehensive analytics and custom reporting' }
  ];

  const stats = [
    { number: '12,500+', label: 'Registered Guards' },
    { number: '156', label: 'Security Companies' },
    { number: '2,400+', label: 'Protected Properties' },
    { number: '99.8%', label: 'System Uptime' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🎯</span>
              </div>
              <h1 className="ml-3 text-2xl font-bold text-gray-900">
                Demo Portal
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline">Contact Sales</Button>
              <Button variant="primary" className="bg-orange-600 hover:bg-orange-700">Schedule Demo</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="coming-soon-badge mb-4 inline-flex">
              🚀 Interactive Demonstrations Coming Soon
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Experience SecureGuard Pro
            <span className="text-orange-600"> In Action</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Explore interactive demonstrations of our comprehensive security guard management platform. 
            See how different user types interact with the system in real-world scenarios.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="primary" className="bg-orange-600 hover:bg-orange-700">
              Get Early Access
            </Button>
            <Button size="lg" variant="outline">
              Watch Preview Video
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-600">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Previews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three Specialized Portals
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each portal is designed specifically for different user types with tailored interfaces and features
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {portals.map((portal, index) => (
              <div key={index} className="demo-card">
                <div className={`portal-preview ${portal.gradient} h-48 mb-6`}>
                  <div className="text-center">
                    <div className="text-4xl mb-3">{portal.icon}</div>
                    <h4 className="text-xl font-bold">{portal.title}</h4>
                    <p className="text-sm opacity-90 mt-2">{portal.userType}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs">
                      Coming Soon
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{portal.description}</p>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-2">Key Features:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {portal.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" disabled>
                      Preview Demo
                    </Button>
                    <Button variant="primary" className="flex-1 bg-orange-600 hover:bg-orange-700">
                      Try Live
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platform Features
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology and features that will be showcased in the interactive demonstrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Notified When Demos Launch
          </h3>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Be the first to experience our interactive demonstrations. Enter your email to get early access.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-orange-300 focus:outline-none"
              />
              <Button variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                Notify Me
              </Button>
            </div>
          </div>
          
          <p className="text-orange-100 mt-4 text-sm">
            Join 500+ people already on the waiting list
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 bg-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">🎯</span>
                </div>
                <span className="ml-2 text-xl font-bold">Demo Portal</span>
              </div>
              <p className="text-gray-400">
                Interactive demonstrations of the complete SecureGuard Pro platform.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://yourdomain.com" className="hover:text-white transition-colors">Main Website</a></li>
                <li><a href="https://registry.yourdomain.com" className="hover:text-white transition-colors">Registry Portal</a></li>
                <li><a href="https://companies.yourdomain.com" className="hover:text-white transition-colors">Company Portal</a></li>
                <li><a href="https://app.yourdomain.com" className="hover:text-white transition-colors">Client App</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: demo@yourdomain.com</li>
                <li>Sales: +1 (555) 123-4567</li>
                <li>Support: support@yourdomain.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 SecureGuard Pro Demo Portal. Interactive demonstrations coming soon.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
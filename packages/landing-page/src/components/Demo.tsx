import React, { useState } from 'react';
import { 
  Shield, 
  Smartphone, 
  Users, 
  Building, 
  MapPin, 
  Bell, 
  BarChart3, 
  Eye, 
  Clock, 
  Database,
  Zap,
  CheckCircle,
  Play,
  Monitor,
  Globe,
  Lock
} from 'lucide-react';

type DemoType = 'dashboard' | 'mobile' | 'client' | 'regulatory';

interface DemoTab {
  id: DemoType;
  name: string;
  icon: React.ReactNode;
  description: string;
}

interface DemoContent {
  title: string;
  subtitle: string;
  image: string;
  highlights: string[];
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Demo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<DemoType>('dashboard');

  const demoTabs: DemoTab[] = [
    {
      id: 'dashboard',
      name: 'Company Dashboard',
      icon: <Monitor className="w-5 h-5" />,
      description: 'Centralized command center for security operations'
    },
    {
      id: 'mobile',
      name: 'Guard Mobile App',
      icon: <Smartphone className="w-5 h-5" />,
      description: 'Real-time mobile application for field operations'
    },
    {
      id: 'client',
      name: 'Client Portal',
      icon: <Users className="w-5 h-5" />,
      description: 'Direct client access to security data and reports'
    },
    {
      id: 'regulatory',
      name: 'Regulatory Board',
      icon: <Building className="w-5 h-5" />,
      description: 'Compliance monitoring and industry oversight'
    }
  ];

  const features: Feature[] = [
    {
      icon: <MapPin className="w-6 h-6 text-blue-500" />,
      title: 'Real-time Guard Tracking',
      description: 'Live tracking on interactive Kenya map with patrol routes'
    },
    {
      icon: <Bell className="w-6 h-6 text-orange-500" />,
      title: 'Instant Alert System',
      description: 'Immediate notifications for missed check-ins and emergencies'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-500" />,
      title: 'Performance Analytics',
      description: 'Detailed metrics and automated reporting for insights'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: 'AI-Powered Detection',
      description: 'GenAI anomaly detection for enhanced security monitoring'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: 'Enterprise Security',
      description: '256-bit encryption with ISO 27001 certification'
    },
    {
      icon: <Database className="w-6 h-6 text-indigo-500" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable AWS/Azure deployment with 99.9% uptime'
    }
  ];

  const demoContent: Record<DemoType, DemoContent> = {
    dashboard: {
      title: 'Complete Command Center',
      subtitle: 'Monitor your entire security operation from a single dashboard',
      image: '/api/placeholder/600/400',
      highlights: [
        'Real-time guard locations on interactive Kenya map',
        'Instant alerts for missed checkpoints or emergencies', 
        'Automated report generation and performance metrics',
        'Staff management and shift scheduling tools'
      ]
    },
    mobile: {
      title: 'Intuitive Guard Interface',
      subtitle: 'Equip your guards with a user-friendly mobile app for RFID scanning, check-in confirmations, and an emergency alert button',
      image: '/api/placeholder/600/400',
      highlights: [
        'RFID scanning animation for checkpoint verification',
        'Check-in confirmation flow with real-time updates',
        'Emergency alert button with instant dispatch',
        'Offline capability for remote location operations'
      ]
    },
    client: {
      title: 'Transparent Client Access',
      subtitle: 'Provide clients with a clean dashboard to view guard assignments, receive real-time status updates, and report incidents',
      image: '/api/placeholder/600/400',
      highlights: [
        'Guard assignment interface with detailed scheduling',
        'Real-time status updates and location tracking',
        'Incident reporting system with photo documentation',
        'Performance analytics and coverage verification'
      ]
    },
    regulatory: {
      title: 'Official Regulatory Oversight',
      subtitle: 'Enable regulatory bodies with tools for guard license management, company oversight, and compliance tracking',
      image: '/api/placeholder/600/400',
      highlights: [
        'Guard license management and verification system',
        'Company oversight tools for industry monitoring',
        'Compliance tracking with automated reporting',
        'Real-time industry standards enforcement'
      ]
    }
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See TagGuard in Action
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience our comprehensive security management ecosystem built specifically 
            for Kenya's unique security landscape
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>No registration required</span>
            <span className="text-gray-300">•</span>
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Full feature preview</span>
            <span className="text-gray-300">•</span>
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Sample data included</span>
          </div>
        </div>

        {/* Demo Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {demoTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveDemo(tab.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeDemo === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Active Demo Content */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {demoContent[activeDemo].title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8">
                    {demoContent[activeDemo].subtitle}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {demoContent[activeDemo].highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    <Play className="w-4 h-4" />
                    Try Live Demo
                  </button>
                  <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    <Eye className="w-4 h-4" />
                    Watch Video Tour
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 lg:p-12 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-2xl p-4 max-w-md w-full">
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <Monitor className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 font-medium">
                        Interactive {demoContent[activeDemo].title}
                      </p>
                      <div className="mt-4 flex justify-center">
                        <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                        <span className="ml-2 text-sm text-green-600 font-medium">Live Demo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Platform Highlights
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature: Feature, index: number) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Demo Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Smart Alerting with AI
              </h3>
              <p className="text-lg mb-8 text-purple-100">
                Experience our GenAI-powered anomaly detection. Input sample patrol data 
                to see how TagGuard identifies potential security issues.
              </p>
              
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Try Anomaly Detection
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-white/20 rounded p-3">
                    <strong>Sample Input:</strong> Guard G101 missed Checkpoint C at 02:45 AM
                  </div>
                  <div className="bg-red-500/30 rounded p-3 border border-red-300">
                    <strong>AI Analysis:</strong> Anomaly detected - Pattern suggests potential security incident near Checkpoint C
                  </div>
                </div>
              </div>

              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Test AI Detection
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-center">
                <Zap className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
                <h4 className="font-semibold mb-2">GenAI Analytics Engine</h4>
                <p className="text-purple-100 text-sm mb-4">
                  Advanced pattern recognition for security anomaly detection
                </p>
                <div className="flex justify-center items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Processing patrol data...</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Standards */}
        <div className="bg-gray-900 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <Lock className="w-16 h-16 mx-auto mb-6 text-green-400" />
            <h3 className="text-3xl font-bold mb-4">
              Enterprise Security Standards
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Military-grade security protecting your sensitive data with industry-leading standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">256-bit</div>
              <div className="text-sm text-gray-300">AES Encryption</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">ISO 27001</div>
              <div className="text-sm text-gray-300">Certified</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              'End-to-end encryption for all data transmission',
              'Secure cloud storage with regular backups', 
              'Compliance with Kenya Data Protection Act',
              'Regular security audits and penetration testing',
              'Multi-factor authentication for all users',
              'Role-based access control and permissions'
            ].map((item: string, index: number) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Security Operations?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo to see how TagGuard can revolutionize your 
            security management with cutting-edge technology built for Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
              Schedule Personal Demo
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-lg">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
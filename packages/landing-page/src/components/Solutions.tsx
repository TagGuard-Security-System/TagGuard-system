import React, { useState } from 'react';
import { Shield, Tag, Monitor, Smartphone, CheckCircle, Eye, Play, Activity, Users, AlertTriangle, BarChart3, Settings } from 'lucide-react';
import bgImage from '../assets/security-bg.png'; // Adjust the path as necessary

const SolutionOverview: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const solutionPillars = [
    {
      title: 'RFID Patrol Verification',
      subtitle: 'Advanced patrol point verification system',
      description: 'Guards scan tags at patrol points. Real-time location confirmation and activity logging through secure RFID technology.',
      features: ['Real-time location authentication', 'Automated patrol logging', 'Secure RFID technology'],
      icon: Tag,
      color: 'red',
      gradient: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-800',
      buttonColor: 'bg-red-600 hover:bg-red-700',
      animation: 'pulse'
    },
    {
      title: 'Centralized Dashboard',
      subtitle: 'Centralized security operations center',
      description: 'Monitor all sites from HQ. Comprehensive control center with real-time alerts, visual maps, and performance analytics.',
      features: ['Multi-site monitoring', 'Real-time alerts & reports', 'Performance analytics'],
      icon: Monitor,
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-800',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      animation: 'bounce'
    },
    {
      title: 'Multi-Device Integration',
      subtitle: 'Compatible with all security devices',
      description: 'Smartphones, voice recorders, cameras. Flexible hardware compatibility with existing security equipment and technologies.',
      features: ['Smartphone integration', 'Voice recorder compatibility', 'Camera system sync'],
      icon: Smartphone,
      color: 'gray',
      gradient: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      textColor: 'text-gray-800',
      buttonColor: 'bg-gray-600 hover:bg-gray-700',
      animation: 'wiggle'
    },
    {
      title: 'Automated Compliance',
      subtitle: 'Automated regulatory compliance',
      description: 'Regulatory board integration. Streamlined licensing verification and automated compliance tracking for regulatory bodies.',
      features: ['Guard licensing verification', 'Automated compliance tracking', 'Regulatory reporting'],
      icon: CheckCircle,
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800',
      buttonColor: 'bg-green-600 hover:bg-green-700',
      animation: 'wiggle'
    }
  ];

  const getAnimationClass = (animation: string, isActive: boolean) => {
    if (!isActive) return '';
    switch (animation) {
      case 'pulse': return 'animate-pulse';
      case 'bounce': return 'animate-bounce';
      case 'spin': return 'animate-spin';
      case 'wiggle': return 'animate-pulse';
      default: return '';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
        aria-hidden="true"
        role="presentation"
        data-testid="background-image"
      ></div>
     
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Digital Supervision Revolution
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            TagGuard <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Professional Security Management Platform</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform your security operations with intelligent RFID monitoring that eliminates 
            the need for physical supervisors while improving coverage and response times.
          </p>
        </div>

        {/* Solution Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutionPillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            const isActive = activeCard === index;
            
            return (
              <div 
                key={index}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${isActive ? 'ring-4 ring-blue-200 scale-105' : ''}`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Card Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 ${pillar.bgColor} ${pillar.borderColor} border-2 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent 
                    className={`w-8 h-8 ${pillar.textColor} ${getAnimationClass(pillar.animation, isActive)}`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 font-medium">
                  {pillar.subtitle}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {pillar.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

              

                {/* Hover Indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integrated Ecosystem Section */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              INTEGRATED SECURITY ECOSYSTEM
            </h3>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              See how TagGuard creates a unified security command structure
            </p>

            {/* Ecosystem Icons */}
            <div className="flex justify-center items-center space-x-8 mb-12">
              <div className="bg-red-600 p-4 rounded-xl">
                <Tag className="w-8 h-8 text-white" />
              </div>
              <div className="bg-blue-600 p-4 rounded-xl">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <div className="bg-red-500 p-4 rounded-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="bg-gray-600 p-4 rounded-xl">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <div className="bg-green-600 p-4 rounded-xl">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                <Activity className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-colors duration-300 flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600">System Uptime</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">75%</div>
            <div className="text-gray-600">Cost Reduction</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Real-time Monitoring</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default SolutionOverview;
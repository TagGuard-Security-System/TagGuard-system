import React, { useState } from 'react';
import { 
  MapPin, 
  Bell, 
  Smartphone, 
  FileText, 
  Users, 
  Shield, 
  DollarSign, 
  Zap, 
  Headphones,
  CheckCircle,
  Clock,
  AlertTriangle,
  BarChart3,
  Settings,
  Globe,
  Phone
} from 'lucide-react';

const Features: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      title: 'Real-Time Tracking',
      description: 'GPS + RFID combination provides accurate location updates and patrol route verification.',
      icon: MapPin,
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      details: [
        'GPS + RFID combination',
        'Live location updates', 
        'Patrol route verification',
        'Historical tracking data'
      ]
    },
    {
      title: 'Smart Alerts',
      description: 'Instant notifications for missed check-ins, emergency situations, and performance anomalies.',
      icon: Bell,
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      details: [
        'Missed checkpoint alerts',
        'Emergency notifications',
        'Performance warnings',
        'Customizable triggers'
      ]
    },
    {
      title: 'Multi-Device Support',
      description: 'Compatible with smartphones, basic phones, voice recorders, and security cameras.',
      icon: Smartphone,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      details: [
        'Android & iOS apps',
        'Basic phone SMS support',
        'Voice recorders, cameras',
        'Hardware integrations'
      ]
    },
    {
      title: 'Automated Reporting',
      description: 'Generate daily, weekly, and monthly reports with custom report builder and export capabilities.',
      icon: FileText,
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
      details: [
        'Daily/weekly/monthly reports',
        'Custom report builder',
        'PDF, Excel, CSV exports',
        'Scheduled delivery'
      ]
    },
    {
      title: 'Client Self-Service',
      description: 'Empower clients with direct guard booking, performance monitoring, and incident tracking.',
      icon: Users,
      color: 'bg-teal-500',
      hoverColor: 'hover:bg-teal-600',
      details: [
        'Direct guard booking',
        'Performance dashboards',
        'Incident reporting',
        'Real-time updates'
      ]
    },
    {
      title: 'Regulatory Integration',
      description: 'Seamless integration with Kenya\'s regulatory framework for automated license verification and compliance.',
      icon: Shield,
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600',
      details: [
        'License verification',
        'Compliance tracking',
        'Board communications',
        'Automated renewals'
      ]
    },
    {
      title: 'Cost Optimization',
      description: 'Dramatically reduce supervision staff, travel expenses, and operational inefficiencies.',
      icon: DollarSign,
      color: 'bg-yellow-500',
      hoverColor: 'hover:bg-yellow-600',
      details: [
        'Reduce supervision staff',
        'Lower travel expenses',
        'Improved efficiency',
        'ROI tracking'
      ]
    },
    {
      title: 'Scalable Platform',
      description: 'Add unlimited sites with flexible pricing and robust cloud-based infrastructure.',
      icon: Zap,
      color: 'bg-indigo-500',
      hoverColor: 'hover:bg-indigo-600',
      details: [
        'Add unlimited sites',
        'Flexible pricing',
        'Cloud-based infrastructure',
        'Auto-scaling capabilities'
      ]
    },
    {
      title: '24/7 Support',
      description: 'Local Kenya support team with comprehensive training and ongoing system maintenance.',
      icon: Headphones,
      color: 'bg-pink-500',
      hoverColor: 'hover:bg-pink-600',
      details: [
        'Local Kenya support',
        'Training included',
        'System maintenance',
        'Emergency response'
      ]
    }
  ];

  const comparisonData = [
    { feature: 'Real-time monitoring', traditional: false, tagguard: true },
    { feature: 'Automated reporting', traditional: false, tagguard: true },
    { feature: 'Cost efficiency', traditional: 'Low', tagguard: 'High' },
    { feature: 'Scalability', traditional: 'Limited', tagguard: 'Unlimited' },
    { feature: 'Compliance tracking', traditional: 'Manual', tagguard: 'Automated' }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-blue-600">TagGuard</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive security management features designed specifically for Kenya's 
            unique security challenges and opportunities with cutting-edge technology and local expertise.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 ${
                  isHovered ? 'transform -translate-y-2 scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Icon Header */}
                <div className={`${feature.color} ${feature.hoverColor} p-6 transition-colors duration-300`}>
                  <IconComponent className="w-8 h-8 text-white mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Feature Details */}
                  <div className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color.replace('bg-', 'from-')} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Feature Comparison
            </h3>
            <p className="text-lg text-gray-600">
              See how TagGuard outperforms traditional security management
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold text-red-600">Traditional</th>
                  <th className="text-center py-4 px-6 font-semibold text-green-600">TagGuard</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.traditional === 'boolean' ? (
                        row.traditional ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-red-500 text-xl">×</span>
                        )
                      ) : (
                        <span className="text-red-500 font-medium">{row.traditional}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.tagguard === 'boolean' ? (
                        row.tagguard ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-red-500 text-xl">×</span>
                        )
                      ) : (
                        <span className="text-green-500 font-medium">{row.tagguard}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Experience These Features?
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Join leading security companies already using TagGuard to transform their operations.
          </p>
          <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
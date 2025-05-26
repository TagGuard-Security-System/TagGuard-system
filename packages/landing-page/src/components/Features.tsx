import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'RFID Tracking',
      description: 'Real-time guard location tracking with RFID checkpoints',
      icon: '📡'
    },
    {
      title: 'Live Monitoring',
      description: 'Real-time dashboards and live guard status updates',
      icon: '📊'
    },
    {
      title: 'Compliance Management',
      description: 'Automated compliance tracking and regulatory reporting',
      icon: '📋'
    },
    {
      title: 'Multi-Tenant Security',
      description: 'Secure data isolation for different organizations',
      icon: '🔒'
    },
    {
      title: 'Mobile Apps',
      description: 'Native mobile apps for guards and field operations',
      icon: '📱'
    },
    {
      title: 'Analytics & Reports',
      description: 'Comprehensive analytics and customizable reporting',
      icon: '📈'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced technology stack designed for security guard management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
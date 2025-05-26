import React from 'react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: 'National Registry Portal',
      description: 'Centralized guard registration and compliance monitoring for government agencies',
      features: ['Guard verification & approval', 'Company compliance tracking', 'National audit logs', 'Regulatory reporting'],
      icon: '🏛️',
      color: 'blue',
      url: 'https://registry.yourdomain.com'
    },
    {
      title: 'Security Company Portal',
      description: 'Complete guard management, scheduling, and client service platform',
      features: ['Guard scheduling & assignments', 'Client management', 'Real-time operations', 'Performance analytics'],
      icon: '🏢',
      color: 'green',
      url: 'https://companies.yourdomain.com'
    },
    {
      title: 'Individual Client App',
      description: 'Easy guard booking, real-time monitoring, and property security management',
      features: ['Guard booking & requests', 'Live property monitoring', 'Incident reporting', 'Service feedback'],
      icon: '🏠',
      color: 'purple',
      url: 'https://app.yourdomain.com'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'green': return 'bg-green-50 border-green-200 text-green-800';
      case 'purple': return 'bg-purple-50 border-purple-200 text-purple-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getButtonClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'btn-portal btn-portal-blue';
      case 'green': return 'btn-portal btn-portal-green';
      case 'purple': return 'btn-portal btn-portal-purple';
      default: return 'btn-portal btn-portal-blue';
    }
  };

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Three Specialized Solutions
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform serves different user types with tailored interfaces and features
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 rounded-lg ${getColorClasses(solution.color)} flex items-center justify-center text-2xl mb-6`}>
                {solution.icon}
              </div>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h4>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              
              <ul className="space-y-2 mb-8">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href={solution.url}
                className={getButtonClasses(solution.color)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Access Portal
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
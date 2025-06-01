// components/PricingSection.tsx
import React from 'react';
import { Shield, Users, Settings, CheckCircle, Phone, Mail } from 'lucide-react';
import bgImage from '../assets/pricing-bg.jpeg'; // Adjust the path as necessary

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      description: 'Perfect for small security companies',
      price: 'KES 5,000',
      period: '/month',
      guards: 'Up to 50 guards',
      features: [
        'Basic RFID monitoring',
        'Standard reporting',
        'Mobile app access',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      icon: <Users className="w-8 h-8 text-teal-600" />,
      description: 'Most popular for growing companies',
      price: 'KES 15,000',
      period: '/month',
      guards: 'Up to 200 guards',
      features: [
        'Advanced analytics',
        'Custom integrations',
        'Priority support',
        'Advanced reporting',
        'Client portal access',
       
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      icon: <Settings className="w-8 h-8 text-purple-600" />,
      description: 'For large security operations',
      price: 'Custom',
      period: 'pricing',
      guards: 'Unlimited guards',
      features: [
        'Full customization',
        'Dedicated support',
        'White-label options',
        'Advanced integrations',
        'Custom training',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  return (
    <section
      id="pricing"
      className="section-container bg-gradient-to-br from-gray-50 to-gray-100 relative"
      style={{
        backgroundImage: "url('" + bgImage + "')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-80 pointer-events-none" aria-hidden="true"></div>
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Flexible Pricing for Every Security Company
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your company size and grow as you scale. All plans include 
            core RFID monitoring and basic support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-teal-500 scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Icon and Name */}
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-3 rounded-full ${
                    plan.name === 'Starter' ? 'bg-blue-100' :
                    plan.name === 'Professional' ? 'bg-teal-100' : 'bg-purple-100'
                  }`}>
                    {plan.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className={`text-4xl font-bold ${
                      plan.name === 'Enterprise' ? 'text-purple-600' : 'text-gray-900'
                    }`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.guards}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Contact Sales'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our enterprise solutions are tailored to your specific security requirements. 
            Get in touch with our sales team to discuss your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+254700000000"
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Sales: +254 700 000 000
            </a>
            <a
              href="mailto:sales@securitysystem.com"
              className="flex items-center px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              sales@securitysystem.com
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">Trusted by 500+ security companies across Kenya</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="w-16 h-8 bg-gray-300 rounded flex items-center justify-center">
              <span className="text-xs font-semibold">LOGO</span>
            </div>
            <div className="w-16 h-8 bg-gray-300 rounded flex items-center justify-center">
              <span className="text-xs font-semibold">LOGO</span>
            </div>
            <div className="w-16 h-8 bg-gray-300 rounded flex items-center justify-center">
              <span className="text-xs font-semibold">LOGO</span>
            </div>
            <div className="w-16 h-8 bg-gray-300 rounded flex items-center justify-center">
              <span className="text-xs font-semibold">LOGO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
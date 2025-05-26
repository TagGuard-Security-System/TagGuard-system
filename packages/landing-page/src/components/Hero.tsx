import React from 'react';
import { Button } from '@security-guard/shared';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Complete Security Guard
            <span className="text-blue-600"> Management System</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Advanced RFID-based security guard management platform serving 
            <span className="font-semibold"> National Registry</span>, 
            <span className="font-semibold"> Security Companies</span>, and 
            <span className="font-semibold"> Individual Clients</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="primary">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">12,500+</div>
              <div className="text-gray-600">Registered Guards</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">156</div>
              <div className="text-gray-600">Security Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">2,400+</div>
              <div className="text-gray-600">Protected Properties</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
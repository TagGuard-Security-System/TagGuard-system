import React from 'react';

const Demo: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          See It In Action
        </h3>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Experience our platform with interactive demonstrations of all three portals
        </p>
        
        <a
          href="https://demo.yourdomain.com"
          className="btn-portal btn-portal-orange"
          target="_blank"
          rel="noopener noreferrer"
        >
          Launch Interactive Demo
        </a>
        
        <p className="text-blue-100 mt-4 text-sm">
          No registration required • Full feature preview • Sample data included
        </p>
      </div>
    </section>
  );
};

export default Demo;
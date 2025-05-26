import React from 'react';
import { Button } from '@security-guard/shared';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🛡️</span>
            </div>
            <h1 className="ml-3 text-2xl font-bold text-gray-900">
              SecureGuard Pro
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#solutions" className="text-gray-700 hover:text-blue-600 transition-colors">Solutions</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline">Login</Button>
            <Button variant="primary">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
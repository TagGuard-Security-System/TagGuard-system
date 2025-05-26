import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Features from './components/Features';
import Demo from './components/Demo';
import Footer from './components/Footer';
import './index.css';

// Home Page Component
const HomePage: React.FC = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <Solutions />
    <Features />
    <Demo />
    <Footer />
  </div>
);

// About Page Component
const AboutPage: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    <Header />
    <main className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About SecureGuard Pro</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-6">
          SecureGuard Pro is a comprehensive security guard management platform that revolutionizes 
          how security operations are managed across different organizational levels.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          To provide a unified platform that serves National Registry authorities, Security Companies, 
          and Individual Clients with specialized tools tailored to their unique needs.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Real-time RFID-based guard tracking and monitoring</li>
          <li>Comprehensive compliance management and regulatory reporting</li>
          <li>Multi-tenant architecture ensuring data security and privacy</li>
          <li>Mobile-first design for field operations</li>
          <li>Advanced analytics and customizable reporting</li>
        </ul>
      </div>
    </main>
    <Footer />
  </div>
);

// Contact Page Component
const ContactPage: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    <Header />
    <main className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900">Sales Inquiries</h3>
              <p className="text-gray-600">Email: sales@yourdomain.com</p>
              <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Technical Support</h3>
              <p className="text-gray-600">Email: support@yourdomain.com</p>
              <p className="text-gray-600">Phone: +1 (555) 123-4568</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">General Information</h3>
              <p className="text-gray-600">Email: info@yourdomain.com</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Send us a message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows={4} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

// Main App with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
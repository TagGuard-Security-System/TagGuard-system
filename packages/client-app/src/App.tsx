import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout, clientNavigation } from '@security-guard/shared';
import Dashboard from './pages/Dashboard';
import Booking from './pages/Booking';
import Guards from './pages/Guards';
import Monitoring from './pages/Monitoring';
import './index.css';

// Placeholder pages for remaining routes
const Incidents = () => (
  <div>
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Incidents</h2>
    <p className="text-gray-600">View and manage security incidents at your properties</p>
    <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
      <p className="text-purple-800">This page will contain incident reporting and tracking.</p>
    </div>
  </div>
);

const Billing = () => (
  <div>
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Billing & Payments</h2>
    <p className="text-gray-600">Manage your security service payments and invoices</p>
    <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
      <p className="text-green-800">This page will contain billing management and payment history.</p>
    </div>
  </div>
);

const Feedback = () => (
  <div>
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Feedback</h2>
    <p className="text-gray-600">Rate your security guards and provide service feedback</p>
    <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
      <p className="text-blue-800">This page will contain rating and feedback systems.</p>
    </div>
  </div>
);

const Account = () => (
  <div>
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Account Settings</h2>
    <p className="text-gray-600">Manage your profile and account preferences</p>
    <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
      <p className="text-gray-800">This page will contain account settings and profile management.</p>
    </div>
  </div>
);

// Registration/Onboarding component
const RegisterPage = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="h-16 w-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">🏠</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome to SecureGuard Pro</h1>
        <p className="text-gray-600 mt-2">Professional security services for your property</p>
      </div>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Doe"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            required
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="john@example.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            required
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Property Address</label>
          <input
            type="text"
            required
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="123 Main Street, City, State 12345"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Property Type</label>
          <select className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500">
            <option value="">Select property type</option>
            <option value="residential">Residential (Home/Apartment)</option>
            <option value="commercial">Commercial (Office/Store)</option>
            <option value="industrial">Industrial (Warehouse/Factory)</option>
            <option value="mixed">Mixed Use</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            required
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-900">
            I agree to the <span className="text-purple-600">Terms of Service</span> and <span className="text-purple-600">Privacy Policy</span>
          </label>
        </div>
        
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
        >
          Create Account & Get Started
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Already have an account? <span className="font-medium text-purple-600 cursor-pointer">Sign in here</span>
        </p>
        <div className="mt-4 text-xs text-gray-500">
          <p>🔒 Your information is secure and encrypted</p>
          <p>📞 24/7 customer support available</p>
        </div>
      </div>
    </div>
  </div>
);

// Login component for existing users
const LoginPage = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="h-16 w-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">🏠</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
        <p className="text-gray-600 mt-2">Sign in to manage your security services</p>
      </div>
      
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            required
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            required
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>
          <div className="text-sm">
            <span className="text-purple-600 cursor-pointer">Forgot password?</span>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
        >
          Sign In
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account? <span className="font-medium text-purple-600 cursor-pointer">Sign up here</span>
        </p>
        <div className="mt-4 text-xs text-gray-500">
          <p>Demo Login: demo@client.com</p>
          <p>Password: demo123</p>
        </div>
      </div>
    </div>
  </div>
);

// Main app component with routing
function App() {
  // For demo purposes, we'll simulate being logged in
  const isLoggedIn = true; // In real app, this would come from auth context
  const isNewUser = false; // Set to true to show registration flow

  if (!isLoggedIn) {
    return isNewUser ? <RegisterPage /> : <LoginPage />;
  }

  return (
    <Router>
      <DashboardLayout
        title="SecureGuard Pro"
        navigation={clientNavigation}
        userRole="Property Owner"
        userName="Sarah Chen"
      >
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/guards" element={<Guards />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/incidents" element={<Incidents />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
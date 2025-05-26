import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout, companyNavigation } from '@security-guard/shared';
import Dashboard from './pages/Dashboard';
import Guards from './pages/Guards';
import Scheduling from './pages/Scheduling';
import Operations from './pages/Operations';
import Clients from './pages/Clients';
import './index.css';

// Placeholder pages for remaining routes
const Reports = () => (
  <div>
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Reports & Analytics</h2>
    <p className="text-gray-600">Generate comprehensive business reports</p>
    <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
      <p className="text-blue-800">This page will contain report generation tools and business analytics.</p>
    </div>
  </div>
);

const Settings = () => (
  <div>
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Company Settings</h2>
    <p className="text-gray-600">Manage company profile and preferences</p>
    <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
      <p className="text-purple-800">This page will contain company settings and configuration options.</p>
    </div>
  </div>
);

// Login component for company portal
const LoginPage = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="h-16 w-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">🏢</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Company Portal</h1>
        <p className="text-gray-600 mt-2">Access your security company dashboard</p>
      </div>
      
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Email</label>
          <input
            type="email"
            required
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="admin@securemax.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            required
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-900">Keep me signed in</label>
        </div>
        
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
        >
          Access Company Portal
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          🔒 Secure access for registered security companies
          <br />
          Need help? Contact: <span className="font-medium">support@secureguard.com</span>
        </p>
        <div className="mt-4 text-xs text-gray-500">
          <p>Demo Login: admin@securemax.com</p>
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

  if (!isLoggedIn) {
    return <LoginPage />;
  }

  return (
    <Router>
      <DashboardLayout
        title="SecureMax Ltd Portal"
        navigation={companyNavigation}
        userRole="Company Administrator"
        userName="Michael Rodriguez"
      >
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/guards" element={<Guards />} />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
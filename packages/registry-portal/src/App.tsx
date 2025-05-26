import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout, registryNavigation } from '@security-guard/shared';
import Dashboard from './pages/Dashboard';
import Guards from './pages/Guards';
import Companies from './pages/Companies';
import Audit from './pages/Audit';
import './index.css';

// Placeholder pages for remaining routes
const Regulations = () => (
  <div>
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Regulations & Policies</h2>
    <p className="text-gray-600">Manage regulatory policies and compliance requirements</p>
    <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
      <p className="text-blue-800">This page will contain regulation management tools.</p>
    </div>
  </div>
);

const Reports = () => (
  <div>
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Reports & Analytics</h2>
    <p className="text-gray-600">Generate comprehensive reports and analytics</p>
    <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
      <p className="text-green-800">This page will contain report generation tools.</p>
    </div>
  </div>
);

const Admin = () => (
  <div>
    <h2 className="text-3xl font-bold text-gray-900 mb-4">System Administration</h2>
    <p className="text-gray-600">Manage system settings and user access</p>
    <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
      <p className="text-purple-800">This page will contain system administration tools.</p>
    </div>
  </div>
);

// Login component for registry portal
const LoginPage = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="h-16 w-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">🏛️</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">National Registry Portal</h1>
        <p className="text-gray-600 mt-2">Secure access for authorized personnel only</p>
      </div>
      
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Government Email</label>
          <input
            type="email"
            required
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="admin@registry.gov"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Secure Password</label>
          <input
            type="password"
            required
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-900">Remember this device</label>
        </div>
        
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          Access Registry Portal
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          🔒 Access restricted to authorized registry personnel
          <br />
          For support contact: <span className="font-medium">support@registry.gov</span>
        </p>
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
        title="National Registry Portal"
        navigation={registryNavigation}
        userRole="Registry Administrator"
        userName="Sarah Johnson"
      >
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/guards" element={<Guards />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/regulations" element={<Regulations />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
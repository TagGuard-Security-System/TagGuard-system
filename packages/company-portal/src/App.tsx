import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout, companyNavigation } from '@security-guard/shared';
import Dashboard from './pages/Dashboard';
import Guards from './pages/Guards';
import Scheduling from './pages/Scheduling';
import Operations from './pages/Operations';
import Clients from './pages/Clients';
import './index.css';

// Enhanced placeholder pages for remaining routes
const Reports = () => (
  <div className="space-y-6">
    <div className="section-header">
      <div>
        <h2 className="heading-primary">Reports & Analytics</h2>
        <p className="text-muted">Generate comprehensive business insights and performance reports</p>
      </div>
    </div>
    
    <div className="summary-card hover-lift">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white text-2xl">📊</span>
        </div>
        <div>
          <h3 className="heading-secondary">Advanced Analytics Suite</h3>
          <p className="text-muted">Comprehensive reporting tools for business intelligence and operational insights</p>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="data-item">
          <span className="data-label">Performance Metrics</span>
          <span className="badge-success">Ready</span>
        </div>
        <div className="data-item">
          <span className="data-label">Financial Reports</span>
          <span className="badge-primary">Available</span>
        </div>
        <div className="data-item">
          <span className="data-label">Operational Analytics</span>
          <span className="badge-info">In Development</span>
        </div>
      </div>
    </div>
  </div>
);

const Settings = () => (
  <div className="space-y-6">
    <div className="section-header">
      <div>
        <h2 className="heading-primary">Company Settings</h2>
        <p className="text-muted">Manage company profile, preferences, and system configuration</p>
      </div>
    </div>
    
    <div className="summary-card hover-lift">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white text-2xl">⚙️</span>
        </div>
        <div>
          <h3 className="heading-secondary">System Configuration</h3>
          <p className="text-muted">Customize your security management platform to meet your specific needs</p>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="font-semibold text-slate-800">Company Profile</h4>
          <div className="data-list">
            <div className="data-item">
              <span className="data-label">Company Name</span>
              <span className="data-value">SecureMax Ltd</span>
            </div>
            <div className="data-item">
              <span className="data-label">License Number</span>
              <span className="data-value">SEC-2024-001</span>
            </div>
            <div className="data-item">
              <span className="data-label">Operating Status</span>
              <span className="badge-success">Active</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-semibold text-slate-800">System Preferences</h4>
          <div className="data-list">
            <div className="data-item">
              <span className="data-label">Notification Settings</span>
              <span className="badge-primary">Configured</span>
            </div>
            <div className="data-item">
              <span className="data-label">Security Level</span>
              <span className="badge-success">High</span>
            </div>
            <div className="data-item">
              <span className="data-label">Auto-backup</span>
              <span className="badge-success">Enabled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Enhanced login component with professional styling
const LoginPage = () => (
  <div className="login-container">
    <div className="login-card">
      <div className="text-center">
        <div className="login-logo">
          <span className="text-white text-2xl">🛡️</span>
        </div>
        <h1 className="login-title">SecureMax Portal</h1>
        <p className="login-subtitle">Access your security company dashboard</p>
      </div>
      
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Company Email</label>
          <input 
            type="email" 
            required 
            className="input-professional" 
            placeholder="admin@securemax.com" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
          <input 
            type="password" 
            required 
            className="input-professional" 
          />
        </div>
        
        <div className="flex items-center">
          <input 
            type="checkbox" 
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" 
          />
          <label className="ml-2 block text-sm text-slate-700">Keep me signed in</label>
        </div>
        
        <button type="submit" className="btn-primary w-full justify-center py-3">
          <span className="flex items-center space-x-2">
            <span>Access Company Portal</span>
            <span>→</span>
          </span>
        </button>
      </form>
      
      <div className="mt-8 text-center">
        <div className="alert-info text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span>🔒</span>
            <span className="font-medium">Secure access for registered security companies</span>
          </div>
          <p className="text-sm">Need help? Contact: <span className="font-semibold">support@secureguard.com</span></p>
        </div>
        
        <div className="mt-4 p-4 bg-slate-50 rounded-lg">
          <p className="text-xs text-slate-600 font-medium mb-1">Demo Credentials</p>
          <p className="text-xs text-slate-500">Email: admin@securemax.com</p>
          <p className="text-xs text-slate-500">Password: demo123</p>
        </div>
      </div>
    </div>
  </div>
);

// Main app component with enhanced routing
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
        <div className="min-h-screen bg-slate-50">
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
        </div>
      </DashboardLayout>
    </Router>
  );
}

export default App;
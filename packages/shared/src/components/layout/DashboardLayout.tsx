import React from 'react';
import { NavItem } from '../../types';

interface DashboardLayoutProps {
  title: string;
  navigation: NavItem[];
  children: React.ReactNode;
  userRole: string;
  userName?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  title,
  navigation,
  children,
  userRole,
  userName = "Admin User"
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
              <p className="text-sm text-gray-600">Role: {userRole}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">{userName}</span>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-white shadow-sm border-r border-gray-200 min-h-screen">
          <div className="p-4">
            <ul className="space-y-2">
              {navigation.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
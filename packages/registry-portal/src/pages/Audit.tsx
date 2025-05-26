import React, { useState } from 'react';
import { Card, Button } from '@security-guard/shared';

const Audit: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const mockAuditLogs = [
    { 
      id: 1, 
      timestamp: "2024-01-20 14:30:15", 
      action: "Guard Approved", 
      user: "Registry Admin", 
      target: "John Smith (GRD-2024-001)",
      details: "Guard license approved after background check verification",
      category: "Guard Management"
    },
    { 
      id: 2, 
      timestamp: "2024-01-20 14:15:22", 
      action: "Company Audit Completed", 
      user: "Compliance Officer", 
      target: "SecureMax Ltd",
      details: "Annual compliance audit completed with 98% score",
      category: "Company Compliance"
    },
    { 
      id: 3, 
      timestamp: "2024-01-20 13:45:08", 
      action: "Guard Flagged", 
      user: "Registry Admin", 
      target: "Sarah Johnson (GRD-2024-004)",
      details: "Guard flagged for missing mandatory training requirements",
      category: "Compliance Violation"
    },
    { 
      id: 4, 
      timestamp: "2024-01-20 12:30:45", 
      action: "Incident Report Filed", 
      user: "System", 
      target: "Elite Protection",
      details: "Equipment malfunction incident reported and logged",
      category: "Incident Management"
    },
    { 
      id: 5, 
      timestamp: "2024-01-20 11:15:33", 
      action: "License Renewed", 
      user: "Registry Admin", 
      target: "Guardian Security",
      details: "Company license renewed for 12 months - all requirements met",
      category: "License Management"
    }
  ];

  const periods = [
    { id: 'today', label: 'Today' },
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'year', label: 'This Year' }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Guard Management': return 'bg-blue-100 text-blue-800';
      case 'Company Compliance': return 'bg-green-100 text-green-800';
      case 'Compliance Violation': return 'bg-red-100 text-red-800';
      case 'Incident Management': return 'bg-orange-100 text-orange-800';
      case 'License Management': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Audit Logs</h2>
        <p className="text-gray-600">Track all system activities and compliance events</p>
      </div>

      {/* Period Selector and Actions */}
      <Card className="mb-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex gap-2">
            {periods.map((period) => (
              <button
                key={period.id}
                onClick={() => setSelectedPeriod(period.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedPeriod === period.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Export Logs</Button>
            <Button variant="outline">Advanced Filter</Button>
            <Button variant="primary">Generate Report</Button>
          </div>
        </div>
      </Card>

      {/* Audit Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">1,247</div>
            <p className="text-sm text-gray-600">Total Actions Today</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">856</div>
            <p className="text-sm text-gray-600">Guard Actions</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">234</div>
            <p className="text-sm text-gray-600">Company Actions</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">157</div>
            <p className="text-sm text-gray-600">System Events</p>
          </div>
        </Card>
      </div>

      {/* Audit Logs Table */}
      <Card title="Recent Activity Logs">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action & Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Target
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockAuditLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {log.timestamp}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{log.action}</div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(log.category)}`}>
                      {log.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {log.user}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {log.target}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                    <div className="truncate" title={log.details}>
                      {log.details}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Audit;
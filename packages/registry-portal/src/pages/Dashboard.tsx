import React from 'react';
import { Card } from '@security-guard/shared';

const Dashboard: React.FC = () => {
  // Mock data - replace with real API calls
  const nationalStats = {
    totalGuards: 12547,
    activeGuards: 9823,
    pendingApprovals: 234,
    totalCompanies: 156,
    flaggedGuards: 23,
    incidentsToday: 7,
    complianceRate: 94.2,
    newRegistrations: 45
  };

  const recentActivity = [
    { id: 1, guard: "John Smith", company: "SecureMax Ltd", action: "Registration Approved", time: "2 hours ago", status: "approved" },
    { id: 2, guard: "Maria Garcia", company: "Guardian Security", action: "License Renewed", time: "4 hours ago", status: "approved" },
    { id: 3, guard: "Ahmed Hassan", company: "Elite Protection", action: "Pending Review", time: "6 hours ago", status: "pending" },
    { id: 4, guard: "Sarah Johnson", company: "Night Watch Security", action: "Flagged for Review", time: "8 hours ago", status: "flagged" }
  ];

  const systemAlerts = [
    { type: "Warning", message: "23 guards with expiring certificates within 30 days", priority: "high", time: "1 hour ago" },
    { type: "Info", message: "Monthly compliance report due in 3 days", priority: "medium", time: "2 hours ago" },
    { type: "Alert", message: "Unusual activity detected - SecureMax Ltd", priority: "high", time: "4 hours ago" },
    { type: "Notice", message: "System maintenance scheduled for Sunday 2 AM", priority: "low", time: "1 day ago" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'status-badge status-active';
      case 'pending': return 'status-badge status-pending';
      case 'flagged': return 'status-badge status-flagged';
      default: return 'status-badge status-inactive';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">National Registry Dashboard</h2>
        <p className="text-gray-600">Overview of all registered security guards and companies nationwide</p>
      </div>

      {/* Key Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-lg">👥</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Guards</p>
              <p className="text-2xl font-bold text-gray-900">{nationalStats.totalGuards.toLocaleString()}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-lg">✅</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Guards</p>
              <p className="text-2xl font-bold text-gray-900">{nationalStats.activeGuards.toLocaleString()}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 text-lg">⏳</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending Approvals</p>
              <p className="text-2xl font-bold text-gray-900">{nationalStats.pendingApprovals}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-lg">🏢</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Companies</p>
              <p className="text-2xl font-bold text-gray-900">{nationalStats.totalCompanies}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Secondary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600">{nationalStats.flaggedGuards}</div>
            <p className="text-sm text-gray-600">Flagged Guards</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{nationalStats.incidentsToday}</div>
            <p className="text-sm text-gray-600">Today's Incidents</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{nationalStats.complianceRate}%</div>
            <p className="text-sm text-gray-600">Compliance Rate</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">{nationalStats.newRegistrations}</div>
            <p className="text-sm text-gray-600">New This Week</p>
          </div>
        </Card>
      </div>

      {/* Activity and Alerts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card title="Recent Guard Activity" subtitle="Latest registration and compliance activities">
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">
                      {activity.guard.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{activity.guard}</p>
                    <p className="text-sm text-gray-600">{activity.company}</p>
                    <p className="text-sm text-gray-500">{activity.action}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={getStatusColor(activity.status)}>
                    {activity.status}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* System Alerts */}
        <Card title="System Alerts" subtitle="Important notifications and system status">
          <div className="space-y-4">
            {systemAlerts.map((alert, index) => (
              <div key={index} className="flex items-start space-x-3 py-3 border-b border-gray-100 last:border-b-0">
                <div className={`w-3 h-3 rounded-full mt-1.5 ${getPriorityColor(alert.priority)}`}></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-900 text-sm">{alert.type}</p>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{alert.message}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
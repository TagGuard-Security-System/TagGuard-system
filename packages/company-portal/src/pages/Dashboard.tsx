import React from 'react';
import { Card } from '@security-guard/shared';

const Dashboard: React.FC = () => {
  // Mock company data - SecureMax Ltd example
  const companyStats = {
    companyName: "SecureMax Ltd",
    totalGuards: 245,
    onDutyGuards: 89,
    availableGuards: 67,
    totalClients: 34,
    activeContracts: 52,
    monthlyRevenue: 145750,
    todayIncidents: 3,
    missedCheckIns: 2,
    completedShifts: 156,
    averageRating: 4.7
  };

  const operationalAlerts = [
    { type: "high", title: "Missed Check-ins", message: "2 guards missed their scheduled check-ins", time: "15 min ago" },
    { type: "medium", title: "Shift Coverage", message: "3 shifts need coverage for tomorrow", time: "1 hour ago" },
    { type: "low", title: "Training Due", message: "15 guards need annual training update", time: "2 hours ago" },
    { type: "medium", title: "Client Request", message: "New security request from Metro Mall", time: "3 hours ago" }
  ];

  const recentActivity = [
    { guard: "John Smith", action: "Started shift", location: "Downtown Mall", time: "30 min ago", status: "active" },
    { guard: "Maria Garcia", action: "Completed patrol", location: "Office Complex A", time: "1 hour ago", status: "completed" },
    { guard: "Ahmed Hassan", action: "Incident report filed", location: "Warehouse District", time: "2 hours ago", status: "reported" },
    { guard: "Sarah Johnson", action: "Shift ended", location: "Shopping Center", time: "3 hours ago", status: "completed" },
    { guard: "David Chen", action: "Training completed", location: "Training Center", time: "4 hours ago", status: "completed" }
  ];

  const getAlertClass = (type: string) => {
    switch (type) {
      case 'high': return 'alert-high border rounded-lg p-4';
      case 'medium': return 'alert-medium border rounded-lg p-4';
      case 'low': return 'alert-low border rounded-lg p-4';
      default: return 'bg-gray-50 border border-gray-200 rounded-lg p-4';
    }
  };

  const getActivityStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600';
      case 'completed': return 'text-blue-600';
      case 'reported': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">{companyStats.companyName} Dashboard</h2>
        <p className="text-gray-600">Operational overview and key performance metrics</p>
      </div>

      {/* Key Metrics Grid */}
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
              <p className="text-2xl font-bold text-gray-900">{companyStats.totalGuards}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-lg">🟢</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">On Duty Now</p>
              <p className="text-2xl font-bold text-gray-900">{companyStats.onDutyGuards}</p>
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
              <p className="text-sm font-medium text-gray-600">Active Clients</p>
              <p className="text-2xl font-bold text-gray-900">{companyStats.totalClients}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-lg">💰</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
              <p className="text-2xl font-bold text-gray-900">${companyStats.monthlyRevenue.toLocaleString()}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{companyStats.availableGuards}</div>
            <p className="text-sm text-gray-600">Available Guards</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{companyStats.activeContracts}</div>
            <p className="text-sm text-gray-600">Active Contracts</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{companyStats.todayIncidents}</div>
            <p className="text-sm text-gray-600">Today's Incidents</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">{companyStats.averageRating}</div>
            <p className="text-sm text-gray-600">Average Rating</p>
          </div>
        </Card>
      </div>

      {/* Alerts and Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Operational Alerts */}
        <Card title="Operational Alerts" subtitle="Important notifications requiring attention">
          <div className="space-y-4">
            {operationalAlerts.map((alert, index) => (
              <div key={index} className={getAlertClass(alert.type)}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      alert.type === 'high' ? 'bg-red-500' : 
                      alert.type === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}></div>
                    <div>
                      <p className="font-medium text-sm">{alert.title}</p>
                      <p className="text-sm mt-1">{alert.message}</p>
                    </div>
                  </div>
                  <span className="text-xs opacity-75">{alert.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Guard Activity */}
        <Card title="Recent Guard Activity" subtitle="Latest field operations and updates">
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">
                      {activity.guard.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{activity.guard}</p>
                    <p className={`text-sm ${getActivityStatusColor(activity.status)}`}>{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.location}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Live Guard Map Placeholder */}
      <Card title="Live Guard Locations" subtitle="Real-time tracking of on-duty guards">
        <div className="h-80 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🗺️</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Interactive Guard Map</h3>
            <p className="text-gray-600 mb-4">Real-time locations and status of on-duty guards</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-3">
                <div className="font-semibold text-green-600">{companyStats.onDutyGuards}</div>
                <div className="text-gray-600">Guards On Duty</div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="font-semibold text-blue-600">{companyStats.totalClients}</div>
                <div className="text-gray-600">Active Sites</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
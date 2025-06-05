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
    { 
      type: "high", 
      title: "Missed Check-ins", 
      message: "2 guards missed their scheduled check-ins", 
      time: "15 min ago",
      icon: "🚨"
    },
    { 
      type: "medium", 
      title: "Shift Coverage", 
      message: "3 shifts need coverage for tomorrow", 
      time: "1 hour ago",
      icon: "⚠️"
    },
    { 
      type: "low", 
      title: "Training Due", 
      message: "15 guards need annual training update", 
      time: "2 hours ago",
      icon: "📚"
    },
    { 
      type: "medium", 
      title: "Client Request", 
      message: "New security request from Metro Mall", 
      time: "3 hours ago",
      icon: "📞"
    }
  ];

  const recentActivity = [
    { 
      guard: "John Smith", 
      action: "Started shift", 
      location: "Downtown Mall", 
      time: "30 min ago", 
      status: "active",
      avatar: "👤"
    },
    { 
      guard: "Maria Garcia", 
      action: "Completed patrol", 
      location: "Office Complex A", 
      time: "1 hour ago", 
      status: "completed",
      avatar: "👤"
    },
    { 
      guard: "Ahmed Hassan", 
      action: "Incident report filed", 
      location: "Warehouse District", 
      time: "2 hours ago", 
      status: "reported",
      avatar: "👤"
    },
    { 
      guard: "Sarah Johnson", 
      action: "Shift ended", 
      location: "Shopping Center", 
      time: "3 hours ago", 
      status: "completed",
      avatar: "👤"
    },
    { 
      guard: "David Chen", 
      action: "Training completed", 
      location: "Training Center", 
      time: "4 hours ago", 
      status: "completed",
      avatar: "👤"
    }
  ];

  const getAlertClass = (type: string) => {
    switch (type) {
      case 'high': return 'alert-error border-l-4 rounded-lg p-4 hover-lift';
      case 'medium': return 'alert-warning border-l-4 rounded-lg p-4 hover-lift';
      case 'low': return 'alert-info border-l-4 rounded-lg p-4 hover-lift';
      default: return 'bg-slate-50 border border-slate-200 rounded-lg p-4 hover-lift';
    }
  };

  const getActivityStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-emerald-600';
      case 'completed': return 'text-blue-600';
      case 'reported': return 'text-amber-600';
      default: return 'text-slate-600';
    }
  };

  const getActivityStatusBadge = (status: string) => {
    switch (status) {
      case 'active': return 'badge-success';
      case 'completed': return 'badge-primary';
      case 'reported': return 'badge-warning';
      default: return 'badge-professional';
    }
  };

  return (
    <div className="space-y-8 p-6">
      {/* Enhanced Header */}
      <div className="section-header">
        <div>
          <h2 className="heading-primary text-gradient">{companyStats.companyName} Dashboard</h2>
          <p className="text-muted">Operational overview and key performance metrics</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-slate-500">
          <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></span>
          <span>Live Data</span>
        </div>
      </div>

      {/* Enhanced Key Metrics Grid */}
      <div className="stats-grid">
        <div className="metric-card hover-lift">
          <div className="flex items-center justify-between">
            <div>
              <p className="metric-label">Total Guards</p>
              <p className="metric-value">{companyStats.totalGuards}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">👥</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '85%' }}></div>
            </div>
            <p className="text-xs text-slate-500 mt-1">85% capacity</p>
          </div>
        </div>

        <div className="metric-card hover-lift">
          <div className="flex items-center justify-between">
            <div>
              <p className="metric-label">On Duty Now</p>
              <p className="stat-value success">{companyStats.onDutyGuards}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">🟢</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="badge-success">Active</span>
            <span className="text-slate-500 ml-2">across 8 sites</span>
          </div>
        </div>

        <div className="metric-card hover-lift">
          <div className="flex items-center justify-between">
            <div>
              <p className="metric-label">Active Clients</p>
              <p className="stat-value purple">{companyStats.totalClients}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">🏢</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-600">+3</span>
            <span className="text-slate-500 ml-1">this month</span>
          </div>
        </div>

        <div className="metric-card hover-lift">
          <div className="flex items-center justify-between">
            <div>
              <p className="metric-label">Monthly Revenue</p>
              <p className="stat-value success">${companyStats.monthlyRevenue.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">💰</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-600">↗ 12%</span>
            <span className="text-slate-500 ml-1">vs last month</span>
          </div>
        </div>
      </div>

      {/* Enhanced Secondary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="stat-item">
          <div className="stat-value primary">{companyStats.availableGuards}</div>
          <p className="stat-label">Available Guards</p>
        </div>
        <div className="stat-item">
          <div className="stat-value success">{companyStats.activeContracts}</div>
          <p className="stat-label">Active Contracts</p>
        </div>
        <div className="stat-item">
          <div className="stat-value warning">{companyStats.todayIncidents}</div>
          <p className="stat-label">Today's Incidents</p>
        </div>
        <div className="stat-item">
          <div className="stat-value info">{companyStats.averageRating}</div>
          <p className="stat-label">Average Rating</p>
        </div>
      </div>

      {/* Enhanced Alerts and Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Enhanced Operational Alerts */}
        <div className="card-professional hover-lift">
          <div className="card-spacing">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="heading-secondary">Operational Alerts</h3>
                <p className="text-muted">Important notifications requiring attention</p>
              </div>
              <span className="badge-danger">{operationalAlerts.length}</span>
            </div>
            
            <div className="space-y-4">
              {operationalAlerts.map((alert, index) => (
                <div key={index} className={getAlertClass(alert.type)}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <span className="text-lg">{alert.icon}</span>
                      <div className="flex-1">
                        <p className="font-semibold text-sm mb-1">{alert.title}</p>
                        <p className="text-sm">{alert.message}</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 whitespace-nowrap">{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Recent Guard Activity */}
        <div className="card-professional hover-lift">
          <div className="card-spacing">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="heading-secondary">Recent Guard Activity</h3>
                <p className="text-muted">Latest field operations and updates</p>
              </div>
              <button className="btn-secondary text-xs">View All</button>
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="avatar-professional w-10 h-10">
                      <span className="text-sm font-medium">
                        {activity.guard.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{activity.guard}</p>
                      <div className="flex items-center space-x-2">
                        <p className={`text-sm ${getActivityStatusColor(activity.status)}`}>
                          {activity.action}
                        </p>
                        <span className={`${getActivityStatusBadge(activity.status)} text-xs`}>
                          {activity.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">{activity.location}</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 whitespace-nowrap">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Live Guard Map */}
      <div className="card-professional hover-lift">
        <div className="card-spacing">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="heading-secondary">Live Guard Locations</h3>
              <p className="text-muted">Real-time tracking of on-duty guards</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-slate-500">Live Tracking</span>
            </div>
          </div>
          
          <div className="h-80 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl flex items-center justify-center border border-slate-200">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl">🗺️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Interactive Guard Map</h3>
              <p className="text-slate-600 mb-6 max-w-md">Real-time locations and status monitoring of all on-duty security personnel</p>
              
              <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                  <div className="stat-value success text-xl">{companyStats.onDutyGuards}</div>
                  <div className="text-sm text-slate-600">Guards On Duty</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                  <div className="stat-value primary text-xl">{companyStats.totalClients}</div>
                  <div className="text-sm text-slate-600">Active Sites</div>
                </div>
              </div>
              
              <button className="btn-primary mt-6">
                <span className="flex items-center space-x-2">
                  <span>Launch Interactive Map</span>
                  <span>→</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
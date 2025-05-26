import React, { useState } from 'react';
import { Card, Button } from '@security-guard/shared';

const Monitoring: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState('downtown');

  const properties = [
    {
      id: 'downtown',
      name: 'Downtown Apartment',
      address: '123 Main St, Apt 15B',
      status: 'Secured',
      currentGuard: 'John Smith',
      lastActivity: '15 minutes ago',
      todayEvents: 3,
      securityLevel: 'Standard'
    },
    {
      id: 'office',
      name: 'Office Building',
      address: '456 Business Ave, Suite 200',
      status: 'Scheduled',
      currentGuard: 'Maria Garcia (arrives 9 AM)',
      lastActivity: 'Tomorrow',
      todayEvents: 0,
      securityLevel: 'Premium'
    }
  ];

  const recentEvents = [
    {
      id: 1,
      time: '14:30',
      type: 'Guard Check-in',
      description: 'John Smith checked in at main entrance',
      location: 'Building Entrance',
      priority: 'normal',
      status: 'completed'
    },
    {
      id: 2,
      time: '13:45',
      type: 'Patrol Completed',
      description: 'Perimeter patrol completed successfully',
      location: 'Building Perimeter',
      priority: 'normal',
      status: 'completed'
    },
    {
      id: 3,
      time: '12:15',
      type: 'Visitor Access',
      description: 'Delivery person granted access (verified)',
      location: 'Main Entrance',
      priority: 'low',
      status: 'completed'
    },
    {
      id: 4,
      time: '11:30',
      type: 'System Alert',
      description: 'Motion detected in parking area',
      location: 'Parking Lot',
      priority: 'medium',
      status: 'investigated'
    },
    {
      id: 5,
      time: '10:00',
      type: 'Guard Arrival',
      description: 'John Smith started shift',
      location: 'Security Station',
      priority: 'normal',
      status: 'completed'
    }
  ];

  const checkpoints = [
    { id: 1, name: 'Main Entrance', lastCheck: '15 min ago', status: 'secure', guard: 'John Smith' },
    { id: 2, name: 'Parking Lot', lastCheck: '20 min ago', status: 'secure', guard: 'John Smith' },
    { id: 3, name: 'Building Perimeter', lastCheck: '35 min ago', status: 'secure', guard: 'John Smith' },
    { id: 4, name: 'Emergency Exits', lastCheck: '45 min ago', status: 'secure', guard: 'John Smith' },
    { id: 5, name: 'Stairwells', lastCheck: '1 hour ago', status: 'secure', guard: 'John Smith' }
  ];

  const liveStats = {
    responseTime: '2.3 min',
    checksToday: 24,
    alertsResolved: 3,
    uptime: '99.8%'
  };

  const selectedPropertyData = properties.find(p => p.id === selectedProperty);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'priority-high border rounded-lg p-3';
      case 'medium': return 'priority-medium border rounded-lg p-3';
      case 'low': return 'priority-low border rounded-lg p-3';
      default: return 'bg-gray-50 border border-gray-200 rounded-lg p-3';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Secured': return 'status-badge status-active';
      case 'Scheduled': return 'status-badge status-pending';
      case 'Alert': return 'status-badge bg-red-100 text-red-800';
      default: return 'status-badge bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Property Monitoring</h2>
        <p className="text-gray-600">Real-time security monitoring for your properties</p>
      </div>

      {/* Property Selector */}
      <Card className="mb-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex gap-2">
            {properties.map((property) => (
              <button
                key={property.id}
                onClick={() => setSelectedProperty(property.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedProperty === property.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {property.name}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <Button variant="outline">View Reports</Button>
            <Button variant="primary">Contact Guard</Button>
          </div>
        </div>
      </Card>

      {selectedPropertyData && (
        <>
          {/* Property Status Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-lg">🔒</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Security Status</p>
                  <span className={getStatusColor(selectedPropertyData.status)}>
                    {selectedPropertyData.status}
                  </span>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-lg">👮</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Current Guard</p>
                  <p className="text-sm font-bold text-gray-900">{selectedPropertyData.currentGuard}</p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 text-lg">📊</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Today's Events</p>
                  <p className="text-2xl font-bold text-gray-900">{selectedPropertyData.todayEvents}</p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <span className="text-yellow-600 text-lg">⏰</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Last Activity</p>
                  <p className="text-sm font-bold text-gray-900">{selectedPropertyData.lastActivity}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Live Monitoring Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Live Property Map */}
            <Card title="Live Property Monitoring" subtitle="Real-time guard location and status">
              <div className="h-80 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🗺️</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Interactive Property Map</h3>
                  <p className="text-gray-600 mb-4">Real-time guard location and checkpoint status</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-green-600">🟢 Active</div>
                      <div className="text-sm text-gray-600">Guard on patrol</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-blue-600">📍 Location</div>
                      <div className="text-sm text-gray-600">Building entrance</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recent Events */}
            <Card title="Recent Security Events" subtitle="Latest activities and alerts">
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {recentEvents.map((event) => (
                  <div key={event.id} className={getPriorityColor(event.priority)}>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-900">{event.time}</span>
                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                          {event.type}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">{event.location}</span>
                    </div>
                    <p className="text-sm text-gray-700">{event.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Checkpoint Status and Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Security Checkpoints */}
            <Card title="Security Checkpoints" subtitle="Status of all monitored areas">
              <div className="space-y-3">
                {checkpoints.map((checkpoint) => (
                  <div key={checkpoint.id} className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-900">{checkpoint.name}</p>
                        <p className="text-sm text-gray-600">Guard: {checkpoint.guard}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600">Secure</p>
                      <p className="text-xs text-gray-500">{checkpoint.lastCheck}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Performance Metrics */}
            <Card title="Security Performance" subtitle="Today's security metrics and statistics">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">{liveStats.responseTime}</div>
                    <div className="text-sm text-gray-600">Avg Response Time</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">{liveStats.checksToday}</div>
                    <div className="text-sm text-gray-600">Security Checks</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">{liveStats.alertsResolved}</div>
                    <div className="text-sm text-gray-600">Alerts Resolved</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-600">{liveStats.uptime}</div>
                    <div className="text-sm text-gray-600">System Uptime</div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium text-gray-900 mb-3">Security Coverage Timeline</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>10:00 AM - Guard Arrival</span>
                      <span className="text-green-600">✓ Completed</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>2:30 PM - Current Time</span>
                      <span className="text-blue-600">🔵 Active</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>6:00 PM - Shift End</span>
                      <span className="text-gray-500">⏳ Scheduled</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </>
      )}

      {/* Emergency Actions */}
      <Card title="Emergency Actions" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="primary" className="bg-red-600 hover:bg-red-700 justify-center">
            🚨 Emergency Alert
          </Button>
          <Button variant="outline" className="justify-center">
            📞 Call Guard Directly
          </Button>
          <Button variant="outline" className="justify-center">
            💬 Send Message
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Monitoring;
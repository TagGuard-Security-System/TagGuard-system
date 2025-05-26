import React from 'react';
import { Card, Button } from '@security-guard/shared';

const Dashboard: React.FC = () => {
  // Mock client data - individual property owner
  const clientData = {
    name: "Sarah Chen",
    properties: 2,
    activeGuards: 1,
    upcomingShifts: 3,
    totalSpent: 2450,
    avgRating: 4.8,
    lastIncident: "None in 30 days",
    nextPayment: "2024-02-01"
  };

  const recentActivity = [
    { 
      id: 1, 
      type: "Guard Check-in", 
      message: "John Smith checked in at Downtown Apartment", 
      time: "2 hours ago", 
      status: "completed",
      guard: "John Smith"
    },
    { 
      id: 2, 
      type: "Patrol Completed", 
      message: "Evening patrol completed successfully", 
      time: "4 hours ago", 
      status: "completed",
      guard: "John Smith"
    },
    { 
      id: 3, 
      type: "Guard Assignment", 
      message: "Maria Garcia assigned to Office Building", 
      time: "1 day ago", 
      status: "active",
      guard: "Maria Garcia"
    },
    { 
      id: 4, 
      type: "Payment Processed", 
      message: "Monthly security service payment processed", 
      time: "3 days ago", 
      status: "completed",
      guard: null
    },
    { 
      id: 5, 
      type: "Service Completed", 
      message: "Weekend security coverage completed", 
      time: "5 days ago", 
      status: "completed",
      guard: "Ahmed Hassan"
    }
  ];

  const myProperties = [
    {
      id: 1,
      name: "Downtown Apartment",
      address: "123 Main St, Apt 15B",
      type: "Residential",
      coverage: "Active",
      currentGuard: "John Smith",
      lastCheckIn: "2 hours ago",
      rating: 4.9
    },
    {
      id: 2,
      name: "Office Building",
      address: "456 Business Ave, Suite 200",
      type: "Commercial",
      coverage: "Scheduled",
      currentGuard: "Maria Garcia",
      lastCheckIn: "Tomorrow 9:00 AM",
      rating: 4.7
    }
  ];

  const upcomingServices = [
    { id: 1, property: "Downtown Apartment", guard: "John Smith", date: "Today", time: "6:00 PM - 10:00 PM", type: "Evening Security" },
    { id: 2, property: "Office Building", guard: "Maria Garcia", date: "Tomorrow", time: "9:00 AM - 5:00 PM", type: "Business Hours" },
    { id: 3, property: "Downtown Apartment", guard: "John Smith", date: "Jan 25", time: "10:00 PM - 6:00 AM", type: "Night Security" }
  ];

  const getActivityStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600';
      case 'active': return 'text-blue-600';
      case 'pending': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  const getCoverageColor = (coverage: string) => {
    switch (coverage) {
      case 'Active': return 'status-badge status-active';
      case 'Scheduled': return 'status-badge status-pending';
      case 'Inactive': return 'status-badge bg-gray-100 text-gray-800';
      default: return 'status-badge bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Welcome back, {clientData.name}!</h2>
        <p className="text-gray-600">Your property security dashboard</p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-lg">🏠</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">My Properties</p>
              <p className="text-2xl font-bold text-gray-900">{clientData.properties}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-lg">👮</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Guards</p>
              <p className="text-2xl font-bold text-gray-900">{clientData.activeGuards}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-lg">📅</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Upcoming Shifts</p>
              <p className="text-2xl font-bold text-gray-900">{clientData.upcomingShifts}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-yellow-600 text-lg">⭐</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Service Rating</p>
              <p className="text-2xl font-bold text-gray-900">{clientData.avgRating}/5</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Properties and Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* My Properties */}
        <Card title="My Properties" subtitle="Security coverage status for your properties">
          <div className="space-y-4">
            {myProperties.map((property) => (
              <div key={property.id} className="property-card p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{property.name}</h4>
                    <p className="text-sm text-gray-600">{property.address}</p>
                    <p className="text-xs text-gray-500">{property.type} Property</p>
                  </div>
                  <span className={getCoverageColor(property.coverage)}>
                    {property.coverage}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                  <div>
                    <span className="text-gray-500">Current Guard:</span>
                    <p className="font-medium">{property.currentGuard}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Last Check-in:</span>
                    <p className="font-medium">{property.lastCheckIn}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-sm font-medium">{property.rating}/5.0</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">View Details</Button>
                    <Button size="sm" variant="primary">Monitor</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Button variant="outline" className="w-full">Add New Property</Button>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card title="Recent Activity" subtitle="Latest updates from your security services">
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 py-3 border-b border-gray-100 last:border-b-0">
                <div className={`w-3 h-3 rounded-full mt-2 ${
                  activity.status === 'completed' ? 'bg-green-500' : 
                  activity.status === 'active' ? 'bg-blue-500' : 'bg-yellow-500'
                }`}></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm">{activity.type}</p>
                  <p className="text-gray-600 text-sm">{activity.message}</p>
                  {activity.guard && (
                    <p className="text-xs text-gray-500 mt-1">Guard: {activity.guard}</p>
                  )}
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Upcoming Services */}
      <Card title="Upcoming Security Services" subtitle="Your scheduled guard services">
        <div className="space-y-3">
          {upcomingServices.map((service) => (
            <div key={service.id} className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-purple-700">
                    {service.guard.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{service.type}</p>
                  <p className="text-sm text-gray-600">{service.property}</p>
                  <p className="text-sm text-gray-500">Guard: {service.guard}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{service.date}</p>
                <p className="text-sm text-gray-600">{service.time}</p>
                <div className="mt-2 flex space-x-2">
                  <Button size="sm" variant="outline">Edit</Button>
                  <Button size="sm" variant="outline">Cancel</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Button variant="primary" size="lg">Book New Security Service</Button>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Button variant="outline" className="justify-center">
            🚨 Emergency Contact
          </Button>
          <Button variant="outline" className="justify-center">
            📞 Call My Guard
          </Button>
          <Button variant="outline" className="justify-center">
            💬 Send Message
          </Button>
          <Button variant="outline" className="justify-center">
            📊 View Reports
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
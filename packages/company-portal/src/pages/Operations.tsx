import React, { useState } from 'react';
import { Card, Button } from '@security-guard/shared';

const Operations: React.FC = () => {
  const [selectedIncidentType, setSelectedIncidentType] = useState('all');

  const recentIncidents = [
    {
      id: 1,
      time: '14:30',
      guard: 'Ahmed Hassan',
      site: 'Warehouse District',
      client: 'Industrial Co',
      type: 'Equipment Issue',
      priority: 'Medium',
      description: 'RFID scanner malfunction reported during patrol',
      status: 'In Progress',
      reportedBy: 'Guard'
    },
    {
      id: 2,
      time: '12:15',
      guard: 'John Smith',
      site: 'Downtown Mall',
      client: 'Metro Shopping',
      type: 'Security Alert',
      priority: 'High',
      description: 'Suspicious activity observed in parking lot section B',
      status: 'Resolved',
      reportedBy: 'Guard'
    },
    {
      id: 3,
      time: '09:45',
      guard: 'Maria Garcia',
      site: 'Office Complex A',
      client: 'TechCorp',
      type: 'Access Control',
      priority: 'Low',
      description: 'Visitor badge system experiencing intermittent issues',
      status: 'Pending',
      reportedBy: 'Client'
    },
    {
      id: 4,
      time: '08:20',
      guard: 'Lisa Rodriguez',
      site: 'Shopping Center',
      client: 'Retail Plaza',
      type: 'Medical Emergency',
      priority: 'High',
      description: 'First aid provided to customer, paramedics called',
      status: 'Resolved',
      reportedBy: 'Guard'
    }
  ];

  const patrolRoutes = [
    { 
      id: 1, 
      name: 'Mall Perimeter Check', 
      site: 'Downtown Mall', 
      checkpoints: 8, 
      frequency: '30 min', 
      status: 'Active',
      lastCompleted: '25 min ago',
      assignedGuard: 'John Smith',
      completionRate: '98%'
    },
    { 
      id: 2, 
      name: 'Office Building Floors', 
      site: 'Office Complex A', 
      checkpoints: 12, 
      frequency: '45 min', 
      status: 'Active',
      lastCompleted: '15 min ago',
      assignedGuard: 'Maria Garcia',
      completionRate: '100%'
    },
    { 
      id: 3, 
      name: 'Warehouse Security Loop', 
      site: 'Warehouse District', 
      checkpoints: 6, 
      frequency: '60 min', 
      status: 'Paused',
      lastCompleted: '2 hours ago',
      assignedGuard: 'Ahmed Hassan',
      completionRate: '85%'
    },
    { 
      id: 4, 
      name: 'Shopping Center Circuit', 
      site: 'Shopping Center', 
      checkpoints: 10, 
      frequency: '20 min', 
      status: 'Active',
      lastCompleted: '10 min ago',
      assignedGuard: 'Lisa Rodriguez',
      completionRate: '96%'
    }
  ];

  const operationalStats = {
    activePatrols: 8,
    todayIncidents: 4,
    checkInsToday: 247,
    responseTime: 4.2,
    guardsOnDuty: 6,
    sitesMonitored: 8,
    alertsResolved: 15,
    clientSatisfaction: 4.7
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved': return 'status-badge bg-green-100 text-green-800';
      case 'In Progress': return 'status-badge bg-blue-100 text-blue-800';
      case 'Pending': return 'status-badge bg-yellow-100 text-yellow-800';
      case 'Active': return 'status-badge bg-green-100 text-green-800';
      case 'Paused': return 'status-badge bg-red-100 text-red-800';
      default: return 'status-badge bg-gray-100 text-gray-800';
    }
  };

  const incidentTypes = ['all', 'Security Alert', 'Equipment Issue', 'Access Control', 'Medical Emergency'];

  const filteredIncidents = selectedIncidentType === 'all' 
    ? recentIncidents 
    : recentIncidents.filter(incident => incident.type === selectedIncidentType);

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Operations Center</h2>
        <p className="text-gray-600">Monitor patrol routes, incidents, and real-time operations</p>
      </div>

      {/* Operations Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-lg">🔄</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Patrols</p>
              <p className="text-2xl font-bold text-gray-900">{operationalStats.activePatrols}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 text-lg">⚠️</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Today's Incidents</p>
              <p className="text-2xl font-bold text-gray-900">{operationalStats.todayIncidents}</p>
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
              <p className="text-sm font-medium text-gray-600">Check-ins Today</p>
              <p className="text-2xl font-bold text-gray-900">{operationalStats.checkInsToday}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-lg">⏱️</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg Response</p>
              <p className="text-2xl font-bold text-gray-900">{operationalStats.responseTime} min</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Incidents and Patrol Routes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Recent Incidents */}
        <Card 
          title="Recent Incidents" 
          subtitle="Latest security events and their status"
          headerAction={
            <select 
              value={selectedIncidentType}
              onChange={(e) => setSelectedIncidentType(e.target.value)}
              className="text-sm border border-gray-300 rounded px-2 py-1"
            >
              {incidentTypes.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Types' : type}
                </option>
              ))}
            </select>
          }
        >
          <div className="space-y-4">
            {filteredIncidents.map((incident) => (
              <div key={incident.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-900">{incident.time}</span>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded border ${getPriorityColor(incident.priority)}`}>
                      {incident.priority}
                    </span>
                    <span className={getStatusColor(incident.status)}>
                      {incident.status}
                    </span>
                  </div>
                </div>
                
                <h4 className="font-medium text-gray-900 mb-1">{incident.type}</h4>
                <p className="text-sm text-gray-600 mb-2">{incident.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Guard: </span>
                    <span className="font-medium">{incident.guard}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Client: </span>
                    <span className="font-medium">{incident.client}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Site: </span>
                    <span className="font-medium">{incident.site}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Reported by: </span>
                    <span className="font-medium">{incident.reportedBy}</span>
                  </div>
                </div>
                
                <div className="mt-3 flex space-x-2">
                  <Button size="sm" variant="outline">View Details</Button>
                  {incident.status !== 'Resolved' && (
                    <Button size="sm" variant="primary">Take Action</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Button variant="outline" className="w-full">View All Incidents</Button>
          </div>
        </Card>

        {/* Patrol Routes */}
        <Card title="Active Patrol Routes" subtitle="Real-time patrol monitoring and status">
          <div className="space-y-4">
            {patrolRoutes.map((route) => (
              <div key={route.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-medium text-gray-900">{route.name}</h4>
                  <span className={getStatusColor(route.status)}>
                    {route.status}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{route.site}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                  <div>
                    <span className="text-gray-500">Checkpoints: </span>
                    <span className="font-medium">{route.checkpoints}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Frequency: </span>
                    <span className="font-medium">{route.frequency}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Completion Rate: </span>
                    <span className="font-medium text-green-600">{route.completionRate}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Last Completed: </span>
                    <span className="font-medium">{route.lastCompleted}</span>
                  </div>
                </div>
                
                <div className="text-sm mb-3">
                  <span className="text-gray-500">Assigned Guard: </span>
                  <span className="font-medium">{route.assignedGuard}</span>
                </div>
                
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">View Route</Button>
                  <Button size="sm" variant="outline">Edit</Button>
                  {route.status === 'Paused' ? (
                    <Button size="sm" variant="primary">Resume</Button>
                  ) : (
                    <Button size="sm" variant="outline">Pause</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Button variant="primary" className="w-full">Create New Route</Button>
          </div>
        </Card>
      </div>

      {/* Emergency Protocols */}
      <Card title="Emergency Protocols & Quick Actions">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-2xl">🚨</span>
            </div>
            <h4 className="font-medium text-red-800 mb-2">Emergency Alert</h4>
            <p className="text-sm text-red-600 mb-4">Send immediate alert to all on-duty guards</p>
            <Button variant="primary" className="w-full bg-red-600 hover:bg-red-700">Send Alert</Button>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-yellow-600 text-2xl">⚠️</span>
            </div>
            <h4 className="font-medium text-yellow-800 mb-2">Security Incident</h4>
            <p className="text-sm text-yellow-600 mb-4">Report and escalate security incidents</p>
            <Button variant="outline" className="w-full">Report Incident</Button>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl">📞</span>
            </div>
            <h4 className="font-medium text-blue-800 mb-2">Emergency Contacts</h4>
            <p className="text-sm text-blue-600 mb-4">Quick access to emergency numbers</p>
            <Button variant="outline" className="w-full">View Contacts</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Operations;

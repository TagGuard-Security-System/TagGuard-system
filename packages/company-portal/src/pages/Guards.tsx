import React, { useState } from 'react';
import { Card, Button } from '@security-guard/shared';

const Guards: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock guard data for SecureMax Ltd
  const mockGuards = [
    { 
      id: 1, 
      name: "John Smith", 
      license: "GRD-2024-001", 
      status: "On Duty", 
      assignment: "Downtown Mall",
      shift: "Day Shift (8AM-4PM)",
      phone: "+1-555-0123",
      rating: 4.8,
      experience: "3 years",
      certifications: ["Basic Security", "First Aid"],
      lastCheckIn: "2 hours ago"
    },
    { 
      id: 2, 
      name: "Maria Garcia", 
      license: "GRD-2024-002", 
      status: "Off Duty", 
      assignment: "Office Complex A",
      shift: "Night Shift (10PM-6AM)",
      phone: "+1-555-0124",
      rating: 4.9,
      experience: "5 years",
      certifications: ["Basic Security", "Armed Guard"],
      lastCheckIn: "8 hours ago"
    },
    { 
      id: 3, 
      name: "Ahmed Hassan", 
      license: "GRD-2024-003", 
      status: "On Duty", 
      assignment: "Warehouse District",
      shift: "Evening Shift (4PM-12AM)",
      phone: "+1-555-0125",
      rating: 4.7,
      experience: "2 years",
      certifications: ["Basic Security"],
      lastCheckIn: "30 min ago"
    },
    { 
      id: 4, 
      name: "Sarah Johnson", 
      license: "GRD-2024-004", 
      status: "Available", 
      assignment: "Unassigned",
      shift: "Flexible",
      phone: "+1-555-0126",
      rating: 4.6,
      experience: "4 years",
      certifications: ["Basic Security", "Crowd Control"],
      lastCheckIn: "1 day ago"
    },
    { 
      id: 5, 
      name: "David Chen", 
      license: "GRD-2024-005", 
      status: "Training", 
      assignment: "Training Center",
      shift: "Training Schedule",
      phone: "+1-555-0127",
      rating: 4.5,
      experience: "1 year",
      certifications: ["Basic Security"],
      lastCheckIn: "4 hours ago"
    },
    { 
      id: 6, 
      name: "Lisa Rodriguez", 
      license: "GRD-2024-006", 
      status: "On Duty", 
      assignment: "Shopping Center",
      shift: "Day Shift (6AM-2PM)",
      phone: "+1-555-0128",
      rating: 4.8,
      experience: "6 years",
      certifications: ["Basic Security", "First Aid", "Fire Safety"],
      lastCheckIn: "1 hour ago"
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Guards', count: mockGuards.length },
    { id: 'onduty', label: 'On Duty', count: mockGuards.filter(g => g.status === 'On Duty').length },
    { id: 'available', label: 'Available', count: mockGuards.filter(g => g.status === 'Available').length },
    { id: 'training', label: 'In Training', count: mockGuards.filter(g => g.status === 'Training').length }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Duty': return 'status-badge status-on-duty';
      case 'Off Duty': return 'status-badge status-off-duty';
      case 'Available': return 'status-badge status-available';
      case 'Training': return 'status-badge status-training';
      default: return 'status-badge status-off-duty';
    }
  };

  const filteredGuards = mockGuards.filter(guard => 
    guard.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guard.assignment.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guard.license.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Guard Management</h2>
          <p className="text-gray-600">Manage your security guards and assignments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Import Guards</Button>
          <Button variant="primary">Add New Guard</Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                selectedTab === tab.id
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </nav>
      </div>

      {/* Search and Quick Actions */}
      <Card className="mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search guards by name, license, or assignment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500">
              <option value="">All Assignments</option>
              <option value="downtown">Downtown Mall</option>
              <option value="office">Office Complex A</option>
              <option value="warehouse">Warehouse District</option>
              <option value="shopping">Shopping Center</option>
              <option value="unassigned">Unassigned</option>
            </select>
            <Button variant="outline">Export List</Button>
          </div>
        </div>
      </Card>

      {/* Guards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredGuards.map((guard) => (
          <Card key={guard.id}>
            <div className="flex items-start space-x-4">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-lg font-medium text-green-700">
                  {guard.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{guard.name}</h3>
                    <p className="text-sm text-gray-600">{guard.license}</p>
                  </div>
                  <span className={getStatusColor(guard.status)}>
                    {guard.status}
                  </span>
                </div>
                
                <div className="space-y-1 mb-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Assignment:</span>
                    <span className="font-medium text-gray-900">{guard.assignment}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Shift:</span>
                    <span className="text-gray-700">{guard.shift}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Experience:</span>
                    <span className="text-gray-700">{guard.experience}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Rating:</span>
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="text-gray-700">{guard.rating}/5.0</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Last Check-in:</span>
                    <span className="text-gray-700">{guard.lastCheckIn}</span>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-3">
                  <p className="text-xs text-gray-500 mb-1">Certifications:</p>
                  <div className="flex flex-wrap gap-1">
                    {guard.certifications.map((cert, index) => (
                      <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline">View Profile</Button>
                  <Button size="sm" variant="outline">Edit Assignment</Button>
                  <Button size="sm" variant="outline">Contact</Button>
                  {guard.status === 'Available' && (
                    <Button size="sm" variant="primary">Assign</Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Summary Footer */}
      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-green-600">{mockGuards.filter(g => g.status === 'On Duty').length}</div>
            <div className="text-sm text-gray-600">Currently On Duty</div>
          </div>
          <div>
            <div className="text-lg font-bold text-blue-600">{mockGuards.filter(g => g.status === 'Available').length}</div>
            <div className="text-sm text-gray-600">Available for Assignment</div>
          </div>
          <div>
            <div className="text-lg font-bold text-yellow-600">{mockGuards.filter(g => g.status === 'Training').length}</div>
            <div className="text-sm text-gray-600">In Training</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gray-600">{(mockGuards.reduce((sum, g) => sum + g.rating, 0) / mockGuards.length).toFixed(1)}</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guards;
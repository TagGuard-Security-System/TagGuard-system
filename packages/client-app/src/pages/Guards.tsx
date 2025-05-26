import React, { useState } from 'react';
import { Card, Button } from '@security-guard/shared';

const Guards: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState('all');

  const myGuards = [
    {
      id: 1,
      name: "John Smith",
      license: "GRD-2024-001",
      company: "SecureMax Ltd",
      status: "On Duty",
      assignment: "Downtown Apartment",
      shift: "6:00 PM - 10:00 PM",
      rating: 4.9,
      experience: "5 years",
      phone: "+1-555-0123",
      specialties: ["Residential Security", "Night Patrol"],
      lastCheckIn: "2 hours ago",
      location: "Building Entrance",
      totalHours: 48,
      startDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Maria Garcia",
      license: "GRD-2024-002",
      company: "SecureMax Ltd",
      status: "Scheduled",
      assignment: "Office Building",
      shift: "9:00 AM - 5:00 PM",
      rating: 4.8,
      experience: "4 years",
      phone: "+1-555-0124",
      specialties: ["Commercial Security", "Access Control"],
      lastCheckIn: "Tomorrow",
      location: "Will arrive tomorrow",
      totalHours: 32,
      startDate: "2024-01-20"
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      license: "GRD-2024-003",
      company: "Guardian Security",
      status: "Completed",
      assignment: "Downtown Apartment",
      shift: "10:00 PM - 6:00 AM",
      rating: 4.7,
      experience: "6 years",
      phone: "+1-555-0125",
      specialties: ["Night Security", "Armed Protection"],
      lastCheckIn: "Service completed",
      location: "Service ended",
      totalHours: 64,
      startDate: "2024-01-10"
    }
  ];

  const properties = [
    { id: 'all', name: 'All Properties' },
    { id: 'downtown', name: 'Downtown Apartment' },
    { id: 'office', name: 'Office Building' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Duty': return 'status-badge status-active';
      case 'Scheduled': return 'status-badge status-pending';
      case 'Completed': return 'status-badge status-completed';
      case 'Off Duty': return 'status-badge bg-gray-100 text-gray-800';
      default: return 'status-badge bg-gray-100 text-gray-800';
    }
  };

  const filteredGuards = selectedProperty === 'all' 
    ? myGuards 
    : myGuards.filter(guard => 
        guard.assignment.toLowerCase().includes(selectedProperty.replace('downtown', 'apartment').replace('office', 'office'))
      );

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">My Security Guards</h2>
          <p className="text-gray-600">Manage and monitor your assigned security personnel</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Guard History</Button>
          <Button variant="primary">Request New Guard</Button>
        </div>
      </div>

      {/* Property Filter */}
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
            <Button variant="outline">Emergency Contact</Button>
            <Button variant="outline">Send Message</Button>
          </div>
        </div>
      </Card>

      {/* Guards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredGuards.map((guard) => (
          <Card key={guard.id}>
            <div className="space-y-4">
              {/* Guard Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-lg font-medium text-purple-700">
                      {guard.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{guard.name}</h3>
                    <p className="text-gray-600">{guard.license}</p>
                    <p className="text-sm text-gray-500">{guard.company}</p>
                  </div>
                </div>
                <span className={getStatusColor(guard.status)}>
                  {guard.status}
                </span>
              </div>

              {/* Current Assignment */}
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-900 mb-2">Current Assignment</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-purple-700">Property:</span>
                    <p className="font-medium">{guard.assignment}</p>
                  </div>
                  <div>
                    <span className="text-purple-700">Shift:</span>
                    <p className="font-medium">{guard.shift}</p>
                  </div>
                  <div>
                    <span className="text-purple-700">Location:</span>
                    <p className="font-medium">{guard.location}</p>
                  </div>
                  <div>
                    <span className="text-purple-700">Last Check-in:</span>
                    <p className="font-medium">{guard.lastCheckIn}</p>
                  </div>
                </div>
              </div>

              {/* Guard Details */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500 block">Experience:</span>
                  <span className="font-medium">{guard.experience}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Rating:</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="font-medium">{guard.rating}/5.0</span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-500 block">Total Hours:</span>
                  <span className="font-medium">{guard.totalHours}h</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Start Date:</span>
                  <span className="font-medium">{guard.startDate}</span>
                </div>
              </div>

              {/* Specialties */}
              <div>
                <span className="text-gray-500 text-sm block mb-2">Specialties:</span>
                <div className="flex flex-wrap gap-1">
                  {guard.specialties.map((specialty, index) => (
                    <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 pt-2">
                {guard.status === 'On Duty' && (
                  <>
                    <Button size="sm" variant="primary">Contact Guard</Button>
                    <Button size="sm" variant="outline">View Location</Button>
                    <Button size="sm" variant="outline">Send Message</Button>
                  </>
                )}
                {guard.status === 'Scheduled' && (
                  <>
                    <Button size="sm" variant="outline">Modify Schedule</Button>
                    <Button size="sm" variant="outline">Cancel Service</Button>
                    <Button size="sm" variant="outline">Contact Guard</Button>
                  </>
                )}
                {guard.status === 'Completed' && (
                  <>
                    <Button size="sm" variant="outline">Rate Service</Button>
                    <Button size="sm" variant="outline">View Report</Button>
                    <Button size="sm" variant="primary">Book Again</Button>
                  </>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Service Summary */}
      <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Security Service Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-purple-600">{myGuards.length}</div>
            <div className="text-sm text-gray-600">Total Guards Assigned</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {myGuards.filter(g => g.status === 'On Duty').length}
            </div>
            <div className="text-sm text-gray-600">Currently On Duty</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">
              {myGuards.reduce((sum, guard) => sum + guard.totalHours, 0)}h
            </div>
            <div className="text-sm text-gray-600">Total Security Hours</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-600">
              {(myGuards.reduce((sum, guard) => sum + guard.rating, 0) / myGuards.length).toFixed(1)}
            </div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <Card title="Emergency Contact" className="mt-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-red-800">Need immediate assistance?</h4>
              <p className="text-red-600 text-sm">Contact your security guard or emergency services</p>
            </div>
            <div className="flex gap-2">
              <Button variant="primary" className="bg-red-600 hover:bg-red-700">
                🚨 Emergency
              </Button>
              <Button variant="outline">
                📞 Call Guard
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Guards;
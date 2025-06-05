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
      lastCheckIn: "2 hours ago",
      avatar: "JS"
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
      lastCheckIn: "8 hours ago",
      avatar: "MG"
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
      lastCheckIn: "30 min ago",
      avatar: "AH"
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
      lastCheckIn: "1 day ago",
      avatar: "SJ"
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
      lastCheckIn: "4 hours ago",
      avatar: "DC"
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
      lastCheckIn: "1 hour ago",
      avatar: "LR"
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Guards', count: mockGuards.length, icon: '👥' },
    { id: 'onduty', label: 'On Duty', count: mockGuards.filter(g => g.status === 'On Duty').length, icon: '🟢' },
    { id: 'available', label: 'Available', count: mockGuards.filter(g => g.status === 'Available').length, icon: '✅' },
    { id: 'training', label: 'In Training', count: mockGuards.filter(g => g.status === 'Training').length, icon: '📚' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Duty': return 'status-on-duty';
      case 'Off Duty': return 'status-off-duty';
      case 'Available': return 'status-available';
      case 'Training': return 'status-training';
      default: return 'status-off-duty';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'On Duty': return '🟢';
      case 'Off Duty': return '⚫';
      case 'Available': return '🔵';
      case 'Training': return '📚';
      default: return '⚫';
    }
  };

  const filteredGuards = mockGuards.filter(guard => 
    guard.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guard.assignment.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guard.license.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRatingStars = (rating: number) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  return (
    <div className="space-y-8 p-6">
      {/* Enhanced Header */}
      <div className="section-header">
        <div>
          <h2 className="heading-primary text-gradient">Guard Management</h2>
          <p className="text-muted">Manage your security personnel and assignments</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary">
            <span className="flex items-center space-x-2">
              <span>📊</span>
              <span>Import Guards</span>
            </span>
          </button>
          <button className="btn-primary">
            <span className="flex items-center space-x-2">
              <span>➕</span>
              <span>Add New Guard</span>
            </span>
          </button>
        </div>
      </div>

      {/* Enhanced Tabs */}
      <div className="card-professional">
        <div className="border-b border-slate-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`tab-professional ${selectedTab === tab.id ? 'active' : ''}`}
              >
                <span className="flex items-center space-x-2">
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                  <span className={`badge-professional ${selectedTab === tab.id ? 'badge-primary' : ''}`}>
                    {tab.count}
                  </span>
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Enhanced Search and Quick Actions */}
      <div className="filter-bar">
        <div className="filter-controls">
          <div className="flex-1 search-professional">
            <input
              type="text"
              placeholder="Search guards by name, license, or assignment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-professional"
            />
          </div>
          <div className="flex gap-3">
            <select className="select-professional">
              <option value="">All Assignments</option>
              <option value="downtown">Downtown Mall</option>
              <option value="office">Office Complex A</option>
              <option value="warehouse">Warehouse District</option>
              <option value="shopping">Shopping Center</option>
              <option value="unassigned">Unassigned</option>
            </select>
            <button className="btn-secondary">
              <span className="flex items-center space-x-2">
                <span>📤</span>
                <span>Export List</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Guards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredGuards.map((guard) => (
          <div key={guard.id} className="card-professional hover-lift">
            <div className="card-spacing">
              <div className="flex items-start space-x-4">
                {/* Enhanced Avatar */}
                <div className="avatar-professional w-16 h-16 text-lg">
                  {guard.avatar}
                </div>
                
                <div className="flex-1">
                  {/* Header with Status */}
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{guard.name}</h3>
                      <p className="text-sm text-slate-500">{guard.license}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{getStatusIcon(guard.status)}</span>
                      <span className={getStatusColor(guard.status)}>
                        {guard.status}
                      </span>
                    </div>
                  </div>

                  {/* Enhanced Guard Details */}
                  <div className="space-y-3 mb-4">
                    <div className="data-item">
                      <span className="data-label">Assignment:</span>
                      <span className="data-value">{guard.assignment}</span>
                    </div>
                    
                    <div className="data-item">
                      <span className="data-label">Shift:</span>
                      <span className="text-sm text-slate-700">{guard.shift}</span>
                    </div>
                    
                    <div className="data-item">
                      <span className="data-label">Experience:</span>
                      <span className="text-sm text-slate-700">{guard.experience}</span>
                    </div>
                    
                    <div className="data-item">
                      <span className="data-label">Rating:</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-amber-400">{getRatingStars(guard.rating)}</span>
                        <span className="text-sm font-medium text-slate-700">{guard.rating}/5.0</span>
                      </div>
                    </div>
                    
                    <div className="data-item">
                      <span className="data-label">Last Check-in:</span>
                      <span className="text-sm text-slate-700">{guard.lastCheckIn}</span>
                    </div>
                  </div>

                  {/* Enhanced Certifications */}
                  <div className="mb-4">
                    <p className="text-xs font-medium text-slate-600 mb-2">Certifications:</p>
                    <div className="flex flex-wrap gap-2">
                      {guard.certifications.map((cert, index) => (
                        <span key={index} className="badge-primary text-xs">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
                    <button className="btn-secondary text-xs">
                      <span className="flex items-center space-x-1">
                        <span>👤</span>
                        <span>View Profile</span>
                      </span>
                    </button>
                    <button className="btn-secondary text-xs">
                      <span className="flex items-center space-x-1">
                        <span>✏️</span>
                        <span>Edit Assignment</span>
                      </span>
                    </button>
                    <button className="btn-secondary text-xs">
                      <span className="flex items-center space-x-1">
                        <span>📞</span>
                        <span>Contact</span>
                      </span>
                    </button>
                    {guard.status === 'Available' && (
                      <button className="btn-primary text-xs">
                        <span className="flex items-center space-x-1">
                          <span>📋</span>
                          <span>Assign</span>
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Summary Footer */}
      <div className="summary-card bg-gradient-to-br from-blue-50 to-emerald-50 border-blue-200">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-slate-900">Guard Force Summary</h3>
          <p className="text-slate-600">Current operational status and performance metrics</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="stat-item">
            <div className="stat-value success">{mockGuards.filter(g => g.status === 'On Duty').length}</div>
            <div className="stat-label">Currently On Duty</div>
          </div>
          <div className="stat-item">
            <div className="stat-value primary">{mockGuards.filter(g => g.status === 'Available').length}</div>
            <div className="stat-label">Available for Assignment</div>
          </div>
          <div className="stat-item">
            <div className="stat-value warning">{mockGuards.filter(g => g.status === 'Training').length}</div>
            <div className="stat-label">In Training</div>
          </div>
          <div className="stat-item">
            <div className="stat-value info">{(mockGuards.reduce((sum, g) => sum + g.rating, 0) / mockGuards.length).toFixed(1)}</div>
            <div className="stat-label">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guards;
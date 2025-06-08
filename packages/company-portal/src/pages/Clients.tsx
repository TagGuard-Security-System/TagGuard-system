import React, { useState } from 'react';
import { Card, Button } from '@security-guard/shared';

const Clients: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const mockClients = [
    {
      id: 1,
      name: 'Metro Shopping Mall',
      contact: 'Sarah Wilson',
      email: 'sarah@metromall.com',
      phone: '+1-555-0150',
      contract: 'Premium Security Package',
      guards: 3,
      status: 'Active',
      value: '$15,200/month',
      nextPayment: '2024-02-01',
      address: '123 Main St, Downtown',
      startDate: '2023-06-15',
      rating: 4.9,
      industry: 'Retail',
      avatar: 'MSM'
    },
    {
      id: 2,
      name: 'TechCorp Office Complex',
      contact: 'Michael Chen',
      email: 'security@techcorp.com',
      phone: '+1-555-0151',
      contract: 'Standard Office Security',
      guards: 2,
      status: 'Active',
      value: '$8,400/month',
      nextPayment: '2024-02-03',
      address: '456 Business Ave, Tech District',
      startDate: '2023-08-20',
      rating: 4.7,
      industry: 'Technology',
      avatar: 'TCO'
    },
    {
      id: 3,
      name: 'Industrial Warehouse Co',
      contact: 'David Martinez',
      email: 'ops@warehouse.com',
      phone: '+1-555-0152',
      contract: 'Industrial Security',
      guards: 4,
      status: 'Pending Renewal',
      value: '$18,600/month',
      nextPayment: '2024-01-25',
      address: '789 Industrial Blvd, Warehouse District',
      startDate: '2022-12-10',
      rating: 4.6,
      industry: 'Industrial',
      avatar: 'IWC'
    },
    {
      id: 4,
      name: 'Retail Plaza Shopping',
      contact: 'Jennifer Adams',
      email: 'security@retailplaza.com',
      phone: '+1-555-0153',
      contract: 'Retail Security Plus',
      guards: 2,
      status: 'Active',
      value: '$9,800/month',
      nextPayment: '2024-02-05',
      address: '321 Shopping Way, Retail Center',
      startDate: '2023-04-12',
      rating: 4.8,
      industry: 'Retail',
      avatar: 'RPS'
    },
    {
      id: 5,
      name: 'Business Center Plaza',
      contact: 'Robert Kim',
      email: 'admin@businesscenter.com',
      phone: '+1-555-0154',
      contract: 'Corporate Security',
      guards: 3,
      status: 'Active',
      value: '$12,500/month',
      nextPayment: '2024-02-02',
      address: '555 Corporate Dr, Business District',
      startDate: '2023-09-01',
      rating: 4.5,
      industry: 'Corporate',
      avatar: 'BCP'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'badge-success';
      case 'Pending Renewal': return 'badge-warning';
      case 'Expired': return 'badge-danger';
      case 'Suspended': return 'badge-professional';
      default: return 'badge-professional';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active': return '✅';
      case 'Pending Renewal': return '⏳';
      case 'Expired': return '❌';
      case 'Suspended': return '⏸️';
      default: return '❓';
    }
  };

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'Retail': return '🏪';
      case 'Technology': return '💻';
      case 'Industrial': return '🏭';
      case 'Corporate': return '🏢';
      default: return '🏢';
    }
  };

  const filteredClients = mockClients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.contact.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || client.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Calculate summary stats
  const totalRevenue = mockClients.reduce((sum, client) => {
    return sum + parseInt(client.value.replace(/[$,\/month]/g, ''));
  }, 0);
  const activeClients = mockClients.filter(c => c.status === 'Active').length;
  const totalGuards = mockClients.reduce((sum, client) => sum + client.guards, 0);
  const averageRating = mockClients.reduce((sum, client) => sum + client.rating, 0) / mockClients.length;

  const getRatingStars = (rating: number) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  return (
    <div className="space-y-8 p-6">
      {/* Enhanced Header */}
      <div className="section-header">
        <div>
          <h2 className="heading-primary text-gradient">Client Management</h2>
          <p className="text-muted">Manage client relationships and security contracts</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary">
            <span className="flex items-center space-x-2">
              <span>📊</span>
              <span>Export Clients</span>
            </span>
          </button>
          <button className="btn-primary">
            <span className="flex items-center space-x-2">
              <span>➕</span>
              <span>Add New Client</span>
            </span>
          </button>
        </div>
      </div>

      {/* Enhanced Summary Statistics */}
      <div className="stats-grid">
        <div className="metric-card hover-lift">
          <div className="flex items-center justify-between">
            <div>
              <p className="metric-label">Total Clients</p>
              <p className="stat-value success">{mockClients.length}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">🏢</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-600">+2</span>
            <span className="text-slate-500 ml-1">this quarter</span>
          </div>
        </div>

        <div className="metric-card hover-lift">
          <div className="flex items-center justify-between">
            <div>
              <p className="metric-label">Active Contracts</p>
              <p className="stat-value primary">{activeClients}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">📋</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(activeClients / mockClients.length) * 100}%` }}></div>
            </div>
            <p className="text-xs text-slate-500 mt-1">{Math.round((activeClients / mockClients.length) * 100)}% active rate</p>
          </div>
        </div>

        <div className="metric-card hover-lift">
          <div className="flex items-center justify-between">
            <div>
              <p className="metric-label">Monthly Revenue</p>
              <p className="stat-value purple">${totalRevenue.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">💰</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-600">↗ 8%</span>
            <span className="text-slate-500 ml-1">vs last month</span>
          </div>
        </div>

        <div className="metric-card hover-lift">
          <div className="flex items-center justify-between">
            <div>
              <p className="metric-label">Average Rating</p>
              <p className="stat-value warning">{averageRating.toFixed(1)}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">⭐</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-amber-400">★★★★★</span>
          </div>
        </div>
      </div>

      {/* Enhanced Search and Filters */}
      <div className="filter-bar">
        <div className="filter-controls">
          <div className="flex-1 search-professional">
            <input
              type="text"
              placeholder="Search clients by name or contact..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-professional"
            />
          </div>
          <div className="flex gap-3">
            <select 
              className="select-professional"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Pending Renewal">Pending Renewal</option>
              <option value="Expired">Expired</option>
            </select>
            <button className="btn-secondary">
              <span className="flex items-center space-x-2">
                <span>🔍</span>
                <span>Filter</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Clients Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredClients.map((client) => (
          <div key={client.id} className="card-professional hover-lift">
            <div className="card-spacing">
              {/* Enhanced Header with Industry Icon */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="avatar-professional w-12 h-12">
                    <span className="text-sm font-medium">{client.avatar}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{client.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span>{getIndustryIcon(client.industry)}</span>
                      <p className="text-slate-600">{client.industry}</p>
                    </div>
                    <p className="text-sm text-slate-500">{client.address}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span>{getStatusIcon(client.status)}</span>
                  <span className={getStatusColor(client.status)}>
                    {client.status}
                  </span>
                </div>
              </div>

              {/* Enhanced Contact Information */}
              <div className="bg-slate-50 rounded-xl p-4 mb-4">
                <h4 className="font-medium text-slate-900 mb-3 flex items-center space-x-2">
                  <span>📞</span>
                  <span>Contact Information</span>
                </h4>
                <div className="space-y-2">
                  <div className="data-item">
                    <span className="data-label">Contact:</span>
                    <span className="data-value">{client.contact}</span>
                  </div>
                  <div className="data-item">
                    <span className="data-label">Email:</span>
                    <span className="data-value text-blue-600">{client.email}</span>
                  </div>
                  <div className="data-item">
                    <span className="data-label">Phone:</span>
                    <span className="data-value">{client.phone}</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Contract Details */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="data-item">
                  <span className="data-label">Contract Type:</span>
                  <span className="text-sm font-medium text-slate-800">{client.contract}</span>
                </div>
                <div className="data-item">
                  <span className="data-label">Monthly Value:</span>
                  <span className="text-sm font-bold text-emerald-600">{client.value}</span>
                </div>
                <div className="data-item">
                  <span className="data-label">Assigned Guards:</span>
                  <span className="flex items-center space-x-1">
                    <span className="text-sm font-medium">{client.guards}</span>
                    <span className="badge-primary text-xs">guards</span>
                  </span>
                </div>
                <div className="data-item">
                  <span className="data-label">Client Rating:</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-amber-400 text-sm">{getRatingStars(client.rating)}</span>
                    <span className="text-sm font-medium">{client.rating}/5.0</span>
                  </div>
                </div>
                <div className="data-item">
                  <span className="data-label">Start Date:</span>
                  <span className="text-sm text-slate-700">{client.startDate}</span>
                </div>
                <div className="data-item">
                  <span className="data-label">Next Payment:</span>
                  <span className="text-sm text-slate-700">{client.nextPayment}</span>
                </div>
              </div>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                <button className="btn-secondary text-xs">
                  <span className="flex items-center space-x-1">
                    <span>👁️</span>
                    <span>View Details</span>
                  </span>
                </button>
                <button className="btn-secondary text-xs">
                  <span className="flex items-center space-x-1">
                    <span>✏️</span>
                    <span>Edit Contract</span>
                  </span>
                </button>
                <button className="btn-secondary text-xs">
                  <span className="flex items-center space-x-1">
                    <span>👥</span>
                    <span>View Guards</span>
                  </span>
                </button>
                <button className="btn-primary text-xs">
                  <span className="flex items-center space-x-1">
                    <span>📞</span>
                    <span>Contact</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Summary Footer */}
      <div className="summary-card bg-gradient-to-br from-emerald-50 to-blue-50 border-emerald-200">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-900 flex items-center space-x-2">
            <span>📊</span>
            <span>Client Portfolio Summary</span>
          </h3>
          <p className="text-slate-600">Comprehensive overview of your client relationships and revenue</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="stat-item">
            <div className="stat-value success">{totalGuards}</div>
            <div className="stat-label">Total Guards Deployed</div>
          </div>
          <div className="stat-item">
            <div className="stat-value primary">${(totalRevenue * 12).toLocaleString()}</div>
            <div className="stat-label">Annual Revenue Value</div>
          </div>
          <div className="stat-item">
            <div className="stat-value purple">${Math.round(totalRevenue / activeClients).toLocaleString()}</div>
            <div className="stat-label">Avg Monthly per Client</div>
          </div>
          <div className="stat-item">
            <div className="stat-value warning">{Math.round(totalGuards / activeClients * 10) / 10}</div>
            <div className="stat-label">Avg Guards per Client</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
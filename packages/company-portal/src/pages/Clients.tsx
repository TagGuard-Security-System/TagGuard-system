import React, { useState } from 'react';
import { Card, Button } from '@security-guard/shared';

const Clients: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

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
      rating: 4.9
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
      rating: 4.7
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
      rating: 4.6
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
      rating: 4.8
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
      rating: 4.5
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'status-badge bg-green-100 text-green-800';
      case 'Pending Renewal': return 'status-badge bg-yellow-100 text-yellow-800';
      case 'Expired': return 'status-badge bg-red-100 text-red-800';
      case 'Suspended': return 'status-badge bg-gray-100 text-gray-800';
      default: return 'status-badge bg-gray-100 text-gray-800';
    }
  };

  const filteredClients = mockClients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate summary stats
  const totalRevenue = mockClients.reduce((sum, client) => {
    return sum + parseInt(client.value.replace(/[$,\/month]/g, ''));
  }, 0);
  const activeClients = mockClients.filter(c => c.status === 'Active').length;
  const totalGuards = mockClients.reduce((sum, client) => sum + client.guards, 0);
  const averageRating = mockClients.reduce((sum, client) => sum + client.rating, 0) / mockClients.length;

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Client Management</h2>
          <p className="text-gray-600">Manage client contracts and relationships</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Export Clients</Button>
          <Button variant="primary">Add New Client</Button>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{mockClients.length}</div>
            <p className="text-sm text-gray-600">Total Clients</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{activeClients}</div>
            <p className="text-sm text-gray-600">Active Contracts</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">${totalRevenue.toLocaleString()}</div>
            <p className="text-sm text-gray-600">Monthly Revenue</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600">{averageRating.toFixed(1)}</div>
            <p className="text-sm text-gray-600">Average Rating</p>
          </div>
        </Card>
      </div>

      {/* Search and Actions */}
      <Card className="mb-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search clients by name or contact..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500">
              <option value="">All Statuses</option>
              <option value="active">Active</option>
              <option value="pending">Pending Renewal</option>
              <option value="expired">Expired</option>
            </select>
            <Button variant="outline">Filter</Button>
          </div>
        </div>
      </Card>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredClients.map((client) => (
          <Card key={client.id}>
            <div className="space-y-4">
              {/* Header with Status */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
                  <p className="text-gray-600">{client.address}</p>
                </div>
                <span className={getStatusColor(client.status)}>
                  {client.status}
                </span>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Contact Information</h4>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Contact:</span> <span className="font-medium">{client.contact}</span></p>
                  <p><span className="text-gray-500">Email:</span> <span className="font-medium">{client.email}</span></p>
                  <p><span className="text-gray-500">Phone:</span> <span className="font-medium">{client.phone}</span></p>
                </div>
              </div>

              {/* Contract Details */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500 block">Contract Type:</span>
                  <span className="font-medium">{client.contract}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Monthly Value:</span>
                  <span className="font-medium text-green-600">{client.value}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Assigned Guards:</span>
                  <span className="font-medium">{client.guards} guards</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Client Rating:</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="font-medium">{client.rating}/5.0</span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-500 block">Start Date:</span>
                  <span className="font-medium">{client.startDate}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Next Payment:</span>
                  <span className="font-medium">{client.nextPayment}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 pt-2">
                <Button size="sm" variant="outline">View Details</Button>
                <Button size="sm" variant="outline">Edit Contract</Button>
                <Button size="sm" variant="outline">View Guards</Button>
                <Button size="sm" variant="primary">Contact</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Summary Footer */}
      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Client Portfolio Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-green-600">{totalGuards}</div>
            <div className="text-sm text-gray-600">Total Guards Deployed</div>
          </div>
          <div>
            <div className="text-lg font-bold text-blue-600">${(totalRevenue * 12).toLocaleString()}</div>
            <div className="text-sm text-gray-600">Annual Revenue Value</div>
          </div>
          <div>
            <div className="text-lg font-bold text-purple-600">{Math.round(totalRevenue / activeClients).toLocaleString()}</div>
            <div className="text-sm text-gray-600">Avg Monthly per Client</div>
          </div>
          <div>
            <div className="text-lg font-bold text-yellow-600">{Math.round(totalGuards / activeClients * 10) / 10}</div>
            <div className="text-sm text-gray-600">Avg Guards per Client</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
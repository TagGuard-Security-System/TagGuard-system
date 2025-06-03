import React, { useState } from 'react';
import { Card, Button } from '@security-guard/shared';

const Guards: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock guard data
  const mockGuards = [
    { 
      id: 1, 
      name: "John Smith", 
      license: "GRD-2024-001", 
      company: "SecureMax Ltd", 
      status: "Active", 
      registrationDate: "2024-01-15",
      expiryDate: "2025-01-15",
      certifications: ["Basic Security", "First Aid"],
      region: "North"
    },
    { 
      id: 2, 
      name: "Maria Garcia", 
      license: "GRD-2024-002", 
      company: "Guardian Security", 
      status: "Pending", 
      registrationDate: "2024-01-18",
      expiryDate: "2025-01-18",
      certifications: ["Basic Security"],
      region: "South"
    },
    { 
      id: 3, 
      name: "Ahmed Hassan", 
      license: "GRD-2024-003", 
      company: "Elite Protection", 
      status: "Active", 
      registrationDate: "2024-01-10",
      expiryDate: "2025-01-10",
      certifications: ["Basic Security", "Armed Guard", "First Aid"],
      region: "East"
    },
    { 
      id: 4, 
      name: "Sarah Johnson", 
      license: "GRD-2024-004", 
      company: "Night Watch Security", 
      status: "Flagged", 
      registrationDate: "2024-01-05",
      expiryDate: "2025-01-05",
      certifications: ["Basic Security"],
      region: "West"
    },
    { 
      id: 5, 
      name: "David Chen", 
      license: "GRD-2024-005", 
      company: "SecureMax Ltd", 
      status: "Inactive", 
      registrationDate: "2023-12-20",
      expiryDate: "2024-12-20",
      certifications: ["Basic Security", "Crowd Control"],
      region: "North"
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Guards', count: mockGuards.length },
    { id: 'active', label: 'Active', count: mockGuards.filter(g => g.status === 'Active').length },
    { id: 'pending', label: 'Pending Approval', count: mockGuards.filter(g => g.status === 'Pending').length },
    { id: 'flagged', label: 'Flagged', count: mockGuards.filter(g => g.status === 'Flagged').length },
    { id: 'expiring', label: 'Expiring Soon', count: 23 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'status-badge status-active';
      case 'Pending': return 'status-badge status-pending';
      case 'Flagged': return 'status-badge status-flagged';
      case 'Inactive': return 'status-badge status-inactive';
      default: return 'status-badge status-inactive';
    }
  };

  const filteredGuards = mockGuards.filter(guard => 
    guard.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guard.license.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guard.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Guard Management</h2>
        <p className="text-gray-600">Manage all registered security guards nationwide</p>
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
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </nav>
      </div>

      {/* Search and Filters */}
      <Card className="mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search guards by name, license, or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Companies</option>
              <option value="securemax">SecureMax Ltd</option>
              <option value="guardian">Guardian Security</option>
              <option value="elite">Elite Protection</option>
              <option value="nightwatch">Night Watch Security</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Regions</option>
              <option value="north">North Region</option>
              <option value="south">South Region</option>
              <option value="east">East Region</option>
              <option value="west">West Region</option>
            </select>
            <Button variant="outline">Export</Button>
          </div>
        </div>
      </Card>

      {/* Guards Table */}
      <Card title={`Guards List (${filteredGuards.length} results)`}>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Guard Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  License & Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status & Region
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Certifications
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dates
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredGuards.map((guard) => (
                <tr key={guard.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-700">
                          {guard.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{guard.name}</div>
                        <div className="text-sm text-gray-500">ID: {guard.id.toString().padStart(6, '0')}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-medium">{guard.license}</div>
                    <div className="text-sm text-gray-500">{guard.company}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={getStatusColor(guard.status)}>
                      {guard.status}
                    </span>
                    <div className="text-sm text-gray-500 mt-1">{guard.region} Region</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {guard.certifications.map((cert, index) => (
                        <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>Registered: {guard.registrationDate}</div>
                    <div>Expires: {guard.expiryDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex flex-col space-y-1">
                      <button className="text-blue-600 hover:text-blue-900 text-left">View Details</button>
                      {guard.status === 'Pending' && (
                        <>
                          <button className="text-green-600 hover:text-green-900 text-left">Approve</button>
                          <button className="text-red-600 hover:text-red-900 text-left">Reject</button>
                        </>
                      )}
                      {guard.status === 'Active' && (
                        <button className="text-orange-600 hover:text-orange-900 text-left">Flag</button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing {filteredGuards.length} of {mockGuards.length} guards
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="primary" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Guards;
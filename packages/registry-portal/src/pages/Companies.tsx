import React, { useState } from 'react';
import { Card, Button } from '@security-guard/shared';

const Companies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock company data
  const mockCompanies = [
    { 
      id: 1, 
      name: "SecureMax Ltd", 
      license: "SEC-2023-001", 
      guards: 245, 
      status: "Active", 
      lastAudit: "2024-01-15",
      compliance: 98,
      region: "National",
      established: "2018",
      contact: "admin@securemax.com"
    },
    { 
      id: 2, 
      name: "Guardian Security", 
      license: "SEC-2023-002", 
      guards: 189, 
      status: "Active", 
      lastAudit: "2024-01-10",
      compliance: 95,
      region: "North & East",
      established: "2015",
      contact: "info@guardiansec.com"
    },
    { 
      id: 3, 
      name: "Elite Protection", 
      license: "SEC-2023-003", 
      guards: 156, 
      status: "Under Review", 
      lastAudit: "2023-12-20",
      compliance: 87,
      region: "South",
      established: "2020",
      contact: "contact@eliteprotection.com"
    },
    { 
      id: 4, 
      name: "Night Watch Security", 
      license: "SEC-2023-004", 
      guards: 98, 
      status: "Active", 
      lastAudit: "2024-01-08",
      compliance: 92,
      region: "West",
      established: "2019",
      contact: "ops@nightwatch.com"
    },
    { 
      id: 5, 
      name: "Metro Safe Services", 
      license: "SEC-2023-005", 
      guards: 67, 
      status: "Suspended", 
      lastAudit: "2023-11-15",
      compliance: 73,
      region: "Central",
      established: "2021",
      contact: "info@metrosafe.com"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'status-badge status-active';
      case 'Under Review': return 'status-badge status-pending';
      case 'Suspended': return 'status-badge status-flagged';
      default: return 'status-badge status-inactive';
    }
  };

  const getComplianceColor = (compliance: number) => {
    if (compliance >= 95) return 'text-green-600 font-semibold';
    if (compliance >= 85) return 'text-yellow-600 font-semibold';
    return 'text-red-600 font-semibold';
  };

  const filteredCompanies = mockCompanies.filter(company => 
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.license.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate summary stats
  const totalGuards = mockCompanies.reduce((sum, company) => sum + company.guards, 0);
  const activeCompanies = mockCompanies.filter(c => c.status === 'Active').length;
  const underReview = mockCompanies.filter(c => c.status === 'Under Review').length;
  const suspended = mockCompanies.filter(c => c.status === 'Suspended').length;

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Security Companies</h2>
        <p className="text-gray-600">Manage all registered security companies and their compliance</p>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{mockCompanies.length}</div>
            <p className="text-sm text-gray-600">Total Companies</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{activeCompanies}</div>
            <p className="text-sm text-gray-600">Active Companies</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600">{underReview}</div>
            <p className="text-sm text-gray-600">Under Review</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600">{suspended}</div>
            <p className="text-sm text-gray-600">Suspended</p>
          </div>
        </Card>
      </div>

      {/* Search and Actions */}
      <Card className="mb-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search companies by name or license..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Export Report</Button>
            <Button variant="primary">Add Company</Button>
          </div>
        </div>
      </Card>

      {/* Companies Table */}
      <Card title={`Companies List (${filteredCompanies.length} results)`}>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  License & Region
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Guards & Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Compliance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Audit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCompanies.map((company) => (
                <tr key={company.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-700">
                          {company.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{company.name}</div>
                        <div className="text-sm text-gray-500">{company.contact}</div>
                        <div className="text-sm text-gray-500">Est. {company.established}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-medium">{company.license}</div>
                    <div className="text-sm text-gray-500">{company.region}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-medium">{company.guards} guards</div>
                    <span className={getStatusColor(company.status)}>
                      {company.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-16">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              company.compliance >= 95 ? 'bg-green-500' : 
                              company.compliance >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${company.compliance}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className={`ml-2 text-sm ${getComplianceColor(company.compliance)}`}>
                        {company.compliance}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {company.lastAudit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex flex-col space-y-1">
                      <button className="text-blue-600 hover:text-blue-900 text-left">View Details</button>
                      <button className="text-green-600 hover:text-green-900 text-left">Schedule Audit</button>
                      {company.status === 'Suspended' ? (
                        <button className="text-green-600 hover:text-green-900 text-left">Reactivate</button>
                      ) : (
                        <button className="text-red-600 hover:text-red-900 text-left">Suspend</button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Companies;
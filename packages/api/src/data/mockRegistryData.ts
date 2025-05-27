export const mockNationalStats = {
  totalGuards: 12547,
  activeGuards: 9823,
  pendingApprovals: 234,
  totalCompanies: 156,
  flaggedGuards: 23,
  incidentsToday: 7,
  complianceRate: 94.2,
  newRegistrations: 45
};

export const mockRegistryRecentActivity = [
  { id: 1, guard: "John Smith", company: "SecureMax Ltd", action: "Registration Approved", time: "2 hours ago", status: "approved" },
  { id: 2, guard: "Maria Garcia", company: "Guardian Security", action: "License Renewed", time: "4 hours ago", status: "approved" },
  { id: 3, guard: "Ahmed Hassan", company: "Elite Protection", action: "Pending Review", time: "6 hours ago", status: "pending" },
];

export const mockSystemAlerts = [
  { type: "Warning", message: "23 guards with expiring certificates within 30 days", priority: "high", time: "1 hour ago" },
  { type: "Info", message: "Monthly compliance report due in 3 days", priority: "medium", time: "2 hours ago" },
];

export const mockRegisteredGuards = [
  { id: 1, name: "John Smith", license: "GRD-2024-001", company: "SecureMax Ltd", status: "Active", registrationDate: "2024-01-15", expiryDate: "2025-01-15", certifications: ["Basic Security", "First Aid"], region: "North" },
  { id: 2, name: "Maria Garcia", license: "GRD-2024-002", company: "Guardian Security", status: "Pending", registrationDate: "2024-01-18", expiryDate: "2025-01-18", certifications: ["Basic Security"], region: "South" },
];

export const mockRegisteredCompanies = [
  { id: 1, name: "SecureMax Ltd", license: "SEC-2023-001", guards: 245, status: "Active", lastAudit: "2024-01-15", compliance: 98, region: "National", established: "2018", contact: "admin@securemax.com" },
  { id: 2, name: "Guardian Security", license: "SEC-2023-002", guards: 189, status: "Active", lastAudit: "2024-01-10", compliance: 95, region: "North & East", established: "2015", contact: "info@guardiansec.com" },
];

export const mockAuditLogs = [
    { id: 1, timestamp: "2024-01-20 14:30:15", action: "Guard Approved", user: "Registry Admin", target: "John Smith (GRD-2024-001)", details: "Guard license approved after background check verification", category: "Guard Management" },
    { id: 2, timestamp: "2024-01-20 14:15:22", action: "Company Audit Completed", user: "Compliance Officer", target: "SecureMax Ltd", details: "Annual compliance audit completed with 98% score", category: "Company Compliance" },
];
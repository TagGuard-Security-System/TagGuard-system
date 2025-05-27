export const mockCompanyStats = {
  companyName: "SecureMax Ltd",
  totalGuards: 245,
  onDutyGuards: 89,
  availableGuards: 67,
  totalClients: 34,
  activeContracts: 52,
  monthlyRevenue: 145750,
  todayIncidents: 3,
  missedCheckIns: 2,
  completedShifts: 156,
  averageRating: 4.7
};

export const mockOperationalAlerts = [
  { type: "high", title: "Missed Check-ins", message: "2 guards missed their scheduled check-ins", time: "15 min ago" },
  { type: "medium", title: "Shift Coverage", message: "3 shifts need coverage for tomorrow", time: "1 hour ago" },
];

export const mockCompanyRecentActivity = [
  { guard: "John Smith", action: "Started shift", location: "Downtown Mall", time: "30 min ago", status: "active" },
  { guard: "Maria Garcia", action: "Completed patrol", location: "Office Complex A", time: "1 hour ago", status: "completed" },
];

export const mockCompanyGuards = [
    { id: 1, name: "John Smith", license: "GRD-2024-001", status: "On Duty", assignment: "Downtown Mall", shift: "Day Shift (8AM-4PM)", phone: "+1-555-0123", rating: 4.8, experience: "3 years", certifications: ["Basic Security", "First Aid"], lastCheckIn: "2 hours ago" },
    { id: 2, name: "Maria Garcia", license: "GRD-2024-002", status: "Off Duty", assignment: "Office Complex A", shift: "Night Shift (10PM-6AM)", phone: "+1-555-0124", rating: 4.9, experience: "5 years", certifications: ["Basic Security", "Armed Guard"], lastCheckIn: "8 hours ago" },
];

export const mockCompanySchedule = [
    { date: 'Mon, Jan 22', dayOfWeek: 'Monday', shifts: [ { id: 1, guard: 'John Smith', site: 'Downtown Mall', time: '8:00 AM - 4:00 PM', status: 'confirmed', client: 'Metro Shopping' } ] },
    { date: 'Tue, Jan 23', dayOfWeek: 'Tuesday', shifts: [ { id: 4, guard: 'Sarah Johnson', site: 'Shopping Center', time: '6:00 AM - 2:00 PM', status: 'pending', client: 'Retail Plaza' } ] },
];

export const mockCompanyOperations = {
    recentIncidents: [ { id: 1, time: '14:30', guard: 'Ahmed Hassan', site: 'Warehouse District', client: 'Industrial Co', type: 'Equipment Issue', priority: 'Medium', description: 'RFID scanner malfunction reported during patrol', status: 'In Progress', reportedBy: 'Guard' } ],
    patrolRoutes: [ { id: 1, name: 'Mall Perimeter Check', site: 'Downtown Mall', checkpoints: 8, frequency: '30 min', status: 'Active', lastCompleted: '25 min ago', assignedGuard: 'John Smith', completionRate: '98%'} ],
};

export const mockCompanyClients = [
    { id: 1, name: 'Metro Shopping Mall', contact: 'Sarah Wilson', email: 'sarah@metromall.com', phone: '+1-555-0150', contract: 'Premium Security Package', guards: 3, status: 'Active', value: '$15,200/month', nextPayment: '2024-02-01', address: '123 Main St, Downtown', startDate: '2023-06-15', rating: 4.9 },
];
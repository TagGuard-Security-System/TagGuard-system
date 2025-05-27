export const mockClientDashboardData = {
  name: "Sarah Chen",
  properties: 2,
  activeGuards: 1,
  upcomingShifts: 3,
  totalSpent: 2450,
  avgRating: 4.8,
  lastIncident: "None in 30 days",
  nextPayment: "2024-02-01"
};

export const mockClientRecentActivity = [
  { id: 1, type: "Guard Check-in", message: "John Smith checked in at Downtown Apartment", time: "2 hours ago", status: "completed", guard: "John Smith" },
  { id: 2, type: "Patrol Completed", message: "Evening patrol completed successfully", time: "4 hours ago", status: "completed", guard: "John Smith" },
];

export const mockClientProperties = [
  { id: 1, name: "Downtown Apartment", address: "123 Main St, Apt 15B", type: "Residential", coverage: "Active", currentGuard: "John Smith", lastCheckIn: "2 hours ago", rating: 4.9 },
  { id: 2, name: "Office Building", address: "456 Business Ave, Suite 200", type: "Commercial", coverage: "Scheduled", currentGuard: "Maria Garcia", lastCheckIn: "Tomorrow 9:00 AM", rating: 4.7 }
];

export const mockClientUpcomingServices = [
  { id: 1, property: "Downtown Apartment", guard: "John Smith", date: "Today", time: "6:00 PM - 10:00 PM", type: "Evening Security" },
  { id: 2, property: "Office Building", guard: "Maria Garcia", date: "Tomorrow", time: "9:00 AM - 5:00 PM", type: "Business Hours" },
];

export const mockClientGuards = [
    { id: 1, name: "John Smith", license: "GRD-2024-001", company: "SecureMax Ltd", status: "On Duty", assignment: "Downtown Apartment", shift: "6:00 PM - 10:00 PM", rating: 4.9, experience: "5 years", phone: "+1-555-0123", specialties: ["Residential Security", "Night Patrol"], lastCheckIn: "2 hours ago", location: "Building Entrance", totalHours: 48, startDate: "2024-01-15"},
];

export const mockClientMonitoring = {
    selectedPropertyData: { id: 'downtown', name: 'Downtown Apartment', address: '123 Main St, Apt 15B', status: 'Secured', currentGuard: 'John Smith', lastActivity: '15 minutes ago', todayEvents: 3, securityLevel: 'Standard' },
    recentEvents: [ { id: 1, time: '14:30', type: 'Guard Check-in', description: 'John Smith checked in at main entrance', location: 'Building Entrance', priority: 'normal', status: 'completed'} ],
    checkpoints: [ { id: 1, name: 'Main Entrance', lastCheck: '15 min ago', status: 'secure', guard: 'John Smith' } ],
};
import { Request, Response } from 'express';
import {
  mockClientDashboardData,
  mockClientRecentActivity,
  mockClientProperties,
  mockClientUpcomingServices,
  mockClientGuards,
  mockClientMonitoring
} from '../data/mockClientData';

export const getClientDashboard = (req: Request, res: Response) => {
  res.json({
    clientData: mockClientDashboardData,
    recentActivity: mockClientRecentActivity,
    myProperties: mockClientProperties,
    upcomingServices: mockClientUpcomingServices,
  });
};

export const getClientBookings = (req: Request, res: Response) => {
    res.json({
        myProperties: mockClientProperties,
        serviceTypes: [ // Align with Booking.tsx
            { id: 'basic', name: 'Basic Security', description: 'Standard patrol and monitoring', price: 25, features: ['Regular patrols', 'Basic monitoring', 'Incident reporting']},
            { id: 'premium', name: 'Premium Security', description: 'Enhanced security with additional features', price: 40, features: ['Frequent patrols', 'Real-time monitoring', 'Incident reporting', 'Emergency response']},
        ],
        availableGuards: [ // Align with Booking.tsx
            { id: 1, name: "John Smith", rating: 4.9, experience: "5 years", specialties: ["Residential", "Armed"], availability: "Available", hourlyRate: 25 },
        ]
    });
};

export const getClientAssignedGuards = (req: Request, res: Response) => {
    res.json(mockClientGuards);
};

export const getClientMonitoringData = (req: Request, res: Response) => {
    res.json({
        properties: mockClientProperties, // For selector
        selectedPropertyData: mockClientMonitoring.selectedPropertyData,
        recentEvents: mockClientMonitoring.recentEvents,
        checkpoints: mockClientMonitoring.checkpoints,
        liveStats: { responseTime: '2.3 min', checksToday: 24, alertsResolved: 3, uptime: '99.8%' } // Align with Monitoring.tsx
    });
};
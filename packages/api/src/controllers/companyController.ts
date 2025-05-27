import { Request, Response } from 'express';
import {
  mockCompanyStats,
  mockOperationalAlerts,
  mockCompanyRecentActivity,
  mockCompanyGuards,
  mockCompanySchedule,
  mockCompanyOperations,
  mockCompanyClients
} from '../data/mockCompanyData';

export const getCompanyDashboard = (req: Request, res: Response) => {
  res.json({
    companyStats: mockCompanyStats,
    operationalAlerts: mockOperationalAlerts,
    recentActivity: mockCompanyRecentActivity,
  });
};

export const getCompanyGuards = (req: Request, res: Response) => {
  res.json(mockCompanyGuards);
};

export const getCompanySchedule = (req: Request, res: Response) => {
    res.json({
        mockSchedule: mockCompanySchedule,
        weekStats: { // Example stats, align with Scheduling.tsx
            totalShifts: 32,
            confirmedShifts: 24,
            pendingShifts: 4,
            openShifts: 4,
            availableGuards: 12,
            onDutyNow: 5,
            trainingGuards: 2,
            onLeave: 1
          }
    });
};

export const getCompanyOperations = (req: Request, res: Response) => {
    res.json({
        recentIncidents: mockCompanyOperations.recentIncidents,
        patrolRoutes: mockCompanyOperations.patrolRoutes,
        operationalStats: { // Example stats, align with Operations.tsx
            activePatrols: 8,
            todayIncidents: 4,
            checkInsToday: 247,
            responseTime: 4.2,
            guardsOnDuty: 6,
            sitesMonitored: 8,
            alertsResolved: 15,
            clientSatisfaction: 4.7
        }
    });
};

export const getCompanyClients = (req: Request, res: Response) => {
    res.json(mockCompanyClients);
};
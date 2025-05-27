import { Request, Response } from 'express';
import {
  mockNationalStats,
  mockRegistryRecentActivity,
  mockSystemAlerts,
  mockRegisteredGuards,
  mockRegisteredCompanies,
  mockAuditLogs,
} from '../data/mockRegistryData';

export const getRegistryDashboard = (req: Request, res: Response) => {
  res.json({
    nationalStats: mockNationalStats,
    recentActivity: mockRegistryRecentActivity,
    systemAlerts: mockSystemAlerts,
  });
};

export const getRegisteredGuards = (req: Request, res: Response) => {
  res.json(mockRegisteredGuards);
};

export const getRegisteredCompanies = (req: Request, res: Response) => {
  res.json(mockRegisteredCompanies);
};

export const getAuditLogs = (req: Request, res: Response) => {
  res.json(mockAuditLogs);
};
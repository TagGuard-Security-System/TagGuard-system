import { Router } from 'express';
import {
  getRegistryDashboard,
  getRegisteredGuards,
  getRegisteredCompanies,
  getAuditLogs,
} from '../controllers/registryController';

const router = Router();

router.get('/dashboard', getRegistryDashboard);
router.get('/guards', getRegisteredGuards);
router.get('/companies', getRegisteredCompanies);
router.get('/audit', getAuditLogs);
// Add more routes for regulations, reports, admin as needed

export default router;
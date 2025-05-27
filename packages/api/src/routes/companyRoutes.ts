import { Router } from 'express';
import {
  getCompanyDashboard,
  getCompanyGuards,
  getCompanySchedule,
  getCompanyOperations,
  getCompanyClients
} from '../controllers/companyController';

const router = Router();

router.get('/dashboard', getCompanyDashboard);
router.get('/guards', getCompanyGuards);
router.get('/scheduling', getCompanySchedule);
router.get('/operations', getCompanyOperations);
router.get('/clients', getCompanyClients);
// Add more routes for reports, settings as needed

export default router;
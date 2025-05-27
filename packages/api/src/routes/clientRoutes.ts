import { Router } from 'express';
import {
  getClientDashboard,
  getClientBookings,
  getClientAssignedGuards,
  getClientMonitoringData
} from '../controllers/clientController';

const router = Router();

router.get('/dashboard', getClientDashboard);
router.get('/booking', getClientBookings);
router.get('/guards', getClientAssignedGuards);
router.get('/monitoring', getClientMonitoringData);
// Add more routes for incidents, billing, feedback, account as needed

export default router;
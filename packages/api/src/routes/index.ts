import { Router } from 'express';
import registryRoutes from './registryRoutes';
import companyRoutes from './companyRoutes';
import clientRoutes from './clientRoutes';

const router = Router();

router.use('/registry', registryRoutes);
router.use('/company', companyRoutes);
router.use('/client', clientRoutes);

router.get('/', (req, res) => {
  res.send('Security Guard Management System API is running!');
});

export default router;
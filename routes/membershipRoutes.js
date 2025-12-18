import express from 'express';
import {
  getPlans,
  purchasePlan,
  getPendingApprovals,
  approveMembership,
  rejectMembership,
  getCurrentMembership
} from '../controllers/membershipController.js';
import { protect, adminOnly, memberOnly } from '../middleware/auth.js';

const router = express.Router();

router.use(protect);

router.get('/plans', getPlans);
router.get('/current', getCurrentMembership);
router.post('/purchase', memberOnly, purchasePlan);
router.get('/pending', adminOnly, getPendingApprovals);
router.put('/approve/:id', adminOnly, approveMembership);
router.put('/reject/:id', adminOnly, rejectMembership);

export default router;
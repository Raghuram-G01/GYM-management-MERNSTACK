import express from 'express';
import {
  getMyWorkoutPlans,
  logWorkout,
  getMyProgress
} from '../controllers/memberController.js';
import { getMemberDashboardStats } from '../controllers/memberDashboardController.js';
import { protect, memberOnly } from '../middleware/auth.js';

const router = express.Router();

// All routes are protected and member only
router.use(protect, memberOnly);

router.get('/dashboard/stats', getMemberDashboardStats);
router.get('/workout-plans', getMyWorkoutPlans);
router.post('/log-workout', logWorkout);
router.get('/progress', getMyProgress);

export default router;
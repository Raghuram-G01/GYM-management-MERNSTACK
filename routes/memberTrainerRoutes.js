import express from 'express';
import {
  getAssignedMembers,
  getAllMembers,
  assignWorkoutPlan,
  getMemberWorkoutPlans,
  getMemberProgress,
  addProgressEntry,
  updateWorkoutPlan,
  deleteWorkoutPlan
} from '../controllers/memberTrainerController.js';
import { protect, trainerOnly } from '../middleware/auth.js';

const router = express.Router();

// All routes are protected
router.use(protect);

router.get('/members', getAssignedMembers);
router.get('/all-members', getAllMembers);
router.post('/workout-plan', assignWorkoutPlan);
router.get('/workout-plans/:memberId', getMemberWorkoutPlans);
router.put('/workout-plan/:id', updateWorkoutPlan);
router.delete('/workout-plan/:id', deleteWorkoutPlan);
router.get('/progress/:memberId', getMemberProgress);
router.post('/progress', addProgressEntry);

export default router;
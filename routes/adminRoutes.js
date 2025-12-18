import express from 'express';
import {
  assignTrainerToMember,
  getMembersWithTrainers,
  getAllUsers,
  updateUser,
  deleteUser,
  getAllPayments,
  createPayment
} from '../controllers/adminController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router();

// All routes are protected and admin only
router.use(protect, adminOnly);

router.put('/assign-trainer', assignTrainerToMember);
router.get('/members-trainers', getMembersWithTrainers);
router.get('/users', getAllUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.get('/payments', getAllPayments);
router.post('/payments', createPayment);

export default router;
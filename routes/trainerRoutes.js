import express from 'express';
import {
  createTrainer,
  getAllTrainers,
  getTrainer,
  updateTrainer,
  deleteTrainer,
  loginTrainer
} from '../controllers/trainerController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/login', loginTrainer);

// Protected routes (Admin only)
router.post('/', protect, adminOnly, createTrainer);
router.get('/', protect, adminOnly, getAllTrainers);
router.get('/:id', protect, getTrainer);
router.put('/:id', protect, adminOnly, updateTrainer);
router.delete('/:id', protect, adminOnly, deleteTrainer);

export default router;
import express from 'express';
import { registerUser, loginUser, getMe, createDefaultAdmin } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);
router.post('/create-admin', createDefaultAdmin);

export default router;


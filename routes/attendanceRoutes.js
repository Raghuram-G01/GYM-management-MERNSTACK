import express from 'express';
import {
  markAttendance,
  getUserAttendance,
  getMemberAttendance,
  getTrainerMembers,
  markMemberAttendance,
  getTrainerAttendanceOverview
} from '../controllers/attendanceController.js';
import { protect, activeMemberOnly } from '../middleware/auth.js';

const router = express.Router();

router.use(protect);
router.use(activeMemberOnly); // Require active membership for attendance

router.post('/', markAttendance);
router.post('/mark-member', markMemberAttendance);
router.get('/user/:userId', getUserAttendance);
router.get('/member/:memberId', getMemberAttendance);
router.get('/trainer/members', getTrainerMembers);
router.get('/trainer/overview', getTrainerAttendanceOverview);

export default router;
